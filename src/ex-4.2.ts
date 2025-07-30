// function processData(data: unknown): string {
//   return data.toUpperCase(); //call .toupper type unknow? 
// }+
function processData(data: unknown): string {
  // check dt * found str > upper
  if (typeof data === "string") {
    return data.toUpperCase();
  } else if (typeof data === "number") {
    return "Not a string";
  } else {
    return "Not a string";
  }
}



console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"

// Error ที่เจอคือ src/ex-4.2.ts:2:15 - error TS2339: Property 'toUpperCase' does not exist on type 'unknown'.
// 2   return data.toUpperCase();
