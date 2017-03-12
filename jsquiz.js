
//To Do code logic here
var MR = 1;
var SR = 1;
var MD = 1;
var SD = 1;
var A=0;
var L=0;

function findSelection1(){
	
	var radios1 = document.getElementsByName('question1');
	
	for(var i = 0, length = radios1.length;i<length;i++){
		if(radios1[i].checked){
			if(i==0){
				MR += 4;
				A+=7;
			}else if(i==1){
				MR+=1;
				A+=2;
			}else if(i == 2){
				SR+=2;
				L+=2;
			}else if(i==3){
				SD+=2;
				L+=3;
			}else if(i ==4){
				MD+=4;
				L+=6;
			}else{
				
			}
			break;
		}
	}
}
function findSelection2(){
	
	var radios2 = document.getElementsByName('question2');
	
	for(var i = 0, length = radios2.length;i<length;i++){
		if(radios2[i].checked){
			if(i==0){
				MR += 4;
				L+=3;
			}else if(i==1){
				SR+=3;
				A+=1;
			}else if(i == 2){
				SD+=2;
				A+=2;
			}else if(i==3){
				MD+=2;
				A+=3;
			}else{
				
			}
			break;
		}
	}
}
function findSelection3(){
	
	var radios3 = document.getElementsByName('question3');
	
	for(var i = 0, length = radios3.length;i<length;i++){
		if(radios3[i].checked){
			if(i==0){
				L+=5;
			}else if(i==1){
				A+=1;
			}else if(i == 2){
				A+=2;
			}else if(i==3){
				A+=3;
			}else if(i ==4){
				A+=5;
			}else if(i==5){
				A+=7;
			}
			else{
				
			}
			break;
		}
	}
}
function findSelection4(){
	
	var radios4 = document.getElementsByName('question4');
	
	for(var i = 0, length = radios4.length;i<length;i++){
		if(radios4[i].checked){
			if(i==0){
				MR += 4;
				L+=5;
			}else if(i==1){
				SR+=3;
				L+=3;
			}else if(i == 2){
				SD+=3;
				L+=1;
				A+=2;
			}else if(i==3){
				MD+=4;
				A+=4;
			}else{
				
			}
			break;
		}
	}
}
function findSelection5(){
	
	var radios5 = document.getElementsByName('question5');
	
	for(var i = 0, length = radios5.length;i<length;i++){
		if(radios5[i].checked){
			if(i==0){
				MR += 2;
				A+=3;
			}else if(i==1){
				SR+=2;
				A+=1;
			}else if(i == 2){
				MD+=3;
				L+=4;
			}else{
				
			}
			break;
		}
	}
}
function findSelection6(){
	
	var radios6 = document.getElementsByName('question6');
	
	for(var i = 0, length = radios6.length;i<length;i++){
		if(radios6[i].checked){
			if(i==0){
				MR += 5;
				L+=7;
			}else if(i==1){
				SR+=3;
				L+=2;
			}else if(i == 2){
				SR+=1;
				A+=1;
			}else if(i==3){
				SD+=2;
				A+=3;
			}else if(i ==4){
				MD+=2;
				A+=4;
			}else if(i==5){
				MD+=5;
				A+=7;
			}else{
				
			}
			break;
		}
	}
}
function findSelection7(){
	
	var radios7 = document.getElementsByName('question7');
	
	for(var i = 0, length = radios7.length;i<length;i++){
		if(radios7[i].checked){
			if(i==0){
				MR += 3;
				L+=4;
			}else if(i==1){
				SR+=2;
				L+=2;
			}else if(i == 2){
				SD+=2;
				L+=1;
				A+=2;
			}else if(i==3){
				MD+=3;
				A+=4;
			}else{
				
			}
			break;
		}
	}
}
function findSelection8(){
	
	var radios8 = document.getElementsByName('question8');
	
	for(var i = 0, length = radios8.length;i<length;i++){
		if(radios8[i].checked){
			if(i==0){
				MR += 7;
				
			}else if(i==1){
				MR+=4;
				
			}else if(i == 2){
				SR+=3;
				
			}else if(i==3){
				SD+=2;
				
			}else if(i ==4){
				MD+=3;
				
			}else if(i==5){
				MD+=7;
			}else{
				
			}
			break;
		}
	}
}
function findSelection9(){
	
	var radios9 = document.getElementsByName('question9');
	
	for(var i = 0, length = radios9.length;i<length;i++){
		if(radios9[i].checked){
			if(i==0){
				MR += 5;
				A+=4;
			}else if(i==1){
				SR+=2;
				A+=2;
				L+=2;
			}else if(i == 2){
				SD+=2;
				L+=1;
				A+=3;
			}else if(i==3){
				MD+=2;
				L+=4;
			
			}else{
				
			}
			break;
		}
	}
}
function findSelection10(){
	
	var radios10 = document.getElementsByName('question10');
	
	for(var i = 0, length = radios10.length;i<length;i++){
		if(radios10[i].checked){
			if(i==0){
				MR += 4;
				A+=6;
			}else if(i==1){
				MR+=3;
				A+=4;
			}else if(i == 2){
				SR+=4;
				A+=3;
			}else if(i==3){
				
				L+=4;
			}else if(i ==4){
				SR+=3;
				L+=1;
				A+=2;
				
			}else if(i==4){
				MD+=2;
				L+=4;
			}else{
				
			}
			break;
		}
	}
}
function findSelection11(){
	
	var radios11 = document.getElementsByName('question11');
	
	for(var i = 0, length = radios11.length;i<length;i++){
		if(radios11[i].checked){
			if(i==0){
				MR += 3;
				A+=4;
			}else if(i==1){
				SR+=4;
				A+=3;
			}else if(i == 2){
				
				L+=2;
			}else if(i==3){
				MD+=4;
				L+=4;
			}else{
				
			}
			break;
		}
	}
}

function getX(){
	return (Math.log(MR)/Math.log5)) + (Math.log(SR)/Math.log(10)) - (1.033)(Math.log(MD)/Math.log(5)) - (Math.log(SD)/Math.log(10)); 
}
function getY(){
	return .04796*A - .051087*L;
}
