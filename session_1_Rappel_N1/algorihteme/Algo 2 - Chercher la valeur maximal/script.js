let numbers =[12,2,30,40];

let Max=numbers[0];

for(let i=0;i<numbers.length;i++){

    if(numbers[i] > Max){
       Max = numbers[i];
    } 
}
console.log(Max);
