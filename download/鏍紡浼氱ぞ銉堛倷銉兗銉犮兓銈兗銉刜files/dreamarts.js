<!--
//-- PowerROI
//-- Copyright (c) 2005 - 2010 Power Interactive Co,.Ltd.

///// Script Define //////////
var vroi__show_flg	 = 'false';
var vroi__prg_url	 = "http://p-roi4.jp/pr_g/";
var vroi__cid		 = "dreamarts";
var vroi__pidc; if(vroi__pidc == null){ vroi__pidc = ''; }
var vroi__psfee; if(vroi__psfee == null){ vroi__psfee = ''; }

///// Get Page Info //////////
var vroi__uid		 = roi__getuserid_();
var vroi__sessid	 = roi__getsessid_();
var vroi__sc_wid	 = roi__encode(screen.width);
var vroi__sc_hei	 = roi__encode(screen.height);
var vroi__sc_col	 = roi__encode(screen.colorDepth);
var vroi__purl		 = roi__encode(document.location.href);
var vroi__psearch	 = roi__encode(document.location.search);
var vroi__phash		 = roi__encode(document.location.hash);
var vroi__ref		 = roi__getreferrer_();
var vroi__cok_ref	 = roi__getcokref_();
var vroi__title		 = roi__encode(document.title);
var vroi__charset	 = roi__encode(document.charset);
var vroi__cookflg	 = roi__encode(navigator.cookieEnabled);
var vroi__javaflg	 = roi__encode(navigator.javaEnabled());

///// Get PICMARRAY Info //////////
var vroi__picmstr = '';
if(!__picmarray){var __picmarray=new Array();}
if (typeof(encodeURIComponent) == 'function') {
	vroi__picmstr=encodeURIComponent(__picmarray.join(","));
}else{
	vroi__picmstr=escape(__picmarray.join(","));
}

///// Show IMG TAG //////////
var vroi__url = '';
vroi__url+= vroi__prg_url;
vroi__url+= "?cid="			+vroi__cid;
vroi__url+= '&uid='			+vroi__uid;
vroi__url+= '&pidc='		+vroi__pidc;
vroi__url+= '&sessid='		+vroi__sessid;
vroi__url+= '&sc_wid='		+vroi__sc_wid;
vroi__url+= '&sc_hei='		+vroi__sc_hei;
vroi__url+= '&sc_col='		+vroi__sc_col;
vroi__url+= '&purl='		+vroi__purl;
vroi__url+= '&psearch='		+vroi__psearch;
vroi__url+= '&phash='		+vroi__phash;
vroi__url+= '&ref='			+vroi__ref;
vroi__url+= '&cok_ref='		+vroi__cok_ref;
vroi__url+= '&title='		+vroi__title;
vroi__url+= '&charset='		+vroi__charset;
vroi__url+= '&cookflg='		+vroi__cookflg;
vroi__url+= '&javaflg='		+vroi__javaflg;
vroi__url+= '&psfee='		+vroi__psfee;
vroi__url+= '&picm='		+vroi__picmstr;
document.write('<img src="'+vroi__url+'" width="1" height="1" border="0">');
vroi__show_flg	 = 'true';

///// Functions //////////
function roi__getuserid_() {
	tmp__name		= "roi__userid";
	tmp__uid		= roi__getcookie_(tmp__name);
	tmp__create_flg = '';
	if(tmp__uid.indexOf("<")>=0){ tmp__uid=""; }
	if(tmp__uid.indexOf(">")>=0){ tmp__uid=""; }
	if(tmp__uid.indexOf("/")>=0){ tmp__uid=""; }
	if(tmp__uid == "") {
		tmp__uid = roi__createid_();
		tmp__create_flg = '&uid_cre=new';
	}
	if (tmp__uid.length > 100) { tmp__uid = tmp__uid.substring(0, 100); }
	roi__setcookie_(tmp__name, tmp__uid, false);
	return roi__encode(tmp__uid) + tmp__create_flg;
}
function roi__getsessid_() {
	tmp__name		= "rpi__sessid";
	tmp__sessid		= roi__getcookie_(tmp__name);
	tmp__create_flg = '';
	if(tmp__sessid.indexOf("<")>=0){ tmp__sessid=""; }
	if(tmp__sessid.indexOf(">")>=0){ tmp__sessid=""; }
	if(tmp__sessid.indexOf("/")>=0){ tmp__sessid=""; }
	if(tmp__sessid == "") {
		tmp__sessid = roi__createid_();
		tmp__create_flg = '&sess_cre=new';
	}
	if (tmp__sessid.length > 100) { tmp__sessid = tmp__sessid.substring(0, 100); }
	roi__setcookie_(tmp__name, tmp__sessid, true);
	return roi__encode(tmp__sessid) + tmp__create_flg;
}
function roi__getcokref_() {
	tmp__name		= "roi__referrer";
	tmp__cok_ref	= roi__getcookie_(tmp__name);
	roi__setcookie_(tmp__name, document.URL, true);
	return roi__encode(tmp__cok_ref);
}
function roi__getreferrer_() {
	tmp__obj = document;
	eval('try{ if((parent != null) && (parent.top != null) && (document.referrer==parent.top.location)){ tmp__obj = parent.top.document; } }catch(e){}');
	if(tmp__obj != null){ return roi__encode(tmp__obj.referrer); }else{ return ''; }
}
function roi__createid_() {
	return parseInt((new Date()).getTime())+"_"+"f678a";
}
function roi__getcookie_(key) {
	tmp__cookie1 = document.cookie;
	eval('try{ if(parent != null){ tmp__cookie1 = parent.document.cookie; } }catch(e){}');
	tmp__cookie1 = " "+tmp__cookie1+";";
	tmp__index1 = 0;
	tmp__len = tmp__cookie1.length;
	while (tmp__index1 < tmp__len) {
		tmp__index2 = tmp__cookie1.indexOf(";", tmp__index1);
		tmp__cookie2 = tmp__cookie1.substring(tmp__index1 + 1, tmp__index2);
		tmp__index3 = tmp__cookie2.indexOf("=");
		if (tmp__cookie2.substring(0, tmp__index3) == key) {
			return (roi__decode(tmp__cookie2.substring(tmp__index3 + 1, tmp__index2 - tmp__index1 - 1)));
		}
		tmp__index1 = tmp__index2 + 1;
	}
	return("");
}
function roi__setcookie_(key, val, session_flg) {
	tmp__cookie = key + "=" + roi__encode(val) + "; ";
    tmp__cookie += "path=/; ";
    if(!session_flg){ tmp__cookie += "expires=Fri, 31-Dec-2050 23:59:59; "; }
	document.cookie = tmp__cookie;
	eval('try{ if(parent != null){ parent.document.cookie = tmp__cookie; } }catch(e){}');
}
function roi__encode(str, flg) {
	if (typeof(encodeURIComponent) == 'function') {
		if (flg) return encodeURI(str);
		else return encodeURIComponent(str);
	} else {
		return escape(str);
	}
}
function roi__decode(str) {
	if (typeof(decodeURIComponent) == 'function') {
		return decodeURIComponent(str);
	} else {
		return unescape(str);
	}
}
//-->