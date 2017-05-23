import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {

});








// Example Below of Spread Operator and Operator Shorthand
// ---- -- ----
// let house = {
//   bedrooms: 2,
//   bathrooms: 1.5
// };
// let yearBuilt = 1995
//
// let newHouse = {
//   ...house,
//   bedrooms: 3,
//   yearBuilt,
//   flooring: 'Carpet'
// };
// console.log(newHouse);


// Object Spread Operator
// --- ---- ---
// let user = {
//   name: 'Andrew',
//   location: 'Philadelphia'
// };
//
// let person = {
//   ...user,
//   age: 25
// };
//
// console.log(person);



// Learn how to create Classes in Javascript below
// ------- ------ -------
// class Person {
//   constructor(name = 'Anonymous', age = 0) {
//     this.name = name;
//     this.age = age;
//   }
//   getGreeting() {
//     return `Hi! I am ${this.name}.`;
//   }
//   getPersonDescription() {
//     return `${this.name} is ${this.age} year(s) old.`
//   }
// }
//
// class Employee extends Person {
//   constructor(name, age, title) {
//     super(name, age);
//     this.title = title;
//   }
//   getGreeting() {
//     if (this.title) {
//       return `Hi I'm ${this.name}. I work as a ${this.title}.`;
//     } else {
//       return super.getGreeting();
//     }
//   }
//   hasJob() {
//     return !!this.title;
//   }
// }
//
// class Programmer extends Person {
//   constructor(name, age, preferredLanguage = 'assembly') {
//     super(name, age);
//     this.preferredLanguage = preferredLanguage;
//   }
//   getGreeting() {
//     return `Hi! I am ${this.name}. I am a ${this.preferredLanguage} developer.`
//   }
// }
//
// let userOne = new Programmer('Joe', 15, 'Javascript');
// console.log(userOne.getGreeting());
