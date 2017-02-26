import praw
import re
import json
import time

class BreakFromLoopException (Exception): pass

# Load config from file
try:
    with open("config.json") as data_file:
        config = json.load(data_file)
except Exception:
    print("Config file couldn't be loaded, you should feel bad")
    exit(1)

# create reddit instance and get the sub we want
reddit = praw.Reddit(
    client_id=config["client_id"],
    client_secret=config["client_secret"],
    user_agent=config.get("user_agent", "Comment face usage checker run by /u/{}".format(config["username"])),
    username=config["username"],
    password=config["password"]
)
subreddit = reddit.subreddit(config["subreddit"])

# Config - all times in seconds
# Search all posts up to this time
initial_time = config.get("start_timestamp", int(time.time())) # The time the program goes
# Number of seconds before this date to look through
back_amount = config.get("days_back", 30) * 24 * 60 * 6
# The amount of seconds to step each search toward the target by
interval = 1*24*60*60
# Where to put the results and store state
result_filename = config.get("results_file", "results.json")


# Other things
target = initial_time - back_amount
timestamp = initial_time
assert initial_time > target, "is this a negative timestamp, the hell bro"

# Stat variables wheee
face_amounts = {}
failed_submissions = []
submission_count = 0

try:
    # Pull last stats and pick up where left off
    with open(result_filename) as data_file:
        data = json.load(data_file)
        face_amounts = data["face_amounts"]
        target = data["info"]["target"]
        timestamp = data["info"]["timestamp"]
        interval = data["info"]["interval"]
        failed_submissions = data["info"]["failed_submissions"]
        submission_count = data["info"]["submission_count"]
        print("Loaded a bunch of stuff from the last session.")
except Exception:
    # Don't load anything, just start with the values we already have
    pass


# The method that dumps the stuff to the file
def dump_stats():
    # Add in some meta variables, just in case
    print("[RESULTS] Dumping the results to", result_filename)
    with open(result_filename, 'w') as fp:
        json.dump({
            "face_amounts": face_amounts,
            # Yes, we're adding more info here
            "info": {
                "initial_time": initial_time,
                "timestamp": timestamp,
                "target": target,
                "back_amount": back_amount,
                "interval": interval,
                "submission_count": submission_count,
                "failed_submissions": failed_submissions
            }
        }, fp)

try:
    # Search the sub repeatedly, getting comments from timestamp ranges that
    # work backward until a target is reached
    while True:
        print("[SEARCH] Executing a search between", timestamp, "and", timestamp + interval)

        timestamp -= interval

        for submission in subreddit.search(
                "timestamp:{}..{}".format(timestamp, timestamp + interval),
                sort='new',
                limit=None):
            submission_count += 1
            print("[SUBMISSION] Submission", submission_count, "from", submission.created, "with id", submission.id)

            if submission.created < target:
                print("[WOOHOO] This submission is from earlier than the target. Breaking now.")
                raise BreakFromLoopException

            try:
                comments = submission.comments
                comments.replace_more(limit=None)

                comment_count = 0
                for comment in comments.list():
                    comment_count = comment_count + 1
                    match = re.search(r'\]\(#([a-zA-Z0-9-_]{2,})', comment.body)
                    face_name = "*dust*" # Default
                    if match:
                        face_name = match.group(1)
                        # .get uses the second arg as a default for undefined keys
                        face_amounts[face_name] = face_amounts.get(face_name, 0) + 1

                    print("[COMMENT]", comment_count, face_name)

            except Exception:
                print("[ERROR ERROR ERROR] Couldn't process this link. Adding its ID to the list of bad things.")
                failed_submissions.append(submission.id)

        # Because things could crash at any time, dump the stats after every search
        dump_stats()

except BreakFromLoopException:
    # We're donw now!
    dump_stats()
