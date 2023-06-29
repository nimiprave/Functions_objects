function Person(firstName, lastName){
    this.first_name = firstName;
    this.last_name = lastName;
}


var rohit  = new Person('Rohit', 'tamidapati');
var nirmal = new Person('Nimi','pothuraj');
var vaichu = new Person('vaichu','pothuraj');
var shyam = new Person('Shyam','pothuraj');


rohit.color = 'White';

console.log(rohit);
console.log(nirmal);
console.log(vaichu);
console.log(shyam);

//add a property to the prototype object of the function Person
Person.prototype.nationality = 'Indian';

console.log(rohit.nationality);
console.log(nirmal.nationality);
console.log(vaichu.nationality);
console.log(shyam.nationality);
