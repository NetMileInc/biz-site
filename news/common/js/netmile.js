//Browser check and font change script

if (navigator.platform.indexOf('Win') != -1) {
	//alert("This is WINDOWS!");
	document.write('<link rel="stylesheet" href="/common/css/font-win.css" type="text/css" media="all" />');
}
else if (navigator.platform.indexOf('Mac') != -1) {
	//alert ("This is Macintosh");
	document.write('<link rel="stylesheet" href="/common/css/font-mac.css" type="text/css" media="all" />');
}
else {
}



//Rollover script


function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}



//windwow Close script


function closeWin() {
	window.opener= self;
	var win = window.open(location.href,"_self");
	win.close();
}



// **** Flash Object Scripts ****

//Check Flash Plugin
var flash_Flag;
var pluginspageURL = "https://www.macromedia.com/go/getflashplayer";
var codebaseURL = "https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab";
function playerCheck(versionNum){
	ContentVersion = versionNum;
	plugin = (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) ? navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin : 0;
	if ( plugin ) {
		var words = navigator.plugins["Shockwave Flash"].description.split(" ");
		for (var i = 0; i < words.length; ++i){if (isNaN(parseInt(words[i])))continue; PluginVersion = words[i]; }
		//alert("PluginVersion" + PluginVersion + ": ContentVersion" + ContentVersion)
		flash_Flag = PluginVersion >= ContentVersion;
		
	}else if (navigator.userAgent && navigator.userAgent.indexOf("MSIE")>=0 && (navigator.appVersion.indexOf("Win") != -1)) {
		document.write('<SCR' + 'IPT LANGUAGE=VBScript\> \n'); 
		document.write('on error resume next \n');
		document.write('flash_Flag = ( IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash." & ContentVersion)))\n');
		document.write('</SCR' + 'IPT\> \n');
	}
	
}
//Check Flash Version 

function load_player(FlashObject){
	playerCheck(FlashObject.contentVersion);
	if (FlashObject.codebaseVersion) codebaseURL += '#version=' + FlashObject.codebaseVersion;
	if (flash_Flag){
		document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"');
		document.write(' codebase="' + codebaseURL + '"');
		document.write(' width="' + FlashObject.width + '" height="' + FlashObject.height + '"');
		if (FlashObject.id)      document.write(' id="' + FlashObject.id + '"');		
		if (FlashObject.align)   document.write(' align="' + FlashObject.align + '"');
		document.write('>');
		document.write('<param name="movie" value="' + FlashObject.src + '"' + '>');
		if (FlashObject.quality) document.write('<param name="quality" value="' + FlashObject.quality + '">');
		if (FlashObject.bgcolor) document.write('<param name="bgcolor" value="' + FlashObject.bgcolor + '">');
		if (FlashObject.base)    document.write('<param name="base" value="' + FlashObject.base + '"' + '>'); 
		if (FlashObject.menu)    document.write('<param name="menu" value="' + FlashObject.menu + '"' + '>');
		document.write('<embed src="' + FlashObject.src + '" width="' + FlashObject.width + '" height="' + FlashObject.height + '"');
		if (FlashObject.quality) document.write(' quality="' + FlashObject.quality + '"');
		if (FlashObject.bgcolor) document.write(' bgcolor="' + FlashObject.bgcolor + '"');
		if (FlashObject.align)   document.write(' align="' + FlashObject.align + '"');
		if (FlashObject.base)    document.write(' base="' + FlashObject.base + '"');
		if (FlashObject.menu)    document.write(' menu="' + FlashObject.menu + '"');
		if (FlashObject.name)    document.write(' name="' + FlashObject.name + '"');
		document.write(' type="application/x-shockwave-flash"');
		document.write(' pluginspage="'+ pluginspageURL +'">');
		document.write(' </embed>');
		document.write('</object>');
	}else{
			document.write(FlashObject.noPlugin);
	}
}






// ### netmile live data ###

/*

#CAUTION!

Please input only a number of data. Please do not input figures.

*/

site = new Array("約224","約9,868","約1,000","約392","約224","2008","8","31","約180","50");


/*
/guidance/index.html
/guidance/ad.html

about user = [0]
*/

/*
/guidance/invitation.html
/ctrl/user/mg/no_cookie.html
/ctrl/user/mg/no_cookie_error.html

site = new Array("0","1","2","3","4","5","6","7","8");
[1] = 月間ページビュー
[2] = 累計加盟サイト数
[3] = 累計登録会員数
[4] = 会員数
[5] = 年
[6] = 月
[7] = 日
[8] = 特典数
[9] = 提携企業数
*/