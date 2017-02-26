// Paste the sub's stylesheet into the input string. I'm too lazy to write a
// function to grab the current version.

const input = /* paste below this line */ ` 



` // paste above this line

function findFacesFromInput (input) {
    // get the things
    const matches = input.match(/="#[a-z0-9-_]+(?="])/gi)

    const faceCodes = matches.map(match => match.substr(3))

    return removeDuplicates(faceCodes)
}

function removeDuplicates (arr) {
    return arr.filter((e, i) => arr.indexOf(e) == i)
}

// console.log('[')
const faces = findFacesFromInput(input)
console.log(JSON.stringify(faces, null, 4))
