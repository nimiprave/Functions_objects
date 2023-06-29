// named function 
function showHello(){
    console.log('Hello');
}

showHello();

//inline function declaration
var showTime = function(){
    console.log( 'shotTime' + new Date().toString())
}
showTime();

// arrow functions
var showGreetingsWithTime = ( greeting )=>{
  //  return greeting + 'and time is' + new Date().getDate(); 
  return `${greeting} and the time is ${new Date().toLocaleString()}`;
}

var message = showGreetingsWithTime('Good Morning');
console.log(message);


//anonymous function
(
    function(){
        console.log('This is a anonymous function');
    }
)();


//call back functions
setTimeout(function(){
    console.log( 'Inside callback function');
    console.log( new Date().toString());
}, 2000);

setTimeout(showTime, 2000);
var showTime1 = showTime;
setTimeout(showTime1,3000);


