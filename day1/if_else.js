// conditional statements
// print - my name is harsh if args is  smaller than 20 
// otherwise my name is anjali !!

// let args = parseInt(process.argv[2]);
// if(args < 20){
//     console.log(args + " my name is harsh");
// }else{
//     console.log(args + " my name is anjali");
// }

// q2. print even if divisible by 2 otherwise odd
// even no = number div by 2
let n= parseInt(process.argv[2])
if(n%2==0){
    console.log(n + " is even");
}else{
    console.log(n + " is odd");  
}

let m= parseInt(process.argv[3])
if(m%2==0){
    console.log(m + " is even");
}else{
    console.log(m + " is odd");  
}
// input 4 6
// 4 is even
// 6 is even