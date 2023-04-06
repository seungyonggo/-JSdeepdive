const obj = {};
const parent = { x: 1 };
Object.getPrototypeOf(obj);
Object.getPrototypeOf(obj, parent);
console.log(obj.x);
