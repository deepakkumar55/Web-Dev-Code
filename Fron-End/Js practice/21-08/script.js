/*
// 1. Write a JS code to print numbers from 1 to 10

for (var i = 1; i < 11; i++) {
    console.log(i);
}




// 2. Write a JS code to print a 2D array
var arr = [[1, 2],
           [3, 4],
           [5, 6],[8,5],[8,9]];
for (var i = 0; i < arr.length; i++){
    for (var j = 0; j < arr[0].length; j++){
        console.log(arr[i][j]);
    }
}


// 3. Write a JS code to print Even numbers in given array

var arr1 = [13, 23, 12, 45, 22, 48, 66, 100]
for (var i = 0; i < arr1.length; i++){
    if (arr1[i] % 2== 0) {
        console.log(arr1[i]);
    }
}

// 4. Write a JS code to print odd numbers in given array

var arr2 = [13, 23, 12, 45, 22, 48, 66, 100]
for (var i = 0; i < arr2.length; i++){
    if (arr2[i] % 2!= 0) {
        console.log(arr2[i]);
    }
}




// 5. Write a JS code to delete all occurrence of element in given array

function deleteElement(arr, ele) {
  for (var i=0;i<arr.length;i++){
    if(arr[i]==ele){
      arr.splice(i,1); //Delete element from array
    }
  }
  return arr;
}
var arr = [23,56,4,78,5,63,45,210,56];
arr = deleteElement(arr, 56)

console.log(arr); //[23, 4, 78, 5, 63, 45, 210]

*/