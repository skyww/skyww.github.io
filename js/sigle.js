function a2d(n){
		return n*180/Math.PI;
	}
	
	function gotPos(obj){
		var l=0;
		var t=0;
		while(obj.offsetParent){
			l+=obj.offsetLeft;
			t+=obj.offsetTop;
			obj=obj.offsetParent;
		}
		return {l:l,t:t};
	}
	
	
	function hover(obj,ev){
		var s=document.body.scrollTop||document.documentElement.scrollTop;
		var x=ev.clientX;
		var y=ev.clientY+s;
		var cX=gotPos(obj).l+obj.offsetWidth/2;
		var cY=gotPos(obj).t+obj.offsetHeight/2;
		var a=cX-x;
		var b=cY-y;
		//var a1=Math.atan2(b,a)*180/Math.PI;
		//var a2=Math.round((a1+180)/90);
		return (Math.round((Math.atan2(b,a)*180/Math.PI+180)/90))%4;
		
	}
	
	
	function FnMove(id){
		var oBox1=document.getElementById(id);
		var oSpan=oBox1.children[0];
		oBox1.onmouseover=function(ev){
			var oEv=ev||event;
			oSpan.style.display='block';
			var from=oEv.fromElement||oEv.relatedTarget;
			if(this.contains(from))return;
			var n=hover(oBox1,oEv);
			switch(n){
				case 0:
					oSpan.style.left=200+'px';
					oSpan.style.top=0;
				break;
				case 1:
					oSpan.style.left=0+'px';
					oSpan.style.top=200+'px';
				break;
				case 2:
					oSpan.style.left=-200+'px';
					oSpan.style.top=0;
				break;
				case 3:
					oSpan.style.left=0+'px';
					oSpan.style.top=-200+'px';
				break;
			}
			move(oSpan,{left:0,top:0});
		};
		
		oBox1.onmouseout=function(ev){
			var oEv=ev||event;
			var to=oEv.toElement||oEv.relatedTarget;
			if(this.contains(to))return;
			var n=hover(oBox1,oEv);
			switch(n){
				case 0:
					move(oSpan,{left:200,top:0});
				break;
				case 1:
					move(oSpan,{left:0,top:200});
				break;
				case 2:
					move(oSpan,{left:-200,top:0});
				break;
				case 3:
					move(oSpan,{left:0,top:-200});
				break;
			}
		};	
		oSpan.style.display='none';
	
	}

	


//首页分块运动
window.onload=function(){
			var oBox=document.getElementById('box');
			
			var R=5;//行
			var C=8;//列

			for(var r=0;r<R;r++){
				for(var c=0;c<C;c++){
					var oSpan=document.createElement('span');
					oSpan.style.width=oBox.offsetWidth/C+'px';
					oSpan.style.height=oBox.offsetHeight/R+'px';
					oSpan.style.left=c*oBox.offsetWidth/C+'px';
					oSpan.style.top=r*oBox.offsetHeight/R+'px';
					oSpan.style.backgroundPosition=-c*oBox.offsetWidth/C+'px -'+r*oBox.offsetHeight/R+'px';

					oBox.appendChild(oSpan);
				}
			}

			var aSpan=oBox.children;

			var iNow=0;
			var t=true;
			oBox.onclick=function(){
				if(t==false)return;
				t=false;
				var n=0;
				iNow++;
				
				var timer=setInterval(function(){
					(function(index){
						move(aSpan[n],{opacity:0},{
							complete:function(){
								if(index==aSpan.length-1){
									for(var i=0;i<aSpan.length;i++){
										aSpan[i].style.opacity=1;
										aSpan[i].style.backgroundImage='url(images/j'+iNow%3+'.jpg)';
										oBox.style.backgroundImage='url(images/j'+(iNow+1)%3+'.jpg)';
									}
									t=true;
								}
							}
						});
					})(n);
						
						n++;
						if(n==aSpan.length){
							clearInterval(timer);
						}
				},100);
				
			};
			
			
			
			
			
			
			
			
			
		//鼠标跟随事件	
		FnMove('im1');
		FnMove('im2');
		FnMove('im3');
		FnMove('im4');
};	