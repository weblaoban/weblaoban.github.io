//当页面加载之后才实现这个代码 
window.onload=function (){
	// 常量
	const designWidh=750;
	const fontSize=100;
	//       选择器					驼峰命名法
	// document.querySelector("html").style.fontSize=fontSize+"px";
	function resizeFont(){
		// 变量
		var CW = document.documentElement.clientWidth;
		// console.log(CW);
		var radio = CW/designWidh;
		var newFontSize = fontSize*radio;
		document.querySelector("html").style.fontSize=newFontSize+"px";

	}
	// 调用
	resizeFont();
	window.onresize=resizeFont;
}
