function processData(data) {
    if (typeof data === "string") {
        return data.toUpperCase(); // ใช้ได้ปลอดภัย
    }
    else {
        return "Not a string"; // รองรับกรณีที่ไม่ใช่ string 
    }
}
console.log(processData("hello")); // "HELLO"
console.log(processData(123)); // "Not a string"
