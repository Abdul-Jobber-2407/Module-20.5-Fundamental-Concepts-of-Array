/**
 * LOOPING Technique
 * for loop
 * while loop
 * do while 
 * for of --> array loop korar jonno 
 * for in --> object loop korar jonno 
 * 
 */

const friends = ['Elon', 'Bill', 'Mark', 'waren'];
for (const friend of friends){
    // console.log(friend);
}

for (let i=0; i<10; i++){
    // console.log(i);
    // console.log(friends[i]);
}

for(let i=0; i<friends.length; i++){
    //  console.log(i);
    //  console.log(friends[i]);
}

const numbers = [5,23, 34,3436, 35,345,353, 3465,334,4]
for(let i = 0; i<numbers.length;i++){
    // console.log(numbers[i]);
}

let i=0;
while (i<friends.length){
    // console.log(friends[i]);
    i++;
}

let n= 0;
while(n < numbers.length){
    // console.log(numbers[n])
    n++;
}