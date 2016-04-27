window.onload=function(){
		/*var arr=[
			'第一页',
			'第二页',
			'第三页',
			'第四页',
			'第五页',
			'第六页',
			'第七页',
			'第八页',
			'第九页'
		];*/
		var oListBox=document.getElementById('mainList');
		var aList=oListBox.children;
		var oListBtn=document.getElementById('mainBtn');
		var aBtn=oListBtn.children;
		var oTxt=document.getElementById('mainTxt');
		var oNext=document.getElementById('next');
		var oFirst=document.getElementById('first');
		for(var i=0;i<aBtn.length;i++){
			(function(index){
				aBtn[i].onmouseover=function(){
					num=index;
					tab(num);
				};	  
			})(i)
			
		}
		
		function tab(n){
			for(var i=0;i<aBtn.length;i++){
				aBtn[i].className='';
				aList[i].className='';
			}
				aBtn[n].className='active0';
				aList[n].className='show';
				//oTxt.innerHTML=arr[n];	
		}
		
		
		var num=0;
		oNext.onclick=function(){
			num++;
			if(num==aBtn.length){num=0;}
			tab(num);
		};
		oFirst.onclick=function(){
			num--;
			if(num==-1){num=aBtn.length-1;}
			tab(num);
		};
		
		
		
		function moveColor(id,active){
			var navBox=document.getElementById(id);
			var navLi=navBox.getElementsByTagName('a');
			for(var i=0;i<navLi.length;i++){
				navLi[i].onmouseover=function(){
				
					for(var i=0;i<navLi.length;i++){
						navLi[i].className='';
					}
						this.className=active;
				};
			}
		
		}
		moveColor('menu1','active');
		moveColor('menu2','active1');
		
		
		function show(id1,id2){
			var sBtn=document.getElementById(id1);
			var seeList=document.getElementById(id2);
			
			sBtn.onmouseover=function(){
				seeList.style.display='block';
				seeList.style.zIndex=999;
					
			};
			sBtn.onmouseout=function(){
				seeList.style.display='none';
			};
		
		}
		show('see','seeShow');	
		show('see1','seeShow1');
		show('btn1','btnShow1');
		show('btn2','btnShow2');
		show('btn3','btnShow3');
		
		var searchBtn=document.getElementById('search');
		var searchShow=document.getElementById('search_show');
		searchBtn.onfocus=function(){
			searchShow.style.display='block';	
			searchShow.style.zIndex=999;
		};
		searchBtn.onblur=function(){
			searchShow.style.display='none';	
		};
		
		
		//无缝滚动
		function moveScroll(id){
			var oUl=document.getElementById(id);
			var aLi=oUl.children;
				oUl.innerHTML+=oUl.innerHTML;
				oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
			setInterval(function(){
				var l=oUl.offsetLeft+2;
				if(l>=0){l=-oUl.offsetWidth/2;}
				oUl.style.left=l+'px';		 
			},30);
		}
		
		moveScroll('MoveAd');
		moveScroll('scrollBox');
		
		
		 
		
		
		
		
		
		
		
		
		
		
	};
	