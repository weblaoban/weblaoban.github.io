// 轮播图
const bannerBox=$(".bannerBox")[0];
const bannerdtu=$(".bannerdtu");
const zuojian=$(".zuojian")[0];
const youjian=$(".youjian")[0];
const lunbotiao=$(".lunbotiao");
var t=setInterval(move,1000);
var num=0;
bannerdtu[0].style.opacity=1;
function move(type="r"){
	if(type=="r"){
		num++;
		if(num>bannerdtu.length-1){
			num=0;
		}
	}
	if(type=="l"){
		num--;
		if(num<0){
			num=0;
			return;
		}
	}
	for(let j=0;j<bannerdtu.length;j++){
		bannerdtu[j].style.opacity=0;
		lunbotiao[j].classList.remove("active");
	}
	bannerdtu[num].style.opacity=1;
	lunbotiao[num].classList.add("active");
}
bannerBox.onmouseover=function(){
	clearInterval(t);
	zuojian.style.opacity=0.7;
	youjian.style.opacity=0.7;
}
bannerBox.onmouseout=function(){
	t=setInterval(move,1000);
	zuojian.style.opacity=0;
	youjian.style.opacity=0;
}
zuojian.onclick=function(){
	move("l");
}
youjian.onclick=function(){
	move("r");
}
for(let i=0;i<lunbotiao.length;i++){
	lunbotiao[i].onmouseover=function(){
		for(let j=0;j<lunbotiao.length;j++){
			lunbotiao[j].classList.remove("active");
			bannerdtu[j].style.opacity=0;
		}
		lunbotiao[i].classList.add("active");
		bannerdtu[i].style.opacity=1;
		num=i;
	}
}
// 轮播图完

// 超级热卖
const li=$(".czrmZuo ul li");
const lispan=$(".czrmZuo ul li span");
const czrmZuoXia=$(".czrmZuoXia");
czrmZuoXia[0].style.zIndex=2;
lispan[0].style.display="block";
for(let i=0;i<li.length;i++){
	li[i].onmouseover=function(){
		for(let j=0;j<li.length;j++){
			lispan[j].style.display="none";
			li[j].classList.remove("active");
			czrmZuoXia[j].style.zIndex=1;
		}
		czrmZuoXia[i].style.zIndex=2;
		lispan[i].style.display="block";
		li[i].classList.add("active");
	}
}

// 商场同款
const tkli=$(".tknav ul li");
const con=$(".tkconyouxia");
const tklispan=$(".tknav ul li span");
con[0].style.zIndex=2;
tklispan[0].style.display="block";
for(let i=0;i<tkli.length;i++){
	tkli[i].onmouseover=function(){
		for(let j=0;j<tkli.length;j++){
			tklispan[j].style.display="none";
			con[j].style.zIndex=1;
			tkli[j].classList.remove("active");
		}
		con[i].style.zIndex=2;
		tklispan[i].style.display="block";
		tkli[i].classList.add("active");
	}
}


// 边框
const tu=$(".tu");
for(let i=0;i<tu.length;i++){
	const borders=$(".bordertop",tu[i])[0];
	const borderx=$(".borderbottom",tu[i])[0];
	const borderz=$(".borderleft",tu[i])[0];
	const bordery=$(".borderright",tu[i])[0];
	tu[i].onmouseover=function(){
		borders.style.width=tu[i].offsetWidth-1+"px";
		borderx.style.width=tu[i].offsetWidth-1+"px";
		borderz.style.height=tu[i].offsetHeight-1+"px";
		bordery.style.height=tu[i].offsetHeight-1+"px";
	}
	tu[i].onmouseout=function(){
		borders.style.width=0;
		borderx.style.width=0;
		borderz.style.height=0;
		bordery.style.height=0;
	}
}



// 名品大轮播
const mpbox=$(".dong")[0];
const mptubox=$(".dong ul")[0];
const mpzuo=$(".dong .zuojian")[0];
const mpyou=$(".dong .youjian")[0];
const mpdian=$(".dong .mpdian");
let imgW=parseInt(window.getComputedStyle(mpbox,null).width);
mpzuo.onclick=function(){
	mptubox.style.left=0;
	mpdian[0].classList.add("mpactive");
	mpdian[1].classList.remove("mpactive");
}
mpyou.onclick=function(){
	mptubox.style.left=-imgW+"px";
	mpdian[1].classList.add("mpactive");
	mpdian[0].classList.remove("mpactive");
}


const mpbox1=$(".dong1")[0];
const mptubox1=$(".dong1 ul")[0];
const mpzuo1=$(".dong1 .zuojian")[0];
const mpyou1=$(".dong1 .youjian")[0];
const mpdian1=$(".dong1 .mpdian");
let imgW1=parseInt(window.getComputedStyle(mpbox1,null).width);
mpzuo1.onclick=function(){
	mptubox1.style.left=0;
	mpdian1[0].classList.add("mpactive");
	mpdian1[1].classList.remove("mpactive");
}
mpyou1.onclick=function(){
	mptubox1.style.left=-imgW+"px";
	mpdian1[1].classList.add("mpactive");
	mpdian1[0].classList.remove("mpactive");
}

tongshi(".ssmp1 .mpdakuai",".ssmp1 .mpxiaokuai",".ssmp1 .mpnavsx",".ssmp1 .mpzuojian",".ssmp1 .mpyoujian",2,1000,500);
tongshi(".ssmp2 .mpdakuai",".ssmp2 .mpxiaokuai",".ssmp2 .mpnavsx",".ssmp2 .mpzuojian",".ssmp2 .mpyoujian",2,1000,500);
tongshi(".ssmp3 .mpdakuai",".ssmp3 .mpxiaokuai",".ssmp3 .mpnavsx",".ssmp3 .mpzuojian",".ssmp3 .mpyoujian",2,1000,500);
tongshi(".ssmp4 .mpdakuai",".ssmp4 .mpxiaokuai",".ssmp4 .mpnavsx",".ssmp4 .mpzuojian",".ssmp4 .mpyoujian",2,1000,500);
tongshi(".ssmp5 .mpdakuai",".ssmp5 .mpxiaokuai",".ssmp5 .mpnavsx",".ssmp5 .mpzuojian",".ssmp5 .mpyoujian",2,1000,500);
tongshi(".ssmp6 .mpdakuai",".ssmp6 .mpxiaokuai",".ssmp6 .mpnavsx",".ssmp6 .mpzuojian",".ssmp6 .mpyoujian",2,1000,500);
tongshi(".ssmp7 .mpdakuai",".ssmp7 .mpxiaokuai",".ssmp7 .mpnavsx",".ssmp7 .mpzuojian",".ssmp7 .mpyoujian",2,1000,500);
tongshi(".ssmp8 .mpdakuai",".ssmp8 .mpxiaokuai",".ssmp8 .mpnavsx",".ssmp8 .mpzuojian",".ssmp8 .mpyoujian",2,1000,500);
tongshi(".ssmp9 .mpdakuai",".ssmp9 .mpxiaokuai",".ssmp9 .mpnavsx",".ssmp9 .mpzuojian",".ssmp9 .mpyoujian",2,1000,500);



//楼层跳转
	const CH=document.documentElement.clientHeight;
	const floors=$(".ssmp");
	const lou=$(".louceng");
	const first=lou[0];
	const chuxian=$(".sctkBox")[0];
	var sobj=scrollobj();
	const loubox=$(".youguding")[0];
	for(let i=0;i<floors.length;i++){
		lou[i].onclick=function(){
			animate(sobj,{scrollTop:floors[i].offsetTop},500);
		}
		
	}
	window.onscroll=function(){
		if(sobj.scrollTop>=chuxian.offsetTop){
			loubox.style.display="block";
			lou.forEach(function(v,i){
				v.classList.remove("active1");
			})
		}else{
			loubox.style.display="none";
		}
		for(let i=0;i<floors.length;i++){
			if(sobj.scrollTop>=floors[i].offsetTop){
				for(let j=0;j<floors.length;j++){
					lou[j].classList.remove("active1");
				}
				lou[i].classList.add("active1");
			}
		}
	}
	//右固定栏
	for(let k=0;k<floors.length;k++){
		lou[k].onmouseover=function(){
			for(let i=0;i<floors.length;i++){
				if(sobj.scrollTop>=floors[i].offsetTop){
					for(let j=0;j<floors.length;j++){
						lou[j].classList.remove("active1");
					}
					lou[i].classList.add("active1");
				}
				lou[k].classList.add("active1");
			}
		}
		lou[k].onmouseout=function(){
			lou[k].classList.remove("active1");
			for(let i=0;i<floors.length;i++){
				if(sobj.scrollTop>=floors[i].offsetTop){
					for(let j=0;j<floors.length;j++){
						lou[j].classList.remove("active1");	
					}
					lou[i].classList.add("active1");
				}
			}	
		}
	}
	//返回顶部
	const returnTop=$(".returnTop")[0];
	var sobj=scrollobj();
	returnTop.onclick=function(){
		animate(sobj,{scrollTop:0},500);
	}
	returnTop.onmouseover=function(){
		returnTop.classList.add("active1");
	}
	returnTop.onmouseout=function(){
		returnTop.classList.remove("active1");
	}

