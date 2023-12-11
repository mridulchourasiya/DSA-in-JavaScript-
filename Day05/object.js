// singleton
// object.create

//object literals
const mySym = Symbol("key1");
const JsUser = {
  name: "Mridul",
  age: "28",
  // remove array column in proposition after result
  mySym: "myKey1",
  location: "jaipur",
  email: "hitesh@gmail",
  isLggdin: false,
  lastLogiDays: ["Monday", "Suterday"],
};
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

//how to change email id in function
JsUser.email = "chatgpt.gmail@123";
// Object.freeze(JsUser);
// changes for a properzition
JsUser.email = "hitesh@13133microsoft";
//console.log(JsUser);

JsUser.greeting = function () {
  console.log("hello js user");
};

JsUser.greetingTwo = function () {
  console.log(`Hello JS user , ${this.name}`);
};
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

