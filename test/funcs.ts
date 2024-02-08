// CHANGE THE FUNCTIONS BELOW INTO ARROW FUNCTION
let add = (first: number, second: number) => first + second;

let maxNum: number;

// RETURN MAX NUMBER
let max = (arr: number[]) => {
  maxNum = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
};
console.log(add(1, 2));
console.log(max([1, 2, 3, 4, 5, 6]));
