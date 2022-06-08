const arr = [3210, 12, 3213, 12, 332, 332, 11]

function getUniqueValues(arr) {
    if(!arr) return;

    let s = new Set(arr)

    return s;
}

console.log(getUniqueValues(arr))