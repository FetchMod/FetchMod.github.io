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

if(!this.GA_delay_logging){this.GA_delay_logging=0}if(!this.GA_additional_codes){this.GA_additional_codes={}}if(!this.GA_url_prefix){this.GA_url_prefix=false}if(!this.GA_setvar){this.GA_setvar={}}if(!this.GA_customvar){this.GA_customvar={}}var GA_obj=function(){var K=new Object();var M={r:false,s:false,pr:false,pm:false};var E={uacode:false,pageTracker:false,eventTracker:[]};var N=location.hostname;if(N.length-N.lastIndexOf(".pbs.org")==8){N=".pbs.org"}var F=location.pathname;if(GA_url_prefix){F=GA_url_prefix+location.pathname}if(location.search){F=F+location.search}var L=function(T){var S=_gat._getTracker("UA-1-1");S._setDomainName(N);S._setAllowHash(false);S._setAllowLinker(true);if(!T){T={localized:0}}var R=["localized","station"];var O="";for(var Q=0;Q<R.length;Q++){if(T[R[Q]]!=undefined){O=O+"/"+R[Q]+"="+T[R[Q]]}}for(var P in GA_setvar){if(GA_setvar[P]!=undefined){O=O+"/"+P+"="+GA_setvar[P]}}S._setVar(O)};var A=function(Q){var P=_gat._getTracker(Q);P._setDomainName(N);P._setAllowHash(false);P._setAllowLinker(true);if(GA_customvar[Q]){for(var O=0;O<GA_customvar[Q].length;O++){c=GA_customvar[Q][O];P._setCustomVar(O+1,c[0],c[1],c[2])}}P._trackPageview(F);return P};var J=function(R,S){if(!S){if(typeof GA_env=="string"){S={ua_list:GA_env,oldFormat:1};var T=document.cookie;var U=T.indexOf("pbsol.station=");if(U!=-1){S.vars={localized:1,station:T.substr(U+14,4)}}}else{S=GA_env}}if(GA_customvar["UA-39988832-1"]){GA_customvar["UA-3988832-1"]=GA_customvar["UA-39988832-1"]}L(S.vars);var W=["r","s","pr","pm"];var P=S.ua_list.split(",");for(var Q=0;Q<P.length;Q++){var T=P[Q];if(T.substring(0,3)=="UA-"){K[T]=A(T);if(Q<4){M[W[Q]]=T}}else{if(T.substring(0,3)=="ET-"){E.uacode=T.replace(/^ET-/,"UA-");E.pageTracker=A(E.uacode)}}}for(var V in GA_additional_codes){if(!K[GA_additional_codes[V]]){var O=A(GA_additional_codes[V]);K[GA_additional_codes[V]]=O;if(!M[V]){M[V]=GA_additional_codes[V]}}}if(S.oldFormat){K[M.r]._trackEvent("Debug","Old GA_env",document.location.pathname)}B()};var B=function(){if(document.getElementsByTagName){var T=document.getElementsByTagName("a");for(var Q=0;Q<T.length;Q++){var O=T[Q];if(O.href==""){continue}if(O.href.match(/^javascript:/i)){continue}var P=O.hostname;if(P=="pbs.org"){P="www.pbs.org"}if(P=="www.pbskids.org"){P="pbskids.org"}var R=location.hostname;if(R=="dipsy.pbs.org"&&P=="www.pbs.org"){continue}if(R=="soup.pbskids.org"&&P=="pbskids.org"){continue}if(P==R){var S=O.pathname;if(S.match(/\.(doc|xls|exe|zip|pdf|mov|mp3)$/)){H(O,"click",I)}}else{if(P){H(O,"click",G)}}}}};var H=function(P,Q,O){if(P.addEventListener){P.addEventListener(Q,O,false)}else{if(P.attachEvent){P.attachEvent("on"+Q,O)}}};var I=function(P){var O;if(P&&P.target){O=P.target.pathname}else{if(window.event&&window.event.srcElement){O="/"+window.event.srcElement.pathname}}if(O){D("Links","Download",O)}return true};var G=function(Q){var O;var P=Q.srcElement;if(P&&P.hostname){O=P.hostname+"/"+P.pathname+P.search}else{if(this.hostname){O=this.hostname+this.pathname+this.search}}if(O){D("Links","External",O)}return true};var D=function(P,R,O,Q){if(!E.uacode){return false}E.pageTracker._trackEvent(P,R,O,Q)};var C=function(O){for(var P in K){if(K[P] instanceof Object&&K[P]._trackPageview){K[P]._trackPageview(O)}}};if(!GA_delay_logging&&GA_env){H(window,"load",J)}return{ga_url:F,_getTracker:function(O){if(K[M[O]]){return K[M[O]]}else{if(O.match(/^UA-\d+-\d+$/)){return _gat._getTracker(O)}else{return false}}},_runInit:function(){J()},trackEvent:function(R,Q,O,P){D(R,Q,O,P)},trackPageview:function(O){C(O)}}}();

}
/*
     FILE ARCHIVED ON 19:43:19 Oct 20, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:08:34 Oct 21, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 182.261
  exclusion.robots: 0.086
  exclusion.robots.policy: 0.079
  cdx.remote: 0.058
  esindex: 0.008
  LoadShardBlock: 154.172 (3)
  PetaboxLoader3.datanode: 184.228 (4)
  CDXLines.iter: 11.947 (3)
  load_resource: 157.742
  PetaboxLoader3.resolve: 122.645
*/