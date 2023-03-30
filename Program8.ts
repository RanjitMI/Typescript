function Max(iMax : number[]):void
{
 

var iCnt : number = 0;
var Max1 : number = 0;
var Max2 : number = 0;

for(iCnt = 0 ; iCnt < iMax.length ; iCnt++)
{
    if(iMax[iCnt]> Max1)
    {
        Max2 = Max1;
        Max1 = iMax[iCnt];
    }
    else if(iMax[iCnt]>Max2)
    {
        Max2 = iMax[iCnt]
    }
}

console.log("Second largest number is :"+ Max2)

}

var Arr : number[] = [23,89,6,29,56,45,77,32]


 Max(Arr)
