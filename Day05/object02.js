// const tinderUser = new Object()

const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;
//console.log(tinderUser);

// non sigleton user
const regularUser = {
  email: "mridulchourasia@1231",
  fullname: {
    userfullname: {
      fristname: "hitesh",
      lastname: "choudhary",
    },
  },
};
// console.log(regularUser.fullname);

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "b",
  4: "c",
};
const obj4 = {
  5: "r",
  6: "o",
};
//const obj3 = {obj1, obj2}
// object assign sourace

//const obj3 = Object.assign({},obj1, obj2,obj4)

//console.log(obj3);
// sprade oprator
const obj3 = { ...obj1, ...obj2 };
const users = [
  {
    id: 1,
    email: "mridul@1232",
  },
  {
    id: 2,
    email: "core2311",
  },
];
users[1].email;
console.log(tinderUser);
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// has  own property defination in function
console.log(tinderUser.hasOwnProperty("isLogged"));
