function sumEvenNumbers(numbers) {
    //Start Coding Here
    return numbers
        .filter(function (num) { return num % 2 === 0; })
        .reduce(function (sum, num) { return sum + num; }, 0);
}
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
console.log(sumEvenNumbers([11, 13, 15])); // 0
