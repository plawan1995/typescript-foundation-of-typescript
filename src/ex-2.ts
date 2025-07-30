function sumEvenNumbers(numbers: number[]): number {
  //Start Coding Here
  return numbers
    .filter(n => n % 2 === 0)
    .reduce((sum, n) => sum + n, 0);
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
console.log(sumEvenNumbers([11, 13, 15])); // 0
