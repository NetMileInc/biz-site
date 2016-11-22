function setParam(){
    var dat = location.search;
    var ck = CookieRead('sem')

    if ((dat != null && dat != '' ) || (ck != null && ck != '')) {
               
        var value;
        if (dat != null && dat != '') {
            value = dat;
        } else {
        	value = ck;
        }
        
        document.cookie = "sem=" + escape(value) + ";path=/;";
    }
}

function goCatalogPage(){
	
	var param = CookieRead('sem');
	var url = 'https://www.netmile.co.jp/contact/catalog.htm';
	var replaceUrl = url + param;
		
 	// name属性がcatalogのObjectを取得
	var link = document.getElementsByName("catalog");

	for(var i = 0; i < link.length; i ++){	
	
		var inner = link[i].innerHTML;
		// URLを置き換え
		link[i].href = replaceUrl;
		link[i].innerHTML = inner;
	}
}

function CookieRead(kword)
{
    if(typeof(kword) == "undefined")　　
        return "";        
    kword = kword + "=";
    kdata = "";
    scookie = document.cookie + ";";　　　　
    start = scookie.indexOf(kword);   　
    if (start != -1){    
        end = scookie.indexOf(";", start);    
        kdata = unescape(scookie.substring(start + kword.length, end));  
    }
    return kdata;
}