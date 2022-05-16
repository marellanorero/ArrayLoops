let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];

let param = people.birthDate;

function age(date){
	let  today = new Date();
	let birth= new Date(date);
	let resage= today.getFullYear() - birth.getFullYear();
	let m = today.getMonth() - birth.getMonth();

	if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        resage--;
    }

    return resage;
}

let simplifier = function(person){
	return person.name + age(param);
};

console.log(people.map(simplifier));