// Chaper 1
// Defining a Function 

// Function is created by an expression that starts with the keyword function
// Accepts Parameters
//  Has a function body 
var square = function(x){
    // Sample of function that returns a value 
    return x * x; 
}

console.log(square(2));


var makerNoise = function(){
    // Smple of a function that creates a side effect -- READUP of pure functions 
    console.log("Ping!");
}

makerNoise();

var power = function(base, exponent) {
    var result = 1 
    for (var count=0; count < exponent; count++){

        result *= base;
    
    }
    // return result;
    // the return function by itself returns undefined.
    return; 

};


console.log(power(2,10));

//PARAMETERS AND SCOPES
var x = "outside";

var f1 = function(){
    var x = "inside f1" // Here we define a local variable thus not affecting the X variable outside of the function. 
};

f1();
console.log(x);

var f2 = function(){
    x = "inside f2"; 
};

f2();
console.log(x);


// NESTED FUNCTIONS 
var landscape = function(){

    var result = "";
    var flat = function(size){
        for (count=0; count < size; count++)


            result += 
        

    }
};