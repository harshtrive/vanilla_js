// loops - while , do-while , for
// for - when u have range use for loop there
// while - when u dont know the range

// q1.lets say you have to print 1 to 10 
// for(let i=1 ; i<=10 ; i++){
//     console.log("the value of i is : " + i);
// }

// q2. from user print the same value
let n=parseInt(process.argv[2]);
for(let i=1 ; i<=n ; i++){
    console.log("the value of i is : " + i);
}
