const calculateMode = (list) => {
    if (list.length === 1) {
        return list[0];
    } else {
        let objCount = countItems(list);
        let mostFrequent = findFrequent(objCount);
        console.log(mostFrequent)
        return mostFrequent
    }
}

function countItems(list) {
    let obj = {};

    for (let i = 0; i < list.length; i++) {
        list[i] in obj ? obj[list[i]]++ : obj[list[i]] = 1;
    }
    return obj;
}

function findFrequent(obj) {
    answer = [];
    count = 0;
    for (const[key, value] of Object.entries(obj)) {
        if (value == count) {
            answer.push(parseFloat(key))
        } else if (value > count) {
            answer = []
            count = value
            isNaN(parseFloat(key)) ? answer.push(key) : answer.push(parseFloat(key))
        }
    }
    return answer
}
module.exports = {calculateMode}