// 选项卡 
// btn选项卡按钮 con选项卡内容
	function xvanxiangka(btn1,con1){
		const btn=$(btn1);
		const con=$(con1);
		for(let i=0;i<btn.length;i++){   //for里let不能改成var
			btn[i].onmouseover=function(){
			con[i].style.display="block";
		}
		btn[i].onmouseout=function(){
			con[i].style.display="none";
		}
	}	
	}


// 遮罩
// btn底下的块，con遮罩的块
	function zhe(btn2,con2){
		const btn=$(btn2);
		const con=$(con2);
	for(let i=0;i<btn.length;i++){
		btn[i].onmouseover=function(){
		con[i].style.display="block";
			}
		btn[i].onmouseout=function(){
			con[i].style.display="none";
			}
		}
	}


// 函数简化
	function $(select,obj=document){
		if(typeof select=="function"){
			window.onload=function(){
				select();
			}
		}else if(typeof select=="string"){
			if(/^<\w+>$/.test(select)){
				return document.createElement(select.slice(1,-1));
			}else{
				return obj.querySelectorAll(select);
			}
			
		}
	}
	// $(".box")
	// $(function(){})


//层级轮播
	// pic轮播图填 字符串的选择器 
	// bigbannerBox通屏banner盒子 字符串的选择器
	// lunbodian轮播点 字符串选择器
	// colorArr通屏banner颜色 数组 ["red","blue"]
	// tuBigZ高层级
	// liactivebgColor轮播点获得焦点时背景颜色
	// lunboTime时间间隔
	// tuZ普通层级
	// lisColor轮播点普通颜色
	// type 不传值时默认层级轮播 type==1时，透明度轮播
	function Zlunbo(pic,bigbannerBox,lunbodian,colorArr,tuBigZ,liactivebgColor,lunboTime,tuZ,lisColor,tupiangeshu,type=0){
		if(type==0){
		const tupian=$(pic);
		const banner=$(bigbannerBox)[0];
		const li=$(lunbodian);
		const color=colorArr;
		tupian[0].style.zIndex=tuBigZ;
		li[0].style.background=liactivebgColor;
		banner.style.background=color[0];
		var num=0;
		var t=setInterval(move,lunboTime);
		banner.onmouseover=function(){
			clearInterval(t);
		}
		banner.onmouseout=function(){
			t=setInterval(move,lunboTime);
		}
		
			for(let j=0;j<li.length;j++){
			li[j].onmouseover=function(){
				clearInterval(t);
				for(let i=0;i<tupian.length;i++){
					tupian[i].style.zIndex=tuZ;
					li[i].style.background=lisColor;
				}
				tupian[j].style.zIndex=tuBigZ;
				li[j].style.background=liactivebgColor;
				banner.style.background=color[j];
				num=j;
			}
		}
		function move(){
			num++;
			if(num>tupiangeshu){
				num=0;
			}
			// console.log(num);
			for(let i=0;i<tupian.length;i++){
				tupian[i].style.zIndex=tuZ;
				li[i].style.background=lisColor;
			}
			tupian[num].style.zIndex=tuBigZ;
			li[num].style.background=liactivebgColor;
			banner.style.background=color[num];
		}
		}
		


		else{
			// pic轮播图填 字符串的选择器 
		// bigbannerBox通屏banner盒子 字符串的选择器
		// lunbodian轮播点 字符串选择器
		// colorArr通屏banner颜色 数组 ["red","blue"]
		// tuBigZ不透明
		// liactivebgColor轮播点获得焦点时背景颜色
		// lunboTime时间间隔
		// tuZ透明
		// lisColor轮播点普通颜色
		// type 不传值时默认层级轮播 type==1时，透明度轮播
			const tupian=$(pic);
			const banner=$(bigbannerBox)[0];
			const li=$(lunbodian);
			const color=colorArr;
			tupian[0].style.zIndex=tuBigZ;
			li[0].style.background=liactivebgColor;
			banner.style.background=color[0];
			var num=0;
			var t=setInterval(move,lunboTime);
			banner.onmouseover=function(){
				clearInterval(t);
			}
			banner.onmouseout=function(){
				t=setInterval(move,lunboTime);
			}
			for(let j=0;j<li.length;j++){
				clearInterval(t);
				li[j].onmouseover=function(){
				for(let i=0;i<tupian.length;i++){
					tupian[i].style.opacity=tuZ;
					li[i].style.background=lisColor;

				}
				tupian[j].style.opacity=tuBigZ;
				animate(tupian[num],{opacity:0},500);
				li[j].style.background=liactivebgColor;
				banner.style.background=color[j];
				num=j;
				}
			}
			function move(){
				num++;
				if(num>tupiangeshu){
					num=0;
				}
				// console.log(num);
				for(let i=0;i<tupian.length;i++){
					tupian[i].style.opacity=tuZ;
					li[i].style.background=lisColor;
				}
				tupian[num].style.opacity=tuBigZ;
				animate(tupian[num],{opacity:0},500);
				li[num].style.background=liactivebgColor;
				banner.style.background=color[num];

			}
		}
	}



// 楼层跳转 按需加载
	// anniu  楼层的按钮
	// Section  section
	// anniukuai  按钮的大块
	// daohang   导航
	// pic   图片
	// picurl  放图片的地址属性名
	// chushise 按钮本来的颜色
	// activese  按钮点住的颜色
	// donghuaTime  动画时间
	// num  导航出现的高度
function louceng(anniu,Section,anniukuai,daohang,pic,picurl,chushise,activese,donghuaTime,num){
	const btn=$(anniu);
	const section=$(Section);
	const btnbox=$(anniukuai)[0];
	const nav=$(daohang)[0];
	const CH=document.documentElement.clientHeight;
	let scroll= scrollobj();
	for(let i=0;i<btn.length;i++){
		btn[i].onclick=function(){
			animate(scroll,{scrollTop:section[i].offsetTop},donghuaTime);
		}
	}
	let flagx=true;
	let flags=true;
	window.onscroll=function(){
		for(let i=0;i<section.length;i++){
			if(scroll.scrollTop+0.5*CH>=section[i].offsetTop){
				for(let j=0;j<btn.length;j++){
					btn[j].style.background=chushise;
				}
				btn[i].style.background=activese;
			}
			if(scroll.scrollTop+CH>=section[i].offsetTop){
				let img=$(pic,section[i]);
				for(let k=0;k<img.length;k++){
					img[k].src=img[k].getAttribute(picurl);
				}
			}
		}
		if(scroll.scrollTop>=num){
			if(flagx){
				flagx=false;
				flags=true;
				animate(nav,{top:0},donghuaTime,function(){
					flagx=true;
				})
			}
			btnbox.style.display="block";
		}else{
				if(flags){
				flags=false;
				flagx=true;
				animate(nav,{top:-50},donghuaTime,function(){
					flags=true;
				})
				}
				
			btnbox.style.display="none";

			}
	}
}

// 获取scrollTop前的对象
	function scrollojb(){
		let body=document.body;
		let html=document.documentElement;
		body.scrollTop=1;
		html.scrollTop=1;
		let obj;
		if(body.scrollTop==0){
			obj=html;
		}else{
			obj=body;
		}
		return obj;
	}


