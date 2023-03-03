"use strict";
// class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`${this.name} : hello!`);
    }
}
const chance = new Person(`chance`, 28);
console.log(chance.name);
console.log(chance.age);

// getter setter
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age);

class Article {
    static publisher = "Dream Coding";
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log("안녕", Article.publisher);
Article.printPublisher();