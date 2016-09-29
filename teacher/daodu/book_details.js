// JavaScript Document


window.onload=function(){
		var oBox=document.getElementById('nav');
		var oH=oBox.offsetTop;
		window.onscroll=function(){
			var sT=document.body.scrollTop || document.documentElement.scrollTop;
			if(sT>=oH){
				oBox.style.position='fixed';
				/*oBox.style.top=-40+'px';
				oBox.style.left=190+'px';*/
				oBox.style.top=0+'px';
				oBox.style.left=0+'px';
				/*oBox.style.marginTop=-40+'px';*/
				oBox.style.marginLeft=185+'px';
				oBox.style.background="white";
				oBox.style.zIndex=3;
				oBox.style.paddingTop=20+'px';
				oBox.style.width=975+'px';
			}else{
				
				oBox.style.position='';	
				oBox.style.marginTop='';
				oBox.style.marginLeft='';
			}
		}	
	};