function processData(data) {
    return data.toUpperCase();
}
console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"
// Error ที่เจอคือ
