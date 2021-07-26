function calculate()
{
    var Charge="";
    var totalcall=document.getElementById("i_call").value;
    var totalsms=document.getElementById("i_sms").value;
    if(totalcall<=50 && totalsms<=50)
    {
        call=((totalcall*50)/100);
        sms=(totalsms*0);
        Charge=call+sms;
    }
    if(((totalcall>50)&&(totalcall<=150))&& ((totalsms>50)&&(totalsms<=200)))
    {
        call=((50*50)/100) + (((totalcall-50)*70)/100);
        sms=(50*0) + (((totalsms-50)*25)/100);
        Charge=call+sms;
    }
    if(((totalcall>150)&&(totalcall<=300))&& ((totalsms>200)&&(totalsms<=400)))
    {
        call=((50*50)/100) + ((100*70)/100) + (((totalcall-150)*85)/100);
        sms=(50*0)+((150*25)/100)+(((totalsms-200)*40)/100);
        Charge=call+sms;
    }
    if((totalcall>300)&&(totalsms>400))
    {
        call=((50*50)/100) + ((100*70)/100) +((150*85)/100) + (((totalcall-300)*95)/100);
        sms=(50*0)+((150*25)/100)+ ((200*40)/100)+(((totalsms-400)*45)/100);
        Charge=call+sms;
    }
    alert("Charges for call: "+call+" "+"\n"+"Charges for SMS: "+sms+" "+"\n"+"Total Charges: "+Charge+" ");
}