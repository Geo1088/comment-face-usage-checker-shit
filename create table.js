const data = require('./results.json').face_amounts
const faceList = require('./face list.json')

function validateKeys (oldObject, validKeys, defaultValue = undefined) {
    // clone thing
    let object = new Object(oldObject)
    // make sure all keys are present that should be
    for (let key of validKeys) {
        if (object[key] === undefined) {
            object[key] = defaultValue
        }
    }
    // remove any keys that are present which should not be
    for (let key in object) {
        if (validKeys.indexOf(key) < 0) {
            delete object[key]
        }
    }
    // boom
    return object
}

function escapeMD (input) {
    return input.toString().replace(
        /[\\#*_~|]/g,
        '\\$&'
    )
}

function table (ogData, headers = ['order', 'key', 'value']) {
    // validate our stuff before starting the table
    let data = validateKeys(ogData, faceList, 0)
    // also escape the stuff
    headers = headers.map(t => escapeMD(t))
    // First row: headers
    let md = headers.map(text => text.replace(/\|/g, '')).join('|')
    // Second row: divider
    md += '\n-|-|-'
    // Rest: actual data
    let index = 0
    for (let key in data) {
        md += `\n${index}|${escapeMD(key)}|${escapeMD(data[key])}`
        index++
    }
    // done
    return md
}

console.log(table(data, ['#', 'Face', 'Uses']))
