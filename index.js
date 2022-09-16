// code your solution here
function superbowlWin(records) {
    for (let record of records) {
        if (record.result === "W") {
            return record.year
        }
    }
}

//array.find(superbowlWin);