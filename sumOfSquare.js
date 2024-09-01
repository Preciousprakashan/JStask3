// Write a JavaScript program to find the sum of squares of the elements of an array.

{
    let arr = [1, 2, 3, 4, 5, 6];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i];
    }
    console.log('sum of squares is '+ sum);
}
console.log('\n');