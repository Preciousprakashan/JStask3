// Write a JavaScript program to find the most frequent item of an array

{
    let arr = [1, 1, 3, 3, 4, 4, 4, 3, 3];
    let maxCount = 0;
    let maxItem = '';
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j])
                count++;
        }
        if (count > maxCount) {
            maxCount = count;
            maxItem = arr[i];
        }
    }
    console.log('most frequent item is '+ maxItem);
}