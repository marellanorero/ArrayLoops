var people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

//your code below
let newArray = [];
function deletePerson(element){
    people.filter((element) => element === people[element])
    return newArray
}


console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
