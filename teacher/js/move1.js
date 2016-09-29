
$(function() {
	$(document).delegate('#box1 li', 'mouseenter', function() {
		$(this).find('li').hide();
		$(this).find('span').show();
	});
	$(document).delegate('#box1 li', 'mouseleave', function() {
		$(this).find('span').hide();

	});
});



$(function() {
	$(document).delegate('#read div', 'mouseenter', function() {
		$('#read div').removeClass('add_active');
		$(this).addClass('add_active');
		$('#read_Box div').css('display','none');
		var index=$(this).index('#read div');
		$('#read_Box div').eq(index).css('display','block');
	});
	/*$(document).delegate('#box1 li', 'mouseleave', function() {
		$(this).find('span').hide();

	});*/
});








// 全选 

$(function() {
		$('#inputCheck').click(function() {
			$("input[name='Checkbox1']").each(function(idx, item) {
				$(item).attr("checked", !$(item).attr("checked"));
		})
	});
});



$(function(){
		// 悬浮右侧显示头像
		$('#smallBox').mouseenter(function(ev) {
			
			$('#smallBox').mousemove(function(ev) {
				var sLeft=ev.pageX-$('#follow').width()/2-$('#smallBox').offset().left;
				var sTop=ev.pageY-$('#follow').height()/2-$('#smallBox').offset().top;
				if(sLeft<=0)sLeft=0;
				if(sTop<=0)sTop=0;
				if(sLeft>$('#smallBox').width()-$('#follow').width())sLeft=$('#smallBox').width()-$('#follow').width();
				if(sTop>$('#smallBox').height()-$('#follow').height())sTop=$('#smallBox').height()-$('#follow').height();
				$('#follow').css({
					left:sLeft+'px',
					top:sTop+'px',
				});
				$('#bigBox img').css({
					marginLeft:-sLeft+'px',
					marginTop:-sTop+'px',
				});
				
			}).mouseleave(function(){
				$('#follow').css({
					'display':'block',
				});
				
			});
		});
	})

function show(){
	var oSearch=document.getElementById('search');	
	var oBtn=document.getElementById('btn1');
	oBtn.onclick=function(){
			oSearch.style.display='block';	
	};
}

function Tab(a,b,c){
	var oI=document.getElementById(a);	
	var oS=document.getElementById(b);
		oI.onclick=function(){
			if(oS.className=='show'){
				oS.className='hide';
			}else{
				oS.className='show';	
			}	
		}		
}

window.onload=function(){
	
	show();
	//Tab('icon1','s1','show');
	//Tab('icon2','s2','show');
	//Tab('icon3','s3','show');

};





function description(obj) {
    var obj = $(obj);
    if (obj.size()) {
        var type = obj.attr('rel');
        if (type == 'f') {
            obj.parent().hide().next('p').show().css({
                height: 'auto',
            });
        } else {
            obj.parent().hide().prev('p').show();
        }
    }
}



















