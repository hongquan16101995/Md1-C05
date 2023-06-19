let array = [5,10]
function change2(arr) {
    let temp = arr[0]
    arr[0] = arr[1]
    arr[1] = temp
}
change2(array)
console.log("arr0 = " + array[0] + "; " +
    "arr1 = " + array[1])
//5 - 10
//10 - 5
