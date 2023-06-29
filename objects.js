
//composite data type, which can real life object
var Person = {
    first_name : 'Nirmal',
    last_name : 'Pothuraj'
}

console.log(Person);
console.log(Person.first_name);
console.log(Person.last_name);


var p1 = Person;    // copy by reference
console.log(p1.first_name);

p1.first_name = 'Rohit';
console.log(Person.first_name);


// a new instance of a Person
function Personal(firstName, lastName){
    this.first_name = firstName;
    this.last_name = lastName;
}

var rohit = new Personal('Rohit', 'Tamidapati');
console.log(rohit.first_name);
console.log(rohit.last_name);

Personal.prototype.language = 'telugu'

console.log(rohit.language);
