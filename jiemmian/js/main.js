$(function(){
	// const zuo=$(".zuojian")[0];
	// const you=$(".youjian")[0];
	// const tu=$(".xqtu a");
	// zuo.onclick=function(){
	// 	for(let i=0;i<tu.length;i++){
	// 		for(let j=0;j<tu.length;j++){
	// 			tu[j].classList.remove(".xqac");
	// 		}
	// 		tu[i].classList.add(".xqac");
	// 	}
	// }

	jiedianlunbo(".xqtu",".zuojian",".youjian",".xqtu",".xqtu a",1,3000,500);
	// banner图轮播
	const box=$(".tu")[0];
	const tu=$(".tu a img");
	tu[0].style.opacity=1;
	var num=0;
	var t=setInterval(move,2000);
	function move(){
		num++;
		if(num>tu.length-1){
			num=0;
		}
		for(let i=0;i<tu.length;i++){
			tu[i].style.opacity=0;
		}
	animate(tu[num],{opacity:1},500);
	}
	box.onmouseover=function(){
		clearInterval(t);
	}
	box.onmouseout=function(){
		t=setInterval(move,2000);
	}
	
})