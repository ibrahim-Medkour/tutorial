let numbers = [8, 3, 6, 1, 5];
console.log(" avant = " +numbers); 

for (let i = 0; i < numbers.length - 1; i++) 
{
    for (let j = 0; j < numbers.length - 1; j++) 
    {
        if (numbers[j] > numbers[j + 1]) 
        {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}

console.log(" apré = " +numbers); 