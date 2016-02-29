/**
 * @Title  高山玫瑰
 * @Author a_bing
 * @Date   2015-09-18
 * @email  ia_bing@163.com
 * @note   高山玫瑰-版权所有
**/

$(function(){

	//category
	$('nav li').hover(function(){
        var x = $(this).position().left;
        $(this).find('div').css('left',x+'px');
		$(this).find('div').show();
	},function(){
		$(this).find('div').hide();
	});

	//banner
	jQuery("#slideBox").slide({mainCell:".bd ul",autoPlay:true,interTime:5000,delayTime:1500,effect:'fold'});

	//detailed
	$('#deConcat span').click(function(){
		var othis = $(this);
		var target = $('.detConDiv');
		othis.siblings('span').removeAttr('id');
		othis.attr('id','curdetConCat');
		target.hide();
		target.eq(othis.index()).show();
	});
});

function showTime(){
	var now=new Date();
	var year=now.getFullYear();
	var month=now.getMonth() + 1;
	var day=now.getDate();
	var hours=now.getHours();
	var minutes=now.getMinutes();
	var seconds=now.getSeconds();
	var weekday=new Array(7);
	weekday[0]="星期日";
	weekday[1]="星期一";
	weekday[2]="星期二";
	weekday[3]="星期三";
	weekday[4]="星期四";
	weekday[5]="星期五";
	weekday[6]="星期六";
	document.getElementById('timeSpan').innerHTML=" 欢迎进入高山玫瑰户外探险网，现在时间："+year+"年"+month+"月"+day+"日 "+"　"+weekday[now.getDay()]+"　"+hours+"："+minutes+"："+seconds;
	//一秒刷新一次显示时间
	setTimeout(showTime,1000);
}

//加入收藏
function joinShou(url,title){
	if(confirm("网站名称："+title+"\n网址："+url+"\n确定添加收藏?")){
      var ua = navigator.userAgent.toLowerCase();
      if(ua.indexOf("msie 8")>-1){
          external.AddToFavoritesBar(url,title,'');//IE8
      }else{
          try {
              window.external.addFavorite(url, title);
          } catch(e) {
              try {
                  window.sidebar.addPanel(title, url, "");//firefox
              } catch(e) {
                  alert("加入收藏失败，请使用Ctrl+D进行添加");
              }
          }
      }
  }
}

//设为首页 www.ecmoban.com
function SetHome(obj,url){
    try{
        obj.style.behavior='url(#default#homepage)';
       obj.setHomePage(url);
   }catch(e){
       if(window.netscape){
          try{
              netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
         }catch(e){
              alert("抱歉，此操作被浏览器拒绝！请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
          }
       }else{
        alert("抱歉，您所使用的浏览器无法完成此操作。您需要手动将【"+url+"】设置为首页。");
       }
  }
}