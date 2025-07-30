type User = {
  id: string;
  name: string;
  age?: number; // ? maybe undefined
};

function isAdult(user: User): boolean {
  // ถ้าไม่มี age คืน false
  if (user.age === undefined) {
    return false; 
  }
  return user.age >= 18;
}

const result = isAdult({ id: "u01", name: "John" });
console.log(result); // ควรได้ false

// Error ที่เจอคือ error TS18048: 'user.age' is possibly 'undefined'.
