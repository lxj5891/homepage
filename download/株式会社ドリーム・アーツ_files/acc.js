/* -------------------------------------------------------------------
* Copyright 2009 futomi  http://www.futomi.com/
* 2009-03-28
* ----------------------------------------------------------------- */
(function () {
/* -------------------------------------------------------------------
* URL of acclog.cgi
* ----------------------------------------------------------------- */
var acclog_cgi_url = '/cgi-bin/acc/acclog.cgi';

/* ---------------------------------------------------------------- */
create_beacon();
function create_beacon() {
	var img = document.createElement("img");
	img.src = acclog_cgi_url + "?referrer=" + document.referrer + "&width=" + screen.width + "&height=" + screen.height + "&color=" + screen.colorDepth + "&epoch=" + new Date().getTime();
}
})();
