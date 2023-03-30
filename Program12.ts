class Circle
{
    Radius : number ;
    PI : number;

    constructor(Data : number)
    {
        this.Radius =  Data;
        this.PI = 3.14;
    }

    Area(): number
    {
        let Ans : number = 0;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans;
    }
}

var obj1 = new Circle(5)
var obj2 = new Circle(2)
var Ret : number = 0;

Ret = obj1.Area();
console.log("Area is : "+Ret);

Ret = obj2.Area();
console.log("Area is : "+Ret);