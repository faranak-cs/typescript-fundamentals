function add(first, second) {
    return first + second;
}
var maxNum;
// RETURN MAX NUMBER
function max(arr) {
    maxNum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    return maxNum;
}
console.log(add(1, 2));
console.log(max([1, 2, 3, 4, 5, 6]));
