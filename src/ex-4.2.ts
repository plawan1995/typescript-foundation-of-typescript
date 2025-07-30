function processData(data: unknown): string {
  //เกิด Error
  // return data.toUpperCase();

  //ส่วนที่แก้ไข
  if (typeof data === "string") {
    return data.toUpperCase(); 
  }

  if (typeof data === "number") {
    return "Not a string";
  }

  return "Invalid input type";
}

console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"

// Error ที่เจอคือ การ return data โดยไม่ตรวจสอบก่อน เพราะ data มีการกำหนด type unknow
// ซึ่ง unknow จำเป็นต้องมีการตรวจสอบชนิดข้อมูลก่อนใช้งาน
// ดังนั้นการแก้ไขจึงต้องเพิ่มการตรวจสอบชนิดข้อมูลก่อน return
