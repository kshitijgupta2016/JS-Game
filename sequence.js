
var shuffleArray=[];
var time=0;
var newTime=0;
var timerInterval = null;
function timer(){
	/*setInterval(count(),1000) */
	stop();
	value = 0;
  timerInterval = setInterval(count, 1000);
	}
function count(){
		/*for(newTime;newTime<100;newTime++)
		{
			document.getElementById("timerfrm").innerHTML=time;
			time==newTime;
			newTime==time;
		} */  document.getElementById("timerfrm").innerHTML = ++value+"s";

	}
function stop(){
	clearInterval(timerInterval);
}

/*function levelone(){
	document.getElementById("b1").innerHTML=8;
	document.getElementById("b2").innerHTML=9;
	document.getElementById("b3").innerHTML=4;
	document.getElementById("b4").innerHTML=11;
	document.getElementById("b5").innerHTML=7;
	document.getElementById("b6").innerHTML=2;
	document.getElementById("b7").innerHTML=5;
	document.getElementById("b8").innerHTML=3;
	document.getElementById("b9").innerHTML=6;
	document.getElementById("b10").innerHTML=1;
	document.getElementById("b11").innerHTML=10;

} */
function leveltwo(){
	document.getElementById("b1").innerHTML=11;
	document.getElementById("b2").innerHTML=10;
	document.getElementById("b3").innerHTML=9;
	document.getElementById("b4").innerHTML=8;
	document.getElementById("b5").innerHTML=7;
	document.getElementById("b6").innerHTML=6;
	document.getElementById("b7").innerHTML=5;
	document.getElementById("b8").innerHTML=4;
	document.getElementById("b9").innerHTML=3;
	document.getElementById("b10").innerHTML=2;
	document.getElementById("b11").innerHTML=1;

}


function shuffle(){
	for(i=0;i<13;i++)
	{
		var a=Math.floor(Math.random()*12);
		//shuffleArray.push(a);
		shuffleArray[i]=a;
	}
	document.getElementById("b0").innerHTML=shuffleArray[0];
	document.getElementById("b1").innerHTML=shuffleArray[1];
	document.getElementById("b2").innerHTML=shuffleArray[2];
	document.getElementById("b3").innerHTML=shuffleArray[3];
	document.getElementById("b4").innerHTML=shuffleArray[4];
	document.getElementById("b5").innerHTML=shuffleArray[5];
	document.getElementById("b6").innerHTML=shuffleArray[6];
	document.getElementById("b7").innerHTML=shuffleArray[7];
	document.getElementById("b8").innerHTML=shuffleArray[8];
	document.getElementById("b9").innerHTML=shuffleArray[9];
	document.getElementById("b10").innerHTML=shuffleArray[10];
	document.getElementById("b11").innerHTML=shuffleArray[11];


}

var buttons=['b0','b1','b2','b3','b4','b5','b6','b7','b8','b9','b10','b11'];
var buttonDisabled="";

function check()
{

	if( document.getElementById('b0').style.opacity==0)
		{buttonDisabled=buttons[0];}
	else if ( document.getElementById('b1').style.opacity==0)
		{buttonDisabled=buttons[1];}
	else if( document.getElementById('b2').style.opacity==0)
		{buttonDisabled=buttons[2];}
	else if( document.getElementById('b5').style.opacity==0)
		{buttonDisabled=buttons[5];}

	else if( document.getElementById('b4').style.opacity==0)
		{buttonDisabled=buttons[4];}
	else if( document.getElementById('b3').style.opacity==0)
		{buttonDisabled=buttons[3];}

	else if( document.getElementById('b6').style.opacity==0)
		{buttonDisabled=buttons[6];}
	else if( document.getElementById('b7').style.opacity==0)
		{buttonDisabled=buttons[7];}
	else if( document.getElementById('b8').style.opacity==0)
		{buttonDisabled=buttons[8];}
	else if( document.getElementById('b11').style.opacity==0)
		{buttonDisabled=buttons[11];}

	else if( document.getElementById('b10').style.opacity==0)
		{buttonDisabled=buttons[10];}

	else if( document.getElementById('b9').style.opacity==0)
		{buttonDisabled=buttons[9];}


}
//When 0 is clicked

function event0(){
	check();
	if(buttonDisabled==buttons[1])
	{
		document.getElementById("b0").style.opacity=0;
		document.getElementById("b1").style.opacity=1;
		document.getElementById("b1").innerHTML=document.getElementById("b0").innerHTML;
		document.getElementById("b0").innerHTML="";
	}
	else if(buttonDisabled==buttons[3])
	{
		document.getElementById("b0").style.opacity=0;
		document.getElementById("b3").style.opacity=1;
		document.getElementById("b3").innerHTML=document.getElementById("b0").innerHTML;
		document.getElementById("b0").innerHTML="";
	}

}

//When 1 is clicked

function event1(){
	check();
	if(buttonDisabled==buttons[0])
	{
		document.getElementById("b1").style.opacity=0;
		document.getElementById("b0").style.opacity=1;
		document.getElementById("b0").innerHTML=document.getElementById("b1").innerHTML;
		document.getElementById("b1").innerHTML="";
	}
	else if(buttonDisabled==buttons[2])
	{
		document.getElementById("b1").style.opacity=0;
		document.getElementById("b2").style.opacity=1;
		document.getElementById("b2").innerHTML=document.getElementById("b1").innerHTML;
		document.getElementById("b1").innerHTML="";

	}
	if(buttonDisabled==buttons[4])
	{
		document.getElementById("b1").style.opacity=0;
		document.getElementById("b4").style.opacity=1;
		document.getElementById("b4").innerHTML=document.getElementById("b1").innerHTML;
		document.getElementById("b1").innerHTML="";
	}
}
function event2(){
	check();
	if(buttonDisabled==buttons[1])
	{
		document.getElementById("b2").style.opacity=0;
		document.getElementById("b1").style.opacity=1;
		document.getElementById("b1").innerHTML=document.getElementById("b2").innerHTML;
		document.getElementById("b2").innerHTML="";
	}
	else if(buttonDisabled==buttons[5])
	{
		document.getElementById("b2").style.opacity=0;
		document.getElementById("b5").style.opacity=1;
		document.getElementById("b5").innerHTML=document.getElementById("b2").innerHTML;
		document.getElementById("b2").innerHTML="";
	}

}
function event3(){
	check();
	if(buttonDisabled==buttons[0])
	{
		document.getElementById("b3").style.opacity=0;
		document.getElementById("b0").style.opacity=1;
		document.getElementById("b0").innerHTML=document.getElementById("b3").innerHTML;
		document.getElementById("b3").innerHTML="";
	}
	else if(buttonDisabled==buttons[4])
	{
		document.getElementById("b3").style.opacity=0;
		document.getElementById("b4").style.opacity=1;
		document.getElementById("b4").innerHTML=document.getElementById("b3").innerHTML;
		document.getElementById("b3").innerHTML="";
	}
	else if(buttonDisabled==buttons[6])
	{
		document.getElementById("b3").style.opacity=0;
		document.getElementById("b6").style.opacity=1;
		document.getElementById("b6").innerHTML=document.getElementById("b3").innerHTML;
		document.getElementById("b3").innerHTML="";
	}
	else
	{

	}
}
function event4(){
	check();
	if(buttonDisabled==buttons[1])
	{
		document.getElementById("b4").style.opacity=0;
		document.getElementById("b1").style.opacity=1;
		document.getElementById("b1").innerHTML=document.getElementById("b4").innerHTML;
		document.getElementById("b4").innerHTML="";
	}
	else if(buttonDisabled==buttons[3])
	{
		document.getElementById("b4").style.opacity=0;
		document.getElementById("b3").style.opacity=1;
		document.getElementById("b3").innerHTML=document.getElementById("b4").innerHTML;
		document.getElementById("b4").innerHTML="";
	}
	else if(buttonDisabled==buttons[5])
	{
		document.getElementById("b4").style.opacity=0;
		document.getElementById("b5").style.opacity=1;
		document.getElementById("b5").innerHTML=document.getElementById("b4").innerHTML;
		document.getElementById("b4").innerHTML="";
	}
	else if(buttonDisabled==buttons[7])
	{
		document.getElementById("b4").style.opacity=0;
		document.getElementById("b7").style.opacity=1;
		document.getElementById("b7").innerHTML=document.getElementById("b4").innerHTML;
		document.getElementById("b4").innerHTML="";
	}

}
function event5(){
	check();
	if(buttonDisabled==buttons[2])
	{
		document.getElementById("b5").style.opacity=0;
		document.getElementById("b2").style.opacity=1;
		document.getElementById("b2").innerHTML=document.getElementById("b5").innerHTML;
		document.getElementById("b5").innerHTML="";
	}
	else if(buttonDisabled==buttons[4])
	{
		document.getElementById("b5").style.opacity=0;
		document.getElementById("b4").style.opacity=1;
		document.getElementById("b4").innerHTML=document.getElementById("b5").innerHTML;
		document.getElementById("b5").innerHTML="";
	}
	else if(buttonDisabled==buttons[8])
	{
		document.getElementById("b5").style.opacity=0;
		document.getElementById("b8").style.opacity=1;
		document.getElementById("b8").innerHTML=document.getElementById("b5").innerHTML;
		document.getElementById("b5").innerHTML="";
	}

}
function event6(){
	check();
	if(buttonDisabled==buttons[3])
	{
		document.getElementById("b6").style.opacity=0;
		document.getElementById("b3").style.opacity=1;
		document.getElementById("b3").innerHTML=document.getElementById("b6").innerHTML;
		document.getElementById("b6").innerHTML="";
	}
	else if(buttonDisabled==buttons[7])
	{
		document.getElementById("b6").style.opacity=0;
		document.getElementById("b7").style.opacity=1;
		document.getElementById("b7").innerHTML=document.getElementById("b6").innerHTML;
		document.getElementById("b6").innerHTML="";
	}
	else if(buttonDisabled==buttons[9])
	{
		document.getElementById("b6").style.opacity=0;
		document.getElementById("b9").style.opacity=1;
		document.getElementById("b9").innerHTML=document.getElementById("b6").innerHTML;
		document.getElementById("b6").innerHTML="";
	}

}
function event7(){
	check();
	if(buttonDisabled==buttons[4])
	{
		document.getElementById("b7").style.opacity=0;
		document.getElementById("b4").style.opacity=1;
		document.getElementById("b4").innerHTML=document.getElementById("b7").innerHTML;
		document.getElementById("b7").innerHTML="";
	}
	else if(buttonDisabled==buttons[6])
	{
		document.getElementById("b7").style.opacity=0;
		document.getElementById("b6").style.opacity=1;
		document.getElementById("b6").innerHTML=document.getElementById("b7").innerHTML;
		document.getElementById("b7").innerHTML="";
	}
	else if(buttonDisabled==buttons[8])
	{
		document.getElementById("b7").style.opacity=0;
		document.getElementById("b8").style.opacity=1;
		document.getElementById("b8").innerHTML=document.getElementById("b7").innerHTML;
		document.getElementById("b7").innerHTML="";
	}
	else if(buttonDisabled==buttons[10])
	{
		document.getElementById("b7").style.opacity=0;
		document.getElementById("b10").style.opacity=1;
		document.getElementById("b10").innerHTML=document.getElementById("b7").innerHTML;
		document.getElementById("b7").innerHTML="";
	}

}
function event8(){
	check();
	if(buttonDisabled==buttons[7])
	{
		document.getElementById("b8").style.opacity=0;
		document.getElementById("b7").style.opacity=1;
		document.getElementById("b7").innerHTML=document.getElementById("b8").innerHTML;
		document.getElementById("b8").innerHTML="";
	}
	else if(buttonDisabled==buttons[5])
	{
		document.getElementById("b8").style.opacity=0;
		document.getElementById("b5").style.opacity=1;
		document.getElementById("b5").innerHTML=document.getElementById("b8").innerHTML;
		document.getElementById("b8").innerHTML="";
	}
	else if(buttonDisabled==buttons[11])
	{
		document.getElementById("b8").style.opacity=0;

		document.getElementById("b11").style.opacity=1;
		document.getElementById("b11").innerHTML=document.getElementById("b8").innerHTML;
		document.getElementById("b8").innerHTML="";
	}

}

function event9(){
	check();
	if(buttonDisabled==buttons[6])
	{
		document.getElementById("b9").style.opacity=0;
		document.getElementById("b6").style.opacity=1;
		document.getElementById("b6").innerHTML=document.getElementById("b9").innerHTML;
		document.getElementById("b9").innerHTML="";
	}
	else if(buttonDisabled==buttons[10])
	{
		document.getElementById("b9").style.opacity=0;
		document.getElementById("b10").style.opacity=1;
		document.getElementById("b10").innerHTML=document.getElementById("b9").innerHTML;
		document.getElementById("b9").innerHTML="";
	}

}
function event10(){
	check();
	if(buttonDisabled==buttons[7])
	{
		document.getElementById("b10").style.opacity=0;
		document.getElementById("b7").style.opacity=1;
		document.getElementById("b7").innerHTML=document.getElementById("b10").innerHTML		;
		document.getElementById("b10").innerHTML="";
	}
else	if(buttonDisabled==buttons[9])
	{
		document.getElementById("b10").style.opacity=0;
		document.getElementById("b9").style.opacity=1;
		document.getElementById("b9").innerHTML=document.getElementById("b10").innerHTML;
		document.getElementById("b10").innerHTML="";
	}
else	if(buttonDisabled==buttons[11])
	{
		document.getElementById("b10").style.opacity=0;
		document.getElementById("b11").style.opacity=1;
		document.getElementById("b11").innerHTML=document.getElementById("b10").innerHTML;
		document.getElementById("b10").innerHTML="";
	}

}
function event11(){
	check();
	if(buttonDisabled==buttons[8])
	{
		document.getElementById("b11").style.opacity=0;
		document.getElementById("b8").style.opacity=1;
		document.getElementById("b8").innerHTML=document.getElementById("b11").innerHTML;
		document.getElementById("b11").innerHTML="";
	}
	else if(buttonDisabled==buttons[10])
	{
		document.getElementById("b11").style.opacity=0;
		document.getElementById("b10").style.opacity=1;
		document.getElementById("b10").innerHTML=document.getElementById("b11").innerHTML;
		document.getElementById("b11").innerHTML="";
	}

}
