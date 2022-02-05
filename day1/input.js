// to take input from cmd we use process.argv
// process.argv is basically take something from cmd and provide it to our program
// o and i th position is of no use 
let args = process.argv[2];

args = args + 30;
console.log(args);//3030 b/s it its a string to convert to get 60 use parseInt


// input - node fileName input1 ...

// everything comes as a string from cmd so use parseInt or whatever to change it....
// to check type of datatype we use typeof operator
