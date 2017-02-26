# random shit i use to check comment face usage

half is in py and half in js, sue me

## usage

### get usage data

```sh
mv "config sample.json" "config.json"
vi "config.json"
# fill out stuff
python -3 "comment face stat calculator.py"
```

### get list of faces

```sh
# go to reddit.com/r/<sub>/about/stylesheet
# copy the stylesheet into the text block at the top of `get face list.js`
node "get face list.js" > "face list.json"
```

### get table of usage stats

```sh
# run the two things above
node "create table.js" > "table.md"
```
