// arrow functions
var showGreetingsWithTime = (greeting) => {
    //  return greeting + 'and time is' + new Date().getDate(); 
    setTimeout(() => {
        console.log(`${greeting} and the time is ${new Date().toLocaleString()}`);
    }, 4000);
}

console.log("Start of Program");
showGreetingsWithTime("Friday");
console.log("printing after greetingswithTime Function");
console.log("End of Program"); 


// Implement the same thing using promise. 
var asPromized = new Promise((resolve, reject)=>{ 
    setTimeout(()=>{
         resolve(`Hello there, The time is ${new Date().toLocaleString()}`); 
    },3000)
}); 

asPromized.then( (value)=>{
    console.log(`""""""""""""""""""""""""""""""""""`);
    console.log("Start of Program");
    console.log(value);
    console.log("printing after greetingswithTime Function");
    console.log("End of Program"); 
    console.log(`""""""""""""""""""""""""""""""""""`);

}  ).catch((e)=>{
    console.log(e);
});
