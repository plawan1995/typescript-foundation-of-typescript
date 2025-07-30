type User = {
  id: string;
  name: string;
  age?: number;
};

function isAdult(user: User): boolean {
  //ส่วนที่แก้ไข
  if (user.age === undefined) {
    return false;
  }
  return user.age >= 18;
}

const result = isAdult({ id: "u01", name: "John" });
console.log(result); // ควรได้ false

// Error ที่เจอคือ age กำหนดให้อาจจะไม่มีค่า(undefined)ก็ได้
// ในกรณีที่ age เป็น undefined จะทำให้เกิดการเปรียบเทียบ undefined กับ number (undefined >= 18)
// TS จึงมองว่าไม่ปลอดภัย ทำให้เกิด error
// การแก้ไขคือเพิ่มการเปรียบเทียบ เพื่อตรวจสอบ age ก่อนว่าเป็น undefined หรือไม่
