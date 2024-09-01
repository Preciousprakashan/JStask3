//Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not.
{
    let arr = [10, 365, 723, 6, 63];


    let firstElement = arr[0];

    function prime(firstElement) {
        if (firstElement <= 1)
            return `${firstElement} is not a prime number`;
        for (let i = 2; i < firstElement; i++) {
            if (firstElement % i == 0)
                return `${firstElement} is not a prime number`;
        }
        return `${firstElement} is a prime number`;
    }

    console.log(prime(firstElement));
}
console.log('\n')