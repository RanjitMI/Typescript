    function ChkPrime(Fact : number) : Boolean
{
    
var Fact : number = 20
var iCnt : number = 0
var i : number = 0

for(iCnt = 2 ; iCnt <= Fact / 2 ; iCnt++ )
{
    if((Fact % iCnt) == 0)
    {
        i++;
        break
    }
}
if(i == 1)
{
    return false
}
else
{
    return true;
}

}

var bRet : Boolean = false;

bRet = ChkPrime(11)

if(bRet == true)
{
    console.log("11 is prime number")
}
else
{
    console.log("11 is prime number")
}