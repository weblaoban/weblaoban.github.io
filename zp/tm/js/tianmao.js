$(function(){
	Zlunbo(".tu img",".dhfenlei",".lunbodian",["#e8e8e8","#f4d9c4","#e8e8e8","#e8e8e8","#e8e8e8","#910FFF"],2,"#fff",1500,1,"gray",5);

	xvanxiangka(".bannertu .dhfenlei .neikuan li",".bannerDabai");
	xvanxiangka(".wode",".yimai");

	zhe(".pinpai ul li",".shoucang");
	zhe(".SKII",".zhezhao");

	// 小猫
	const btnm=$(".bannerBox .zhudaohang .neikuan a");
	const conm=$(".xiaomao");
	for(let i=0;i<btnm.length;i++){
		btnm[i].onmouseover=function(){
			for(let j=0;j<conm.length;j++){
				conm[j].style.top=-3+"px";
			}
			animate(conm[i],{top:-13},300)
		}
	}
	// 右固定
	const youm=$(".right_mao")[0];
	const youk=$(".right_maoLis1")[0];
	youm.onmouseover=function(){
		youk.style.display="block";
		animate(youk,{opacity:1,left:-90,},500);
	}
	youm.onmouseout=function(){
		youk.style.display="none";
		animate(youk,{opacity:0,left:-130},500);
	}

	// 资产
	const youz=$(".you_zichan")[0];
	const youk1=$(".right_maoLis2")[0];
	youz.onmouseover=function(){
		youk1.style.display="block";
		animate(youk1,{opacity:1,left:-90},500);
	}
	youz.onmouseout=function(){
		youk1.style.display="none";
		animate(youk1,{opacity:0,left:-130},500);
	}

	const youy=$(".you_yhfk")[0];
	const youk5=$(".right_maoLis5")[0];
	youy.onmouseover=function(){
		youk5.style.display="block";
		animate(youk5,{opacity:1,left:-90},500);
	}
	youy.onmouseout=function(){
		youk5.style.display="none";
		animate(youk5,{opacity:0,left:-130},500);
	}



	xvanxiangka(".you_ewm",".you_ewmLis");

	const youg=$(".you_guanzhu");
	const youk2=$(".right_maoLis3");
	for(let i=0;i<youg.length;i++){
		youg[i].onmouseover=function(){
			youk2[i].style.display="block";
		animate(youk2[i],{opacity:1,left:-90},500);
		}
		youg[i].onmouseout=function(){
			youk2[i].style.display="none";
			animate(youk2[i],{opacity:0,left:-130},500);
		}
	}

	const youc=$(".you_cz");
	const youk3=$(".right_maoLis4");
	for(let i=0;i<youc.length;i++){
		youc[i].onmouseover=function(){
			youk3[i].style.display="block";
		animate(youk3[i],{opacity:1,left:-90},500);
		}
		youc[i].onmouseout=function(){
			youk3[i].style.display="none";
			animate(youk3[i],{opacity:0,left:-130},500);
		}
	}
	// 右固定完
	xvanxiangka(".taobao",".xiaxuankuang1");
	xvanxiangka(".shoucang11",".xiaxuankuang2");
	xvanxiangka(".shouji",".xiaxuankuang3");
	xvanxiangka(".shangjia",".xiaxuankuang4");
	xvanxiangka(".daohang",".xiaxuankuang5");

	const floor=$("section");
	const btn=$(".dingwei ul li");
	const btBox=$(".dingwei")[0];
	const db=$(".fh")[0];
	const color=["#EA5F8D","#0AA6E8","#64C333","#F15453","#19C8A9","#F7A945"];
	const nav=$(".navB")[0];
	let sobj=document.body;
	sobj.scrollTop=1;
	const CH=document.documentElement.clientHeight;
	let flagx=true;
	let flags=false;
	
	for(let i=0;i<floor.length;i++){
		btn[i].onclick=function(){
			animate(sobj,{scrollTop:floor[i].offsetTop-50},500);
		}
		
	}

		for(let i=0;i<btn.length;i++){
			btn[i].onmouseover=function(){
				for(let k=0;k<floor.length;k++){
					if(sobj.scrollTop+0.5*CH>=floor[k].offsetTop){
						for(let j=0;j<floor.length;j++){
							btn[j].style.background="#666";
						}
					btn[k].style.background=color[k];
				}
			}
			btn[i].style.background=color[i];
		}
	
			btn[i].onmouseout=function(){				
				btn[i].style.background="#666";
				for(let k=0;k<floor.length;k++){
					if(sobj.scrollTop+0.5*CH>=floor[k].offsetTop){
						for(let j=0;j<floor.length;j++){
							btn[j].style.background="#666";
						}
						btn[k].style.background=color[k];
					}
				}

			}
			
				
		}

	db.onclick=function(){
		animate(sobj,{scrollTop:0},500);
	}
		
	window.onscroll=function(){
		if(sobj.scrollTop+0.5*CH>=floor[0].offsetTop){
			btBox.style.display="block";
			animate(btBox,{height:258,width:36},500);
			
		}else{
			animate(btBox,{height:0,width:0},500);
		}
		if(sobj.scrollTop>=722){
			if(flagx){
				flagx=false;
				flags=true;
				animate(nav,{top:0},500,function(){
					flagx=true;
				})
			}
		}else{
			if(flags){
				flags=false;
				flagx=true;
				animate(nav,{top:-50},500,function(){
					flags=true;
					})
				}
		}

		for(let i=0;i<floor.length;i++){
			if(sobj.scrollTop+0.5*CH>=floor[i].offsetTop){
				for(let j=0;j<floor.length;j++){
					btn[j].style.background="#666";
				}
				btn[i].style.background=color[i];
			}
	
		}


		const section=$("section");
		for(let i=0;i<section.length;i++){
			const img=$("img",section[i]);
			if(sobj.scrollTop+CH>=section[i].offsetTop){
				for(let j=0;j<img.length;j++){
					img[j].src=img[j].getAttribute("imgurl");
				}
			}
		}

		}
		


		// 品牌街

		const zuoxia=$(".zuoxiatu ol li");
		const zuoshang=$(".zuoshang");
		const zhez=$(".zhez");
		console.log(zuoxia)
		console.log(zuoshang)
		zhez[0].style.display="block";
		for(let i=0;i<zuoxia.length;i++){
			zuoxia[i].onmouseover=function(){
				for(let j=0;j<zuoshang.length;j++){
					zuoshang[j].style.zIndex=1;
					zhez[j].style.display="none";
				}
				zhez[i].style.display="block";
				zuoshang[i].style.zIndex=2;
			}
		}

		// 品牌街的轮播
		const zuo=$(".zuo")[0];
		const you=$(".you")[0];
		const tuB=$(".zuoxiatu ol")[0];
		zuo.onclick=function(){
			tuB.style.left=-488+"px";
			animate(tuB,{left:0},1000);
			zuo.style.display="none";
			you.style.display="block";
		}
		you.onclick=function(){
			animate(tuB,{left:-488},1000);
			you.style.display="none";
			zuo.style.display="block";
		}
		// 品牌街字
		const zhiboz=$(".zhiboz .zib")[0];
		let tz=setInterval(movez,1500);
		let tz1=setInterval(movez1,3000);
		function movez(){
			let first=zhiboz.firstElementChild;
			animate(zhiboz,{top:-40},900)
		}
		function movez1(){
			let first=zhiboz.firstElementChild;
			animate(zhiboz,{top:0},900);
		}

		const zhibozi=$(".zhiboz .zib .zi");
		for(let i=0;i<zhibozi.length;i++){
			zhibozi[i].onmouseover=function(){
				clearInterval(tz);
				clearInterval(tz1);
			}
			zhibozi[i].onmouseout=function(){
				tz=setInterval(movez,2000);
				tz1=setInterval(movez1,4000);
			}
		}
		// 品牌街右
		const lia=$(".li")[0];
		const liab=$(".pinpai ul li");
		let flagt=true;
		lia.onclick=function(){
			for(let i=0;i<liab.length;i++){
				let img=$("img",liab[i])[0];
				if(flagt){
					flagt=false;
					img.style.transform="rotateY(0deg)";
					img.style.transform="rotateY(360deg)";
				}else{
					flagt=true;
					img.style.transform="rotateY(360deg)";
					img.style.transform="rotateY(0deg)";
				}
				
			}
		}
		


		// 字的轮播
		const jingxuan=$(".koubeid");
		for(let i=0;i<jingxuan.length;i++){
			let t=setInterval(move,1000);
			function move(){
				let first=jingxuan[i].children[0];
				// let last=jingxuan[i].lastElementChild;
				animate(jingxuan[i],{top:-30},500,function(){
					jingxuan[i].appendChild(first);
					jingxuan[i].style.top=0;
				});
				
			}
		}

		

		// 按需加载

	
})

