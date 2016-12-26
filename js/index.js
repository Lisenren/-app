// var leftsro = new IScroll("#left");
// var rightsro = new IScroll("#right")
   var homesro = new IScroll("#home");
;(function($){

	$("#foot").on("click","span",function(e){
		e.preventDefault();
		$(this).addClass("on").siblings().removeClass();
		var id = $(this).attr("data");
		//alert(id)
		$(id).css({
			"display" : "block"
		}).siblings().css({
			"display" : "none"
		})
	})
	homesro.refresh();
	//渲染
	var data,tate,yata,dta;
	$.ajax({
		url:"js/data.json",
		success:function(e){
			data=e.shouye.homes_banner;
			tate=e.shouye.homes_tu;
			yata=e.shouye.homes_cen_t;
			dta=e.shouye.homes_btm;
			console.log(yata)
			var str="";
			for(var i in data){
				str+="<img src='"+data[i].img+"'>";
			}
			$(".homes-banner").html(str);
			var str1="";
			for(var i in tate){
				str1+="<dl><dt><img src='"+tate[i].img+"'/></dt><dd>"+tate[i].title+"</dd></dl>"
			}
			$(".homes-tu").html(str1);
			var	 str2="";
			for(var i in yata){
				str2+="<dl><dt><img src='"+yata[i].img+"'/></dt><dd><p>"+yata[i].title+"</p></dd></dl>"
			}
			$(".homes-cen-t").html(str2);
			var str3="";
			for(var i  in dta){
				str3+="<img src='"+dta[i].img+"'><div class='homes-bom'><h3>"+dta[i].title+"</h3><a href='#'>"+dta[i].txt+"</a><a href='#'>"+dta[i].txt2+"</a></div><p><i class='fa fa-map-marker'></i><small>"+dta[i].tle+"</small></p>";
			}
			$(".homes-btm").html(str3)
		}
	})
//左右滑动
	var len=$("#homes-cen-t").children().length;
	var ind=0;
	console.log(ind)
	
	
	var startX=0,
		moveX=0,
		offSet=0,
		obj=null;
	function sFn(e){
		startX=e.touches[0].clientX;
	}
	function mFn(e){
		moveX=e.touches[0].clientX;
		obj=$(e.target).parents('#homes-cen-t');
	}
	function eFn(e){
		offSet=moveX-startX;
		if(offSet>30){
			obj.css('margin-left',0).siblings().css('margin-left',"-.7rem")
		}else if(offSet<-30){
			obj.css('margin-left',"-.7rem")
		}
	}
	window.addEventListener("touchstart",sFn,false);
	window.addEventListener("touchmove",mFn,false);
	window.addEventListener("touchend",eFn,false);
	
	$("#homes-cen-t").swipeLeft(function(){
		ind++;
		if(ind>len){
			ind=len;
		}
		
	}).swipeRight(function(){
			ind--;
			if(ind<=0){
				ind=0;
			}
			
		})
})(Zepto);