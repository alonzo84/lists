// Write a function that reverses a string. 

let stringInput = "abcd efgh";

function ReverseString(input){
    let newString = "";
    for (var i = input.length - 1; i >= 0; i--){
        newString += input[i];
    }
    return newString;
}

console.log(ReverseString(stringInput));