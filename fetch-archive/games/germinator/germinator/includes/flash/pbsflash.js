var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function PBS_FlashDispatch(PBScontentURL, PBScontentVersion, PBSaltURL) {
	if (PBScontentURL.indexOf("/") == 0)
		PBScontentURL = location.protocol + "//" + window.location.host + PBScontentURL;
		
	if (PBScontentURL.indexOf("http://") != 0) {
		var qs = location.href.indexOf('?');
		var baseURL = qs >= 0 ? location.href.substr(0, qs) : location.href;
		PBScontentURL = baseURL.substring(0, baseURL.lastIndexOf("/") + 1) + PBScontentURL;
	}

	if (PBSaltURL.indexOf("/") == 0)
		PBSaltURL = location.protocol + "//" + window.location.host + PBSaltURL;
		
	if (PBSaltURL.indexOf("http://") != 0) {
		var baseURL = location.href;
		PBSaltURL = baseURL.substring(0, baseURL.lastIndexOf("/") + 1) + PBSaltURL;
	}

	return MM_FlashDispatch(
		PBScontentURL,
		PBScontentVersion,
		false,
		PBSaltURL,
		false,
		PBSaltURL,
		PBSaltURL,
		true);
}

function PBS_CheckIfViewed(PBSflashName) {
	var search = PBSflashName + "=";
	if (document.cookie.indexOf(search) != -1) {
		// This animation has been viewed.
		return true;
	} else {
		// Set a cookie to expire after about two months.
		var expires = new Date();
		// expires.setTime(expires.getTime() + (60 * 60000 * 60 * 24));
		// For testing, the cookie expires in 10 seconds.
		expires.setTime(expires.getTime() + 10000);
		document.cookie = PBSflashName + "=1; expires=" + expires.toGMTString();
		return false;
	}
}

function PBS_SkipIfViewed(PBSflashName, PBSredirectURL) {
	if (PBS_CheckIfViewed(PBSflashName)) {
		location = PBSredirectURL;
		return true;
	} else {
		return false;
	}
}
  
function PBS_FlashCanPlay(PBScontentVersion) {
	var PBS_FlashStatus = new MM_FlashInfo();
	return PBS_FlashStatus.canPlay(PBScontentVersion);
}

var PBS_SWFObject = SWFObject;




}
/*
     FILE ARCHIVED ON 13:58:06 Feb 02, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:57:49 Oct 21, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 5674.481
  exclusion.robots: 0.116
  exclusion.robots.policy: 0.107
  cdx.remote: 0.065
  esindex: 0.01
  LoadShardBlock: 82.515 (3)
  PetaboxLoader3.resolve: 66.919 (2)
  PetaboxLoader3.datanode: 38.303 (4)
  CDXLines.iter: 18.791 (3)
  load_resource: 26.029
*/