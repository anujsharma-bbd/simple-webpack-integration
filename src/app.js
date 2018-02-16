import { Person, myName } from "./modules/person";
console.log(Person, myName);
const p = new Person("anuj", 'config');
console.log(p.getFullName());

import { myClass } from "./modules/firstClass";

const classs = new myClass("kamal", 12);

console.log(classs.getMyName());