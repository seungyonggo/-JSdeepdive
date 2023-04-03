const person = {};
Object.defineProperty(person, "firstName", {
  value: "Ungmo",
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(person, "lastName", {
  value: "Lee",
});

let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
console.log("firstName", descriptor);

descriptor = Object.getOwnPropertyDescriptor(person, "lastName");
console.log("lastName", descriptor);

console.log(Object.keys(person));

person.lastName = "Kim";
delete person.lastName;

descriptor = Object.getOwnPropertyDescriptor(person, "lastName");
console.log("lastName", descriptor);

Object.defineProperty(person, "fullName", {
  get() {
    return `${this.firstName}, ${this.lastName}`;
  },
  set(name) {
    [this.firstNamem, this.lastName] = name.split("");
  },
  enumerable: true,
  configurable: true,
});
descriptor = Object.getOwnPropertyDescriptor(person, "fullName");
console.log("fullName", descriptor);

person.fullName = "Heegun Lee";
console.log(person);
