$(function(){
	// Zlunbo(".zhongshang a img",".zhongshang",".lunbodian",[],2,"#c81623",1000,1,"#fff",7,0);

    Zjlunbo(".zhongshang a img",".zhongshang",".lunbodian",[],".zuobtn",".youbtn",2,"#c81623",1000,1,"#fff",7);
     // Zjlunbo(".tuB img",".youxp",".xiaodian",[],".zuoyou",".zuoyou1",2,"#c81623",1000,1,"#fff",4)

     		const tupian=$(".tuB img");
			const banner=$(".youxp")[0];
			const li=$(".xiaodian");
			const color=[];
			const leftBtn=$(".zuoyou")[0];
			const rightBtn=$(".zuoyou1")[0];
			tupian[0].style.zIndex=2;
			li[0].style.background="#c81623";
			var num=0;
			// var t=setInterval(move,1000);
			function move(type="r"){
				if(type=="r"){
					num++;
					if(num>4){
						num=0;
					}
					for(let i=0;i<tupian.length;i++){
						tupian[i].style.zIndex=1;
						li[i].style.background="#fff";
					}
					tupian[num].style.zIndex=2;
					li[num].style.background="#c81623";
					}
				if(type=="l"){
					num--;
					if(num<0){
						num=tupian.length-1;
					}
					for(let i=0;i<tupian.length;i++){
						tupian[i].style.zIndex=1;
						li[i].style.background="#fff";
					}
					tupian[num].style.zIndex=2;
					li[num].style.background="#c81623";
					}

			}
			leftBtn.onclick=function(){
				move("l");
			}
			rightBtn.onclick=function(){
				move("r");
			}
			for(let j=0;j<li.length;j++){
				li[j].onmouseover=function(){
					for(let i=0;i<tupian.length;i++){
						tupian[i].style.zIndex=1;
						li[i].style.background="#fff";
					}
				tupian[j].style.zIndex=2;
				li[j].style.background="#c81623";
				num=j;
				}
			}



	xvanxiangka(".kehu1",".xuan");
	const zuo=document.querySelectorAll(".zuodaohang ul li");
	const zuoli=document.querySelectorAll(".xuanka");
	xvanxiangka(".zuodaohang ul li",".bannerlist");




	// 楼层跳转
	const ding=$(".dingwei1")[0];
	const btn=$(".dingwei1 ul li");
	const navB=$(".navB")[0];
	const floor=$("section");
	const db=$(".fh")[0];
	const fhdb=$(".fanhuidingbu")[0];
	let sobj=document.body;
	sobj.scrollTop=1;
	let PG=document.documentElement.clientHeight;
	let flags=false;
	let flagx=true;

	


	db.onclick=function(){
			animate(sobj,{scrollTop:0},500);
		}
	fhdb.onclick=function(){
		animate(sobj,{scrollTop:0},500);
	}

		

	window.onscroll=function(){
		if(sobj.scrollTop>=651){
			if(flagx){
				flagx=false;
				flags=true;
				animate(navB,{top:0},500,function(){
					flagx=true;
				});
				
			}
		}
		else{
			if(flags){
				flags=false;
				flagx=true;
			}
			animate(navB,{top:-50},500,function(){
					flags=true;
				});
			
		}

		if(sobj.scrollTop+0.5*PG>=floor[0].offsetTop){
			ding.style.display="block";
			animate(ding,{opacity:1},500);
		}else{
			ding.style.display="none";
			animate(ding,{opacity:0},500);
		}

		for(let i=0;i<btn.length;i++){
			btn[i].onclick=function(){
				animate(sobj,{scrollTop:floor[i].offsetTop-50},500);
			}

			if(sobj.scrollTop+PG*0.5>=floor[i].offsetTop){
				for(let j=0;j<floor.length;j++){
					btn[j].style.background="#666";
				}
				btn[i].style.background="red";
			}
		}

		
		for(let i=0;i<btn.length;i++){
		btn[i].onmouseover=function(){
			for(let j=0;j<btn.length;j++){
				if(sobj.scrollTop+0.5*PG>=floor[j].offsetTop){
						for(let k=0;k<floor.length;k++){
							btn[k].style.background="#666";
						}
					btn[j].style.background="red";
			}
		}
		btn[i].style.background="red";
		}
	}

	for(let i=0;i<btn.length;i++){
		btn[i].onmouseout=function(){
			for(let j=0;j<btn.length;j++){
				if(sobj.scrollTop+0.5*PG>=floor[j].offsetTop){
						for(let k=0;k<floor.length;k++){
							btn[k].style.background="#666";
						}
					btn[j].style.background="red";
			}
		}
		
	}
}		
		const div=$("section");
		for(let i=0;i<div.length;i++){
			if(sobj.scrollTop+PG>=div[i].offsetTop){
				let img=$("img",div[i]);
				for(let j=0;j<img.length;j++){
					if(img[j].getAttribute("imgurl")){
						img[j].src=img[j].getAttribute("imgurl");
					}
				}
			}
		}
	}




		//倒计时
		const dshi=$(".shi")[0];
		const dfen=$(".fen")[0];
		const dmiao=$(".miao")[0];
		class daojishi{
			constructor(s,f,m,nowd){
				this.s=s;
				this.f=f;
				this.m=m;
				this.nowd=nowd;
			}
			play(){
				let map=this.getChaTime();
				this.writes(map);
				this.update();
			}
			getChaTime(){
				let now= new Date();
				let cha=this.nowd.getTime()-now.getTime();
				cha/=1000;
				let s=parseInt(cha/60/60%24);
				let f=parseInt(cha/60%60);
				let m=parseInt(cha%60);
				if(s<10){
					s=0+""+s;
				}
				if(f<10){
					f=0+""+f;
				}
				if(m<10){
					m=0+""+m;
				}
				let map=new Map();
				map.set("s",s);
				map.set("f",f);
				map.set("m",m);
				return map;
			}
			writes(map){
				this.s.innerHTML=map.get("s");
				this.f.innerHTML=map.get("f");
				this.m.innerHTML=map.get("m");
			}
			update(){
				let that=this;
				setInterval(function(){
					let map=that.getChaTime();
					that.writes(map);
				},1000)
			}
		}
		let wy=new Date(2017,8,13,10,0,0);
		let wydjs=new daojishi(dshi,dfen,dmiao,wy);
		wydjs.play(); 


		// 多图左右轮播
		tongshi(".hongjiu ul",".hongjiu ul li",".fenkuai",".zuobtn1",".youbtn1",5);
		tongshi(".zhoudafu2 .ul",".zhoudafu2 .ul .xtb",".zhoudafu2",".zhoudafu2 .zzuo",".zhoudafu2 .zyou",6);
		tongshi(".zhoudafu1 .ul",".zhoudafu1 .ul .xtb",".zhoudafu1",".zhoudafu1 .zzuo",".zhoudafu1 .zyou",6);
		tongshi(".zhoudafu3 .ul",".zhoudafu3 .ul .xtb",".zhoudafu3",".zhoudafu3 .zzuo",".zhoudafu3 .zyou",4);
		tongshi(".zhoudafu4 .ul",".zhoudafu4 .ul .xtb",".zhoudafu4",".zhoudafu4 .zzuo",".zhoudafu4 .zyou",4);
		tongshi(".zhoudafu5 .ul",".zhoudafu5 .ul .xtb",".zhoudafu5",".zhoudafu5 .zzuo",".zhoudafu5 .zyou",4);
	const ye=$(".yingerfenlei");
	const con=$(".yingerkuai ul");
	const tiao=$(".tiao")[0];
	con[0].style.zIndex=2;
	for(let i=0;i<ye.length;i++){
		ye[i].onmouseover=function(){
			for(let j=0;j<ye.length;j++){
				con[j].style.zIndex=1;
			}
			con[i].style.zIndex=2;
			animate(tiao,{left:ye[i].offsetLeft},300);
		}
	}

	// banner选项卡
	const cx=$(".cx");
	const gonggaobiaoti=$(".gonggaobiaoti");
	const tiaos=$(".tiaos")[0];
	gonggaobiaoti[0].style.zIndex=2;
	for(let i=0;i<cx.length;i++){
		cx[i].onmouseover=function(){
			animate(tiaos,{left:cx[i].offsetLeft-2},300);
			for(let j=0;j<cx.length;j++){
				gonggaobiaoti[j].style.zIndex=1;
			}
			gonggaobiaoti[i].style.zIndex=2;
		}
	}


	// banneryouxia
	const yhf=$(".yhf");
	const hf=$(".bannerrb")[0];
	const title=$(".bannerrbt1");
	const gb=$(".cha")[0];
	const kuai=$(".kuaikuai");
	const tiaoh=$(".tiaoh")[0];
	console.log(tiaoh)
	kuai[0].style.zIndex=2;
	let flagk=true;
	let flagg=false;
	for(let i=0;i<yhf.length;i++){
		yhf[i].onmouseover=function(){
			if(flagk){
				flagk=false;
				flagg=true;
				animate(hf,{height:209},500);
			}
			for(let j=0;j<yhf.length;j++){
				kuai[j].style.zIndex=1;
			}
			kuai[i].style.zIndex=2;
			tiaoh.style.left=title[i].offsetLeft+"px";

		}
		title[i].onmouseover=function(){
				for(let j=0;j<yhf.length;j++){
					kuai[j].style.zIndex=1;
				}
				kuai[i].style.zIndex=2;
				tiaoh.style.left=title[i].offsetLeft+"px";
			}
		gb.onclick=function(){
			if(flagg){
				flagg=false;
				flagk=true;
				animate(hf,{height:0},500)
			}
			
		}
	}

		const brrb=$(".kuaikuai1 .brrb");
		const bannerrbm=$(".kuaikuai1 .bannerrbm");
		for(let i=0;i<bannerrbm.length;i++){
			let btn=$("a",bannerrbm[i]);
			brrb[0].style.zIndex=3;
			for(let k=0;k<btn.length;k++){
				btn[k].onmouseover=function(){
					console.log(brrb[k])
					for(let j=0;j<brrb.length;j++){
						brrb[j].style.zIndex=2;
					}
					brrb[k].style.zIndex=3;
				}
			}
		}
	
	
	

})	

