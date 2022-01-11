
// You should implement your task here.

module.exports = function towelSort (arr) {
if (arr == undefined) return []
  let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            arr2 = arr2.concat(arr[i])
        }
        else {
            arr2 = arr2.concat(arr[i].reverse())
        }
    }
    return arr2
}
