// JavaScript Document

window.onload=function(){
		/*var oNext=document.getElementById('nav');
		var oH=oNext.offsetTop;
		window.onscroll=function(){
			var sT=document.body.scrollTop || document.documentElement.scrollTop;
			if(sT>oH){
				oNext.style.position='fixed';
				oNext.style.top=0+'px';
				oNext.style.left=770+'px';
				
			}else if(oH<20){
				oNext.style.position='absolute';
				oNext.style.right=200+'px';
				oNext.style.top=170+'px';
			}
		}	*/
		
		var oNext=document.getElementById('nav');
		var oH=oNext.offsetTop;
		window.onscroll=function(){
			var sT=document.body.scrollTop || document.documentElement.scrollTop;
			if(sT>oH){
				oNext.style.position='fixed';
				oNext.style.top=0;
				oNext.style.left=640-oNext.offsetLeft+'px';
				
			}else{
				oNext.style.position='';				
			}
		}	
	};