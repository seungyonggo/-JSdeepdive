const anotherPerson = {
  name: "Kim",
};

anotherPerson.getName = person.getName;

console.log(anotherPerson.getName());

const getName = person.getName;
console.log(getName());
