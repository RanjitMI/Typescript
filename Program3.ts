function DisplayFactors(Fact : number) : void
{
    
var Fact : number = 20
var iCnt : number = 0

for(iCnt = 1 ; iCnt <= Fact / 2 ; iCnt++ )
{
    if((Fact % iCnt) == 0)
    {
        console.log(iCnt)
    }
}
}

DisplayFactors(20)