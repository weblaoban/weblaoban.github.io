$(function(){
	// banner图
	Zjlunbo(".bannertu",".bannerArea",".lunbodian",[],".zuojian",".youjian",2,"#ff6700",1500,1,"",4);
	// 明星单品
	tongshi(".mxtu ul",".iteam",".mxtu",".zuojian2",".youjian2",5,2000000,1000);
	// 为你推荐
	tongshi(".tuijian ul",".tuijiantu",".tuijian",".zuojian0",".youjian0",5,2000000,1000);
	// 哈利波特
	zylunbo(".lunbo1 li",".lunbo1",".lunbo1",[]," .lunbo1 .dian1",".lunbo1 .zuojian1",".lunbo1 .youjian1",1500,"active");
	zylunbo(".lunbo2 li",".lunbo2",".lunbo2",[],".lunbo2 .dian1",".lunbo2 .zuojian1",".lunbo2  .youjian1",1500,"active");
	zylunbo(".lunbo3 li",".lunbo3",".lunbo3",[],".lunbo3 .dian1",".lunbo3 .zuojian1",".lunbo3 .youjian1",1500,"active");
	zylunbo(".lunbo4 li",".lunbo4",".lunbo4",[],".lunbo4 .dian1",".lunbo4 .zuojian1",".lunbo4 .youjian1",1500,"active");
	// 遮罩
	const btn=$(".dp");
	const zhe=$(".zhezhao");
	for(let i=0;i<btn.length;i++){
		btn[i].onmouseover=function(){
			// zhe[i].style.height=0;
			animate(zhe[i],{bottom:0},500);
		}
		btn[i].onmouseout=function(){
			// zhe[i].style.height=80+"px";
			animate(zhe[i],{bottom:-88},500);
		}
	}
	// xvanxiangka(".nav_box_1",".navLis");
	const item=$(".nav_box_1");
	const ul=$(".navLis");
	for(let i=0;i<ul.length;i++){
		let h=parseInt(attr(ul[i],"height"));
		ul[i].setAttribute("h",h);
		ul[i].style.height=0;
	}
	for(let i=0;i<item.length;i++){
		hover(item[i],function(){
			if(item[i].children[1]){
				let ul=item[i].children[1];
				ul.style.borderTop="1px solid #ccc";
				animate(ul,{height:ul.getAttribute("h")},500);
			}
		},function(){
			if(item[i].children[1]){
				let ul=item[i].children[1];
				ul.style.borderTop="0";
				animate(ul,{height:0},500);
			}
		})
	}

	// 选项卡
	const dbtn=$(".dapei h2 a");
	const con=$(".hulianwang ul");
	for(let i=0;i<dbtn.length;i++){
		dbtn[i].onmouseover=function(){
			for(let j=0;j<con.length;j++){
				dbtn[j].classList.remove("active4");
				con[j].classList.remove("zindex");
			}
			dbtn[i].classList.add("active4");
			con[i].classList.add("zindex");
		}
	}
})

