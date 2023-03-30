function Fibonacci(fNo : number):void
{
    var No1 : number = 0;
var No2 : number = 1;

var Addition : number = 0;

var i : number = 0;

console.log(No1)
console.log(No2)

for(i = 1 ; i < 21 ; i++)
{
    if(Addition != 21)
    {
    Addition = No1 + No2;
    
    console.log(Addition)  
    No1 = No2;
    No2 = Addition;
    }
}

}

Fibonacci(21)