class Arithmetic
{
    Number1 : number;
    Number2 : number;

    constructor(No1 : number , No2: number)
    {
        this.Number1 = No1;
        this.Number2 = No2 ;
    }

    Addition() : number
    {
        return this.Number1 + this.Number2;
    }

    Subtraction() : number
    {
       return this.Number1 - this.Number2;
    }

    Multiplication() : number
    {
        return this.Number1 * this.Number2;
    }

    Division() : number
    {
                return this.Number1 / this.Number2;
    }
}

var obj1 = new Arithmetic(4,2);
var obj2 = new Arithmetic(6,3);

var Ret : number = 0;

Ret= obj1.Addition();
console.log("Addition of obj1 : "+Ret)

Ret= obj1.Subtraction();
console.log("Subtraction of obj1 : "+Ret)

Ret= obj1.Multiplication();
console.log("Multiplication of obj1 : "+Ret)

Ret= obj1.Division();
console.log("Division of obj1 : "+Ret)

Ret= obj2.Addition();
console.log("Adddition of obj2 : "+Ret)

Ret= obj2.Subtraction();
console.log("Subtraction of obj2 : "+Ret)

Ret= obj2.Multiplication();
console.log("Multiplication of obj2 : "+Ret)

Ret= obj2.Division();
console.log("division of obj2 : "+Ret)