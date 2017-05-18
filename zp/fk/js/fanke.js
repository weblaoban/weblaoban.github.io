$(function(){


	// 13.获取obj的样式
	// obj 类型 DOM元素
	// style 类型 string
	function attr(obj,style){
		return window.getComputedStyle(obj,null)[style];
	}


	Zlunbo(".banner a img",".banner",".lunbodian",[],".zuojian",".youjian",2,"#c81623",1500,1,"gray",6);
	
	// const daohanglan=$(".daohanglan");
	// const xiala=$(".xiala");
	// xvanxiangka(daohanglan,xiala);

	const gouwudakuai=$(".gouwudakuai");
	const gouwukuai=$(".gouwukuai");
	xvanxiangka(gouwudakuai,gouwukuai);

	const item=$(".daohanglan");
	const ul=$(".xiala");
	for(let i=0;i<ul.length;i++){
		let h=parseInt(attr(ul[i],"height"));
		ul[i].setAttribute("h",h);
		ul[i].style.height=0;
		
	}
	for(let i=0;i<item.length;i++){
		hover(item[i],function(){
			if(item[i].children[0]){
				let ul=item[i].children[0];
				ul.style.paddingTop=10+"px";
				animate(ul,{height:ul.getAttribute("h")},500);
			}
		},function(){
			if(item[i].children[0]){
				let ul=item[i].children[0];
				animate(ul,{height:0},500);
			}
		})
}

	// const xuan=document.querySelectorAll(".xuan");
	// const kehu=document.querySelectorAll(".kehu");
	// console.log(xuan);
	// for(i=0;i<xuan.length;i++){
	// 	console.log(kehu[i]);
	// 	kehu[i].onmouseover=function(){
	// 		xuan[i].style.display="block";
	// 	}
	// 	console.log(xuan[i]);
	// 	kehu[i].onmouseout=function(){
	// 		xuan[i].style.display="none";
	// 	}
	// }
})

