function Summation(iMax : number[]):number
{
 

var iCnt : number = 0;

var Sum : number = 0;

for(iCnt = 0 ; iCnt < iMax.length ; iCnt++)
{
    Sum = Sum + iMax[iCnt]
}
return Sum;

}

var Arr : number[] = [23,6,7,4,5,7]

var Ret : number = 0;

Ret = Summation(Arr)

console.log("Summation  is : "+ Ret)
