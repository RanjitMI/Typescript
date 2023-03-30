function Max(iMax : number[]):number
{
 

var iCnt : number = 0;
var No : number = iMax[0]
var Max : number = 0;

for(iCnt = 0 ; iCnt < iMax.length ; iCnt++)
{
    if(iMax[iCnt]> No)
    {
        No = iMax[iCnt];
    }
}
return No;

}

var Arr : number[] = [23,89,6,29,56,45,77,32]

var Ret : number = 0;

Ret = Max(Arr)

console.log("MAximum number is : "+ Ret)


