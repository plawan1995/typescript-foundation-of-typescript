function sumEvenNumbers(numbers) {
    //Start Coding Here
    return numbers
        .filter(function (n) { return n % 2 === 0; })
        .reduce(function (sum, n) { return sum + n; }, 0);
}
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
console.log(sumEvenNumbers([11, 13, 15])); // 0
