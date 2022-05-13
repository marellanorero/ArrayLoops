var people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

//your code below
let newArray = people.filter((element) => element === people[element])
console.log(newArray);

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
