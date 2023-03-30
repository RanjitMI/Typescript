function ChkArmstrong(iNo : number) : Boolean
{
    {
        var iDigitCount : number = 0;
        var iTemp : number = 0
        var iDigit : number = 0;
        var iCnt : number = 0 
        var iPower : number = 1
        var iSum : number = 0

        iTemp = iNo

        while(iTemp != 0)   
        {
            iDigitCount++;
            iTemp = iTemp / 10;
        }

        iTemp = iNo;

        while(iTemp != 0)
        {
            iDigit = iTemp % 10;

            for(iCnt = 1; iCnt <= iDigitCount; iCnt++)  
            {
                iPower = iPower * iDigit;
            }
            iSum = iSum + iPower;
            iPower = 1;    

            iTemp = iTemp / 10;
        }

        if(iSum == iNo)
        {
            return true;
        }
        else 
        {
            return false;
        }
    }
}

var bRet : Boolean = false;

bRet = ChkArmstrong(153);
if(bRet == true)
{
    console.log(153 + " is not a Armstrong number.")
}
else
{
    console.log(153 + " is   Armstrong number.")
}
