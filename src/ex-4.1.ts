type User = {
  id: string;
  name: string;
  age?: number;
};

function isAdult(user: User): boolean {
  return user.age !== undefined && user.age >= 18; //❌ ปัญหาที่เกิดขึ้น return user.age >= 18;
}

const result = isAdult({ id: "u01", name: "John" });
console.log(result); // ควรได้ false

// Error ที่เจอคือ
//❌ ปัญหาที่เกิดขึ้น return user.age >= 18; เอาค่า undefined มาเปรียบเทียบกับ Number
//TypeScript มองว่ามันไม่ปลอดภัย