
/*! jQuery v3.1.0 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.0",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null!=a?a<0?this[a+this.length]:this[a]:f.call(this)},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"label"in b&&b.disabled===a||"form"in b&&b.disabled===a||"form"in b&&b.disabled===!1&&(b.isDisabled===a||b.isDisabled!==!a&&("label"in b||!ea(b))!==a)}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e)}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(_,aa),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=V.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(_,aa),$.test(j[0].type)&&qa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&sa(j),!a)return G.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||$.test(a)&&qa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){if(r.isFunction(b))return r.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return r.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(C.test(b))return r.filter(b,a,c);b=r.filter(b,a)}return r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType})}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/\S+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,
r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c||"false"!==c&&("null"===c?null:+c+""===c?+c:X.test(c)?JSON.parse(c):c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),Z(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=Z(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var $=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,_=new RegExp("^(?:([+-])=|)("+$+")([a-z%]*)$","i"),aa=["Top","Right","Bottom","Left"],ba=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ca=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function da(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&_.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ea={};function fa(a){var b,c=a.ownerDocument,d=a.nodeName,e=ea[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ea[d]=e,e)}function ga(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ba(d)&&(e[f]=fa(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ga(this,!0)},hide:function(){return ga(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ba(this)?r(this).show():r(this).hide()})}});var ha=/^(?:checkbox|radio)$/i,ia=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ja=/^$|\/(?:java|ecma)script/i,ka={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ka.optgroup=ka.option,ka.tbody=ka.tfoot=ka.colgroup=ka.caption=ka.thead,ka.th=ka.td;function la(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function ma(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var na=/<|&#?\w+;/;function oa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(na.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ia.exec(f)||["",""])[1].toLowerCase(),i=ka[h]||ka._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=la(l.appendChild(f),"script"),j&&ma(g),c){k=0;while(f=g[k++])ja.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var pa=d.documentElement,qa=/^key/,ra=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,sa=/^([^.]*)(?:\.(.+)|)/;function ta(){return!0}function ua(){return!1}function va(){try{return d.activeElement}catch(a){}}function wa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)wa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ua;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(pa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;c<h;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?r(e,this).index(i)>-1:r.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==va()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===va()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ta:ua,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:ua,isPropagationStopped:ua,isImmediatePropagationStopped:ua,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ta,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ta,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ta,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&qa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ra.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return wa(this,a,b,c,d)},one:function(a,b,c,d){return wa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ua),this.each(function(){r.event.remove(this,a,c,b)})}});var xa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,ya=/<script|<style|<link/i,za=/checked\s*(?:[^=]|=\s*.checked.)/i,Aa=/^true\/(.*)/,Ba=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ca(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Da(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ea(a){var b=Aa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ga(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ha.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ha(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&za.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(m&&(e=oa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(la(e,"script"),Da),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,la(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ea),l=0;l<i;l++)j=h[l],ja.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ba,""),k))}return a}function Ia(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(la(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&ma(la(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(xa,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=la(h),f=la(a),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);if(b)if(c)for(f=f||la(a),g=g||la(h),d=0,e=f.length;d<e;d++)Fa(f[d],g[d]);else Fa(a,h);return g=la(h,"script"),g.length>0&&ma(g,!i&&la(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(la(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!ya.test(a)&&!ka[(ia.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(la(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(la(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ja=/^margin/,Ka=new RegExp("^("+$+")(?!px)[a-z%]+$","i"),La=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",pa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,pa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Ma(a,b,c){var d,e,f,g,h=a.style;return c=c||La(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ka.test(g)&&Ja.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Na(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Oa=/^(none|table(?!-c[ea]).+)/,Pa={position:"absolute",visibility:"hidden",display:"block"},Qa={letterSpacing:"0",fontWeight:"400"},Ra=["Webkit","Moz","ms"],Sa=d.createElement("div").style;function Ta(a){if(a in Sa)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ra.length;while(c--)if(a=Ra[c]+b,a in Sa)return a}function Ua(a,b,c){var d=_.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Va(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+aa[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+aa[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+aa[f]+"Width",!0,e))):(g+=r.css(a,"padding"+aa[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+aa[f]+"Width",!0,e)));return g}function Wa(a,b,c){var d,e=!0,f=La(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Ma(a,b,f),(d<0||null==d)&&(d=a.style[b]),Ka.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Va(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ma(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=_.exec(c))&&e[1]&&(c=da(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Ma(a,b,d)),"normal"===e&&b in Qa&&(e=Qa[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Oa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Wa(a,b,d):ca(a,Pa,function(){return Wa(a,b,d)})},set:function(a,c,d){var e,f=d&&La(a),g=d&&Va(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=_.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ua(a,c,g)}}}),r.cssHooks.marginLeft=Na(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Ma(a,"marginLeft"))||a.getBoundingClientRect().left-ca(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+aa[d]+b]=f[d]||f[d-2]||f[0];return e}},Ja.test(a)||(r.cssHooks[a+b].set=Ua)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=La(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Xa(a,b,c,d,e){return new Xa.prototype.init(a,b,c,d,e)}r.Tween=Xa,Xa.prototype={constructor:Xa,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Xa.propHooks[this.prop];return a&&a.get?a.get(this):Xa.propHooks._default.get(this)},run:function(a){var b,c=Xa.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Xa.propHooks._default.set(this),this}},Xa.prototype.init.prototype=Xa.prototype,Xa.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Xa.propHooks.scrollTop=Xa.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Xa.prototype.init,r.fx.step={};var Ya,Za,$a=/^(?:toggle|show|hide)$/,_a=/queueHooks$/;function ab(){Za&&(a.requestAnimationFrame(ab),r.fx.tick())}function bb(){return a.setTimeout(function(){Ya=void 0}),Ya=r.now()}function cb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=aa[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function db(a,b,c){for(var d,e=(gb.tweeners[b]||[]).concat(gb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function eb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ba(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],$a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ga([a],!0),j=a.style.display||j,k=r.css(a,"display"),ga([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ga([a],!0),m.done(function(){p||ga([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=db(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function fb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function gb(a,b,c){var d,e,f=0,g=gb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Ya||bb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Ya||bb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(fb(k,j.opts.specialEasing);f<g;f++)if(d=gb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,db,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(gb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return da(c.elem,a,_.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],gb.tweeners[c]=gb.tweeners[c]||[],gb.tweeners[c].unshift(b)},prefilters:[eb],prefilter:function(a,b){b?gb.prefilters.unshift(a):gb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:e.duration="number"==typeof e.duration?e.duration:e.duration in r.fx.speeds?r.fx.speeds[e.duration]:r.fx.speeds._default,null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ba).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=gb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&_a.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(cb(b,!0),a,d,e)}}),r.each({slideDown:cb("show"),slideUp:cb("hide"),slideToggle:cb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Ya=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Ya=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){Za||(Za=a.requestAnimationFrame?a.requestAnimationFrame(ab):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame(Za):a.clearInterval(Za),Za=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var hb,ib=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?hb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);
if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),hb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ib[b]||r.find.attr;ib[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=ib[g],ib[g]=e,e=null!=c(a,b,d)?g:null,ib[g]=f),e}});var jb=/^(?:input|select|textarea|button)$/i,kb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):jb.test(a.nodeName)||kb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});var lb=/[\t\r\n\f]/g;function mb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,mb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,mb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,mb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=mb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(c)+" ").replace(lb," ").indexOf(b)>-1)return!0;return!1}});var nb=/\r/g,ob=/[\x20\t\r\n\f]+/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(nb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:r.trim(r.text(a)).replace(ob," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type,g=f?null:[],h=f?e+1:d.length,i=e<0?h:f?e:0;i<h;i++)if(c=d[i],(c.selected||i===e)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ha.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,""),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=oa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=r.trim(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||pa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Na(o.pixelPosition,function(a,c){if(c)return c=Ma(a,b),Ka.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});





/*!
 * Cropper v2.3.4
 * https://github.com/fengyuanchen/cropper
 *
 * Copyright (c) 2014-2016 Fengyuan Chen and contributors
 * Released under the MIT license
 *
 * Date: 2016-09-03T05:50:45.412Z
 */

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as anonymous module.
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node / CommonJS
    factory(require('jquery'));
  } else {
    // Browser globals.
    factory(jQuery);
  }
})(function ($) {

  'use strict';

  // Globals
  var $window = $(window);
  var $document = $(document);
  var location = window.location;
  var navigator = window.navigator;
  var ArrayBuffer = window.ArrayBuffer;
  var Uint8Array = window.Uint8Array;
  var DataView = window.DataView;
  var btoa = window.btoa;

  // Constants
  var NAMESPACE = 'cropper';

  // Classes
  var CLASS_MODAL = 'cropper-modal';
  var CLASS_HIDE = 'cropper-hide';
  var CLASS_HIDDEN = 'cropper-hidden';
  var CLASS_INVISIBLE = 'cropper-invisible';
  var CLASS_MOVE = 'cropper-move';
  var CLASS_CROP = 'cropper-crop';
  var CLASS_DISABLED = 'cropper-disabled';
  var CLASS_BG = 'cropper-bg';

  // Events
  var EVENT_MOUSE_DOWN = 'mousedown touchstart pointerdown MSPointerDown';
  var EVENT_MOUSE_MOVE = 'mousemove touchmove pointermove MSPointerMove';
  var EVENT_MOUSE_UP = 'mouseup touchend touchcancel pointerup pointercancel MSPointerUp MSPointerCancel';
  var EVENT_WHEEL = 'wheel mousewheel DOMMouseScroll';
  var EVENT_DBLCLICK = 'dblclick';
  var EVENT_LOAD = 'load.' + NAMESPACE;
  var EVENT_ERROR = 'error.' + NAMESPACE;
  var EVENT_RESIZE = 'resize.' + NAMESPACE; // Bind to window with namespace
  var EVENT_BUILD = 'build.' + NAMESPACE;
  var EVENT_BUILT = 'built.' + NAMESPACE;
  var EVENT_CROP_START = 'cropstart.' + NAMESPACE;
  var EVENT_CROP_MOVE = 'cropmove.' + NAMESPACE;
  var EVENT_CROP_END = 'cropend.' + NAMESPACE;
  var EVENT_CROP = 'crop.' + NAMESPACE;
  var EVENT_ZOOM = 'zoom.' + NAMESPACE;

  // RegExps
  var REGEXP_ACTIONS = /^(e|w|s|n|se|sw|ne|nw|all|crop|move|zoom)$/;
  var REGEXP_DATA_URL = /^data:/;
  var REGEXP_DATA_URL_HEAD = /^data:([^;]+);base64,/;
  var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg.*;base64,/;

  // Data keys
  var DATA_PREVIEW = 'preview';
  var DATA_ACTION = 'action';

  // Actions
  var ACTION_EAST = 'e';
  var ACTION_WEST = 'w';
  var ACTION_SOUTH = 's';
  var ACTION_NORTH = 'n';
  var ACTION_SOUTH_EAST = 'se';
  var ACTION_SOUTH_WEST = 'sw';
  var ACTION_NORTH_EAST = 'ne';
  var ACTION_NORTH_WEST = 'nw';
  var ACTION_ALL = 'all';
  var ACTION_CROP = 'crop';
  var ACTION_MOVE = 'move';
  var ACTION_ZOOM = 'zoom';
  var ACTION_NONE = 'none';

  // Supports
  var SUPPORT_CANVAS = $.isFunction($('<canvas>')[0].getContext);
  var IS_SAFARI_OR_UIWEBVIEW = navigator && /(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);

  // Maths
  var num = Number;
  var min = Math.min;
  var max = Math.max;
  var abs = Math.abs;
  var sin = Math.sin;
  var cos = Math.cos;
  var sqrt = Math.sqrt;
  var round = Math.round;
  var floor = Math.floor;

  // Utilities
  var fromCharCode = String.fromCharCode;

  function isNumber(n) {
    return typeof n === 'number' && !isNaN(n);
  }

  function isUndefined(n) {
    return typeof n === 'undefined';
  }

  function toArray(obj, offset) {
    var args = [];

    // This is necessary for IE8
    if (isNumber(offset)) {
      args.push(offset);
    }

    return args.slice.apply(obj, args);
  }

  // Custom proxy to avoid jQuery's guid
  function proxy(fn, context) {
    var args = toArray(arguments, 2);

    return function () {
      return fn.apply(context, args.concat(toArray(arguments)));
    };
  }

  function isCrossOriginURL(url) {
    var parts = url.match(/^(https?:)\/\/([^\:\/\?#]+):?(\d*)/i);

    return parts && (
      parts[1] !== location.protocol ||
      parts[2] !== location.hostname ||
      parts[3] !== location.port
    );
  }

  function addTimestamp(url) {
    var timestamp = 'timestamp=' + (new Date()).getTime();

    return (url + (url.indexOf('?') === -1 ? '?' : '&') + timestamp);
  }

  function getCrossOrigin(crossOrigin) {
    return crossOrigin ? ' crossOrigin="' + crossOrigin + '"' : '';
  }

  function getImageSize(image, callback) {
    var newImage;

    // Modern browsers (ignore Safari, #120 & #509)
    if (image.naturalWidth && !IS_SAFARI_OR_UIWEBVIEW) {
      return callback(image.naturalWidth, image.naturalHeight);
    }

    // IE8: Don't use `new Image()` here (#319)
    newImage = document.createElement('img');

    newImage.onload = function () {
      callback(this.width, this.height);
    };

    newImage.src = image.src;
  }

  function getTransform(options) {
    var transforms = [];
    var rotate = options.rotate;
    var scaleX = options.scaleX;
    var scaleY = options.scaleY;

    // Rotate should come first before scale to match orientation transform
    if (isNumber(rotate) && rotate !== 0) {
      transforms.push('rotate(' + rotate + 'deg)');
    }

    if (isNumber(scaleX) && scaleX !== 1) {
      transforms.push('scaleX(' + scaleX + ')');
    }

    if (isNumber(scaleY) && scaleY !== 1) {
      transforms.push('scaleY(' + scaleY + ')');
    }

    return transforms.length ? transforms.join(' ') : 'none';
  }

  function getRotatedSizes(data, isReversed) {
    var deg = abs(data.degree) % 180;
    var arc = (deg > 90 ? (180 - deg) : deg) * Math.PI / 180;
    var sinArc = sin(arc);
    var cosArc = cos(arc);
    var width = data.width;
    var height = data.height;
    var aspectRatio = data.aspectRatio;
    var newWidth;
    var newHeight;

    if (!isReversed) {
      newWidth = width * cosArc + height * sinArc;
      newHeight = width * sinArc + height * cosArc;
    } else {
      newWidth = width / (cosArc + sinArc / aspectRatio);
      newHeight = newWidth / aspectRatio;
    }

    return {
      width: newWidth,
      height: newHeight
    };
  }

  function getSourceCanvas(image, data) {
    var canvas = $('<canvas>')[0];
    var context = canvas.getContext('2d');
    var dstX = 0;
    var dstY = 0;
    var dstWidth = data.naturalWidth;
    var dstHeight = data.naturalHeight;
    var rotate = data.rotate;
    var scaleX = data.scaleX;
    var scaleY = data.scaleY;
    var scalable = isNumber(scaleX) && isNumber(scaleY) && (scaleX !== 1 || scaleY !== 1);
    var rotatable = isNumber(rotate) && rotate !== 0;
    var advanced = rotatable || scalable;
    var canvasWidth = dstWidth * abs(scaleX || 1);
    var canvasHeight = dstHeight * abs(scaleY || 1);
    var translateX;
    var translateY;
    var rotated;

    if (scalable) {
      translateX = canvasWidth / 2;
      translateY = canvasHeight / 2;
    }

    if (rotatable) {
      rotated = getRotatedSizes({
        width: canvasWidth,
        height: canvasHeight,
        degree: rotate
      });

      canvasWidth = rotated.width;
      canvasHeight = rotated.height;
      translateX = canvasWidth / 2;
      translateY = canvasHeight / 2;
    }

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    if (advanced) {
      dstX = -dstWidth / 2;
      dstY = -dstHeight / 2;

      context.save();
      context.translate(translateX, translateY);
    }

    // Rotate should come first before scale as in the "getTransform" function
    if (rotatable) {
      context.rotate(rotate * Math.PI / 180);
    }

    if (scalable) {
      context.scale(scaleX, scaleY);
    }

    context.drawImage(image, floor(dstX), floor(dstY), floor(dstWidth), floor(dstHeight));

    if (advanced) {
      context.restore();
    }

    return canvas;
  }

  function getTouchesCenter(touches) {
    var length = touches.length;
    var pageX = 0;
    var pageY = 0;

    if (length) {
      $.each(touches, function (i, touch) {
        pageX += touch.pageX;
        pageY += touch.pageY;
      });

      pageX /= length;
      pageY /= length;
    }

    return {
      pageX: pageX,
      pageY: pageY
    };
  }

  function getStringFromCharCode(dataView, start, length) {
    var str = '';
    var i;

    for (i = start, length += start; i < length; i++) {
      str += fromCharCode(dataView.getUint8(i));
    }

    return str;
  }

  function getOrientation(arrayBuffer) {
    var dataView = new DataView(arrayBuffer);
    var length = dataView.byteLength;
    var orientation;
    var exifIDCode;
    var tiffOffset;
    var firstIFDOffset;
    var littleEndian;
    var endianness;
    var app1Start;
    var ifdStart;
    var offset;
    var i;

    // Only handle JPEG image (start by 0xFFD8)
    if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
      offset = 2;

      while (offset < length) {
        if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
          app1Start = offset;
          break;
        }

        offset++;
      }
    }

    if (app1Start) {
      exifIDCode = app1Start + 4;
      tiffOffset = app1Start + 10;

      if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
        endianness = dataView.getUint16(tiffOffset);
        littleEndian = endianness === 0x4949;

        if (littleEndian || endianness === 0x4D4D /* bigEndian */) {
          if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
            firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);

            if (firstIFDOffset >= 0x00000008) {
              ifdStart = tiffOffset + firstIFDOffset;
            }
          }
        }
      }
    }

    if (ifdStart) {
      length = dataView.getUint16(ifdStart, littleEndian);

      for (i = 0; i < length; i++) {
        offset = ifdStart + i * 12 + 2;

        if (dataView.getUint16(offset, littleEndian) === 0x0112 /* Orientation */) {

          // 8 is the offset of the current tag's value
          offset += 8;

          // Get the original orientation value
          orientation = dataView.getUint16(offset, littleEndian);

          // Override the orientation with its default value for Safari (#120)
          if (IS_SAFARI_OR_UIWEBVIEW) {
            dataView.setUint16(offset, 1, littleEndian);
          }

          break;
        }
      }
    }

    return orientation;
  }

  function dataURLToArrayBuffer(dataURL) {
    var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, '');
    var binary = atob(base64);
    var length = binary.length;
    var arrayBuffer = new ArrayBuffer(length);
    var dataView = new Uint8Array(arrayBuffer);
    var i;

    for (i = 0; i < length; i++) {
      dataView[i] = binary.charCodeAt(i);
    }

    return arrayBuffer;
  }

  // Only available for JPEG image
  function arrayBufferToDataURL(arrayBuffer) {
    var dataView = new Uint8Array(arrayBuffer);
    var length = dataView.length;
    var base64 = '';
    var i;

    for (i = 0; i < length; i++) {
      base64 += fromCharCode(dataView[i]);
    }

    return 'data:image/jpeg;base64,' + btoa(base64);
  }

  function Cropper(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, Cropper.DEFAULTS, $.isPlainObject(options) && options);
    this.isLoaded = false;
    this.isBuilt = false;
    this.isCompleted = false;
    this.isRotated = false;
    this.isCropped = false;
    this.isDisabled = false;
    this.isReplaced = false;
    this.isLimited = false;
    this.wheeling = false;
    this.isImg = false;
    this.originalUrl = '';
    this.canvas = null;
    this.cropBox = null;
    this.init();
  }

  Cropper.prototype = {
    constructor: Cropper,

    init: function () {
      var $this = this.$element;
      var url;

      if ($this.is('img')) {
        this.isImg = true;

        // Should use `$.fn.attr` here. e.g.: "img/picture.jpg"
        this.originalUrl = url = $this.attr('src');

        // Stop when it's a blank image
        if (!url) {
          return;
        }

        // Should use `$.fn.prop` here. e.g.: "http://example.com/img/picture.jpg"
        url = $this.prop('src');
      } else if ($this.is('canvas') && SUPPORT_CANVAS) {
        url = $this[0].toDataURL();
      }

      this.load(url);
    },

    // A shortcut for triggering custom events
    trigger: function (type, data) {
      var e = $.Event(type, data);

      this.$element.trigger(e);

      return e;
    },

    load: function (url) {
      var options = this.options;
      var $this = this.$element;
      var read;
      var xhr;

      if (!url) {
        return;
      }

      // Trigger build event first
      $this.one(EVENT_BUILD, options.build);

      if (this.trigger(EVENT_BUILD).isDefaultPrevented()) {
        return;
      }

      this.url = url;
      this.image = {};

      if (!options.checkOrientation || !ArrayBuffer) {
        return this.clone();
      }

      read = $.proxy(this.read, this);

      // XMLHttpRequest disallows to open a Data URL in some browsers like IE11 and Safari
      if (REGEXP_DATA_URL.test(url)) {
        return REGEXP_DATA_URL_JPEG.test(url) ?
          read(dataURLToArrayBuffer(url)) :
          this.clone();
      }

      xhr = new XMLHttpRequest();

      xhr.onerror = xhr.onabort = $.proxy(function () {
        this.clone();
      }, this);

      xhr.onload = function () {
        read(this.response);
      };

      if (options.checkCrossOrigin && isCrossOriginURL(url) && $this.prop('crossOrigin')) {
        url = addTimestamp(url);
      }

      xhr.open('get', url);
      xhr.responseType = 'arraybuffer';
      xhr.send();
    },

    read: function (arrayBuffer) {
      var options = this.options;
      var orientation = getOrientation(arrayBuffer);
      var image = this.image;
      var rotate = 0;
      var scaleX = 1;
      var scaleY = 1;

      if (orientation > 1) {
        this.url = arrayBufferToDataURL(arrayBuffer);

        switch (orientation) {

          // flip horizontal
          case 2:
            scaleX = -1;
            break;

          // rotate left 180°
          case 3:
            rotate = -180;
            break;

          // flip vertical
          case 4:
            scaleY = -1;
            break;

          // flip vertical + rotate right 90°
          case 5:
            rotate = 90;
            scaleY = -1;
            break;

          // rotate right 90°
          case 6:
            rotate = 90;
            break;

          // flip horizontal + rotate right 90°
          case 7:
            rotate = 90;
            scaleX = -1;
            break;

          // rotate left 90°
          case 8:
            rotate = -90;
            break;
        }
      }

      if (options.rotatable) {
        image.rotate = rotate;
      }

      if (options.scalable) {
        image.scaleX = scaleX;
        image.scaleY = scaleY;
      }

      this.clone();
    },

    clone: function () {
      var options = this.options;
      var $this = this.$element;
      var url = this.url;
      var crossOrigin = '';
      var crossOriginUrl;
      var $clone;

      if (options.checkCrossOrigin && isCrossOriginURL(url)) {
        crossOrigin = $this.prop('crossOrigin');

        if (crossOrigin) {
          crossOriginUrl = url;
        } else {
          crossOrigin = 'anonymous';

          // Bust cache (#148) when there is not a "crossOrigin" property
          crossOriginUrl = addTimestamp(url);
        }
      }

      this.crossOrigin = crossOrigin;
      this.crossOriginUrl = crossOriginUrl;
      this.$clone = $clone = $('<img' + getCrossOrigin(crossOrigin) + ' src="' + (crossOriginUrl || url) + '">');

      if (this.isImg) {
        if ($this[0].complete) {
          this.start();
        } else {
          $this.one(EVENT_LOAD, $.proxy(this.start, this));
        }
      } else {
        $clone.
          one(EVENT_LOAD, $.proxy(this.start, this)).
          one(EVENT_ERROR, $.proxy(this.stop, this)).
          addClass(CLASS_HIDE).
          insertAfter($this);
      }
    },

    start: function () {
      var $image = this.$element;
      var $clone = this.$clone;

      if (!this.isImg) {
        $clone.off(EVENT_ERROR, this.stop);
        $image = $clone;
      }

      getImageSize($image[0], $.proxy(function (naturalWidth, naturalHeight) {
        $.extend(this.image, {
          naturalWidth: naturalWidth,
          naturalHeight: naturalHeight,
          aspectRatio: naturalWidth / naturalHeight
        });

        this.isLoaded = true;
        this.build();
      }, this));
    },

    stop: function () {
      this.$clone.remove();
      this.$clone = null;
    },

    build: function () {
      var options = this.options;
      var $this = this.$element;
      var $clone = this.$clone;
      var $cropper;
      var $cropBox;
      var $face;

      if (!this.isLoaded) {
        return;
      }

      // Unbuild first when replace
      if (this.isBuilt) {
        this.unbuild();
      }

      // Create cropper elements
      this.$container = $this.parent();
      this.$cropper = $cropper = $(Cropper.TEMPLATE);
      this.$canvas = $cropper.find('.cropper-canvas').append($clone);
      this.$dragBox = $cropper.find('.cropper-drag-box');
      this.$cropBox = $cropBox = $cropper.find('.cropper-crop-box');
      this.$viewBox = $cropper.find('.cropper-view-box');
      this.$face = $face = $cropBox.find('.cropper-face');

      // Hide the original image
      $this.addClass(CLASS_HIDDEN).after($cropper);

      // Show the clone image if is hidden
      if (!this.isImg) {
        $clone.removeClass(CLASS_HIDE);
      }

      this.initPreview();
      this.bind();

      options.aspectRatio = max(0, options.aspectRatio) || NaN;
      options.viewMode = max(0, min(3, round(options.viewMode))) || 0;

      if (options.autoCrop) {
        this.isCropped = true;

        if (options.modal) {
          this.$dragBox.addClass(CLASS_MODAL);
        }
      } else {
        $cropBox.addClass(CLASS_HIDDEN);
      }

      if (!options.guides) {
        $cropBox.find('.cropper-dashed').addClass(CLASS_HIDDEN);
      }

      if (!options.center) {
        $cropBox.find('.cropper-center').addClass(CLASS_HIDDEN);
      }

      if (options.cropBoxMovable) {
        $face.addClass(CLASS_MOVE).data(DATA_ACTION, ACTION_ALL);
      }

      if (!options.highlight) {
        $face.addClass(CLASS_INVISIBLE);
      }

      if (options.background) {
        $cropper.addClass(CLASS_BG);
      }

      if (!options.cropBoxResizable) {
        $cropBox.find('.cropper-line, .cropper-point').addClass(CLASS_HIDDEN);
      }

      this.setDragMode(options.dragMode);
      this.render();
      this.isBuilt = true;
      this.setData(options.data);
      $this.one(EVENT_BUILT, options.built);

      // Trigger the built event asynchronously to keep `data('cropper')` is defined
      this.completing = setTimeout($.proxy(function () {
        this.trigger(EVENT_BUILT);
        this.trigger(EVENT_CROP, this.getData());
        this.isCompleted = true;
      }, this), 0);
    },

    unbuild: function () {
      if (!this.isBuilt) {
        return;
      }

      if (!this.isCompleted) {
        clearTimeout(this.completing);
      }

      this.isBuilt = false;
      this.isCompleted = false;
      this.initialImage = null;

      // Clear `initialCanvas` is necessary when replace
      this.initialCanvas = null;
      this.initialCropBox = null;
      this.container = null;
      this.canvas = null;

      // Clear `cropBox` is necessary when replace
      this.cropBox = null;
      this.unbind();

      this.resetPreview();
      this.$preview = null;

      this.$viewBox = null;
      this.$cropBox = null;
      this.$dragBox = null;
      this.$canvas = null;
      this.$container = null;

      this.$cropper.remove();
      this.$cropper = null;
    },

    render: function () {
      this.initContainer();
      this.initCanvas();
      this.initCropBox();

      this.renderCanvas();

      if (this.isCropped) {
        this.renderCropBox();
      }
    },

    initContainer: function () {
      var options = this.options;
      var $this = this.$element;
      var $container = this.$container;
      var $cropper = this.$cropper;

      $cropper.addClass(CLASS_HIDDEN);
      $this.removeClass(CLASS_HIDDEN);

      $cropper.css((this.container = {
        width: max($container.width(), num(options.minContainerWidth) || 200),
        height: max($container.height(), num(options.minContainerHeight) || 100)
      }));

      $this.addClass(CLASS_HIDDEN);
      $cropper.removeClass(CLASS_HIDDEN);
    },

    // Canvas (image wrapper)
    initCanvas: function () {
      var viewMode = this.options.viewMode;
      var container = this.container;
      var containerWidth = container.width;
      var containerHeight = container.height;
      var image = this.image;
      var imageNaturalWidth = image.naturalWidth;
      var imageNaturalHeight = image.naturalHeight;
      var is90Degree = abs(image.rotate) === 90;
      var naturalWidth = is90Degree ? imageNaturalHeight : imageNaturalWidth;
      var naturalHeight = is90Degree ? imageNaturalWidth : imageNaturalHeight;
      var aspectRatio = naturalWidth / naturalHeight;
      var canvasWidth = containerWidth;
      var canvasHeight = containerHeight;
      var canvas;

      if (containerHeight * aspectRatio > containerWidth) {
        if (viewMode === 3) {
          canvasWidth = containerHeight * aspectRatio;
        } else {
          canvasHeight = containerWidth / aspectRatio;
        }
      } else {
        if (viewMode === 3) {
          canvasHeight = containerWidth / aspectRatio;
        } else {
          canvasWidth = containerHeight * aspectRatio;
        }
      }

      canvas = {
        naturalWidth: naturalWidth,
        naturalHeight: naturalHeight,
        aspectRatio: aspectRatio,
        width: canvasWidth,
        height: canvasHeight
      };

      canvas.oldLeft = canvas.left = (containerWidth - canvasWidth) / 2;
      canvas.oldTop = canvas.top = (containerHeight - canvasHeight) / 2;

      this.canvas = canvas;
      this.isLimited = (viewMode === 1 || viewMode === 2);
      this.limitCanvas(true, true);
      this.initialImage = $.extend({}, image);
      this.initialCanvas = $.extend({}, canvas);
    },

    limitCanvas: function (isSizeLimited, isPositionLimited) {
      var options = this.options;
      var viewMode = options.viewMode;
      var container = this.container;
      var containerWidth = container.width;
      var containerHeight = container.height;
      var canvas = this.canvas;
      var aspectRatio = canvas.aspectRatio;
      var cropBox = this.cropBox;
      var isCropped = this.isCropped && cropBox;
      var minCanvasWidth;
      var minCanvasHeight;
      var newCanvasLeft;
      var newCanvasTop;

      if (isSizeLimited) {
        minCanvasWidth = num(options.minCanvasWidth) || 0;
        minCanvasHeight = num(options.minCanvasHeight) || 0;

        if (viewMode) {
          if (viewMode > 1) {
            minCanvasWidth = max(minCanvasWidth, containerWidth);
            minCanvasHeight = max(minCanvasHeight, containerHeight);

            if (viewMode === 3) {
              if (minCanvasHeight * aspectRatio > minCanvasWidth) {
                minCanvasWidth = minCanvasHeight * aspectRatio;
              } else {
                minCanvasHeight = minCanvasWidth / aspectRatio;
              }
            }
          } else {
            if (minCanvasWidth) {
              minCanvasWidth = max(minCanvasWidth, isCropped ? cropBox.width : 0);
            } else if (minCanvasHeight) {
              minCanvasHeight = max(minCanvasHeight, isCropped ? cropBox.height : 0);
            } else if (isCropped) {
              minCanvasWidth = cropBox.width;
              minCanvasHeight = cropBox.height;

              if (minCanvasHeight * aspectRatio > minCanvasWidth) {
                minCanvasWidth = minCanvasHeight * aspectRatio;
              } else {
                minCanvasHeight = minCanvasWidth / aspectRatio;
              }
            }
          }
        }

        if (minCanvasWidth && minCanvasHeight) {
          if (minCanvasHeight * aspectRatio > minCanvasWidth) {
            minCanvasHeight = minCanvasWidth / aspectRatio;
          } else {
            minCanvasWidth = minCanvasHeight * aspectRatio;
          }
        } else if (minCanvasWidth) {
          minCanvasHeight = minCanvasWidth / aspectRatio;
        } else if (minCanvasHeight) {
          minCanvasWidth = minCanvasHeight * aspectRatio;
        }

        canvas.minWidth = minCanvasWidth;
        canvas.minHeight = minCanvasHeight;
        canvas.maxWidth = Infinity;
        canvas.maxHeight = Infinity;
      }

      if (isPositionLimited) {
        if (viewMode) {
          newCanvasLeft = containerWidth - canvas.width;
          newCanvasTop = containerHeight - canvas.height;

          canvas.minLeft = min(0, newCanvasLeft);
          canvas.minTop = min(0, newCanvasTop);
          canvas.maxLeft = max(0, newCanvasLeft);
          canvas.maxTop = max(0, newCanvasTop);

          if (isCropped && this.isLimited) {
            canvas.minLeft = min(
              cropBox.left,
              cropBox.left + cropBox.width - canvas.width
            );
            canvas.minTop = min(
              cropBox.top,
              cropBox.top + cropBox.height - canvas.height
            );
            canvas.maxLeft = cropBox.left;
            canvas.maxTop = cropBox.top;

            if (viewMode === 2) {
              if (canvas.width >= containerWidth) {
                canvas.minLeft = min(0, newCanvasLeft);
                canvas.maxLeft = max(0, newCanvasLeft);
              }

              if (canvas.height >= containerHeight) {
                canvas.minTop = min(0, newCanvasTop);
                canvas.maxTop = max(0, newCanvasTop);
              }
            }
          }
        } else {
          canvas.minLeft = -canvas.width;
          canvas.minTop = -canvas.height;
          canvas.maxLeft = containerWidth;
          canvas.maxTop = containerHeight;
        }
      }
    },

    renderCanvas: function (isChanged) {
      var canvas = this.canvas;
      var image = this.image;
      var rotate = image.rotate;
      var naturalWidth = image.naturalWidth;
      var naturalHeight = image.naturalHeight;
      var aspectRatio;
      var rotated;

      if (this.isRotated) {
        this.isRotated = false;

        // Computes rotated sizes with image sizes
        rotated = getRotatedSizes({
          width: image.width,
          height: image.height,
          degree: rotate
        });

        aspectRatio = rotated.width / rotated.height;

        if (aspectRatio !== canvas.aspectRatio) {
          canvas.left -= (rotated.width - canvas.width) / 2;
          canvas.top -= (rotated.height - canvas.height) / 2;
          canvas.width = rotated.width;
          canvas.height = rotated.height;
          canvas.aspectRatio = aspectRatio;
          canvas.naturalWidth = naturalWidth;
          canvas.naturalHeight = naturalHeight;

          // Computes rotated sizes with natural image sizes
          if (rotate % 180) {
            rotated = getRotatedSizes({
              width: naturalWidth,
              height: naturalHeight,
              degree: rotate
            });

            canvas.naturalWidth = rotated.width;
            canvas.naturalHeight = rotated.height;
          }

          this.limitCanvas(true, false);
        }
      }

      if (canvas.width > canvas.maxWidth || canvas.width < canvas.minWidth) {
        canvas.left = canvas.oldLeft;
      }

      if (canvas.height > canvas.maxHeight || canvas.height < canvas.minHeight) {
        canvas.top = canvas.oldTop;
      }

      canvas.width = min(max(canvas.width, canvas.minWidth), canvas.maxWidth);
      canvas.height = min(max(canvas.height, canvas.minHeight), canvas.maxHeight);

      this.limitCanvas(false, true);

      canvas.oldLeft = canvas.left = min(max(canvas.left, canvas.minLeft), canvas.maxLeft);
      canvas.oldTop = canvas.top = min(max(canvas.top, canvas.minTop), canvas.maxTop);

      this.$canvas.css({
        width: canvas.width,
        height: canvas.height,
        left: canvas.left,
        top: canvas.top
      });

      this.renderImage();

      if (this.isCropped && this.isLimited) {
        this.limitCropBox(true, true);
      }

      if (isChanged) {
        this.output();
      }
    },

    renderImage: function (isChanged) {
      var canvas = this.canvas;
      var image = this.image;
      var reversed;

      if (image.rotate) {
        reversed = getRotatedSizes({
          width: canvas.width,
          height: canvas.height,
          degree: image.rotate,
          aspectRatio: image.aspectRatio
        }, true);
      }

      $.extend(image, reversed ? {
        width: reversed.width,
        height: reversed.height,
        left: (canvas.width - reversed.width) / 2,
        top: (canvas.height - reversed.height) / 2
      } : {
        width: canvas.width,
        height: canvas.height,
        left: 0,
        top: 0
      });

      this.$clone.css({
        width: image.width,
        height: image.height,
        marginLeft: image.left,
        marginTop: image.top,
        transform: getTransform(image)
      });

      if (isChanged) {
        this.output();
      }
    },

    initCropBox: function () {
      var options = this.options;
      var canvas = this.canvas;
      var aspectRatio = options.aspectRatio;
      var autoCropArea = num(options.autoCropArea) || 0.8;
      var cropBox = {
            width: canvas.width,
            height: canvas.height
          };

      if (aspectRatio) {
        if (canvas.height * aspectRatio > canvas.width) {
          cropBox.height = cropBox.width / aspectRatio;
        } else {
          cropBox.width = cropBox.height * aspectRatio;
        }
      }

      this.cropBox = cropBox;
      this.limitCropBox(true, true);

      // Initialize auto crop area
      cropBox.width = min(max(cropBox.width, cropBox.minWidth), cropBox.maxWidth);
      cropBox.height = min(max(cropBox.height, cropBox.minHeight), cropBox.maxHeight);

      // The width of auto crop area must large than "minWidth", and the height too. (#164)
      cropBox.width = max(cropBox.minWidth, cropBox.width * autoCropArea);
      cropBox.height = max(cropBox.minHeight, cropBox.height * autoCropArea);
      cropBox.oldLeft = cropBox.left = canvas.left + (canvas.width - cropBox.width) / 2;
      cropBox.oldTop = cropBox.top = canvas.top + (canvas.height - cropBox.height) / 2;

      this.initialCropBox = $.extend({}, cropBox);
    },

    limitCropBox: function (isSizeLimited, isPositionLimited) {
      var options = this.options;
      var aspectRatio = options.aspectRatio;
      var container = this.container;
      var containerWidth = container.width;
      var containerHeight = container.height;
      var canvas = this.canvas;
      var cropBox = this.cropBox;
      var isLimited = this.isLimited;
      var minCropBoxWidth;
      var minCropBoxHeight;
      var maxCropBoxWidth;
      var maxCropBoxHeight;

      if (isSizeLimited) {
        minCropBoxWidth = num(options.minCropBoxWidth) || 0;
        minCropBoxHeight = num(options.minCropBoxHeight) || 0;

        // The min/maxCropBoxWidth/Height must be less than containerWidth/Height
        minCropBoxWidth = min(minCropBoxWidth, containerWidth);
        minCropBoxHeight = min(minCropBoxHeight, containerHeight);
        maxCropBoxWidth = min(containerWidth, isLimited ? canvas.width : containerWidth);
        maxCropBoxHeight = min(containerHeight, isLimited ? canvas.height : containerHeight);

        if (aspectRatio) {
          if (minCropBoxWidth && minCropBoxHeight) {
            if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
              minCropBoxHeight = minCropBoxWidth / aspectRatio;
            } else {
              minCropBoxWidth = minCropBoxHeight * aspectRatio;
            }
          } else if (minCropBoxWidth) {
            minCropBoxHeight = minCropBoxWidth / aspectRatio;
          } else if (minCropBoxHeight) {
            minCropBoxWidth = minCropBoxHeight * aspectRatio;
          }

          if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
            maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
          } else {
            maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
          }
        }

        // The minWidth/Height must be less than maxWidth/Height
        cropBox.minWidth = min(minCropBoxWidth, maxCropBoxWidth);
        cropBox.minHeight = min(minCropBoxHeight, maxCropBoxHeight);
        cropBox.maxWidth = maxCropBoxWidth;
        cropBox.maxHeight = maxCropBoxHeight;
      }

      if (isPositionLimited) {
        if (isLimited) {
          cropBox.minLeft = max(0, canvas.left);
          cropBox.minTop = max(0, canvas.top);
          cropBox.maxLeft = min(containerWidth, canvas.left + canvas.width) - cropBox.width;
          cropBox.maxTop = min(containerHeight, canvas.top + canvas.height) - cropBox.height;
        } else {
          cropBox.minLeft = 0;
          cropBox.minTop = 0;
          cropBox.maxLeft = containerWidth - cropBox.width;
          cropBox.maxTop = containerHeight - cropBox.height;
        }
      }
    },

    renderCropBox: function () {
      var options = this.options;
      var container = this.container;
      var containerWidth = container.width;
      var containerHeight = container.height;
      var cropBox = this.cropBox;

      if (cropBox.width > cropBox.maxWidth || cropBox.width < cropBox.minWidth) {
        cropBox.left = cropBox.oldLeft;
      }

      if (cropBox.height > cropBox.maxHeight || cropBox.height < cropBox.minHeight) {
        cropBox.top = cropBox.oldTop;
      }

      cropBox.width = min(max(cropBox.width, cropBox.minWidth), cropBox.maxWidth);
      cropBox.height = min(max(cropBox.height, cropBox.minHeight), cropBox.maxHeight);

      this.limitCropBox(false, true);

      cropBox.oldLeft = cropBox.left = min(max(cropBox.left, cropBox.minLeft), cropBox.maxLeft);
      cropBox.oldTop = cropBox.top = min(max(cropBox.top, cropBox.minTop), cropBox.maxTop);

      if (options.movable && options.cropBoxMovable) {

        // Turn to move the canvas when the crop box is equal to the container
        this.$face.data(DATA_ACTION, (cropBox.width === containerWidth && cropBox.height === containerHeight) ? ACTION_MOVE : ACTION_ALL);
      }

      this.$cropBox.css({
        width: cropBox.width,
        height: cropBox.height,
        left: cropBox.left,
        top: cropBox.top
      });

      if (this.isCropped && this.isLimited) {
        this.limitCanvas(true, true);
      }

      if (!this.isDisabled) {
        this.output();
      }
    },

    output: function () {
      this.preview();

      if (this.isCompleted) {
        this.trigger(EVENT_CROP, this.getData());
      }
    },

    initPreview: function () {
      var crossOrigin = getCrossOrigin(this.crossOrigin);
      var url = crossOrigin ? this.crossOriginUrl : this.url;
      var $clone2;

      this.$preview = $(this.options.preview);
      this.$clone2 = $clone2 = $('<img' + crossOrigin + ' src="' + url + '">');
      this.$viewBox.html($clone2);
      this.$preview.each(function () {
        var $this = $(this);

        // Save the original size for recover
        $this.data(DATA_PREVIEW, {
          width: $this.width(),
          height: $this.height(),
          html: $this.html()
        });

        /**
         * Override img element styles
         * Add `display:block` to avoid margin top issue
         * (Occur only when margin-top <= -height)
         */
        $this.html(
          '<img' + crossOrigin + ' src="' + url + '" style="' +
          'display:block;width:100%;height:auto;' +
          'min-width:0!important;min-height:0!important;' +
          'max-width:none!important;max-height:none!important;' +
          'image-orientation:0deg!important;">'
        );
      });
    },

    resetPreview: function () {
      this.$preview.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_PREVIEW);

        $this.css({
          width: data.width,
          height: data.height
        }).html(data.html).removeData(DATA_PREVIEW);
      });
    },

    preview: function () {
      var image = this.image;
      var canvas = this.canvas;
      var cropBox = this.cropBox;
      var cropBoxWidth = cropBox.width;
      var cropBoxHeight = cropBox.height;
      var width = image.width;
      var height = image.height;
      var left = cropBox.left - canvas.left - image.left;
      var top = cropBox.top - canvas.top - image.top;

      if (!this.isCropped || this.isDisabled) {
        return;
      }

      this.$clone2.css({
        width: width,
        height: height,
        marginLeft: -left,
        marginTop: -top,
        transform: getTransform(image)
      });

      this.$preview.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_PREVIEW);
        var originalWidth = data.width;
        var originalHeight = data.height;
        var newWidth = originalWidth;
        var newHeight = originalHeight;
        var ratio = 1;

        if (cropBoxWidth) {
          ratio = originalWidth / cropBoxWidth;
          newHeight = cropBoxHeight * ratio;
        }

        if (cropBoxHeight && newHeight > originalHeight) {
          ratio = originalHeight / cropBoxHeight;
          newWidth = cropBoxWidth * ratio;
          newHeight = originalHeight;
        }

        $this.css({
          width: newWidth,
          height: newHeight
        }).find('img').css({
          width: width * ratio,
          height: height * ratio,
          marginLeft: -left * ratio,
          marginTop: -top * ratio,
          transform: getTransform(image)
        });
      });
    },

    bind: function () {
      var options = this.options;
      var $this = this.$element;
      var $cropper = this.$cropper;

      if ($.isFunction(options.cropstart)) {
        $this.on(EVENT_CROP_START, options.cropstart);
      }

      if ($.isFunction(options.cropmove)) {
        $this.on(EVENT_CROP_MOVE, options.cropmove);
      }

      if ($.isFunction(options.cropend)) {
        $this.on(EVENT_CROP_END, options.cropend);
      }

      if ($.isFunction(options.crop)) {
        $this.on(EVENT_CROP, options.crop);
      }

      if ($.isFunction(options.zoom)) {
        $this.on(EVENT_ZOOM, options.zoom);
      }

      $cropper.on(EVENT_MOUSE_DOWN, $.proxy(this.cropStart, this));

      if (options.zoomable && options.zoomOnWheel) {
        $cropper.on(EVENT_WHEEL, $.proxy(this.wheel, this));
      }

      if (options.toggleDragModeOnDblclick) {
        $cropper.on(EVENT_DBLCLICK, $.proxy(this.dblclick, this));
      }

      $document.
        on(EVENT_MOUSE_MOVE, (this._cropMove = proxy(this.cropMove, this))).
        on(EVENT_MOUSE_UP, (this._cropEnd = proxy(this.cropEnd, this)));

      if (options.responsive) {
        $window.on(EVENT_RESIZE, (this._resize = proxy(this.resize, this)));
      }
    },

    unbind: function () {
      var options = this.options;
      var $this = this.$element;
      var $cropper = this.$cropper;

      if ($.isFunction(options.cropstart)) {
        $this.off(EVENT_CROP_START, options.cropstart);
      }

      if ($.isFunction(options.cropmove)) {
        $this.off(EVENT_CROP_MOVE, options.cropmove);
      }

      if ($.isFunction(options.cropend)) {
        $this.off(EVENT_CROP_END, options.cropend);
      }

      if ($.isFunction(options.crop)) {
        $this.off(EVENT_CROP, options.crop);
      }

      if ($.isFunction(options.zoom)) {
        $this.off(EVENT_ZOOM, options.zoom);
      }

      $cropper.off(EVENT_MOUSE_DOWN, this.cropStart);

      if (options.zoomable && options.zoomOnWheel) {
        $cropper.off(EVENT_WHEEL, this.wheel);
      }

      if (options.toggleDragModeOnDblclick) {
        $cropper.off(EVENT_DBLCLICK, this.dblclick);
      }

      $document.
        off(EVENT_MOUSE_MOVE, this._cropMove).
        off(EVENT_MOUSE_UP, this._cropEnd);

      if (options.responsive) {
        $window.off(EVENT_RESIZE, this._resize);
      }
    },

    resize: function () {
      var restore = this.options.restore;
      var $container = this.$container;
      var container = this.container;
      var canvasData;
      var cropBoxData;
      var ratio;

      // Check `container` is necessary for IE8
      if (this.isDisabled || !container) {
        return;
      }

      ratio = $container.width() / container.width;

      // Resize when width changed or height changed
      if (ratio !== 1 || $container.height() !== container.height) {
        if (restore) {
          canvasData = this.getCanvasData();
          cropBoxData = this.getCropBoxData();
        }

        this.render();

        if (restore) {
          this.setCanvasData($.each(canvasData, function (i, n) {
            canvasData[i] = n * ratio;
          }));
          this.setCropBoxData($.each(cropBoxData, function (i, n) {
            cropBoxData[i] = n * ratio;
          }));
        }
      }
    },

    dblclick: function () {
      if (this.isDisabled) {
        return;
      }

      if (this.$dragBox.hasClass(CLASS_CROP)) {
        this.setDragMode(ACTION_MOVE);
      } else {
        this.setDragMode(ACTION_CROP);
      }
    },

    wheel: function (event) {
      var e = event.originalEvent || event;
      var ratio = num(this.options.wheelZoomRatio) || 0.1;
      var delta = 1;

      if (this.isDisabled) {
        return;
      }

      event.preventDefault();

      // Limit wheel speed to prevent zoom too fast
      if (this.wheeling) {
        return;
      }

      this.wheeling = true;

      setTimeout($.proxy(function () {
        this.wheeling = false;
      }, this), 50);

      if (e.deltaY) {
        delta = e.deltaY > 0 ? 1 : -1;
      } else if (e.wheelDelta) {
        delta = -e.wheelDelta / 120;
      } else if (e.detail) {
        delta = e.detail > 0 ? 1 : -1;
      }

      this.zoom(-delta * ratio, event);
    },

    cropStart: function (event) {
      var options = this.options;
      var originalEvent = event.originalEvent;
      var touches = originalEvent && originalEvent.touches;
      var e = event;
      var touchesLength;
      var action;

      if (this.isDisabled) {
        return;
      }

      if (touches) {
        touchesLength = touches.length;

        if (touchesLength > 1) {
          if (options.zoomable && options.zoomOnTouch && touchesLength === 2) {
            e = touches[1];
            this.startX2 = e.pageX;
            this.startY2 = e.pageY;
            action = ACTION_ZOOM;
          } else {
            return;
          }
        }

        e = touches[0];
      }

      action = action || $(e.target).data(DATA_ACTION);

      if (REGEXP_ACTIONS.test(action)) {
        if (this.trigger(EVENT_CROP_START, {
          originalEvent: originalEvent,
          action: action
        }).isDefaultPrevented()) {
          return;
        }

        event.preventDefault();

        this.action = action;
        this.cropping = false;

        // IE8  has `event.pageX/Y`, but not `event.originalEvent.pageX/Y`
        // IE10 has `event.originalEvent.pageX/Y`, but not `event.pageX/Y`
        this.startX = e.pageX || originalEvent && originalEvent.pageX;
        this.startY = e.pageY || originalEvent && originalEvent.pageY;

        if (action === ACTION_CROP) {
          this.cropping = true;
          this.$dragBox.addClass(CLASS_MODAL);
        }
      }
    },

    cropMove: function (event) {
      var options = this.options;
      var originalEvent = event.originalEvent;
      var touches = originalEvent && originalEvent.touches;
      var e = event;
      var action = this.action;
      var touchesLength;

      if (this.isDisabled) {
        return;
      }

      if (touches) {
        touchesLength = touches.length;

        if (touchesLength > 1) {
          if (options.zoomable && options.zoomOnTouch && touchesLength === 2) {
            e = touches[1];
            this.endX2 = e.pageX;
            this.endY2 = e.pageY;
          } else {
            return;
          }
        }

        e = touches[0];
      }

      if (action) {
        if (this.trigger(EVENT_CROP_MOVE, {
          originalEvent: originalEvent,
          action: action
        }).isDefaultPrevented()) {
          return;
        }

        event.preventDefault();

        this.endX = e.pageX || originalEvent && originalEvent.pageX;
        this.endY = e.pageY || originalEvent && originalEvent.pageY;

        this.change(e.shiftKey, action === ACTION_ZOOM ? event : null);
      }
    },

    cropEnd: function (event) {
      var originalEvent = event.originalEvent;
      var action = this.action;

      if (this.isDisabled) {
        return;
      }

      if (action) {
        event.preventDefault();

        if (this.cropping) {
          this.cropping = false;
          this.$dragBox.toggleClass(CLASS_MODAL, this.isCropped && this.options.modal);
        }

        this.action = '';

        this.trigger(EVENT_CROP_END, {
          originalEvent: originalEvent,
          action: action
        });
      }
    },

    change: function (shiftKey, event) {
      var options = this.options;
      var aspectRatio = options.aspectRatio;
      var action = this.action;
      var container = this.container;
      var canvas = this.canvas;
      var cropBox = this.cropBox;
      var width = cropBox.width;
      var height = cropBox.height;
      var left = cropBox.left;
      var top = cropBox.top;
      var right = left + width;
      var bottom = top + height;
      var minLeft = 0;
      var minTop = 0;
      var maxWidth = container.width;
      var maxHeight = container.height;
      var renderable = true;
      var offset;
      var range;

      // Locking aspect ratio in "free mode" by holding shift key (#259)
      if (!aspectRatio && shiftKey) {
        aspectRatio = width && height ? width / height : 1;
      }

      if (this.isLimited) {
        minLeft = cropBox.minLeft;
        minTop = cropBox.minTop;
        maxWidth = minLeft + min(container.width, canvas.width, canvas.left + canvas.width);
        maxHeight = minTop + min(container.height, canvas.height, canvas.top + canvas.height);
      }

      range = {
        x: this.endX - this.startX,
        y: this.endY - this.startY
      };

      if (aspectRatio) {
        range.X = range.y * aspectRatio;
        range.Y = range.x / aspectRatio;
      }

      switch (action) {
        // Move crop box
        case ACTION_ALL:
          left += range.x;
          top += range.y;
          break;

        // Resize crop box
        case ACTION_EAST:
          if (range.x >= 0 && (right >= maxWidth || aspectRatio &&
            (top <= minTop || bottom >= maxHeight))) {

            renderable = false;
            break;
          }

          width += range.x;

          if (aspectRatio) {
            height = width / aspectRatio;
            top -= range.Y / 2;
          }

          if (width < 0) {
            action = ACTION_WEST;
            width = 0;
          }

          break;

        case ACTION_NORTH:
          if (range.y <= 0 && (top <= minTop || aspectRatio &&
            (left <= minLeft || right >= maxWidth))) {

            renderable = false;
            break;
          }

          height -= range.y;
          top += range.y;

          if (aspectRatio) {
            width = height * aspectRatio;
            left += range.X / 2;
          }

          if (height < 0) {
            action = ACTION_SOUTH;
            height = 0;
          }

          break;

        case ACTION_WEST:
          if (range.x <= 0 && (left <= minLeft || aspectRatio &&
            (top <= minTop || bottom >= maxHeight))) {

            renderable = false;
            break;
          }

          width -= range.x;
          left += range.x;

          if (aspectRatio) {
            height = width / aspectRatio;
            top += range.Y / 2;
          }

          if (width < 0) {
            action = ACTION_EAST;
            width = 0;
          }

          break;

        case ACTION_SOUTH:
          if (range.y >= 0 && (bottom >= maxHeight || aspectRatio &&
            (left <= minLeft || right >= maxWidth))) {

            renderable = false;
            break;
          }

          height += range.y;

          if (aspectRatio) {
            width = height * aspectRatio;
            left -= range.X / 2;
          }

          if (height < 0) {
            action = ACTION_NORTH;
            height = 0;
          }

          break;

        case ACTION_NORTH_EAST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
              renderable = false;
              break;
            }

            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
          } else {
            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width += range.x;
            }

            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_WEST;
            height = 0;
            width = 0;
          } else if (width < 0) {
            action = ACTION_NORTH_WEST;
            width = 0;
          } else if (height < 0) {
            action = ACTION_SOUTH_EAST;
            height = 0;
          }

          break;

        case ACTION_NORTH_WEST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
              renderable = false;
              break;
            }

            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
            left += range.X;
          } else {
            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }

            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_EAST;
            height = 0;
            width = 0;
          } else if (width < 0) {
            action = ACTION_NORTH_EAST;
            width = 0;
          } else if (height < 0) {
            action = ACTION_SOUTH_WEST;
            height = 0;
          }

          break;

        case ACTION_SOUTH_WEST:
          if (aspectRatio) {
            if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
              renderable = false;
              break;
            }

            width -= range.x;
            left += range.x;
            height = width / aspectRatio;
          } else {
            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }

            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_NORTH_EAST;
            height = 0;
            width = 0;
          } else if (width < 0) {
            action = ACTION_SOUTH_EAST;
            width = 0;
          } else if (height < 0) {
            action = ACTION_NORTH_WEST;
            height = 0;
          }

          break;

        case ACTION_SOUTH_EAST:
          if (aspectRatio) {
            if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
              renderable = false;
              break;
            }

            width += range.x;
            height = width / aspectRatio;
          } else {
            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width += range.x;
            }

            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_NORTH_WEST;
            height = 0;
            width = 0;
          } else if (width < 0) {
            action = ACTION_SOUTH_WEST;
            width = 0;
          } else if (height < 0) {
            action = ACTION_NORTH_EAST;
            height = 0;
          }

          break;

        // Move canvas
        case ACTION_MOVE:
          this.move(range.x, range.y);
          renderable = false;
          break;

        // Zoom canvas
        case ACTION_ZOOM:
          this.zoom((function (x1, y1, x2, y2) {
            var z1 = sqrt(x1 * x1 + y1 * y1);
            var z2 = sqrt(x2 * x2 + y2 * y2);

            return (z2 - z1) / z1;
          })(
            abs(this.startX - this.startX2),
            abs(this.startY - this.startY2),
            abs(this.endX - this.endX2),
            abs(this.endY - this.endY2)
          ), event);
          this.startX2 = this.endX2;
          this.startY2 = this.endY2;
          renderable = false;
          break;

        // Create crop box
        case ACTION_CROP:
          if (!range.x || !range.y) {
            renderable = false;
            break;
          }

          offset = this.$cropper.offset();
          left = this.startX - offset.left;
          top = this.startY - offset.top;
          width = cropBox.minWidth;
          height = cropBox.minHeight;

          if (range.x > 0) {
            action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
          } else if (range.x < 0) {
            left -= width;
            action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
          }

          if (range.y < 0) {
            top -= height;
          }

          // Show the crop box if is hidden
          if (!this.isCropped) {
            this.$cropBox.removeClass(CLASS_HIDDEN);
            this.isCropped = true;

            if (this.isLimited) {
              this.limitCropBox(true, true);
            }
          }

          break;

        // No default
      }

      if (renderable) {
        cropBox.width = width;
        cropBox.height = height;
        cropBox.left = left;
        cropBox.top = top;
        this.action = action;

        this.renderCropBox();
      }

      // Override
      this.startX = this.endX;
      this.startY = this.endY;
    },

    // Show the crop box manually
    crop: function () {
      if (!this.isBuilt || this.isDisabled) {
        return;
      }

      if (!this.isCropped) {
        this.isCropped = true;
        this.limitCropBox(true, true);

        if (this.options.modal) {
          this.$dragBox.addClass(CLASS_MODAL);
        }

        this.$cropBox.removeClass(CLASS_HIDDEN);
      }

      this.setCropBoxData(this.initialCropBox);
    },

    // Reset the image and crop box to their initial states
    reset: function () {
      if (!this.isBuilt || this.isDisabled) {
        return;
      }

      this.image = $.extend({}, this.initialImage);
      this.canvas = $.extend({}, this.initialCanvas);
      this.cropBox = $.extend({}, this.initialCropBox);

      this.renderCanvas();

      if (this.isCropped) {
        this.renderCropBox();
      }
    },

    // Clear the crop box
    clear: function () {
      if (!this.isCropped || this.isDisabled) {
        return;
      }

      $.extend(this.cropBox, {
        left: 0,
        top: 0,
        width: 0,
        height: 0
      });

      this.isCropped = false;
      this.renderCropBox();

      this.limitCanvas(true, true);

      // Render canvas after crop box rendered
      this.renderCanvas();

      this.$dragBox.removeClass(CLASS_MODAL);
      this.$cropBox.addClass(CLASS_HIDDEN);
    },

    /**
     * Replace the image's src and rebuild the cropper
     *
     * @param {String} url
     * @param {Boolean} onlyColorChanged (optional)
     */
    replace: function (url, onlyColorChanged) {
      if (!this.isDisabled && url) {
        if (this.isImg) {
          this.$element.attr('src', url);
        }

        if (onlyColorChanged) {
          this.url = url;
          this.$clone.attr('src', url);

          if (this.isBuilt) {
            this.$preview.find('img').add(this.$clone2).attr('src', url);
          }
        } else {
          if (this.isImg) {
            this.isReplaced = true;
          }

          // Clear previous data
          this.options.data = null;
          this.load(url);
        }
      }
    },

    // Enable (unfreeze) the cropper
    enable: function () {
      if (this.isBuilt) {
        this.isDisabled = false;
        this.$cropper.removeClass(CLASS_DISABLED);
      }
    },

    // Disable (freeze) the cropper
    disable: function () {
      if (this.isBuilt) {
        this.isDisabled = true;
        this.$cropper.addClass(CLASS_DISABLED);
      }
    },

    // Destroy the cropper and remove the instance from the image
    destroy: function () {
      var $this = this.$element;

      if (this.isLoaded) {
        if (this.isImg && this.isReplaced) {
          $this.attr('src', this.originalUrl);
        }

        this.unbuild();
        $this.removeClass(CLASS_HIDDEN);
      } else {
        if (this.isImg) {
          $this.off(EVENT_LOAD, this.start);
        } else if (this.$clone) {
          this.$clone.remove();
        }
      }

      $this.removeData(NAMESPACE);
    },

    /**
     * Move the canvas with relative offsets
     *
     * @param {Number} offsetX
     * @param {Number} offsetY (optional)
     */
    move: function (offsetX, offsetY) {
      var canvas = this.canvas;

      this.moveTo(
        isUndefined(offsetX) ? offsetX : canvas.left + num(offsetX),
        isUndefined(offsetY) ? offsetY : canvas.top + num(offsetY)
      );
    },

    /**
     * Move the canvas to an absolute point
     *
     * @param {Number} x
     * @param {Number} y (optional)
     */
    moveTo: function (x, y) {
      var canvas = this.canvas;
      var isChanged = false;

      // If "y" is not present, its default value is "x"
      if (isUndefined(y)) {
        y = x;
      }

      x = num(x);
      y = num(y);

      if (this.isBuilt && !this.isDisabled && this.options.movable) {
        if (isNumber(x)) {
          canvas.left = x;
          isChanged = true;
        }

        if (isNumber(y)) {
          canvas.top = y;
          isChanged = true;
        }

        if (isChanged) {
          this.renderCanvas(true);
        }
      }
    },

    /**
     * Zoom the canvas with a relative ratio
     *
     * @param {Number} ratio
     * @param {jQuery Event} _event (private)
     */
    zoom: function (ratio, _event) {
      var canvas = this.canvas;

      ratio = num(ratio);

      if (ratio < 0) {
        ratio =  1 / (1 - ratio);
      } else {
        ratio = 1 + ratio;
      }

      this.zoomTo(canvas.width * ratio / canvas.naturalWidth, _event);
    },

    /**
     * Zoom the canvas to an absolute ratio
     *
     * @param {Number} ratio
     * @param {jQuery Event} _event (private)
     */
    zoomTo: function (ratio, _event) {
      var options = this.options;
      var canvas = this.canvas;
      var width = canvas.width;
      var height = canvas.height;
      var naturalWidth = canvas.naturalWidth;
      var naturalHeight = canvas.naturalHeight;
      var originalEvent;
      var newWidth;
      var newHeight;
      var offset;
      var center;

      ratio = num(ratio);

      if (ratio >= 0 && this.isBuilt && !this.isDisabled && options.zoomable) {
        newWidth = naturalWidth * ratio;
        newHeight = naturalHeight * ratio;

        if (_event) {
          originalEvent = _event.originalEvent;
        }

        if (this.trigger(EVENT_ZOOM, {
          originalEvent: originalEvent,
          oldRatio: width / naturalWidth,
          ratio: newWidth / naturalWidth
        }).isDefaultPrevented()) {
          return;
        }

        if (originalEvent) {
          offset = this.$cropper.offset();
          center = originalEvent.touches ? getTouchesCenter(originalEvent.touches) : {
            pageX: _event.pageX || originalEvent.pageX || 0,
            pageY: _event.pageY || originalEvent.pageY || 0
          };

          // Zoom from the triggering point of the event
          canvas.left -= (newWidth - width) * (
            ((center.pageX - offset.left) - canvas.left) / width
          );
          canvas.top -= (newHeight - height) * (
            ((center.pageY - offset.top) - canvas.top) / height
          );
        } else {

          // Zoom from the center of the canvas
          canvas.left -= (newWidth - width) / 2;
          canvas.top -= (newHeight - height) / 2;
        }

        canvas.width = newWidth;
        canvas.height = newHeight;
        this.renderCanvas(true);
      }
    },

    /**
     * Rotate the canvas with a relative degree
     *
     * @param {Number} degree
     */
    rotate: function (degree) {
      this.rotateTo((this.image.rotate || 0) + num(degree));
    },

    /**
     * Rotate the canvas to an absolute degree
     * https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function#rotate()
     *
     * @param {Number} degree
     */
    rotateTo: function (degree) {
      degree = num(degree);

      if (isNumber(degree) && this.isBuilt && !this.isDisabled && this.options.rotatable) {
        this.image.rotate = degree % 360;
        this.isRotated = true;
        this.renderCanvas(true);
      }
    },

    /**
     * Scale the image
     * https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function#scale()
     *
     * @param {Number} scaleX
     * @param {Number} scaleY (optional)
     */
    scale: function (scaleX, scaleY) {
      var image = this.image;
      var isChanged = false;

      // If "scaleY" is not present, its default value is "scaleX"
      if (isUndefined(scaleY)) {
        scaleY = scaleX;
      }

      scaleX = num(scaleX);
      scaleY = num(scaleY);

      if (this.isBuilt && !this.isDisabled && this.options.scalable) {
        if (isNumber(scaleX)) {
          image.scaleX = scaleX;
          isChanged = true;
        }

        if (isNumber(scaleY)) {
          image.scaleY = scaleY;
          isChanged = true;
        }

        if (isChanged) {
          this.renderImage(true);
        }
      }
    },

    /**
     * Scale the abscissa of the image
     *
     * @param {Number} scaleX
     */
    scaleX: function (scaleX) {
      var scaleY = this.image.scaleY;

      this.scale(scaleX, isNumber(scaleY) ? scaleY : 1);
    },

    /**
     * Scale the ordinate of the image
     *
     * @param {Number} scaleY
     */
    scaleY: function (scaleY) {
      var scaleX = this.image.scaleX;

      this.scale(isNumber(scaleX) ? scaleX : 1, scaleY);
    },

    /**
     * Get the cropped area position and size data (base on the original image)
     *
     * @param {Boolean} isRounded (optional)
     * @return {Object} data
     */
    getData: function (isRounded) {
      var options = this.options;
      var image = this.image;
      var canvas = this.canvas;
      var cropBox = this.cropBox;
      var ratio;
      var data;

      if (this.isBuilt && this.isCropped) {
        data = {
          x: cropBox.left - canvas.left,
          y: cropBox.top - canvas.top,
          width: cropBox.width,
          height: cropBox.height
        };

        ratio = image.width / image.naturalWidth;

        $.each(data, function (i, n) {
          n = n / ratio;
          data[i] = isRounded ? round(n) : n;
        });

      } else {
        data = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }

      if (options.rotatable) {
        data.rotate = image.rotate || 0;
      }

      if (options.scalable) {
        data.scaleX = image.scaleX || 1;
        data.scaleY = image.scaleY || 1;
      }

      return data;
    },

    /**
     * Set the cropped area position and size with new data
     *
     * @param {Object} data
     */
    setData: function (data) {
      var options = this.options;
      var image = this.image;
      var canvas = this.canvas;
      var cropBoxData = {};
      var isRotated;
      var isScaled;
      var ratio;

      if ($.isFunction(data)) {
        data = data.call(this.element);
      }

      if (this.isBuilt && !this.isDisabled && $.isPlainObject(data)) {
        if (options.rotatable) {
          if (isNumber(data.rotate) && data.rotate !== image.rotate) {
            image.rotate = data.rotate;
            this.isRotated = isRotated = true;
          }
        }

        if (options.scalable) {
          if (isNumber(data.scaleX) && data.scaleX !== image.scaleX) {
            image.scaleX = data.scaleX;
            isScaled = true;
          }

          if (isNumber(data.scaleY) && data.scaleY !== image.scaleY) {
            image.scaleY = data.scaleY;
            isScaled = true;
          }
        }

        if (isRotated) {
          this.renderCanvas();
        } else if (isScaled) {
          this.renderImage();
        }

        ratio = image.width / image.naturalWidth;

        if (isNumber(data.x)) {
          cropBoxData.left = data.x * ratio + canvas.left;
        }

        if (isNumber(data.y)) {
          cropBoxData.top = data.y * ratio + canvas.top;
        }

        if (isNumber(data.width)) {
          cropBoxData.width = data.width * ratio;
        }

        if (isNumber(data.height)) {
          cropBoxData.height = data.height * ratio;
        }

        this.setCropBoxData(cropBoxData);
      }
    },

    /**
     * Get the container size data
     *
     * @return {Object} data
     */
    getContainerData: function () {
      return this.isBuilt ? this.container : {};
    },

    /**
     * Get the image position and size data
     *
     * @return {Object} data
     */
    getImageData: function () {
      return this.isLoaded ? this.image : {};
    },

    /**
     * Get the canvas position and size data
     *
     * @return {Object} data
     */
    getCanvasData: function () {
      var canvas = this.canvas;
      var data = {};

      if (this.isBuilt) {
        $.each([
          'left',
          'top',
          'width',
          'height',
          'naturalWidth',
          'naturalHeight'
        ], function (i, n) {
          data[n] = canvas[n];
        });
      }

      return data;
    },

    /**
     * Set the canvas position and size with new data
     *
     * @param {Object} data
     */
    setCanvasData: function (data) {
      var canvas = this.canvas;
      var aspectRatio = canvas.aspectRatio;

      if ($.isFunction(data)) {
        data = data.call(this.$element);
      }

      if (this.isBuilt && !this.isDisabled && $.isPlainObject(data)) {
        if (isNumber(data.left)) {
          canvas.left = data.left;
        }

        if (isNumber(data.top)) {
          canvas.top = data.top;
        }

        if (isNumber(data.width)) {
          canvas.width = data.width;
          canvas.height = data.width / aspectRatio;
        } else if (isNumber(data.height)) {
          canvas.height = data.height;
          canvas.width = data.height * aspectRatio;
        }

        this.renderCanvas(true);
      }
    },

    /**
     * Get the crop box position and size data
     *
     * @return {Object} data
     */
    getCropBoxData: function () {
      var cropBox = this.cropBox;
      var data;

      if (this.isBuilt && this.isCropped) {
        data = {
          left: cropBox.left,
          top: cropBox.top,
          width: cropBox.width,
          height: cropBox.height
        };
      }

      return data || {};
    },

    /**
     * Set the crop box position and size with new data
     *
     * @param {Object} data
     */
    setCropBoxData: function (data) {
      var cropBox = this.cropBox;
      var aspectRatio = this.options.aspectRatio;
      var isWidthChanged;
      var isHeightChanged;

      if ($.isFunction(data)) {
        data = data.call(this.$element);
      }

      if (this.isBuilt && this.isCropped && !this.isDisabled && $.isPlainObject(data)) {

        if (isNumber(data.left)) {
          cropBox.left = data.left;
        }

        if (isNumber(data.top)) {
          cropBox.top = data.top;
        }

        if (isNumber(data.width)) {
          isWidthChanged = true;
          cropBox.width = data.width;
        }

        if (isNumber(data.height)) {
          isHeightChanged = true;
          cropBox.height = data.height;
        }

        if (aspectRatio) {
          if (isWidthChanged) {
            cropBox.height = cropBox.width / aspectRatio;
          } else if (isHeightChanged) {
            cropBox.width = cropBox.height * aspectRatio;
          }
        }

        this.renderCropBox();
      }
    },

    /**
     * Get a canvas drawn the cropped image
     *
     * @param {Object} options (optional)
     * @return {HTMLCanvasElement} canvas
     */
    getCroppedCanvas: function (options) {
      var originalWidth;
      var originalHeight;
      var canvasWidth;
      var canvasHeight;
      var scaledWidth;
      var scaledHeight;
      var scaledRatio;
      var aspectRatio;
      var canvas;
      var context;
      var data;

      if (!this.isBuilt || !SUPPORT_CANVAS) {
        return;
      }

      if (!this.isCropped) {
        return getSourceCanvas(this.$clone[0], this.image);
      }

      if (!$.isPlainObject(options)) {
        options = {};
      }

      data = this.getData();
      originalWidth = data.width;
      originalHeight = data.height;
      aspectRatio = originalWidth / originalHeight;

      if ($.isPlainObject(options)) {
        scaledWidth = options.width;
        scaledHeight = options.height;

        if (scaledWidth) {
          scaledHeight = scaledWidth / aspectRatio;
          scaledRatio = scaledWidth / originalWidth;
        } else if (scaledHeight) {
          scaledWidth = scaledHeight * aspectRatio;
          scaledRatio = scaledHeight / originalHeight;
        }
      }

      // The canvas element will use `Math.floor` on a float number, so floor first
      canvasWidth = floor(scaledWidth || originalWidth);
      canvasHeight = floor(scaledHeight || originalHeight);

      canvas = $('<canvas>')[0];
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      context = canvas.getContext('2d');

      if (options.fillColor) {
        context.fillStyle = options.fillColor;
        context.fillRect(0, 0, canvasWidth, canvasHeight);
      }

      // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage
      context.drawImage.apply(context, (function () {
        var source = getSourceCanvas(this.$clone[0], this.image);
        var sourceWidth = source.width;
        var sourceHeight = source.height;
        var canvas = this.canvas;
        var params = [source];

        // Source canvas
        var srcX = data.x + canvas.naturalWidth * (abs(data.scaleX || 1) - 1) / 2;
        var srcY = data.y + canvas.naturalHeight * (abs(data.scaleY || 1) - 1) / 2;
        var srcWidth;
        var srcHeight;

        // Destination canvas
        var dstX;
        var dstY;
        var dstWidth;
        var dstHeight;

        if (srcX <= -originalWidth || srcX > sourceWidth) {
          srcX = srcWidth = dstX = dstWidth = 0;
        } else if (srcX <= 0) {
          dstX = -srcX;
          srcX = 0;
          srcWidth = dstWidth = min(sourceWidth, originalWidth + srcX);
        } else if (srcX <= sourceWidth) {
          dstX = 0;
          srcWidth = dstWidth = min(originalWidth, sourceWidth - srcX);
        }

        if (srcWidth <= 0 || srcY <= -originalHeight || srcY > sourceHeight) {
          srcY = srcHeight = dstY = dstHeight = 0;
        } else if (srcY <= 0) {
          dstY = -srcY;
          srcY = 0;
          srcHeight = dstHeight = min(sourceHeight, originalHeight + srcY);
        } else if (srcY <= sourceHeight) {
          dstY = 0;
          srcHeight = dstHeight = min(originalHeight, sourceHeight - srcY);
        }

        // All the numerical parameters should be integer for `drawImage` (#476)
        params.push(floor(srcX), floor(srcY), floor(srcWidth), floor(srcHeight));

        // Scale destination sizes
        if (scaledRatio) {
          dstX *= scaledRatio;
          dstY *= scaledRatio;
          dstWidth *= scaledRatio;
          dstHeight *= scaledRatio;
        }

        // Avoid "IndexSizeError" in IE and Firefox
        if (dstWidth > 0 && dstHeight > 0) {
          params.push(floor(dstX), floor(dstY), floor(dstWidth), floor(dstHeight));
        }

        return params;
      }).call(this));

      return canvas;
    },

    /**
     * Change the aspect ratio of the crop box
     *
     * @param {Number} aspectRatio
     */
    setAspectRatio: function (aspectRatio) {
      var options = this.options;

      if (!this.isDisabled && !isUndefined(aspectRatio)) {

        // 0 -> NaN
        options.aspectRatio = max(0, aspectRatio) || NaN;

        if (this.isBuilt) {
          this.initCropBox();

          if (this.isCropped) {
            this.renderCropBox();
          }
        }
      }
    },

    /**
     * Change the drag mode
     *
     * @param {String} mode (optional)
     */
    setDragMode: function (mode) {
      var options = this.options;
      var croppable;
      var movable;

      if (this.isLoaded && !this.isDisabled) {
        croppable = mode === ACTION_CROP;
        movable = options.movable && mode === ACTION_MOVE;
        mode = (croppable || movable) ? mode : ACTION_NONE;

        this.$dragBox.
          data(DATA_ACTION, mode).
          toggleClass(CLASS_CROP, croppable).
          toggleClass(CLASS_MOVE, movable);

        if (!options.cropBoxMovable) {

          // Sync drag mode to crop box when it is not movable(#300)
          this.$face.
            data(DATA_ACTION, mode).
            toggleClass(CLASS_CROP, croppable).
            toggleClass(CLASS_MOVE, movable);
        }
      }
    }
  };

  Cropper.DEFAULTS = {

    // Define the view mode of the cropper
    viewMode: 0, // 0, 1, 2, 3

    // Define the dragging mode of the cropper
    dragMode: 'crop', // 'crop', 'move' or 'none'

    // Define the aspect ratio of the crop box
    aspectRatio: NaN,

    // An object with the previous cropping result data
    data: null,

    // A jQuery selector for adding extra containers to preview
    preview: '',

    // Re-render the cropper when resize the window
    responsive: true,

    // Restore the cropped area after resize the window
    restore: true,

    // Check if the current image is a cross-origin image
    checkCrossOrigin: true,

    // Check the current image's Exif Orientation information
    checkOrientation: true,

    // Show the black modal
    modal: true,

    // Show the dashed lines for guiding
    guides: true,

    // Show the center indicator for guiding
    center: true,

    // Show the white modal to highlight the crop box
    highlight: true,

    // Show the grid background
    background: true,

    // Enable to crop the image automatically when initialize
    autoCrop: true,

    // Define the percentage of automatic cropping area when initializes
    autoCropArea: 0.8,

    // Enable to move the image
    movable: true,

    // Enable to rotate the image
    rotatable: true,

    // Enable to scale the image
    scalable: true,

    // Enable to zoom the image
    zoomable: true,

    // Enable to zoom the image by dragging touch
    zoomOnTouch: true,

    // Enable to zoom the image by wheeling mouse
    zoomOnWheel: true,

    // Define zoom ratio when zoom the image by wheeling mouse
    wheelZoomRatio: 0.1,

    // Enable to move the crop box
    cropBoxMovable: true,

    // Enable to resize the crop box
    cropBoxResizable: true,

    // Toggle drag mode between "crop" and "move" when click twice on the cropper
    toggleDragModeOnDblclick: true,

    // Size limitation
    minCanvasWidth: 0,
    minCanvasHeight: 0,
    minCropBoxWidth: 0,
    minCropBoxHeight: 0,
    minContainerWidth: 200,
    minContainerHeight: 100,

    // Shortcuts of events
    build: null,
    built: null,
    cropstart: null,
    cropmove: null,
    cropend: null,
    crop: null,
    zoom: null
  };

  Cropper.setDefaults = function (options) {
    $.extend(Cropper.DEFAULTS, options);
  };

  Cropper.TEMPLATE = (
    '<div class="cropper-container">' +
      '<div class="cropper-wrap-box">' +
        '<div class="cropper-canvas"></div>' +
      '</div>' +
      '<div class="cropper-drag-box"></div>' +
      '<div class="cropper-crop-box">' +
        '<span class="cropper-view-box"></span>' +
        '<span class="cropper-dashed dashed-h"></span>' +
        '<span class="cropper-dashed dashed-v"></span>' +
        '<span class="cropper-center"></span>' +
        '<span class="cropper-face"></span>' +
        '<span class="cropper-line line-e" data-action="e"></span>' +
        '<span class="cropper-line line-n" data-action="n"></span>' +
        '<span class="cropper-line line-w" data-action="w"></span>' +
        '<span class="cropper-line line-s" data-action="s"></span>' +
        '<span class="cropper-point point-e" data-action="e"></span>' +
        '<span class="cropper-point point-n" data-action="n"></span>' +
        '<span class="cropper-point point-w" data-action="w"></span>' +
        '<span class="cropper-point point-s" data-action="s"></span>' +
        '<span class="cropper-point point-ne" data-action="ne"></span>' +
        '<span class="cropper-point point-nw" data-action="nw"></span>' +
        '<span class="cropper-point point-sw" data-action="sw"></span>' +
        '<span class="cropper-point point-se" data-action="se"></span>' +
      '</div>' +
    '</div>'
  );

  // Save the other cropper
  Cropper.other = $.fn.cropper;

  // Register as jQuery plugin
  $.fn.cropper = function (option) {
    var args = toArray(arguments, 1);
    var result;

    this.each(function () {
      var $this = $(this);
      var data = $this.data(NAMESPACE);
      var options;
      var fn;

      if (!data) {
        if (/destroy/.test(option)) {
          return;
        }

        options = $.extend({}, $this.data(), $.isPlainObject(option) && option);
        $this.data(NAMESPACE, (data = new Cropper(this, options)));
      }

      if (typeof option === 'string' && $.isFunction(fn = data[option])) {
        result = fn.apply(data, args);
      }
    });

    return isUndefined(result) ? this : result;
  };

  $.fn.cropper.Constructor = Cropper;
  $.fn.cropper.setDefaults = Cropper.setDefaults;

  // No conflict
  $.fn.cropper.noConflict = function () {
    $.fn.cropper = Cropper.other;
    return this;
  };

});


!function(t){"use strict";var e=t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype,o=t.Blob&&function(){try{return Boolean(new Blob)}catch(t){return!1}}(),n=o&&t.Uint8Array&&function(){try{return 100===new Blob([new Uint8Array(100)]).size}catch(t){return!1}}(),r=t.BlobBuilder||t.WebKitBlobBuilder||t.MozBlobBuilder||t.MSBlobBuilder,a=/^data:((.*?)(;charset=.*?)?)(;base64)?,/,i=(o||r)&&t.atob&&t.ArrayBuffer&&t.Uint8Array&&function(t){var e,i,l,u,b,c,d,B,f;if(e=t.match(a),!e)throw new Error("invalid data URI");for(i=e[2]?e[1]:"text/plain"+(e[3]||";charset=US-ASCII"),l=!!e[4],u=t.slice(e[0].length),b=l?atob(u):decodeURIComponent(u),c=new ArrayBuffer(b.length),d=new Uint8Array(c),B=0;B<b.length;B+=1)d[B]=b.charCodeAt(B);return o?new Blob([n?d:c],{type:i}):(f=new r,f.append(c),f.getBlob(i))};t.HTMLCanvasElement&&!e.toBlob&&(e.mozGetAsFile?e.toBlob=function(t,o,n){t(n&&e.toDataURL&&i?i(this.toDataURL(o,n)):this.mozGetAsFile("blob",o))}:e.toDataURL&&i&&(e.toBlob=function(t,e,o){t(i(this.toDataURL(e,o)))})),"function"==typeof define&&define.amd?define(function(){return i}):"object"==typeof module&&module.exports?module.exports=i:t.dataURLtoBlob=i}(window);
//# sourceMappingURL=canvas-to-blob.min.js.map


/* build: `node build.js modules=ALL exclude=json,gestures minifier=uglifyjs` */
/*! Fabric.js Copyright 2008-2015, Printio (Juriy Zaytsev, Maxim Chernyak) */

var fabric = fabric || { version: "1.6.4" };
if (typeof exports !== 'undefined') {
  exports.fabric = fabric;
}

if (typeof document !== 'undefined' && typeof window !== 'undefined') {
  fabric.document = document;
  fabric.window = window;
  // ensure globality even if entire library were function wrapped (as in Meteor.js packaging system)
  window.fabric = fabric;
}
else {
  // assume we're running under node.js when document/window are not present
  fabric.document = require("jsdom")
    .jsdom("<!DOCTYPE html><html><head></head><body></body></html>");

  if (fabric.document.createWindow) {
    fabric.window = fabric.document.createWindow();
  } else {
    fabric.window = fabric.document.parentWindow;
  }
}

/**
 * True when in environment that supports touch events
 * @type boolean
 */
fabric.isTouchSupported = "ontouchstart" in fabric.document.documentElement;

/**
 * True when in environment that's probably Node.js
 * @type boolean
 */
fabric.isLikelyNode = typeof Buffer !== 'undefined' &&
                      typeof window === 'undefined';

/* _FROM_SVG_START_ */
/**
 * Attributes parsed from all SVG elements
 * @type array
 */
fabric.SHARED_ATTRIBUTES = [
  "display",
  "transform",
  "fill", "fill-opacity", "fill-rule",
  "opacity",
  "stroke", "stroke-dasharray", "stroke-linecap",
  "stroke-linejoin", "stroke-miterlimit",
  "stroke-opacity", "stroke-width",
  "id"
];
/* _FROM_SVG_END_ */

/**
 * Pixel per Inch as a default value set to 96. Can be changed for more realistic conversion.
 */
fabric.DPI = 96;
fabric.reNum = '(?:[-+]?(?:\\d+|\\d*\\.\\d+)(?:e[-+]?\\d+)?)';
fabric.fontPaths = { };

/**
 * Cache Object for widths of chars in text rendering.
 */
fabric.charWidthsCache = { };

/**
 * Device Pixel Ratio
 * @see https://developer.apple.com/library/safari/documentation/AudioVideo/Conceptual/HTML-canvas-guide/SettingUptheCanvas/SettingUptheCanvas.html
 */
fabric.devicePixelRatio = fabric.window.devicePixelRatio ||
                          fabric.window.webkitDevicePixelRatio ||
                          fabric.window.mozDevicePixelRatio ||
                          1;


(function() {

  /**
   * @private
   * @param {String} eventName
   * @param {Function} handler
   */
  function _removeEventListener(eventName, handler) {
    if (!this.__eventListeners[eventName]) {
      return;
    }
    var eventListener = this.__eventListeners[eventName];
    if (handler) {
      eventListener[eventListener.indexOf(handler)] = false;
    }
    else {
      fabric.util.array.fill(eventListener, false);
    }
  }

  /**
   * Observes specified event
   * @deprecated `observe` deprecated since 0.8.34 (use `on` instead)
   * @memberOf fabric.Observable
   * @alias on
   * @param {String|Object} eventName Event name (eg. 'after:render') or object with key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler})
   * @param {Function} handler Function that receives a notification when an event of the specified type occurs
   * @return {Self} thisArg
   * @chainable
   */
  function observe(eventName, handler) {
    if (!this.__eventListeners) {
      this.__eventListeners = { };
    }
    // one object with key/value pairs was passed
    if (arguments.length === 1) {
      for (var prop in eventName) {
        this.on(prop, eventName[prop]);
      }
    }
    else {
      if (!this.__eventListeners[eventName]) {
        this.__eventListeners[eventName] = [ ];
      }
      this.__eventListeners[eventName].push(handler);
    }
    return this;
  }

  /**
   * Stops event observing for a particular event handler. Calling this method
   * without arguments removes all handlers for all events
   * @deprecated `stopObserving` deprecated since 0.8.34 (use `off` instead)
   * @memberOf fabric.Observable
   * @alias off
   * @param {String|Object} eventName Event name (eg. 'after:render') or object with key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler})
   * @param {Function} handler Function to be deleted from EventListeners
   * @return {Self} thisArg
   * @chainable
   */
  function stopObserving(eventName, handler) {
    if (!this.__eventListeners) {
      return;
    }

    // remove all key/value pairs (event name -> event handler)
    if (arguments.length === 0) {
      for (eventName in this.__eventListeners) {
        _removeEventListener.call(this, eventName);
      }
    }
    // one object with key/value pairs was passed
    else if (arguments.length === 1 && typeof arguments[0] === 'object') {
      for (var prop in eventName) {
        _removeEventListener.call(this, prop, eventName[prop]);
      }
    }
    else {
      _removeEventListener.call(this, eventName, handler);
    }
    return this;
  }

  /**
   * Fires event with an optional options object
   * @deprecated `fire` deprecated since 1.0.7 (use `trigger` instead)
   * @memberOf fabric.Observable
   * @alias trigger
   * @param {String} eventName Event name to fire
   * @param {Object} [options] Options object
   * @return {Self} thisArg
   * @chainable
   */
  function fire(eventName, options) {
    if (!this.__eventListeners) {
      return;
    }

    var listenersForEvent = this.__eventListeners[eventName];
    if (!listenersForEvent) {
      return;
    }

    for (var i = 0, len = listenersForEvent.length; i < len; i++) {
      listenersForEvent[i] && listenersForEvent[i].call(this, options || { });
    }
    this.__eventListeners[eventName] = listenersForEvent.filter(function(value) {
      return value !== false;
    });
    return this;
  }

  /**
   * @namespace fabric.Observable
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-2#events}
   * @see {@link http://fabricjs.com/events|Events demo}
   */
  fabric.Observable = {
    observe: observe,
    stopObserving: stopObserving,
    fire: fire,

    on: observe,
    off: stopObserving,
    trigger: fire
  };
})();


/**
 * @namespace fabric.Collection
 */
fabric.Collection = {

  _objects: [],

  /**
   * Adds objects to collection, then renders canvas (if `renderOnAddRemove` is not `false`)
   * Objects should be instances of (or inherit from) fabric.Object
   * @param {...fabric.Object} object Zero or more fabric instances
   * @return {Self} thisArg
   * @chainable
   */
  add: function () {
    this._objects.push.apply(this._objects, arguments);
    if (this._onObjectAdded) {
      for (var i = 0, length = arguments.length; i < length; i++) {
        this._onObjectAdded(arguments[i]);
      }
    }
    this.renderOnAddRemove && this.renderAll();
    return this;
  },

  /**
   * Inserts an object into collection at specified index, then renders canvas (if `renderOnAddRemove` is not `false`)
   * An object should be an instance of (or inherit from) fabric.Object
   * @param {Object} object Object to insert
   * @param {Number} index Index to insert object at
   * @param {Boolean} nonSplicing When `true`, no splicing (shifting) of objects occurs
   * @return {Self} thisArg
   * @chainable
   */
  insertAt: function (object, index, nonSplicing) {
    var objects = this.getObjects();
    if (nonSplicing) {
      objects[index] = object;
    }
    else {
      objects.splice(index, 0, object);
    }
    this._onObjectAdded && this._onObjectAdded(object);
    this.renderOnAddRemove && this.renderAll();
    return this;
  },

  /**
   * Removes objects from a collection, then renders canvas (if `renderOnAddRemove` is not `false`)
   * @param {...fabric.Object} object Zero or more fabric instances
   * @return {Self} thisArg
   * @chainable
   */
  remove: function() {
    var objects = this.getObjects(),
        index, somethingRemoved = false;

    for (var i = 0, length = arguments.length; i < length; i++) {
      index = objects.indexOf(arguments[i]);

      // only call onObjectRemoved if an object was actually removed
      if (index !== -1) {
        somethingRemoved = true;
        objects.splice(index, 1);
        this._onObjectRemoved && this._onObjectRemoved(arguments[i]);
      }
    }

    this.renderOnAddRemove && somethingRemoved && this.renderAll();
    return this;
  },

  /**
   * Executes given function for each object in this group
   * @param {Function} callback
   *                   Callback invoked with current object as first argument,
   *                   index - as second and an array of all objects - as third.
   *                   Callback is invoked in a context of Global Object (e.g. `window`)
   *                   when no `context` argument is given
   *
   * @param {Object} context Context (aka thisObject)
   * @return {Self} thisArg
   * @chainable
   */
  forEachObject: function(callback, context) {
    var objects = this.getObjects();
    for (var i = 0, len = objects.length; i < len; i++) {
      callback.call(context, objects[i], i, objects);
    }
    return this;
  },

  /**
   * Returns an array of children objects of this instance
   * Type parameter introduced in 1.3.10
   * @param {String} [type] When specified, only objects of this type are returned
   * @return {Array}
   */
  getObjects: function(type) {
    if (typeof type === 'undefined') {
      return this._objects;
    }
    return this._objects.filter(function(o) {
      return o.type === type;
    });
  },

  /**
   * Returns object at specified index
   * @param {Number} index
   * @return {Self} thisArg
   */
  item: function (index) {
    return this.getObjects()[index];
  },

  /**
   * Returns true if collection contains no objects
   * @return {Boolean} true if collection is empty
   */
  isEmpty: function () {
    return this.getObjects().length === 0;
  },

  /**
   * Returns a size of a collection (i.e: length of an array containing its objects)
   * @return {Number} Collection size
   */
  size: function() {
    return this.getObjects().length;
  },

  /**
   * Returns true if collection contains an object
   * @param {Object} object Object to check against
   * @return {Boolean} `true` if collection contains an object
   */
  contains: function(object) {
    return this.getObjects().indexOf(object) > -1;
  },

  /**
   * Returns number representation of a collection complexity
   * @return {Number} complexity
   */
  complexity: function () {
    return this.getObjects().reduce(function (memo, current) {
      memo += current.complexity ? current.complexity() : 0;
      return memo;
    }, 0);
  }
};


(function(global) {

  var sqrt = Math.sqrt,
      atan2 = Math.atan2,
      pow = Math.pow,
      abs = Math.abs,
      PiBy180 = Math.PI / 180;

  /**
   * @namespace fabric.util
   */
  fabric.util = {

    /**
     * Removes value from an array.
     * Presence of value (and its position in an array) is determined via `Array.prototype.indexOf`
     * @static
     * @memberOf fabric.util
     * @param {Array} array
     * @param {*} value
     * @return {Array} original array
     */
    removeFromArray: function(array, value) {
      var idx = array.indexOf(value);
      if (idx !== -1) {
        array.splice(idx, 1);
      }
      return array;
    },

    /**
     * Returns random number between 2 specified ones.
     * @static
     * @memberOf fabric.util
     * @param {Number} min lower limit
     * @param {Number} max upper limit
     * @return {Number} random value (between min and max)
     */
    getRandomInt: function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    /**
     * Transforms degrees to radians.
     * @static
     * @memberOf fabric.util
     * @param {Number} degrees value in degrees
     * @return {Number} value in radians
     */
    degreesToRadians: function(degrees) {
      return degrees * PiBy180;
    },

    /**
     * Transforms radians to degrees.
     * @static
     * @memberOf fabric.util
     * @param {Number} radians value in radians
     * @return {Number} value in degrees
     */
    radiansToDegrees: function(radians) {
      return radians / PiBy180;
    },

    /**
     * Rotates `point` around `origin` with `radians`
     * @static
     * @memberOf fabric.util
     * @param {fabric.Point} point The point to rotate
     * @param {fabric.Point} origin The origin of the rotation
     * @param {Number} radians The radians of the angle for the rotation
     * @return {fabric.Point} The new rotated point
     */
    rotatePoint: function(point, origin, radians) {
      point.subtractEquals(origin);
      var v = fabric.util.rotateVector(point, radians);
      return new fabric.Point(v.x, v.y).addEquals(origin);
    },

    /**
     * Rotates `vector` with `radians`
     * @static
     * @memberOf fabric.util
     * @param {Object} vector The vector to rotate (x and y)
     * @param {Number} radians The radians of the angle for the rotation
     * @return {Object} The new rotated point
     */
    rotateVector: function(vector, radians) {
      var sin = Math.sin(radians),
          cos = Math.cos(radians),
          rx = vector.x * cos - vector.y * sin,
          ry = vector.x * sin + vector.y * cos;
      return {
        x: rx,
        y: ry
      };
    },

    /**
     * Apply transform t to point p
     * @static
     * @memberOf fabric.util
     * @param  {fabric.Point} p The point to transform
     * @param  {Array} t The transform
     * @param  {Boolean} [ignoreOffset] Indicates that the offset should not be applied
     * @return {fabric.Point} The transformed point
     */
    transformPoint: function(p, t, ignoreOffset) {
      if (ignoreOffset) {
        return new fabric.Point(
          t[0] * p.x + t[2] * p.y,
          t[1] * p.x + t[3] * p.y
        );
      }
      return new fabric.Point(
        t[0] * p.x + t[2] * p.y + t[4],
        t[1] * p.x + t[3] * p.y + t[5]
      );
    },

    /**
     * Returns coordinates of points's bounding rectangle (left, top, width, height)
     * @param {Array} points 4 points array
     * @return {Object} Object with left, top, width, height properties
     */
    makeBoundingBoxFromPoints: function(points) {
      var xPoints = [points[0].x, points[1].x, points[2].x, points[3].x],
          minX = fabric.util.array.min(xPoints),
          maxX = fabric.util.array.max(xPoints),
          width = Math.abs(minX - maxX),
          yPoints = [points[0].y, points[1].y, points[2].y, points[3].y],
          minY = fabric.util.array.min(yPoints),
          maxY = fabric.util.array.max(yPoints),
          height = Math.abs(minY - maxY);

      return {
        left: minX,
        top: minY,
        width: width,
        height: height
      };
    },

    /**
     * Invert transformation t
     * @static
     * @memberOf fabric.util
     * @param {Array} t The transform
     * @return {Array} The inverted transform
     */
    invertTransform: function(t) {
      var a = 1 / (t[0] * t[3] - t[1] * t[2]),
          r = [a * t[3], -a * t[1], -a * t[2], a * t[0]],
          o = fabric.util.transformPoint({ x: t[4], y: t[5] }, r, true);
      r[4] = -o.x;
      r[5] = -o.y;
      return r;
    },

    /**
     * A wrapper around Number#toFixed, which contrary to native method returns number, not string.
     * @static
     * @memberOf fabric.util
     * @param {Number|String} number number to operate on
     * @param {Number} fractionDigits number of fraction digits to "leave"
     * @return {Number}
     */
    toFixed: function(number, fractionDigits) {
      return parseFloat(Number(number).toFixed(fractionDigits));
    },

    /**
     * Converts from attribute value to pixel value if applicable.
     * Returns converted pixels or original value not converted.
     * @param {Number|String} value number to operate on
     * @param {Number} fontSize
     * @return {Number|String}
     */
    parseUnit: function(value, fontSize) {
      var unit = /\D{0,2}$/.exec(value),
          number = parseFloat(value);
      if (!fontSize) {
        fontSize = fabric.Text.DEFAULT_SVG_FONT_SIZE;
      }
      switch (unit[0]) {
        case 'mm':
          return number * fabric.DPI / 25.4;

        case 'cm':
          return number * fabric.DPI / 2.54;

        case 'in':
          return number * fabric.DPI;

        case 'pt':
          return number * fabric.DPI / 72; // or * 4 / 3

        case 'pc':
          return number * fabric.DPI / 72 * 12; // or * 16

        case 'em':
          return number * fontSize;

        default:
          return number;
      }
    },

    /**
     * Function which always returns `false`.
     * @static
     * @memberOf fabric.util
     * @return {Boolean}
     */
    falseFunction: function() {
      return false;
    },

    /**
     * Returns klass "Class" object of given namespace
     * @memberOf fabric.util
     * @param {String} type Type of object (eg. 'circle')
     * @param {String} namespace Namespace to get klass "Class" object from
     * @return {Object} klass "Class"
     */
    getKlass: function(type, namespace) {
      // capitalize first letter only
      type = fabric.util.string.camelize(type.charAt(0).toUpperCase() + type.slice(1));
      return fabric.util.resolveNamespace(namespace)[type];
    },

    /**
     * Returns object of given namespace
     * @memberOf fabric.util
     * @param {String} namespace Namespace string e.g. 'fabric.Image.filter' or 'fabric'
     * @return {Object} Object for given namespace (default fabric)
     */
    resolveNamespace: function(namespace) {
      if (!namespace) {
        return fabric;
      }

      var parts = namespace.split('.'),
          len = parts.length,
          obj = global || fabric.window;

      for (var i = 0; i < len; ++i) {
        obj = obj[parts[i]];
      }

      return obj;
    },

    /**
     * Loads image element from given url and passes it to a callback
     * @memberOf fabric.util
     * @param {String} url URL representing an image
     * @param {Function} callback Callback; invoked with loaded image
     * @param {*} [context] Context to invoke callback in
     * @param {Object} [crossOrigin] crossOrigin value to set image element to
     */
    loadImage: function(url, callback, context, crossOrigin) {
      if (!url) {
        callback && callback.call(context, url);
        return;
      }

      var img = fabric.util.createImage();

      /** @ignore */
      img.onload = function () {
        callback && callback.call(context, img);
        img = img.onload = img.onerror = null;
      };

      /** @ignore */
      img.onerror = function() {
        fabric.log('Error loading ' + img.src);
        callback && callback.call(context, null, true);
        img = img.onload = img.onerror = null;
      };

      // data-urls appear to be buggy with crossOrigin
      // https://github.com/kangax/fabric.js/commit/d0abb90f1cd5c5ef9d2a94d3fb21a22330da3e0a#commitcomment-4513767
      // see https://code.google.com/p/chromium/issues/detail?id=315152
      //     https://bugzilla.mozilla.org/show_bug.cgi?id=935069
      if (url.indexOf('data') !== 0 && crossOrigin) {
        img.crossOrigin = crossOrigin;
      }

      img.src = url;
    },

    /**
     * Creates corresponding fabric instances from their object representations
     * @static
     * @memberOf fabric.util
     * @param {Array} objects Objects to enliven
     * @param {Function} callback Callback to invoke when all objects are created
     * @param {String} namespace Namespace to get klass "Class" object from
     * @param {Function} reviver Method for further parsing of object elements,
     * called after each fabric object created.
     */
    enlivenObjects: function(objects, callback, namespace, reviver) {
      objects = objects || [ ];

      function onLoaded() {
        if (++numLoadedObjects === numTotalObjects) {
          callback && callback(enlivenedObjects);
        }
      }

      var enlivenedObjects = [ ],
          numLoadedObjects = 0,
          numTotalObjects = objects.length;

      if (!numTotalObjects) {
        callback && callback(enlivenedObjects);
        return;
      }

      objects.forEach(function (o, index) {
        // if sparse array
        if (!o || !o.type) {
          onLoaded();
          return;
        }
        var klass = fabric.util.getKlass(o.type, namespace);
        if (klass.async) {
          klass.fromObject(o, function (obj, error) {
            if (!error) {
              enlivenedObjects[index] = obj;
              reviver && reviver(o, enlivenedObjects[index]);
            }
            onLoaded();
          });
        }
        else {
          enlivenedObjects[index] = klass.fromObject(o);
          reviver && reviver(o, enlivenedObjects[index]);
          onLoaded();
        }
      });
    },

    /**
     * Groups SVG elements (usually those retrieved from SVG document)
     * @static
     * @memberOf fabric.util
     * @param {Array} elements SVG elements to group
     * @param {Object} [options] Options object
     * @param {String} path Value to set sourcePath to
     * @return {fabric.Object|fabric.PathGroup}
     */
    groupSVGElements: function(elements, options, path) {
      var object;

      object = new fabric.PathGroup(elements, options);

      if (typeof path !== 'undefined') {
        object.setSourcePath(path);
      }
      return object;
    },

    /**
     * Populates an object with properties of another object
     * @static
     * @memberOf fabric.util
     * @param {Object} source Source object
     * @param {Object} destination Destination object
     * @return {Array} properties Propertie names to include
     */
    populateWithProperties: function(source, destination, properties) {
      if (properties && Object.prototype.toString.call(properties) === '[object Array]') {
        for (var i = 0, len = properties.length; i < len; i++) {
          if (properties[i] in source) {
            destination[properties[i]] = source[properties[i]];
          }
        }
      }
    },

    /**
     * Draws a dashed line between two points
     *
     * This method is used to draw dashed line around selection area.
     * See <a href="http://stackoverflow.com/questions/4576724/dotted-stroke-in-canvas">dotted stroke in canvas</a>
     *
     * @param {CanvasRenderingContext2D} ctx context
     * @param {Number} x  start x coordinate
     * @param {Number} y start y coordinate
     * @param {Number} x2 end x coordinate
     * @param {Number} y2 end y coordinate
     * @param {Array} da dash array pattern
     */
    drawDashedLine: function(ctx, x, y, x2, y2, da) {
      var dx = x2 - x,
          dy = y2 - y,
          len = sqrt(dx * dx + dy * dy),
          rot = atan2(dy, dx),
          dc = da.length,
          di = 0,
          draw = true;

      ctx.save();
      ctx.translate(x, y);
      ctx.moveTo(0, 0);
      ctx.rotate(rot);

      x = 0;
      while (len > x) {
        x += da[di++ % dc];
        if (x > len) {
          x = len;
        }
        ctx[draw ? 'lineTo' : 'moveTo'](x, 0);
        draw = !draw;
      }

      ctx.restore();
    },

    /**
     * Creates canvas element and initializes it via excanvas if necessary
     * @static
     * @memberOf fabric.util
     * @param {CanvasElement} [canvasEl] optional canvas element to initialize;
     * when not given, element is created implicitly
     * @return {CanvasElement} initialized canvas element
     */
    createCanvasElement: function(canvasEl) {
      canvasEl || (canvasEl = fabric.document.createElement('canvas'));
      //jscs:disable requireCamelCaseOrUpperCaseIdentifiers
      if (!canvasEl.getContext && typeof G_vmlCanvasManager !== 'undefined') {
        G_vmlCanvasManager.initElement(canvasEl);
      }
      //jscs:enable requireCamelCaseOrUpperCaseIdentifiers
      return canvasEl;
    },

    /**
     * Creates image element (works on client and node)
     * @static
     * @memberOf fabric.util
     * @return {HTMLImageElement} HTML image element
     */
    createImage: function() {
      return fabric.isLikelyNode
        ? new (require('canvas').Image)()
        : fabric.document.createElement('img');
    },

    /**
     * Creates accessors (getXXX, setXXX) for a "class", based on "stateProperties" array
     * @static
     * @memberOf fabric.util
     * @param {Object} klass "Class" to create accessors for
     */
    createAccessors: function(klass) {
      var proto = klass.prototype;

      for (var i = proto.stateProperties.length; i--; ) {

        var propName = proto.stateProperties[i],
            capitalizedPropName = propName.charAt(0).toUpperCase() + propName.slice(1),
            setterName = 'set' + capitalizedPropName,
            getterName = 'get' + capitalizedPropName;

        // using `new Function` for better introspection
        if (!proto[getterName]) {
          proto[getterName] = (function(property) {
            return new Function('return this.get("' + property + '")');
          })(propName);
        }
        if (!proto[setterName]) {
          proto[setterName] = (function(property) {
            return new Function('value', 'return this.set("' + property + '", value)');
          })(propName);
        }
      }
    },

    /**
     * @static
     * @memberOf fabric.util
     * @param {fabric.Object} receiver Object implementing `clipTo` method
     * @param {CanvasRenderingContext2D} ctx Context to clip
     */
    clipContext: function(receiver, ctx) {
      ctx.save();
      ctx.beginPath();
      receiver.clipTo(ctx);
      ctx.clip();
    },

    /**
     * Multiply matrix A by matrix B to nest transformations
     * @static
     * @memberOf fabric.util
     * @param  {Array} a First transformMatrix
     * @param  {Array} b Second transformMatrix
     * @param  {Boolean} is2x2 flag to multiply matrices as 2x2 matrices
     * @return {Array} The product of the two transform matrices
     */
    multiplyTransformMatrices: function(a, b, is2x2) {
      // Matrix multiply a * b
      return [
        a[0] * b[0] + a[2] * b[1],
        a[1] * b[0] + a[3] * b[1],
        a[0] * b[2] + a[2] * b[3],
        a[1] * b[2] + a[3] * b[3],
        is2x2 ? 0 : a[0] * b[4] + a[2] * b[5] + a[4],
        is2x2 ? 0 : a[1] * b[4] + a[3] * b[5] + a[5]
      ];
    },

    /**
     * Decomposes standard 2x2 matrix into transform componentes
     * @static
     * @memberOf fabric.util
     * @param  {Array} a transformMatrix
     * @return {Object} Components of transform
     */
    qrDecompose: function(a) {
      var angle = atan2(a[1], a[0]),
          denom = pow(a[0], 2) + pow(a[1], 2),
          scaleX = sqrt(denom),
          scaleY = (a[0] * a[3] - a[2] * a [1]) / scaleX,
          skewX = atan2(a[0] * a[2] + a[1] * a [3], denom);
      return {
        angle: angle  / PiBy180,
        scaleX: scaleX,
        scaleY: scaleY,
        skewX: skewX / PiBy180,
        skewY: 0,
        translateX: a[4],
        translateY: a[5]
      };
    },

    customTransformMatrix: function(scaleX, scaleY, skewX) {
      var skewMatrixX = [1, 0, abs(Math.tan(skewX * PiBy180)), 1],
          scaleMatrix = [abs(scaleX), 0, 0, abs(scaleY)];
      return fabric.util.multiplyTransformMatrices(scaleMatrix, skewMatrixX, true);
    },

    resetObjectTransform: function (target) {
      target.scaleX = 1;
      target.scaleY = 1;
      target.skewX = 0;
      target.skewY = 0;
      target.flipX = false;
      target.flipY = false;
      target.setAngle(0);
    },

    /**
     * Returns string representation of function body
     * @param {Function} fn Function to get body of
     * @return {String} Function body
     */
    getFunctionBody: function(fn) {
      return (String(fn).match(/function[^{]*\{([\s\S]*)\}/) || {})[1];
    },

    /**
     * Returns true if context has transparent pixel
     * at specified location (taking tolerance into account)
     * @param {CanvasRenderingContext2D} ctx context
     * @param {Number} x x coordinate
     * @param {Number} y y coordinate
     * @param {Number} tolerance Tolerance
     */
    isTransparent: function(ctx, x, y, tolerance) {

      // If tolerance is > 0 adjust start coords to take into account.
      // If moves off Canvas fix to 0
      if (tolerance > 0) {
        if (x > tolerance) {
          x -= tolerance;
        }
        else {
          x = 0;
        }
        if (y > tolerance) {
          y -= tolerance;
        }
        else {
          y = 0;
        }
      }

      var _isTransparent = true,
          imageData = ctx.getImageData(x, y, (tolerance * 2) || 1, (tolerance * 2) || 1);

      // Split image data - for tolerance > 1, pixelDataSize = 4;
      for (var i = 3, l = imageData.data.length; i < l; i += 4) {
        var temp = imageData.data[i];
        _isTransparent = temp <= 0;
        if (_isTransparent === false) {
          break; // Stop if colour found
        }
      }

      imageData = null;

      return _isTransparent;
    },

    /**
     * Parse preserveAspectRatio attribute from element
     * @param {string} attribute to be parsed
     * @return {Object} an object containing align and meetOrSlice attribute
     */
    parsePreserveAspectRatioAttribute: function(attribute) {
      var meetOrSlice = 'meet', alignX = 'Mid', alignY = 'Mid',
          aspectRatioAttrs = attribute.split(' '), align;

      if (aspectRatioAttrs && aspectRatioAttrs.length) {
        meetOrSlice = aspectRatioAttrs.pop();
        if (meetOrSlice !== 'meet' && meetOrSlice !== 'slice') {
          align = meetOrSlice;
          meetOrSlice = 'meet';
        }
        else if (aspectRatioAttrs.length) {
          align = aspectRatioAttrs.pop();
        }
      }
      //divide align in alignX and alignY
      alignX = align !== 'none' ? align.slice(1, 4) : 'none';
      alignY = align !== 'none' ? align.slice(5, 8) : 'none';
      return {
        meetOrSlice: meetOrSlice,
        alignX: alignX,
        alignY: alignY
      };
    },

    /**
     * Clear char widths cache for a font family.
     * @memberOf fabric.util
     * @param {String} [fontFamily] font family to clear
     */
    clearFabricFontCache: function(fontFamily) {
      if (!fontFamily) {
        fabric.charWidthsCache = { };
      }
      else if (fabric.charWidthsCache[fontFamily]) {
        delete fabric.charWidthsCache[fontFamily];
      }
    }
  };

})(typeof exports !== 'undefined' ? exports : this);


(function() {

  var arcToSegmentsCache = { },
      segmentToBezierCache = { },
      boundsOfCurveCache = { },
      _join = Array.prototype.join;

  /* Adapted from http://dxr.mozilla.org/mozilla-central/source/content/svg/content/src/nsSVGPathDataParser.cpp
   * by Andrea Bogazzi code is under MPL. if you don't have a copy of the license you can take it here
   * http://mozilla.org/MPL/2.0/
   */
  function arcToSegments(toX, toY, rx, ry, large, sweep, rotateX) {
    var argsString = _join.call(arguments);
    if (arcToSegmentsCache[argsString]) {
      return arcToSegmentsCache[argsString];
    }

    var PI = Math.PI, th = rotateX * PI / 180,
        sinTh = Math.sin(th),
        cosTh = Math.cos(th),
        fromX = 0, fromY = 0;

    rx = Math.abs(rx);
    ry = Math.abs(ry);

    var px = -cosTh * toX * 0.5 - sinTh * toY * 0.5,
        py = -cosTh * toY * 0.5 + sinTh * toX * 0.5,
        rx2 = rx * rx, ry2 = ry * ry, py2 = py * py, px2 = px * px,
        pl = rx2 * ry2 - rx2 * py2 - ry2 * px2,
        root = 0;

    if (pl < 0) {
      var s = Math.sqrt(1 - pl/(rx2 * ry2));
      rx *= s;
      ry *= s;
    }
    else {
      root = (large === sweep ? -1.0 : 1.0) *
              Math.sqrt( pl /(rx2 * py2 + ry2 * px2));
    }

    var cx = root * rx * py / ry,
        cy = -root * ry * px / rx,
        cx1 = cosTh * cx - sinTh * cy + toX * 0.5,
        cy1 = sinTh * cx + cosTh * cy + toY * 0.5,
        mTheta = calcVectorAngle(1, 0, (px - cx) / rx, (py - cy) / ry),
        dtheta = calcVectorAngle((px - cx) / rx, (py - cy) / ry, (-px - cx) / rx, (-py - cy) / ry);

    if (sweep === 0 && dtheta > 0) {
      dtheta -= 2 * PI;
    }
    else if (sweep === 1 && dtheta < 0) {
      dtheta += 2 * PI;
    }

    // Convert into cubic bezier segments <= 90deg
    var segments = Math.ceil(Math.abs(dtheta / PI * 2)),
        result = [], mDelta = dtheta / segments,
        mT = 8 / 3 * Math.sin(mDelta / 4) * Math.sin(mDelta / 4) / Math.sin(mDelta / 2),
        th3 = mTheta + mDelta;

    for (var i = 0; i < segments; i++) {
      result[i] = segmentToBezier(mTheta, th3, cosTh, sinTh, rx, ry, cx1, cy1, mT, fromX, fromY);
      fromX = result[i][4];
      fromY = result[i][5];
      mTheta = th3;
      th3 += mDelta;
    }
    arcToSegmentsCache[argsString] = result;
    return result;
  }

  function segmentToBezier(th2, th3, cosTh, sinTh, rx, ry, cx1, cy1, mT, fromX, fromY) {
    var argsString2 = _join.call(arguments);
    if (segmentToBezierCache[argsString2]) {
      return segmentToBezierCache[argsString2];
    }

    var costh2 = Math.cos(th2),
        sinth2 = Math.sin(th2),
        costh3 = Math.cos(th3),
        sinth3 = Math.sin(th3),
        toX = cosTh * rx * costh3 - sinTh * ry * sinth3 + cx1,
        toY = sinTh * rx * costh3 + cosTh * ry * sinth3 + cy1,
        cp1X = fromX + mT * ( - cosTh * rx * sinth2 - sinTh * ry * costh2),
        cp1Y = fromY + mT * ( - sinTh * rx * sinth2 + cosTh * ry * costh2),
        cp2X = toX + mT * ( cosTh * rx * sinth3 + sinTh * ry * costh3),
        cp2Y = toY + mT * ( sinTh * rx * sinth3 - cosTh * ry * costh3);

    segmentToBezierCache[argsString2] = [
      cp1X, cp1Y,
      cp2X, cp2Y,
      toX, toY
    ];
    return segmentToBezierCache[argsString2];
  }

  /*
   * Private
   */
  function calcVectorAngle(ux, uy, vx, vy) {
    var ta = Math.atan2(uy, ux),
        tb = Math.atan2(vy, vx);
    if (tb >= ta) {
      return tb - ta;
    }
    else {
      return 2 * Math.PI - (ta - tb);
    }
  }

  /**
   * Draws arc
   * @param {CanvasRenderingContext2D} ctx
   * @param {Number} fx
   * @param {Number} fy
   * @param {Array} coords
   */
  fabric.util.drawArc = function(ctx, fx, fy, coords) {
    var rx = coords[0],
        ry = coords[1],
        rot = coords[2],
        large = coords[3],
        sweep = coords[4],
        tx = coords[5],
        ty = coords[6],
        segs = [[ ], [ ], [ ], [ ]],
        segsNorm = arcToSegments(tx - fx, ty - fy, rx, ry, large, sweep, rot);

    for (var i = 0, len = segsNorm.length; i < len; i++) {
      segs[i][0] = segsNorm[i][0] + fx;
      segs[i][1] = segsNorm[i][1] + fy;
      segs[i][2] = segsNorm[i][2] + fx;
      segs[i][3] = segsNorm[i][3] + fy;
      segs[i][4] = segsNorm[i][4] + fx;
      segs[i][5] = segsNorm[i][5] + fy;
      ctx.bezierCurveTo.apply(ctx, segs[i]);
    }
  };

  /**
   * Calculate bounding box of a elliptic-arc
   * @param {Number} fx start point of arc
   * @param {Number} fy
   * @param {Number} rx horizontal radius
   * @param {Number} ry vertical radius
   * @param {Number} rot angle of horizontal axe
   * @param {Number} large 1 or 0, whatever the arc is the big or the small on the 2 points
   * @param {Number} sweep 1 or 0, 1 clockwise or counterclockwise direction
   * @param {Number} tx end point of arc
   * @param {Number} ty
   */
  fabric.util.getBoundsOfArc = function(fx, fy, rx, ry, rot, large, sweep, tx, ty) {

    var fromX = 0, fromY = 0, bound = [ ], bounds = [ ],
    segs = arcToSegments(tx - fx, ty - fy, rx, ry, large, sweep, rot),
    boundCopy = [[ ], [ ]];

    for (var i = 0, len = segs.length; i < len; i++) {
      bound = getBoundsOfCurve(fromX, fromY, segs[i][0], segs[i][1], segs[i][2], segs[i][3], segs[i][4], segs[i][5]);
      boundCopy[0].x = bound[0].x + fx;
      boundCopy[0].y = bound[0].y + fy;
      boundCopy[1].x = bound[1].x + fx;
      boundCopy[1].y = bound[1].y + fy;
      bounds.push(boundCopy[0]);
      bounds.push(boundCopy[1]);
      fromX = segs[i][4];
      fromY = segs[i][5];
    }
    return bounds;
  };

  /**
   * Calculate bounding box of a beziercurve
   * @param {Number} x0 starting point
   * @param {Number} y0
   * @param {Number} x1 first control point
   * @param {Number} y1
   * @param {Number} x2 secondo control point
   * @param {Number} y2
   * @param {Number} x3 end of beizer
   * @param {Number} y3
   */
  // taken from http://jsbin.com/ivomiq/56/edit  no credits available for that.
  function getBoundsOfCurve(x0, y0, x1, y1, x2, y2, x3, y3) {
    var argsString = _join.call(arguments);
    if (boundsOfCurveCache[argsString]) {
      return boundsOfCurveCache[argsString];
    }

    var sqrt = Math.sqrt,
        min = Math.min, max = Math.max,
        abs = Math.abs, tvalues = [ ],
        bounds = [[ ], [ ]],
        a, b, c, t, t1, t2, b2ac, sqrtb2ac;

    b = 6 * x0 - 12 * x1 + 6 * x2;
    a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
    c = 3 * x1 - 3 * x0;

    for (var i = 0; i < 2; ++i) {
      if (i > 0) {
        b = 6 * y0 - 12 * y1 + 6 * y2;
        a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
        c = 3 * y1 - 3 * y0;
      }

      if (abs(a) < 1e-12) {
        if (abs(b) < 1e-12) {
          continue;
        }
        t = -c / b;
        if (0 < t && t < 1) {
          tvalues.push(t);
        }
        continue;
      }
      b2ac = b * b - 4 * c * a;
      if (b2ac < 0) {
        continue;
      }
      sqrtb2ac = sqrt(b2ac);
      t1 = (-b + sqrtb2ac) / (2 * a);
      if (0 < t1 && t1 < 1) {
        tvalues.push(t1);
      }
      t2 = (-b - sqrtb2ac) / (2 * a);
      if (0 < t2 && t2 < 1) {
        tvalues.push(t2);
      }
    }

    var x, y, j = tvalues.length, jlen = j, mt;
    while (j--) {
      t = tvalues[j];
      mt = 1 - t;
      x = (mt * mt * mt * x0) + (3 * mt * mt * t * x1) + (3 * mt * t * t * x2) + (t * t * t * x3);
      bounds[0][j] = x;

      y = (mt * mt * mt * y0) + (3 * mt * mt * t * y1) + (3 * mt * t * t * y2) + (t * t * t * y3);
      bounds[1][j] = y;
    }

    bounds[0][jlen] = x0;
    bounds[1][jlen] = y0;
    bounds[0][jlen + 1] = x3;
    bounds[1][jlen + 1] = y3;
    var result = [
      {
        x: min.apply(null, bounds[0]),
        y: min.apply(null, bounds[1])
      },
      {
        x: max.apply(null, bounds[0]),
        y: max.apply(null, bounds[1])
      }
    ];
    boundsOfCurveCache[argsString] = result;
    return result;
  }

  fabric.util.getBoundsOfCurve = getBoundsOfCurve;

})();


(function() {

  var slice = Array.prototype.slice;

  /* _ES5_COMPAT_START_ */

  if (!Array.prototype.indexOf) {
    /**
     * Finds index of an element in an array
     * @param {*} searchElement
     * @return {Number}
     */
    Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
      if (this === void 0 || this === null) {
        throw new TypeError();
      }
      var t = Object(this), len = t.length >>> 0;
      if (len === 0) {
        return -1;
      }
      var n = 0;
      if (arguments.length > 0) {
        n = Number(arguments[1]);
        if (n !== n) { // shortcut for verifying if it's NaN
          n = 0;
        }
        else if (n !== 0 && n !== Number.POSITIVE_INFINITY && n !== Number.NEGATIVE_INFINITY) {
          n = (n > 0 || -1) * Math.floor(Math.abs(n));
        }
      }
      if (n >= len) {
        return -1;
      }
      var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
      for (; k < len; k++) {
        if (k in t && t[k] === searchElement) {
          return k;
        }
      }
      return -1;
    };
  }

  if (!Array.prototype.forEach) {
    /**
     * Iterates an array, invoking callback for each element
     * @param {Function} fn Callback to invoke for each element
     * @param {Object} [context] Context to invoke callback in
     * @return {Array}
     */
    Array.prototype.forEach = function(fn, context) {
      for (var i = 0, len = this.length >>> 0; i < len; i++) {
        if (i in this) {
          fn.call(context, this[i], i, this);
        }
      }
    };
  }

  if (!Array.prototype.map) {
    /**
     * Returns a result of iterating over an array, invoking callback for each element
     * @param {Function} fn Callback to invoke for each element
     * @param {Object} [context] Context to invoke callback in
     * @return {Array}
     */
    Array.prototype.map = function(fn, context) {
      var result = [ ];
      for (var i = 0, len = this.length >>> 0; i < len; i++) {
        if (i in this) {
          result[i] = fn.call(context, this[i], i, this);
        }
      }
      return result;
    };
  }

  if (!Array.prototype.every) {
    /**
     * Returns true if a callback returns truthy value for all elements in an array
     * @param {Function} fn Callback to invoke for each element
     * @param {Object} [context] Context to invoke callback in
     * @return {Boolean}
     */
    Array.prototype.every = function(fn, context) {
      for (var i = 0, len = this.length >>> 0; i < len; i++) {
        if (i in this && !fn.call(context, this[i], i, this)) {
          return false;
        }
      }
      return true;
    };
  }

  if (!Array.prototype.some) {
    /**
     * Returns true if a callback returns truthy value for at least one element in an array
     * @param {Function} fn Callback to invoke for each element
     * @param {Object} [context] Context to invoke callback in
     * @return {Boolean}
     */
    Array.prototype.some = function(fn, context) {
      for (var i = 0, len = this.length >>> 0; i < len; i++) {
        if (i in this && fn.call(context, this[i], i, this)) {
          return true;
        }
      }
      return false;
    };
  }

  if (!Array.prototype.filter) {
    /**
     * Returns the result of iterating over elements in an array
     * @param {Function} fn Callback to invoke for each element
     * @param {Object} [context] Context to invoke callback in
     * @return {Array}
     */
    Array.prototype.filter = function(fn, context) {
      var result = [ ], val;
      for (var i = 0, len = this.length >>> 0; i < len; i++) {
        if (i in this) {
          val = this[i]; // in case fn mutates this
          if (fn.call(context, val, i, this)) {
            result.push(val);
          }
        }
      }
      return result;
    };
  }

  if (!Array.prototype.reduce) {
    /**
     * Returns "folded" (reduced) result of iterating over elements in an array
     * @param {Function} fn Callback to invoke for each element
     * @return {*}
     */
    Array.prototype.reduce = function(fn /*, initial*/) {
      var len = this.length >>> 0,
          i = 0,
          rv;

      if (arguments.length > 1) {
        rv = arguments[1];
      }
      else {
        do {
          if (i in this) {
            rv = this[i++];
            break;
          }
          // if array contains no values, no initial value to return
          if (++i >= len) {
            throw new TypeError();
          }
        }
        while (true);
      }
      for (; i < len; i++) {
        if (i in this) {
          rv = fn.call(null, rv, this[i], i, this);
        }
      }
      return rv;
    };
  }

  /* _ES5_COMPAT_END_ */

  /**
   * Invokes method on all items in a given array
   * @memberOf fabric.util.array
   * @param {Array} array Array to iterate over
   * @param {String} method Name of a method to invoke
   * @return {Array}
   */
  function invoke(array, method) {
    var args = slice.call(arguments, 2), result = [ ];
    for (var i = 0, len = array.length; i < len; i++) {
      result[i] = args.length ? array[i][method].apply(array[i], args) : array[i][method].call(array[i]);
    }
    return result;
  }

  /**
   * Finds maximum value in array (not necessarily "first" one)
   * @memberOf fabric.util.array
   * @param {Array} array Array to iterate over
   * @param {String} byProperty
   * @return {*}
   */
  function max(array, byProperty) {
    return find(array, byProperty, function(value1, value2) {
      return value1 >= value2;
    });
  }

  /**
   * Finds minimum value in array (not necessarily "first" one)
   * @memberOf fabric.util.array
   * @param {Array} array Array to iterate over
   * @param {String} byProperty
   * @return {*}
   */
  function min(array, byProperty) {
    return find(array, byProperty, function(value1, value2) {
      return value1 < value2;
    });
  }

  /**
   * @private
   */
  function fill(array, value) {
    var k = array.length;
    while (k--) {
      array[k] = value;
    }
    return array;
  }

  /**
   * @private
   */
  function find(array, byProperty, condition) {
    if (!array || array.length === 0) {
      return;
    }

    var i = array.length - 1,
        result = byProperty ? array[i][byProperty] : array[i];
    if (byProperty) {
      while (i--) {
        if (condition(array[i][byProperty], result)) {
          result = array[i][byProperty];
        }
      }
    }
    else {
      while (i--) {
        if (condition(array[i], result)) {
          result = array[i];
        }
      }
    }
    return result;
  }

  /**
   * @namespace fabric.util.array
   */
  fabric.util.array = {
    fill: fill,
    invoke: invoke,
    min: min,
    max: max
  };

})();


(function() {

  /**
   * Copies all enumerable properties of one object to another
   * @memberOf fabric.util.object
   * @param {Object} destination Where to copy to
   * @param {Object} source Where to copy from
   * @return {Object}
   */
  function extend(destination, source) {
    // JScript DontEnum bug is not taken care of
    for (var property in source) {
      destination[property] = source[property];
    }
    return destination;
  }

  /**
   * Creates an empty object and copies all enumerable properties of another object to it
   * @memberOf fabric.util.object
   * @param {Object} object Object to clone
   * @return {Object}
   */
  function clone(object) {
    return extend({ }, object);
  }

  /** @namespace fabric.util.object */
  fabric.util.object = {
    extend: extend,
    clone: clone
  };

})();


(function() {

  /* _ES5_COMPAT_START_ */
  if (!String.prototype.trim) {
    /**
     * Trims a string (removing whitespace from the beginning and the end)
     * @function external:String#trim
     * @see <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/Trim">String#trim on MDN</a>
     */
    String.prototype.trim = function () {
      // this trim is not fully ES3 or ES5 compliant, but it should cover most cases for now
      return this.replace(/^[\s\xA0]+/, '').replace(/[\s\xA0]+$/, '');
    };
  }
  /* _ES5_COMPAT_END_ */

  /**
   * Camelizes a string
   * @memberOf fabric.util.string
   * @param {String} string String to camelize
   * @return {String} Camelized version of a string
   */
  function camelize(string) {
    return string.replace(/-+(.)?/g, function(match, character) {
      return character ? character.toUpperCase() : '';
    });
  }

  /**
   * Capitalizes a string
   * @memberOf fabric.util.string
   * @param {String} string String to capitalize
   * @param {Boolean} [firstLetterOnly] If true only first letter is capitalized
   * and other letters stay untouched, if false first letter is capitalized
   * and other letters are converted to lowercase.
   * @return {String} Capitalized version of a string
   */
  function capitalize(string, firstLetterOnly) {
    return string.charAt(0).toUpperCase() +
      (firstLetterOnly ? string.slice(1) : string.slice(1).toLowerCase());
  }

  /**
   * Escapes XML in a string
   * @memberOf fabric.util.string
   * @param {String} string String to escape
   * @return {String} Escaped version of a string
   */
  function escapeXml(string) {
    return string.replace(/&/g, '&amp;')
       .replace(/"/g, '&quot;')
       .replace(/'/g, '&apos;')
       .replace(/</g, '&lt;')
       .replace(/>/g, '&gt;');
  }

  /**
   * String utilities
   * @namespace fabric.util.string
   */
  fabric.util.string = {
    camelize: camelize,
    capitalize: capitalize,
    escapeXml: escapeXml
  };
}());


/* _ES5_COMPAT_START_ */
(function() {

  var slice = Array.prototype.slice,
      apply = Function.prototype.apply,
      Dummy = function() { };

  if (!Function.prototype.bind) {
    /**
     * Cross-browser approximation of ES5 Function.prototype.bind (not fully spec conforming)
     * @see <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/bind">Function#bind on MDN</a>
     * @param {Object} thisArg Object to bind function to
     * @param {Any[]} Values to pass to a bound function
     * @return {Function}
     */
    Function.prototype.bind = function(thisArg) {
      var _this = this, args = slice.call(arguments, 1), bound;
      if (args.length) {
        bound = function() {
          return apply.call(_this, this instanceof Dummy ? this : thisArg, args.concat(slice.call(arguments)));
        };
      }
      else {
        /** @ignore */
        bound = function() {
          return apply.call(_this, this instanceof Dummy ? this : thisArg, arguments);
        };
      }
      Dummy.prototype = this.prototype;
      bound.prototype = new Dummy();

      return bound;
    };
  }

})();
/* _ES5_COMPAT_END_ */


(function() {

  var slice = Array.prototype.slice, emptyFunction = function() { },

      IS_DONTENUM_BUGGY = (function() {
        for (var p in { toString: 1 }) {
          if (p === 'toString') {
            return false;
          }
        }
        return true;
      })(),

      /** @ignore */
      addMethods = function(klass, source, parent) {
        for (var property in source) {

          if (property in klass.prototype &&
              typeof klass.prototype[property] === 'function' &&
              (source[property] + '').indexOf('callSuper') > -1) {

            klass.prototype[property] = (function(property) {
              return function() {

                var superclass = this.constructor.superclass;
                this.constructor.superclass = parent;
                var returnValue = source[property].apply(this, arguments);
                this.constructor.superclass = superclass;

                if (property !== 'initialize') {
                  return returnValue;
                }
              };
            })(property);
          }
          else {
            klass.prototype[property] = source[property];
          }

          if (IS_DONTENUM_BUGGY) {
            if (source.toString !== Object.prototype.toString) {
              klass.prototype.toString = source.toString;
            }
            if (source.valueOf !== Object.prototype.valueOf) {
              klass.prototype.valueOf = source.valueOf;
            }
          }
        }
      };

  function Subclass() { }

  function callSuper(methodName) {
    var fn = this.constructor.superclass.prototype[methodName];
    return (arguments.length > 1)
      ? fn.apply(this, slice.call(arguments, 1))
      : fn.call(this);
  }

  /**
   * Helper for creation of "classes".
   * @memberOf fabric.util
   * @param {Function} [parent] optional "Class" to inherit from
   * @param {Object} [properties] Properties shared by all instances of this class
   *                  (be careful modifying objects defined here as this would affect all instances)
   */
  function createClass() {
    var parent = null,
        properties = slice.call(arguments, 0);

    if (typeof properties[0] === 'function') {
      parent = properties.shift();
    }
    function klass() {
      this.initialize.apply(this, arguments);
    }

    klass.superclass = parent;
    klass.subclasses = [ ];

    if (parent) {
      Subclass.prototype = parent.prototype;
      klass.prototype = new Subclass();
      parent.subclasses.push(klass);
    }
    for (var i = 0, length = properties.length; i < length; i++) {
      addMethods(klass, properties[i], parent);
    }
    if (!klass.prototype.initialize) {
      klass.prototype.initialize = emptyFunction;
    }
    klass.prototype.constructor = klass;
    klass.prototype.callSuper = callSuper;
    return klass;
  }

  fabric.util.createClass = createClass;
})();


(function () {

  var unknown = 'unknown';

  /* EVENT HANDLING */

  function areHostMethods(object) {
    var methodNames = Array.prototype.slice.call(arguments, 1),
        t, i, len = methodNames.length;
    for (i = 0; i < len; i++) {
      t = typeof object[methodNames[i]];
      if (!(/^(?:function|object|unknown)$/).test(t)) {
        return false;
      }
    }
    return true;
  }

  /** @ignore */
  var getElement,
      setElement,
      getUniqueId = (function () {
        var uid = 0;
        return function (element) {
          return element.__uniqueID || (element.__uniqueID = 'uniqueID__' + uid++);
        };
      })();

  (function () {
    var elements = { };
    /** @ignore */
    getElement = function (uid) {
      return elements[uid];
    };
    /** @ignore */
    setElement = function (uid, element) {
      elements[uid] = element;
    };
  })();

  function createListener(uid, handler) {
    return {
      handler: handler,
      wrappedHandler: createWrappedHandler(uid, handler)
    };
  }

  function createWrappedHandler(uid, handler) {
    return function (e) {
      handler.call(getElement(uid), e || fabric.window.event);
    };
  }

  function createDispatcher(uid, eventName) {
    return function (e) {
      if (handlers[uid] && handlers[uid][eventName]) {
        var handlersForEvent = handlers[uid][eventName];
        for (var i = 0, len = handlersForEvent.length; i < len; i++) {
          handlersForEvent[i].call(this, e || fabric.window.event);
        }
      }
    };
  }

  var shouldUseAddListenerRemoveListener = (
        areHostMethods(fabric.document.documentElement, 'addEventListener', 'removeEventListener') &&
        areHostMethods(fabric.window, 'addEventListener', 'removeEventListener')),

      shouldUseAttachEventDetachEvent = (
        areHostMethods(fabric.document.documentElement, 'attachEvent', 'detachEvent') &&
        areHostMethods(fabric.window, 'attachEvent', 'detachEvent')),

      // IE branch
      listeners = { },

      // DOM L0 branch
      handlers = { },

      addListener, removeListener;

  if (shouldUseAddListenerRemoveListener) {
    /** @ignore */
    addListener = function (element, eventName, handler) {
      element.addEventListener(eventName, handler, false);
    };
    /** @ignore */
    removeListener = function (element, eventName, handler) {
      element.removeEventListener(eventName, handler, false);
    };
  }

  else if (shouldUseAttachEventDetachEvent) {
    /** @ignore */
    addListener = function (element, eventName, handler) {
      var uid = getUniqueId(element);
      setElement(uid, element);
      if (!listeners[uid]) {
        listeners[uid] = { };
      }
      if (!listeners[uid][eventName]) {
        listeners[uid][eventName] = [ ];

      }
      var listener = createListener(uid, handler);
      listeners[uid][eventName].push(listener);
      element.attachEvent('on' + eventName, listener.wrappedHandler);
    };
    /** @ignore */
    removeListener = function (element, eventName, handler) {
      var uid = getUniqueId(element), listener;
      if (listeners[uid] && listeners[uid][eventName]) {
        for (var i = 0, len = listeners[uid][eventName].length; i < len; i++) {
          listener = listeners[uid][eventName][i];
          if (listener && listener.handler === handler) {
            element.detachEvent('on' + eventName, listener.wrappedHandler);
            listeners[uid][eventName][i] = null;
          }
        }
      }
    };
  }
  else {
    /** @ignore */
    addListener = function (element, eventName, handler) {
      var uid = getUniqueId(element);
      if (!handlers[uid]) {
        handlers[uid] = { };
      }
      if (!handlers[uid][eventName]) {
        handlers[uid][eventName] = [ ];
        var existingHandler = element['on' + eventName];
        if (existingHandler) {
          handlers[uid][eventName].push(existingHandler);
        }
        element['on' + eventName] = createDispatcher(uid, eventName);
      }
      handlers[uid][eventName].push(handler);
    };
    /** @ignore */
    removeListener = function (element, eventName, handler) {
      var uid = getUniqueId(element);
      if (handlers[uid] && handlers[uid][eventName]) {
        var handlersForEvent = handlers[uid][eventName];
        for (var i = 0, len = handlersForEvent.length; i < len; i++) {
          if (handlersForEvent[i] === handler) {
            handlersForEvent.splice(i, 1);
          }
        }
      }
    };
  }

  /**
   * Adds an event listener to an element
   * @function
   * @memberOf fabric.util
   * @param {HTMLElement} element
   * @param {String} eventName
   * @param {Function} handler
   */
  fabric.util.addListener = addListener;

  /**
   * Removes an event listener from an element
   * @function
   * @memberOf fabric.util
   * @param {HTMLElement} element
   * @param {String} eventName
   * @param {Function} handler
   */
  fabric.util.removeListener = removeListener;

  /**
   * Cross-browser wrapper for getting event's coordinates
   * @memberOf fabric.util
   * @param {Event} event Event object
   */
  function getPointer(event) {
    event || (event = fabric.window.event);

    var element = event.target ||
                  (typeof event.srcElement !== unknown ? event.srcElement : null),

        scroll = fabric.util.getScrollLeftTop(element);

    return {
      x: pointerX(event) + scroll.left,
      y: pointerY(event) + scroll.top
    };
  }

  var pointerX = function(event) {
    // looks like in IE (<9) clientX at certain point (apparently when mouseup fires on VML element)
    // is represented as COM object, with all the consequences, like "unknown" type and error on [[Get]]
    // need to investigate later
    return (typeof event.clientX !== unknown ? event.clientX : 0);
  },

  pointerY = function(event) {
    return (typeof event.clientY !== unknown ? event.clientY : 0);
  };

  function _getPointer(event, pageProp, clientProp) {
    var touchProp = event.type === 'touchend' ? 'changedTouches' : 'touches';

    return (event[touchProp] && event[touchProp][0]
      ? (event[touchProp][0][pageProp] - (event[touchProp][0][pageProp] - event[touchProp][0][clientProp]))
        || event[clientProp]
      : event[clientProp]);
  }

  if (fabric.isTouchSupported) {
    pointerX = function(event) {
      return _getPointer(event, 'pageX', 'clientX');
    };
    pointerY = function(event) {
      return _getPointer(event, 'pageY', 'clientY');
    };
  }

  fabric.util.getPointer = getPointer;

  fabric.util.object.extend(fabric.util, fabric.Observable);

})();


(function () {

  /**
   * Cross-browser wrapper for setting element's style
   * @memberOf fabric.util
   * @param {HTMLElement} element
   * @param {Object} styles
   * @return {HTMLElement} Element that was passed as a first argument
   */
  function setStyle(element, styles) {
    var elementStyle = element.style;
    if (!elementStyle) {
      return element;
    }
    if (typeof styles === 'string') {
      element.style.cssText += ';' + styles;
      return styles.indexOf('opacity') > -1
        ? setOpacity(element, styles.match(/opacity:\s*(\d?\.?\d*)/)[1])
        : element;
    }
    for (var property in styles) {
      if (property === 'opacity') {
        setOpacity(element, styles[property]);
      }
      else {
        var normalizedProperty = (property === 'float' || property === 'cssFloat')
          ? (typeof elementStyle.styleFloat === 'undefined' ? 'cssFloat' : 'styleFloat')
          : property;
        elementStyle[normalizedProperty] = styles[property];
      }
    }
    return element;
  }

  var parseEl = fabric.document.createElement('div'),
      supportsOpacity = typeof parseEl.style.opacity === 'string',
      supportsFilters = typeof parseEl.style.filter === 'string',
      reOpacity = /alpha\s*\(\s*opacity\s*=\s*([^\)]+)\)/,

      /** @ignore */
      setOpacity = function (element) { return element; };

  if (supportsOpacity) {
    /** @ignore */
    setOpacity = function(element, value) {
      element.style.opacity = value;
      return element;
    };
  }
  else if (supportsFilters) {
    /** @ignore */
    setOpacity = function(element, value) {
      var es = element.style;
      if (element.currentStyle && !element.currentStyle.hasLayout) {
        es.zoom = 1;
      }
      if (reOpacity.test(es.filter)) {
        value = value >= 0.9999 ? '' : ('alpha(opacity=' + (value * 100) + ')');
        es.filter = es.filter.replace(reOpacity, value);
      }
      else {
        es.filter += ' alpha(opacity=' + (value * 100) + ')';
      }
      return element;
    };
  }

  fabric.util.setStyle = setStyle;

})();


(function() {

  var _slice = Array.prototype.slice;

  /**
   * Takes id and returns an element with that id (if one exists in a document)
   * @memberOf fabric.util
   * @param {String|HTMLElement} id
   * @return {HTMLElement|null}
   */
  function getById(id) {
    return typeof id === 'string' ? fabric.document.getElementById(id) : id;
  }

  var sliceCanConvertNodelists,
      /**
       * Converts an array-like object (e.g. arguments or NodeList) to an array
       * @memberOf fabric.util
       * @param {Object} arrayLike
       * @return {Array}
       */
      toArray = function(arrayLike) {
        return _slice.call(arrayLike, 0);
      };

  try {
    sliceCanConvertNodelists = toArray(fabric.document.childNodes) instanceof Array;
  }
  catch (err) { }

  if (!sliceCanConvertNodelists) {
    toArray = function(arrayLike) {
      var arr = new Array(arrayLike.length), i = arrayLike.length;
      while (i--) {
        arr[i] = arrayLike[i];
      }
      return arr;
    };
  }

  /**
   * Creates specified element with specified attributes
   * @memberOf fabric.util
   * @param {String} tagName Type of an element to create
   * @param {Object} [attributes] Attributes to set on an element
   * @return {HTMLElement} Newly created element
   */
  function makeElement(tagName, attributes) {
    var el = fabric.document.createElement(tagName);
    for (var prop in attributes) {
      if (prop === 'class') {
        el.className = attributes[prop];
      }
      else if (prop === 'for') {
        el.htmlFor = attributes[prop];
      }
      else {
        el.setAttribute(prop, attributes[prop]);
      }
    }
    return el;
  }

  /**
   * Adds class to an element
   * @memberOf fabric.util
   * @param {HTMLElement} element Element to add class to
   * @param {String} className Class to add to an element
   */
  function addClass(element, className) {
    if (element && (' ' + element.className + ' ').indexOf(' ' + className + ' ') === -1) {
      element.className += (element.className ? ' ' : '') + className;
    }
  }

  /**
   * Wraps element with another element
   * @memberOf fabric.util
   * @param {HTMLElement} element Element to wrap
   * @param {HTMLElement|String} wrapper Element to wrap with
   * @param {Object} [attributes] Attributes to set on a wrapper
   * @return {HTMLElement} wrapper
   */
  function wrapElement(element, wrapper, attributes) {
    if (typeof wrapper === 'string') {
      wrapper = makeElement(wrapper, attributes);
    }
    if (element.parentNode) {
      element.parentNode.replaceChild(wrapper, element);
    }
    wrapper.appendChild(element);
    return wrapper;
  }

  /**
   * Returns element scroll offsets
   * @memberOf fabric.util
   * @param {HTMLElement} element Element to operate on
   * @return {Object} Object with left/top values
   */
  function getScrollLeftTop(element) {

    var left = 0,
        top = 0,
        docElement = fabric.document.documentElement,
        body = fabric.document.body || {
          scrollLeft: 0, scrollTop: 0
        };

    // While loop checks (and then sets element to) .parentNode OR .host
    //  to account for ShadowDOM. We still want to traverse up out of ShadowDOM,
    //  but the .parentNode of a root ShadowDOM node will always be null, instead
    //  it should be accessed through .host. See http://stackoverflow.com/a/24765528/4383938
    while (element && (element.parentNode || element.host)) {

      // Set element to element parent, or 'host' in case of ShadowDOM
      element = element.parentNode || element.host;

      if (element === fabric.document) {
        left = body.scrollLeft || docElement.scrollLeft || 0;
        top = body.scrollTop ||  docElement.scrollTop || 0;
      }
      else {
        left += element.scrollLeft || 0;
        top += element.scrollTop || 0;
      }

      if (element.nodeType === 1 &&
          fabric.util.getElementStyle(element, 'position') === 'fixed') {
        break;
      }
    }

    return { left: left, top: top };
  }

  /**
   * Returns offset for a given element
   * @function
   * @memberOf fabric.util
   * @param {HTMLElement} element Element to get offset for
   * @return {Object} Object with "left" and "top" properties
   */
  function getElementOffset(element) {
    var docElem,
        doc = element && element.ownerDocument,
        box = { left: 0, top: 0 },
        offset = { left: 0, top: 0 },
        scrollLeftTop,
        offsetAttributes = {
          borderLeftWidth: 'left',
          borderTopWidth:  'top',
          paddingLeft:     'left',
          paddingTop:      'top'
        };

    if (!doc) {
      return offset;
    }

    for (var attr in offsetAttributes) {
      offset[offsetAttributes[attr]] += parseInt(getElementStyle(element, attr), 10) || 0;
    }

    docElem = doc.documentElement;
    if ( typeof element.getBoundingClientRect !== 'undefined' ) {
      box = element.getBoundingClientRect();
    }

    scrollLeftTop = getScrollLeftTop(element);

    return {
      left: box.left + scrollLeftTop.left - (docElem.clientLeft || 0) + offset.left,
      top: box.top + scrollLeftTop.top - (docElem.clientTop || 0)  + offset.top
    };
  }

  /**
   * Returns style attribute value of a given element
   * @memberOf fabric.util
   * @param {HTMLElement} element Element to get style attribute for
   * @param {String} attr Style attribute to get for element
   * @return {String} Style attribute value of the given element.
   */
  var getElementStyle;
  if (fabric.document.defaultView && fabric.document.defaultView.getComputedStyle) {
    getElementStyle = function(element, attr) {
      var style = fabric.document.defaultView.getComputedStyle(element, null);
      return style ? style[attr] : undefined;
    };
  }
  else {
    getElementStyle = function(element, attr) {
      var value = element.style[attr];
      if (!value && element.currentStyle) {
        value = element.currentStyle[attr];
      }
      return value;
    };
  }

  (function () {
    var style = fabric.document.documentElement.style,
        selectProp = 'userSelect' in style
          ? 'userSelect'
          : 'MozUserSelect' in style
            ? 'MozUserSelect'
            : 'WebkitUserSelect' in style
              ? 'WebkitUserSelect'
              : 'KhtmlUserSelect' in style
                ? 'KhtmlUserSelect'
                : '';

    /**
     * Makes element unselectable
     * @memberOf fabric.util
     * @param {HTMLElement} element Element to make unselectable
     * @return {HTMLElement} Element that was passed in
     */
    function makeElementUnselectable(element) {
      if (typeof element.onselectstart !== 'undefined') {
        element.onselectstart = fabric.util.falseFunction;
      }
      if (selectProp) {
        element.style[selectProp] = 'none';
      }
      else if (typeof element.unselectable === 'string') {
        element.unselectable = 'on';
      }
      return element;
    }

    /**
     * Makes element selectable
     * @memberOf fabric.util
     * @param {HTMLElement} element Element to make selectable
     * @return {HTMLElement} Element that was passed in
     */
    function makeElementSelectable(element) {
      if (typeof element.onselectstart !== 'undefined') {
        element.onselectstart = null;
      }
      if (selectProp) {
        element.style[selectProp] = '';
      }
      else if (typeof element.unselectable === 'string') {
        element.unselectable = '';
      }
      return element;
    }

    fabric.util.makeElementUnselectable = makeElementUnselectable;
    fabric.util.makeElementSelectable = makeElementSelectable;
  })();

  (function() {

    /**
     * Inserts a script element with a given url into a document; invokes callback, when that script is finished loading
     * @memberOf fabric.util
     * @param {String} url URL of a script to load
     * @param {Function} callback Callback to execute when script is finished loading
     */
    function getScript(url, callback) {
      var headEl = fabric.document.getElementsByTagName('head')[0],
          scriptEl = fabric.document.createElement('script'),
          loading = true;

      /** @ignore */
      scriptEl.onload = /** @ignore */ scriptEl.onreadystatechange = function(e) {
        if (loading) {
          if (typeof this.readyState === 'string' &&
              this.readyState !== 'loaded' &&
              this.readyState !== 'complete') {
            return;
          }
          loading = false;
          callback(e || fabric.window.event);
          scriptEl = scriptEl.onload = scriptEl.onreadystatechange = null;
        }
      };
      scriptEl.src = url;
      headEl.appendChild(scriptEl);
      // causes issue in Opera
      // headEl.removeChild(scriptEl);
    }

    fabric.util.getScript = getScript;
  })();

  fabric.util.getById = getById;
  fabric.util.toArray = toArray;
  fabric.util.makeElement = makeElement;
  fabric.util.addClass = addClass;
  fabric.util.wrapElement = wrapElement;
  fabric.util.getScrollLeftTop = getScrollLeftTop;
  fabric.util.getElementOffset = getElementOffset;
  fabric.util.getElementStyle = getElementStyle;

})();


(function() {

  function addParamToUrl(url, param) {
    return url + (/\?/.test(url) ? '&' : '?') + param;
  }

  var makeXHR = (function() {
    var factories = [
      function() { return new ActiveXObject('Microsoft.XMLHTTP'); },
      function() { return new ActiveXObject('Msxml2.XMLHTTP'); },
      function() { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); },
      function() { return new XMLHttpRequest(); }
    ];
    for (var i = factories.length; i--; ) {
      try {
        var req = factories[i]();
        if (req) {
          return factories[i];
        }
      }
      catch (err) { }
    }
  })();

  function emptyFn() { }

  /**
   * Cross-browser abstraction for sending XMLHttpRequest
   * @memberOf fabric.util
   * @param {String} url URL to send XMLHttpRequest to
   * @param {Object} [options] Options object
   * @param {String} [options.method="GET"]
   * @param {String} [options.parameters] parameters to append to url in GET or in body
   * @param {String} [options.body] body to send with POST or PUT request
   * @param {Function} options.onComplete Callback to invoke when request is completed
   * @return {XMLHttpRequest} request
   */
  function request(url, options) {

    options || (options = { });

    var method = options.method ? options.method.toUpperCase() : 'GET',
        onComplete = options.onComplete || function() { },
        xhr = makeXHR(),
        body = options.body || options.parameters;

    /** @ignore */
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        onComplete(xhr);
        xhr.onreadystatechange = emptyFn;
      }
    };

    if (method === 'GET') {
      body = null;
      if (typeof options.parameters === 'string') {
        url = addParamToUrl(url, options.parameters);
      }
    }

    xhr.open(method, url, true);

    if (method === 'POST' || method === 'PUT') {
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }

    xhr.send(body);
    return xhr;
  }

  fabric.util.request = request;
})();


/**
 * Wrapper around `console.log` (when available)
 * @param {*} [values] Values to log
 */
fabric.log = function() { };

/**
 * Wrapper around `console.warn` (when available)
 * @param {*} [values] Values to log as a warning
 */
fabric.warn = function() { };

/* jshint ignore:start */
if (typeof console !== 'undefined') {

  ['log', 'warn'].forEach(function(methodName) {

    if (typeof console[methodName] !== 'undefined' &&
        typeof console[methodName].apply === 'function') {

      fabric[methodName] = function() {
        return console[methodName].apply(console, arguments);
      };
    }
  });
}
/* jshint ignore:end */


(function() {

  /**
   * Changes value from one to another within certain period of time, invoking callbacks as value is being changed.
   * @memberOf fabric.util
   * @param {Object} [options] Animation options
   * @param {Function} [options.onChange] Callback; invoked on every value change
   * @param {Function} [options.onComplete] Callback; invoked when value change is completed
   * @param {Number} [options.startValue=0] Starting value
   * @param {Number} [options.endValue=100] Ending value
   * @param {Number} [options.byValue=100] Value to modify the property by
   * @param {Function} [options.easing] Easing function
   * @param {Number} [options.duration=500] Duration of change (in ms)
   */
  function animate(options) {

    requestAnimFrame(function(timestamp) {
      options || (options = { });

      var start = timestamp || +new Date(),
          duration = options.duration || 500,
          finish = start + duration, time,
          onChange = options.onChange || function() { },
          abort = options.abort || function() { return false; },
          easing = options.easing || function(t, b, c, d) {return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;},
          startValue = 'startValue' in options ? options.startValue : 0,
          endValue = 'endValue' in options ? options.endValue : 100,
          byValue = options.byValue || endValue - startValue;

      options.onStart && options.onStart();

      (function tick(ticktime) {
        time = ticktime || +new Date();
        var currentTime = time > finish ? duration : (time - start);
        if (abort()) {
          options.onComplete && options.onComplete();
          return;
        }
        onChange(easing(currentTime, startValue, byValue, duration));
        if (time > finish) {
          options.onComplete && options.onComplete();
          return;
        }
        requestAnimFrame(tick);
      })(start);
    });

  }

  var _requestAnimFrame = fabric.window.requestAnimationFrame       ||
                          fabric.window.webkitRequestAnimationFrame ||
                          fabric.window.mozRequestAnimationFrame    ||
                          fabric.window.oRequestAnimationFrame      ||
                          fabric.window.msRequestAnimationFrame     ||
                          function(callback) {
                            fabric.window.setTimeout(callback, 1000 / 60);
                          };

  /**
   * requestAnimationFrame polyfill based on http://paulirish.com/2011/requestanimationframe-for-smart-animating/
   * In order to get a precise start time, `requestAnimFrame` should be called as an entry into the method
   * @memberOf fabric.util
   * @param {Function} callback Callback to invoke
   * @param {DOMElement} element optional Element to associate with animation
   */
  function requestAnimFrame() {
    return _requestAnimFrame.apply(fabric.window, arguments);
  }

  fabric.util.animate = animate;
  fabric.util.requestAnimFrame = requestAnimFrame;

})();


(function() {

  function normalize(a, c, p, s) {
    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    }
    else {
      //handle the 0/0 case:
      if (c === 0 && a === 0) {
        s = p / (2 * Math.PI) * Math.asin(1);
      }
      else {
        s = p / (2 * Math.PI) * Math.asin(c / a);
      }
    }
    return { a: a, c: c, p: p, s: s };
  }

  function elastic(opts, t, d) {
    return opts.a *
      Math.pow(2, 10 * (t -= 1)) *
      Math.sin( (t * d - opts.s) * (2 * Math.PI) / opts.p );
  }

  /**
   * Cubic easing out
   * @memberOf fabric.util.ease
   */
  function easeOutCubic(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  }

  /**
   * Cubic easing in and out
   * @memberOf fabric.util.ease
   */
  function easeInOutCubic(t, b, c, d) {
    t /= d/2;
    if (t < 1) {
      return c / 2 * t * t * t + b;
    }
    return c / 2 * ((t -= 2) * t * t + 2) + b;
  }

  /**
   * Quartic easing in
   * @memberOf fabric.util.ease
   */
  function easeInQuart(t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
  }

  /**
   * Quartic easing out
   * @memberOf fabric.util.ease
   */
  function easeOutQuart(t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  }

  /**
   * Quartic easing in and out
   * @memberOf fabric.util.ease
   */
  function easeInOutQuart(t, b, c, d) {
    t /= d / 2;
    if (t < 1) {
      return c / 2 * t * t * t * t + b;
    }
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
  }

  /**
   * Quintic easing in
   * @memberOf fabric.util.ease
   */
  function easeInQuint(t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  }

  /**
   * Quintic easing out
   * @memberOf fabric.util.ease
   */
  function easeOutQuint(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  }

  /**
   * Quintic easing in and out
   * @memberOf fabric.util.ease
   */
  function easeInOutQuint(t, b, c, d) {
    t /= d / 2;
    if (t < 1) {
      return c / 2 * t * t * t * t * t + b;
    }
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
  }

  /**
   * Sinusoidal easing in
   * @memberOf fabric.util.ease
   */
  function easeInSine(t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
  }

  /**
   * Sinusoidal easing out
   * @memberOf fabric.util.ease
   */
  function easeOutSine(t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
  }

  /**
   * Sinusoidal easing in and out
   * @memberOf fabric.util.ease
   */
  function easeInOutSine(t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
  }

  /**
   * Exponential easing in
   * @memberOf fabric.util.ease
   */
  function easeInExpo(t, b, c, d) {
    return (t === 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
  }

  /**
   * Exponential easing out
   * @memberOf fabric.util.ease
   */
  function easeOutExpo(t, b, c, d) {
    return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
  }

  /**
   * Exponential easing in and out
   * @memberOf fabric.util.ease
   */
  function easeInOutExpo(t, b, c, d) {
    if (t === 0) {
      return b;
    }
    if (t === d) {
      return b + c;
    }
    t /= d / 2;
    if (t < 1) {
      return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    }
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  }

  /**
   * Circular easing in
   * @memberOf fabric.util.ease
   */
  function easeInCirc(t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  }

  /**
   * Circular easing out
   * @memberOf fabric.util.ease
   */
  function easeOutCirc(t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  }

  /**
   * Circular easing in and out
   * @memberOf fabric.util.ease
   */
  function easeInOutCirc(t, b, c, d) {
    t /= d / 2;
    if (t < 1) {
      return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    }
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
  }

  /**
   * Elastic easing in
   * @memberOf fabric.util.ease
   */
  function easeInElastic(t, b, c, d) {
    var s = 1.70158, p = 0, a = c;
    if (t === 0) {
      return b;
    }
    t /= d;
    if (t === 1) {
      return b + c;
    }
    if (!p) {
      p = d * 0.3;
    }
    var opts = normalize(a, c, p, s);
    return -elastic(opts, t, d) + b;
  }

  /**
   * Elastic easing out
   * @memberOf fabric.util.ease
   */
  function easeOutElastic(t, b, c, d) {
    var s = 1.70158, p = 0, a = c;
    if (t === 0) {
      return b;
    }
    t /= d;
    if (t === 1) {
      return b + c;
    }
    if (!p) {
      p = d * 0.3;
    }
    var opts = normalize(a, c, p, s);
    return opts.a * Math.pow(2, -10 * t) * Math.sin((t * d - opts.s) * (2 * Math.PI) / opts.p ) + opts.c + b;
  }

  /**
   * Elastic easing in and out
   * @memberOf fabric.util.ease
   */
  function easeInOutElastic(t, b, c, d) {
    var s = 1.70158, p = 0, a = c;
    if (t === 0) {
      return b;
    }
    t /= d / 2;
    if (t === 2) {
      return b + c;
    }
    if (!p) {
      p = d * (0.3 * 1.5);
    }
    var opts = normalize(a, c, p, s);
    if (t < 1) {
      return -0.5 * elastic(opts, t, d) + b;
    }
    return opts.a * Math.pow(2, -10 * (t -= 1)) *
      Math.sin((t * d - opts.s) * (2 * Math.PI) / opts.p ) * 0.5 + opts.c + b;
  }

  /**
   * Backwards easing in
   * @memberOf fabric.util.ease
   */
  function easeInBack(t, b, c, d, s) {
    if (s === undefined) {
      s = 1.70158;
    }
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  }

  /**
   * Backwards easing out
   * @memberOf fabric.util.ease
   */
  function easeOutBack(t, b, c, d, s) {
    if (s === undefined) {
      s = 1.70158;
    }
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  }

  /**
   * Backwards easing in and out
   * @memberOf fabric.util.ease
   */
  function easeInOutBack(t, b, c, d, s) {
    if (s === undefined) {
      s = 1.70158;
    }
    t /= d / 2;
    if (t < 1) {
      return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
    }
    return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
  }

  /**
   * Bouncing easing in
   * @memberOf fabric.util.ease
   */
  function easeInBounce(t, b, c, d) {
    return c - easeOutBounce (d - t, 0, c, d) + b;
  }

  /**
   * Bouncing easing out
   * @memberOf fabric.util.ease
   */
  function easeOutBounce(t, b, c, d) {
    if ((t /= d) < (1 / 2.75)) {
      return c * (7.5625 * t * t) + b;
    }
    else if (t < (2/2.75)) {
      return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
    }
    else if (t < (2.5/2.75)) {
      return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
    }
    else {
      return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
    }
  }

  /**
   * Bouncing easing in and out
   * @memberOf fabric.util.ease
   */
  function easeInOutBounce(t, b, c, d) {
    if (t < d / 2) {
      return easeInBounce (t * 2, 0, c, d) * 0.5 + b;
    }
    return easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
  }

  /**
   * Easing functions
   * See <a href="http://gizma.com/easing/">Easing Equations by Robert Penner</a>
   * @namespace fabric.util.ease
   */
  fabric.util.ease = {

    /**
     * Quadratic easing in
     * @memberOf fabric.util.ease
     */
    easeInQuad: function(t, b, c, d) {
      return c * (t /= d) * t + b;
    },

    /**
     * Quadratic easing out
     * @memberOf fabric.util.ease
     */
    easeOutQuad: function(t, b, c, d) {
      return -c * (t /= d) * (t - 2) + b;
    },

    /**
     * Quadratic easing in and out
     * @memberOf fabric.util.ease
     */
    easeInOutQuad: function(t, b, c, d) {
      t /= (d / 2);
      if (t < 1) {
        return c / 2 * t * t + b;
      }
      return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },

    /**
     * Cubic easing in
     * @memberOf fabric.util.ease
     */
    easeInCubic: function(t, b, c, d) {
      return c * (t /= d) * t * t + b;
    },

    easeOutCubic: easeOutCubic,
    easeInOutCubic: easeInOutCubic,
    easeInQuart: easeInQuart,
    easeOutQuart: easeOutQuart,
    easeInOutQuart: easeInOutQuart,
    easeInQuint: easeInQuint,
    easeOutQuint: easeOutQuint,
    easeInOutQuint: easeInOutQuint,
    easeInSine: easeInSine,
    easeOutSine: easeOutSine,
    easeInOutSine: easeInOutSine,
    easeInExpo: easeInExpo,
    easeOutExpo: easeOutExpo,
    easeInOutExpo: easeInOutExpo,
    easeInCirc: easeInCirc,
    easeOutCirc: easeOutCirc,
    easeInOutCirc: easeInOutCirc,
    easeInElastic: easeInElastic,
    easeOutElastic: easeOutElastic,
    easeInOutElastic: easeInOutElastic,
    easeInBack: easeInBack,
    easeOutBack: easeOutBack,
    easeInOutBack: easeInOutBack,
    easeInBounce: easeInBounce,
    easeOutBounce: easeOutBounce,
    easeInOutBounce: easeInOutBounce
  };

}());


(function(global) {

  'use strict';

  /**
   * @name fabric
   * @namespace
   */

  var fabric = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend,
      capitalize = fabric.util.string.capitalize,
      clone = fabric.util.object.clone,
      toFixed = fabric.util.toFixed,
      parseUnit = fabric.util.parseUnit,
      multiplyTransformMatrices = fabric.util.multiplyTransformMatrices,

      reAllowedSVGTagNames = /^(path|circle|polygon|polyline|ellipse|rect|line|image|text)$/i,
      reViewBoxTagNames = /^(symbol|image|marker|pattern|view|svg)$/i,
      reNotAllowedAncestors = /^(?:pattern|defs|symbol|metadata)$/i,
      reAllowedParents = /^(symbol|g|a|svg)$/i,

      attributesMap = {
        cx:                   'left',
        x:                    'left',
        r:                    'radius',
        cy:                   'top',
        y:                    'top',
        display:              'visible',
        visibility:           'visible',
        transform:            'transformMatrix',
        'fill-opacity':       'fillOpacity',
        'fill-rule':          'fillRule',
        'font-family':        'fontFamily',
        'font-size':          'fontSize',
        'font-style':         'fontStyle',
        'font-weight':        'fontWeight',
        'stroke-dasharray':   'strokeDashArray',
        'stroke-linecap':     'strokeLineCap',
        'stroke-linejoin':    'strokeLineJoin',
        'stroke-miterlimit':  'strokeMiterLimit',
        'stroke-opacity':     'strokeOpacity',
        'stroke-width':       'strokeWidth',
        'text-decoration':    'textDecoration',
        'text-anchor':        'originX'
      },

      colorAttributes = {
        stroke: 'strokeOpacity',
        fill:   'fillOpacity'
      };

  fabric.cssRules = { };
  fabric.gradientDefs = { };

  function normalizeAttr(attr) {
    // transform attribute names
    if (attr in attributesMap) {
      return attributesMap[attr];
    }
    return attr;
  }

  function normalizeValue(attr, value, parentAttributes, fontSize) {
    var isArray = Object.prototype.toString.call(value) === '[object Array]',
        parsed;

    if ((attr === 'fill' || attr === 'stroke') && value === 'none') {
      value = '';
    }
    else if (attr === 'strokeDashArray') {
      value = value.replace(/,/g, ' ').split(/\s+/).map(function(n) {
        return parseFloat(n);
      });
    }
    else if (attr === 'transformMatrix') {
      if (parentAttributes && parentAttributes.transformMatrix) {
        value = multiplyTransformMatrices(
          parentAttributes.transformMatrix, fabric.parseTransformAttribute(value));
      }
      else {
        value = fabric.parseTransformAttribute(value);
      }
    }
    else if (attr === 'visible') {
      value = (value === 'none' || value === 'hidden') ? false : true;
      // display=none on parent element always takes precedence over child element
      if (parentAttributes && parentAttributes.visible === false) {
        value = false;
      }
    }
    else if (attr === 'originX' /* text-anchor */) {
      value = value === 'start' ? 'left' : value === 'end' ? 'right' : 'center';
    }
    else {
      parsed = isArray ? value.map(parseUnit) : parseUnit(value, fontSize);
    }

    return (!isArray && isNaN(parsed) ? value : parsed);
  }

  /**
   * @private
   * @param {Object} attributes Array of attributes to parse
   */
  function _setStrokeFillOpacity(attributes) {
    for (var attr in colorAttributes) {

      if (typeof attributes[colorAttributes[attr]] === 'undefined' || attributes[attr] === '') {
        continue;
      }

      if (typeof attributes[attr] === 'undefined') {
        if (!fabric.Object.prototype[attr]) {
          continue;
        }
        attributes[attr] = fabric.Object.prototype[attr];
      }

      if (attributes[attr].indexOf('url(') === 0) {
        continue;
      }

      var color = new fabric.Color(attributes[attr]);
      attributes[attr] = color.setAlpha(toFixed(color.getAlpha() * attributes[colorAttributes[attr]], 2)).toRgba();
    }
    return attributes;
  }

  /**
   * @private
   */
  function _getMultipleNodes(doc, nodeNames) {
    var nodeName, nodeArray = [ ], nodeList;
    for (var i = 0; i < nodeNames.length; i++) {
      nodeName = nodeNames[i];
      nodeList = doc.getElementsByTagName(nodeName);
      nodeArray = nodeArray.concat(Array.prototype.slice.call(nodeList));
    }
    return nodeArray;
  }

  /**
   * Parses "transform" attribute, returning an array of values
   * @static
   * @function
   * @memberOf fabric
   * @param {String} attributeValue String containing attribute value
   * @return {Array} Array of 6 elements representing transformation matrix
   */
  fabric.parseTransformAttribute = (function() {
    function rotateMatrix(matrix, args) {
      var angle = args[0],
          x = (args.length === 3) ? args[1] : 0,
          y = (args.length === 3) ? args[2] : 0;

      matrix[0] = Math.cos(angle);
      matrix[1] = Math.sin(angle);
      matrix[2] = -Math.sin(angle);
      matrix[3] = Math.cos(angle);
      matrix[4] = x - (matrix[0] * x + matrix[2] * y);
      matrix[5] = y - (matrix[1] * x + matrix[3] * y);
    }

    function scaleMatrix(matrix, args) {
      var multiplierX = args[0],
          multiplierY = (args.length === 2) ? args[1] : args[0];

      matrix[0] = multiplierX;
      matrix[3] = multiplierY;
    }

    function skewXMatrix(matrix, args) {
      matrix[2] = Math.tan(fabric.util.degreesToRadians(args[0]));
    }

    function skewYMatrix(matrix, args) {
      matrix[1] = Math.tan(fabric.util.degreesToRadians(args[0]));
    }

    function translateMatrix(matrix, args) {
      matrix[4] = args[0];
      if (args.length === 2) {
        matrix[5] = args[1];
      }
    }

    // identity matrix
    var iMatrix = [
          1, // a
          0, // b
          0, // c
          1, // d
          0, // e
          0  // f
        ],

        // == begin transform regexp
        number = fabric.reNum,

        commaWsp = '(?:\\s+,?\\s*|,\\s*)',

        skewX = '(?:(skewX)\\s*\\(\\s*(' + number + ')\\s*\\))',

        skewY = '(?:(skewY)\\s*\\(\\s*(' + number + ')\\s*\\))',

        rotate = '(?:(rotate)\\s*\\(\\s*(' + number + ')(?:' +
                    commaWsp + '(' + number + ')' +
                    commaWsp + '(' + number + '))?\\s*\\))',

        scale = '(?:(scale)\\s*\\(\\s*(' + number + ')(?:' +
                    commaWsp + '(' + number + '))?\\s*\\))',

        translate = '(?:(translate)\\s*\\(\\s*(' + number + ')(?:' +
                    commaWsp + '(' + number + '))?\\s*\\))',

        matrix = '(?:(matrix)\\s*\\(\\s*' +
                  '(' + number + ')' + commaWsp +
                  '(' + number + ')' + commaWsp +
                  '(' + number + ')' + commaWsp +
                  '(' + number + ')' + commaWsp +
                  '(' + number + ')' + commaWsp +
                  '(' + number + ')' +
                  '\\s*\\))',

        transform = '(?:' +
                    matrix + '|' +
                    translate + '|' +
                    scale + '|' +
                    rotate + '|' +
                    skewX + '|' +
                    skewY +
                    ')',

        transforms = '(?:' + transform + '(?:' + commaWsp + '*' + transform + ')*' + ')',

        transformList = '^\\s*(?:' + transforms + '?)\\s*$',

        // http://www.w3.org/TR/SVG/coords.html#TransformAttribute
        reTransformList = new RegExp(transformList),
        // == end transform regexp

        reTransform = new RegExp(transform, 'g');

    return function(attributeValue) {

      // start with identity matrix
      var matrix = iMatrix.concat(),
          matrices = [ ];

      // return if no argument was given or
      // an argument does not match transform attribute regexp
      if (!attributeValue || (attributeValue && !reTransformList.test(attributeValue))) {
        return matrix;
      }

      attributeValue.replace(reTransform, function(match) {

        var m = new RegExp(transform).exec(match).filter(function (match) {
              return (match !== '' && match != null);
            }),
            operation = m[1],
            args = m.slice(2).map(parseFloat);

        switch (operation) {
          case 'translate':
            translateMatrix(matrix, args);
            break;
          case 'rotate':
            args[0] = fabric.util.degreesToRadians(args[0]);
            rotateMatrix(matrix, args);
            break;
          case 'scale':
            scaleMatrix(matrix, args);
            break;
          case 'skewX':
            skewXMatrix(matrix, args);
            break;
          case 'skewY':
            skewYMatrix(matrix, args);
            break;
          case 'matrix':
            matrix = args;
            break;
        }

        // snapshot current matrix into matrices array
        matrices.push(matrix.concat());
        // reset
        matrix = iMatrix.concat();
      });

      var combinedMatrix = matrices[0];
      while (matrices.length > 1) {
        matrices.shift();
        combinedMatrix = fabric.util.multiplyTransformMatrices(combinedMatrix, matrices[0]);
      }
      return combinedMatrix;
    };
  })();

  /**
   * @private
   */
  function parseStyleString(style, oStyle) {
    var attr, value;
    style.replace(/;\s*$/, '').split(';').forEach(function (chunk) {
      var pair = chunk.split(':');

      attr = normalizeAttr(pair[0].trim().toLowerCase());
      value = normalizeValue(attr, pair[1].trim());

      oStyle[attr] = value;
    });
  }

  /**
   * @private
   */
  function parseStyleObject(style, oStyle) {
    var attr, value;
    for (var prop in style) {
      if (typeof style[prop] === 'undefined') {
        continue;
      }

      attr = normalizeAttr(prop.toLowerCase());
      value = normalizeValue(attr, style[prop]);

      oStyle[attr] = value;
    }
  }

  /**
   * @private
   */
  function getGlobalStylesForElement(element, svgUid) {
    var styles = { };
    for (var rule in fabric.cssRules[svgUid]) {
      if (elementMatchesRule(element, rule.split(' '))) {
        for (var property in fabric.cssRules[svgUid][rule]) {
          styles[property] = fabric.cssRules[svgUid][rule][property];
        }
      }
    }
    return styles;
  }

  /**
   * @private
   */
  function elementMatchesRule(element, selectors) {
    var firstMatching, parentMatching = true;
    //start from rightmost selector.
    firstMatching = selectorMatches(element, selectors.pop());
    if (firstMatching && selectors.length) {
      parentMatching = doesSomeParentMatch(element, selectors);
    }
    return firstMatching && parentMatching && (selectors.length === 0);
  }

  function doesSomeParentMatch(element, selectors) {
    var selector, parentMatching = true;
    while (element.parentNode && element.parentNode.nodeType === 1 && selectors.length) {
      if (parentMatching) {
        selector = selectors.pop();
      }
      element = element.parentNode;
      parentMatching = selectorMatches(element, selector);
    }
    return selectors.length === 0;
  }

  /**
   * @private
   */
  function selectorMatches(element, selector) {
    var nodeName = element.nodeName,
        classNames = element.getAttribute('class'),
        id = element.getAttribute('id'), matcher;
    // i check if a selector matches slicing away part from it.
    // if i get empty string i should match
    matcher = new RegExp('^' + nodeName, 'i');
    selector = selector.replace(matcher, '');
    if (id && selector.length) {
      matcher = new RegExp('#' + id + '(?![a-zA-Z\\-]+)', 'i');
      selector = selector.replace(matcher, '');
    }
    if (classNames && selector.length) {
      classNames = classNames.split(' ');
      for (var i = classNames.length; i--;) {
        matcher = new RegExp('\\.' + classNames[i] + '(?![a-zA-Z\\-]+)', 'i');
        selector = selector.replace(matcher, '');
      }
    }
    return selector.length === 0;
  }

  /**
   * @private
   * to support IE8 missing getElementById on SVGdocument
   */
  function elementById(doc, id) {
    var el;
    doc.getElementById && (el = doc.getElementById(id));
    if (el) {
      return el;
    }
    var node, i, nodelist = doc.getElementsByTagName('*');
    for (i = 0; i < nodelist.length; i++) {
      node = nodelist[i];
      if (id === node.getAttribute('id')) {
        return node;
      }
    }
  }

  /**
   * @private
   */
  function parseUseDirectives(doc) {
    var nodelist = _getMultipleNodes(doc, ['use', 'svg:use']), i = 0;

    while (nodelist.length && i < nodelist.length) {
      var el = nodelist[i],
          xlink = el.getAttribute('xlink:href').substr(1),
          x = el.getAttribute('x') || 0,
          y = el.getAttribute('y') || 0,
          el2 = elementById(doc, xlink).cloneNode(true),
          currentTrans = (el2.getAttribute('transform') || '') + ' translate(' + x + ', ' + y + ')',
          parentNode, oldLength = nodelist.length, attr, j, attrs, l;

      applyViewboxTransform(el2);
      if (/^svg$/i.test(el2.nodeName)) {
        var el3 = el2.ownerDocument.createElement('g');
        for (j = 0, attrs = el2.attributes, l = attrs.length; j < l; j++) {
          attr = attrs.item(j);
          el3.setAttribute(attr.nodeName, attr.nodeValue);
        }
        while (el2.firstChild != null) {
          el3.appendChild(el2.firstChild);
        }
        el2 = el3;
      }

      for (j = 0, attrs = el.attributes, l = attrs.length; j < l; j++) {
        attr = attrs.item(j);
        if (attr.nodeName === 'x' || attr.nodeName === 'y' || attr.nodeName === 'xlink:href') {
          continue;
        }

        if (attr.nodeName === 'transform') {
          currentTrans = attr.nodeValue + ' ' + currentTrans;
        }
        else {
          el2.setAttribute(attr.nodeName, attr.nodeValue);
        }
      }

      el2.setAttribute('transform', currentTrans);
      el2.setAttribute('instantiated_by_use', '1');
      el2.removeAttribute('id');
      parentNode = el.parentNode;
      parentNode.replaceChild(el2, el);
      // some browsers do not shorten nodelist after replaceChild (IE8)
      if (nodelist.length === oldLength) {
        i++;
      }
    }
  }

  // http://www.w3.org/TR/SVG/coords.html#ViewBoxAttribute
  // matches, e.g.: +14.56e-12, etc.
  var reViewBoxAttrValue = new RegExp(
    '^' +
    '\\s*(' + fabric.reNum + '+)\\s*,?' +
    '\\s*(' + fabric.reNum + '+)\\s*,?' +
    '\\s*(' + fabric.reNum + '+)\\s*,?' +
    '\\s*(' + fabric.reNum + '+)\\s*' +
    '$'
  );

  /**
   * Add a <g> element that envelop all child elements and makes the viewbox transformMatrix descend on all elements
   */
  function applyViewboxTransform(element) {

    var viewBoxAttr = element.getAttribute('viewBox'),
        scaleX = 1,
        scaleY = 1,
        minX = 0,
        minY = 0,
        viewBoxWidth, viewBoxHeight, matrix, el,
        widthAttr = element.getAttribute('width'),
        heightAttr = element.getAttribute('height'),
        x = element.getAttribute('x') || 0,
        y = element.getAttribute('y') || 0,
        preserveAspectRatio = element.getAttribute('preserveAspectRatio') || '',
        missingViewBox = (!viewBoxAttr || !reViewBoxTagNames.test(element.nodeName)
                           || !(viewBoxAttr = viewBoxAttr.match(reViewBoxAttrValue))),
        missingDimAttr = (!widthAttr || !heightAttr || widthAttr === '100%' || heightAttr === '100%'),
        toBeParsed = missingViewBox && missingDimAttr,
        parsedDim = { }, translateMatrix = '';

    parsedDim.width = 0;
    parsedDim.height = 0;
    parsedDim.toBeParsed = toBeParsed;

    if (toBeParsed) {
      return parsedDim;
    }

    if (missingViewBox) {
      parsedDim.width = parseUnit(widthAttr);
      parsedDim.height = parseUnit(heightAttr);
      return parsedDim;
    }

    minX = -parseFloat(viewBoxAttr[1]),
    minY = -parseFloat(viewBoxAttr[2]),
    viewBoxWidth = parseFloat(viewBoxAttr[3]),
    viewBoxHeight = parseFloat(viewBoxAttr[4]);

    if (!missingDimAttr) {
      parsedDim.width = parseUnit(widthAttr);
      parsedDim.height = parseUnit(heightAttr);
      scaleX = parsedDim.width / viewBoxWidth;
      scaleY = parsedDim.height / viewBoxHeight;
    }
    else {
      parsedDim.width = viewBoxWidth;
      parsedDim.height = viewBoxHeight;
    }

    // default is to preserve aspect ratio
    preserveAspectRatio = fabric.util.parsePreserveAspectRatioAttribute(preserveAspectRatio);
    if (preserveAspectRatio.alignX !== 'none') {
      //translate all container for the effect of Mid, Min, Max
      scaleY = scaleX = (scaleX > scaleY ? scaleY : scaleX);
    }

    if (scaleX === 1 && scaleY === 1 && minX === 0 && minY === 0 && x === 0 && y === 0) {
      return parsedDim;
    }

    if (x || y) {
      translateMatrix = ' translate(' + parseUnit(x) + ' ' + parseUnit(y) + ') ';
    }

    matrix = translateMatrix + ' matrix(' + scaleX +
                  ' 0' +
                  ' 0 ' +
                  scaleY + ' ' +
                  (minX * scaleX) + ' ' +
                  (minY * scaleY) + ') ';

    if (element.nodeName === 'svg') {
      el = element.ownerDocument.createElement('g');
      while (element.firstChild != null) {
        el.appendChild(element.firstChild);
      }
      element.appendChild(el);
    }
    else {
      el = element;
      matrix = el.getAttribute('transform') + matrix;
    }

    el.setAttribute('transform', matrix);
    return parsedDim;
  }

  /**
   * Parses an SVG document, converts it to an array of corresponding fabric.* instances and passes them to a callback
   * @static
   * @function
   * @memberOf fabric
   * @param {SVGDocument} doc SVG document to parse
   * @param {Function} callback Callback to call when parsing is finished; It's being passed an array of elements (parsed from a document).
   * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
   */
  fabric.parseSVGDocument = (function() {

    function hasAncestorWithNodeName(element, nodeName) {
      while (element && (element = element.parentNode)) {
        if (element.nodeName && nodeName.test(element.nodeName.replace('svg:', ''))
          && !element.getAttribute('instantiated_by_use')) {
          return true;
        }
      }
      return false;
    }

    return function(doc, callback, reviver) {
      if (!doc) {
        return;
      }

      parseUseDirectives(doc);

      var startTime = new Date(),
          svgUid =  fabric.Object.__uid++,
          options = applyViewboxTransform(doc),
          descendants = fabric.util.toArray(doc.getElementsByTagName('*'));

      options.svgUid = svgUid;

      if (descendants.length === 0 && fabric.isLikelyNode) {
        // we're likely in node, where "o3-xml" library fails to gEBTN("*")
        // https://github.com/ajaxorg/node-o3-xml/issues/21
        descendants = doc.selectNodes('//*[name(.)!="svg"]');
        var arr = [ ];
        for (var i = 0, len = descendants.length; i < len; i++) {
          arr[i] = descendants[i];
        }
        descendants = arr;
      }

      var elements = descendants.filter(function(el) {
        applyViewboxTransform(el);
        return reAllowedSVGTagNames.test(el.nodeName.replace('svg:', '')) &&
              !hasAncestorWithNodeName(el, reNotAllowedAncestors); // http://www.w3.org/TR/SVG/struct.html#DefsElement
      });

      if (!elements || (elements && !elements.length)) {
        callback && callback([], {});
        return;
      }

      fabric.gradientDefs[svgUid] = fabric.getGradientDefs(doc);
      fabric.cssRules[svgUid] = fabric.getCSSRules(doc);
      // Precedence of rules:   style > class > attribute
      fabric.parseElements(elements, function(instances) {
        fabric.documentParsingTime = new Date() - startTime;
        if (callback) {
          callback(instances, options);
        }
      }, clone(options), reviver);
    };
  })();

  /**
   * Used for caching SVG documents (loaded via `fabric.Canvas#loadSVGFromURL`)
   * @namespace
   */
  var svgCache = {

    /**
     * @param {String} name
     * @param {Function} callback
     */
    has: function (name, callback) {
      callback(false);
    },

    get: function () {
      /* NOOP */
    },

    set: function () {
      /* NOOP */
    }
  };

  /**
   * @private
   */
  function _enlivenCachedObject(cachedObject) {

    var objects = cachedObject.objects,
        options = cachedObject.options;

    objects = objects.map(function (o) {
      return fabric[capitalize(o.type)].fromObject(o);
    });

    return ({ objects: objects, options: options });
  }

  /**
   * @private
   */
  function _createSVGPattern(markup, canvas, property) {
    if (canvas[property] && canvas[property].toSVG) {
      markup.push(
        '\t<pattern x="0" y="0" id="', property, 'Pattern" ',
          'width="', canvas[property].source.width,
          '" height="', canvas[property].source.height,
          '" patternUnits="userSpaceOnUse">\n',
        '\t\t<image x="0" y="0" ',
        'width="', canvas[property].source.width,
        '" height="', canvas[property].source.height,
        '" xlink:href="', canvas[property].source.src,
        '"></image>\n\t</pattern>\n'
      );
    }
  }

  var reFontDeclaration = new RegExp(
    '(normal|italic)?\\s*(normal|small-caps)?\\s*' +
    '(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*(' +
      fabric.reNum +
    '(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|' + fabric.reNum + '))?\\s+(.*)');

  extend(fabric, {
    /**
     * Parses a short font declaration, building adding its properties to a style object
     * @static
     * @function
     * @memberOf fabric
     * @param {String} value font declaration
     * @param {Object} oStyle definition
     */
    parseFontDeclaration: function(value, oStyle) {
      var match = value.match(reFontDeclaration);

      if (!match) {
        return;
      }
      var fontStyle = match[1],
          // font variant is not used
          // fontVariant = match[2],
          fontWeight = match[3],
          fontSize = match[4],
          lineHeight = match[5],
          fontFamily = match[6];

      if (fontStyle) {
        oStyle.fontStyle = fontStyle;
      }
      if (fontWeight) {
        oStyle.fontWeight = isNaN(parseFloat(fontWeight)) ? fontWeight : parseFloat(fontWeight);
      }
      if (fontSize) {
        oStyle.fontSize = parseUnit(fontSize);
      }
      if (fontFamily) {
        oStyle.fontFamily = fontFamily;
      }
      if (lineHeight) {
        oStyle.lineHeight = lineHeight === 'normal' ? 1 : lineHeight;
      }
    },

    /**
     * Parses an SVG document, returning all of the gradient declarations found in it
     * @static
     * @function
     * @memberOf fabric
     * @param {SVGDocument} doc SVG document to parse
     * @return {Object} Gradient definitions; key corresponds to element id, value -- to gradient definition element
     */
    getGradientDefs: function(doc) {
      var tagArray = [
            'linearGradient',
            'radialGradient',
            'svg:linearGradient',
            'svg:radialGradient'],
          elList = _getMultipleNodes(doc, tagArray),
          el, j = 0, id, xlink,
          gradientDefs = { }, idsToXlinkMap = { };

      j = elList.length;

      while (j--) {
        el = elList[j];
        xlink = el.getAttribute('xlink:href');
        id = el.getAttribute('id');
        if (xlink) {
          idsToXlinkMap[id] = xlink.substr(1);
        }
        gradientDefs[id] = el;
      }

      for (id in idsToXlinkMap) {
        var el2 = gradientDefs[idsToXlinkMap[id]].cloneNode(true);
        el = gradientDefs[id];
        while (el2.firstChild) {
          el.appendChild(el2.firstChild);
        }
      }
      return gradientDefs;
    },

    /**
     * Returns an object of attributes' name/value, given element and an array of attribute names;
     * Parses parent "g" nodes recursively upwards.
     * @static
     * @memberOf fabric
     * @param {DOMElement} element Element to parse
     * @param {Array} attributes Array of attributes to parse
     * @return {Object} object containing parsed attributes' names/values
     */
    parseAttributes: function(element, attributes, svgUid) {

      if (!element) {
        return;
      }

      var value,
          parentAttributes = { },
          fontSize;

      if (typeof svgUid === 'undefined') {
        svgUid = element.getAttribute('svgUid');
      }
      // if there's a parent container (`g` or `a` or `symbol` node), parse its attributes recursively upwards
      if (element.parentNode && reAllowedParents.test(element.parentNode.nodeName)) {
        parentAttributes = fabric.parseAttributes(element.parentNode, attributes, svgUid);
      }
      fontSize = (parentAttributes && parentAttributes.fontSize ) ||
                 element.getAttribute('font-size') || fabric.Text.DEFAULT_SVG_FONT_SIZE;

      var ownAttributes = attributes.reduce(function(memo, attr) {
        value = element.getAttribute(attr);
        if (value) {
          attr = normalizeAttr(attr);
          value = normalizeValue(attr, value, parentAttributes, fontSize);

          memo[attr] = value;
        }
        return memo;
      }, { });

      // add values parsed from style, which take precedence over attributes
      // (see: http://www.w3.org/TR/SVG/styling.html#UsingPresentationAttributes)
      ownAttributes = extend(ownAttributes,
        extend(getGlobalStylesForElement(element, svgUid), fabric.parseStyleAttribute(element)));
      if (ownAttributes.font) {
        fabric.parseFontDeclaration(ownAttributes.font, ownAttributes);
      }
      return _setStrokeFillOpacity(extend(parentAttributes, ownAttributes));
    },

    /**
     * Transforms an array of svg elements to corresponding fabric.* instances
     * @static
     * @memberOf fabric
     * @param {Array} elements Array of elements to parse
     * @param {Function} callback Being passed an array of fabric instances (transformed from SVG elements)
     * @param {Object} [options] Options object
     * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
     */
    parseElements: function(elements, callback, options, reviver) {
      new fabric.ElementsParser(elements, callback, options, reviver).parse();
    },

    /**
     * Parses "style" attribute, retuning an object with values
     * @static
     * @memberOf fabric
     * @param {SVGElement} element Element to parse
     * @return {Object} Objects with values parsed from style attribute of an element
     */
    parseStyleAttribute: function(element) {
      var oStyle = { },
          style = element.getAttribute('style');

      if (!style) {
        return oStyle;
      }

      if (typeof style === 'string') {
        parseStyleString(style, oStyle);
      }
      else {
        parseStyleObject(style, oStyle);
      }

      return oStyle;
    },

    /**
     * Parses "points" attribute, returning an array of values
     * @static
     * @memberOf fabric
     * @param {String} points points attribute string
     * @return {Array} array of points
     */
    parsePointsAttribute: function(points) {

      // points attribute is required and must not be empty
      if (!points) {
        return null;
      }

      // replace commas with whitespace and remove bookending whitespace
      points = points.replace(/,/g, ' ').trim();

      points = points.split(/\s+/);
      var parsedPoints = [ ], i, len;

      i = 0;
      len = points.length;
      for (; i < len; i+=2) {
        parsedPoints.push({
          x: parseFloat(points[i]),
          y: parseFloat(points[i + 1])
        });
      }

      // odd number of points is an error
      // if (parsedPoints.length % 2 !== 0) {
      //   return null;
      // }

      return parsedPoints;
    },

    /**
     * Returns CSS rules for a given SVG document
     * @static
     * @function
     * @memberOf fabric
     * @param {SVGDocument} doc SVG document to parse
     * @return {Object} CSS rules of this document
     */
    getCSSRules: function(doc) {
      var styles = doc.getElementsByTagName('style'),
          allRules = { }, rules;

      // very crude parsing of style contents
      for (var i = 0, len = styles.length; i < len; i++) {
        // IE9 doesn't support textContent, but provides text instead.
        var styleContents = styles[i].textContent || styles[i].text;

        // remove comments
        styleContents = styleContents.replace(/\/\*[\s\S]*?\*\//g, '');
        if (styleContents.trim() === '') {
          continue;
        }
        rules = styleContents.match(/[^{]*\{[\s\S]*?\}/g);
        rules = rules.map(function(rule) { return rule.trim(); });
        rules.forEach(function(rule) {

          var match = rule.match(/([\s\S]*?)\s*\{([^}]*)\}/),
          ruleObj = { }, declaration = match[2].trim(),
          propertyValuePairs = declaration.replace(/;$/, '').split(/\s*;\s*/);

          for (var i = 0, len = propertyValuePairs.length; i < len; i++) {
            var pair = propertyValuePairs[i].split(/\s*:\s*/),
                property = normalizeAttr(pair[0]),
                value = normalizeValue(property, pair[1], pair[0]);
            ruleObj[property] = value;
          }
          rule = match[1];
          rule.split(',').forEach(function(_rule) {
            _rule = _rule.replace(/^svg/i, '').trim();
            if (_rule === '') {
              return;
            }
            if (allRules[_rule]) {
              fabric.util.object.extend(allRules[_rule], ruleObj);
            }
            else {
              allRules[_rule] = fabric.util.object.clone(ruleObj);
            }
          });
        });
      }
      return allRules;
    },

    /**
     * Takes url corresponding to an SVG document, and parses it into a set of fabric objects. Note that SVG is fetched via XMLHttpRequest, so it needs to conform to SOP (Same Origin Policy)
     * @memberOf fabric
     * @param {String} url
     * @param {Function} callback
     * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
     */
    loadSVGFromURL: function(url, callback, reviver) {

      url = url.replace(/^\n\s*/, '').trim();
      svgCache.has(url, function (hasUrl) {
        if (hasUrl) {
          svgCache.get(url, function (value) {
            var enlivedRecord = _enlivenCachedObject(value);
            callback(enlivedRecord.objects, enlivedRecord.options);
          });
        }
        else {
          new fabric.util.request(url, {
            method: 'get',
            onComplete: onComplete
          });
        }
      });

      function onComplete(r) {

        var xml = r.responseXML;
        if (xml && !xml.documentElement && fabric.window.ActiveXObject && r.responseText) {
          xml = new ActiveXObject('Microsoft.XMLDOM');
          xml.async = 'false';
          //IE chokes on DOCTYPE
          xml.loadXML(r.responseText.replace(/<!DOCTYPE[\s\S]*?(\[[\s\S]*\])*?>/i, ''));
        }
        if (!xml || !xml.documentElement) {
          callback && callback(null);
        }

        fabric.parseSVGDocument(xml.documentElement, function (results, options) {
          svgCache.set(url, {
            objects: fabric.util.array.invoke(results, 'toObject'),
            options: options
          });
          callback && callback(results, options);
        }, reviver);
      }
    },

    /**
     * Takes string corresponding to an SVG document, and parses it into a set of fabric objects
     * @memberOf fabric
     * @param {String} string
     * @param {Function} callback
     * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
     */
    loadSVGFromString: function(string, callback, reviver) {
      string = string.trim();
      var doc;
      if (typeof DOMParser !== 'undefined') {
        var parser = new DOMParser();
        if (parser && parser.parseFromString) {
          doc = parser.parseFromString(string, 'text/xml');
        }
      }
      else if (fabric.window.ActiveXObject) {
        doc = new ActiveXObject('Microsoft.XMLDOM');
        doc.async = 'false';
        // IE chokes on DOCTYPE
        doc.loadXML(string.replace(/<!DOCTYPE[\s\S]*?(\[[\s\S]*\])*?>/i, ''));
      }

      fabric.parseSVGDocument(doc.documentElement, function (results, options) {
        callback(results, options);
      }, reviver);
    },

    /**
     * Creates markup containing SVG font faces,
     * font URLs for font faces must be collected by developers
     * and are not extracted from the DOM by fabricjs
     * @param {Array} objects Array of fabric objects
     * @return {String}
     */
    createSVGFontFacesMarkup: function(objects) {
      var markup = '', fontList = { }, obj, fontFamily,
          style, row, rowIndex, _char, charIndex,
          fontPaths = fabric.fontPaths;

      for (var i = 0, len = objects.length; i < len; i++) {
        obj = objects[i];
        fontFamily = obj.fontFamily;
        if (obj.type.indexOf('text') === -1 || fontList[fontFamily] || !fontPaths[fontFamily]) {
          continue;
        }
        fontList[fontFamily] = true;
        if (!obj.styles) {
          continue;
        }
        style = obj.styles;
        for (rowIndex in style) {
          row = style[rowIndex];
          for (charIndex in row) {
            _char = row[charIndex];
            fontFamily = _char.fontFamily;
            if (!fontList[fontFamily] && fontPaths[fontFamily]) {
              fontList[fontFamily] = true;
            }
          }
        }
      }

      for (var j in fontList) {
        markup += [
          //jscs:disable validateIndentation
          '\t\t@font-face {\n',
            '\t\t\tfont-family: \'', j, '\';\n',
            '\t\t\tsrc: url(\'', fontPaths[j], '\');\n',
          '\t\t}\n'
          //jscs:enable validateIndentation
        ].join('');
      }

      if (markup) {
        markup = [
          //jscs:disable validateIndentation
          '\t<style type="text/css">',
            '<![CDATA[\n',
              markup,
            ']]>',
          '</style>\n'
          //jscs:enable validateIndentation
        ].join('');
      }

      return markup;
    },

    /**
     * Creates markup containing SVG referenced elements like patterns, gradients etc.
     * @param {fabric.Canvas} canvas instance of fabric.Canvas
     * @return {String}
     */
    createSVGRefElementsMarkup: function(canvas) {
      var markup = [ ];

      _createSVGPattern(markup, canvas, 'backgroundColor');
      _createSVGPattern(markup, canvas, 'overlayColor');

      return markup.join('');
    }
  });

})(typeof exports !== 'undefined' ? exports : this);


fabric.ElementsParser = function(elements, callback, options, reviver) {
  this.elements = elements;
  this.callback = callback;
  this.options = options;
  this.reviver = reviver;
  this.svgUid = (options && options.svgUid) || 0;
};

fabric.ElementsParser.prototype.parse = function() {
  this.instances = new Array(this.elements.length);
  this.numElements = this.elements.length;

  this.createObjects();
};

fabric.ElementsParser.prototype.createObjects = function() {
  for (var i = 0, len = this.elements.length; i < len; i++) {
    this.elements[i].setAttribute('svgUid', this.svgUid);
    (function(_this, i) {
      setTimeout(function() {
        _this.createObject(_this.elements[i], i);
      }, 0);
    })(this, i);
  }
};

fabric.ElementsParser.prototype.createObject = function(el, index) {
  var klass = fabric[fabric.util.string.capitalize(el.tagName.replace('svg:', ''))];
  if (klass && klass.fromElement) {
    try {
      this._createObject(klass, el, index);
    }
    catch (err) {
      fabric.log(err);
    }
  }
  else {
    this.checkIfDone();
  }
};

fabric.ElementsParser.prototype._createObject = function(klass, el, index) {
  if (klass.async) {
    klass.fromElement(el, this.createCallback(index, el), this.options);
  }
  else {
    var obj = klass.fromElement(el, this.options);
    this.resolveGradient(obj, 'fill');
    this.resolveGradient(obj, 'stroke');
    this.reviver && this.reviver(el, obj);
    this.instances[index] = obj;
    this.checkIfDone();
  }
};

fabric.ElementsParser.prototype.createCallback = function(index, el) {
  var _this = this;
  return function(obj) {
    _this.resolveGradient(obj, 'fill');
    _this.resolveGradient(obj, 'stroke');
    _this.reviver && _this.reviver(el, obj);
    _this.instances[index] = obj;
    _this.checkIfDone();
  };
};

fabric.ElementsParser.prototype.resolveGradient = function(obj, property) {

  var instanceFillValue = obj.get(property);
  if (!(/^url\(/).test(instanceFillValue)) {
    return;
  }
  var gradientId = instanceFillValue.slice(5, instanceFillValue.length - 1);
  if (fabric.gradientDefs[this.svgUid][gradientId]) {
    obj.set(property,
      fabric.Gradient.fromElement(fabric.gradientDefs[this.svgUid][gradientId], obj));
  }
};

fabric.ElementsParser.prototype.checkIfDone = function() {
  if (--this.numElements === 0) {
    this.instances = this.instances.filter(function(el) {
      return el != null;
    });
    this.callback(this.instances);
  }
};


(function(global) {

  'use strict';

  /* Adaptation of work of Kevin Lindsey (kevin@kevlindev.com) */

  var fabric = global.fabric || (global.fabric = { });

  if (fabric.Point) {
    fabric.warn('fabric.Point is already defined');
    return;
  }

  fabric.Point = Point;

  /**
   * Point class
   * @class fabric.Point
   * @memberOf fabric
   * @constructor
   * @param {Number} x
   * @param {Number} y
   * @return {fabric.Point} thisArg
   */
  function Point(x, y) {
    this.x = x;
    this.y = y;
  }

  Point.prototype = /** @lends fabric.Point.prototype */ {

    type: 'point',

    constructor: Point,

    /**
     * Adds another point to this one and returns another one
     * @param {fabric.Point} that
     * @return {fabric.Point} new Point instance with added values
     */
    add: function (that) {
      return new Point(this.x + that.x, this.y + that.y);
    },

    /**
     * Adds another point to this one
     * @param {fabric.Point} that
     * @return {fabric.Point} thisArg
     * @chainable
     */
    addEquals: function (that) {
      this.x += that.x;
      this.y += that.y;
      return this;
    },

    /**
     * Adds value to this point and returns a new one
     * @param {Number} scalar
     * @return {fabric.Point} new Point with added value
     */
    scalarAdd: function (scalar) {
      return new Point(this.x + scalar, this.y + scalar);
    },

    /**
     * Adds value to this point
     * @param {Number} scalar
     * @return {fabric.Point} thisArg
     * @chainable
     */
    scalarAddEquals: function (scalar) {
      this.x += scalar;
      this.y += scalar;
      return this;
    },

    /**
     * Subtracts another point from this point and returns a new one
     * @param {fabric.Point} that
     * @return {fabric.Point} new Point object with subtracted values
     */
    subtract: function (that) {
      return new Point(this.x - that.x, this.y - that.y);
    },

    /**
     * Subtracts another point from this point
     * @param {fabric.Point} that
     * @return {fabric.Point} thisArg
     * @chainable
     */
    subtractEquals: function (that) {
      this.x -= that.x;
      this.y -= that.y;
      return this;
    },

    /**
     * Subtracts value from this point and returns a new one
     * @param {Number} scalar
     * @return {fabric.Point}
     */
    scalarSubtract: function (scalar) {
      return new Point(this.x - scalar, this.y - scalar);
    },

    /**
     * Subtracts value from this point
     * @param {Number} scalar
     * @return {fabric.Point} thisArg
     * @chainable
     */
    scalarSubtractEquals: function (scalar) {
      this.x -= scalar;
      this.y -= scalar;
      return this;
    },

    /**
     * Miltiplies this point by a value and returns a new one
     * TODO: rename in scalarMultiply in 2.0
     * @param {Number} scalar
     * @return {fabric.Point}
     */
    multiply: function (scalar) {
      return new Point(this.x * scalar, this.y * scalar);
    },

    /**
     * Miltiplies this point by a value
     * TODO: rename in scalarMultiplyEquals in 2.0
     * @param {Number} scalar
     * @return {fabric.Point} thisArg
     * @chainable
     */
    multiplyEquals: function (scalar) {
      this.x *= scalar;
      this.y *= scalar;
      return this;
    },

    /**
     * Divides this point by a value and returns a new one
     * TODO: rename in scalarDivide in 2.0
     * @param {Number} scalar
     * @return {fabric.Point}
     */
    divide: function (scalar) {
      return new Point(this.x / scalar, this.y / scalar);
    },

    /**
     * Divides this point by a value
     * TODO: rename in scalarDivideEquals in 2.0
     * @param {Number} scalar
     * @return {fabric.Point} thisArg
     * @chainable
     */
    divideEquals: function (scalar) {
      this.x /= scalar;
      this.y /= scalar;
      return this;
    },

    /**
     * Returns true if this point is equal to another one
     * @param {fabric.Point} that
     * @return {Boolean}
     */
    eq: function (that) {
      return (this.x === that.x && this.y === that.y);
    },

    /**
     * Returns true if this point is less than another one
     * @param {fabric.Point} that
     * @return {Boolean}
     */
    lt: function (that) {
      return (this.x < that.x && this.y < that.y);
    },

    /**
     * Returns true if this point is less than or equal to another one
     * @param {fabric.Point} that
     * @return {Boolean}
     */
    lte: function (that) {
      return (this.x <= that.x && this.y <= that.y);
    },

    /**

     * Returns true if this point is greater another one
     * @param {fabric.Point} that
     * @return {Boolean}
     */
    gt: function (that) {
      return (this.x > that.x && this.y > that.y);
    },

    /**
     * Returns true if this point is greater than or equal to another one
     * @param {fabric.Point} that
     * @return {Boolean}
     */
    gte: function (that) {
      return (this.x >= that.x && this.y >= that.y);
    },

    /**
     * Returns new point which is the result of linear interpolation with this one and another one
     * @param {fabric.Point} that
     * @param {Number} t , position of interpolation, between 0 and 1 default 0.5
     * @return {fabric.Point}
     */
    lerp: function (that, t) {
      if (typeof t === 'undefined') {
        t = 0.5;
      }
      t = Math.max(Math.min(1, t), 0);
      return new Point(this.x + (that.x - this.x) * t, this.y + (that.y - this.y) * t);
    },

    /**
     * Returns distance from this point and another one
     * @param {fabric.Point} that
     * @return {Number}
     */
    distanceFrom: function (that) {
      var dx = this.x - that.x,
          dy = this.y - that.y;
      return Math.sqrt(dx * dx + dy * dy);
    },

    /**
     * Returns the point between this point and another one
     * @param {fabric.Point} that
     * @return {fabric.Point}
     */
    midPointFrom: function (that) {
      return this.lerp(that);
    },

    /**
     * Returns a new point which is the min of this and another one
     * @param {fabric.Point} that
     * @return {fabric.Point}
     */
    min: function (that) {
      return new Point(Math.min(this.x, that.x), Math.min(this.y, that.y));
    },

    /**
     * Returns a new point which is the max of this and another one
     * @param {fabric.Point} that
     * @return {fabric.Point}
     */
    max: function (that) {
      return new Point(Math.max(this.x, that.x), Math.max(this.y, that.y));
    },

    /**
     * Returns string representation of this point
     * @return {String}
     */
    toString: function () {
      return this.x + ',' + this.y;
    },

    /**
     * Sets x/y of this point
     * @param {Number} x
     * @param {Number} y
     * @chainable
     */
    setXY: function (x, y) {
      this.x = x;
      this.y = y;
      return this;
    },

    /**
     * Sets x of this point
     * @param {Number} x
     * @chainable
     */
    setX: function (x) {
      this.x = x;
      return this;
    },

    /**
     * Sets y of this point
     * @param {Number} y
     * @chainable
     */
    setY: function (y) {
      this.y = y;
      return this;
    },

    /**
     * Sets x/y of this point from another point
     * @param {fabric.Point} that
     * @chainable
     */
    setFromPoint: function (that) {
      this.x = that.x;
      this.y = that.y;
      return this;
    },

    /**
     * Swaps x/y of this point and another point
     * @param {fabric.Point} that
     */
    swap: function (that) {
      var x = this.x,
          y = this.y;
      this.x = that.x;
      this.y = that.y;
      that.x = x;
      that.y = y;
    },

    /**
     * return a cloned instance of the point
     * @return {fabric.Point}
     */
    clone: function () {
      return new Point(this.x, this.y);
    }
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  /* Adaptation of work of Kevin Lindsey (kevin@kevlindev.com) */
  var fabric = global.fabric || (global.fabric = { });

  if (fabric.Intersection) {
    fabric.warn('fabric.Intersection is already defined');
    return;
  }

  /**
   * Intersection class
   * @class fabric.Intersection
   * @memberOf fabric
   * @constructor
   */
  function Intersection(status) {
    this.status = status;
    this.points = [];
  }

  fabric.Intersection = Intersection;

  fabric.Intersection.prototype = /** @lends fabric.Intersection.prototype */ {

    constructor: Intersection,

    /**
     * Appends a point to intersection
     * @param {fabric.Point} point
     * @return {fabric.Intersection} thisArg
     * @chainable
     */
    appendPoint: function (point) {
      this.points.push(point);
      return this;
    },

    /**
     * Appends points to intersection
     * @param {Array} points
     * @return {fabric.Intersection} thisArg
     * @chainable
     */
    appendPoints: function (points) {
      this.points = this.points.concat(points);
      return this;
    }
  };

  /**
   * Checks if one line intersects another
   * TODO: rename in intersectSegmentSegment
   * @static
   * @param {fabric.Point} a1
   * @param {fabric.Point} a2
   * @param {fabric.Point} b1
   * @param {fabric.Point} b2
   * @return {fabric.Intersection}
   */
  fabric.Intersection.intersectLineLine = function (a1, a2, b1, b2) {
    var result,
        uaT = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x),
        ubT = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x),
        uB = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);
    if (uB !== 0) {
      var ua = uaT / uB,
          ub = ubT / uB;
      if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) {
        result = new Intersection('Intersection');
        result.appendPoint(new fabric.Point(a1.x + ua * (a2.x - a1.x), a1.y + ua * (a2.y - a1.y)));
      }
      else {
        result = new Intersection();
      }
    }
    else {
      if (uaT === 0 || ubT === 0) {
        result = new Intersection('Coincident');
      }
      else {
        result = new Intersection('Parallel');
      }
    }
    return result;
  };

  /**
   * Checks if line intersects polygon
   * TODO: rename in intersectSegmentPolygon
   * fix detection of coincident
   * @static
   * @param {fabric.Point} a1
   * @param {fabric.Point} a2
   * @param {Array} points
   * @return {fabric.Intersection}
   */
  fabric.Intersection.intersectLinePolygon = function(a1, a2, points) {
    var result = new Intersection(),
        length = points.length,
        b1, b2, inter;

    for (var i = 0; i < length; i++) {
      b1 = points[i],
      b2 = points[(i + 1) % length],
      inter = Intersection.intersectLineLine(a1, a2, b1, b2);

      result.appendPoints(inter.points);
    }
    if (result.points.length > 0) {
      result.status = 'Intersection';
    }
    return result;
  };

  /**
   * Checks if polygon intersects another polygon
   * @static
   * @param {Array} points1
   * @param {Array} points2
   * @return {fabric.Intersection}
   */
  fabric.Intersection.intersectPolygonPolygon = function (points1, points2) {
    var result = new Intersection(),
        length = points1.length;

    for (var i = 0; i < length; i++) {
      var a1 = points1[i],
          a2 = points1[(i + 1) % length],
          inter = Intersection.intersectLinePolygon(a1, a2, points2);

      result.appendPoints(inter.points);
    }
    if (result.points.length > 0) {
      result.status = 'Intersection';
    }
    return result;
  };

  /**
   * Checks if polygon intersects rectangle
   * @static
   * @param {Array} points
   * @param {fabric.Point} r1
   * @param {fabric.Point} r2
   * @return {fabric.Intersection}
   */
  fabric.Intersection.intersectPolygonRectangle = function (points, r1, r2) {
    var min = r1.min(r2),
        max = r1.max(r2),
        topRight = new fabric.Point(max.x, min.y),
        bottomLeft = new fabric.Point(min.x, max.y),
        inter1 = Intersection.intersectLinePolygon(min, topRight, points),
        inter2 = Intersection.intersectLinePolygon(topRight, max, points),
        inter3 = Intersection.intersectLinePolygon(max, bottomLeft, points),
        inter4 = Intersection.intersectLinePolygon(bottomLeft, min, points),
        result = new Intersection();

    result.appendPoints(inter1.points);
    result.appendPoints(inter2.points);
    result.appendPoints(inter3.points);
    result.appendPoints(inter4.points);

    if (result.points.length > 0) {
      result.status = 'Intersection';
    }
    return result;
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = { });

  if (fabric.Color) {
    fabric.warn('fabric.Color is already defined.');
    return;
  }

  /**
   * Color class
   * The purpose of {@link fabric.Color} is to abstract and encapsulate common color operations;
   * {@link fabric.Color} is a constructor and creates instances of {@link fabric.Color} objects.
   *
   * @class fabric.Color
   * @param {String} color optional in hex or rgb(a) or hsl format or from known color list
   * @return {fabric.Color} thisArg
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-2/#colors}
   */
  function Color(color) {
    if (!color) {
      this.setSource([0, 0, 0, 1]);
    }
    else {
      this._tryParsingColor(color);
    }
  }

  fabric.Color = Color;

  fabric.Color.prototype = /** @lends fabric.Color.prototype */ {

    /**
     * @private
     * @param {String|Array} color Color value to parse
     */
    _tryParsingColor: function(color) {
      var source;

      if (color in Color.colorNameMap) {
        color = Color.colorNameMap[color];
      }

      if (color === 'transparent') {
        source = [255, 255, 255, 0];
      }

      if (!source) {
        source = Color.sourceFromHex(color);
      }
      if (!source) {
        source = Color.sourceFromRgb(color);
      }
      if (!source) {
        source = Color.sourceFromHsl(color);
      }
      if (!source) {
        //if color is not recognize let's make black as canvas does
        source = [0, 0, 0, 1];
      }
      if (source) {
        this.setSource(source);
      }
    },

    /**
     * Adapted from <a href="https://rawgithub.com/mjijackson/mjijackson.github.com/master/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript.html">https://github.com/mjijackson</a>
     * @private
     * @param {Number} r Red color value
     * @param {Number} g Green color value
     * @param {Number} b Blue color value
     * @return {Array} Hsl color
     */
    _rgbToHsl: function(r, g, b) {
      r /= 255, g /= 255, b /= 255;

      var h, s, l,
          max = fabric.util.array.max([r, g, b]),
          min = fabric.util.array.min([r, g, b]);

      l = (max + min) / 2;

      if (max === min) {
        h = s = 0; // achromatic
      }
      else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }

      return [
        Math.round(h * 360),
        Math.round(s * 100),
        Math.round(l * 100)
      ];
    },

    /**
     * Returns source of this color (where source is an array representation; ex: [200, 200, 100, 1])
     * @return {Array}
     */
    getSource: function() {
      return this._source;
    },

    /**
     * Sets source of this color (where source is an array representation; ex: [200, 200, 100, 1])
     * @param {Array} source
     */
    setSource: function(source) {
      this._source = source;
    },

    /**
     * Returns color represenation in RGB format
     * @return {String} ex: rgb(0-255,0-255,0-255)
     */
    toRgb: function() {
      var source = this.getSource();
      return 'rgb(' + source[0] + ',' + source[1] + ',' + source[2] + ')';
    },

    /**
     * Returns color represenation in RGBA format
     * @return {String} ex: rgba(0-255,0-255,0-255,0-1)
     */
    toRgba: function() {
      var source = this.getSource();
      return 'rgba(' + source[0] + ',' + source[1] + ',' + source[2] + ',' + source[3] + ')';
    },

    /**
     * Returns color represenation in HSL format
     * @return {String} ex: hsl(0-360,0%-100%,0%-100%)
     */
    toHsl: function() {
      var source = this.getSource(),
          hsl = this._rgbToHsl(source[0], source[1], source[2]);

      return 'hsl(' + hsl[0] + ',' + hsl[1] + '%,' + hsl[2] + '%)';
    },

    /**
     * Returns color represenation in HSLA format
     * @return {String} ex: hsla(0-360,0%-100%,0%-100%,0-1)
     */
    toHsla: function() {
      var source = this.getSource(),
          hsl = this._rgbToHsl(source[0], source[1], source[2]);

      return 'hsla(' + hsl[0] + ',' + hsl[1] + '%,' + hsl[2] + '%,' + source[3] + ')';
    },

    /**
     * Returns color represenation in HEX format
     * @return {String} ex: FF5555
     */
    toHex: function() {
      var source = this.getSource(), r, g, b;

      r = source[0].toString(16);
      r = (r.length === 1) ? ('0' + r) : r;

      g = source[1].toString(16);
      g = (g.length === 1) ? ('0' + g) : g;

      b = source[2].toString(16);
      b = (b.length === 1) ? ('0' + b) : b;

      return r.toUpperCase() + g.toUpperCase() + b.toUpperCase();
    },

    /**
     * Gets value of alpha channel for this color
     * @return {Number} 0-1
     */
    getAlpha: function() {
      return this.getSource()[3];
    },

    /**
     * Sets value of alpha channel for this color
     * @param {Number} alpha Alpha value 0-1
     * @return {fabric.Color} thisArg
     */
    setAlpha: function(alpha) {
      var source = this.getSource();
      source[3] = alpha;
      this.setSource(source);
      return this;
    },

    /**
     * Transforms color to its grayscale representation
     * @return {fabric.Color} thisArg
     */
    toGrayscale: function() {
      var source = this.getSource(),
          average = parseInt((source[0] * 0.3 + source[1] * 0.59 + source[2] * 0.11).toFixed(0), 10),
          currentAlpha = source[3];
      this.setSource([average, average, average, currentAlpha]);
      return this;
    },

    /**
     * Transforms color to its black and white representation
     * @param {Number} threshold
     * @return {fabric.Color} thisArg
     */
    toBlackWhite: function(threshold) {
      var source = this.getSource(),
          average = (source[0] * 0.3 + source[1] * 0.59 + source[2] * 0.11).toFixed(0),
          currentAlpha = source[3];

      threshold = threshold || 127;

      average = (Number(average) < Number(threshold)) ? 0 : 255;
      this.setSource([average, average, average, currentAlpha]);
      return this;
    },

    /**
     * Overlays color with another color
     * @param {String|fabric.Color} otherColor
     * @return {fabric.Color} thisArg
     */
    overlayWith: function(otherColor) {
      if (!(otherColor instanceof Color)) {
        otherColor = new Color(otherColor);
      }

      var result = [],
          alpha = this.getAlpha(),
          otherAlpha = 0.5,
          source = this.getSource(),
          otherSource = otherColor.getSource();

      for (var i = 0; i < 3; i++) {
        result.push(Math.round((source[i] * (1 - otherAlpha)) + (otherSource[i] * otherAlpha)));
      }

      result[3] = alpha;
      this.setSource(result);
      return this;
    }
  };

  /**
   * Regex matching color in RGB or RGBA formats (ex: rgb(0, 0, 0), rgba(255, 100, 10, 0.5), rgba( 255 , 100 , 10 , 0.5 ), rgb(1,1,1), rgba(100%, 60%, 10%, 0.5))
   * @static
   * @field
   * @memberOf fabric.Color
   */
  fabric.Color.reRGBa = /^rgba?\(\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/;

  /**
   * Regex matching color in HSL or HSLA formats (ex: hsl(200, 80%, 10%), hsla(300, 50%, 80%, 0.5), hsla( 300 , 50% , 80% , 0.5 ))
   * @static
   * @field
   * @memberOf fabric.Color
   */
  fabric.Color.reHSLa = /^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3}\%)\s*,\s*(\d{1,3}\%)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/;

  /**
   * Regex matching color in HEX format (ex: #FF5544CC, #FF5555, 010155, aff)
   * @static
   * @field
   * @memberOf fabric.Color
   */
  fabric.Color.reHex = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i;

  /**
   * Map of the 17 basic color names with HEX code
   * @static
   * @field
   * @memberOf fabric.Color
   * @see: http://www.w3.org/TR/CSS2/syndata.html#color-units
   */
  fabric.Color.colorNameMap = {
    aqua:    '#00FFFF',
    black:   '#000000',
    blue:    '#0000FF',
    fuchsia: '#FF00FF',
    gray:    '#808080',
    grey:    '#808080',
    green:   '#008000',
    lime:    '#00FF00',
    maroon:  '#800000',
    navy:    '#000080',
    olive:   '#808000',
    orange:  '#FFA500',
    purple:  '#800080',
    red:     '#FF0000',
    silver:  '#C0C0C0',
    teal:    '#008080',
    white:   '#FFFFFF',
    yellow:  '#FFFF00'
  };

  /**
   * @private
   * @param {Number} p
   * @param {Number} q
   * @param {Number} t
   * @return {Number}
   */
  function hue2rgb(p, q, t) {
    if (t < 0) {
      t += 1;
    }
    if (t > 1) {
      t -= 1;
    }
    if (t < 1/6) {
      return p + (q - p) * 6 * t;
    }
    if (t < 1/2) {
      return q;
    }
    if (t < 2/3) {
      return p + (q - p) * (2/3 - t) * 6;
    }
    return p;
  }

  /**
   * Returns new color object, when given a color in RGB format
   * @memberOf fabric.Color
   * @param {String} color Color value ex: rgb(0-255,0-255,0-255)
   * @return {fabric.Color}
   */
  fabric.Color.fromRgb = function(color) {
    return Color.fromSource(Color.sourceFromRgb(color));
  };

  /**
   * Returns array representation (ex: [100, 100, 200, 1]) of a color that's in RGB or RGBA format
   * @memberOf fabric.Color
   * @param {String} color Color value ex: rgb(0-255,0-255,0-255), rgb(0%-100%,0%-100%,0%-100%)
   * @return {Array} source
   */
  fabric.Color.sourceFromRgb = function(color) {
    var match = color.match(Color.reRGBa);
    if (match) {
      var r = parseInt(match[1], 10) / (/%$/.test(match[1]) ? 100 : 1) * (/%$/.test(match[1]) ? 255 : 1),
          g = parseInt(match[2], 10) / (/%$/.test(match[2]) ? 100 : 1) * (/%$/.test(match[2]) ? 255 : 1),
          b = parseInt(match[3], 10) / (/%$/.test(match[3]) ? 100 : 1) * (/%$/.test(match[3]) ? 255 : 1);

      return [
        parseInt(r, 10),
        parseInt(g, 10),
        parseInt(b, 10),
        match[4] ? parseFloat(match[4]) : 1
      ];
    }
  };

  /**
   * Returns new color object, when given a color in RGBA format
   * @static
   * @function
   * @memberOf fabric.Color
   * @param {String} color
   * @return {fabric.Color}
   */
  fabric.Color.fromRgba = Color.fromRgb;

  /**
   * Returns new color object, when given a color in HSL format
   * @param {String} color Color value ex: hsl(0-260,0%-100%,0%-100%)
   * @memberOf fabric.Color
   * @return {fabric.Color}
   */
  fabric.Color.fromHsl = function(color) {
    return Color.fromSource(Color.sourceFromHsl(color));
  };

  /**
   * Returns array representation (ex: [100, 100, 200, 1]) of a color that's in HSL or HSLA format.
   * Adapted from <a href="https://rawgithub.com/mjijackson/mjijackson.github.com/master/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript.html">https://github.com/mjijackson</a>
   * @memberOf fabric.Color
   * @param {String} color Color value ex: hsl(0-360,0%-100%,0%-100%) or hsla(0-360,0%-100%,0%-100%, 0-1)
   * @return {Array} source
   * @see http://http://www.w3.org/TR/css3-color/#hsl-color
   */
  fabric.Color.sourceFromHsl = function(color) {
    var match = color.match(Color.reHSLa);
    if (!match) {
      return;
    }

    var h = (((parseFloat(match[1]) % 360) + 360) % 360) / 360,
        s = parseFloat(match[2]) / (/%$/.test(match[2]) ? 100 : 1),
        l = parseFloat(match[3]) / (/%$/.test(match[3]) ? 100 : 1),
        r, g, b;

    if (s === 0) {
      r = g = b = l;
    }
    else {
      var q = l <= 0.5 ? l * (s + 1) : l + s - l * s,
          p = l * 2 - q;

      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }

    return [
      Math.round(r * 255),
      Math.round(g * 255),
      Math.round(b * 255),
      match[4] ? parseFloat(match[4]) : 1
    ];
  };

  /**
   * Returns new color object, when given a color in HSLA format
   * @static
   * @function
   * @memberOf fabric.Color
   * @param {String} color
   * @return {fabric.Color}
   */
  fabric.Color.fromHsla = Color.fromHsl;

  /**
   * Returns new color object, when given a color in HEX format
   * @static
   * @memberOf fabric.Color
   * @param {String} color Color value ex: FF5555
   * @return {fabric.Color}
   */
  fabric.Color.fromHex = function(color) {
    return Color.fromSource(Color.sourceFromHex(color));
  };

  /**
   * Returns array representation (ex: [100, 100, 200, 1]) of a color that's in HEX format
   * @static
   * @memberOf fabric.Color
   * @param {String} color ex: FF5555 or FF5544CC (RGBa)
   * @return {Array} source
   */
  fabric.Color.sourceFromHex = function(color) {
    if (color.match(Color.reHex)) {
      var value = color.slice(color.indexOf('#') + 1),
          isShortNotation = (value.length === 3 || value.length === 4),
          isRGBa = (value.length === 8 || value.length === 4),
          r = isShortNotation ? (value.charAt(0) + value.charAt(0)) : value.substring(0, 2),
          g = isShortNotation ? (value.charAt(1) + value.charAt(1)) : value.substring(2, 4),
          b = isShortNotation ? (value.charAt(2) + value.charAt(2)) : value.substring(4, 6),
          a = isRGBa ? (isShortNotation ? (value.charAt(3) + value.charAt(3)) : value.substring(6, 8)) : 'FF';

      return [
        parseInt(r, 16),
        parseInt(g, 16),
        parseInt(b, 16),
        parseFloat((parseInt(a, 16) / 255).toFixed(2))
      ];
    }
  };

  /**
   * Returns new color object, when given color in array representation (ex: [200, 100, 100, 0.5])
   * @static
   * @memberOf fabric.Color
   * @param {Array} source
   * @return {fabric.Color}
   */
  fabric.Color.fromSource = function(source) {
    var oColor = new Color();
    oColor.setSource(source);
    return oColor;
  };

})(typeof exports !== 'undefined' ? exports : this);


(function() {

  /* _FROM_SVG_START_ */
  function getColorStop(el) {
    var style = el.getAttribute('style'),
        offset = el.getAttribute('offset') || 0,
        color, colorAlpha, opacity;

    // convert percents to absolute values
    offset = parseFloat(offset) / (/%$/.test(offset) ? 100 : 1);
    offset = offset < 0 ? 0 : offset > 1 ? 1 : offset;
    if (style) {
      var keyValuePairs = style.split(/\s*;\s*/);

      if (keyValuePairs[keyValuePairs.length - 1] === '') {
        keyValuePairs.pop();
      }

      for (var i = keyValuePairs.length; i--; ) {

        var split = keyValuePairs[i].split(/\s*:\s*/),
            key = split[0].trim(),
            value = split[1].trim();

        if (key === 'stop-color') {
          color = value;
        }
        else if (key === 'stop-opacity') {
          opacity = value;
        }
      }
    }

    if (!color) {
      color = el.getAttribute('stop-color') || 'rgb(0,0,0)';
    }
    if (!opacity) {
      opacity = el.getAttribute('stop-opacity');
    }

    color = new fabric.Color(color);
    colorAlpha = color.getAlpha();
    opacity = isNaN(parseFloat(opacity)) ? 1 : parseFloat(opacity);
    opacity *= colorAlpha;

    return {
      offset: offset,
      color: color.toRgb(),
      opacity: opacity
    };
  }

  function getLinearCoords(el) {
    return {
      x1: el.getAttribute('x1') || 0,
      y1: el.getAttribute('y1') || 0,
      x2: el.getAttribute('x2') || '100%',
      y2: el.getAttribute('y2') || 0
    };
  }

  function getRadialCoords(el) {
    return {
      x1: el.getAttribute('fx') || el.getAttribute('cx') || '50%',
      y1: el.getAttribute('fy') || el.getAttribute('cy') || '50%',
      r1: 0,
      x2: el.getAttribute('cx') || '50%',
      y2: el.getAttribute('cy') || '50%',
      r2: el.getAttribute('r') || '50%'
    };
  }
  /* _FROM_SVG_END_ */

  /**
   * Gradient class
   * @class fabric.Gradient
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-2#gradients}
   * @see {@link fabric.Gradient#initialize} for constructor definition
   */
  fabric.Gradient = fabric.util.createClass(/** @lends fabric.Gradient.prototype */ {

    /**
     * Horizontal offset for aligning gradients coming from SVG when outside pathgroups
     * @type Number
     * @default 0
     */
    offsetX: 0,

    /**
     * Vertical offset for aligning gradients coming from SVG when outside pathgroups
     * @type Number
     * @default 0
     */
    offsetY: 0,

    /**
     * Constructor
     * @param {Object} [options] Options object with type, coords, gradientUnits and colorStops
     * @return {fabric.Gradient} thisArg
     */
    initialize: function(options) {
      options || (options = { });

      var coords = { };

      this.id = fabric.Object.__uid++;
      this.type = options.type || 'linear';

      coords = {
        x1: options.coords.x1 || 0,
        y1: options.coords.y1 || 0,
        x2: options.coords.x2 || 0,
        y2: options.coords.y2 || 0
      };

      if (this.type === 'radial') {
        coords.r1 = options.coords.r1 || 0;
        coords.r2 = options.coords.r2 || 0;
      }
      this.coords = coords;
      this.colorStops = options.colorStops.slice();
      if (options.gradientTransform) {
        this.gradientTransform = options.gradientTransform;
      }
      this.offsetX = options.offsetX || this.offsetX;
      this.offsetY = options.offsetY || this.offsetY;
    },

    /**
     * Adds another colorStop
     * @param {Object} colorStop Object with offset and color
     * @return {fabric.Gradient} thisArg
     */
    addColorStop: function(colorStop) {
      for (var position in colorStop) {
        var color = new fabric.Color(colorStop[position]);
        this.colorStops.push({
          offset: position,
          color: color.toRgb(),
          opacity: color.getAlpha()
        });
      }
      return this;
    },

    /**
     * Returns object representation of a gradient
     * @return {Object}
     */
    toObject: function() {
      return {
        type: this.type,
        coords: this.coords,
        colorStops: this.colorStops,
        offsetX: this.offsetX,
        offsetY: this.offsetY,
        gradientTransform: this.gradientTransform ? this.gradientTransform.concat() : this.gradientTransform
      };
    },

    /* _TO_SVG_START_ */
    /**
     * Returns SVG representation of an gradient
     * @param {Object} object Object to create a gradient for
     * @return {String} SVG representation of an gradient (linear/radial)
     */
    toSVG: function(object) {
      var coords = fabric.util.object.clone(this.coords),
          markup, commonAttributes;

      // colorStops must be sorted ascending
      this.colorStops.sort(function(a, b) {
        return a.offset - b.offset;
      });

      if (!(object.group && object.group.type === 'path-group')) {
        for (var prop in coords) {
          if (prop === 'x1' || prop === 'x2' || prop === 'r2') {
            coords[prop] += this.offsetX - object.width / 2;
          }
          else if (prop === 'y1' || prop === 'y2') {
            coords[prop] += this.offsetY - object.height / 2;
          }
        }
      }

      commonAttributes = 'id="SVGID_' + this.id +
                     '" gradientUnits="userSpaceOnUse"';
      if (this.gradientTransform) {
        commonAttributes += ' gradientTransform="matrix(' + this.gradientTransform.join(' ') + ')" ';
      }
      if (this.type === 'linear') {
        markup = [
          //jscs:disable validateIndentation
          '<linearGradient ',
            commonAttributes,
            ' x1="', coords.x1,
            '" y1="', coords.y1,
            '" x2="', coords.x2,
            '" y2="', coords.y2,
          '">\n'
          //jscs:enable validateIndentation
        ];
      }
      else if (this.type === 'radial') {
        markup = [
          //jscs:disable validateIndentation
          '<radialGradient ',
            commonAttributes,
            ' cx="', coords.x2,
            '" cy="', coords.y2,
            '" r="', coords.r2,
            '" fx="', coords.x1,
            '" fy="', coords.y1,
          '">\n'
          //jscs:enable validateIndentation
        ];
      }

      for (var i = 0; i < this.colorStops.length; i++) {
        markup.push(
          //jscs:disable validateIndentation
          '<stop ',
            'offset="', (this.colorStops[i].offset * 100) + '%',
            '" style="stop-color:', this.colorStops[i].color,
            (this.colorStops[i].opacity != null ? ';stop-opacity: ' + this.colorStops[i].opacity : ';'),
          '"/>\n'
          //jscs:enable validateIndentation
        );
      }

      markup.push((this.type === 'linear' ? '</linearGradient>\n' : '</radialGradient>\n'));

      return markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * Returns an instance of CanvasGradient
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Object} object
     * @return {CanvasGradient}
     */
    toLive: function(ctx, object) {
      var gradient, prop, coords = fabric.util.object.clone(this.coords);

      if (!this.type) {
        return;
      }

      if (object.group && object.group.type === 'path-group') {
        for (prop in coords) {
          if (prop === 'x1' || prop === 'x2') {
            coords[prop] += -this.offsetX + object.width / 2;
          }
          else if (prop === 'y1' || prop === 'y2') {
            coords[prop] += -this.offsetY + object.height / 2;
          }
        }
      }

      if (this.type === 'linear') {
        gradient = ctx.createLinearGradient(
          coords.x1, coords.y1, coords.x2, coords.y2);
      }
      else if (this.type === 'radial') {
        gradient = ctx.createRadialGradient(
          coords.x1, coords.y1, coords.r1, coords.x2, coords.y2, coords.r2);
      }

      for (var i = 0, len = this.colorStops.length; i < len; i++) {
        var color = this.colorStops[i].color,
            opacity = this.colorStops[i].opacity,
            offset = this.colorStops[i].offset;

        if (typeof opacity !== 'undefined') {
          color = new fabric.Color(color).setAlpha(opacity).toRgba();
        }
        gradient.addColorStop(parseFloat(offset), color);
      }

      return gradient;
    }
  });

  fabric.util.object.extend(fabric.Gradient, {

    /* _FROM_SVG_START_ */
    /**
     * Returns {@link fabric.Gradient} instance from an SVG element
     * @static
     * @memberOf fabric.Gradient
     * @param {SVGGradientElement} el SVG gradient element
     * @param {fabric.Object} instance
     * @return {fabric.Gradient} Gradient instance
     * @see http://www.w3.org/TR/SVG/pservers.html#LinearGradientElement
     * @see http://www.w3.org/TR/SVG/pservers.html#RadialGradientElement
     */
    fromElement: function(el, instance) {

      /**
       *  @example:
       *
       *  <linearGradient id="linearGrad1">
       *    <stop offset="0%" stop-color="white"/>
       *    <stop offset="100%" stop-color="black"/>
       *  </linearGradient>
       *
       *  OR
       *
       *  <linearGradient id="linearGrad2">
       *    <stop offset="0" style="stop-color:rgb(255,255,255)"/>
       *    <stop offset="1" style="stop-color:rgb(0,0,0)"/>
       *  </linearGradient>
       *
       *  OR
       *
       *  <radialGradient id="radialGrad1">
       *    <stop offset="0%" stop-color="white" stop-opacity="1" />
       *    <stop offset="50%" stop-color="black" stop-opacity="0.5" />
       *    <stop offset="100%" stop-color="white" stop-opacity="1" />
       *  </radialGradient>
       *
       *  OR
       *
       *  <radialGradient id="radialGrad2">
       *    <stop offset="0" stop-color="rgb(255,255,255)" />
       *    <stop offset="0.5" stop-color="rgb(0,0,0)" />
       *    <stop offset="1" stop-color="rgb(255,255,255)" />
       *  </radialGradient>
       *
       */

      var colorStopEls = el.getElementsByTagName('stop'),
          type,
          gradientUnits = el.getAttribute('gradientUnits') || 'objectBoundingBox',
          gradientTransform = el.getAttribute('gradientTransform'),
          colorStops = [],
          coords, ellipseMatrix;

      if (el.nodeName === 'linearGradient' || el.nodeName === 'LINEARGRADIENT') {
        type = 'linear';
      }
      else {
        type = 'radial';
      }

      if (type === 'linear') {
        coords = getLinearCoords(el);
      }
      else if (type === 'radial') {
        coords = getRadialCoords(el);
      }

      for (var i = colorStopEls.length; i--; ) {
        colorStops.push(getColorStop(colorStopEls[i]));
      }

      ellipseMatrix = _convertPercentUnitsToValues(instance, coords, gradientUnits);

      var gradient = new fabric.Gradient({
        type: type,
        coords: coords,
        colorStops: colorStops,
        offsetX: -instance.left,
        offsetY: -instance.top
      });

      if (gradientTransform || ellipseMatrix !== '') {
        gradient.gradientTransform = fabric.parseTransformAttribute((gradientTransform || '') + ellipseMatrix);
      }
      return gradient;
    },
    /* _FROM_SVG_END_ */

    /**
     * Returns {@link fabric.Gradient} instance from its object representation
     * @static
     * @memberOf fabric.Gradient
     * @param {Object} obj
     * @param {Object} [options] Options object
     */
    forObject: function(obj, options) {
      options || (options = { });
      _convertPercentUnitsToValues(obj, options.coords, 'userSpaceOnUse');
      return new fabric.Gradient(options);
    }
  });

  /**
   * @private
   */
  function _convertPercentUnitsToValues(object, options, gradientUnits) {
    var propValue, addFactor = 0, multFactor = 1, ellipseMatrix = '';
    for (var prop in options) {
      if (options[prop] === 'Infinity') {
        options[prop] = 1;
      }
      else if (options[prop] === '-Infinity') {
        options[prop] = 0;
      }
      propValue = parseFloat(options[prop], 10);
      if (typeof options[prop] === 'string' && /^\d+%$/.test(options[prop])) {
        multFactor = 0.01;
      }
      else {
        multFactor = 1;
      }
      if (prop === 'x1' || prop === 'x2' || prop === 'r2') {
        multFactor *= gradientUnits === 'objectBoundingBox' ? object.width : 1;
        addFactor = gradientUnits === 'objectBoundingBox' ? object.left || 0 : 0;
      }
      else if (prop === 'y1' || prop === 'y2') {
        multFactor *= gradientUnits === 'objectBoundingBox' ? object.height : 1;
        addFactor = gradientUnits === 'objectBoundingBox' ? object.top || 0 : 0;
      }
      options[prop] = propValue * multFactor + addFactor;
    }
    if (object.type === 'ellipse' &&
        options.r2 !== null &&
        gradientUnits === 'objectBoundingBox' &&
        object.rx !== object.ry) {

      var scaleFactor = object.ry/object.rx;
      ellipseMatrix = ' scale(1, ' + scaleFactor + ')';
      if (options.y1) {
        options.y1 /= scaleFactor;
      }
      if (options.y2) {
        options.y2 /= scaleFactor;
      }
    }
    return ellipseMatrix;
  }
})();


/**
 * Pattern class
 * @class fabric.Pattern
 * @see {@link http://fabricjs.com/patterns|Pattern demo}
 * @see {@link http://fabricjs.com/dynamic-patterns|DynamicPattern demo}
 * @see {@link fabric.Pattern#initialize} for constructor definition
 */
fabric.Pattern = fabric.util.createClass(/** @lends fabric.Pattern.prototype */ {

  /**
   * Repeat property of a pattern (one of repeat, repeat-x, repeat-y or no-repeat)
   * @type String
   * @default
   */
  repeat: 'repeat',

  /**
   * Pattern horizontal offset from object's left/top corner
   * @type Number
   * @default
   */
  offsetX: 0,

  /**
   * Pattern vertical offset from object's left/top corner
   * @type Number
   * @default
   */
  offsetY: 0,

  /**
   * Constructor
   * @param {Object} [options] Options object
   * @return {fabric.Pattern} thisArg
   */
  initialize: function(options) {
    options || (options = { });

    this.id = fabric.Object.__uid++;

    if (options.source) {
      if (typeof options.source === 'string') {
        // function string
        if (typeof fabric.util.getFunctionBody(options.source) !== 'undefined') {
          this.source = new Function(fabric.util.getFunctionBody(options.source));
        }
        else {
          // img src string
          var _this = this;
          this.source = fabric.util.createImage();
          fabric.util.loadImage(options.source, function(img) {
            _this.source = img;
          });
        }
      }
      else {
        // img element
        this.source = options.source;
      }
    }
    if (options.repeat) {
      this.repeat = options.repeat;
    }
    if (options.offsetX) {
      this.offsetX = options.offsetX;
    }
    if (options.offsetY) {
      this.offsetY = options.offsetY;
    }
  },

  /**
   * Returns object representation of a pattern
   * @return {Object} Object representation of a pattern instance
   */
  toObject: function() {

    var source;

    // callback
    if (typeof this.source === 'function') {
      source = String(this.source);
    }
    // <img> element
    else if (typeof this.source.src === 'string') {
      source = this.source.src;
    }
    // <canvas> element
    else if (typeof this.source === 'object' && this.source.toDataURL) {
      source = this.source.toDataURL();
    }

    return {
      source: source,
      repeat: this.repeat,
      offsetX: this.offsetX,
      offsetY: this.offsetY
    };
  },

  /* _TO_SVG_START_ */
  /**
   * Returns SVG representation of a pattern
   * @param {fabric.Object} object
   * @return {String} SVG representation of a pattern
   */
  toSVG: function(object) {
    var patternSource = typeof this.source === 'function' ? this.source() : this.source,
        patternWidth = patternSource.width / object.getWidth(),
        patternHeight = patternSource.height / object.getHeight(),
        patternOffsetX = this.offsetX / object.getWidth(),
        patternOffsetY = this.offsetY / object.getHeight(),
        patternImgSrc = '';
    if (this.repeat === 'repeat-x' || this.repeat === 'no-repeat') {
      patternHeight = 1;
    }
    if (this.repeat === 'repeat-y' || this.repeat === 'no-repeat') {
      patternWidth = 1;
    }
    if (patternSource.src) {
      patternImgSrc = patternSource.src;
    }
    else if (patternSource.toDataURL) {
      patternImgSrc = patternSource.toDataURL();
    }

    return '<pattern id="SVGID_' + this.id +
                  '" x="' + patternOffsetX +
                  '" y="' + patternOffsetY +
                  '" width="' + patternWidth +
                  '" height="' + patternHeight + '">\n' +
             '<image x="0" y="0"' +
                    ' width="' + patternSource.width +
                    '" height="' + patternSource.height +
                    '" xlink:href="' + patternImgSrc +
             '"></image>\n' +
           '</pattern>\n';
  },
  /* _TO_SVG_END_ */

  /**
   * Returns an instance of CanvasPattern
   * @param {CanvasRenderingContext2D} ctx Context to create pattern
   * @return {CanvasPattern}
   */
  toLive: function(ctx) {
    var source = typeof this.source === 'function'
      ? this.source()
      : this.source;

    // if the image failed to load, return, and allow rest to continue loading
    if (!source) {
      return '';
    }

    // if an image
    if (typeof source.src !== 'undefined') {
      if (!source.complete) {
        return '';
      }
      if (source.naturalWidth === 0 || source.naturalHeight === 0) {
        return '';
      }
    }
    return ctx.createPattern(source, this.repeat);
  }
});


(function(global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = { }),
      toFixed = fabric.util.toFixed;

  if (fabric.Shadow) {
    fabric.warn('fabric.Shadow is already defined.');
    return;
  }

  /**
   * Shadow class
   * @class fabric.Shadow
   * @see {@link http://fabricjs.com/shadows|Shadow demo}
   * @see {@link fabric.Shadow#initialize} for constructor definition
   */
  fabric.Shadow = fabric.util.createClass(/** @lends fabric.Shadow.prototype */ {

    /**
     * Shadow color
     * @type String
     * @default
     */
    color: 'rgb(0,0,0)',

    /**
     * Shadow blur
     * @type Number
     */
    blur: 0,

    /**
     * Shadow horizontal offset
     * @type Number
     * @default
     */
    offsetX: 0,

    /**
     * Shadow vertical offset
     * @type Number
     * @default
     */
    offsetY: 0,

    /**
     * Whether the shadow should affect stroke operations
     * @type Boolean
     * @default
     */
    affectStroke: false,

    /**
     * Indicates whether toObject should include default values
     * @type Boolean
     * @default
     */
    includeDefaultValues: true,

    /**
     * Constructor
     * @param {Object|String} [options] Options object with any of color, blur, offsetX, offsetX properties or string (e.g. "rgba(0,0,0,0.2) 2px 2px 10px, "2px 2px 10px rgba(0,0,0,0.2)")
     * @return {fabric.Shadow} thisArg
     */
    initialize: function(options) {

      if (typeof options === 'string') {
        options = this._parseShadow(options);
      }

      for (var prop in options) {
        this[prop] = options[prop];
      }

      this.id = fabric.Object.__uid++;
    },

    /**
     * @private
     * @param {String} shadow Shadow value to parse
     * @return {Object} Shadow object with color, offsetX, offsetY and blur
     */
    _parseShadow: function(shadow) {
      var shadowStr = shadow.trim(),
          offsetsAndBlur = fabric.Shadow.reOffsetsAndBlur.exec(shadowStr) || [ ],
          color = shadowStr.replace(fabric.Shadow.reOffsetsAndBlur, '') || 'rgb(0,0,0)';

      return {
        color: color.trim(),
        offsetX: parseInt(offsetsAndBlur[1], 10) || 0,
        offsetY: parseInt(offsetsAndBlur[2], 10) || 0,
        blur: parseInt(offsetsAndBlur[3], 10) || 0
      };
    },

    /**
     * Returns a string representation of an instance
     * @see http://www.w3.org/TR/css-text-decor-3/#text-shadow
     * @return {String} Returns CSS3 text-shadow declaration
     */
    toString: function() {
      return [this.offsetX, this.offsetY, this.blur, this.color].join('px ');
    },

    /* _TO_SVG_START_ */
    /**
     * Returns SVG representation of a shadow
     * @param {fabric.Object} object
     * @return {String} SVG representation of a shadow
     */
    toSVG: function(object) {
      var fBoxX = 40, fBoxY = 40, NUM_FRACTION_DIGITS = fabric.Object.NUM_FRACTION_DIGITS,
          offset = fabric.util.rotateVector(
            { x: this.offsetX, y: this.offsetY },
            fabric.util.degreesToRadians(-object.angle)),
          BLUR_BOX = 20;

      if (object.width && object.height) {
        //http://www.w3.org/TR/SVG/filters.html#FilterEffectsRegion
        // we add some extra space to filter box to contain the blur ( 20 )
        fBoxX = toFixed((Math.abs(offset.x) + this.blur) / object.width, NUM_FRACTION_DIGITS) * 100 + BLUR_BOX;
        fBoxY = toFixed((Math.abs(offset.y) + this.blur) / object.height, NUM_FRACTION_DIGITS) * 100 + BLUR_BOX;
      }
      if (object.flipX) {
        offset.x *= -1;
      }
      if (object.flipY) {
        offset.y *= -1;
      }
      return (
        '<filter id="SVGID_' + this.id + '" y="-' + fBoxY + '%" height="' + (100 + 2 * fBoxY) + '%" ' +
          'x="-' + fBoxX + '%" width="' + (100 + 2 * fBoxX) + '%" ' + '>\n' +
          '\t<feGaussianBlur in="SourceAlpha" stdDeviation="' +
            toFixed(this.blur ? this.blur / 2 : 0, NUM_FRACTION_DIGITS) + '"></feGaussianBlur>\n' +
          '\t<feOffset dx="' + toFixed(offset.x, NUM_FRACTION_DIGITS) +
          '" dy="' + toFixed(offset.y, NUM_FRACTION_DIGITS) + '" result="oBlur" ></feOffset>\n' +
          '\t<feFlood flood-color="' + this.color + '"/>\n' +
          '\t<feComposite in2="oBlur" operator="in" />\n' +
          '\t<feMerge>\n' +
            '\t\t<feMergeNode></feMergeNode>\n' +
            '\t\t<feMergeNode in="SourceGraphic"></feMergeNode>\n' +
          '\t</feMerge>\n' +
        '</filter>\n');
    },
    /* _TO_SVG_END_ */

    /**
     * Returns object representation of a shadow
     * @return {Object} Object representation of a shadow instance
     */
    toObject: function() {
      if (this.includeDefaultValues) {
        return {
          color: this.color,
          blur: this.blur,
          offsetX: this.offsetX,
          offsetY: this.offsetY,
          affectStroke: this.affectStroke
        };
      }
      var obj = { }, proto = fabric.Shadow.prototype;

      ['color', 'blur', 'offsetX', 'offsetY', 'affectStroke'].forEach(function(prop) {
        if (this[prop] !== proto[prop]) {
          obj[prop] = this[prop];
        }
      }, this);

      return obj;
    }
  });

  /**
   * Regex matching shadow offsetX, offsetY and blur (ex: "2px 2px 10px rgba(0,0,0,0.2)", "rgb(0,255,0) 2px 2px")
   * @static
   * @field
   * @memberOf fabric.Shadow
   */
  fabric.Shadow.reOffsetsAndBlur = /(?:\s|^)(-?\d+(?:px)?(?:\s?|$))?(-?\d+(?:px)?(?:\s?|$))?(\d+(?:px)?)?(?:\s?|$)(?:$|\s)/;

})(typeof exports !== 'undefined' ? exports : this);


(function () {

  'use strict';

  if (fabric.StaticCanvas) {
    fabric.warn('fabric.StaticCanvas is already defined.');
    return;
  }

  // aliases for faster resolution
  var extend = fabric.util.object.extend,
      getElementOffset = fabric.util.getElementOffset,
      removeFromArray = fabric.util.removeFromArray,
      toFixed = fabric.util.toFixed,

      CANVAS_INIT_ERROR = new Error('Could not initialize `canvas` element');

  /**
   * Static canvas class
   * @class fabric.StaticCanvas
   * @mixes fabric.Collection
   * @mixes fabric.Observable
   * @see {@link http://fabricjs.com/static_canvas|StaticCanvas demo}
   * @see {@link fabric.StaticCanvas#initialize} for constructor definition
   * @fires before:render
   * @fires after:render
   * @fires canvas:cleared
   * @fires object:added
   * @fires object:removed
   */
  fabric.StaticCanvas = fabric.util.createClass(/** @lends fabric.StaticCanvas.prototype */ {

    /**
     * Constructor
     * @param {HTMLElement | String} el &lt;canvas> element to initialize instance on
     * @param {Object} [options] Options object
     * @return {Object} thisArg
     */
    initialize: function(el, options) {
      options || (options = { });

      this._initStatic(el, options);
    },

    /**
     * Background color of canvas instance.
     * Should be set via {@link fabric.StaticCanvas#setBackgroundColor}.
     * @type {(String|fabric.Pattern)}
     * @default
     */
    backgroundColor: '',

    /**
     * Background image of canvas instance.
     * Should be set via {@link fabric.StaticCanvas#setBackgroundImage}.
     * <b>Backwards incompatibility note:</b> The "backgroundImageOpacity"
     * and "backgroundImageStretch" properties are deprecated since 1.3.9.
     * Use {@link fabric.Image#opacity}, {@link fabric.Image#width} and {@link fabric.Image#height}.
     * @type fabric.Image
     * @default
     */
    backgroundImage: null,

    /**
     * Overlay color of canvas instance.
     * Should be set via {@link fabric.StaticCanvas#setOverlayColor}
     * @since 1.3.9
     * @type {(String|fabric.Pattern)}
     * @default
     */
    overlayColor: '',

    /**
     * Overlay image of canvas instance.
     * Should be set via {@link fabric.StaticCanvas#setOverlayImage}.
     * <b>Backwards incompatibility note:</b> The "overlayImageLeft"
     * and "overlayImageTop" properties are deprecated since 1.3.9.
     * Use {@link fabric.Image#left} and {@link fabric.Image#top}.
     * @type fabric.Image
     * @default
     */
    overlayImage: null,

    /**
     * Indicates whether toObject/toDatalessObject should include default values
     * @type Boolean
     * @default
     */
    includeDefaultValues: true,

    /**
     * Indicates whether objects' state should be saved
     * @type Boolean
     * @default
     */
    stateful: true,

    /**
     * Indicates whether {@link fabric.Collection.add}, {@link fabric.Collection.insertAt} and {@link fabric.Collection.remove} should also re-render canvas.
     * Disabling this option could give a great performance boost when adding/removing a lot of objects to/from canvas at once
     * (followed by a manual rendering after addition/deletion)
     * @type Boolean
     * @default
     */
    renderOnAddRemove: true,

    /**
     * Function that determines clipping of entire canvas area
     * Being passed context as first argument. See clipping canvas area in {@link https://github.com/kangax/fabric.js/wiki/FAQ}
     * @type Function
     * @default
     */
    clipTo: null,

    /**
     * Indicates whether object controls (borders/controls) are rendered above overlay image
     * @type Boolean
     * @default
     */
    controlsAboveOverlay: false,

    /**
     * Indicates whether the browser can be scrolled when using a touchscreen and dragging on the canvas
     * @type Boolean
     * @default
     */
    allowTouchScrolling: false,

    /**
     * Indicates whether this canvas will use image smoothing, this is on by default in browsers
     * @type Boolean
     * @default
     */
    imageSmoothingEnabled: true,

    /**
     * The transformation (in the format of Canvas transform) which focuses the viewport
     * @type Array
     * @default
     */
    viewportTransform: [1, 0, 0, 1, 0, 0],

    /**
     * if set to false background image is not affected by viewport transform
     * @since 1.6.3
     * @type Boolean
     * @default
     */
    backgroundVpt: true,

    /**
     * if set to false overlya image is not affected by viewport transform
     * @since 1.6.3
     * @type Boolean
     * @default
     */
    overlayVpt: true,

    /**
     * Callback; invoked right before object is about to be scaled/rotated
     */
    onBeforeScaleRotate: function () {
      /* NOOP */
    },

    /**
     * When true, canvas is scaled by devicePixelRatio for better rendering on retina screens
     */
    enableRetinaScaling: true,

    /**
     * @private
     * @param {HTMLElement | String} el &lt;canvas> element to initialize instance on
     * @param {Object} [options] Options object
     */
    _initStatic: function(el, options) {
      var cb = fabric.StaticCanvas.prototype.renderAll.bind(this);
      this._objects = [];
      this._createLowerCanvas(el);
      this._initOptions(options);
      this._setImageSmoothing();

      // only initialize retina scaling once
      if (!this.interactive) {
        this._initRetinaScaling();
      }

      if (options.overlayImage) {
        this.setOverlayImage(options.overlayImage, cb);
      }
      if (options.backgroundImage) {
        this.setBackgroundImage(options.backgroundImage, cb);
      }
      if (options.backgroundColor) {
        this.setBackgroundColor(options.backgroundColor, cb);
      }
      if (options.overlayColor) {
        this.setOverlayColor(options.overlayColor, cb);
      }
      this.calcOffset();
    },

    /**
     * @private
     */
    _isRetinaScaling: function() {
      return (fabric.devicePixelRatio !== 1 && this.enableRetinaScaling);
    },

    /**
     * @private
     * @return {Number} retinaScaling if applied, otherwise 1;
     */
    getRetinaScaling: function() {
      return this._isRetinaScaling() ? fabric.devicePixelRatio : 1;
    },

    /**
     * @private
     */
    _initRetinaScaling: function() {
      if (!this._isRetinaScaling()) {
        return;
      }

      this.lowerCanvasEl.setAttribute('width', this.width * fabric.devicePixelRatio);
      this.lowerCanvasEl.setAttribute('height', this.height * fabric.devicePixelRatio);

      this.contextContainer.scale(fabric.devicePixelRatio, fabric.devicePixelRatio);
    },

    /**
     * Calculates canvas element offset relative to the document
     * This method is also attached as "resize" event handler of window
     * @return {fabric.Canvas} instance
     * @chainable
     */
    calcOffset: function () {
      this._offset = getElementOffset(this.lowerCanvasEl);
      return this;
    },

    /**
     * Sets {@link fabric.StaticCanvas#overlayImage|overlay image} for this canvas
     * @param {(fabric.Image|String)} image fabric.Image instance or URL of an image to set overlay to
     * @param {Function} callback callback to invoke when image is loaded and set as an overlay
     * @param {Object} [options] Optional options to set for the {@link fabric.Image|overlay image}.
     * @return {fabric.Canvas} thisArg
     * @chainable
     * @see {@link http://jsfiddle.net/fabricjs/MnzHT/|jsFiddle demo}
     * @example <caption>Normal overlayImage with left/top = 0</caption>
     * canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
     *   // Needed to position overlayImage at 0/0
     *   originX: 'left',
     *   originY: 'top'
     * });
     * @example <caption>overlayImage with different properties</caption>
     * canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
     *   opacity: 0.5,
     *   angle: 45,
     *   left: 400,
     *   top: 400,
     *   originX: 'left',
     *   originY: 'top'
     * });
     * @example <caption>Stretched overlayImage #1 - width/height correspond to canvas width/height</caption>
     * fabric.Image.fromURL('http://fabricjs.com/assets/jail_cell_bars.png', function(img) {
     *    img.set({width: canvas.width, height: canvas.height, originX: 'left', originY: 'top'});
     *    canvas.setOverlayImage(img, canvas.renderAll.bind(canvas));
     * });
     * @example <caption>Stretched overlayImage #2 - width/height correspond to canvas width/height</caption>
     * canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
     *   width: canvas.width,
     *   height: canvas.height,
     *   // Needed to position overlayImage at 0/0
     *   originX: 'left',
     *   originY: 'top'
     * });
     * @example <caption>overlayImage loaded from cross-origin</caption>
     * canvas.setOverlayImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {
     *   opacity: 0.5,
     *   angle: 45,
     *   left: 400,
     *   top: 400,
     *   originX: 'left',
     *   originY: 'top',
     *   crossOrigin: 'anonymous'
     * });
     */
    setOverlayImage: function (image, callback, options) {
      return this.__setBgOverlayImage('overlayImage', image, callback, options);
    },

    /**
     * Sets {@link fabric.StaticCanvas#backgroundImage|background image} for this canvas
     * @param {(fabric.Image|String)} image fabric.Image instance or URL of an image to set background to
     * @param {Function} callback Callback to invoke when image is loaded and set as background
     * @param {Object} [options] Optional options to set for the {@link fabric.Image|background image}.
     * @return {fabric.Canvas} thisArg
     * @chainable
     * @see {@link http://jsfiddle.net/fabricjs/YH9yD/|jsFiddle demo}
     * @example <caption>Normal backgroundImage with left/top = 0</caption>
     * canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
     *   // Needed to position backgroundImage at 0/0
     *   originX: 'left',
     *   originY: 'top'
     * });
     * @example <caption>backgroundImage with different properties</caption>
     * canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
     *   opacity: 0.5,
     *   angle: 45,
     *   left: 400,
     *   top: 400,
     *   originX: 'left',
     *   originY: 'top'
     * });
     * @example <caption>Stretched backgroundImage #1 - width/height correspond to canvas width/height</caption>
     * fabric.Image.fromURL('http://fabricjs.com/assets/honey_im_subtle.png', function(img) {
     *    img.set({width: canvas.width, height: canvas.height, originX: 'left', originY: 'top'});
     *    canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
     * });
     * @example <caption>Stretched backgroundImage #2 - width/height correspond to canvas width/height</caption>
     * canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
     *   width: canvas.width,
     *   height: canvas.height,
     *   // Needed to position backgroundImage at 0/0
     *   originX: 'left',
     *   originY: 'top'
     * });
     * @example <caption>backgroundImage loaded from cross-origin</caption>
     * canvas.setBackgroundImage('http://fabricjs.com/assets/honey_im_subtle.png', canvas.renderAll.bind(canvas), {
     *   opacity: 0.5,
     *   angle: 45,
     *   left: 400,
     *   top: 400,
     *   originX: 'left',
     *   originY: 'top',
     *   crossOrigin: 'anonymous'
     * });
     */
    setBackgroundImage: function (image, callback, options) {
      return this.__setBgOverlayImage('backgroundImage', image, callback, options);
    },

    /**
     * Sets {@link fabric.StaticCanvas#overlayColor|background color} for this canvas
     * @param {(String|fabric.Pattern)} overlayColor Color or pattern to set background color to
     * @param {Function} callback Callback to invoke when background color is set
     * @return {fabric.Canvas} thisArg
     * @chainable
     * @see {@link http://jsfiddle.net/fabricjs/pB55h/|jsFiddle demo}
     * @example <caption>Normal overlayColor - color value</caption>
     * canvas.setOverlayColor('rgba(255, 73, 64, 0.6)', canvas.renderAll.bind(canvas));
     * @example <caption>fabric.Pattern used as overlayColor</caption>
     * canvas.setOverlayColor({
     *   source: 'http://fabricjs.com/assets/escheresque_ste.png'
     * }, canvas.renderAll.bind(canvas));
     * @example <caption>fabric.Pattern used as overlayColor with repeat and offset</caption>
     * canvas.setOverlayColor({
     *   source: 'http://fabricjs.com/assets/escheresque_ste.png',
     *   repeat: 'repeat',
     *   offsetX: 200,
     *   offsetY: 100
     * }, canvas.renderAll.bind(canvas));
     */
    setOverlayColor: function(overlayColor, callback) {
      return this.__setBgOverlayColor('overlayColor', overlayColor, callback);
    },

    /**
     * Sets {@link fabric.StaticCanvas#backgroundColor|background color} for this canvas
     * @param {(String|fabric.Pattern)} backgroundColor Color or pattern to set background color to
     * @param {Function} callback Callback to invoke when background color is set
     * @return {fabric.Canvas} thisArg
     * @chainable
     * @see {@link http://jsfiddle.net/fabricjs/hXzvk/|jsFiddle demo}
     * @example <caption>Normal backgroundColor - color value</caption>
     * canvas.setBackgroundColor('rgba(255, 73, 64, 0.6)', canvas.renderAll.bind(canvas));
     * @example <caption>fabric.Pattern used as backgroundColor</caption>
     * canvas.setBackgroundColor({
     *   source: 'http://fabricjs.com/assets/escheresque_ste.png'
     * }, canvas.renderAll.bind(canvas));
     * @example <caption>fabric.Pattern used as backgroundColor with repeat and offset</caption>
     * canvas.setBackgroundColor({
     *   source: 'http://fabricjs.com/assets/escheresque_ste.png',
     *   repeat: 'repeat',
     *   offsetX: 200,
     *   offsetY: 100
     * }, canvas.renderAll.bind(canvas));
     */
    setBackgroundColor: function(backgroundColor, callback) {
      return this.__setBgOverlayColor('backgroundColor', backgroundColor, callback);
    },

    /**
     * @private
     * @see {@link http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#dom-context-2d-imagesmoothingenabled|WhatWG Canvas Standard}
     */
    _setImageSmoothing: function() {
      var ctx = this.getContext();

      ctx.imageSmoothingEnabled = ctx.imageSmoothingEnabled || ctx.webkitImageSmoothingEnabled
        || ctx.mozImageSmoothingEnabled || ctx.msImageSmoothingEnabled || ctx.oImageSmoothingEnabled;
      ctx.imageSmoothingEnabled = this.imageSmoothingEnabled;
    },

    /**
     * @private
     * @param {String} property Property to set ({@link fabric.StaticCanvas#backgroundImage|backgroundImage}
     * or {@link fabric.StaticCanvas#overlayImage|overlayImage})
     * @param {(fabric.Image|String|null)} image fabric.Image instance, URL of an image or null to set background or overlay to
     * @param {Function} callback Callback to invoke when image is loaded and set as background or overlay
     * @param {Object} [options] Optional options to set for the {@link fabric.Image|image}.
     */
    __setBgOverlayImage: function(property, image, callback, options) {
      if (typeof image === 'string') {
        fabric.util.loadImage(image, function(img) {
          img && (this[property] = new fabric.Image(img, options));
          callback && callback(img);
        }, this, options && options.crossOrigin);
      }
      else {
        options && image.setOptions(options);
        this[property] = image;
        callback && callback(image);
      }

      return this;
    },

    /**
     * @private
     * @param {String} property Property to set ({@link fabric.StaticCanvas#backgroundColor|backgroundColor}
     * or {@link fabric.StaticCanvas#overlayColor|overlayColor})
     * @param {(Object|String|null)} color Object with pattern information, color value or null
     * @param {Function} [callback] Callback is invoked when color is set
     */
    __setBgOverlayColor: function(property, color, callback) {
      if (color && color.source) {
        var _this = this;
        fabric.util.loadImage(color.source, function(img) {
          _this[property] = new fabric.Pattern({
            source: img,
            repeat: color.repeat,
            offsetX: color.offsetX,
            offsetY: color.offsetY
          });
          callback && callback();
        });
      }
      else {
        this[property] = color;
        callback && callback();
      }

      return this;
    },

    /**
     * @private
     */
    _createCanvasElement: function() {
      var element = fabric.document.createElement('canvas');
      if (!element.style) {
        element.style = { };
      }
      if (!element) {
        throw CANVAS_INIT_ERROR;
      }
      this._initCanvasElement(element);
      return element;
    },

    /**
     * @private
     * @param {HTMLElement} element
     */
    _initCanvasElement: function(element) {
      fabric.util.createCanvasElement(element);

      if (typeof element.getContext === 'undefined') {
        throw CANVAS_INIT_ERROR;
      }
    },

    /**
     * @private
     * @param {Object} [options] Options object
     */
    _initOptions: function (options) {
      for (var prop in options) {
        this[prop] = options[prop];
      }

      this.width = this.width || parseInt(this.lowerCanvasEl.width, 10) || 0;
      this.height = this.height || parseInt(this.lowerCanvasEl.height, 10) || 0;

      if (!this.lowerCanvasEl.style) {
        return;
      }

      this.lowerCanvasEl.width = this.width;
      this.lowerCanvasEl.height = this.height;

      this.lowerCanvasEl.style.width = this.width + 'px';
      this.lowerCanvasEl.style.height = this.height + 'px';

      this.viewportTransform = this.viewportTransform.slice();
    },

    /**
     * Creates a bottom canvas
     * @private
     * @param {HTMLElement} [canvasEl]
     */
    _createLowerCanvas: function (canvasEl) {
      this.lowerCanvasEl = fabric.util.getById(canvasEl) || this._createCanvasElement();
      this._initCanvasElement(this.lowerCanvasEl);

      fabric.util.addClass(this.lowerCanvasEl, 'lower-canvas');

      if (this.interactive) {
        this._applyCanvasStyle(this.lowerCanvasEl);
      }

      this.contextContainer = this.lowerCanvasEl.getContext('2d');
    },

    /**
     * Returns canvas width (in px)
     * @return {Number}
     */
    getWidth: function () {
      return this.width;
    },

    /**
     * Returns canvas height (in px)
     * @return {Number}
     */
    getHeight: function () {
      return this.height;
    },

    /**
     * Sets width of this canvas instance
     * @param {Number|String} value                         Value to set width to
     * @param {Object}        [options]                     Options object
     * @param {Boolean}       [options.backstoreOnly=false] Set the given dimensions only as canvas backstore dimensions
     * @param {Boolean}       [options.cssOnly=false]       Set the given dimensions only as css dimensions
     * @return {fabric.Canvas} instance
     * @chainable true
     */
    setWidth: function (value, options) {
      return this.setDimensions({ width: value }, options);
    },

    /**
     * Sets height of this canvas instance
     * @param {Number|String} value                         Value to set height to
     * @param {Object}        [options]                     Options object
     * @param {Boolean}       [options.backstoreOnly=false] Set the given dimensions only as canvas backstore dimensions
     * @param {Boolean}       [options.cssOnly=false]       Set the given dimensions only as css dimensions
     * @return {fabric.Canvas} instance
     * @chainable true
     */
    setHeight: function (value, options) {
      return this.setDimensions({ height: value }, options);
    },

    /**
     * Sets dimensions (width, height) of this canvas instance. when options.cssOnly flag active you should also supply the unit of measure (px/%/em)
     * @param {Object}        dimensions                    Object with width/height properties
     * @param {Number|String} [dimensions.width]            Width of canvas element
     * @param {Number|String} [dimensions.height]           Height of canvas element
     * @param {Object}        [options]                     Options object
     * @param {Boolean}       [options.backstoreOnly=false] Set the given dimensions only as canvas backstore dimensions
     * @param {Boolean}       [options.cssOnly=false]       Set the given dimensions only as css dimensions
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    setDimensions: function (dimensions, options) {
      var cssValue;

      options = options || {};

      for (var prop in dimensions) {
        cssValue = dimensions[prop];

        if (!options.cssOnly) {
          this._setBackstoreDimension(prop, dimensions[prop]);
          cssValue += 'px';
        }

        if (!options.backstoreOnly) {
          this._setCssDimension(prop, cssValue);
        }
      }
      this._initRetinaScaling();
      this._setImageSmoothing();
      this.calcOffset();

      if (!options.cssOnly) {
        this.renderAll();
      }

      return this;
    },

    /**
     * Helper for setting width/height
     * @private
     * @param {String} prop property (width|height)
     * @param {Number} value value to set property to
     * @return {fabric.Canvas} instance
     * @chainable true
     */
    _setBackstoreDimension: function (prop, value) {
      this.lowerCanvasEl[prop] = value;

      if (this.upperCanvasEl) {
        this.upperCanvasEl[prop] = value;
      }

      if (this.cacheCanvasEl) {
        this.cacheCanvasEl[prop] = value;
      }

      this[prop] = value;

      return this;
    },

    /**
     * Helper for setting css width/height
     * @private
     * @param {String} prop property (width|height)
     * @param {String} value value to set property to
     * @return {fabric.Canvas} instance
     * @chainable true
     */
    _setCssDimension: function (prop, value) {
      this.lowerCanvasEl.style[prop] = value;

      if (this.upperCanvasEl) {
        this.upperCanvasEl.style[prop] = value;
      }

      if (this.wrapperEl) {
        this.wrapperEl.style[prop] = value;
      }

      return this;
    },

    /**
     * Returns canvas zoom level
     * @return {Number}
     */
    getZoom: function () {
      return Math.sqrt(this.viewportTransform[0] * this.viewportTransform[3]);
    },

    /**
     * Sets viewport transform of this canvas instance
     * @param {Array} vpt the transform in the form of context.transform
     * @return {fabric.Canvas} instance
     * @chainable true
     */
    setViewportTransform: function (vpt) {
      var activeGroup = this.getActiveGroup();
      this.viewportTransform = vpt;
      for (var i = 0, len = this._objects.length; i < len; i++) {
        this._objects[i].setCoords();
      }
      if (activeGroup) {
        activeGroup.setCoords();
      }
      this.renderAll();
      return this;
    },

    /**
     * Sets zoom level of this canvas instance, zoom centered around point
     * @param {fabric.Point} point to zoom with respect to
     * @param {Number} value to set zoom to, less than 1 zooms out
     * @return {fabric.Canvas} instance
     * @chainable true
     */
    zoomToPoint: function (point, value) {
      // TODO: just change the scale, preserve other transformations
      var before = point, vpt = this.viewportTransform.slice(0);
      point = fabric.util.transformPoint(point, fabric.util.invertTransform(this.viewportTransform));
      vpt[0] = value;
      vpt[3] = value;
      var after = fabric.util.transformPoint(point, vpt);
      vpt[4] += before.x - after.x;
      vpt[5] += before.y - after.y;
      return this.setViewportTransform(vpt);
    },

    /**
     * Sets zoom level of this canvas instance
     * @param {Number} value to set zoom to, less than 1 zooms out
     * @return {fabric.Canvas} instance
     * @chainable true
     */
    setZoom: function (value) {
      this.zoomToPoint(new fabric.Point(0, 0), value);
      return this;
    },

    /**
     * Pan viewport so as to place point at top left corner of canvas
     * @param {fabric.Point} point to move to
     * @return {fabric.Canvas} instance
     * @chainable true
     */
    absolutePan: function (point) {
      var vpt = this.viewportTransform.slice(0);
      vpt[4] = -point.x;
      vpt[5] = -point.y;
      return this.setViewportTransform(vpt);
    },

    /**
     * Pans viewpoint relatively
     * @param {fabric.Point} point (position vector) to move by
     * @return {fabric.Canvas} instance
     * @chainable true
     */
    relativePan: function (point) {
      return this.absolutePan(new fabric.Point(
        -point.x - this.viewportTransform[4],
        -point.y - this.viewportTransform[5]
      ));
    },

    /**
     * Returns &lt;canvas> element corresponding to this instance
     * @return {HTMLCanvasElement}
     */
    getElement: function () {
      return this.lowerCanvasEl;
    },

    /**
     * Returns currently selected object, if any
     * @return {fabric.Object}
     */
    getActiveObject: function() {
      return null;
    },

    /**
     * Returns currently selected group of object, if any
     * @return {fabric.Group}
     */
    getActiveGroup: function() {
      return null;
    },

    /**
     * @private
     * @param {fabric.Object} obj Object that was added
     */
    _onObjectAdded: function(obj) {
      this.stateful && obj.setupState();
      obj._set('canvas', this);
      obj.setCoords();
      this.fire('object:added', { target: obj });
      obj.fire('added');
    },

    /**
     * @private
     * @param {fabric.Object} obj Object that was removed
     */
    _onObjectRemoved: function(obj) {
      this.fire('object:removed', { target: obj });
      obj.fire('removed');
    },

    /**
     * Clears specified context of canvas element
     * @param {CanvasRenderingContext2D} ctx Context to clear
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    clearContext: function(ctx) {
      ctx.clearRect(0, 0, this.width, this.height);
      return this;
    },

    /**
     * Returns context of canvas where objects are drawn
     * @return {CanvasRenderingContext2D}
     */
    getContext: function () {
      return this.contextContainer;
    },

    /**
     * Clears all contexts (background, main, top) of an instance
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    clear: function () {
      this._objects.length = 0;
      this.clearContext(this.contextContainer);
      this.fire('canvas:cleared');
      this.renderAll();
      return this;
    },

    /**
     * Renders both the canvas.
     * @return {fabric.Canvas} instance
     * @chainable
     */
    renderAll: function () {
      var canvasToDrawOn = this.contextContainer;
      this.renderCanvas(canvasToDrawOn, this._objects);
      return this;
    },

    /**
     * Renders background, objects, overlay and controls.
     * @param {CanvasRenderingContext2D} ctx
     * @param {Array} objects to render
     * @return {fabric.Canvas} instance
     * @chainable
     */
    renderCanvas: function(ctx, objects) {
      this.clearContext(ctx);
      this.fire('before:render');
      if (this.clipTo) {
        fabric.util.clipContext(this, ctx);
      }
      this._renderBackground(ctx);

      ctx.save();
      //apply viewport transform once for all rendering process
      ctx.transform.apply(ctx, this.viewportTransform);
      this._renderObjects(ctx, objects);
      ctx.restore();
      if (!this.controlsAboveOverlay && this.interactive) {
        this.drawControls(ctx);
      }
      if (this.clipTo) {
        ctx.restore();
      }
      this._renderOverlay(ctx);
      if (this.controlsAboveOverlay && this.interactive) {
        this.drawControls(ctx);
      }
      this.fire('after:render');
    },

    /**
     * dummy function for organization purpouse.
     * @private
     */
    drawControls: function() {
      // NOOP
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Array} objects to render
     */
    _renderObjects: function(ctx, objects) {
      for (var i = 0, length = objects.length; i < length; ++i) {
        objects[i] && objects[i].render(ctx);
      }
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {string} property 'background' or 'overlay'
     */
    _renderBackgroundOrOverlay: function(ctx, property) {
      var object = this[property + 'Color'];
      if (object) {
        ctx.fillStyle = object.toLive
          ? object.toLive(ctx)
          : object;

        ctx.fillRect(
          object.offsetX || 0,
          object.offsetY || 0,
          this.width,
          this.height);
      }
      object = this[property + 'Image'];
      if (object) {
        if (this[property + 'Vpt']) {
          ctx.save();
          ctx.transform.apply(ctx, this.viewportTransform);
        }
        object.render(ctx);
        this[property + 'Vpt'] && ctx.restore();
      }
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderBackground: function(ctx) {
      this._renderBackgroundOrOverlay(ctx, 'background');
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderOverlay: function(ctx) {
      this._renderBackgroundOrOverlay(ctx, 'overlay');
    },

    /**
     * Returns coordinates of a center of canvas.
     * Returned value is an object with top and left properties
     * @return {Object} object with "top" and "left" number values
     */
    getCenter: function () {
      return {
        top: this.getHeight() / 2,
        left: this.getWidth() / 2
      };
    },

    /**
     * Centers object horizontally in the canvas
     * You might need to call `setCoords` on an object after centering, to update controls area.
     * @param {fabric.Object} object Object to center horizontally
     * @return {fabric.Canvas} thisArg
     */
    centerObjectH: function (object) {
      return this._centerObject(object, new fabric.Point(this.getCenter().left, object.getCenterPoint().y));
    },

    /**
     * Centers object vertically in the canvas
     * You might need to call `setCoords` on an object after centering, to update controls area.
     * @param {fabric.Object} object Object to center vertically
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    centerObjectV: function (object) {
      return this._centerObject(object, new fabric.Point(object.getCenterPoint().x, this.getCenter().top));
    },

    /**
     * Centers object vertically and horizontally in the canvas
     * You might need to call `setCoords` on an object after centering, to update controls area.
     * @param {fabric.Object} object Object to center vertically and horizontally
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    centerObject: function(object) {
      var center = this.getCenter();

      return this._centerObject(object, new fabric.Point(center.left, center.top));
    },

    /**
     * Centers object vertically and horizontally in the viewport
     * You might need to call `setCoords` on an object after centering, to update controls area.
     * @param {fabric.Object} object Object to center vertically and horizontally
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    viewportCenterObject: function(object) {
      var vpCenter = this.getVpCenter();

      return this._centerObject(object, vpCenter);
    },

    /**
     * Centers object horizontally in the viewport, object.top is unchanged
     * You might need to call `setCoords` on an object after centering, to update controls area.
     * @param {fabric.Object} object Object to center vertically and horizontally
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    viewportCenterObjectH: function(object) {
      var vpCenter = this.getVpCenter();
      this._centerObject(object, new fabric.Point(vpCenter.x, object.getCenterPoint().y));
      return this;
    },

    /**
     * Centers object Vertically in the viewport, object.top is unchanged
     * You might need to call `setCoords` on an object after centering, to update controls area.
     * @param {fabric.Object} object Object to center vertically and horizontally
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    viewportCenterObjectV: function(object) {
      var vpCenter = this.getVpCenter();

      return this._centerObject(object, new fabric.Point(object.getCenterPoint().x, vpCenter.y));
    },

    /**
     * Calculate the point in canvas that correspond to the center of actual viewport.
     * @return {fabric.Point} vpCenter, viewport center
     * @chainable
     */
    getVpCenter: function() {
      var center = this.getCenter(),
          iVpt = fabric.util.invertTransform(this.viewportTransform);
      return fabric.util.transformPoint({ x: center.left, y: center.top }, iVpt);
    },

    /**
     * @private
     * @param {fabric.Object} object Object to center
     * @param {fabric.Point} center Center point
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    _centerObject: function(object, center) {
      object.setPositionByOrigin(center, 'center', 'center');
      this.renderAll();
      return this;
    },

    /**
     * Returs dataless JSON representation of canvas
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {String} json string
     */
    toDatalessJSON: function (propertiesToInclude) {
      return this.toDatalessObject(propertiesToInclude);
    },

    /**
     * Returns object representation of canvas
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject: function (propertiesToInclude) {
      return this._toObjectMethod('toObject', propertiesToInclude);
    },

    /**
     * Returns dataless object representation of canvas
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toDatalessObject: function (propertiesToInclude) {
      return this._toObjectMethod('toDatalessObject', propertiesToInclude);
    },

    /**
     * @private
     */
    _toObjectMethod: function (methodName, propertiesToInclude) {

      var data = {
        objects: this._toObjects(methodName, propertiesToInclude)
      };

      extend(data, this.__serializeBgOverlay());

      fabric.util.populateWithProperties(this, data, propertiesToInclude);

      return data;
    },

    /**
     * @private
     */
    _toObjects: function(methodName, propertiesToInclude) {
      return this.getObjects().filter(function(object) {
          return !object.excludeFromExport;
        }).map(function(instance) {
          return this._toObject(instance, methodName, propertiesToInclude);
        }, this);
    },

    /**
     * @private
     */
    _toObject: function(instance, methodName, propertiesToInclude) {
      var originalValue;

      if (!this.includeDefaultValues) {
        originalValue = instance.includeDefaultValues;
        instance.includeDefaultValues = false;
      }

      //If the object is part of the current selection group, it should
      //be transformed appropriately
      //i.e. it should be serialised as it would appear if the selection group
      //were to be destroyed.
      var originalProperties = this._realizeGroupTransformOnObject(instance),
          object = instance[methodName](propertiesToInclude);
      if (!this.includeDefaultValues) {
        instance.includeDefaultValues = originalValue;
      }

      //Undo the damage we did by changing all of its properties
      this._unwindGroupTransformOnObject(instance, originalProperties);

      return object;
    },

    /**
     * Realises an object's group transformation on it
     * @private
     * @param {fabric.Object} [instance] the object to transform (gets mutated)
     * @returns the original values of instance which were changed
     */
    _realizeGroupTransformOnObject: function(instance) {
      var layoutProps = ['angle', 'flipX', 'flipY', 'height', 'left', 'scaleX', 'scaleY', 'top', 'width'];
      if (instance.group && instance.group === this.getActiveGroup()) {
        //Copy all the positionally relevant properties across now
        var originalValues = {};
        layoutProps.forEach(function(prop) {
          originalValues[prop] = instance[prop];
        });
        this.getActiveGroup().realizeTransform(instance);
        return originalValues;
      }
      else {
        return null;
      }
    },

    /**
     * Restores the changed properties of instance
     * @private
     * @param {fabric.Object} [instance] the object to un-transform (gets mutated)
     * @param {Object} [originalValues] the original values of instance, as returned by _realizeGroupTransformOnObject
     */
    _unwindGroupTransformOnObject: function(instance, originalValues) {
      if (originalValues) {
        instance.set(originalValues);
      }
    },

    /**
     * @private
     */
    __serializeBgOverlay: function() {
      var data = {
        background: (this.backgroundColor && this.backgroundColor.toObject)
          ? this.backgroundColor.toObject()
          : this.backgroundColor
      };

      if (this.overlayColor) {
        data.overlay = this.overlayColor.toObject
          ? this.overlayColor.toObject()
          : this.overlayColor;
      }
      if (this.backgroundImage) {
        data.backgroundImage = this.backgroundImage.toObject();
      }
      if (this.overlayImage) {
        data.overlayImage = this.overlayImage.toObject();
      }

      return data;
    },

    /* _TO_SVG_START_ */
    /**
     * When true, getSvgTransform() will apply the StaticCanvas.viewportTransform to the SVG transformation. When true,
     * a zoomed canvas will then produce zoomed SVG output.
     * @type Boolean
     * @default
     */
    svgViewportTransformation: true,

    /**
     * Returns SVG representation of canvas
     * @function
     * @param {Object} [options] Options object for SVG output
     * @param {Boolean} [options.suppressPreamble=false] If true xml tag is not included
     * @param {Object} [options.viewBox] SVG viewbox object
     * @param {Number} [options.viewBox.x] x-cooridnate of viewbox
     * @param {Number} [options.viewBox.y] y-coordinate of viewbox
     * @param {Number} [options.viewBox.width] Width of viewbox
     * @param {Number} [options.viewBox.height] Height of viewbox
     * @param {String} [options.encoding=UTF-8] Encoding of SVG output
     * @param {String} [options.width] desired width of svg with or without units
     * @param {String} [options.height] desired height of svg with or without units
     * @param {Function} [reviver] Method for further parsing of svg elements, called after each fabric object converted into svg representation.
     * @return {String} SVG string
     * @tutorial {@link http://fabricjs.com/fabric-intro-part-3#serialization}
     * @see {@link http://jsfiddle.net/fabricjs/jQ3ZZ/|jsFiddle demo}
     * @example <caption>Normal SVG output</caption>
     * var svg = canvas.toSVG();
     * @example <caption>SVG output without preamble (without &lt;?xml ../>)</caption>
     * var svg = canvas.toSVG({suppressPreamble: true});
     * @example <caption>SVG output with viewBox attribute</caption>
     * var svg = canvas.toSVG({
     *   viewBox: {
     *     x: 100,
     *     y: 100,
     *     width: 200,
     *     height: 300
     *   }
     * });
     * @example <caption>SVG output with different encoding (default: UTF-8)</caption>
     * var svg = canvas.toSVG({encoding: 'ISO-8859-1'});
     * @example <caption>Modify SVG output with reviver function</caption>
     * var svg = canvas.toSVG(null, function(svg) {
     *   return svg.replace('stroke-dasharray: ; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; ', '');
     * });
     */
    toSVG: function(options, reviver) {
      options || (options = { });

      var markup = [];

      this._setSVGPreamble(markup, options);
      this._setSVGHeader(markup, options);

      this._setSVGBgOverlayColor(markup, 'backgroundColor');
      this._setSVGBgOverlayImage(markup, 'backgroundImage', reviver);

      this._setSVGObjects(markup, reviver);

      this._setSVGBgOverlayColor(markup, 'overlayColor');
      this._setSVGBgOverlayImage(markup, 'overlayImage', reviver);

      markup.push('</svg>');

      return markup.join('');
    },

    /**
     * @private
     */
    _setSVGPreamble: function(markup, options) {
      if (options.suppressPreamble) {
        return;
      }
      markup.push(
        '<?xml version="1.0" encoding="', (options.encoding || 'UTF-8'), '" standalone="no" ?>\n',
          '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ',
            '"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n'
      );
    },

    /**
     * @private
     */
    _setSVGHeader: function(markup, options) {
      var width = options.width || this.width,
          height = options.height || this.height,
          vpt, viewBox = 'viewBox="0 0 ' + this.width + ' ' + this.height + '" ',
          NUM_FRACTION_DIGITS = fabric.Object.NUM_FRACTION_DIGITS;

      if (options.viewBox) {
        viewBox = 'viewBox="' +
                options.viewBox.x + ' ' +
                options.viewBox.y + ' ' +
                options.viewBox.width + ' ' +
                options.viewBox.height + '" ';
      }
      else {
        if (this.svgViewportTransformation) {
          vpt = this.viewportTransform;
          viewBox = 'viewBox="' +
                  toFixed(-vpt[4] / vpt[0], NUM_FRACTION_DIGITS) + ' ' +
                  toFixed(-vpt[5] / vpt[3], NUM_FRACTION_DIGITS) + ' ' +
                  toFixed(this.width / vpt[0], NUM_FRACTION_DIGITS) + ' ' +
                  toFixed(this.height / vpt[3], NUM_FRACTION_DIGITS) + '" ';
        }
      }

      markup.push(
        '<svg ',
          'xmlns="http://www.w3.org/2000/svg" ',
          'xmlns:xlink="http://www.w3.org/1999/xlink" ',
          'version="1.1" ',
          'width="', width, '" ',
          'height="', height, '" ',
          (this.backgroundColor && !this.backgroundColor.toLive
            ? 'style="background-color: ' + this.backgroundColor + '" '
            : null),
          viewBox,
          'xml:space="preserve">\n',
        '<desc>Created with Fabric.js ', fabric.version, '</desc>\n',
        '<defs>',
          fabric.createSVGFontFacesMarkup(this.getObjects()),
          fabric.createSVGRefElementsMarkup(this),
        '</defs>\n'
      );
    },

    /**
     * @private
     */
    _setSVGObjects: function(markup, reviver) {
      var instance, originalProperties;
      for (var i = 0, objects = this.getObjects(), len = objects.length; i < len; i++) {
        instance = objects[i];
        if (instance.excludeFromExport) {
          continue;
        }
        //If the object is in a selection group, simulate what would happen to that
        //object when the group is deselected
        originalProperties = this._realizeGroupTransformOnObject(instance);
        markup.push(instance.toSVG(reviver));
        this._unwindGroupTransformOnObject(instance, originalProperties);
      }
    },

    /**
     * @private
     */
    _setSVGBgOverlayImage: function(markup, property, reviver) {
      if (this[property] && this[property].toSVG) {
        markup.push(this[property].toSVG(reviver));
      }
    },

    /**
     * @private
     */
    _setSVGBgOverlayColor: function(markup, property) {
      if (this[property] && this[property].source) {
        markup.push(
          '<rect x="', this[property].offsetX, '" y="', this[property].offsetY, '" ',
            'width="',
              (this[property].repeat === 'repeat-y' || this[property].repeat === 'no-repeat'
                ? this[property].source.width
                : this.width),
            '" height="',
              (this[property].repeat === 'repeat-x' || this[property].repeat === 'no-repeat'
                ? this[property].source.height
                : this.height),
            '" fill="url(#' + property + 'Pattern)"',
          '></rect>\n'
        );
      }
      else if (this[property] && property === 'overlayColor') {
        markup.push(
          '<rect x="0" y="0" ',
            'width="', this.width,
            '" height="', this.height,
            '" fill="', this[property], '"',
          '></rect>\n'
        );
      }
    },
    /* _TO_SVG_END_ */

    /**
     * Moves an object or the objects of a multiple selection
     * to the bottom of the stack of drawn objects
     * @param {fabric.Object} object Object to send to back
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    sendToBack: function (object) {
      if (!object) {
        return this;
      }
      var activeGroup = this.getActiveGroup ? this.getActiveGroup() : null,
          i, obj, objs;
      if (object === activeGroup) {
        objs = activeGroup._objects;
        for (i = objs.length; i--;) {
          obj = objs[i];
          removeFromArray(this._objects, obj);
          this._objects.unshift(obj);
        }
      }
      else {
        removeFromArray(this._objects, object);
        this._objects.unshift(object);
      }
      return this.renderAll && this.renderAll();
    },

    /**
     * Moves an object or the objects of a multiple selection
     * to the top of the stack of drawn objects
     * @param {fabric.Object} object Object to send
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    bringToFront: function (object) {
      if (!object) {
        return this;
      }
      var activeGroup = this.getActiveGroup ? this.getActiveGroup() : null,
          i, obj, objs;
      if (object === activeGroup) {
        objs = activeGroup._objects;
        for (i = 0; i < objs.length; i++) {
          obj = objs[i];
          removeFromArray(this._objects, obj);
          this._objects.push(obj);
        }
      }
      else {
        removeFromArray(this._objects, object);
        this._objects.push(object);
      }
      return this.renderAll && this.renderAll();
    },

    /**
     * Moves an object or a selection down in stack of drawn objects
     * @param {fabric.Object} object Object to send
     * @param {Boolean} [intersecting] If `true`, send object behind next lower intersecting object
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    sendBackwards: function (object, intersecting) {
      if (!object) {
        return this;
      }
      var activeGroup = this.getActiveGroup ? this.getActiveGroup() : null,
          i, obj, idx, newIdx, objs;

      if (object === activeGroup) {
        objs = activeGroup._objects;
        for (i = 0; i < objs.length; i++) {
          obj = objs[i];
          idx = this._objects.indexOf(obj);
          if (idx !== 0) {
            newIdx = idx - 1;
            removeFromArray(this._objects, obj);
            this._objects.splice(newIdx, 0, obj);
          }
        }
      }
      else {
        idx = this._objects.indexOf(object);
        if (idx !== 0) {
          // if object is not on the bottom of stack
          newIdx = this._findNewLowerIndex(object, idx, intersecting);
          removeFromArray(this._objects, object);
          this._objects.splice(newIdx, 0, object);
        }
      }
      this.renderAll && this.renderAll();
      return this;
    },

    /**
     * @private
     */
    _findNewLowerIndex: function(object, idx, intersecting) {
      var newIdx;

      if (intersecting) {
        newIdx = idx;

        // traverse down the stack looking for the nearest intersecting object
        for (var i = idx - 1; i >= 0; --i) {

          var isIntersecting = object.intersectsWithObject(this._objects[i]) ||
                               object.isContainedWithinObject(this._objects[i]) ||
                               this._objects[i].isContainedWithinObject(object);

          if (isIntersecting) {
            newIdx = i;
            break;
          }
        }
      }
      else {
        newIdx = idx - 1;
      }

      return newIdx;
    },

    /**
     * Moves an object or a selection up in stack of drawn objects
     * @param {fabric.Object} object Object to send
     * @param {Boolean} [intersecting] If `true`, send object in front of next upper intersecting object
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    bringForward: function (object, intersecting) {
      if (!object) {
        return this;
      }
      var activeGroup = this.getActiveGroup ? this.getActiveGroup() : null,
          i, obj, idx, newIdx, objs;

      if (object === activeGroup) {
        objs = activeGroup._objects;
        for (i = objs.length; i--;) {
          obj = objs[i];
          idx = this._objects.indexOf(obj);
          if (idx !== this._objects.length - 1) {
            newIdx = idx + 1;
            removeFromArray(this._objects, obj);
            this._objects.splice(newIdx, 0, obj);
          }
        }
      }
      else {
        idx = this._objects.indexOf(object);
        if (idx !== this._objects.length - 1) {
          // if object is not on top of stack (last item in an array)
          newIdx = this._findNewUpperIndex(object, idx, intersecting);
          removeFromArray(this._objects, object);
          this._objects.splice(newIdx, 0, object);
        }
      }
      this.renderAll && this.renderAll();
      return this;
    },

    /**
     * @private
     */
    _findNewUpperIndex: function(object, idx, intersecting) {
      var newIdx;

      if (intersecting) {
        newIdx = idx;

        // traverse up the stack looking for the nearest intersecting object
        for (var i = idx + 1; i < this._objects.length; ++i) {

          var isIntersecting = object.intersectsWithObject(this._objects[i]) ||
                               object.isContainedWithinObject(this._objects[i]) ||
                               this._objects[i].isContainedWithinObject(object);

          if (isIntersecting) {
            newIdx = i;
            break;
          }
        }
      }
      else {
        newIdx = idx + 1;
      }

      return newIdx;
    },

    /**
     * Moves an object to specified level in stack of drawn objects
     * @param {fabric.Object} object Object to send
     * @param {Number} index Position to move to
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    moveTo: function (object, index) {
      removeFromArray(this._objects, object);
      this._objects.splice(index, 0, object);
      return this.renderAll && this.renderAll();
    },

    /**
     * Clears a canvas element and removes all event listeners
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    dispose: function () {
      this.clear();
      return this;
    },

    /**
     * Returns a string representation of an instance
     * @return {String} string representation of an instance
     */
    toString: function () {
      return '#<fabric.Canvas (' + this.complexity() + '): ' +
               '{ objects: ' + this.getObjects().length + ' }>';
    }
  });

  extend(fabric.StaticCanvas.prototype, fabric.Observable);
  extend(fabric.StaticCanvas.prototype, fabric.Collection);
  extend(fabric.StaticCanvas.prototype, fabric.DataURLExporter);

  extend(fabric.StaticCanvas, /** @lends fabric.StaticCanvas */ {

    /**
     * @static
     * @type String
     * @default
     */
    EMPTY_JSON: '{"objects": [], "background": "white"}',

    /**
     * Provides a way to check support of some of the canvas methods
     * (either those of HTMLCanvasElement itself, or rendering context)
     *
     * @param {String} methodName Method to check support for;
     *                            Could be one of "getImageData", "toDataURL", "toDataURLWithQuality" or "setLineDash"
     * @return {Boolean | null} `true` if method is supported (or at least exists),
     *                          `null` if canvas element or context can not be initialized
     */
    supports: function (methodName) {
      var el = fabric.util.createCanvasElement();

      if (!el || !el.getContext) {
        return null;
      }

      var ctx = el.getContext('2d');
      if (!ctx) {
        return null;
      }

      switch (methodName) {

        case 'getImageData':
          return typeof ctx.getImageData !== 'undefined';

        case 'setLineDash':
          return typeof ctx.setLineDash !== 'undefined';

        case 'toDataURL':
          return typeof el.toDataURL !== 'undefined';

        case 'toDataURLWithQuality':
          try {
            el.toDataURL('image/jpeg', 0);
            return true;
          }
          catch (e) { }
          return false;

        default:
          return null;
      }
    }
  });

  /**
   * Returns JSON representation of canvas
   * @function
   * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
   * @return {String} JSON string
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-3#serialization}
   * @see {@link http://jsfiddle.net/fabricjs/pec86/|jsFiddle demo}
   * @example <caption>JSON without additional properties</caption>
   * var json = canvas.toJSON();
   * @example <caption>JSON with additional properties included</caption>
   * var json = canvas.toJSON(['lockMovementX', 'lockMovementY', 'lockRotation', 'lockScalingX', 'lockScalingY', 'lockUniScaling']);
   * @example <caption>JSON without default values</caption>
   * canvas.includeDefaultValues = false;
   * var json = canvas.toJSON();
   */
  fabric.StaticCanvas.prototype.toJSON = fabric.StaticCanvas.prototype.toObject;

})();


/**
 * BaseBrush class
 * @class fabric.BaseBrush
 * @see {@link http://fabricjs.com/freedrawing|Freedrawing demo}
 */
fabric.BaseBrush = fabric.util.createClass(/** @lends fabric.BaseBrush.prototype */ {

  /**
   * Color of a brush
   * @type String
   * @default
   */
  color:            'rgb(0, 0, 0)',

  /**
   * Width of a brush
   * @type Number
   * @default
   */
  width:            1,

  /**
   * Shadow object representing shadow of this shape.
   * <b>Backwards incompatibility note:</b> This property replaces "shadowColor" (String), "shadowOffsetX" (Number),
   * "shadowOffsetY" (Number) and "shadowBlur" (Number) since v1.2.12
   * @type fabric.Shadow
   * @default
   */
  shadow:           null,

  /**
   * Line endings style of a brush (one of "butt", "round", "square")
   * @type String
   * @default
   */
  strokeLineCap:    'round',

  /**
   * Corner style of a brush (one of "bevil", "round", "miter")
   * @type String
   * @default
   */
  strokeLineJoin:   'round',

  /**
   * Stroke Dash Array.
   * @type Array
   * @default
   */
  strokeDashArray:  null,

  /**
   * Sets shadow of an object
   * @param {Object|String} [options] Options object or string (e.g. "2px 2px 10px rgba(0,0,0,0.2)")
   * @return {fabric.Object} thisArg
   * @chainable
   */
  setShadow: function(options) {
    this.shadow = new fabric.Shadow(options);
    return this;
  },

  /**
   * Sets brush styles
   * @private
   */
  _setBrushStyles: function() {
    var ctx = this.canvas.contextTop;

    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.width;
    ctx.lineCap = this.strokeLineCap;
    ctx.lineJoin = this.strokeLineJoin;
    if (this.strokeDashArray && fabric.StaticCanvas.supports('setLineDash')) {
      ctx.setLineDash(this.strokeDashArray);
    }
  },

  /**
   * Sets brush shadow styles
   * @private
   */
  _setShadow: function() {
    if (!this.shadow) {
      return;
    }

    var ctx = this.canvas.contextTop;

    ctx.shadowColor = this.shadow.color;
    ctx.shadowBlur = this.shadow.blur;
    ctx.shadowOffsetX = this.shadow.offsetX;
    ctx.shadowOffsetY = this.shadow.offsetY;
  },

  /**
   * Removes brush shadow styles
   * @private
   */
  _resetShadow: function() {
    var ctx = this.canvas.contextTop;

    ctx.shadowColor = '';
    ctx.shadowBlur = ctx.shadowOffsetX = ctx.shadowOffsetY = 0;
  }
});


(function() {

  /**
   * PencilBrush class
   * @class fabric.PencilBrush
   * @extends fabric.BaseBrush
   */
  fabric.PencilBrush = fabric.util.createClass(fabric.BaseBrush, /** @lends fabric.PencilBrush.prototype */ {

    /**
     * Constructor
     * @param {fabric.Canvas} canvas
     * @return {fabric.PencilBrush} Instance of a pencil brush
     */
    initialize: function(canvas) {
      this.canvas = canvas;
      this._points = [ ];
    },

    /**
     * Inovoked on mouse down
     * @param {Object} pointer
     */
    onMouseDown: function(pointer) {
      this._prepareForDrawing(pointer);
      // capture coordinates immediately
      // this allows to draw dots (when movement never occurs)
      this._captureDrawingPath(pointer);
      this._render();
    },

    /**
     * Inovoked on mouse move
     * @param {Object} pointer
     */
    onMouseMove: function(pointer) {
      this._captureDrawingPath(pointer);
      // redraw curve
      // clear top canvas
      this.canvas.clearContext(this.canvas.contextTop);
      this._render();
    },

    /**
     * Invoked on mouse up
     */
    onMouseUp: function() {
      this._finalizeAndAddPath();
    },

    /**
     * @private
     * @param {Object} pointer Actual mouse position related to the canvas.
     */
    _prepareForDrawing: function(pointer) {

      var p = new fabric.Point(pointer.x, pointer.y);

      this._reset();
      this._addPoint(p);

      this.canvas.contextTop.moveTo(p.x, p.y);
    },

    /**
     * @private
     * @param {fabric.Point} point Point to be added to points array
     */
    _addPoint: function(point) {
      this._points.push(point);
    },

    /**
     * Clear points array and set contextTop canvas style.
     * @private
     */
    _reset: function() {
      this._points.length = 0;

      this._setBrushStyles();
      this._setShadow();
    },

    /**
     * @private
     * @param {Object} pointer Actual mouse position related to the canvas.
     */
    _captureDrawingPath: function(pointer) {
      var pointerPoint = new fabric.Point(pointer.x, pointer.y);
      this._addPoint(pointerPoint);
    },

    /**
     * Draw a smooth path on the topCanvas using quadraticCurveTo
     * @private
     */
    _render: function() {
      var ctx  = this.canvas.contextTop,
          v = this.canvas.viewportTransform,
          p1 = this._points[0],
          p2 = this._points[1];

      ctx.save();
      ctx.transform(v[0], v[1], v[2], v[3], v[4], v[5]);
      ctx.beginPath();

      //if we only have 2 points in the path and they are the same
      //it means that the user only clicked the canvas without moving the mouse
      //then we should be drawing a dot. A path isn't drawn between two identical dots
      //that's why we set them apart a bit
      if (this._points.length === 2 && p1.x === p2.x && p1.y === p2.y) {
        p1.x -= 0.5;
        p2.x += 0.5;
      }
      ctx.moveTo(p1.x, p1.y);

      for (var i = 1, len = this._points.length; i < len; i++) {
        // we pick the point between pi + 1 & pi + 2 as the
        // end point and p1 as our control point.
        var midPoint = p1.midPointFrom(p2);
        ctx.quadraticCurveTo(p1.x, p1.y, midPoint.x, midPoint.y);

        p1 = this._points[i];
        p2 = this._points[i + 1];
      }
      // Draw last line as a straight line while
      // we wait for the next point to be able to calculate
      // the bezier control point
      ctx.lineTo(p1.x, p1.y);
      ctx.stroke();
      ctx.restore();
    },

    /**
     * Converts points to SVG path
     * @param {Array} points Array of points
     * @return {String} SVG path
     */
    convertPointsToSVGPath: function(points) {
      var path = [],
          p1 = new fabric.Point(points[0].x, points[0].y),
          p2 = new fabric.Point(points[1].x, points[1].y);

      path.push('M ', points[0].x, ' ', points[0].y, ' ');
      for (var i = 1, len = points.length; i < len; i++) {
        var midPoint = p1.midPointFrom(p2);
        // p1 is our bezier control point
        // midpoint is our endpoint
        // start point is p(i-1) value.
        path.push('Q ', p1.x, ' ', p1.y, ' ', midPoint.x, ' ', midPoint.y, ' ');
        p1 = new fabric.Point(points[i].x, points[i].y);
        if ((i + 1) < points.length) {
          p2 = new fabric.Point(points[i + 1].x, points[i + 1].y);
        }
      }
      path.push('L ', p1.x, ' ', p1.y, ' ');
      return path;
    },

    /**
     * Creates fabric.Path object to add on canvas
     * @param {String} pathData Path data
     * @return {fabric.Path} Path to add on canvas
     */
    createPath: function(pathData) {
      var path = new fabric.Path(pathData, {
                   fill: null,
                   stroke: this.color,
                   strokeWidth: this.width,
                   strokeLineCap: this.strokeLineCap,
                   strokeLineJoin: this.strokeLineJoin,
                   strokeDashArray: this.strokeDashArray,
                   originX: 'center',
                   originY: 'center'
                 });

      if (this.shadow) {
        this.shadow.affectStroke = true;
        path.setShadow(this.shadow);
      }

      return path;
    },

    /**
     * On mouseup after drawing the path on contextTop canvas
     * we use the points captured to create an new fabric path object
     * and add it to the fabric canvas.
     */
    _finalizeAndAddPath: function() {
      var ctx = this.canvas.contextTop;
      ctx.closePath();

      var pathData = this.convertPointsToSVGPath(this._points).join('');
      if (pathData === 'M 0 0 Q 0 0 0 0 L 0 0') {
        // do not create 0 width/height paths, as they are
        // rendered inconsistently across browsers
        // Firefox 4, for example, renders a dot,
        // whereas Chrome 10 renders nothing
        this.canvas.renderAll();
        return;
      }

      var path = this.createPath(pathData);

      this.canvas.add(path);
      path.setCoords();

      this.canvas.clearContext(this.canvas.contextTop);
      this._resetShadow();
      this.canvas.renderAll();

      // fire event 'path' created
      this.canvas.fire('path:created', { path: path });
    }
  });
})();


/**
 * CircleBrush class
 * @class fabric.CircleBrush
 */
fabric.CircleBrush = fabric.util.createClass(fabric.BaseBrush, /** @lends fabric.CircleBrush.prototype */ {

  /**
   * Width of a brush
   * @type Number
   * @default
   */
  width: 10,

  /**
   * Constructor
   * @param {fabric.Canvas} canvas
   * @return {fabric.CircleBrush} Instance of a circle brush
   */
  initialize: function(canvas) {
    this.canvas = canvas;
    this.points = [ ];
  },

  /**
   * Invoked inside on mouse down and mouse move
   * @param {Object} pointer
   */
  drawDot: function(pointer) {
    var point = this.addPoint(pointer),
        ctx = this.canvas.contextTop,
        v = this.canvas.viewportTransform;
    ctx.save();
    ctx.transform(v[0], v[1], v[2], v[3], v[4], v[5]);

    ctx.fillStyle = point.fill;
    ctx.beginPath();
    ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  },

  /**
   * Invoked on mouse down
   */
  onMouseDown: function(pointer) {
    this.points.length = 0;
    this.canvas.clearContext(this.canvas.contextTop);
    this._setShadow();
    this.drawDot(pointer);
  },

  /**
   * Invoked on mouse move
   * @param {Object} pointer
   */
  onMouseMove: function(pointer) {
    this.drawDot(pointer);
  },

  /**
   * Invoked on mouse up
   */
  onMouseUp: function() {
    var originalRenderOnAddRemove = this.canvas.renderOnAddRemove;
    this.canvas.renderOnAddRemove = false;

    var circles = [ ];

    for (var i = 0, len = this.points.length; i < len; i++) {
      var point = this.points[i],
          circle = new fabric.Circle({
            radius: point.radius,
            left: point.x,
            top: point.y,
            originX: 'center',
            originY: 'center',
            fill: point.fill
          });

      this.shadow && circle.setShadow(this.shadow);

      circles.push(circle);
    }
    var group = new fabric.Group(circles, { originX: 'center', originY: 'center' });
    group.canvas = this.canvas;

    this.canvas.add(group);
    this.canvas.fire('path:created', { path: group });

    this.canvas.clearContext(this.canvas.contextTop);
    this._resetShadow();
    this.canvas.renderOnAddRemove = originalRenderOnAddRemove;
    this.canvas.renderAll();
  },

  /**
   * @param {Object} pointer
   * @return {fabric.Point} Just added pointer point
   */
  addPoint: function(pointer) {
    var pointerPoint = new fabric.Point(pointer.x, pointer.y),

        circleRadius = fabric.util.getRandomInt(
                        Math.max(0, this.width - 20), this.width + 20) / 2,

        circleColor = new fabric.Color(this.color)
                        .setAlpha(fabric.util.getRandomInt(0, 100) / 100)
                        .toRgba();

    pointerPoint.radius = circleRadius;
    pointerPoint.fill = circleColor;

    this.points.push(pointerPoint);

    return pointerPoint;
  }
});


/**
 * SprayBrush class
 * @class fabric.SprayBrush
 */
fabric.SprayBrush = fabric.util.createClass( fabric.BaseBrush, /** @lends fabric.SprayBrush.prototype */ {

  /**
   * Width of a spray
   * @type Number
   * @default
   */
  width:              10,

  /**
   * Density of a spray (number of dots per chunk)
   * @type Number
   * @default
   */
  density:            20,

  /**
   * Width of spray dots
   * @type Number
   * @default
   */
  dotWidth:           1,

  /**
   * Width variance of spray dots
   * @type Number
   * @default
   */
  dotWidthVariance:   1,

  /**
   * Whether opacity of a dot should be random
   * @type Boolean
   * @default
   */
  randomOpacity:        false,

  /**
   * Whether overlapping dots (rectangles) should be removed (for performance reasons)
   * @type Boolean
   * @default
   */
  optimizeOverlapping:  true,

  /**
   * Constructor
   * @param {fabric.Canvas} canvas
   * @return {fabric.SprayBrush} Instance of a spray brush
   */
  initialize: function(canvas) {
    this.canvas = canvas;
    this.sprayChunks = [ ];
  },

  /**
   * Invoked on mouse down
   * @param {Object} pointer
   */
  onMouseDown: function(pointer) {
    this.sprayChunks.length = 0;
    this.canvas.clearContext(this.canvas.contextTop);
    this._setShadow();

    this.addSprayChunk(pointer);
    this.render();
  },

  /**
   * Invoked on mouse move
   * @param {Object} pointer
   */
  onMouseMove: function(pointer) {
    this.addSprayChunk(pointer);
    this.render();
  },

  /**
   * Invoked on mouse up
   */
  onMouseUp: function() {
    var originalRenderOnAddRemove = this.canvas.renderOnAddRemove;
    this.canvas.renderOnAddRemove = false;

    var rects = [ ];

    for (var i = 0, ilen = this.sprayChunks.length; i < ilen; i++) {
      var sprayChunk = this.sprayChunks[i];

      for (var j = 0, jlen = sprayChunk.length; j < jlen; j++) {

        var rect = new fabric.Rect({
          width: sprayChunk[j].width,
          height: sprayChunk[j].width,
          left: sprayChunk[j].x + 1,
          top: sprayChunk[j].y + 1,
          originX: 'center',
          originY: 'center',
          fill: this.color
        });

        this.shadow && rect.setShadow(this.shadow);
        rects.push(rect);
      }
    }

    if (this.optimizeOverlapping) {
      rects = this._getOptimizedRects(rects);
    }

    var group = new fabric.Group(rects, { originX: 'center', originY: 'center' });
    group.canvas = this.canvas;

    this.canvas.add(group);
    this.canvas.fire('path:created', { path: group });

    this.canvas.clearContext(this.canvas.contextTop);
    this._resetShadow();
    this.canvas.renderOnAddRemove = originalRenderOnAddRemove;
    this.canvas.renderAll();
  },

  /**
   * @private
   * @param {Array} rects
   */
  _getOptimizedRects: function(rects) {

    // avoid creating duplicate rects at the same coordinates
    var uniqueRects = { }, key;

    for (var i = 0, len = rects.length; i < len; i++) {
      key = rects[i].left + '' + rects[i].top;
      if (!uniqueRects[key]) {
        uniqueRects[key] = rects[i];
      }
    }
    var uniqueRectsArray = [ ];
    for (key in uniqueRects) {
      uniqueRectsArray.push(uniqueRects[key]);
    }

    return uniqueRectsArray;
  },

  /**
   * Renders brush
   */
  render: function() {
    var ctx = this.canvas.contextTop;
    ctx.fillStyle = this.color;

    var v = this.canvas.viewportTransform;
    ctx.save();
    ctx.transform(v[0], v[1], v[2], v[3], v[4], v[5]);

    for (var i = 0, len = this.sprayChunkPoints.length; i < len; i++) {
      var point = this.sprayChunkPoints[i];
      if (typeof point.opacity !== 'undefined') {
        ctx.globalAlpha = point.opacity;
      }
      ctx.fillRect(point.x, point.y, point.width, point.width);
    }
    ctx.restore();
  },

  /**
   * @param {Object} pointer
   */
  addSprayChunk: function(pointer) {
    this.sprayChunkPoints = [ ];

    var x, y, width, radius = this.width / 2;

    for (var i = 0; i < this.density; i++) {

      x = fabric.util.getRandomInt(pointer.x - radius, pointer.x + radius);
      y = fabric.util.getRandomInt(pointer.y - radius, pointer.y + radius);

      if (this.dotWidthVariance) {
        width = fabric.util.getRandomInt(
          // bottom clamp width to 1
          Math.max(1, this.dotWidth - this.dotWidthVariance),
          this.dotWidth + this.dotWidthVariance);
      }
      else {
        width = this.dotWidth;
      }

      var point = new fabric.Point(x, y);
      point.width = width;

      if (this.randomOpacity) {
        point.opacity = fabric.util.getRandomInt(0, 100) / 100;
      }

      this.sprayChunkPoints.push(point);
    }

    this.sprayChunks.push(this.sprayChunkPoints);
  }
});


/**
 * PatternBrush class
 * @class fabric.PatternBrush
 * @extends fabric.BaseBrush
 */
fabric.PatternBrush = fabric.util.createClass(fabric.PencilBrush, /** @lends fabric.PatternBrush.prototype */ {

  getPatternSrc: function() {

    var dotWidth = 20,
        dotDistance = 5,
        patternCanvas = fabric.document.createElement('canvas'),
        patternCtx = patternCanvas.getContext('2d');

    patternCanvas.width = patternCanvas.height = dotWidth + dotDistance;

    patternCtx.fillStyle = this.color;
    patternCtx.beginPath();
    patternCtx.arc(dotWidth / 2, dotWidth / 2, dotWidth / 2, 0, Math.PI * 2, false);
    patternCtx.closePath();
    patternCtx.fill();

    return patternCanvas;
  },

  getPatternSrcFunction: function() {
    return String(this.getPatternSrc).replace('this.color', '"' + this.color + '"');
  },

  /**
   * Creates "pattern" instance property
   */
  getPattern: function() {
    return this.canvas.contextTop.createPattern(this.source || this.getPatternSrc(), 'repeat');
  },

  /**
   * Sets brush styles
   */
  _setBrushStyles: function() {
    this.callSuper('_setBrushStyles');
    this.canvas.contextTop.strokeStyle = this.getPattern();
  },

  /**
   * Creates path
   */
  createPath: function(pathData) {
    var path = this.callSuper('createPath', pathData),
        topLeft = path._getLeftTopCoords().scalarAdd(path.strokeWidth / 2);

    path.stroke = new fabric.Pattern({
      source: this.source || this.getPatternSrcFunction(),
      offsetX: -topLeft.x,
      offsetY: -topLeft.y
    });
    return path;
  }
});


(function() {

  var getPointer = fabric.util.getPointer,
      degreesToRadians = fabric.util.degreesToRadians,
      radiansToDegrees = fabric.util.radiansToDegrees,
      atan2 = Math.atan2,
      abs = Math.abs,

      STROKE_OFFSET = 0.5;

  /**
   * Canvas class
   * @class fabric.Canvas
   * @extends fabric.StaticCanvas
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-1#canvas}
   * @see {@link fabric.Canvas#initialize} for constructor definition
   *
   * @fires object:added
   * @fires object:modified
   * @fires object:rotating
   * @fires object:scaling
   * @fires object:moving
   * @fires object:selected
   *
   * @fires before:selection:cleared
   * @fires selection:cleared
   * @fires selection:created
   *
   * @fires path:created
   * @fires mouse:down
   * @fires mouse:move
   * @fires mouse:up
   * @fires mouse:over
   * @fires mouse:out
   *
   */
  fabric.Canvas = fabric.util.createClass(fabric.StaticCanvas, /** @lends fabric.Canvas.prototype */ {

    /**
     * Constructor
     * @param {HTMLElement | String} el &lt;canvas> element to initialize instance on
     * @param {Object} [options] Options object
     * @return {Object} thisArg
     */
    initialize: function(el, options) {
      options || (options = { });

      this._initStatic(el, options);
      this._initInteractive();
      this._createCacheCanvas();
    },

    /**
     * When true, objects can be transformed by one side (unproportionally)
     * @type Boolean
     * @default
     */
    uniScaleTransform:      false,

    /**
     * Indicates which key enable unproportional scaling
     * values: altKey, shiftKey, ctrlKey
     * @since 1.6.2
     * @type String
     * @default
     */
    uniScaleKey:           'shiftKey',

    /**
     * When true, objects use center point as the origin of scale transformation.
     * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
     * @since 1.3.4
     * @type Boolean
     * @default
     */
    centeredScaling:        false,

    /**
     * When true, objects use center point as the origin of rotate transformation.
     * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
     * @since 1.3.4
     * @type Boolean
     * @default
     */
    centeredRotation:       false,

    /**
     * Indicates which key enable centered Transfrom
     * values: altKey, shiftKey, ctrlKey
     * @since 1.6.2
     * @type String
     * @default
     */
    centeredKey:           'altKey',

    /**
     * Indicates which key enable alternate action on corner
     * values: altKey, shiftKey, ctrlKey
     * @since 1.6.2
     * @type String
     * @default
     */
    altActionKey:           'shiftKey',

    /**
     * Indicates that canvas is interactive. This property should not be changed.
     * @type Boolean
     * @default
     */
    interactive:            true,

    /**
     * Indicates whether group selection should be enabled
     * @type Boolean
     * @default
     */
    selection:              true,

    /**
     * Indicates which key enable multiple click selection
     * values: altKey, shiftKey, ctrlKey
     * @since 1.6.2
     * @type String
     * @default
     */
    selectionKey:           'shiftKey',

    /**
     * Color of selection
     * @type String
     * @default
     */
    selectionColor:         'rgba(100, 100, 255, 0.3)', // blue

    /**
     * Default dash array pattern
     * If not empty the selection border is dashed
     * @type Array
     */
    selectionDashArray:     [ ],

    /**
     * Color of the border of selection (usually slightly darker than color of selection itself)
     * @type String
     * @default
     */
    selectionBorderColor:   'rgba(255, 255, 255, 0.3)',

    /**
     * Width of a line used in object/group selection
     * @type Number
     * @default
     */
    selectionLineWidth:     1,

    /**
     * Default cursor value used when hovering over an object on canvas
     * @type String
     * @default
     */
    hoverCursor:            'move',

    /**
     * Default cursor value used when moving an object on canvas
     * @type String
     * @default
     */
    moveCursor:             'move',

    /**
     * Default cursor value used for the entire canvas
     * @type String
     * @default
     */
    defaultCursor:          'default',

    /**
     * Cursor value used during free drawing
     * @type String
     * @default
     */
    freeDrawingCursor:      'crosshair',

    /**
     * Cursor value used for rotation point
     * @type String
     * @default
     */
    rotationCursor:         'crosshair',

    /**
     * Default element class that's given to wrapper (div) element of canvas
     * @type String
     * @default
     */
    containerClass:         'canvas-container',

    /**
     * When true, object detection happens on per-pixel basis rather than on per-bounding-box
     * @type Boolean
     * @default
     */
    perPixelTargetFind:     false,

    /**
     * Number of pixels around target pixel to tolerate (consider active) during object detection
     * @type Number
     * @default
     */
    targetFindTolerance:    0,

    /**
     * When true, target detection is skipped when hovering over canvas. This can be used to improve performance.
     * @type Boolean
     * @default
     */
    skipTargetFind:         false,

    /**
     * When true, mouse events on canvas (mousedown/mousemove/mouseup) result in free drawing.
     * After mousedown, mousemove creates a shape,
     * and then mouseup finalizes it and adds an instance of `fabric.Path` onto canvas.
     * @tutorial {@link http://fabricjs.com/fabric-intro-part-4#free_drawing}
     * @type Boolean
     * @default
     */
    isDrawingMode:          false,

    /**
     * Indicates whether objects should remain in current stack position when selected. When false objects are brought to top and rendered as part of the selection group
     * @type Boolean
     * @default
     */
    preserveObjectStacking: false,

    /**
     * @private
     */
    _initInteractive: function() {
      this._currentTransform = null;
      this._groupSelector = null;
      this._initWrapperElement();
      this._createUpperCanvas();
      this._initEventListeners();

      this._initRetinaScaling();

      this.freeDrawingBrush = fabric.PencilBrush && new fabric.PencilBrush(this);

      this.calcOffset();
    },

    /**
     * Divides objects in two groups, one to render immediately
     * and one to render as activeGroup.
     * @return {Array} objects to render immediately and pushes the other in the activeGroup.
     */
    _chooseObjectsToRender: function() {
      var activeGroup = this.getActiveGroup(),
          activeObject = this.getActiveObject(),
          object, objsToRender = [ ], activeGroupObjects = [ ];

      if ((activeGroup || activeObject) && !this.preserveObjectStacking) {
        for (var i = 0, length = this._objects.length; i < length; i++) {
          object = this._objects[i];
          if ((!activeGroup || !activeGroup.contains(object)) && object !== activeObject) {
            objsToRender.push(object);
          }
          else {
            activeGroupObjects.push(object);
          }
        }
        if (activeGroup) {
          activeGroup._set('_objects', activeGroupObjects);
          objsToRender.push(activeGroup);
        }
        activeObject && objsToRender.push(activeObject);
      }
      else {
        objsToRender = this._objects;
      }
      return objsToRender;
    },

    /**
     * Renders both the top canvas and the secondary container canvas.
     * @return {fabric.Canvas} instance
     * @chainable
     */
    renderAll: function () {
      if (this.selection && !this._groupSelector && !this.isDrawingMode) {
        this.clearContext(this.contextTop);
      }
      var canvasToDrawOn = this.contextContainer;
      this.renderCanvas(canvasToDrawOn, this._chooseObjectsToRender());
      return this;
    },

    /**
     * Method to render only the top canvas.
     * Also used to render the group selection box.
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    renderTop: function () {
      var ctx = this.contextTop;
      this.clearContext(ctx);

      // we render the top context - last object
      if (this.selection && this._groupSelector) {
        this._drawSelection(ctx);
      }

      this.fire('after:render');

      return this;
    },

    /**
     * Resets the current transform to its original values and chooses the type of resizing based on the event
     * @private
     */
    _resetCurrentTransform: function() {
      var t = this._currentTransform;

      t.target.set({
        scaleX: t.original.scaleX,
        scaleY: t.original.scaleY,
        skewX: t.original.skewX,
        skewY: t.original.skewY,
        left: t.original.left,
        top: t.original.top
      });

      if (this._shouldCenterTransform(t.target)) {
        if (t.action === 'rotate') {
          this._setOriginToCenter(t.target);
        }
        else {
          if (t.originX !== 'center') {
            if (t.originX === 'right') {
              t.mouseXSign = -1;
            }
            else {
              t.mouseXSign = 1;
            }
          }
          if (t.originY !== 'center') {
            if (t.originY === 'bottom') {
              t.mouseYSign = -1;
            }
            else {
              t.mouseYSign = 1;
            }
          }

          t.originX = 'center';
          t.originY = 'center';
        }
      }
      else {
        t.originX = t.original.originX;
        t.originY = t.original.originY;
      }
    },

    /**
     * Checks if point is contained within an area of given object
     * @param {Event} e Event object
     * @param {fabric.Object} target Object to test against
     * @param {Object} [point] x,y object of point coordinates we want to check.
     * @return {Boolean} true if point is contained within an area of given object
     */
    containsPoint: function (e, target, point) {
      var ignoreZoom = true,
          pointer = point || this.getPointer(e, ignoreZoom),
          xy;

      if (target.group && target.group === this.getActiveGroup()) {
        xy = this._normalizePointer(target.group, pointer);
      }
      else {
        xy = { x: pointer.x, y: pointer.y };
      }
      // http://www.geog.ubc.ca/courses/klink/gis.notes/ncgia/u32.html
      // http://idav.ucdavis.edu/~okreylos/TAship/Spring2000/PointInPolygon.html
      return (target.containsPoint(xy) || target._findTargetCorner(pointer));
    },

    /**
     * @private
     */
    _normalizePointer: function (object, pointer) {
      var m = object.calcTransformMatrix(),
          invertedM = fabric.util.invertTransform(m),
          vpt = this.viewportTransform,
          vptPointer = this.restorePointerVpt(pointer),
          p = fabric.util.transformPoint(vptPointer, invertedM);
      return fabric.util.transformPoint(p, vpt);
      //return { x: p.x * vpt[0], y: p.y * vpt[3] };
    },

    /**
     * Returns true if object is transparent at a certain location
     * @param {fabric.Object} target Object to check
     * @param {Number} x Left coordinate
     * @param {Number} y Top coordinate
     * @return {Boolean}
     */
    isTargetTransparent: function (target, x, y) {
      var hasBorders = target.hasBorders,
          transparentCorners = target.transparentCorners,
          ctx = this.contextCache,
          originalColor = target.selectionBackgroundColor;

      target.hasBorders = target.transparentCorners = false;
      target.selectionBackgroundColor = '';

      ctx.save();
      ctx.transform.apply(ctx, this.viewportTransform);
      target.render(ctx);
      ctx.restore();

      target.active && target._renderControls(ctx);

      target.hasBorders = hasBorders;
      target.transparentCorners = transparentCorners;
      target.selectionBackgroundColor = originalColor;

      var isTransparent = fabric.util.isTransparent(
        ctx, x, y, this.targetFindTolerance);

      this.clearContext(ctx);

      return isTransparent;
    },

    /**
     * @private
     * @param {Event} e Event object
     * @param {fabric.Object} target
     */
    _shouldClearSelection: function (e, target) {
      var activeGroup = this.getActiveGroup(),
          activeObject = this.getActiveObject();

      return (
        !target
        ||
        (target &&
          activeGroup &&
          !activeGroup.contains(target) &&
          activeGroup !== target &&
          !e[this.selectionKey])
        ||
        (target && !target.evented)
        ||
        (target &&
          !target.selectable &&
          activeObject &&
          activeObject !== target)
      );
    },

    /**
     * @private
     * @param {fabric.Object} target
     */
    _shouldCenterTransform: function (target) {
      if (!target) {
        return;
      }

      var t = this._currentTransform,
          centerTransform;

      if (t.action === 'scale' || t.action === 'scaleX' || t.action === 'scaleY') {
        centerTransform = this.centeredScaling || target.centeredScaling;
      }
      else if (t.action === 'rotate') {
        centerTransform = this.centeredRotation || target.centeredRotation;
      }

      return centerTransform ? !t.altKey : t.altKey;
    },

    /**
     * @private
     */
    _getOriginFromCorner: function(target, corner) {
      var origin = {
        x: target.originX,
        y: target.originY
      };

      if (corner === 'ml' || corner === 'tl' || corner === 'bl') {
        origin.x = 'right';
      }
      else if (corner === 'mr' || corner === 'tr' || corner === 'br') {
        origin.x = 'left';
      }

      if (corner === 'tl' || corner === 'mt' || corner === 'tr') {
        origin.y = 'bottom';
      }
      else if (corner === 'bl' || corner === 'mb' || corner === 'br') {
        origin.y = 'top';
      }

      return origin;
    },

    /**
     * @private
     */
    _getActionFromCorner: function(target, corner, e) {
      if (!corner) {
        return 'drag';
      }

      switch (corner) {
        case 'mtr':
          return 'rotate';
        case 'ml':
        case 'mr':
          return e[this.altActionKey] ? 'skewY' : 'scaleX';
        case 'mt':
        case 'mb':
          return e[this.altActionKey] ? 'skewX' : 'scaleY';
        default:
          return 'scale';
      }
    },

    /**
     * @private
     * @param {Event} e Event object
     * @param {fabric.Object} target
     */
    _setupCurrentTransform: function (e, target) {
      if (!target) {
        return;
      }

      var pointer = this.getPointer(e),
          corner = target._findTargetCorner(this.getPointer(e, true)),
          action = this._getActionFromCorner(target, corner, e),
          origin = this._getOriginFromCorner(target, corner);

      this._currentTransform = {
        target: target,
        action: action,
        corner: corner,
        scaleX: target.scaleX,
        scaleY: target.scaleY,
        skewX: target.skewX,
        skewY: target.skewY,
        offsetX: pointer.x - target.left,
        offsetY: pointer.y - target.top,
        originX: origin.x,
        originY: origin.y,
        ex: pointer.x,
        ey: pointer.y,
        lastX: pointer.x,
        lastY: pointer.y,
        left: target.left,
        top: target.top,
        theta: degreesToRadians(target.angle),
        width: target.width * target.scaleX,
        mouseXSign: 1,
        mouseYSign: 1,
        shiftKey: e.shiftKey,
        altKey: e[this.centeredKey]
      };

      this._currentTransform.original = {
        left: target.left,
        top: target.top,
        scaleX: target.scaleX,
        scaleY: target.scaleY,
        skewX: target.skewX,
        skewY: target.skewY,
        originX: origin.x,
        originY: origin.y
      };

      this._resetCurrentTransform();
    },

    /**
     * Translates object by "setting" its left/top
     * @private
     * @param {Number} x pointer's x coordinate
     * @param {Number} y pointer's y coordinate
     * @return {Boolean} true if the translation occurred
     */
    _translateObject: function (x, y) {
      var transform = this._currentTransform,
          target = transform.target,
          newLeft = x - transform.offsetX,
          newTop = y - transform.offsetY,
          moveX = !target.get('lockMovementX') && target.left !== newLeft,
          moveY = !target.get('lockMovementY') && target.top !== newTop;

      moveX && target.set('left', newLeft);
      moveY && target.set('top', newTop);
      return moveX || moveY;
    },

    /**
     * Check if we are increasing a positive skew or lower it,
     * checking mouse direction and pressed corner.
     * @private
     */
    _changeSkewTransformOrigin: function(mouseMove, t, by) {
      var property = 'originX', origins = { 0: 'center' },
          skew = t.target.skewX, originA = 'left', originB = 'right',
          corner = t.corner === 'mt' || t.corner === 'ml' ? 1 : -1,
          flipSign = 1;

      mouseMove = mouseMove > 0 ? 1 : -1;
      if (by === 'y') {
        skew = t.target.skewY;
        originA = 'top';
        originB = 'bottom';
        property = 'originY';
      }
      origins[-1] = originA;
      origins[1] = originB;

      t.target.flipX && (flipSign *= -1);
      t.target.flipY && (flipSign *= -1);

      if (skew === 0) {
        t.skewSign = -corner * mouseMove * flipSign;
        t[property] = origins[-mouseMove];
      }
      else {
        skew = skew > 0 ? 1 : -1;
        t.skewSign = skew;
        t[property] = origins[skew * corner * flipSign];
      }
    },

    /**
     * Skew object by mouse events
     * @private
     * @param {Number} x pointer's x coordinate
     * @param {Number} y pointer's y coordinate
     * @param {String} by Either 'x' or 'y'
     * @return {Boolean} true if the skewing occurred
     */
    _skewObject: function (x, y, by) {
      var t = this._currentTransform,
          target = t.target, skewed = false,
          lockSkewingX = target.get('lockSkewingX'),
          lockSkewingY = target.get('lockSkewingY');

      if ((lockSkewingX && by === 'x') || (lockSkewingY && by === 'y')) {
        return false;
      }

      // Get the constraint point
      var center = target.getCenterPoint(),
          actualMouseByCenter = target.toLocalPoint(new fabric.Point(x, y), 'center', 'center')[by],
          lastMouseByCenter = target.toLocalPoint(new fabric.Point(t.lastX, t.lastY), 'center', 'center')[by],
          actualMouseByOrigin, constraintPosition, dim = target._getTransformedDimensions();

      this._changeSkewTransformOrigin(actualMouseByCenter - lastMouseByCenter, t, by);
      actualMouseByOrigin = target.toLocalPoint(new fabric.Point(x, y), t.originX, t.originY)[by],

      constraintPosition = target.translateToOriginPoint(center, t.originX, t.originY);
      // Actually skew the object
      skewed = this._setObjectSkew(actualMouseByOrigin, t, by, dim);
      t.lastX = x;
      t.lastY = y;
      // Make sure the constraints apply
      target.setPositionByOrigin(constraintPosition, t.originX, t.originY);
      return skewed;
    },

    /**
     * Set object skew
     * @private
     * @return {Boolean} true if the skewing occurred
     */
    _setObjectSkew: function(localMouse, transform, by, _dim) {
      var target = transform.target, newValue, skewed = false,
          skewSign = transform.skewSign, newDim, dimNoSkew,
          otherBy, _otherBy, _by, newDimMouse, skewX, skewY;

      if (by === 'x') {
        otherBy = 'y';
        _otherBy = 'Y';
        _by = 'X';
        skewX = 0;
        skewY = target.skewY;
      }
      else {
        otherBy = 'x';
        _otherBy = 'X';
        _by = 'Y';
        skewX = target.skewX;
        skewY = 0;
      }

      dimNoSkew = target._getTransformedDimensions(skewX, skewY);
      newDimMouse = 2 * Math.abs(localMouse) - dimNoSkew[by];
      if (newDimMouse <= 2) {
        newValue = 0;
      }
      else {
        newValue = skewSign * Math.atan((newDimMouse / target['scale' + _by]) /
                                        (dimNoSkew[otherBy] / target['scale' + _otherBy]));
        newValue = fabric.util.radiansToDegrees(newValue);
      }
      skewed = target['skew' + _by] !== newValue;
      target.set('skew' + _by, newValue);
      if (target['skew' + _otherBy] !== 0) {
        newDim = target._getTransformedDimensions();
        newValue = (_dim[otherBy] / newDim[otherBy]) * target['scale' + _otherBy];
        target.set('scale' + _otherBy, newValue);
      }
      return skewed;
    },

    /**
     * Scales object by invoking its scaleX/scaleY methods
     * @private
     * @param {Number} x pointer's x coordinate
     * @param {Number} y pointer's y coordinate
     * @param {String} by Either 'x' or 'y' - specifies dimension constraint by which to scale an object.
     *                    When not provided, an object is scaled by both dimensions equally
     * @return {Boolean} true if the scaling occurred
     */
    _scaleObject: function (x, y, by) {
      var t = this._currentTransform,
          target = t.target,
          lockScalingX = target.get('lockScalingX'),
          lockScalingY = target.get('lockScalingY'),
          lockScalingFlip = target.get('lockScalingFlip');

      if (lockScalingX && lockScalingY) {
        return false;
      }

      // Get the constraint point
      var constraintPosition = target.translateToOriginPoint(target.getCenterPoint(), t.originX, t.originY),
          localMouse = target.toLocalPoint(new fabric.Point(x, y), t.originX, t.originY),
          dim = target._getTransformedDimensions(), scaled = false;

      this._setLocalMouse(localMouse, t);

      // Actually scale the object
      scaled = this._setObjectScale(localMouse, t, lockScalingX, lockScalingY, by, lockScalingFlip, dim);

      // Make sure the constraints apply
      target.setPositionByOrigin(constraintPosition, t.originX, t.originY);
      return scaled;
    },

    /**
     * @private
     * @return {Boolean} true if the scaling occurred
     */
    _setObjectScale: function(localMouse, transform, lockScalingX, lockScalingY, by, lockScalingFlip, _dim) {
      var target = transform.target, forbidScalingX = false, forbidScalingY = false, scaled = false,
          changeX, changeY, scaleX, scaleY;

      scaleX = localMouse.x * target.scaleX / _dim.x;
      scaleY = localMouse.y * target.scaleY / _dim.y;
      changeX = target.scaleX !== scaleX;
      changeY = target.scaleY !== scaleY;

      if (lockScalingFlip && scaleX <= 0 && scaleX < target.scaleX) {
        forbidScalingX = true;
      }

      if (lockScalingFlip && scaleY <= 0 && scaleY < target.scaleY) {
        forbidScalingY = true;
      }

      if (by === 'equally' && !lockScalingX && !lockScalingY) {
        forbidScalingX || forbidScalingY || (scaled = this._scaleObjectEqually(localMouse, target, transform, _dim));
      }
      else if (!by) {
        forbidScalingX || lockScalingX || (target.set('scaleX', scaleX) && (scaled = scaled || changeX));
        forbidScalingY || lockScalingY || (target.set('scaleY', scaleY) && (scaled = scaled || changeY));
      }
      else if (by === 'x' && !target.get('lockUniScaling')) {
        forbidScalingX || lockScalingX || (target.set('scaleX', scaleX) && (scaled = scaled || changeX));
      }
      else if (by === 'y' && !target.get('lockUniScaling')) {
        forbidScalingY || lockScalingY || (target.set('scaleY', scaleY) && (scaled = scaled || changeY));
      }
      transform.newScaleX = scaleX;
      transform.newScaleY = scaleY;
      forbidScalingX || forbidScalingY || this._flipObject(transform, by);
      return scaled;
    },

    /**
     * @private
     * @return {Boolean} true if the scaling occurred
     */
    _scaleObjectEqually: function(localMouse, target, transform, _dim) {

      var dist = localMouse.y + localMouse.x,
          lastDist = _dim.y * transform.original.scaleY / target.scaleY +
                     _dim.x * transform.original.scaleX / target.scaleX,
          scaled;

      // We use transform.scaleX/Y instead of target.scaleX/Y
      // because the object may have a min scale and we'll loose the proportions
      transform.newScaleX = transform.original.scaleX * dist / lastDist;
      transform.newScaleY = transform.original.scaleY * dist / lastDist;
      scaled = transform.newScaleX !== target.scaleX || transform.newScaleY !== target.scaleY;
      target.set('scaleX', transform.newScaleX);
      target.set('scaleY', transform.newScaleY);
      return scaled;
    },

    /**
     * @private
     */
    _flipObject: function(transform, by) {
      if (transform.newScaleX < 0 && by !== 'y') {
        if (transform.originX === 'left') {
          transform.originX = 'right';
        }
        else if (transform.originX === 'right') {
          transform.originX = 'left';
        }
      }

      if (transform.newScaleY < 0 && by !== 'x') {
        if (transform.originY === 'top') {
          transform.originY = 'bottom';
        }
        else if (transform.originY === 'bottom') {
          transform.originY = 'top';
        }
      }
    },

    /**
     * @private
     */
    _setLocalMouse: function(localMouse, t) {
      var target = t.target;

      if (t.originX === 'right') {
        localMouse.x *= -1;
      }
      else if (t.originX === 'center') {
        localMouse.x *= t.mouseXSign * 2;
        if (localMouse.x < 0) {
          t.mouseXSign = -t.mouseXSign;
        }
      }

      if (t.originY === 'bottom') {
        localMouse.y *= -1;
      }
      else if (t.originY === 'center') {
        localMouse.y *= t.mouseYSign * 2;
        if (localMouse.y < 0) {
          t.mouseYSign = -t.mouseYSign;
        }
      }

      // adjust the mouse coordinates when dealing with padding
      if (abs(localMouse.x) > target.padding) {
        if (localMouse.x < 0) {
          localMouse.x += target.padding;
        }
        else {
          localMouse.x -= target.padding;
        }
      }
      else { // mouse is within the padding, set to 0
        localMouse.x = 0;
      }

      if (abs(localMouse.y) > target.padding) {
        if (localMouse.y < 0) {
          localMouse.y += target.padding;
        }
        else {
          localMouse.y -= target.padding;
        }
      }
      else {
        localMouse.y = 0;
      }
    },

    /**
     * Rotates object by invoking its rotate method
     * @private
     * @param {Number} x pointer's x coordinate
     * @param {Number} y pointer's y coordinate
     * @return {Boolean} true if the rotation occurred
     */
    _rotateObject: function (x, y) {

      var t = this._currentTransform;

      if (t.target.get('lockRotation')) {
        return false;
      }

      var lastAngle = atan2(t.ey - t.top, t.ex - t.left),
          curAngle = atan2(y - t.top, x - t.left),
          angle = radiansToDegrees(curAngle - lastAngle + t.theta);

      // normalize angle to positive value
      if (angle < 0) {
        angle = 360 + angle;
      }

      t.target.angle = angle % 360;
      return true;
    },

    /**
     * Set the cursor type of the canvas element
     * @param {String} value Cursor type of the canvas element.
     * @see http://www.w3.org/TR/css3-ui/#cursor
     */
    setCursor: function (value) {
      this.upperCanvasEl.style.cursor = value;
    },

    /**
     * @param {fabric.Object} target to reset transform
     * @private
     */
    _resetObjectTransform: function (target) {
      target.scaleX = 1;
      target.scaleY = 1;
      target.skewX = 0;
      target.skewY = 0;
      target.setAngle(0);
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx to draw the selection on
     */
    _drawSelection: function (ctx) {
      var groupSelector = this._groupSelector,
          left = groupSelector.left,
          top = groupSelector.top,
          aleft = abs(left),
          atop = abs(top);

      ctx.fillStyle = this.selectionColor;

      ctx.fillRect(
        groupSelector.ex - ((left > 0) ? 0 : -left),
        groupSelector.ey - ((top > 0) ? 0 : -top),
        aleft,
        atop
      );

      ctx.lineWidth = this.selectionLineWidth;
      ctx.strokeStyle = this.selectionBorderColor;

      // selection border
      if (this.selectionDashArray.length > 1) {

        var px = groupSelector.ex + STROKE_OFFSET - ((left > 0) ? 0: aleft),
            py = groupSelector.ey + STROKE_OFFSET - ((top > 0) ? 0: atop);

        ctx.beginPath();

        fabric.util.drawDashedLine(ctx, px, py, px + aleft, py, this.selectionDashArray);
        fabric.util.drawDashedLine(ctx, px, py + atop - 1, px + aleft, py + atop - 1, this.selectionDashArray);
        fabric.util.drawDashedLine(ctx, px, py, px, py + atop, this.selectionDashArray);
        fabric.util.drawDashedLine(ctx, px + aleft - 1, py, px + aleft - 1, py + atop, this.selectionDashArray);

        ctx.closePath();
        ctx.stroke();
      }
      else {
        ctx.strokeRect(
          groupSelector.ex + STROKE_OFFSET - ((left > 0) ? 0 : aleft),
          groupSelector.ey + STROKE_OFFSET - ((top > 0) ? 0 : atop),
          aleft,
          atop
        );
      }
    },

    /**
     * Method that determines what object we are clicking on
     * @param {Event} e mouse event
     * @param {Boolean} skipGroup when true, activeGroup is skipped and only objects are traversed through
     */
    findTarget: function (e, skipGroup) {
      if (this.skipTargetFind) {
        return;
      }

      var ignoreZoom = true,
          pointer = this.getPointer(e, ignoreZoom),
          activeGroup = this.getActiveGroup(),
          activeObject = this.getActiveObject();

      // first check current group (if one exists)
      // active group does not check sub targets like normal groups.
      // if active group just exits.
      if (activeGroup && !skipGroup && this._checkTarget(pointer, activeGroup)) {
        return activeGroup;
      }

      if (activeObject && this._checkTarget(pointer, activeObject)) {
        return activeObject;
      }

      this.targets = [ ];

      var target = this._searchPossibleTargets(this._objects, pointer);
      this._fireOverOutEvents(target, e);
      return target;
    },

    /**
     * @private
     */
    _fireOverOutEvents: function(target, e) {
      if (target) {
        if (this._hoveredTarget !== target) {
          if (this._hoveredTarget) {
            this.fire('mouse:out', { target: this._hoveredTarget, e: e });
            this._hoveredTarget.fire('mouseout');
          }
          this.fire('mouse:over', { target: target, e: e });
          target.fire('mouseover');
          this._hoveredTarget = target;
        }
      }
      else if (this._hoveredTarget) {
        this.fire('mouse:out', { target: this._hoveredTarget, e: e });
        this._hoveredTarget.fire('mouseout');
        this._hoveredTarget = null;
      }
    },

    /**
     * @private
     */
    _checkTarget: function(pointer, obj) {
      if (obj &&
          obj.visible &&
          obj.evented &&
          this.containsPoint(null, obj, pointer)){
        if ((this.perPixelTargetFind || obj.perPixelTargetFind) && !obj.isEditing) {
          var isTransparent = this.isTargetTransparent(obj, pointer.x, pointer.y);
          if (!isTransparent) {
            return true;
          }
        }
        else {
          return true;
        }
      }
    },

    /**
     * @private
     */
    _searchPossibleTargets: function(objects, pointer) {

      // Cache all targets where their bounding box contains point.
      var target, i = objects.length, normalizedPointer, subTarget;
      // Do not check for currently grouped objects, since we check the parent group itself.
      // untill we call this function specifically to search inside the activeGroup
      while (i--) {
        if (this._checkTarget(pointer, objects[i])) {
          target = objects[i];
          if (target.type === 'group' && target.subTargetCheck) {
            normalizedPointer = this._normalizePointer(target, pointer);
            subTarget = this._searchPossibleTargets(target._objects, normalizedPointer);
            subTarget && this.targets.push(subTarget);
          }
          break;
        }
      }
      return target;
    },

    /**
     * Returns pointer coordinates without the effect of the viewport
     * @param {Object} pointer with "x" and "y" number values
     * @return {Object} object with "x" and "y" number values
     */
    restorePointerVpt: function(pointer) {
      return fabric.util.transformPoint(
        pointer,
        fabric.util.invertTransform(this.viewportTransform)
      );
    },

    /**
     * Returns pointer coordinates relative to canvas.
     * @param {Event} e
     * @param {Boolean} ignoreZoom
     * @return {Object} object with "x" and "y" number values
     */
    getPointer: function (e, ignoreZoom, upperCanvasEl) {
      if (!upperCanvasEl) {
        upperCanvasEl = this.upperCanvasEl;
      }
      var pointer = getPointer(e),
          bounds = upperCanvasEl.getBoundingClientRect(),
          boundsWidth = bounds.width || 0,
          boundsHeight = bounds.height || 0,
          cssScale;

      if (!boundsWidth || !boundsHeight ) {
        if ('top' in bounds && 'bottom' in bounds) {
          boundsHeight = Math.abs( bounds.top - bounds.bottom );
        }
        if ('right' in bounds && 'left' in bounds) {
          boundsWidth = Math.abs( bounds.right - bounds.left );
        }
      }

      this.calcOffset();

      pointer.x = pointer.x - this._offset.left;
      pointer.y = pointer.y - this._offset.top;
      if (!ignoreZoom) {
        pointer = this.restorePointerVpt(pointer);
      }

      if (boundsWidth === 0 || boundsHeight === 0) {
        // If bounds are not available (i.e. not visible), do not apply scale.
        cssScale = { width: 1, height: 1 };
      }
      else {
        cssScale = {
          width: upperCanvasEl.width / boundsWidth,
          height: upperCanvasEl.height / boundsHeight
        };
      }

      return {
        x: pointer.x * cssScale.width,
        y: pointer.y * cssScale.height
      };
    },

    /**
     * @private
     * @throws {CANVAS_INIT_ERROR} If canvas can not be initialized
     */
    _createUpperCanvas: function () {
      var lowerCanvasClass = this.lowerCanvasEl.className.replace(/\s*lower-canvas\s*/, '');

      this.upperCanvasEl = this._createCanvasElement();
      fabric.util.addClass(this.upperCanvasEl, 'upper-canvas ' + lowerCanvasClass);

      this.wrapperEl.appendChild(this.upperCanvasEl);

      this._copyCanvasStyle(this.lowerCanvasEl, this.upperCanvasEl);
      this._applyCanvasStyle(this.upperCanvasEl);
      this.contextTop = this.upperCanvasEl.getContext('2d');
    },

    /**
     * @private
     */
    _createCacheCanvas: function () {
      this.cacheCanvasEl = this._createCanvasElement();
      this.cacheCanvasEl.setAttribute('width', this.width);
      this.cacheCanvasEl.setAttribute('height', this.height);
      this.contextCache = this.cacheCanvasEl.getContext('2d');
    },

    /**
     * @private
     */
    _initWrapperElement: function () {
      this.wrapperEl = fabric.util.wrapElement(this.lowerCanvasEl, 'div', {
        'class': this.containerClass
      });
      fabric.util.setStyle(this.wrapperEl, {
        width: this.getWidth() + 'px',
        height: this.getHeight() + 'px',
        position: 'relative'
      });
      fabric.util.makeElementUnselectable(this.wrapperEl);
    },

    /**
     * @private
     * @param {HTMLElement} element canvas element to apply styles on
     */
    _applyCanvasStyle: function (element) {
      var width = this.getWidth() || element.width,
          height = this.getHeight() || element.height;

      fabric.util.setStyle(element, {
        position: 'absolute',
        width: width + 'px',
        height: height + 'px',
        left: 0,
        top: 0
      });
      element.width = width;
      element.height = height;
      fabric.util.makeElementUnselectable(element);
    },

    /**
     * Copys the the entire inline style from one element (fromEl) to another (toEl)
     * @private
     * @param {Element} fromEl Element style is copied from
     * @param {Element} toEl Element copied style is applied to
     */
    _copyCanvasStyle: function (fromEl, toEl) {
      toEl.style.cssText = fromEl.style.cssText;
    },

    /**
     * Returns context of canvas where object selection is drawn
     * @return {CanvasRenderingContext2D}
     */
    getSelectionContext: function() {
      return this.contextTop;
    },

    /**
     * Returns &lt;canvas> element on which object selection is drawn
     * @return {HTMLCanvasElement}
     */
    getSelectionElement: function () {
      return this.upperCanvasEl;
    },

    /**
     * @private
     * @param {Object} object
     */
    _setActiveObject: function(object) {
      if (this._activeObject) {
        this._activeObject.set('active', false);
      }
      this._activeObject = object;
      object.set('active', true);
    },

    /**
     * Sets given object as the only active object on canvas
     * @param {fabric.Object} object Object to set as an active one
     * @param {Event} [e] Event (passed along when firing "object:selected")
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    setActiveObject: function (object, e) {
      this._setActiveObject(object);
      this.renderAll();
      this.fire('object:selected', { target: object, e: e });
      object.fire('selected', { e: e });
      return this;
    },

    /**
     * Returns currently active object
     * @return {fabric.Object} active object
     */
    getActiveObject: function () {
      return this._activeObject;
    },

    /**
     * @private
     * @param {fabric.Object} obj Object that was removed
     */
    _onObjectRemoved: function(obj) {
      // removing active object should fire "selection:cleared" events
      if (this.getActiveObject() === obj) {
        this.fire('before:selection:cleared', { target: obj });
        this._discardActiveObject();
        this.fire('selection:cleared', { target: obj });
        obj.fire('deselected');
      }
      this.callSuper('_onObjectRemoved', obj);
    },

    /**
     * @private
     */
    _discardActiveObject: function() {
      if (this._activeObject) {
        this._activeObject.set('active', false);
      }
      this._activeObject = null;
    },

    /**
     * Discards currently active object and fire events
     * @param {event} e
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    discardActiveObject: function (e) {
      var activeObject = this._activeObject;
      this.fire('before:selection:cleared', { target: activeObject, e: e });
      this._discardActiveObject();
      this.fire('selection:cleared', { e: e });
      activeObject && activeObject.fire('deselected', { e: e });
      return this;
    },

    /**
     * @private
     * @param {fabric.Group} group
     */
    _setActiveGroup: function(group) {
      this._activeGroup = group;
      if (group) {
        group.set('active', true);
      }
    },

    /**
     * Sets active group to a specified one
     * @param {fabric.Group} group Group to set as a current one
     * @param {Event} e Event object
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    setActiveGroup: function (group, e) {
      this._setActiveGroup(group);
      if (group) {
        this.fire('object:selected', { target: group, e: e });
        group.fire('selected', { e: e });
      }
      return this;
    },

    /**
     * Returns currently active group
     * @return {fabric.Group} Current group
     */
    getActiveGroup: function () {
      return this._activeGroup;
    },

    /**
     * @private
     */
    _discardActiveGroup: function() {
      var g = this.getActiveGroup();
      if (g) {
        g.destroy();
      }
      this.setActiveGroup(null);
    },

    /**
     * Discards currently active group and fire events
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    discardActiveGroup: function (e) {
      var g = this.getActiveGroup();
      this.fire('before:selection:cleared', { e: e, target: g });
      this._discardActiveGroup();
      this.fire('selection:cleared', { e: e });
      return this;
    },

    /**
     * Deactivates all objects on canvas, removing any active group or object
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    deactivateAll: function () {
      var allObjects = this.getObjects(),
          i = 0,
          len = allObjects.length;
      for ( ; i < len; i++) {
        allObjects[i].set('active', false);
      }
      this._discardActiveGroup();
      this._discardActiveObject();
      return this;
    },

    /**
     * Deactivates all objects and dispatches appropriate events
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    deactivateAllWithDispatch: function (e) {
      var activeGroup = this.getActiveGroup(),
          activeObject = this.getActiveObject();
      if (activeObject || activeGroup) {
        this.fire('before:selection:cleared', { target: activeObject || activeGroup, e: e });
      }
      this.deactivateAll();
      if (activeObject || activeGroup) {
        this.fire('selection:cleared', { e: e, target: activeObject });
        activeObject && activeObject.fire('deselected');
      }
      return this;
    },

    /**
     * Clears a canvas element and removes all event listeners
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    dispose: function () {
      this.callSuper('dispose');
      var wrapper = this.wrapperEl;
      this.removeListeners();
      wrapper.removeChild(this.upperCanvasEl);
      wrapper.removeChild(this.lowerCanvasEl);
      delete this.upperCanvasEl;
      if (wrapper.parentNode) {
        wrapper.parentNode.replaceChild(this.lowerCanvasEl, this.wrapperEl);
      }
      delete this.wrapperEl;
      return this;
    },

    /**
     * Clears all contexts (background, main, top) of an instance
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    clear: function () {
      this.discardActiveGroup();
      this.discardActiveObject();
      this.clearContext(this.contextTop);
      return this.callSuper('clear');
    },

    /**
     * Draws objects' controls (borders/controls)
     * @param {CanvasRenderingContext2D} ctx Context to render controls on
     */
    drawControls: function(ctx) {
      var activeGroup = this.getActiveGroup();

      if (activeGroup) {
        activeGroup._renderControls(ctx);
      }
      else {
        this._drawObjectsControls(ctx);
      }
    },

    /**
     * @private
     */
    _drawObjectsControls: function(ctx) {
      for (var i = 0, len = this._objects.length; i < len; ++i) {
        if (!this._objects[i] || !this._objects[i].active) {
          continue;
        }
        this._objects[i]._renderControls(ctx);
      }
    },

  });

  // copying static properties manually to work around Opera's bug,
  // where "prototype" property is enumerable and overrides existing prototype
  for (var prop in fabric.StaticCanvas) {
    if (prop !== 'prototype') {
      fabric.Canvas[prop] = fabric.StaticCanvas[prop];
    }
  }

  if (fabric.isTouchSupported) {
    /** @ignore */
    fabric.Canvas.prototype._setCursorFromEvent = function() { };
  }

  /**
   * @ignore
   * @class fabric.Element
   * @alias fabric.Canvas
   * @deprecated Use {@link fabric.Canvas} instead.
   * @constructor
   */
  fabric.Element = fabric.Canvas;
})();


(function() {

  var cursorOffset = {
    mt: 0, // n
    tr: 1, // ne
    mr: 2, // e
    br: 3, // se
    mb: 4, // s
    bl: 5, // sw
    ml: 6, // w
    tl: 7 // nw
  },
  addListener = fabric.util.addListener,
  removeListener = fabric.util.removeListener;

  fabric.util.object.extend(fabric.Canvas.prototype, /** @lends fabric.Canvas.prototype */ {

    /**
     * Map of cursor style values for each of the object controls
     * @private
     */
    cursorMap: [
      'n-resize',
      'ne-resize',
      'e-resize',
      'se-resize',
      's-resize',
      'sw-resize',
      'w-resize',
      'nw-resize'
    ],

    /**
     * Adds mouse listeners to canvas
     * @private
     */
    _initEventListeners: function () {

      this._bindEvents();

      addListener(fabric.window, 'resize', this._onResize);

      // mouse events
      addListener(this.upperCanvasEl, 'mousedown', this._onMouseDown);
      addListener(this.upperCanvasEl, 'mousemove', this._onMouseMove);
      addListener(this.upperCanvasEl, 'mouseout', this._onMouseOut);
      addListener(this.upperCanvasEl, 'wheel', this._onMouseWheel);

      // touch events
      addListener(this.upperCanvasEl, 'touchstart', this._onMouseDown);
      addListener(this.upperCanvasEl, 'touchmove', this._onMouseMove);

      if (typeof eventjs !== 'undefined' && 'add' in eventjs) {
        eventjs.add(this.upperCanvasEl, 'gesture', this._onGesture);
        eventjs.add(this.upperCanvasEl, 'drag', this._onDrag);
        eventjs.add(this.upperCanvasEl, 'orientation', this._onOrientationChange);
        eventjs.add(this.upperCanvasEl, 'shake', this._onShake);
        eventjs.add(this.upperCanvasEl, 'longpress', this._onLongPress);
      }
    },

    /**
     * @private
     */
    _bindEvents: function() {
      this._onMouseDown = this._onMouseDown.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      this._onMouseUp = this._onMouseUp.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onGesture = this._onGesture.bind(this);
      this._onDrag = this._onDrag.bind(this);
      this._onShake = this._onShake.bind(this);
      this._onLongPress = this._onLongPress.bind(this);
      this._onOrientationChange = this._onOrientationChange.bind(this);
      this._onMouseWheel = this._onMouseWheel.bind(this);
      this._onMouseOut = this._onMouseOut.bind(this);
    },

    /**
     * Removes all event listeners
     */
    removeListeners: function() {
      removeListener(fabric.window, 'resize', this._onResize);

      removeListener(this.upperCanvasEl, 'mousedown', this._onMouseDown);
      removeListener(this.upperCanvasEl, 'mousemove', this._onMouseMove);
      removeListener(this.upperCanvasEl, 'mouseout', this._onMouseOut);
      removeListener(this.upperCanvasEl, 'wheel', this._onMouseWheel);

      removeListener(this.upperCanvasEl, 'touchstart', this._onMouseDown);
      removeListener(this.upperCanvasEl, 'touchmove', this._onMouseMove);

      if (typeof eventjs !== 'undefined' && 'remove' in eventjs) {
        eventjs.remove(this.upperCanvasEl, 'gesture', this._onGesture);
        eventjs.remove(this.upperCanvasEl, 'drag', this._onDrag);
        eventjs.remove(this.upperCanvasEl, 'orientation', this._onOrientationChange);
        eventjs.remove(this.upperCanvasEl, 'shake', this._onShake);
        eventjs.remove(this.upperCanvasEl, 'longpress', this._onLongPress);
      }
    },

    /**
     * @private
     * @param {Event} [e] Event object fired on Event.js gesture
     * @param {Event} [self] Inner Event object
     */
    _onGesture: function(e, self) {
      this.__onTransformGesture && this.__onTransformGesture(e, self);
    },

    /**
     * @private
     * @param {Event} [e] Event object fired on Event.js drag
     * @param {Event} [self] Inner Event object
     */
    _onDrag: function(e, self) {
      this.__onDrag && this.__onDrag(e, self);
    },

    /**
     * @private
     * @param {Event} [e] Event object fired on wheel event
     */
    _onMouseWheel: function(e) {
      this.__onMouseWheel(e);
    },

    /**
     * @private
     * @param {Event} e Event object fired on mousedown
     */
    _onMouseOut: function(e) {
      var target = this._hoveredTarget;
      this.fire('mouse:out', { target: target, e: e });
      this._hoveredTarget = null;
      target && target.fire('mouseout', { e: e });
    },

    /**
     * @private
     * @param {Event} [e] Event object fired on Event.js orientation change
     * @param {Event} [self] Inner Event object
     */
    _onOrientationChange: function(e, self) {
      this.__onOrientationChange && this.__onOrientationChange(e, self);
    },

    /**
     * @private
     * @param {Event} [e] Event object fired on Event.js shake
     * @param {Event} [self] Inner Event object
     */
    _onShake: function(e, self) {
      this.__onShake && this.__onShake(e, self);
    },

    /**
     * @private
     * @param {Event} [e] Event object fired on Event.js shake
     * @param {Event} [self] Inner Event object
     */
    _onLongPress: function(e, self) {
      this.__onLongPress && this.__onLongPress(e, self);
    },

    /**
     * @private
     * @param {Event} e Event object fired on mousedown
     */
    _onMouseDown: function (e) {
      this.__onMouseDown(e);

      addListener(fabric.document, 'touchend', this._onMouseUp);
      addListener(fabric.document, 'touchmove', this._onMouseMove);

      removeListener(this.upperCanvasEl, 'mousemove', this._onMouseMove);
      removeListener(this.upperCanvasEl, 'touchmove', this._onMouseMove);

      if (e.type === 'touchstart') {
        // Unbind mousedown to prevent double triggers from touch devices
        removeListener(this.upperCanvasEl, 'mousedown', this._onMouseDown);
      }
      else {
        addListener(fabric.document, 'mouseup', this._onMouseUp);
        addListener(fabric.document, 'mousemove', this._onMouseMove);
      }
    },

    /**
     * @private
     * @param {Event} e Event object fired on mouseup
     */
    _onMouseUp: function (e) {
      this.__onMouseUp(e);

      removeListener(fabric.document, 'mouseup', this._onMouseUp);
      removeListener(fabric.document, 'touchend', this._onMouseUp);

      removeListener(fabric.document, 'mousemove', this._onMouseMove);
      removeListener(fabric.document, 'touchmove', this._onMouseMove);

      addListener(this.upperCanvasEl, 'mousemove', this._onMouseMove);
      addListener(this.upperCanvasEl, 'touchmove', this._onMouseMove);

      if (e.type === 'touchend') {
        // Wait 400ms before rebinding mousedown to prevent double triggers
        // from touch devices
        var _this = this;
        setTimeout(function() {
          addListener(_this.upperCanvasEl, 'mousedown', _this._onMouseDown);
        }, 400);
      }
    },

    /**
     * @private
     * @param {Event} e Event object fired on mousemove
     */
    _onMouseMove: function (e) {
      !this.allowTouchScrolling && e.preventDefault && e.preventDefault();
      this.__onMouseMove(e);
    },

    /**
     * @private
     */
    _onResize: function () {
      this.calcOffset();
    },

    /**
     * Decides whether the canvas should be redrawn in mouseup and mousedown events.
     * @private
     * @param {Object} target
     * @param {Object} pointer
     */
    _shouldRender: function(target, pointer) {
      var activeObject = this.getActiveGroup() || this.getActiveObject();

      return !!(
        (target && (
          target.isMoving ||
          target !== activeObject))
        ||
        (!target && !!activeObject)
        ||
        (!target && !activeObject && !this._groupSelector)
        ||
        (pointer &&
          this._previousPointer &&
          this.selection && (
          pointer.x !== this._previousPointer.x ||
          pointer.y !== this._previousPointer.y))
      );
    },

    /**
     * Method that defines the actions when mouse is released on canvas.
     * The method resets the currentTransform parameters, store the image corner
     * position in the image object and render the canvas on top.
     * @private
     * @param {Event} e Event object fired on mouseup
     */
    __onMouseUp: function (e) {
      var target, searchTarget = true, transform = this._currentTransform,
          groupSelector = this._groupSelector,
          isClick = (!groupSelector || (groupSelector.left === 0 && groupSelector.top === 0));

      if (this.isDrawingMode && this._isCurrentlyDrawing) {
        this._onMouseUpInDrawingMode(e);
        return;
      }

      if (transform) {
        this._finalizeCurrentTransform();
        searchTarget = !transform.actionPerformed;
      }

      target = searchTarget ? this.findTarget(e, true) : transform.target;

      var shouldRender = this._shouldRender(target, this.getPointer(e));

      if (target || !isClick) {
        this._maybeGroupObjects(e);
      }
      else {
        // those are done by default on mouse up
        // by _maybeGroupObjects, we are skipping it in case of no target find
        this._groupSelector = null;
        this._currentTransform = null;
      }

      if (target) {
        target.isMoving = false;
      }

      this._handleCursorAndEvent(e, target, 'up');
      target && (target.__corner = 0);
      shouldRender && this.renderAll();
    },

    /**
     * set cursor for mouse up and handle mouseUp event
     * @param {Event} e event from mouse
     * @param {fabric.Object} target receiving event
     * @param {String} eventType event to fire (up, down or move)
     */
    _handleCursorAndEvent: function(e, target, eventType) {
      this._setCursorFromEvent(e, target);
      this._handleEvent(e, eventType, target ? target : null);
    },

    /**
     * Handle event firing for target and subtargets
     * @param {Event} e event from mouse
     * @param {String} eventType event to fire (up, down or move)
     * @param {fabric.Object} targetObj receiving event
     */
    _handleEvent: function(e, eventType, targetObj) {
      var target = typeof targetObj === undefined ? this.findTarget(e) : targetObj,
          targets = this.targets || [ ],
          options = { e: e, target: target, subTargets: targets };

      this.fire('mouse:' + eventType, options);
      target && target.fire('mouse' + eventType, options);
      for (var i = 0; i < targets.length; i++) {
        targets[i].fire('mouse' + eventType, options);
      }
    },

    /**
     * @private
     */
    _finalizeCurrentTransform: function() {

      var transform = this._currentTransform,
          target = transform.target;

      if (target._scaling) {
        target._scaling = false;
      }

      target.setCoords();
      this._restoreOriginXY(target);

      if (transform.actionPerformed || (this.stateful && target.hasStateChanged())) {
        this.fire('object:modified', { target: target });
        target.fire('modified');
      }
    },

    /**
     * @private
     * @param {Object} target Object to restore
     */
    _restoreOriginXY: function(target) {
      if (this._previousOriginX && this._previousOriginY) {

        var originPoint = target.translateToOriginPoint(
          target.getCenterPoint(),
          this._previousOriginX,
          this._previousOriginY);

        target.originX = this._previousOriginX;
        target.originY = this._previousOriginY;

        target.left = originPoint.x;
        target.top = originPoint.y;

        this._previousOriginX = null;
        this._previousOriginY = null;
      }
    },

    /**
     * @private
     * @param {Event} e Event object fired on mousedown
     */
    _onMouseDownInDrawingMode: function(e) {
      this._isCurrentlyDrawing = true;
      this.discardActiveObject(e).renderAll();
      if (this.clipTo) {
        fabric.util.clipContext(this, this.contextTop);
      }
      var pointer = this.getPointer(e);
      this.freeDrawingBrush.onMouseDown(pointer);
      this._handleEvent(e, 'down');
    },

    /**
     * @private
     * @param {Event} e Event object fired on mousemove
     */
    _onMouseMoveInDrawingMode: function(e) {
      if (this._isCurrentlyDrawing) {
        var pointer = this.getPointer(e);
        this.freeDrawingBrush.onMouseMove(pointer);
      }
      this.setCursor(this.freeDrawingCursor);
      this._handleEvent(e, 'move');
    },

    /**
     * @private
     * @param {Event} e Event object fired on mouseup
     */
    _onMouseUpInDrawingMode: function(e) {
      this._isCurrentlyDrawing = false;
      if (this.clipTo) {
        this.contextTop.restore();
      }
      this.freeDrawingBrush.onMouseUp();
      this._handleEvent(e, 'up');
    },

    /**
     * Method that defines the actions when mouse is clic ked on canvas.
     * The method inits the currentTransform parameters and renders all the
     * canvas so the current image can be placed on the top canvas and the rest
     * in on the container one.
     * @private
     * @param {Event} e Event object fired on mousedown
     */
    __onMouseDown: function (e) {

      // accept only left clicks
      var isLeftClick  = 'which' in e ? e.which === 1 : e.button === 0;
      if (!isLeftClick && !fabric.isTouchSupported) {
        return;
      }

      if (this.isDrawingMode) {
        this._onMouseDownInDrawingMode(e);
        return;
      }

      // ignore if some object is being transformed at this moment
      if (this._currentTransform) {
        return;
      }

      var target = this.findTarget(e),
          pointer = this.getPointer(e, true);

      // save pointer for check in __onMouseUp event
      this._previousPointer = pointer;

      var shouldRender = this._shouldRender(target, pointer),
          shouldGroup = this._shouldGroup(e, target);

      if (this._shouldClearSelection(e, target)) {
        this._clearSelection(e, target, pointer);
      }
      else if (shouldGroup) {
        this._handleGrouping(e, target);
        target = this.getActiveGroup();
      }

      if (target) {
        if (target.selectable && (target.__corner || !shouldGroup)) {
          this._beforeTransform(e, target);
          this._setupCurrentTransform(e, target);
        }

        if (target !== this.getActiveGroup() && target !== this.getActiveObject()) {
          this.deactivateAll();
          target.selectable && this.setActiveObject(target, e);
        }
      }
      this._handleEvent(e, 'down', target ? target : null);
      // we must renderAll so that active image is placed on the top canvas
      shouldRender && this.renderAll();
    },

    /**
     * @private
     */
    _beforeTransform: function(e, target) {
      this.stateful && target.saveState();

      // determine if it's a drag or rotate case
      if (target._findTargetCorner(this.getPointer(e))) {
        this.onBeforeScaleRotate(target);
      }

    },

    /**
     * @private
     */
    _clearSelection: function(e, target, pointer) {
      this.deactivateAllWithDispatch(e);

      if (target && target.selectable) {
        this.setActiveObject(target, e);
      }
      else if (this.selection) {
        this._groupSelector = {
          ex: pointer.x,
          ey: pointer.y,
          top: 0,
          left: 0
        };
      }
    },

    /**
     * @private
     * @param {Object} target Object for that origin is set to center
     */
    _setOriginToCenter: function(target) {
      this._previousOriginX = this._currentTransform.target.originX;
      this._previousOriginY = this._currentTransform.target.originY;

      var center = target.getCenterPoint();

      target.originX = 'center';
      target.originY = 'center';

      target.left = center.x;
      target.top = center.y;

      this._currentTransform.left = target.left;
      this._currentTransform.top = target.top;
    },

    /**
     * @private
     * @param {Object} target Object for that center is set to origin
     */
    _setCenterToOrigin: function(target) {
      var originPoint = target.translateToOriginPoint(
        target.getCenterPoint(),
        this._previousOriginX,
        this._previousOriginY);

      target.originX = this._previousOriginX;
      target.originY = this._previousOriginY;

      target.left = originPoint.x;
      target.top = originPoint.y;

      this._previousOriginX = null;
      this._previousOriginY = null;
    },

    /**
     * Method that defines the actions when mouse is hovering the canvas.
     * The currentTransform parameter will definde whether the user is rotating/scaling/translating
     * an image or neither of them (only hovering). A group selection is also possible and would cancel
     * all any other type of action.
     * In case of an image transformation only the top canvas will be rendered.
     * @private
     * @param {Event} e Event object fired on mousemove
     */
    __onMouseMove: function (e) {

      var target, pointer;

      if (this.isDrawingMode) {
        this._onMouseMoveInDrawingMode(e);
        return;
      }
      if (typeof e.touches !== 'undefined' && e.touches.length > 1) {
        return;
      }

      var groupSelector = this._groupSelector;

      // We initially clicked in an empty area, so we draw a box for multiple selection
      if (groupSelector) {
        pointer = this.getPointer(e, true);

        groupSelector.left = pointer.x - groupSelector.ex;
        groupSelector.top = pointer.y - groupSelector.ey;

        this.renderTop();
      }
      else if (!this._currentTransform) {
        target = this.findTarget(e);
        this._setCursorFromEvent(e, target);
      }
      else {
        this._transformObject(e);
      }
      this._handleEvent(e, 'move', target ? target : null);
    },

    /**
     * Method that defines actions when an Event Mouse Wheel
     * @param {Event} e Event object fired on mouseup
     */
    __onMouseWheel: function(e) {
      this.fire('mouse:wheel', {
        e: e
      });
    },

    /**
     * @private
     * @param {Event} e Event fired on mousemove
     */
    _transformObject: function(e) {
      var pointer = this.getPointer(e),
          transform = this._currentTransform;

      transform.reset = false,
      transform.target.isMoving = true;

      this._beforeScaleTransform(e, transform);
      this._performTransformAction(e, transform, pointer);

      transform.actionPerformed && this.renderAll();
    },

    /**
     * @private
     */
    _performTransformAction: function(e, transform, pointer) {
      var x = pointer.x,
          y = pointer.y,
          target = transform.target,
          action = transform.action,
          actionPerformed = false;

      if (action === 'rotate') {
        (actionPerformed = this._rotateObject(x, y)) && this._fire('rotating', target, e);
      }
      else if (action === 'scale') {
        (actionPerformed = this._onScale(e, transform, x, y)) && this._fire('scaling', target, e);
      }
      else if (action === 'scaleX') {
        (actionPerformed = this._scaleObject(x, y, 'x')) && this._fire('scaling', target, e);
      }
      else if (action === 'scaleY') {
        (actionPerformed = this._scaleObject(x, y, 'y')) && this._fire('scaling', target, e);
      }
      else if (action === 'skewX') {
        (actionPerformed = this._skewObject(x, y, 'x')) && this._fire('skewing', target, e);
      }
      else if (action === 'skewY') {
        (actionPerformed = this._skewObject(x, y, 'y')) && this._fire('skewing', target, e);
      }
      else {
        actionPerformed = this._translateObject(x, y);
        if (actionPerformed) {
          this._fire('moving', target, e);
          this.setCursor(target.moveCursor || this.moveCursor);
        }
      }
      transform.actionPerformed = actionPerformed;
    },

    /**
     * @private
     */
    _fire: function(eventName, target, e) {
      this.fire('object:' + eventName, { target: target, e: e });
      target.fire(eventName, { e: e });
    },

    /**
     * @private
     */
    _beforeScaleTransform: function(e, transform) {
      if (transform.action === 'scale' || transform.action === 'scaleX' || transform.action === 'scaleY') {
        var centerTransform = this._shouldCenterTransform(transform.target);

        // Switch from a normal resize to center-based
        if ((centerTransform && (transform.originX !== 'center' || transform.originY !== 'center')) ||
           // Switch from center-based resize to normal one
           (!centerTransform && transform.originX === 'center' && transform.originY === 'center')
        ) {
          this._resetCurrentTransform();
          transform.reset = true;
        }
      }
    },

    /**
     * @private
     * @param {Event} e Event object
     * @param {Object} transform current tranform
     * @param {Number} x mouse position x from origin
     * @param {Number} y mouse poistion y from origin
     * @return {Boolean} true if the scaling occurred
     */
    _onScale: function(e, transform, x, y) {
      if ((e[this.uniScaleKey] || this.uniScaleTransform) && !transform.target.get('lockUniScaling')) {
        transform.currentAction = 'scale';
        return this._scaleObject(x, y);
      }
      else {
        // Switch from a normal resize to proportional
        if (!transform.reset && transform.currentAction === 'scale') {
          this._resetCurrentTransform();
        }

        transform.currentAction = 'scaleEqually';
        return this._scaleObject(x, y, 'equally');
      }
    },

    /**
     * Sets the cursor depending on where the canvas is being hovered.
     * Note: very buggy in Opera
     * @param {Event} e Event object
     * @param {Object} target Object that the mouse is hovering, if so.
     */
    _setCursorFromEvent: function (e, target) {
      if (!target) {
        this.setCursor(this.defaultCursor);
        return false;
      }

      var hoverCursor = target.hoverCursor || this.hoverCursor;
      if (!target.selectable) {
        //let's skip _findTargetCorner if object is not selectable
        this.setCursor(hoverCursor);
      }
      else {
        var activeGroup = this.getActiveGroup(),
            // only show proper corner when group selection is not active
            corner = target._findTargetCorner
                      && (!activeGroup || !activeGroup.contains(target))
                      && target._findTargetCorner(this.getPointer(e, true));

        if (!corner) {
          this.setCursor(hoverCursor);
        }
        else {
          this._setCornerCursor(corner, target, e);
        }
      }
      //actually unclear why it should return something
      //is never evaluated
      return true;
    },

    /**
     * @private
     */
    _setCornerCursor: function(corner, target, e) {
      if (corner in cursorOffset) {
        this.setCursor(this._getRotatedCornerCursor(corner, target, e));
      }
      else if (corner === 'mtr' && target.hasRotatingPoint) {
        this.setCursor(this.rotationCursor);
      }
      else {
        this.setCursor(this.defaultCursor);
        return false;
      }
    },

    /**
     * @private
     */
    _getRotatedCornerCursor: function(corner, target, e) {
      var n = Math.round((target.getAngle() % 360) / 45);

      if (n < 0) {
        n += 8; // full circle ahead
      }
      n += cursorOffset[corner];
      if (e[this.altActionKey] && cursorOffset[corner] % 2 === 0) {
        //if we are holding shift and we are on a mx corner...
        n += 2;
      }
      // normalize n to be from 0 to 7
      n %= 8;

      return this.cursorMap[n];
    }
  });
})();


(function() {

  var min = Math.min,
      max = Math.max;

  fabric.util.object.extend(fabric.Canvas.prototype, /** @lends fabric.Canvas.prototype */ {

    /**
     * @private
     * @param {Event} e Event object
     * @param {fabric.Object} target
     * @return {Boolean}
     */
    _shouldGroup: function(e, target) {
      var activeObject = this.getActiveObject();
      return e[this.selectionKey] && target && target.selectable &&
            (this.getActiveGroup() || (activeObject && activeObject !== target))
            && this.selection;
    },

    /**
     * @private
     * @param {Event} e Event object
     * @param {fabric.Object} target
     */
    _handleGrouping: function (e, target) {
      var activeGroup = this.getActiveGroup();

      if (target === activeGroup) {
        // if it's a group, find target again, using activeGroup objects
        target = this.findTarget(e, true);
        // if even object is not found, bail out
        if (!target) {
          return;
        }
      }
      if (activeGroup) {
        this._updateActiveGroup(target, e);
      }
      else {
        this._createActiveGroup(target, e);
      }

      if (this._activeGroup) {
        this._activeGroup.saveCoords();
      }
    },

    /**
     * @private
     */
    _updateActiveGroup: function(target, e) {
      var activeGroup = this.getActiveGroup();

      if (activeGroup.contains(target)) {

        activeGroup.removeWithUpdate(target);
        target.set('active', false);

        if (activeGroup.size() === 1) {
          // remove group alltogether if after removal it only contains 1 object
          this.discardActiveGroup(e);
          // activate last remaining object
          this.setActiveObject(activeGroup.item(0));
          return;
        }
      }
      else {
        activeGroup.addWithUpdate(target);
      }
      this.fire('selection:created', { target: activeGroup, e: e });
      activeGroup.set('active', true);
    },

    /**
     * @private
     */
    _createActiveGroup: function(target, e) {

      if (this._activeObject && target !== this._activeObject) {

        var group = this._createGroup(target);
        group.addWithUpdate();

        this.setActiveGroup(group);
        this._activeObject = null;

        this.fire('selection:created', { target: group, e: e });
      }

      target.set('active', true);
    },

    /**
     * @private
     * @param {Object} target
     */
    _createGroup: function(target) {

      var objects = this.getObjects(),
          isActiveLower = objects.indexOf(this._activeObject) < objects.indexOf(target),
          groupObjects = isActiveLower
            ? [ this._activeObject, target ]
            : [ target, this._activeObject ];
      this._activeObject.isEditing && this._activeObject.exitEditing();
      return new fabric.Group(groupObjects, {
        canvas: this
      });
    },

    /**
     * @private
     * @param {Event} e mouse event
     */
    _groupSelectedObjects: function (e) {

      var group = this._collectObjects();

      // do not create group for 1 element only
      if (group.length === 1) {
        this.setActiveObject(group[0], e);
      }
      else if (group.length > 1) {
        group = new fabric.Group(group.reverse(), {
          canvas: this
        });
        group.addWithUpdate();
        this.setActiveGroup(group, e);
        group.saveCoords();
        this.fire('selection:created', { target: group });
        this.renderAll();
      }
    },

    /**
     * @private
     */
    _collectObjects: function() {
      var group = [ ],
          currentObject,
          x1 = this._groupSelector.ex,
          y1 = this._groupSelector.ey,
          x2 = x1 + this._groupSelector.left,
          y2 = y1 + this._groupSelector.top,
          selectionX1Y1 = new fabric.Point(min(x1, x2), min(y1, y2)),
          selectionX2Y2 = new fabric.Point(max(x1, x2), max(y1, y2)),
          isClick = x1 === x2 && y1 === y2;

      for (var i = this._objects.length; i--; ) {
        currentObject = this._objects[i];

        if (!currentObject || !currentObject.selectable || !currentObject.visible) {
          continue;
        }

        if (currentObject.intersectsWithRect(selectionX1Y1, selectionX2Y2) ||
            currentObject.isContainedWithinRect(selectionX1Y1, selectionX2Y2) ||
            currentObject.containsPoint(selectionX1Y1) ||
            currentObject.containsPoint(selectionX2Y2)
        ) {
          currentObject.set('active', true);
          group.push(currentObject);

          // only add one object if it's a click
          if (isClick) {
            break;
          }
        }
      }

      return group;
    },

    /**
     * @private
     */
    _maybeGroupObjects: function(e) {
      if (this.selection && this._groupSelector) {
        this._groupSelectedObjects(e);
      }

      var activeGroup = this.getActiveGroup();
      if (activeGroup) {
        activeGroup.setObjectsCoords().setCoords();
        activeGroup.isMoving = false;
        this.setCursor(this.defaultCursor);
      }

      // clear selection and current transformation
      this._groupSelector = null;
      this._currentTransform = null;
    }
  });

})();


fabric.util.object.extend(fabric.StaticCanvas.prototype, /** @lends fabric.StaticCanvas.prototype */ {

  /**
   * Exports canvas element to a dataurl image. Note that when multiplier is used, cropping is scaled appropriately
   * @param {Object} [options] Options object
   * @param {String} [options.format=png] The format of the output image. Either "jpeg" or "png"
   * @param {Number} [options.quality=1] Quality level (0..1). Only used for jpeg.
   * @param {Number} [options.multiplier=1] Multiplier to scale by
   * @param {Number} [options.left] Cropping left offset. Introduced in v1.2.14
   * @param {Number} [options.top] Cropping top offset. Introduced in v1.2.14
   * @param {Number} [options.width] Cropping width. Introduced in v1.2.14
   * @param {Number} [options.height] Cropping height. Introduced in v1.2.14
   * @return {String} Returns a data: URL containing a representation of the object in the format specified by options.format
   * @see {@link http://jsfiddle.net/fabricjs/NfZVb/|jsFiddle demo}
   * @example <caption>Generate jpeg dataURL with lower quality</caption>
   * var dataURL = canvas.toDataURL({
   *   format: 'jpeg',
   *   quality: 0.8
   * });
   * @example <caption>Generate cropped png dataURL (clipping of canvas)</caption>
   * var dataURL = canvas.toDataURL({
   *   format: 'png',
   *   left: 100,
   *   top: 100,
   *   width: 200,
   *   height: 200
   * });
   * @example <caption>Generate double scaled png dataURL</caption>
   * var dataURL = canvas.toDataURL({
   *   format: 'png',
   *   multiplier: 2
   * });
   */
  toDataURL: function (options) {
    options || (options = { });

    var format = options.format || 'png',
        quality = options.quality || 1,
        multiplier = options.multiplier || 1,
        cropping = {
          left: options.left,
          top: options.top,
          width: options.width,
          height: options.height
        };

    if (this._isRetinaScaling()) {
      multiplier *= fabric.devicePixelRatio;
    }

    if (multiplier !== 1) {
      return this.__toDataURLWithMultiplier(format, quality, cropping, multiplier);
    }
    else {
      return this.__toDataURL(format, quality, cropping);
    }
  },

  /**
   * @private
   */
  __toDataURL: function(format, quality, cropping) {

    this.renderAll();

    var canvasEl = this.contextContainer.canvas,
        croppedCanvasEl = this.__getCroppedCanvas(canvasEl, cropping);

    // to avoid common confusion https://github.com/kangax/fabric.js/issues/806
    if (format === 'jpg') {
      format = 'jpeg';
    }

    var data = (fabric.StaticCanvas.supports('toDataURLWithQuality'))
              ? (croppedCanvasEl || canvasEl).toDataURL('image/' + format, quality)
              : (croppedCanvasEl || canvasEl).toDataURL('image/' + format);

    if (croppedCanvasEl) {
      croppedCanvasEl = null;
    }

    return data;
  },

  /**
   * @private
   */
  __getCroppedCanvas: function(canvasEl, cropping) {

    var croppedCanvasEl,
        croppedCtx,
        shouldCrop = 'left' in cropping ||
                     'top' in cropping ||
                     'width' in cropping ||
                     'height' in cropping;

    if (shouldCrop) {

      croppedCanvasEl = fabric.util.createCanvasElement();
      croppedCtx = croppedCanvasEl.getContext('2d');

      croppedCanvasEl.width = cropping.width || this.width;
      croppedCanvasEl.height = cropping.height || this.height;

      croppedCtx.drawImage(canvasEl, -cropping.left || 0, -cropping.top || 0);
    }

    return croppedCanvasEl;
  },

  /**
   * @private
   */
  __toDataURLWithMultiplier: function(format, quality, cropping, multiplier) {

    var origWidth = this.getWidth(),
        origHeight = this.getHeight(),
        scaledWidth = origWidth * multiplier,
        scaledHeight = origHeight * multiplier,
        activeObject = this.getActiveObject(),
        activeGroup = this.getActiveGroup(),
        zoom = this.getZoom(),
        newZoom = zoom * multiplier / fabric.devicePixelRatio;

    if (multiplier > 1) {
      this.setDimensions({ width: scaledWidth, height: scaledHeight });
    }

    this.setZoom(newZoom);

    if (cropping.left) {
      cropping.left *= multiplier;
    }
    if (cropping.top) {
      cropping.top *= multiplier;
    }
    if (cropping.width) {
      cropping.width *= multiplier;
    }
    else if (multiplier < 1) {
      cropping.width = scaledWidth;
    }
    if (cropping.height) {
      cropping.height *= multiplier;
    }
    else if (multiplier < 1) {
      cropping.height = scaledHeight;
    }

    if (activeGroup) {
      // not removing group due to complications with restoring it with correct state afterwords
      this._tempRemoveBordersControlsFromGroup(activeGroup);
    }
    else if (activeObject && this.deactivateAll) {
      this.deactivateAll();
    }

    var data = this.__toDataURL(format, quality, cropping);
    if (activeGroup) {
      this._restoreBordersControlsOnGroup(activeGroup);
    }
    else if (activeObject && this.setActiveObject) {
      this.setActiveObject(activeObject);
    }
    this.setZoom(zoom);
    //setDimensions with no option object is taking care of:
    //this.width, this.height, this.renderAll()
    this.setDimensions({ width: origWidth, height: origHeight });

    return data;
  },

  /**
   * Exports canvas element to a dataurl image (allowing to change image size via multiplier).
   * @deprecated since 1.0.13
   * @param {String} format (png|jpeg)
   * @param {Number} multiplier
   * @param {Number} quality (0..1)
   * @return {String}
   */
  toDataURLWithMultiplier: function (format, multiplier, quality) {
    return this.toDataURL({
      format: format,
      multiplier: multiplier,
      quality: quality
    });
  },

  /**
   * @private
   */
  _tempRemoveBordersControlsFromGroup: function(group) {
    group.origHasControls = group.hasControls;
    group.origBorderColor = group.borderColor;

    group.hasControls = true;
    group.borderColor = 'rgba(0,0,0,0)';

    group.forEachObject(function(o) {
      o.origBorderColor = o.borderColor;
      o.borderColor = 'rgba(0,0,0,0)';
    });
  },

  /**
   * @private
   */
  _restoreBordersControlsOnGroup: function(group) {
    group.hideControls = group.origHideControls;
    group.borderColor = group.origBorderColor;

    group.forEachObject(function(o) {
      o.borderColor = o.origBorderColor;
      delete o.origBorderColor;
    });
  }
});


fabric.util.object.extend(fabric.StaticCanvas.prototype, /** @lends fabric.StaticCanvas.prototype */ {

  /**
   * Populates canvas with data from the specified dataless JSON.
   * JSON format must conform to the one of {@link fabric.Canvas#toDatalessJSON}
   * @deprecated since 1.2.2
   * @param {String|Object} json JSON string or object
   * @param {Function} callback Callback, invoked when json is parsed
   *                            and corresponding objects (e.g: {@link fabric.Image})
   *                            are initialized
   * @param {Function} [reviver] Method for further parsing of JSON elements, called after each fabric object created.
   * @return {fabric.Canvas} instance
   * @chainable
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-3#deserialization}
   */
  loadFromDatalessJSON: function (json, callback, reviver) {
    return this.loadFromJSON(json, callback, reviver);
  },

  /**
   * Populates canvas with data from the specified JSON.
   * JSON format must conform to the one of {@link fabric.Canvas#toJSON}
   * @param {String|Object} json JSON string or object
   * @param {Function} callback Callback, invoked when json is parsed
   *                            and corresponding objects (e.g: {@link fabric.Image})
   *                            are initialized
   * @param {Function} [reviver] Method for further parsing of JSON elements, called after each fabric object created.
   * @return {fabric.Canvas} instance
   * @chainable
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-3#deserialization}
   * @see {@link http://jsfiddle.net/fabricjs/fmgXt/|jsFiddle demo}
   * @example <caption>loadFromJSON</caption>
   * canvas.loadFromJSON(json, canvas.renderAll.bind(canvas));
   * @example <caption>loadFromJSON with reviver</caption>
   * canvas.loadFromJSON(json, canvas.renderAll.bind(canvas), function(o, object) {
   *   // `o` = json object
   *   // `object` = fabric.Object instance
   *   // ... do some stuff ...
   * });
   */
  loadFromJSON: function (json, callback, reviver) {
    if (!json) {
      return;
    }

    // serialize if it wasn't already
    var serialized = (typeof json === 'string')
      ? JSON.parse(json)
      : fabric.util.object.clone(json);

    this.clear();

    var _this = this;
    this._enlivenObjects(serialized.objects, function () {
      _this._setBgOverlay(serialized, function () {
        // remove parts i cannot set as options
        delete serialized.objects;
        delete serialized.backgroundImage;
        delete serialized.overlayImage;
        delete serialized.background;
        delete serialized.overlay;
        // this._initOptions does too many things to just
        // call it. Normally loading an Object from JSON
        // create the Object instance. Here the Canvas is
        // already an instance and we are just loading things over it
        for (var prop in serialized) {
          _this[prop] = serialized[prop];
        }
        callback && callback();
      });
    }, reviver);
    return this;
  },

  /**
   * @private
   * @param {Object} serialized Object with background and overlay information
   * @param {Function} callback Invoked after all background and overlay images/patterns loaded
   */
  _setBgOverlay: function(serialized, callback) {
    var _this = this,
        loaded = {
          backgroundColor: false,
          overlayColor: false,
          backgroundImage: false,
          overlayImage: false
        };

    if (!serialized.backgroundImage && !serialized.overlayImage && !serialized.background && !serialized.overlay) {
      callback && callback();
      return;
    }

    var cbIfLoaded = function () {
      if (loaded.backgroundImage && loaded.overlayImage && loaded.backgroundColor && loaded.overlayColor) {
        _this.renderAll();
        callback && callback();
      }
    };

    this.__setBgOverlay('backgroundImage', serialized.backgroundImage, loaded, cbIfLoaded);
    this.__setBgOverlay('overlayImage', serialized.overlayImage, loaded, cbIfLoaded);
    this.__setBgOverlay('backgroundColor', serialized.background, loaded, cbIfLoaded);
    this.__setBgOverlay('overlayColor', serialized.overlay, loaded, cbIfLoaded);

    cbIfLoaded();
  },

  /**
   * @private
   * @param {String} property Property to set (backgroundImage, overlayImage, backgroundColor, overlayColor)
   * @param {(Object|String)} value Value to set
   * @param {Object} loaded Set loaded property to true if property is set
   * @param {Object} callback Callback function to invoke after property is set
   */
  __setBgOverlay: function(property, value, loaded, callback) {
    var _this = this;

    if (!value) {
      loaded[property] = true;
      return;
    }

    if (property === 'backgroundImage' || property === 'overlayImage') {
      fabric.Image.fromObject(value, function(img) {
        _this[property] = img;
        loaded[property] = true;
        callback && callback();
      });
    }
    else {
      this['set' + fabric.util.string.capitalize(property, true)](value, function() {
        loaded[property] = true;
        callback && callback();
      });
    }
  },

  /**
   * @private
   * @param {Array} objects
   * @param {Function} callback
   * @param {Function} [reviver]
   */
  _enlivenObjects: function (objects, callback, reviver) {
    var _this = this;

    if (!objects || objects.length === 0) {
      callback && callback();
      return;
    }

    var renderOnAddRemove = this.renderOnAddRemove;
    this.renderOnAddRemove = false;

    fabric.util.enlivenObjects(objects, function(enlivenedObjects) {
      enlivenedObjects.forEach(function(obj, index) {
        // we splice the array just in case some custom classes restored from JSON
        // will add more object to canvas at canvas init.
        _this.insertAt(obj, index);
      });

      _this.renderOnAddRemove = renderOnAddRemove;
      callback && callback();
    }, null, reviver);
  },

  /**
   * @private
   * @param {String} format
   * @param {Function} callback
   */
  _toDataURL: function (format, callback) {
    this.clone(function (clone) {
      callback(clone.toDataURL(format));
    });
  },

  /**
   * @private
   * @param {String} format
   * @param {Number} multiplier
   * @param {Function} callback
   */
  _toDataURLWithMultiplier: function (format, multiplier, callback) {
    this.clone(function (clone) {
      callback(clone.toDataURLWithMultiplier(format, multiplier));
    });
  },

  /**
   * Clones canvas instance
   * @param {Object} [callback] Receives cloned instance as a first argument
   * @param {Array} [properties] Array of properties to include in the cloned canvas and children
   */
  clone: function (callback, properties) {
    var data = JSON.stringify(this.toJSON(properties));
    this.cloneWithoutData(function(clone) {
      clone.loadFromJSON(data, function() {
        callback && callback(clone);
      });
    });
  },

  /**
   * Clones canvas instance without cloning existing data.
   * This essentially copies canvas dimensions, clipping properties, etc.
   * but leaves data empty (so that you can populate it with your own)
   * @param {Object} [callback] Receives cloned instance as a first argument
   */
  cloneWithoutData: function(callback) {
    var el = fabric.document.createElement('canvas');

    el.width = this.getWidth();
    el.height = this.getHeight();

    var clone = new fabric.Canvas(el);
    clone.clipTo = this.clipTo;
    if (this.backgroundImage) {
      clone.setBackgroundImage(this.backgroundImage.src, function() {
        clone.renderAll();
        callback && callback(clone);
      });
      clone.backgroundImageOpacity = this.backgroundImageOpacity;
      clone.backgroundImageStretch = this.backgroundImageStretch;
    }
    else {
      callback && callback(clone);
    }
  }
});


(function(global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend,
      toFixed = fabric.util.toFixed,
      capitalize = fabric.util.string.capitalize,
      degreesToRadians = fabric.util.degreesToRadians,
      supportsLineDash = fabric.StaticCanvas.supports('setLineDash');

  if (fabric.Object) {
    return;
  }

  /**
   * Root object class from which all 2d shape classes inherit from
   * @class fabric.Object
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-1#objects}
   * @see {@link fabric.Object#initialize} for constructor definition
   *
   * @fires added
   * @fires removed
   *
   * @fires selected
   * @fires deselected
   * @fires modified
   * @fires rotating
   * @fires scaling
   * @fires moving
   * @fires skewing
   *
   * @fires mousedown
   * @fires mouseup
   * @fires mouseover
   * @fires mouseout
   */
  fabric.Object = fabric.util.createClass(/** @lends fabric.Object.prototype */ {

    /**
     * Retrieves object's {@link fabric.Object#clipTo|clipping function}
     * @method getClipTo
     * @memberOf fabric.Object.prototype
     * @return {Function}
     */

    /**
     * Sets object's {@link fabric.Object#clipTo|clipping function}
     * @method setClipTo
     * @memberOf fabric.Object.prototype
     * @param {Function} clipTo Clipping function
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#transformMatrix|transformMatrix}
     * @method getTransformMatrix
     * @memberOf fabric.Object.prototype
     * @return {Array} transformMatrix
     */

    /**
     * Sets object's {@link fabric.Object#transformMatrix|transformMatrix}
     * @method setTransformMatrix
     * @memberOf fabric.Object.prototype
     * @param {Array} transformMatrix
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#visible|visible} state
     * @method getVisible
     * @memberOf fabric.Object.prototype
     * @return {Boolean} True if visible
     */

    /**
     * Sets object's {@link fabric.Object#visible|visible} state
     * @method setVisible
     * @memberOf fabric.Object.prototype
     * @param {Boolean} value visible value
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#shadow|shadow}
     * @method getShadow
     * @memberOf fabric.Object.prototype
     * @return {Object} Shadow instance
     */

    /**
     * Retrieves object's {@link fabric.Object#stroke|stroke}
     * @method getStroke
     * @memberOf fabric.Object.prototype
     * @return {String} stroke value
     */

    /**
     * Sets object's {@link fabric.Object#stroke|stroke}
     * @method setStroke
     * @memberOf fabric.Object.prototype
     * @param {String} value stroke value
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#strokeWidth|strokeWidth}
     * @method getStrokeWidth
     * @memberOf fabric.Object.prototype
     * @return {Number} strokeWidth value
     */

    /**
     * Sets object's {@link fabric.Object#strokeWidth|strokeWidth}
     * @method setStrokeWidth
     * @memberOf fabric.Object.prototype
     * @param {Number} value strokeWidth value
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#originX|originX}
     * @method getOriginX
     * @memberOf fabric.Object.prototype
     * @return {String} originX value
     */

    /**
     * Sets object's {@link fabric.Object#originX|originX}
     * @method setOriginX
     * @memberOf fabric.Object.prototype
     * @param {String} value originX value
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#originY|originY}
     * @method getOriginY
     * @memberOf fabric.Object.prototype
     * @return {String} originY value
     */

    /**
     * Sets object's {@link fabric.Object#originY|originY}
     * @method setOriginY
     * @memberOf fabric.Object.prototype
     * @param {String} value originY value
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#fill|fill}
     * @method getFill
     * @memberOf fabric.Object.prototype
     * @return {String} Fill value
     */

    /**
     * Sets object's {@link fabric.Object#fill|fill}
     * @method setFill
     * @memberOf fabric.Object.prototype
     * @param {String} value Fill value
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#opacity|opacity}
     * @method getOpacity
     * @memberOf fabric.Object.prototype
     * @return {Number} Opacity value (0-1)
     */

    /**
     * Sets object's {@link fabric.Object#opacity|opacity}
     * @method setOpacity
     * @memberOf fabric.Object.prototype
     * @param {Number} value Opacity value (0-1)
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#angle|angle} (in degrees)
     * @method getAngle
     * @memberOf fabric.Object.prototype
     * @return {Number}
     */

    /**
     * Retrieves object's {@link fabric.Object#top|top position}
     * @method getTop
     * @memberOf fabric.Object.prototype
     * @return {Number} Top value (in pixels)
     */

    /**
     * Sets object's {@link fabric.Object#top|top position}
     * @method setTop
     * @memberOf fabric.Object.prototype
     * @param {Number} value Top value (in pixels)
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#left|left position}
     * @method getLeft
     * @memberOf fabric.Object.prototype
     * @return {Number} Left value (in pixels)
     */

    /**
     * Sets object's {@link fabric.Object#left|left position}
     * @method setLeft
     * @memberOf fabric.Object.prototype
     * @param {Number} value Left value (in pixels)
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#scaleX|scaleX} value
     * @method getScaleX
     * @memberOf fabric.Object.prototype
     * @return {Number} scaleX value
     */

    /**
     * Sets object's {@link fabric.Object#scaleX|scaleX} value
     * @method setScaleX
     * @memberOf fabric.Object.prototype
     * @param {Number} value scaleX value
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#scaleY|scaleY} value
     * @method getScaleY
     * @memberOf fabric.Object.prototype
     * @return {Number} scaleY value
     */

    /**
     * Sets object's {@link fabric.Object#scaleY|scaleY} value
     * @method setScaleY
     * @memberOf fabric.Object.prototype
     * @param {Number} value scaleY value
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#flipX|flipX} value
     * @method getFlipX
     * @memberOf fabric.Object.prototype
     * @return {Boolean} flipX value
     */

    /**
     * Sets object's {@link fabric.Object#flipX|flipX} value
     * @method setFlipX
     * @memberOf fabric.Object.prototype
     * @param {Boolean} value flipX value
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Retrieves object's {@link fabric.Object#flipY|flipY} value
     * @method getFlipY
     * @memberOf fabric.Object.prototype
     * @return {Boolean} flipY value
     */

    /**
     * Sets object's {@link fabric.Object#flipY|flipY} value
     * @method setFlipY
     * @memberOf fabric.Object.prototype
     * @param {Boolean} value flipY value
     * @return {fabric.Object} thisArg
     * @chainable
     */

    /**
     * Type of an object (rect, circle, path, etc.).
     * Note that this property is meant to be read-only and not meant to be modified.
     * If you modify, certain parts of Fabric (such as JSON loading) won't work correctly.
     * @type String
     * @default
     */
    type:                     'object',

    /**
     * Horizontal origin of transformation of an object (one of "left", "right", "center")
     * See http://jsfiddle.net/1ow02gea/40/ on how originX/originY affect objects in groups
     * @type String
     * @default
     */
    originX:                  'left',

    /**
     * Vertical origin of transformation of an object (one of "top", "bottom", "center")
     * See http://jsfiddle.net/1ow02gea/40/ on how originX/originY affect objects in groups
     * @type String
     * @default
     */
    originY:                  'top',

    /**
     * Top position of an object. Note that by default it's relative to object top. You can change this by setting originY={top/center/bottom}
     * @type Number
     * @default
     */
    top:                      0,

    /**
     * Left position of an object. Note that by default it's relative to object left. You can change this by setting originX={left/center/right}
     * @type Number
     * @default
     */
    left:                     0,

    /**
     * Object width
     * @type Number
     * @default
     */
    width:                    0,

    /**
     * Object height
     * @type Number
     * @default
     */
    height:                   0,

    /**
     * Object scale factor (horizontal)
     * @type Number
     * @default
     */
    scaleX:                   1,

    /**
     * Object scale factor (vertical)
     * @type Number
     * @default
     */
    scaleY:                   1,

    /**
     * When true, an object is rendered as flipped horizontally
     * @type Boolean
     * @default
     */
    flipX:                    false,

    /**
     * When true, an object is rendered as flipped vertically
     * @type Boolean
     * @default
     */
    flipY:                    false,

    /**
     * Opacity of an object
     * @type Number
     * @default
     */
    opacity:                  1,

    /**
     * Angle of rotation of an object (in degrees)
     * @type Number
     * @default
     */
    angle:                    0,

    /**
     * Angle of skew on x axes of an object (in degrees)
     * @type Number
     * @default
     */
    skewX:                    0,

    /**
     * Angle of skew on y axes of an object (in degrees)
     * @type Number
     * @default
     */
    skewY:                    0,

    /**
     * Size of object's controlling corners (in pixels)
     * @type Number
     * @default
     */
    cornerSize:               13,

    /**
     * When true, object's controlling corners are rendered as transparent inside (i.e. stroke instead of fill)
     * @type Boolean
     * @default
     */
    transparentCorners:       true,

    /**
     * Default cursor value used when hovering over this object on canvas
     * @type String
     * @default
     */
    hoverCursor:              null,

    /**
     * Default cursor value used when moving this object on canvas
     * @type String
     * @default
     */
    moveCursor:               null,

    /**
     * Padding between object and its controlling borders (in pixels)
     * @type Number
     * @default
     */
    padding:                  0,

    /**
     * Color of controlling borders of an object (when it's active)
     * @type String
     * @default
     */
    borderColor:              'rgba(102,153,255,0.75)',

    /**
     * Array specifying dash pattern of an object's borders (hasBorder must be true)
     * @since 1.6.2
     * @type Array
     */
    borderDashArray:          null,

    /**
     * Color of controlling corners of an object (when it's active)
     * @type String
     * @default
     */
    cornerColor:              'rgba(102,153,255,0.5)',

    /**
     * Color of controlling corners of an object (when it's active and transparentCorners false)
     * @since 1.6.2
     * @type String
     * @default
     */
    cornerStrokeColor:        null,

    /**
     * Specify style of control, 'rect' or 'circle'
     * @since 1.6.2
     * @type String
     */
    cornerStyle:          'rect',

    /**
     * Array specifying dash pattern of an object's control (hasBorder must be true)
     * @since 1.6.2
     * @type Array
     */
    cornerDashArray:          null,

    /**
     * When true, this object will use center point as the origin of transformation
     * when being scaled via the controls.
     * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
     * @since 1.3.4
     * @type Boolean
     * @default
     */
    centeredScaling:          false,

    /**
     * When true, this object will use center point as the origin of transformation
     * when being rotated via the controls.
     * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
     * @since 1.3.4
     * @type Boolean
     * @default
     */
    centeredRotation:         true,

    /**
     * Color of object's fill
     * @type String
     * @default
     */
    fill:                     'rgb(0,0,0)',

    /**
     * Fill rule used to fill an object
     * accepted values are nonzero, evenodd
     * <b>Backwards incompatibility note:</b> This property was used for setting globalCompositeOperation until v1.4.12 (use `fabric.Object#globalCompositeOperation` instead)
     * @type String
     * @default
     */
    fillRule:                 'nonzero',

    /**
     * Composite rule used for canvas globalCompositeOperation
     * @type String
     * @default
     */
    globalCompositeOperation: 'source-over',

    /**
     * Background color of an object. Only works with text objects at the moment.
     * @type String
     * @default
     */
    backgroundColor:          '',

    /**
     * Selection Background color of an object. colored layer behind the object when it is active.
     * does not mix good with globalCompositeOperation methods.
     * @type String
     * @default
     */
    selectionBackgroundColor:          '',

    /**
     * When defined, an object is rendered via stroke and this property specifies its color
     * @type String
     * @default
     */
    stroke:                   null,

    /**
     * Width of a stroke used to render this object
     * @type Number
     * @default
     */
    strokeWidth:              1,

    /**
     * Array specifying dash pattern of an object's stroke (stroke must be defined)
     * @type Array
     */
    strokeDashArray:          null,

    /**
     * Line endings style of an object's stroke (one of "butt", "round", "square")
     * @type String
     * @default
     */
    strokeLineCap:            'butt',

    /**
     * Corner style of an object's stroke (one of "bevil", "round", "miter")
     * @type String
     * @default
     */
    strokeLineJoin:           'miter',

    /**
     * Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke
     * @type Number
     * @default
     */
    strokeMiterLimit:         10,

    /**
     * Shadow object representing shadow of this shape
     * @type fabric.Shadow
     * @default
     */
    shadow:                   null,

    /**
     * Opacity of object's controlling borders when object is active and moving
     * @type Number
     * @default
     */
    borderOpacityWhenMoving:  0.4,

    /**
     * Scale factor of object's controlling borders
     * @type Number
     * @default
     */
    borderScaleFactor:        1,

    /**
     * Transform matrix (similar to SVG's transform matrix)
     * @type Array
     */
    transformMatrix:          null,

    /**
     * Minimum allowed scale value of an object
     * @type Number
     * @default
     */
    minScaleLimit:            0.01,

    /**
     * When set to `false`, an object can not be selected for modification (using either point-click-based or group-based selection).
     * But events still fire on it.
     * @type Boolean
     * @default
     */
    selectable:               true,

    /**
     * When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4
     * @type Boolean
     * @default
     */
    evented:                  true,

    /**
     * When set to `false`, an object is not rendered on canvas
     * @type Boolean
     * @default
     */
    visible:                  true,

    /**
     * When set to `false`, object's controls are not displayed and can not be used to manipulate object
     * @type Boolean
     * @default
     */
    hasControls:              true,

    /**
     * When set to `false`, object's controlling borders are not rendered
     * @type Boolean
     * @default
     */
    hasBorders:               true,

    /**
     * When set to `false`, object's controlling rotating point will not be visible or selectable
     * @type Boolean
     * @default
     */
    hasRotatingPoint:         true,

    /**
     * Offset for object's controlling rotating point (when enabled via `hasRotatingPoint`)
     * @type Number
     * @default
     */
    rotatingPointOffset:      40,

    /**
     * When set to `true`, objects are "found" on canvas on per-pixel basis rather than according to bounding box
     * @type Boolean
     * @default
     */
    perPixelTargetFind:       false,

    /**
     * When `false`, default object's values are not included in its serialization
     * @type Boolean
     * @default
     */
    includeDefaultValues:     true,

    /**
     * Function that determines clipping of an object (context is passed as a first argument)
     * Note that context origin is at the object's center point (not left/top corner)
     * @type Function
     */
    clipTo:                   null,

    /**
     * When `true`, object horizontal movement is locked
     * @type Boolean
     * @default
     */
    lockMovementX:            false,

    /**
     * When `true`, object vertical movement is locked
     * @type Boolean
     * @default
     */
    lockMovementY:            false,

    /**
     * When `true`, object rotation is locked
     * @type Boolean
     * @default
     */
    lockRotation:             false,

    /**
     * When `true`, object horizontal scaling is locked
     * @type Boolean
     * @default
     */
    lockScalingX:             false,

    /**
     * When `true`, object vertical scaling is locked
     * @type Boolean
     * @default
     */
    lockScalingY:             false,

    /**
     * When `true`, object non-uniform scaling is locked
     * @type Boolean
     * @default
     */
    lockUniScaling:           false,

    /**
     * When `true`, object horizontal skewing is locked
     * @type Boolean
     * @default
     */
    lockSkewingX:             false,

    /**
     * When `true`, object vertical skewing is locked
     * @type Boolean
     * @default
     */
    lockSkewingY:             false,

    /**
     * When `true`, object cannot be flipped by scaling into negative values
     * @type Boolean
     * @default
     */

    lockScalingFlip:          false,

    /**
     * When `true`, object is not exported in SVG or OBJECT/JSON
     * since 1.6.3
     * @type Boolean
     * @default
     */

    excludeFromExport:          false,

    /**
     * List of properties to consider when checking if state
     * of an object is changed (fabric.Object#hasStateChanged)
     * as well as for history (undo/redo) purposes
     * @type Array
     */
    stateProperties:  (
      'top left width height scaleX scaleY flipX flipY originX originY transformMatrix ' +
      'stroke strokeWidth strokeDashArray strokeLineCap strokeLineJoin strokeMiterLimit ' +
      'angle opacity fill fillRule globalCompositeOperation shadow clipTo visible backgroundColor ' +
      'alignX alignY meetOrSlice skewX skewY'
    ).split(' '),

    /**
     * Constructor
     * @param {Object} [options] Options object
     */
    initialize: function(options) {
      if (options) {
        this.setOptions(options);
      }
    },

    /**
     * @private
     * @param {Object} [options] Options object
     */
    _initGradient: function(options) {
      if (options.fill && options.fill.colorStops && !(options.fill instanceof fabric.Gradient)) {
        this.set('fill', new fabric.Gradient(options.fill));
      }
      if (options.stroke && options.stroke.colorStops && !(options.stroke instanceof fabric.Gradient)) {
        this.set('stroke', new fabric.Gradient(options.stroke));
      }
    },

    /**
     * @private
     * @param {Object} [options] Options object
     */
    _initPattern: function(options) {
      if (options.fill && options.fill.source && !(options.fill instanceof fabric.Pattern)) {
        this.set('fill', new fabric.Pattern(options.fill));
      }
      if (options.stroke && options.stroke.source && !(options.stroke instanceof fabric.Pattern)) {
        this.set('stroke', new fabric.Pattern(options.stroke));
      }
    },

    /**
     * @private
     * @param {Object} [options] Options object
     */
    _initClipping: function(options) {
      if (!options.clipTo || typeof options.clipTo !== 'string') {
        return;
      }

      var functionBody = fabric.util.getFunctionBody(options.clipTo);
      if (typeof functionBody !== 'undefined') {
        this.clipTo = new Function('ctx', functionBody);
      }
    },

    /**
     * Sets object's properties from options
     * @param {Object} [options] Options object
     */
    setOptions: function(options) {
      for (var prop in options) {
        this.set(prop, options[prop]);
      }
      this._initGradient(options);
      this._initPattern(options);
      this._initClipping(options);
    },

    /**
     * Transforms context when rendering an object
     * @param {CanvasRenderingContext2D} ctx Context
     * @param {Boolean} fromLeft When true, context is transformed to object's top/left corner. This is used when rendering text on Node
     */
    transform: function(ctx, fromLeft) {
      if (this.group && !this.group._transformDone && this.group === this.canvas._activeGroup) {
        this.group.transform(ctx);
      }
      var center = fromLeft ? this._getLeftTopCoords() : this.getCenterPoint();
      ctx.translate(center.x, center.y);
      ctx.rotate(degreesToRadians(this.angle));
      ctx.scale(
        this.scaleX * (this.flipX ? -1 : 1),
        this.scaleY * (this.flipY ? -1 : 1)
      );
      ctx.transform(1, 0, Math.tan(degreesToRadians(this.skewX)), 1, 0, 0);
      ctx.transform(1, Math.tan(degreesToRadians(this.skewY)), 0, 1, 0, 0);
    },

    /**
     * Returns an object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} Object representation of an instance
     */
    toObject: function(propertiesToInclude) {
      var NUM_FRACTION_DIGITS = fabric.Object.NUM_FRACTION_DIGITS,

          object = {
            type:                     this.type,
            originX:                  this.originX,
            originY:                  this.originY,
            left:                     toFixed(this.left, NUM_FRACTION_DIGITS),
            top:                      toFixed(this.top, NUM_FRACTION_DIGITS),
            width:                    toFixed(this.width, NUM_FRACTION_DIGITS),
            height:                   toFixed(this.height, NUM_FRACTION_DIGITS),
            fill:                     (this.fill && this.fill.toObject) ? this.fill.toObject() : this.fill,
            stroke:                   (this.stroke && this.stroke.toObject) ? this.stroke.toObject() : this.stroke,
            strokeWidth:              toFixed(this.strokeWidth, NUM_FRACTION_DIGITS),
            strokeDashArray:          this.strokeDashArray ? this.strokeDashArray.concat() : this.strokeDashArray,
            strokeLineCap:            this.strokeLineCap,
            strokeLineJoin:           this.strokeLineJoin,
            strokeMiterLimit:         toFixed(this.strokeMiterLimit, NUM_FRACTION_DIGITS),
            scaleX:                   toFixed(this.scaleX, NUM_FRACTION_DIGITS),
            scaleY:                   toFixed(this.scaleY, NUM_FRACTION_DIGITS),
            angle:                    toFixed(this.getAngle(), NUM_FRACTION_DIGITS),
            flipX:                    this.flipX,
            flipY:                    this.flipY,
            opacity:                  toFixed(this.opacity, NUM_FRACTION_DIGITS),
            shadow:                   (this.shadow && this.shadow.toObject) ? this.shadow.toObject() : this.shadow,
            visible:                  this.visible,
            clipTo:                   this.clipTo && String(this.clipTo),
            backgroundColor:          this.backgroundColor,
            fillRule:                 this.fillRule,
            globalCompositeOperation: this.globalCompositeOperation,
            transformMatrix:          this.transformMatrix ? this.transformMatrix.concat() : this.transformMatrix,
            skewX:                    toFixed(this.skewX, NUM_FRACTION_DIGITS),
            skewY:                    toFixed(this.skewY, NUM_FRACTION_DIGITS)
          };

      if (!this.includeDefaultValues) {
        object = this._removeDefaultValues(object);
      }

      fabric.util.populateWithProperties(this, object, propertiesToInclude);

      return object;
    },

    /**
     * Returns (dataless) object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} Object representation of an instance
     */
    toDatalessObject: function(propertiesToInclude) {
      // will be overwritten by subclasses
      return this.toObject(propertiesToInclude);
    },

    /**
     * @private
     * @param {Object} object
     */
    _removeDefaultValues: function(object) {
      var prototype = fabric.util.getKlass(object.type).prototype,
          stateProperties = prototype.stateProperties;

      stateProperties.forEach(function(prop) {
        if (object[prop] === prototype[prop]) {
          delete object[prop];
        }
        var isArray = Object.prototype.toString.call(object[prop]) === '[object Array]' &&
                      Object.prototype.toString.call(prototype[prop]) === '[object Array]';

        // basically a check for [] === []
        if (isArray && object[prop].length === 0 && prototype[prop].length === 0) {
          delete object[prop];
        }
      });

      return object;
    },

    /**
     * Returns a string representation of an instance
     * @return {String}
     */
    toString: function() {
      return '#<fabric.' + capitalize(this.type) + '>';
    },

    /**
     * Basic getter
     * @param {String} property Property name
     * @return {*} value of a property
     */
    get: function(property) {
      return this[property];
    },

    /**
     * Return the object scale factor counting also the group scaling
     * @return {Object} object with scaleX and scaleY properties
     */
    getObjectScaling: function() {
      var scaleX = this.scaleX, scaleY = this.scaleY;
      if (this.group) {
        var scaling = this.group.getObjectScaling();
        scaleX *= scaling.scaleX;
        scaleY *= scaling.scaleY;
      }
      return { scaleX: scaleX, scaleY: scaleY };
    },

    /**
     * @private
     */
    _setObject: function(obj) {
      for (var prop in obj) {
        this._set(prop, obj[prop]);
      }
    },

    /**
     * Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls. If you need to update those, call `setCoords()`.
     * @param {String|Object} key Property name or object (if object, iterate over the object properties)
     * @param {Object|Function} value Property value (if function, the value is passed into it and its return value is used as a new one)
     * @return {fabric.Object} thisArg
     * @chainable
     */
    set: function(key, value) {
      if (typeof key === 'object') {
        this._setObject(key);
      }
      else {
        if (typeof value === 'function' && key !== 'clipTo') {
          this._set(key, value(this.get(key)));
        }
        else {
          this._set(key, value);
        }
      }
      return this;
    },

    /**
     * @private
     * @param {String} key
     * @param {*} value
     * @return {fabric.Object} thisArg
     */
    _set: function(key, value) {
      var shouldConstrainValue = (key === 'scaleX' || key === 'scaleY');

      if (shouldConstrainValue) {
        value = this._constrainScale(value);
      }
      if (key === 'scaleX' && value < 0) {
        this.flipX = !this.flipX;
        value *= -1;
      }
      else if (key === 'scaleY' && value < 0) {
        this.flipY = !this.flipY;
        value *= -1;
      }
      else if (key === 'shadow' && value && !(value instanceof fabric.Shadow)) {
        value = new fabric.Shadow(value);
      }

      this[key] = value;

      if (key === 'width' || key === 'height') {
        this.minScaleLimit = Math.min(0.1, 1/Math.max(this.width, this.height));
      }

      return this;
    },

    /**
     * This callback function is called by the parent group of an object every
     * time a non-delegated property changes on the group. It is passed the key
     * and value as parameters. Not adding in this function's signature to avoid
     * Travis build error about unused variables.
     */
    setOnGroup: function() {
      // implemented by sub-classes, as needed.
    },

    /**
     * Toggles specified property from `true` to `false` or from `false` to `true`
     * @param {String} property Property to toggle
     * @return {fabric.Object} thisArg
     * @chainable
     */
    toggle: function(property) {
      var value = this.get(property);
      if (typeof value === 'boolean') {
        this.set(property, !value);
      }
      return this;
    },

    /**
     * Sets sourcePath of an object
     * @param {String} value Value to set sourcePath to
     * @return {fabric.Object} thisArg
     * @chainable
     */
    setSourcePath: function(value) {
      this.sourcePath = value;
      return this;
    },

    /**
     * Retrieves viewportTransform from Object's canvas if possible
     * @method getViewportTransform
     * @memberOf fabric.Object.prototype
     * @return {Boolean} flipY value // TODO
     */
    getViewportTransform: function() {
      if (this.canvas && this.canvas.viewportTransform) {
        return this.canvas.viewportTransform;
      }
      return [1, 0, 0, 1, 0, 0];
    },

    /**
     * Renders an object on a specified context
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Boolean} [noTransform] When true, context is not transformed
     */
    render: function(ctx, noTransform) {
      // do not render if width/height are zeros or object is not visible
      if ((this.width === 0 && this.height === 0) || !this.visible) {
        return;
      }

      ctx.save();

      //setup fill rule for current object
      this._setupCompositeOperation(ctx);
      this.drawSelectionBackground(ctx);
      if (!noTransform) {
        this.transform(ctx);
      }
      this._setStrokeStyles(ctx);
      this._setFillStyles(ctx);
      if (this.transformMatrix) {
        ctx.transform.apply(ctx, this.transformMatrix);
      }
      this._setOpacity(ctx);
      this._setShadow(ctx);
      this.clipTo && fabric.util.clipContext(this, ctx);
      this._render(ctx, noTransform);
      this.clipTo && ctx.restore();

      ctx.restore();
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _setOpacity: function(ctx) {
      if (this.group) {
        this.group._setOpacity(ctx);
      }
      ctx.globalAlpha *= this.opacity;
    },

    _setStrokeStyles: function(ctx) {
      if (this.stroke) {
        ctx.lineWidth = this.strokeWidth;
        ctx.lineCap = this.strokeLineCap;
        ctx.lineJoin = this.strokeLineJoin;
        ctx.miterLimit = this.strokeMiterLimit;
        ctx.strokeStyle = this.stroke.toLive
          ? this.stroke.toLive(ctx, this)
          : this.stroke;
      }
    },

    _setFillStyles: function(ctx) {
      if (this.fill) {
        ctx.fillStyle = this.fill.toLive
          ? this.fill.toLive(ctx, this)
          : this.fill;
      }
    },

    /**
     * @private
     * Sets line dash
     * @param {CanvasRenderingContext2D} ctx Context to set the dash line on
     * @param {Array} dashArray array representing dashes
     * @param {Function} alternative function to call if browaser does not support lineDash
     */
    _setLineDash: function(ctx, dashArray, alternative) {
      if (!dashArray) {
        return;
      }
      // Spec requires the concatenation of two copies the dash list when the number of elements is odd
      if (1 & dashArray.length) {
        dashArray.push.apply(dashArray, dashArray);
      }
      if (supportsLineDash) {
        ctx.setLineDash(dashArray);
      }
      else {
        alternative && alternative(ctx);
      }
    },

    /**
     * Renders controls and borders for the object
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Boolean} [noTransform] When true, context is not transformed
     */
    _renderControls: function(ctx, noTransform) {
      if (!this.active || noTransform
          || (this.group && this.group !== this.canvas.getActiveGroup())) {
        return;
      }

      var vpt = this.getViewportTransform(),
          matrix = this.calcTransformMatrix(),
          options;
      matrix = fabric.util.multiplyTransformMatrices(vpt, matrix);
      options = fabric.util.qrDecompose(matrix);

      ctx.save();
      ctx.translate(options.translateX, options.translateY);
      ctx.lineWidth = 1 * this.borderScaleFactor;
      ctx.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1;

      if (this.group && this.group === this.canvas.getActiveGroup()) {
        ctx.rotate(degreesToRadians(options.angle));
        this.drawBordersInGroup(ctx, options);
      }
      else {
        ctx.rotate(degreesToRadians(this.angle));
        this.drawBorders(ctx);
      }
      this.drawControls(ctx);
      ctx.restore();
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _setShadow: function(ctx) {
      if (!this.shadow) {
        return;
      }

      var multX = (this.canvas && this.canvas.viewportTransform[0]) || 1,
          multY = (this.canvas && this.canvas.viewportTransform[3]) || 1,
          scaling = this.getObjectScaling();
      if (this.canvas && this.canvas._isRetinaScaling()) {
        multX *= fabric.devicePixelRatio;
        multY *= fabric.devicePixelRatio;
      }
      ctx.shadowColor = this.shadow.color;
      ctx.shadowBlur = this.shadow.blur * (multX + multY) * (scaling.scaleX + scaling.scaleY) / 4;
      ctx.shadowOffsetX = this.shadow.offsetX * multX * scaling.scaleX;
      ctx.shadowOffsetY = this.shadow.offsetY * multY * scaling.scaleY;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _removeShadow: function(ctx) {
      if (!this.shadow) {
        return;
      }

      ctx.shadowColor = '';
      ctx.shadowBlur = ctx.shadowOffsetX = ctx.shadowOffsetY = 0;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderFill: function(ctx) {
      if (!this.fill) {
        return;
      }

      ctx.save();
      if (this.fill.gradientTransform) {
        var g = this.fill.gradientTransform;
        ctx.transform.apply(ctx, g);
      }
      if (this.fill.toLive) {
        ctx.translate(
          -this.width / 2 + this.fill.offsetX || 0,
          -this.height / 2 + this.fill.offsetY || 0);
      }
      if (this.fillRule === 'evenodd') {
        ctx.fill('evenodd');
      }
      else {
        ctx.fill();
      }
      ctx.restore();
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderStroke: function(ctx) {
      if (!this.stroke || this.strokeWidth === 0) {
        return;
      }

      if (this.shadow && !this.shadow.affectStroke) {
        this._removeShadow(ctx);
      }

      ctx.save();

      this._setLineDash(ctx, this.strokeDashArray, this._renderDashedStroke);
      if (this.stroke.gradientTransform) {
        var g = this.stroke.gradientTransform;
        ctx.transform.apply(ctx, g);
      }
      if (this.stroke.toLive) {
        ctx.translate(
          -this.width / 2 + this.stroke.offsetX || 0,
          -this.height / 2 + this.stroke.offsetY || 0);
      }
      ctx.stroke();
      ctx.restore();
    },

    /**
     * Clones an instance
     * @param {Function} callback Callback is invoked with a clone as a first argument
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {fabric.Object} clone of an instance
     */
    clone: function(callback, propertiesToInclude) {
      if (this.constructor.fromObject) {
        return this.constructor.fromObject(this.toObject(propertiesToInclude), callback);
      }
      return new fabric.Object(this.toObject(propertiesToInclude));
    },

    /**
     * Creates an instance of fabric.Image out of an object
     * @param {Function} callback callback, invoked with an instance as a first argument
     * @param {Object} [options] for clone as image, passed to toDataURL
     * @param {Boolean} [options.enableRetinaScaling] enable retina scaling for the cloned image
     * @return {fabric.Object} thisArg
     */
    cloneAsImage: function(callback, options) {
      var dataUrl = this.toDataURL(options);
      fabric.util.loadImage(dataUrl, function(img) {
        if (callback) {
          callback(new fabric.Image(img));
        }
      });
      return this;
    },

    /**
     * Converts an object into a data-url-like string
     * @param {Object} options Options object
     * @param {String} [options.format=png] The format of the output image. Either "jpeg" or "png"
     * @param {Number} [options.quality=1] Quality level (0..1). Only used for jpeg.
     * @param {Number} [options.multiplier=1] Multiplier to scale by
     * @param {Number} [options.left] Cropping left offset. Introduced in v1.2.14
     * @param {Number} [options.top] Cropping top offset. Introduced in v1.2.14
     * @param {Number} [options.width] Cropping width. Introduced in v1.2.14
     * @param {Number} [options.height] Cropping height. Introduced in v1.2.14
     * @param {Boolean} [options.enableRetina] Enable retina scaling for clone image. Introduce in 1.6.4
     * @return {String} Returns a data: URL containing a representation of the object in the format specified by options.format
     */
    toDataURL: function(options) {
      options || (options = { });

      var el = fabric.util.createCanvasElement(),
          boundingRect = this.getBoundingRect();

      el.width = boundingRect.width;
      el.height = boundingRect.height;

      fabric.util.wrapElement(el, 'div');
      var canvas = new fabric.StaticCanvas(el, { enableRetinaScaling: options.enableRetinaScaling });

      // to avoid common confusion https://github.com/kangax/fabric.js/issues/806
      if (options.format === 'jpg') {
        options.format = 'jpeg';
      }

      if (options.format === 'jpeg') {
        canvas.backgroundColor = '#fff';
      }

      var origParams = {
        active: this.get('active'),
        left: this.getLeft(),
        top: this.getTop()
      };

      this.set('active', false);
      this.setPositionByOrigin(new fabric.Point(canvas.getWidth() / 2, canvas.getHeight() / 2), 'center', 'center');

      var originalCanvas = this.canvas;
      canvas.add(this);
      var data = canvas.toDataURL(options);

      this.set(origParams).setCoords();
      this.canvas = originalCanvas;

      canvas.dispose();
      canvas = null;

      return data;
    },

    /**
     * Returns true if specified type is identical to the type of an instance
     * @param {String} type Type to check against
     * @return {Boolean}
     */
    isType: function(type) {
      return this.type === type;
    },

    /**
     * Returns complexity of an instance
     * @return {Number} complexity of this instance
     */
    complexity: function() {
      return 0;
    },

    /**
     * Returns a JSON representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} JSON
     */
    toJSON: function(propertiesToInclude) {
      // delegate, not alias
      return this.toObject(propertiesToInclude);
    },

    /**
     * Sets gradient (fill or stroke) of an object
     * <b>Backwards incompatibility note:</b> This method was named "setGradientFill" until v1.1.0
     * @param {String} property Property name 'stroke' or 'fill'
     * @param {Object} [options] Options object
     * @param {String} [options.type] Type of gradient 'radial' or 'linear'
     * @param {Number} [options.x1=0] x-coordinate of start point
     * @param {Number} [options.y1=0] y-coordinate of start point
     * @param {Number} [options.x2=0] x-coordinate of end point
     * @param {Number} [options.y2=0] y-coordinate of end point
     * @param {Number} [options.r1=0] Radius of start point (only for radial gradients)
     * @param {Number} [options.r2=0] Radius of end point (only for radial gradients)
     * @param {Object} [options.colorStops] Color stops object eg. {0: 'ff0000', 1: '000000'}
     * @param {Object} [options.gradientTransform] transforMatrix for gradient
     * @return {fabric.Object} thisArg
     * @chainable
     * @see {@link http://jsfiddle.net/fabricjs/58y8b/|jsFiddle demo}
     * @example <caption>Set linear gradient</caption>
     * object.setGradient('fill', {
     *   type: 'linear',
     *   x1: -object.width / 2,
     *   y1: 0,
     *   x2: object.width / 2,
     *   y2: 0,
     *   colorStops: {
     *     0: 'red',
     *     0.5: '#005555',
     *     1: 'rgba(0,0,255,0.5)'
     *   }
     * });
     * canvas.renderAll();
     * @example <caption>Set radial gradient</caption>
     * object.setGradient('fill', {
     *   type: 'radial',
     *   x1: 0,
     *   y1: 0,
     *   x2: 0,
     *   y2: 0,
     *   r1: object.width / 2,
     *   r2: 10,
     *   colorStops: {
     *     0: 'red',
     *     0.5: '#005555',
     *     1: 'rgba(0,0,255,0.5)'
     *   }
     * });
     * canvas.renderAll();
     */
    setGradient: function(property, options) {
      options || (options = { });

      var gradient = { colorStops: [] };

      gradient.type = options.type || (options.r1 || options.r2 ? 'radial' : 'linear');
      gradient.coords = {
        x1: options.x1,
        y1: options.y1,
        x2: options.x2,
        y2: options.y2
      };

      if (options.r1 || options.r2) {
        gradient.coords.r1 = options.r1;
        gradient.coords.r2 = options.r2;
      }

      options.gradientTransform && (gradient.gradientTransform = options.gradientTransform);

      for (var position in options.colorStops) {
        var color = new fabric.Color(options.colorStops[position]);
        gradient.colorStops.push({
          offset: position,
          color: color.toRgb(),
          opacity: color.getAlpha()
        });
      }

      return this.set(property, fabric.Gradient.forObject(this, gradient));
    },

    /**
     * Sets pattern fill of an object
     * @param {Object} options Options object
     * @param {(String|HTMLImageElement)} options.source Pattern source
     * @param {String} [options.repeat=repeat] Repeat property of a pattern (one of repeat, repeat-x, repeat-y or no-repeat)
     * @param {Number} [options.offsetX=0] Pattern horizontal offset from object's left/top corner
     * @param {Number} [options.offsetY=0] Pattern vertical offset from object's left/top corner
     * @return {fabric.Object} thisArg
     * @chainable
     * @see {@link http://jsfiddle.net/fabricjs/QT3pa/|jsFiddle demo}
     * @example <caption>Set pattern</caption>
     * fabric.util.loadImage('http://fabricjs.com/assets/escheresque_ste.png', function(img) {
     *   object.setPatternFill({
     *     source: img,
     *     repeat: 'repeat'
     *   });
     *   canvas.renderAll();
     * });
     */
    setPatternFill: function(options) {
      return this.set('fill', new fabric.Pattern(options));
    },

    /**
     * Sets {@link fabric.Object#shadow|shadow} of an object
     * @param {Object|String} [options] Options object or string (e.g. "2px 2px 10px rgba(0,0,0,0.2)")
     * @param {String} [options.color=rgb(0,0,0)] Shadow color
     * @param {Number} [options.blur=0] Shadow blur
     * @param {Number} [options.offsetX=0] Shadow horizontal offset
     * @param {Number} [options.offsetY=0] Shadow vertical offset
     * @return {fabric.Object} thisArg
     * @chainable
     * @see {@link http://jsfiddle.net/fabricjs/7gvJG/|jsFiddle demo}
     * @example <caption>Set shadow with string notation</caption>
     * object.setShadow('2px 2px 10px rgba(0,0,0,0.2)');
     * canvas.renderAll();
     * @example <caption>Set shadow with object notation</caption>
     * object.setShadow({
     *   color: 'red',
     *   blur: 10,
     *   offsetX: 20,
     *   offsetY: 20
     * });
     * canvas.renderAll();
     */
    setShadow: function(options) {
      return this.set('shadow', options ? new fabric.Shadow(options) : null);
    },

    /**
     * Sets "color" of an instance (alias of `set('fill', &hellip;)`)
     * @param {String} color Color value
     * @return {fabric.Object} thisArg
     * @chainable
     */
    setColor: function(color) {
      this.set('fill', color);
      return this;
    },

    /**
     * Sets "angle" of an instance
     * @param {Number} angle Angle value (in degrees)
     * @return {fabric.Object} thisArg
     * @chainable
     */
    setAngle: function(angle) {
      var shouldCenterOrigin = (this.originX !== 'center' || this.originY !== 'center') && this.centeredRotation;

      if (shouldCenterOrigin) {
        this._setOriginToCenter();
      }

      this.set('angle', angle);

      if (shouldCenterOrigin) {
        this._resetOrigin();
      }

      return this;
    },

    /**
     * Centers object horizontally on canvas to which it was added last.
     * You might need to call `setCoords` on an object after centering, to update controls area.
     * @return {fabric.Object} thisArg
     * @chainable
     */
    centerH: function () {
      this.canvas && this.canvas.centerObjectH(this);
      return this;
    },

    /**
     * Centers object horizontally on current viewport of canvas to which it was added last.
     * You might need to call `setCoords` on an object after centering, to update controls area.
     * @return {fabric.Object} thisArg
     * @chainable
     */
    viewportCenterH: function () {
      this.canvas && this.canvas.viewportCenterObjectH(this);
      return this;
    },

    /**
     * Centers object vertically on canvas to which it was added last.
     * You might need to call `setCoords` on an object after centering, to update controls area.
     * @return {fabric.Object} thisArg
     * @chainable
     */
    centerV: function () {
      this.canvas && this.canvas.centerObjectV(this);
      return this;
    },

    /**
     * Centers object vertically on current viewport of canvas to which it was added last.
     * You might need to call `setCoords` on an object after centering, to update controls area.
     * @return {fabric.Object} thisArg
     * @chainable
     */
    viewportCenterV: function () {
      this.canvas && this.canvas.viewportCenterObjectV(this);
      return this;
    },

    /**
     * Centers object vertically and horizontally on canvas to which is was added last
     * You might need to call `setCoords` on an object after centering, to update controls area.
     * @return {fabric.Object} thisArg
     * @chainable
     */
    center: function () {
      this.canvas && this.canvas.centerObject(this);
      return this;
    },

    /**
     * Centers object on current viewport of canvas to which it was added last.
     * You might need to call `setCoords` on an object after centering, to update controls area.
     * @return {fabric.Object} thisArg
     * @chainable
     */
    viewportCenter: function () {
      this.canvas && this.canvas.viewportCenterObject(this);
      return this;
    },

    /**
     * Removes object from canvas to which it was added last
     * @return {fabric.Object} thisArg
     * @chainable
     */
    remove: function() {
      this.canvas && this.canvas.remove(this);
      return this;
    },

    /**
     * Returns coordinates of a pointer relative to an object
     * @param {Event} e Event to operate upon
     * @param {Object} [pointer] Pointer to operate upon (instead of event)
     * @return {Object} Coordinates of a pointer (x, y)
     */
    getLocalPointer: function(e, pointer) {
      pointer = pointer || this.canvas.getPointer(e);
      var pClicked = new fabric.Point(pointer.x, pointer.y),
          objectLeftTop = this._getLeftTopCoords();
      if (this.angle) {
        pClicked = fabric.util.rotatePoint(
          pClicked, objectLeftTop, fabric.util.degreesToRadians(-this.angle));
      }
      return {
        x: pClicked.x - objectLeftTop.x,
        y: pClicked.y - objectLeftTop.y
      };
    },

    /**
     * Sets canvas globalCompositeOperation for specific object
     * custom composition operation for the particular object can be specifed using globalCompositeOperation property
     * @param {CanvasRenderingContext2D} ctx Rendering canvas context
     */
    _setupCompositeOperation: function (ctx) {
      if (this.globalCompositeOperation) {
        ctx.globalCompositeOperation = this.globalCompositeOperation;
      }
    }
  });

  fabric.util.createAccessors(fabric.Object);

  /**
   * Alias for {@link fabric.Object.prototype.setAngle}
   * @alias rotate -> setAngle
   * @memberOf fabric.Object
   */
  fabric.Object.prototype.rotate = fabric.Object.prototype.setAngle;

  extend(fabric.Object.prototype, fabric.Observable);

  /**
   * Defines the number of fraction digits to use when serializing object values.
   * You can use it to increase/decrease precision of such values like left, top, scaleX, scaleY, etc.
   * @static
   * @memberOf fabric.Object
   * @constant
   * @type Number
   */
  fabric.Object.NUM_FRACTION_DIGITS = 2;

  /**
   * Unique id used internally when creating SVG elements
   * @static
   * @memberOf fabric.Object
   * @type Number
   */
  fabric.Object.__uid = 0;

})(typeof exports !== 'undefined' ? exports : this);


(function() {

  var degreesToRadians = fabric.util.degreesToRadians,
      originXOffset = {
        left: -0.5,
        center: 0,
        right: 0.5
      },
      originYOffset = {
        top: -0.5,
        center: 0,
        bottom: 0.5
      };

  fabric.util.object.extend(fabric.Object.prototype, /** @lends fabric.Object.prototype */ {

    /**
     * Translates the coordinates from origin to center coordinates (based on the object's dimensions)
     * @param {fabric.Point} point The point which corresponds to the originX and originY params
     * @param {String} fromOriginX Horizontal origin: 'left', 'center' or 'right'
     * @param {String} fromOriginY Vertical origin: 'top', 'center' or 'bottom'
     * @param {String} toOriginX Horizontal origin: 'left', 'center' or 'right'
     * @param {String} toOriginY Vertical origin: 'top', 'center' or 'bottom'
     * @return {fabric.Point}
     */
    translateToGivenOrigin: function(point, fromOriginX, fromOriginY, toOriginX, toOriginY) {
      var x = point.x,
          y = point.y,
          offsetX, offsetY, dim;

      if (typeof fromOriginX === 'string') {
        fromOriginX = originXOffset[fromOriginX];
      }
      else {
        fromOriginX -= 0.5;
      }

      if (typeof toOriginX === 'string') {
        toOriginX = originXOffset[toOriginX];
      }
      else {
        toOriginX -= 0.5;
      }

      offsetX = toOriginX - fromOriginX;

      if (typeof fromOriginY === 'string') {
        fromOriginY = originYOffset[fromOriginY];
      }
      else {
        fromOriginY -= 0.5;
      }

      if (typeof toOriginY === 'string') {
        toOriginY = originYOffset[toOriginY];
      }
      else {
        toOriginY -= 0.5;
      }

      offsetY = toOriginY - fromOriginY;

      if (offsetX || offsetY) {
        dim = this._getTransformedDimensions();
        x = point.x + offsetX * dim.x;
        y = point.y + offsetY * dim.y;
      }

      return new fabric.Point(x, y);
    },

    /**
     * Translates the coordinates from origin to center coordinates (based on the object's dimensions)
     * @param {fabric.Point} point The point which corresponds to the originX and originY params
     * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
     * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
     * @return {fabric.Point}
     */
    translateToCenterPoint: function(point, originX, originY) {
      var p = this.translateToGivenOrigin(point, originX, originY, 'center', 'center');
      if (this.angle) {
        return fabric.util.rotatePoint(p, point, degreesToRadians(this.angle));
      }
      return p;
    },

    /**
     * Translates the coordinates from center to origin coordinates (based on the object's dimensions)
     * @param {fabric.Point} center The point which corresponds to center of the object
     * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
     * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
     * @return {fabric.Point}
     */
    translateToOriginPoint: function(center, originX, originY) {
      var p = this.translateToGivenOrigin(center, 'center', 'center', originX, originY);
      if (this.angle) {
        return fabric.util.rotatePoint(p, center, degreesToRadians(this.angle));
      }
      return p;
    },

    /**
     * Returns the real center coordinates of the object
     * @return {fabric.Point}
     */
    getCenterPoint: function() {
      var leftTop = new fabric.Point(this.left, this.top);
      return this.translateToCenterPoint(leftTop, this.originX, this.originY);
    },

    /**
     * Returns the coordinates of the object based on center coordinates
     * @param {fabric.Point} point The point which corresponds to the originX and originY params
     * @return {fabric.Point}
     */
    // getOriginPoint: function(center) {
    //   return this.translateToOriginPoint(center, this.originX, this.originY);
    // },

    /**
     * Returns the coordinates of the object as if it has a different origin
     * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
     * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
     * @return {fabric.Point}
     */
    getPointByOrigin: function(originX, originY) {
      var center = this.getCenterPoint();
      return this.translateToOriginPoint(center, originX, originY);
    },

    /**
     * Returns the point in local coordinates
     * @param {fabric.Point} point The point relative to the global coordinate system
     * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
     * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
     * @return {fabric.Point}
     */
    toLocalPoint: function(point, originX, originY) {
      var center = this.getCenterPoint(),
          p, p2;

      if (typeof originX !== 'undefined' && typeof originY !== 'undefined' ) {
        p = this.translateToGivenOrigin(center, 'center', 'center', originX, originY);
      }
      else {
        p = new fabric.Point(this.left, this.top);
      }

      p2 = new fabric.Point(point.x, point.y);
      if (this.angle) {
        p2 = fabric.util.rotatePoint(p2, center, -degreesToRadians(this.angle));
      }
      return p2.subtractEquals(p);
    },

    /**
     * Returns the point in global coordinates
     * @param {fabric.Point} The point relative to the local coordinate system
     * @return {fabric.Point}
     */
    // toGlobalPoint: function(point) {
    //   return fabric.util.rotatePoint(point, this.getCenterPoint(), degreesToRadians(this.angle)).addEquals(new fabric.Point(this.left, this.top));
    // },

    /**
     * Sets the position of the object taking into consideration the object's origin
     * @param {fabric.Point} pos The new position of the object
     * @param {String} originX Horizontal origin: 'left', 'center' or 'right'
     * @param {String} originY Vertical origin: 'top', 'center' or 'bottom'
     * @return {void}
     */
    setPositionByOrigin: function(pos, originX, originY) {
      var center = this.translateToCenterPoint(pos, originX, originY),
          position = this.translateToOriginPoint(center, this.originX, this.originY);

      this.set('left', position.x);
      this.set('top', position.y);
    },

    /**
     * @param {String} to One of 'left', 'center', 'right'
     */
    adjustPosition: function(to) {
      var angle = degreesToRadians(this.angle),
          hypotFull = this.getWidth(),
          xFull = Math.cos(angle) * hypotFull,
          yFull = Math.sin(angle) * hypotFull,
          offsetFrom, offsetTo;

      //TODO: this function does not consider mixed situation like top, center.
      if (typeof this.originX === 'string') {
        offsetFrom = originXOffset[this.originX];
      }
      else {
        offsetFrom = this.originX - 0.5;
      }
      if (typeof to === 'string') {
        offsetTo = originXOffset[to];
      }
      else {
        offsetTo = to - 0.5;
      }
      this.left += xFull * (offsetTo - offsetFrom);
      this.top += yFull * (offsetTo - offsetFrom);
      this.setCoords();
      this.originX = to;
    },

    /**
     * Sets the origin/position of the object to it's center point
     * @private
     * @return {void}
     */
    _setOriginToCenter: function() {
      this._originalOriginX = this.originX;
      this._originalOriginY = this.originY;

      var center = this.getCenterPoint();

      this.originX = 'center';
      this.originY = 'center';

      this.left = center.x;
      this.top = center.y;
    },

    /**
     * Resets the origin/position of the object to it's original origin
     * @private
     * @return {void}
     */
    _resetOrigin: function() {
      var originPoint = this.translateToOriginPoint(
        this.getCenterPoint(),
        this._originalOriginX,
        this._originalOriginY);

      this.originX = this._originalOriginX;
      this.originY = this._originalOriginY;

      this.left = originPoint.x;
      this.top = originPoint.y;

      this._originalOriginX = null;
      this._originalOriginY = null;
    },

    /**
     * @private
     */
    _getLeftTopCoords: function() {
      return this.translateToOriginPoint(this.getCenterPoint(), 'left', 'top');
    }
  });

})();


(function() {

  function getCoords(oCoords) {
    return [
      new fabric.Point(oCoords.tl.x, oCoords.tl.y),
      new fabric.Point(oCoords.tr.x, oCoords.tr.y),
      new fabric.Point(oCoords.br.x, oCoords.br.y),
      new fabric.Point(oCoords.bl.x, oCoords.bl.y)
    ];
  }

  var degreesToRadians = fabric.util.degreesToRadians,
      multiplyMatrices = fabric.util.multiplyTransformMatrices;

  fabric.util.object.extend(fabric.Object.prototype, /** @lends fabric.Object.prototype */ {

    /**
     * Object containing coordinates of object's controls
     * @type Object
     * @default
     */
    oCoords: null,

    /**
     * Checks if object intersects with an area formed by 2 points
     * @param {Object} pointTL top-left point of area
     * @param {Object} pointBR bottom-right point of area
     * @return {Boolean} true if object intersects with an area formed by 2 points
     */
    intersectsWithRect: function(pointTL, pointBR) {
      var oCoords = getCoords(this.oCoords),
          intersection = fabric.Intersection.intersectPolygonRectangle(
            oCoords,
            pointTL,
            pointBR
          );
      return intersection.status === 'Intersection';
    },

    /**
     * Checks if object intersects with another object
     * @param {Object} other Object to test
     * @return {Boolean} true if object intersects with another object
     */
    intersectsWithObject: function(other) {
      var intersection = fabric.Intersection.intersectPolygonPolygon(
            getCoords(this.oCoords),
            getCoords(other.oCoords)
          );

      return intersection.status === 'Intersection';
    },

    /**
     * Checks if object is fully contained within area of another object
     * @param {Object} other Object to test
     * @return {Boolean} true if object is fully contained within area of another object
     */
    isContainedWithinObject: function(other) {
      var boundingRect = other.getBoundingRect(),
          point1 = new fabric.Point(boundingRect.left, boundingRect.top),
          point2 = new fabric.Point(boundingRect.left + boundingRect.width, boundingRect.top + boundingRect.height);

      return this.isContainedWithinRect(point1, point2);
    },

    /**
     * Checks if object is fully contained within area formed by 2 points
     * @param {Object} pointTL top-left point of area
     * @param {Object} pointBR bottom-right point of area
     * @return {Boolean} true if object is fully contained within area formed by 2 points
     */
    isContainedWithinRect: function(pointTL, pointBR) {
      var boundingRect = this.getBoundingRect();

      return (
        boundingRect.left >= pointTL.x &&
        boundingRect.left + boundingRect.width <= pointBR.x &&
        boundingRect.top >= pointTL.y &&
        boundingRect.top + boundingRect.height <= pointBR.y
      );
    },

    /**
     * Checks if point is inside the object
     * @param {fabric.Point} point Point to check against
     * @return {Boolean} true if point is inside the object
     */
    containsPoint: function(point) {
      if (!this.oCoords) {
        this.setCoords();
      }
      var lines = this._getImageLines(this.oCoords),
          xPoints = this._findCrossPoints(point, lines);

      // if xPoints is odd then point is inside the object
      return (xPoints !== 0 && xPoints % 2 === 1);
    },

    /**
     * Method that returns an object with the object edges in it, given the coordinates of the corners
     * @private
     * @param {Object} oCoords Coordinates of the object corners
     */
    _getImageLines: function(oCoords) {
      return {
        topline: {
          o: oCoords.tl,
          d: oCoords.tr
        },
        rightline: {
          o: oCoords.tr,
          d: oCoords.br
        },
        bottomline: {
          o: oCoords.br,
          d: oCoords.bl
        },
        leftline: {
          o: oCoords.bl,
          d: oCoords.tl
        }
      };
    },

    /**
     * Helper method to determine how many cross points are between the 4 object edges
     * and the horizontal line determined by a point on canvas
     * @private
     * @param {fabric.Point} point Point to check
     * @param {Object} oCoords Coordinates of the object being evaluated
     */
    _findCrossPoints: function(point, oCoords) {
      var b1, b2, a1, a2, xi, yi,
          xcount = 0,
          iLine;

      for (var lineKey in oCoords) {
        iLine = oCoords[lineKey];
        // optimisation 1: line below point. no cross
        if ((iLine.o.y < point.y) && (iLine.d.y < point.y)) {
          continue;
        }
        // optimisation 2: line above point. no cross
        if ((iLine.o.y >= point.y) && (iLine.d.y >= point.y)) {
          continue;
        }
        // optimisation 3: vertical line case
        if ((iLine.o.x === iLine.d.x) && (iLine.o.x >= point.x)) {
          xi = iLine.o.x;
          yi = point.y;
        }
        // calculate the intersection point
        else {
          b1 = 0;
          b2 = (iLine.d.y - iLine.o.y) / (iLine.d.x - iLine.o.x);
          a1 = point.y - b1 * point.x;
          a2 = iLine.o.y - b2 * iLine.o.x;

          xi = - (a1 - a2) / (b1 - b2);
          yi = a1 + b1 * xi;
        }
        // dont count xi < point.x cases
        if (xi >= point.x) {
          xcount += 1;
        }
        // optimisation 4: specific for square images
        if (xcount === 2) {
          break;
        }
      }
      return xcount;
    },

    /**
     * Returns width of an object's bounding rectangle
     * @deprecated since 1.0.4
     * @return {Number} width value
     */
    getBoundingRectWidth: function() {
      return this.getBoundingRect().width;
    },

    /**
     * Returns height of an object's bounding rectangle
     * @deprecated since 1.0.4
     * @return {Number} height value
     */
    getBoundingRectHeight: function() {
      return this.getBoundingRect().height;
    },

    /**
     * Returns coordinates of object's bounding rectangle (left, top, width, height)
     * @return {Object} Object with left, top, width, height properties
     */
    getBoundingRect: function() {
      this.oCoords || this.setCoords();
      return fabric.util.makeBoundingBoxFromPoints([
        this.oCoords.tl,
        this.oCoords.tr,
        this.oCoords.br,
        this.oCoords.bl
      ]);
    },

    /**
     * Returns width of an object bounding box counting transformations
     * @return {Number} width value
     */
    getWidth: function() {
      return this._getTransformedDimensions().x;
    },

    /**
     * Returns height of an object bounding box counting transformations
     * to be renamed in 2.0
     * @return {Number} height value
     */
    getHeight: function() {
      return this._getTransformedDimensions().y;
    },

    /**
     * Makes sure the scale is valid and modifies it if necessary
     * @private
     * @param {Number} value
     * @return {Number}
     */
    _constrainScale: function(value) {
      if (Math.abs(value) < this.minScaleLimit) {
        if (value < 0) {
          return -this.minScaleLimit;
        }
        else {
          return this.minScaleLimit;
        }
      }
      return value;
    },

    /**
     * Scales an object (equally by x and y)
     * @param {Number} value Scale factor
     * @return {fabric.Object} thisArg
     * @chainable
     */
    scale: function(value) {
      value = this._constrainScale(value);

      if (value < 0) {
        this.flipX = !this.flipX;
        this.flipY = !this.flipY;
        value *= -1;
      }

      this.scaleX = value;
      this.scaleY = value;
      this.setCoords();
      return this;
    },

    /**
     * Scales an object to a given width, with respect to bounding box (scaling by x/y equally)
     * @param {Number} value New width value
     * @return {fabric.Object} thisArg
     * @chainable
     */
    scaleToWidth: function(value) {
      // adjust to bounding rect factor so that rotated shapes would fit as well
      var boundingRectFactor = this.getBoundingRect().width / this.getWidth();
      return this.scale(value / this.width / boundingRectFactor);
    },

    /**
     * Scales an object to a given height, with respect to bounding box (scaling by x/y equally)
     * @param {Number} value New height value
     * @return {fabric.Object} thisArg
     * @chainable
     */
    scaleToHeight: function(value) {
      // adjust to bounding rect factor so that rotated shapes would fit as well
      var boundingRectFactor = this.getBoundingRect().height / this.getHeight();
      return this.scale(value / this.height / boundingRectFactor);
    },

    /**
     * Sets corner position coordinates based on current angle, width and height
     * See https://github.com/kangax/fabric.js/wiki/When-to-call-setCoords
     * @return {fabric.Object} thisArg
     * @chainable
     */
    setCoords: function() {
      var theta = degreesToRadians(this.angle),
          vpt = this.getViewportTransform(),
          dim = this._calculateCurrentDimensions(),
          currentWidth = dim.x, currentHeight = dim.y;

      // If width is negative, make postive. Fixes path selection issue
      if (currentWidth < 0) {
        currentWidth = Math.abs(currentWidth);
      }

      var sinTh = Math.sin(theta),
          cosTh = Math.cos(theta),
          _angle = currentWidth > 0 ? Math.atan(currentHeight / currentWidth) : 0,
          _hypotenuse = (currentWidth / Math.cos(_angle)) / 2,
          offsetX = Math.cos(_angle + theta) * _hypotenuse,
          offsetY = Math.sin(_angle + theta) * _hypotenuse,

          // offset added for rotate and scale actions
          coords = fabric.util.transformPoint(this.getCenterPoint(), vpt),
          tl  = new fabric.Point(coords.x - offsetX, coords.y - offsetY),
          tr  = new fabric.Point(tl.x + (currentWidth * cosTh), tl.y + (currentWidth * sinTh)),
          bl  = new fabric.Point(tl.x - (currentHeight * sinTh), tl.y + (currentHeight * cosTh)),
          br  = new fabric.Point(coords.x + offsetX, coords.y + offsetY),
          ml  = new fabric.Point((tl.x + bl.x)/2, (tl.y + bl.y)/2),
          mt  = new fabric.Point((tr.x + tl.x)/2, (tr.y + tl.y)/2),
          mr  = new fabric.Point((br.x + tr.x)/2, (br.y + tr.y)/2),
          mb  = new fabric.Point((br.x + bl.x)/2, (br.y + bl.y)/2),
          mtr = new fabric.Point(mt.x + sinTh * this.rotatingPointOffset, mt.y - cosTh * this.rotatingPointOffset);
      // debugging

      /* setTimeout(function() {
         canvas.contextTop.fillStyle = 'green';
         canvas.contextTop.fillRect(mb.x, mb.y, 3, 3);
         canvas.contextTop.fillRect(bl.x, bl.y, 3, 3);
         canvas.contextTop.fillRect(br.x, br.y, 3, 3);
         canvas.contextTop.fillRect(tl.x, tl.y, 3, 3);
         canvas.contextTop.fillRect(tr.x, tr.y, 3, 3);
         canvas.contextTop.fillRect(ml.x, ml.y, 3, 3);
         canvas.contextTop.fillRect(mr.x, mr.y, 3, 3);
         canvas.contextTop.fillRect(mt.x, mt.y, 3, 3);
         canvas.contextTop.fillRect(mtr.x, mtr.y, 3, 3);
       }, 50); */

      this.oCoords = {
        // corners
        tl: tl, tr: tr, br: br, bl: bl,
        // middle
        ml: ml, mt: mt, mr: mr, mb: mb,
        // rotating point
        mtr: mtr
      };

      // set coordinates of the draggable boxes in the corners used to scale/rotate the image
      this._setCornerCoords && this._setCornerCoords();

      return this;
    },

    _calcRotateMatrix: function() {
      if (this.angle) {
        var theta = degreesToRadians(this.angle), cos = Math.cos(theta), sin = Math.sin(theta);
        return [cos, sin, -sin, cos, 0, 0];
      }
      return [1, 0, 0, 1, 0, 0];
    },

    /*
     * calculate trasform Matrix that represent current transformation from
     * object properties.
     * @return {Array} matrix Transform Matrix for the object
     */
    calcTransformMatrix: function() {
      var center = this.getCenterPoint(),
          translateMatrix = [1, 0, 0, 1, center.x, center.y],
          rotateMatrix = this._calcRotateMatrix(),
          dimensionMatrix = this._calcDimensionsTransformMatrix(this.skewX, this.skewY, true),
          matrix = this.group ? this.group.calcTransformMatrix() : [1, 0, 0, 1, 0, 0];
      matrix = multiplyMatrices(matrix, translateMatrix);
      matrix = multiplyMatrices(matrix, rotateMatrix);
      matrix = multiplyMatrices(matrix, dimensionMatrix);
      return matrix;
    },

    _calcDimensionsTransformMatrix: function(skewX, skewY, flipping) {
      var skewMatrixX = [1, 0, Math.tan(degreesToRadians(skewX)), 1],
          skewMatrixY = [1, Math.tan(degreesToRadians(skewY)), 0, 1],
          scaleX = this.scaleX * (flipping && this.flipX ? -1 : 1),
          scaleY = this.scaleY * (flipping && this.flipY ? -1 : 1),
          scaleMatrix = [scaleX, 0, 0, scaleY],
          m = multiplyMatrices(scaleMatrix, skewMatrixX, true);
      return multiplyMatrices(m, skewMatrixY, true);
    }
  });
})();


fabric.util.object.extend(fabric.Object.prototype, /** @lends fabric.Object.prototype */ {

  /**
   * Moves an object to the bottom of the stack of drawn objects
   * @return {fabric.Object} thisArg
   * @chainable
   */
  sendToBack: function() {
    if (this.group) {
      fabric.StaticCanvas.prototype.sendToBack.call(this.group, this);
    }
    else {
      this.canvas.sendToBack(this);
    }
    return this;
  },

  /**
   * Moves an object to the top of the stack of drawn objects
   * @return {fabric.Object} thisArg
   * @chainable
   */
  bringToFront: function() {
    if (this.group) {
      fabric.StaticCanvas.prototype.bringToFront.call(this.group, this);
    }
    else {
      this.canvas.bringToFront(this);
    }
    return this;
  },

  /**
   * Moves an object down in stack of drawn objects
   * @param {Boolean} [intersecting] If `true`, send object behind next lower intersecting object
   * @return {fabric.Object} thisArg
   * @chainable
   */
  sendBackwards: function(intersecting) {
    if (this.group) {
      fabric.StaticCanvas.prototype.sendBackwards.call(this.group, this, intersecting);
    }
    else {
      this.canvas.sendBackwards(this, intersecting);
    }
    return this;
  },

  /**
   * Moves an object up in stack of drawn objects
   * @param {Boolean} [intersecting] If `true`, send object in front of next upper intersecting object
   * @return {fabric.Object} thisArg
   * @chainable
   */
  bringForward: function(intersecting) {
    if (this.group) {
      fabric.StaticCanvas.prototype.bringForward.call(this.group, this, intersecting);
    }
    else {
      this.canvas.bringForward(this, intersecting);
    }
    return this;
  },

  /**
   * Moves an object to specified level in stack of drawn objects
   * @param {Number} index New position of object
   * @return {fabric.Object} thisArg
   * @chainable
   */
  moveTo: function(index) {
    if (this.group) {
      fabric.StaticCanvas.prototype.moveTo.call(this.group, this, index);
    }
    else {
      this.canvas.moveTo(this, index);
    }
    return this;
  }
});


/* _TO_SVG_START_ */
(function() {

  function getSvgColorString(prop, value) {
    if (!value) {
      return prop + ': none; ';
    }
    else if (value.toLive) {
      return prop + ': url(#SVGID_' + value.id + '); ';
    }
    else {
      var color = new fabric.Color(value),
          str = prop + ': ' + color.toRgb() + '; ',
          opacity = color.getAlpha();
      if (opacity !== 1) {
        //change the color in rgb + opacity
        str += prop + '-opacity: ' + opacity.toString() + '; ';
      }
      return str;
    }
  }

  fabric.util.object.extend(fabric.Object.prototype, /** @lends fabric.Object.prototype */ {
    /**
     * Returns styles-string for svg-export
     * @param {Boolean} skipShadow a boolean to skip shadow filter output
     * @return {String}
     */
    getSvgStyles: function(skipShadow) {

      var fillRule = this.fillRule,
          strokeWidth = this.strokeWidth ? this.strokeWidth : '0',
          strokeDashArray = this.strokeDashArray ? this.strokeDashArray.join(' ') : 'none',
          strokeLineCap = this.strokeLineCap ? this.strokeLineCap : 'butt',
          strokeLineJoin = this.strokeLineJoin ? this.strokeLineJoin : 'miter',
          strokeMiterLimit = this.strokeMiterLimit ? this.strokeMiterLimit : '4',
          opacity = typeof this.opacity !== 'undefined' ? this.opacity : '1',
          visibility = this.visible ? '' : ' visibility: hidden;',
          filter = skipShadow ? '' : this.getSvgFilter(),
          fill = getSvgColorString('fill', this.fill),
          stroke = getSvgColorString('stroke', this.stroke);

      return [
        stroke,
        'stroke-width: ', strokeWidth, '; ',
        'stroke-dasharray: ', strokeDashArray, '; ',
        'stroke-linecap: ', strokeLineCap, '; ',
        'stroke-linejoin: ', strokeLineJoin, '; ',
        'stroke-miterlimit: ', strokeMiterLimit, '; ',
        fill,
        'fill-rule: ', fillRule, '; ',
        'opacity: ', opacity, ';',
        filter,
        visibility
      ].join('');
    },

    /**
     * Returns filter for svg shadow
     * @return {String}
     */
    getSvgFilter: function() {
      return this.shadow ? 'filter: url(#SVGID_' + this.shadow.id + ');' : '';
    },

    /**
     * Returns id attribute for svg output
     * @return {String}
     */
    getSvgId: function() {
      return this.id ? 'id="' + this.id + '" ' : '';
    },

    /**
     * Returns transform-string for svg-export
     * @return {String}
     */
    getSvgTransform: function() {
      if (this.group && this.group.type === 'path-group') {
        return '';
      }
      var toFixed = fabric.util.toFixed,
          angle = this.getAngle(),
          skewX = (this.getSkewX() % 360),
          skewY = (this.getSkewY() % 360),
          center = this.getCenterPoint(),

          NUM_FRACTION_DIGITS = fabric.Object.NUM_FRACTION_DIGITS,

          translatePart = this.type === 'path-group' ? '' : 'translate(' +
                            toFixed(center.x, NUM_FRACTION_DIGITS) +
                            ' ' +
                            toFixed(center.y, NUM_FRACTION_DIGITS) +
                          ')',

          anglePart = angle !== 0
            ? (' rotate(' + toFixed(angle, NUM_FRACTION_DIGITS) + ')')
            : '',

          scalePart = (this.scaleX === 1 && this.scaleY === 1)
            ? '' :
            (' scale(' +
              toFixed(this.scaleX, NUM_FRACTION_DIGITS) +
              ' ' +
              toFixed(this.scaleY, NUM_FRACTION_DIGITS) +
            ')'),

          skewXPart = skewX !== 0 ? ' skewX(' + toFixed(skewX, NUM_FRACTION_DIGITS) + ')' : '',

          skewYPart = skewY !== 0 ? ' skewY(' + toFixed(skewY, NUM_FRACTION_DIGITS) + ')' : '',

          addTranslateX = this.type === 'path-group' ? this.width : 0,

          flipXPart = this.flipX ? ' matrix(-1 0 0 1 ' + addTranslateX + ' 0) ' : '',

          addTranslateY = this.type === 'path-group' ? this.height : 0,

          flipYPart = this.flipY ? ' matrix(1 0 0 -1 0 ' + addTranslateY + ')' : '';

      return [
        translatePart, anglePart, scalePart, flipXPart, flipYPart, skewXPart, skewYPart
      ].join('');
    },

    /**
     * Returns transform-string for svg-export from the transform matrix of single elements
     * @return {String}
     */
    getSvgTransformMatrix: function() {
      return this.transformMatrix ? ' matrix(' + this.transformMatrix.join(' ') + ') ' : '';
    },

    /**
     * @private
     */
    _createBaseSVGMarkup: function() {
      var markup = [ ];

      if (this.fill && this.fill.toLive) {
        markup.push(this.fill.toSVG(this, false));
      }
      if (this.stroke && this.stroke.toLive) {
        markup.push(this.stroke.toSVG(this, false));
      }
      if (this.shadow) {
        markup.push(this.shadow.toSVG(this));
      }
      return markup;
    }
  });
})();
/* _TO_SVG_END_ */


/*
  Depends on `stateProperties`
*/
fabric.util.object.extend(fabric.Object.prototype, /** @lends fabric.Object.prototype */ {

  /**
   * Returns true if object state (one of its state properties) was changed
   * @return {Boolean} true if instance' state has changed since `{@link fabric.Object#saveState}` was called
   */
  hasStateChanged: function() {
    return this.stateProperties.some(function(prop) {
      return this.get(prop) !== this.originalState[prop];
    }, this);
  },

  /**
   * Saves state of an object
   * @param {Object} [options] Object with additional `stateProperties` array to include when saving state
   * @return {fabric.Object} thisArg
   */
  saveState: function(options) {
    this.stateProperties.forEach(function(prop) {
      this.originalState[prop] = this.get(prop);
    }, this);

    if (options && options.stateProperties) {
      options.stateProperties.forEach(function(prop) {
        this.originalState[prop] = this.get(prop);
      }, this);
    }

    return this;
  },

  /**
   * Setups state of an object
   * @return {fabric.Object} thisArg
   */
  setupState: function() {
    this.originalState = { };
    this.saveState();

    return this;
  }
});


(function() {

  var degreesToRadians = fabric.util.degreesToRadians,
      //jscs:disable requireCamelCaseOrUpperCaseIdentifiers
      isVML = function() { return typeof G_vmlCanvasManager !== 'undefined'; };
  //jscs:enable requireCamelCaseOrUpperCaseIdentifiers

  fabric.util.object.extend(fabric.Object.prototype, /** @lends fabric.Object.prototype */ {

    /**
     * The object interactivity controls.
     * @private
     */
    _controlsVisibility: null,

    /**
     * Determines which corner has been clicked
     * @private
     * @param {Object} pointer The pointer indicating the mouse position
     * @return {String|Boolean} corner code (tl, tr, bl, br, etc.), or false if nothing is found
     */
    _findTargetCorner: function(pointer) {
      if (!this.hasControls || !this.active) {
        return false;
      }

      var ex = pointer.x,
          ey = pointer.y,
          xPoints,
          lines;
      this.__corner = 0;
      for (var i in this.oCoords) {

        if (!this.isControlVisible(i)) {
          continue;
        }

        if (i === 'mtr' && !this.hasRotatingPoint) {
          continue;
        }

        if (this.get('lockUniScaling') &&
           (i === 'mt' || i === 'mr' || i === 'mb' || i === 'ml')) {
          continue;
        }

        lines = this._getImageLines(this.oCoords[i].corner);

        // debugging

        // canvas.contextTop.fillRect(lines.bottomline.d.x, lines.bottomline.d.y, 2, 2);
        // canvas.contextTop.fillRect(lines.bottomline.o.x, lines.bottomline.o.y, 2, 2);

        // canvas.contextTop.fillRect(lines.leftline.d.x, lines.leftline.d.y, 2, 2);
        // canvas.contextTop.fillRect(lines.leftline.o.x, lines.leftline.o.y, 2, 2);

        // canvas.contextTop.fillRect(lines.topline.d.x, lines.topline.d.y, 2, 2);
        // canvas.contextTop.fillRect(lines.topline.o.x, lines.topline.o.y, 2, 2);

        // canvas.contextTop.fillRect(lines.rightline.d.x, lines.rightline.d.y, 2, 2);
        // canvas.contextTop.fillRect(lines.rightline.o.x, lines.rightline.o.y, 2, 2);

        xPoints = this._findCrossPoints({ x: ex, y: ey }, lines);
        if (xPoints !== 0 && xPoints % 2 === 1) {
          this.__corner = i;
          return i;
        }
      }
      return false;
    },

    /**
     * Sets the coordinates of the draggable boxes in the corners of
     * the image used to scale/rotate it.
     * @private
     */
    _setCornerCoords: function() {
      var coords = this.oCoords,
          newTheta = degreesToRadians(45 - this.angle),
          /* Math.sqrt(2 * Math.pow(this.cornerSize, 2)) / 2, */
          /* 0.707106 stands for sqrt(2)/2 */
          cornerHypotenuse = this.cornerSize * 0.707106,
          cosHalfOffset = cornerHypotenuse * Math.cos(newTheta),
          sinHalfOffset = cornerHypotenuse * Math.sin(newTheta),
          x, y;

      for (var point in coords) {
        x = coords[point].x;
        y = coords[point].y;
        coords[point].corner = {
          tl: {
            x: x - sinHalfOffset,
            y: y - cosHalfOffset
          },
          tr: {
            x: x + cosHalfOffset,
            y: y - sinHalfOffset
          },
          bl: {
            x: x - cosHalfOffset,
            y: y + sinHalfOffset
          },
          br: {
            x: x + sinHalfOffset,
            y: y + cosHalfOffset
          }
        };
      }
    },

    /*
     * Calculate object dimensions from its properties
     * @private
     */
    _getNonTransformedDimensions: function() {
      var strokeWidth = this.strokeWidth,
          w = this.width,
          h = this.height,
          addStrokeToW = true,
          addStrokeToH = true;

      if (this.type === 'line' && this.strokeLineCap === 'butt') {
        addStrokeToH = w;
        addStrokeToW = h;
      }

      if (addStrokeToH) {
        h += h < 0 ? -strokeWidth : strokeWidth;
      }

      if (addStrokeToW) {
        w += w < 0 ? -strokeWidth : strokeWidth;
      }

      return { x: w, y: h };
    },

    /*
     * @private
     */
    _getTransformedDimensions: function(skewX, skewY) {
      if (typeof skewX === 'undefined') {
        skewX = this.skewX;
      }
      if (typeof skewY === 'undefined') {
        skewY = this.skewY;
      }
      var dimensions = this._getNonTransformedDimensions(),
          dimX = dimensions.x /2, dimY = dimensions.y / 2,
          points = [
          {
            x: -dimX,
            y: -dimY
          },
          {
            x: dimX,
            y: -dimY
          },
          {
            x: -dimX,
            y: dimY
          },
          {
            x: dimX,
            y: dimY
          }],
          i, transformMatrix = this._calcDimensionsTransformMatrix(skewX, skewY, false),
          bbox;
      for (i = 0; i < points.length; i++) {
        points[i] = fabric.util.transformPoint(points[i], transformMatrix);
      }
      bbox = fabric.util.makeBoundingBoxFromPoints(points);
      return { x: bbox.width, y: bbox.height };
    },

    /*
     * private
     */
    _calculateCurrentDimensions: function()  {
      var vpt = this.getViewportTransform(),
          dim = this._getTransformedDimensions(),
          w = dim.x, h = dim.y,
          p = fabric.util.transformPoint(new fabric.Point(w, h), vpt, true);

      return p.scalarAdd(2 * this.padding);
    },

    /**
     * Draws a colored layer behind the object, inside its selection borders.
     * Requires public options: padding, selectionBackgroundColor
     * this function is called when the context is transformed
     * @param {CanvasRenderingContext2D} ctx Context to draw on
     * @return {fabric.Object} thisArg
     * @chainable
     */
    drawSelectionBackground: function(ctx) {
      if (!this.selectionBackgroundColor || this.group
        || this !== this.canvas.getActiveObject()) {
        return this;
      }
      ctx.save();
      var center = this.getCenterPoint(), wh = this._calculateCurrentDimensions(),
          vpt = this.canvas.viewportTransform;
      ctx.translate(center.x, center.y);
      ctx.scale(1 / vpt[0], 1 / vpt[3]);
      ctx.rotate(degreesToRadians(this.angle));
      ctx.fillStyle = this.selectionBackgroundColor;
      ctx.fillRect(-wh.x/2, -wh.y/2, wh.x, wh.y);
      ctx.restore();
      return this;
    },

    /**
     * Draws borders of an object's bounding box.
     * Requires public properties: width, height
     * Requires public options: padding, borderColor
     * @param {CanvasRenderingContext2D} ctx Context to draw on
     * @return {fabric.Object} thisArg
     * @chainable
     */
    drawBorders: function(ctx) {
      if (!this.hasBorders) {
        return this;
      }

      var wh = this._calculateCurrentDimensions(),
          strokeWidth = 1 / this.borderScaleFactor,
          width = wh.x + strokeWidth,
          height = wh.y + strokeWidth;

      ctx.save();
      ctx.strokeStyle = this.borderColor;
      this._setLineDash(ctx, this.borderDashArray, null);

      ctx.strokeRect(
        -width / 2,
        -height / 2,
        width,
        height
      );

      if (this.hasRotatingPoint && this.isControlVisible('mtr') && !this.get('lockRotation') && this.hasControls) {

        var rotateHeight = -height / 2;

        ctx.beginPath();
        ctx.moveTo(0, rotateHeight);
        ctx.lineTo(0, rotateHeight - this.rotatingPointOffset);
        ctx.closePath();
        ctx.stroke();
      }

      ctx.restore();
      return this;
    },

    /**
     * Draws borders of an object's bounding box when it is inside a group.
     * Requires public properties: width, height
     * Requires public options: padding, borderColor
     * @param {CanvasRenderingContext2D} ctx Context to draw on
     * @param {object} options object representing current object parameters
     * @return {fabric.Object} thisArg
     * @chainable
     */
    drawBordersInGroup: function(ctx, options) {
      if (!this.hasBorders) {
        return this;
      }

      var p = this._getNonTransformedDimensions(),
          matrix = fabric.util.customTransformMatrix(options.scaleX, options.scaleY, options.skewX),
          wh = fabric.util.transformPoint(p, matrix),
          strokeWidth = 1 / this.borderScaleFactor,
          width = wh.x + strokeWidth + 2 * this.padding,
          height = wh.y + strokeWidth + 2 * this.padding;

      ctx.save();
      this._setLineDash(ctx, this.borderDashArray, null);
      ctx.strokeStyle = this.borderColor;

      ctx.strokeRect(
        -width / 2,
        -height / 2,
        width,
        height
      );

      ctx.restore();
      return this;
    },

    /**
     * Draws corners of an object's bounding box.
     * Requires public properties: width, height
     * Requires public options: cornerSize, padding
     * @param {CanvasRenderingContext2D} ctx Context to draw on
     * @return {fabric.Object} thisArg
     * @chainable
     */
    drawControls: function(ctx) {
      if (!this.hasControls) {
        return this;
      }

      var wh = this._calculateCurrentDimensions(),
          width = wh.x,
          height = wh.y,
          scaleOffset = this.cornerSize,
          left = -(width + scaleOffset) / 2,
          top = -(height + scaleOffset) / 2,
          methodName = this.transparentCorners ? 'stroke' : 'fill';

      ctx.save();
      ctx.strokeStyle = ctx.fillStyle = this.cornerColor;
      if (!this.transparentCorners) {
        ctx.strokeStyle = this.cornerStrokeColor;
      }
      this._setLineDash(ctx, this.cornerDashArray, null);

      // top-left
      this._drawControl('tl', ctx, methodName,
        left,
        top);

      // top-right
      this._drawControl('tr', ctx, methodName,
        left + width,
        top);

      // bottom-left
      this._drawControl('bl', ctx, methodName,
        left,
        top + height);

      // bottom-right
      this._drawControl('br', ctx, methodName,
        left + width,
        top + height);

      if (!this.get('lockUniScaling')) {

        // middle-top
        this._drawControl('mt', ctx, methodName,
          left + width/2,
          top);

        // middle-bottom
        this._drawControl('mb', ctx, methodName,
          left + width/2,
          top + height);

        // middle-right
        this._drawControl('mr', ctx, methodName,
          left + width,
          top + height/2);

        // middle-left
        this._drawControl('ml', ctx, methodName,
          left,
          top + height/2);
      }

      // middle-top-rotate
      if (this.hasRotatingPoint) {
        this._drawControl('mtr', ctx, methodName,
          left + width / 2,
          top - this.rotatingPointOffset);
      }

      ctx.restore();

      return this;
    },

    /**
     * @private
     */
    _drawControl: function(control, ctx, methodName, left, top) {
      if (!this.isControlVisible(control)) {
        return;
      }
      var size = this.cornerSize, stroke = !this.transparentCorners && this.cornerStrokeColor;
      switch (this.cornerStyle) {
        case 'circle':
          ctx.beginPath();
          ctx.arc(left + size/2, top + size/2, size/2, 0, 2 * Math.PI, false);
          ctx[methodName]();
          if (stroke) {
            ctx.stroke();
          }
          break;
        default:
          isVML() || this.transparentCorners || ctx.clearRect(left, top, size, size);
          ctx[methodName + 'Rect'](left, top, size, size);
          if (stroke) {
            ctx.strokeRect(left, top, size, size);
          }
      }
    },

    /**
     * Returns true if the specified control is visible, false otherwise.
     * @param {String} controlName The name of the control. Possible values are 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'.
     * @returns {Boolean} true if the specified control is visible, false otherwise
     */
    isControlVisible: function(controlName) {
      return this._getControlsVisibility()[controlName];
    },

    /**
     * Sets the visibility of the specified control.
     * @param {String} controlName The name of the control. Possible values are 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'.
     * @param {Boolean} visible true to set the specified control visible, false otherwise
     * @return {fabric.Object} thisArg
     * @chainable
     */
    setControlVisible: function(controlName, visible) {
      this._getControlsVisibility()[controlName] = visible;
      return this;
    },

    /**
     * Sets the visibility state of object controls.
     * @param {Object} [options] Options object
     * @param {Boolean} [options.bl] true to enable the bottom-left control, false to disable it
     * @param {Boolean} [options.br] true to enable the bottom-right control, false to disable it
     * @param {Boolean} [options.mb] true to enable the middle-bottom control, false to disable it
     * @param {Boolean} [options.ml] true to enable the middle-left control, false to disable it
     * @param {Boolean} [options.mr] true to enable the middle-right control, false to disable it
     * @param {Boolean} [options.mt] true to enable the middle-top control, false to disable it
     * @param {Boolean} [options.tl] true to enable the top-left control, false to disable it
     * @param {Boolean} [options.tr] true to enable the top-right control, false to disable it
     * @param {Boolean} [options.mtr] true to enable the middle-top-rotate control, false to disable it
     * @return {fabric.Object} thisArg
     * @chainable
     */
    setControlsVisibility: function(options) {
      options || (options = { });

      for (var p in options) {
        this.setControlVisible(p, options[p]);
      }
      return this;
    },

    /**
     * Returns the instance of the control visibility set for this object.
     * @private
     * @returns {Object}
     */
    _getControlsVisibility: function() {
      if (!this._controlsVisibility) {
        this._controlsVisibility = {
          tl: true,
          tr: true,
          br: true,
          bl: true,
          ml: true,
          mt: true,
          mr: true,
          mb: true,
          mtr: true
        };
      }
      return this._controlsVisibility;
    }
  });
})();


fabric.util.object.extend(fabric.StaticCanvas.prototype, /** @lends fabric.StaticCanvas.prototype */ {

  /**
   * Animation duration (in ms) for fx* methods
   * @type Number
   * @default
   */
  FX_DURATION: 500,

  /**
   * Centers object horizontally with animation.
   * @param {fabric.Object} object Object to center
   * @param {Object} [callbacks] Callbacks object with optional "onComplete" and/or "onChange" properties
   * @param {Function} [callbacks.onComplete] Invoked on completion
   * @param {Function} [callbacks.onChange] Invoked on every step of animation
   * @return {fabric.Canvas} thisArg
   * @chainable
   */
  fxCenterObjectH: function (object, callbacks) {
    callbacks = callbacks || { };

    var empty = function() { },
        onComplete = callbacks.onComplete || empty,
        onChange = callbacks.onChange || empty,
        _this = this;

    fabric.util.animate({
      startValue: object.get('left'),
      endValue: this.getCenter().left,
      duration: this.FX_DURATION,
      onChange: function(value) {
        object.set('left', value);
        _this.renderAll();
        onChange();
      },
      onComplete: function() {
        object.setCoords();
        onComplete();
      }
    });

    return this;
  },

  /**
   * Centers object vertically with animation.
   * @param {fabric.Object} object Object to center
   * @param {Object} [callbacks] Callbacks object with optional "onComplete" and/or "onChange" properties
   * @param {Function} [callbacks.onComplete] Invoked on completion
   * @param {Function} [callbacks.onChange] Invoked on every step of animation
   * @return {fabric.Canvas} thisArg
   * @chainable
   */
  fxCenterObjectV: function (object, callbacks) {
    callbacks = callbacks || { };

    var empty = function() { },
        onComplete = callbacks.onComplete || empty,
        onChange = callbacks.onChange || empty,
        _this = this;

    fabric.util.animate({
      startValue: object.get('top'),
      endValue: this.getCenter().top,
      duration: this.FX_DURATION,
      onChange: function(value) {
        object.set('top', value);
        _this.renderAll();
        onChange();
      },
      onComplete: function() {
        object.setCoords();
        onComplete();
      }
    });

    return this;
  },

  /**
   * Same as `fabric.Canvas#remove` but animated
   * @param {fabric.Object} object Object to remove
   * @param {Object} [callbacks] Callbacks object with optional "onComplete" and/or "onChange" properties
   * @param {Function} [callbacks.onComplete] Invoked on completion
   * @param {Function} [callbacks.onChange] Invoked on every step of animation
   * @return {fabric.Canvas} thisArg
   * @chainable
   */
  fxRemove: function (object, callbacks) {
    callbacks = callbacks || { };

    var empty = function() { },
        onComplete = callbacks.onComplete || empty,
        onChange = callbacks.onChange || empty,
        _this = this;

    fabric.util.animate({
      startValue: object.get('opacity'),
      endValue: 0,
      duration: this.FX_DURATION,
      onStart: function() {
        object.set('active', false);
      },
      onChange: function(value) {
        object.set('opacity', value);
        _this.renderAll();
        onChange();
      },
      onComplete: function () {
        _this.remove(object);
        onComplete();
      }
    });

    return this;
  }
});

fabric.util.object.extend(fabric.Object.prototype, /** @lends fabric.Object.prototype */ {
  /**
   * Animates object's properties
   * @param {String|Object} property Property to animate (if string) or properties to animate (if object)
   * @param {Number|Object} value Value to animate property to (if string was given first) or options object
   * @return {fabric.Object} thisArg
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-2#animation}
   * @chainable
   *
   * As object — multiple properties
   *
   * object.animate({ left: ..., top: ... });
   * object.animate({ left: ..., top: ... }, { duration: ... });
   *
   * As string — one property
   *
   * object.animate('left', ...);
   * object.animate('left', { duration: ... });
   *
   */
  animate: function() {
    if (arguments[0] && typeof arguments[0] === 'object') {
      var propsToAnimate = [ ], prop, skipCallbacks;
      for (prop in arguments[0]) {
        propsToAnimate.push(prop);
      }
      for (var i = 0, len = propsToAnimate.length; i < len; i++) {
        prop = propsToAnimate[i];
        skipCallbacks = i !== len - 1;
        this._animate(prop, arguments[0][prop], arguments[1], skipCallbacks);
      }
    }
    else {
      this._animate.apply(this, arguments);
    }
    return this;
  },

  /**
   * @private
   * @param {String} property Property to animate
   * @param {String} to Value to animate to
   * @param {Object} [options] Options object
   * @param {Boolean} [skipCallbacks] When true, callbacks like onchange and oncomplete are not invoked
   */
  _animate: function(property, to, options, skipCallbacks) {
    var _this = this, propPair;

    to = to.toString();

    if (!options) {
      options = { };
    }
    else {
      options = fabric.util.object.clone(options);
    }

    if (~property.indexOf('.')) {
      propPair = property.split('.');
    }

    var currentValue = propPair
      ? this.get(propPair[0])[propPair[1]]
      : this.get(property);

    if (!('from' in options)) {
      options.from = currentValue;
    }

    if (~to.indexOf('=')) {
      to = currentValue + parseFloat(to.replace('=', ''));
    }
    else {
      to = parseFloat(to);
    }

    fabric.util.animate({
      startValue: options.from,
      endValue: to,
      byValue: options.by,
      easing: options.easing,
      duration: options.duration,
      abort: options.abort && function() {
        return options.abort.call(_this);
      },
      onChange: function(value) {
        if (propPair) {
          _this[propPair[0]][propPair[1]] = value;
        }
        else {
          _this.set(property, value);
        }
        if (skipCallbacks) {
          return;
        }
        options.onChange && options.onChange();
      },
      onComplete: function() {
        if (skipCallbacks) {
          return;
        }

        _this.setCoords();
        options.onComplete && options.onComplete();
      }
    });
  }
});


(function(global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend,
      coordProps = { x1: 1, x2: 1, y1: 1, y2: 1 },
      supportsLineDash = fabric.StaticCanvas.supports('setLineDash');

  if (fabric.Line) {
    fabric.warn('fabric.Line is already defined');
    return;
  }

  /**
   * Line class
   * @class fabric.Line
   * @extends fabric.Object
   * @see {@link fabric.Line#initialize} for constructor definition
   */
  fabric.Line = fabric.util.createClass(fabric.Object, /** @lends fabric.Line.prototype */ {

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'line',

    /**
     * x value or first line edge
     * @type Number
     * @default
     */
    x1: 0,

    /**
     * y value or first line edge
     * @type Number
     * @default
     */
    y1: 0,

    /**
     * x value or second line edge
     * @type Number
     * @default
     */
    x2: 0,

    /**
     * y value or second line edge
     * @type Number
     * @default
     */
    y2: 0,

    /**
     * Constructor
     * @param {Array} [points] Array of points
     * @param {Object} [options] Options object
     * @return {fabric.Line} thisArg
     */
    initialize: function(points, options) {
      options = options || { };

      if (!points) {
        points = [0, 0, 0, 0];
      }

      this.callSuper('initialize', options);

      this.set('x1', points[0]);
      this.set('y1', points[1]);
      this.set('x2', points[2]);
      this.set('y2', points[3]);

      this._setWidthHeight(options);
    },

    /**
     * @private
     * @param {Object} [options] Options
     */
    _setWidthHeight: function(options) {
      options || (options = { });

      this.width = Math.abs(this.x2 - this.x1);
      this.height = Math.abs(this.y2 - this.y1);

      this.left = 'left' in options
        ? options.left
        : this._getLeftToOriginX();

      this.top = 'top' in options
        ? options.top
        : this._getTopToOriginY();
    },

    /**
     * @private
     * @param {String} key
     * @param {*} value
     */
    _set: function(key, value) {
      this.callSuper('_set', key, value);
      if (typeof coordProps[key] !== 'undefined') {
        this._setWidthHeight();
      }
      return this;
    },

    /**
     * @private
     * @return {Number} leftToOriginX Distance from left edge of canvas to originX of Line.
     */
    _getLeftToOriginX: makeEdgeToOriginGetter(
      { // property names
        origin: 'originX',
        axis1: 'x1',
        axis2: 'x2',
        dimension: 'width'
      },
      { // possible values of origin
        nearest: 'left',
        center: 'center',
        farthest: 'right'
      }
    ),

    /**
     * @private
     * @return {Number} topToOriginY Distance from top edge of canvas to originY of Line.
     */
    _getTopToOriginY: makeEdgeToOriginGetter(
      { // property names
        origin: 'originY',
        axis1: 'y1',
        axis2: 'y2',
        dimension: 'height'
      },
      { // possible values of origin
        nearest: 'top',
        center: 'center',
        farthest: 'bottom'
      }
    ),

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Boolean} noTransform
     */
    _render: function(ctx, noTransform) {
      ctx.beginPath();

      if (noTransform) {
        //  Line coords are distances from left-top of canvas to origin of line.
        //  To render line in a path-group, we need to translate them to
        //  distances from center of path-group to center of line.
        var cp = this.getCenterPoint();
        ctx.translate(
          cp.x - this.strokeWidth / 2,
          cp.y - this.strokeWidth / 2
        );
      }

      if (!this.strokeDashArray || this.strokeDashArray && supportsLineDash) {
        // move from center (of virtual box) to its left/top corner
        // we can't assume x1, y1 is top left and x2, y2 is bottom right
        var p = this.calcLinePoints();
        ctx.moveTo(p.x1, p.y1);
        ctx.lineTo(p.x2, p.y2);
      }

      ctx.lineWidth = this.strokeWidth;

      // TODO: test this
      // make sure setting "fill" changes color of a line
      // (by copying fillStyle to strokeStyle, since line is stroked, not filled)
      var origStrokeStyle = ctx.strokeStyle;
      ctx.strokeStyle = this.stroke || ctx.fillStyle;
      this.stroke && this._renderStroke(ctx);
      ctx.strokeStyle = origStrokeStyle;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderDashedStroke: function(ctx) {
      var p = this.calcLinePoints();

      ctx.beginPath();
      fabric.util.drawDashedLine(ctx, p.x1, p.y1, p.x2, p.y2, this.strokeDashArray);
      ctx.closePath();
    },

    /**
     * Returns object representation of an instance
     * @methd toObject
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject: function(propertiesToInclude) {
      return extend(this.callSuper('toObject', propertiesToInclude), this.calcLinePoints());
    },

    /**
     * Recalculates line points given width and height
     * @private
     */
    calcLinePoints: function() {
      var xMult = this.x1 <= this.x2 ? -1 : 1,
          yMult = this.y1 <= this.y2 ? -1 : 1,
          x1 = (xMult * this.width * 0.5),
          y1 = (yMult * this.height * 0.5),
          x2 = (xMult * this.width * -0.5),
          y2 = (yMult * this.height * -0.5);

      return {
        x1: x1,
        x2: x2,
        y1: y1,
        y2: y2
      };
    },

    /* _TO_SVG_START_ */
    /**
     * Returns SVG representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function(reviver) {
      var markup = this._createBaseSVGMarkup(),
          p = { x1: this.x1, x2: this.x2, y1: this.y1, y2: this.y2 };

      if (!(this.group && this.group.type === 'path-group')) {
        p = this.calcLinePoints();
      }
      markup.push(
        '<line ', this.getSvgId(),
          'x1="', p.x1,
          '" y1="', p.y1,
          '" x2="', p.x2,
          '" y2="', p.y2,
          '" style="', this.getSvgStyles(),
          '" transform="', this.getSvgTransform(),
          this.getSvgTransformMatrix(),
        '"/>\n'
      );

      return reviver ? reviver(markup.join('')) : markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * Returns complexity of an instance
     * @return {Number} complexity
     */
    complexity: function() {
      return 1;
    }
  });

  /* _FROM_SVG_START_ */
  /**
   * List of attribute names to account for when parsing SVG element (used by {@link fabric.Line.fromElement})
   * @static
   * @memberOf fabric.Line
   * @see http://www.w3.org/TR/SVG/shapes.html#LineElement
   */
  fabric.Line.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat('x1 y1 x2 y2'.split(' '));

  /**
   * Returns fabric.Line instance from an SVG element
   * @static
   * @memberOf fabric.Line
   * @param {SVGElement} element Element to parse
   * @param {Object} [options] Options object
   * @return {fabric.Line} instance of fabric.Line
   */
  fabric.Line.fromElement = function(element, options) {
    var parsedAttributes = fabric.parseAttributes(element, fabric.Line.ATTRIBUTE_NAMES),
        points = [
          parsedAttributes.x1 || 0,
          parsedAttributes.y1 || 0,
          parsedAttributes.x2 || 0,
          parsedAttributes.y2 || 0
        ];
    return new fabric.Line(points, extend(parsedAttributes, options));
  };
  /* _FROM_SVG_END_ */

  /**
   * Returns fabric.Line instance from an object representation
   * @static
   * @memberOf fabric.Line
   * @param {Object} object Object to create an instance from
   * @return {fabric.Line} instance of fabric.Line
   */
  fabric.Line.fromObject = function(object) {
    var points = [object.x1, object.y1, object.x2, object.y2];
    return new fabric.Line(points, object);
  };

  /**
   * Produces a function that calculates distance from canvas edge to Line origin.
   */
  function makeEdgeToOriginGetter(propertyNames, originValues) {
    var origin = propertyNames.origin,
        axis1 = propertyNames.axis1,
        axis2 = propertyNames.axis2,
        dimension = propertyNames.dimension,
        nearest = originValues.nearest,
        center = originValues.center,
        farthest = originValues.farthest;

    return function() {
      switch (this.get(origin)) {
      case nearest:
        return Math.min(this.get(axis1), this.get(axis2));
      case center:
        return Math.min(this.get(axis1), this.get(axis2)) + (0.5 * this.get(dimension));
      case farthest:
        return Math.max(this.get(axis1), this.get(axis2));
      }
    };

  }

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = { }),
      pi = Math.PI,
      extend = fabric.util.object.extend;

  if (fabric.Circle) {
    fabric.warn('fabric.Circle is already defined.');
    return;
  }

  /**
   * Circle class
   * @class fabric.Circle
   * @extends fabric.Object
   * @see {@link fabric.Circle#initialize} for constructor definition
   */
  fabric.Circle = fabric.util.createClass(fabric.Object, /** @lends fabric.Circle.prototype */ {

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'circle',

    /**
     * Radius of this circle
     * @type Number
     * @default
     */
    radius: 0,

    /**
     * Start angle of the circle, moving clockwise
     * @type Number
     * @default 0
     */
    startAngle: 0,

    /**
     * End angle of the circle
     * @type Number
     * @default 2Pi
     */
    endAngle: pi * 2,

    /**
     * Constructor
     * @param {Object} [options] Options object
     * @return {fabric.Circle} thisArg
     */
    initialize: function(options) {
      options = options || { };

      this.callSuper('initialize', options);
      this.set('radius', options.radius || 0);

      this.startAngle = options.startAngle || this.startAngle;
      this.endAngle = options.endAngle || this.endAngle;
    },

    /**
     * @private
     * @param {String} key
     * @param {*} value
     * @return {fabric.Circle} thisArg
     */
    _set: function(key, value) {
      this.callSuper('_set', key, value);

      if (key === 'radius') {
        this.setRadius(value);
      }

      return this;
    },

    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject: function(propertiesToInclude) {
      return extend(this.callSuper('toObject', propertiesToInclude), {
        radius: this.get('radius'),
        startAngle: this.startAngle,
        endAngle: this.endAngle
      });
    },

    /* _TO_SVG_START_ */
    /**
     * Returns svg representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function(reviver) {
      var markup = this._createBaseSVGMarkup(), x = 0, y = 0,
      angle = (this.endAngle - this.startAngle) % ( 2 * pi);

      if (angle === 0) {
        if (this.group && this.group.type === 'path-group') {
          x = this.left + this.radius;
          y = this.top + this.radius;
        }
        markup.push(
          '<circle ', this.getSvgId(),
            'cx="' + x + '" cy="' + y + '" ',
            'r="', this.radius,
            '" style="', this.getSvgStyles(),
            '" transform="', this.getSvgTransform(),
            ' ', this.getSvgTransformMatrix(),
          '"/>\n'
        );
      }
      else {
        var startX = Math.cos(this.startAngle) * this.radius,
            startY = Math.sin(this.startAngle) * this.radius,
            endX = Math.cos(this.endAngle) * this.radius,
            endY = Math.sin(this.endAngle) * this.radius,
            largeFlag = angle > pi ? '1' : '0';

        markup.push(
          '<path d="M ' + startX + ' ' + startY,
          ' A ' + this.radius + ' ' + this.radius,
          ' 0 ', + largeFlag + ' 1', ' ' + endX + ' ' + endY,
          '" style="', this.getSvgStyles(),
          '" transform="', this.getSvgTransform(),
          ' ', this.getSvgTransformMatrix(),
          '"/>\n'
        );
      }

      return reviver ? reviver(markup.join('')) : markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx context to render on
     * @param {Boolean} [noTransform] When true, context is not transformed
     */
    _render: function(ctx, noTransform) {
      ctx.beginPath();
      ctx.arc(noTransform ? this.left + this.radius : 0,
              noTransform ? this.top + this.radius : 0,
              this.radius,
              this.startAngle,
              this.endAngle, false);
      this._renderFill(ctx);
      this._renderStroke(ctx);
    },

    /**
     * Returns horizontal radius of an object (according to how an object is scaled)
     * @return {Number}
     */
    getRadiusX: function() {
      return this.get('radius') * this.get('scaleX');
    },

    /**
     * Returns vertical radius of an object (according to how an object is scaled)
     * @return {Number}
     */
    getRadiusY: function() {
      return this.get('radius') * this.get('scaleY');
    },

    /**
     * Sets radius of an object (and updates width accordingly)
     * @return {fabric.Circle} thisArg
     */
    setRadius: function(value) {
      this.radius = value;
      return this.set('width', value * 2).set('height', value * 2);
    },

    /**
     * Returns complexity of an instance
     * @return {Number} complexity of this instance
     */
    complexity: function() {
      return 1;
    }
  });

  /* _FROM_SVG_START_ */
  /**
   * List of attribute names to account for when parsing SVG element (used by {@link fabric.Circle.fromElement})
   * @static
   * @memberOf fabric.Circle
   * @see: http://www.w3.org/TR/SVG/shapes.html#CircleElement
   */
  fabric.Circle.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat('cx cy r'.split(' '));

  /**
   * Returns {@link fabric.Circle} instance from an SVG element
   * @static
   * @memberOf fabric.Circle
   * @param {SVGElement} element Element to parse
   * @param {Object} [options] Options object
   * @throws {Error} If value of `r` attribute is missing or invalid
   * @return {fabric.Circle} Instance of fabric.Circle
   */
  fabric.Circle.fromElement = function(element, options) {
    options || (options = { });

    var parsedAttributes = fabric.parseAttributes(element, fabric.Circle.ATTRIBUTE_NAMES);

    if (!isValidRadius(parsedAttributes)) {
      throw new Error('value of `r` attribute is required and can not be negative');
    }

    parsedAttributes.left = parsedAttributes.left || 0;
    parsedAttributes.top = parsedAttributes.top || 0;

    var obj = new fabric.Circle(extend(parsedAttributes, options));

    obj.left -= obj.radius;
    obj.top -= obj.radius;
    return obj;
  };

  /**
   * @private
   */
  function isValidRadius(attributes) {
    return (('radius' in attributes) && (attributes.radius >= 0));
  }
  /* _FROM_SVG_END_ */

  /**
   * Returns {@link fabric.Circle} instance from an object representation
   * @static
   * @memberOf fabric.Circle
   * @param {Object} object Object to create an instance from
   * @return {Object} Instance of fabric.Circle
   */
  fabric.Circle.fromObject = function(object) {
    return new fabric.Circle(object);
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = { });

  if (fabric.Triangle) {
    fabric.warn('fabric.Triangle is already defined');
    return;
  }

  /**
   * Triangle class
   * @class fabric.Triangle
   * @extends fabric.Object
   * @return {fabric.Triangle} thisArg
   * @see {@link fabric.Triangle#initialize} for constructor definition
   */
  fabric.Triangle = fabric.util.createClass(fabric.Object, /** @lends fabric.Triangle.prototype */ {

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'triangle',

    /**
     * Constructor
     * @param {Object} [options] Options object
     * @return {Object} thisArg
     */
    initialize: function(options) {
      options = options || { };

      this.callSuper('initialize', options);

      this.set('width', options.width || 100)
          .set('height', options.height || 100);
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _render: function(ctx) {
      var widthBy2 = this.width / 2,
          heightBy2 = this.height / 2;

      ctx.beginPath();
      ctx.moveTo(-widthBy2, heightBy2);
      ctx.lineTo(0, -heightBy2);
      ctx.lineTo(widthBy2, heightBy2);
      ctx.closePath();

      this._renderFill(ctx);
      this._renderStroke(ctx);
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderDashedStroke: function(ctx) {
      var widthBy2 = this.width / 2,
          heightBy2 = this.height / 2;

      ctx.beginPath();
      fabric.util.drawDashedLine(ctx, -widthBy2, heightBy2, 0, -heightBy2, this.strokeDashArray);
      fabric.util.drawDashedLine(ctx, 0, -heightBy2, widthBy2, heightBy2, this.strokeDashArray);
      fabric.util.drawDashedLine(ctx, widthBy2, heightBy2, -widthBy2, heightBy2, this.strokeDashArray);
      ctx.closePath();
    },

    /* _TO_SVG_START_ */
    /**
     * Returns SVG representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function(reviver) {
      var markup = this._createBaseSVGMarkup(),
          widthBy2 = this.width / 2,
          heightBy2 = this.height / 2,
          points = [
            -widthBy2 + ' ' + heightBy2,
            '0 ' + -heightBy2,
            widthBy2 + ' ' + heightBy2
          ]
          .join(',');

      markup.push(
        '<polygon ', this.getSvgId(),
          'points="', points,
          '" style="', this.getSvgStyles(),
          '" transform="', this.getSvgTransform(),
        '"/>'
      );

      return reviver ? reviver(markup.join('')) : markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * Returns complexity of an instance
     * @return {Number} complexity of this instance
     */
    complexity: function() {
      return 1;
    }
  });

  /**
   * Returns fabric.Triangle instance from an object representation
   * @static
   * @memberOf fabric.Triangle
   * @param {Object} object Object to create an instance from
   * @return {Object} instance of Canvas.Triangle
   */
  fabric.Triangle.fromObject = function(object) {
    return new fabric.Triangle(object);
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = { }),
      piBy2   = Math.PI * 2,
      extend = fabric.util.object.extend;

  if (fabric.Ellipse) {
    fabric.warn('fabric.Ellipse is already defined.');
    return;
  }

  /**
   * Ellipse class
   * @class fabric.Ellipse
   * @extends fabric.Object
   * @return {fabric.Ellipse} thisArg
   * @see {@link fabric.Ellipse#initialize} for constructor definition
   */
  fabric.Ellipse = fabric.util.createClass(fabric.Object, /** @lends fabric.Ellipse.prototype */ {

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'ellipse',

    /**
     * Horizontal radius
     * @type Number
     * @default
     */
    rx:   0,

    /**
     * Vertical radius
     * @type Number
     * @default
     */
    ry:   0,

    /**
     * Constructor
     * @param {Object} [options] Options object
     * @return {fabric.Ellipse} thisArg
     */
    initialize: function(options) {
      options = options || { };

      this.callSuper('initialize', options);

      this.set('rx', options.rx || 0);
      this.set('ry', options.ry || 0);
    },

    /**
     * @private
     * @param {String} key
     * @param {*} value
     * @return {fabric.Ellipse} thisArg
     */
    _set: function(key, value) {
      this.callSuper('_set', key, value);
      switch (key) {

        case 'rx':
          this.rx = value;
          this.set('width', value * 2);
          break;

        case 'ry':
          this.ry = value;
          this.set('height', value * 2);
          break;

      }
      return this;
    },

    /**
     * Returns horizontal radius of an object (according to how an object is scaled)
     * @return {Number}
     */
    getRx: function() {
      return this.get('rx') * this.get('scaleX');
    },

    /**
     * Returns Vertical radius of an object (according to how an object is scaled)
     * @return {Number}
     */
    getRy: function() {
      return this.get('ry') * this.get('scaleY');
    },

    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject: function(propertiesToInclude) {
      return extend(this.callSuper('toObject', propertiesToInclude), {
        rx: this.get('rx'),
        ry: this.get('ry')
      });
    },

    /* _TO_SVG_START_ */
    /**
     * Returns svg representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function(reviver) {
      var markup = this._createBaseSVGMarkup(), x = 0, y = 0;
      if (this.group && this.group.type === 'path-group') {
        x = this.left + this.rx;
        y = this.top + this.ry;
      }
      markup.push(
        '<ellipse ', this.getSvgId(),
          'cx="', x, '" cy="', y, '" ',
          'rx="', this.rx,
          '" ry="', this.ry,
          '" style="', this.getSvgStyles(),
          '" transform="', this.getSvgTransform(),
          this.getSvgTransformMatrix(),
        '"/>\n'
      );

      return reviver ? reviver(markup.join('')) : markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx context to render on
     * @param {Boolean} [noTransform] When true, context is not transformed
     */
    _render: function(ctx, noTransform) {
      ctx.beginPath();
      ctx.save();
      ctx.transform(1, 0, 0, this.ry/this.rx, 0, 0);
      ctx.arc(
        noTransform ? this.left + this.rx : 0,
        noTransform ? (this.top + this.ry) * this.rx/this.ry : 0,
        this.rx,
        0,
        piBy2,
        false);
      ctx.restore();
      this._renderFill(ctx);
      this._renderStroke(ctx);
    },

    /**
     * Returns complexity of an instance
     * @return {Number} complexity
     */
    complexity: function() {
      return 1;
    }
  });

  /* _FROM_SVG_START_ */
  /**
   * List of attribute names to account for when parsing SVG element (used by {@link fabric.Ellipse.fromElement})
   * @static
   * @memberOf fabric.Ellipse
   * @see http://www.w3.org/TR/SVG/shapes.html#EllipseElement
   */
  fabric.Ellipse.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat('cx cy rx ry'.split(' '));

  /**
   * Returns {@link fabric.Ellipse} instance from an SVG element
   * @static
   * @memberOf fabric.Ellipse
   * @param {SVGElement} element Element to parse
   * @param {Object} [options] Options object
   * @return {fabric.Ellipse}
   */
  fabric.Ellipse.fromElement = function(element, options) {
    options || (options = { });

    var parsedAttributes = fabric.parseAttributes(element, fabric.Ellipse.ATTRIBUTE_NAMES);

    parsedAttributes.left = parsedAttributes.left || 0;
    parsedAttributes.top = parsedAttributes.top || 0;

    var ellipse = new fabric.Ellipse(extend(parsedAttributes, options));

    ellipse.top -= ellipse.ry;
    ellipse.left -= ellipse.rx;
    return ellipse;
  };
  /* _FROM_SVG_END_ */

  /**
   * Returns {@link fabric.Ellipse} instance from an object representation
   * @static
   * @memberOf fabric.Ellipse
   * @param {Object} object Object to create an instance from
   * @return {fabric.Ellipse}
   */
  fabric.Ellipse.fromObject = function(object) {
    return new fabric.Ellipse(object);
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend;

  if (fabric.Rect) {
    fabric.warn('fabric.Rect is already defined');
    return;
  }

  var stateProperties = fabric.Object.prototype.stateProperties.concat();
  stateProperties.push('rx', 'ry', 'x', 'y');

  /**
   * Rectangle class
   * @class fabric.Rect
   * @extends fabric.Object
   * @return {fabric.Rect} thisArg
   * @see {@link fabric.Rect#initialize} for constructor definition
   */
  fabric.Rect = fabric.util.createClass(fabric.Object, /** @lends fabric.Rect.prototype */ {

    /**
     * List of properties to consider when checking if state of an object is changed ({@link fabric.Object#hasStateChanged})
     * as well as for history (undo/redo) purposes
     * @type Array
     */
    stateProperties: stateProperties,

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'rect',

    /**
     * Horizontal border radius
     * @type Number
     * @default
     */
    rx:   0,

    /**
     * Vertical border radius
     * @type Number
     * @default
     */
    ry:   0,

    /**
     * Used to specify dash pattern for stroke on this object
     * @type Array
     */
    strokeDashArray: null,

    /**
     * Constructor
     * @param {Object} [options] Options object
     * @return {Object} thisArg
     */
    initialize: function(options) {
      options = options || { };

      this.callSuper('initialize', options);
      this._initRxRy();

    },

    /**
     * Initializes rx/ry attributes
     * @private
     */
    _initRxRy: function() {
      if (this.rx && !this.ry) {
        this.ry = this.rx;
      }
      else if (this.ry && !this.rx) {
        this.rx = this.ry;
      }
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Boolean} noTransform
     */
    _render: function(ctx, noTransform) {

      // optimize 1x1 case (used in spray brush)
      if (this.width === 1 && this.height === 1) {
        ctx.fillRect(-0.5, -0.5, 1, 1);
        return;
      }

      var rx = this.rx ? Math.min(this.rx, this.width / 2) : 0,
          ry = this.ry ? Math.min(this.ry, this.height / 2) : 0,
          w = this.width,
          h = this.height,
          x = noTransform ? this.left : -this.width / 2,
          y = noTransform ? this.top : -this.height / 2,
          isRounded = rx !== 0 || ry !== 0,
          k = 1 - 0.5522847498 /* "magic number" for bezier approximations of arcs (http://itc.ktu.lt/itc354/Riskus354.pdf) */;

      ctx.beginPath();

      ctx.moveTo(x + rx, y);

      ctx.lineTo(x + w - rx, y);
      isRounded && ctx.bezierCurveTo(x + w - k * rx, y, x + w, y + k * ry, x + w, y + ry);

      ctx.lineTo(x + w, y + h - ry);
      isRounded && ctx.bezierCurveTo(x + w, y + h - k * ry, x + w - k * rx, y + h, x + w - rx, y + h);

      ctx.lineTo(x + rx, y + h);
      isRounded && ctx.bezierCurveTo(x + k * rx, y + h, x, y + h - k * ry, x, y + h - ry);

      ctx.lineTo(x, y + ry);
      isRounded && ctx.bezierCurveTo(x, y + k * ry, x + k * rx, y, x + rx, y);

      ctx.closePath();

      this._renderFill(ctx);
      this._renderStroke(ctx);
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderDashedStroke: function(ctx) {
      var x = -this.width / 2,
          y = -this.height / 2,
          w = this.width,
          h = this.height;

      ctx.beginPath();
      fabric.util.drawDashedLine(ctx, x, y, x + w, y, this.strokeDashArray);
      fabric.util.drawDashedLine(ctx, x + w, y, x + w, y + h, this.strokeDashArray);
      fabric.util.drawDashedLine(ctx, x + w, y + h, x, y + h, this.strokeDashArray);
      fabric.util.drawDashedLine(ctx, x, y + h, x, y, this.strokeDashArray);
      ctx.closePath();
    },

    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject: function(propertiesToInclude) {
      var object = extend(this.callSuper('toObject', propertiesToInclude), {
        rx: this.get('rx') || 0,
        ry: this.get('ry') || 0
      });
      if (!this.includeDefaultValues) {
        this._removeDefaultValues(object);
      }
      return object;
    },

    /* _TO_SVG_START_ */
    /**
     * Returns svg representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function(reviver) {
      var markup = this._createBaseSVGMarkup(), x = this.left, y = this.top;
      if (!(this.group && this.group.type === 'path-group')) {
        x = -this.width / 2;
        y = -this.height / 2;
      }
      markup.push(
        '<rect ', this.getSvgId(),
          'x="', x, '" y="', y,
          '" rx="', this.get('rx'), '" ry="', this.get('ry'),
          '" width="', this.width, '" height="', this.height,
          '" style="', this.getSvgStyles(),
          '" transform="', this.getSvgTransform(),
          this.getSvgTransformMatrix(),
        '"/>\n');

      return reviver ? reviver(markup.join('')) : markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * Returns complexity of an instance
     * @return {Number} complexity
     */
    complexity: function() {
      return 1;
    }
  });

  /* _FROM_SVG_START_ */
  /**
   * List of attribute names to account for when parsing SVG element (used by `fabric.Rect.fromElement`)
   * @static
   * @memberOf fabric.Rect
   * @see: http://www.w3.org/TR/SVG/shapes.html#RectElement
   */
  fabric.Rect.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat('x y rx ry width height'.split(' '));

  /**
   * Returns {@link fabric.Rect} instance from an SVG element
   * @static
   * @memberOf fabric.Rect
   * @param {SVGElement} element Element to parse
   * @param {Object} [options] Options object
   * @return {fabric.Rect} Instance of fabric.Rect
   */
  fabric.Rect.fromElement = function(element, options) {
    if (!element) {
      return null;
    }
    options = options || { };

    var parsedAttributes = fabric.parseAttributes(element, fabric.Rect.ATTRIBUTE_NAMES);

    parsedAttributes.left = parsedAttributes.left || 0;
    parsedAttributes.top  = parsedAttributes.top  || 0;
    var rect = new fabric.Rect(extend((options ? fabric.util.object.clone(options) : { }), parsedAttributes));
    rect.visible = rect.visible && rect.width > 0 && rect.height > 0;
    return rect;
  };
  /* _FROM_SVG_END_ */

  /**
   * Returns {@link fabric.Rect} instance from an object representation
   * @static
   * @memberOf fabric.Rect
   * @param {Object} object Object to create an instance from
   * @return {Object} instance of fabric.Rect
   */
  fabric.Rect.fromObject = function(object) {
    return new fabric.Rect(object);
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = { });

  if (fabric.Polyline) {
    fabric.warn('fabric.Polyline is already defined');
    return;
  }

  /**
   * Polyline class
   * @class fabric.Polyline
   * @extends fabric.Object
   * @see {@link fabric.Polyline#initialize} for constructor definition
   */
  fabric.Polyline = fabric.util.createClass(fabric.Object, /** @lends fabric.Polyline.prototype */ {

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'polyline',

    /**
     * Points array
     * @type Array
     * @default
     */
    points: null,

    /**
     * Minimum X from points values, necessary to offset points
     * @type Number
     * @default
     */
    minX: 0,

    /**
     * Minimum Y from points values, necessary to offset points
     * @type Number
     * @default
     */
    minY: 0,

    /**
     * Constructor
     * @param {Array} points Array of points (where each point is an object with x and y)
     * @param {Object} [options] Options object
     * @return {fabric.Polyline} thisArg
     * @example
     * var poly = new fabric.Polyline([
     *     { x: 10, y: 10 },
     *     { x: 50, y: 30 },
     *     { x: 40, y: 70 },
     *     { x: 60, y: 50 },
     *     { x: 100, y: 150 },
     *     { x: 40, y: 100 }
     *   ], {
     *   stroke: 'red',
     *   left: 100,
     *   top: 100
     * });
     */
    initialize: function(points, options) {
      return fabric.Polygon.prototype.initialize.call(this, points, options);
    },

    /**
     * @private
     */
    _calcDimensions: function() {
      return fabric.Polygon.prototype._calcDimensions.call(this);
    },

    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} Object representation of an instance
     */
    toObject: function(propertiesToInclude) {
      return fabric.Polygon.prototype.toObject.call(this, propertiesToInclude);
    },

    /* _TO_SVG_START_ */
    /**
     * Returns SVG representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function(reviver) {
      return fabric.Polygon.prototype.toSVG.call(this, reviver);
    },
    /* _TO_SVG_END_ */

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Boolean} noTransform
     */
    _render: function(ctx, noTransform) {
      if (!fabric.Polygon.prototype.commonRender.call(this, ctx, noTransform)) {
        return;
      }
      this._renderFill(ctx);
      this._renderStroke(ctx);
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderDashedStroke: function(ctx) {
      var p1, p2;

      ctx.beginPath();
      for (var i = 0, len = this.points.length; i < len; i++) {
        p1 = this.points[i];
        p2 = this.points[i + 1] || p1;
        fabric.util.drawDashedLine(ctx, p1.x, p1.y, p2.x, p2.y, this.strokeDashArray);
      }
    },

    /**
     * Returns complexity of an instance
     * @return {Number} complexity of this instance
     */
    complexity: function() {
      return this.get('points').length;
    }
  });

  /* _FROM_SVG_START_ */
  /**
   * List of attribute names to account for when parsing SVG element (used by {@link fabric.Polyline.fromElement})
   * @static
   * @memberOf fabric.Polyline
   * @see: http://www.w3.org/TR/SVG/shapes.html#PolylineElement
   */
  fabric.Polyline.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat();

  /**
   * Returns fabric.Polyline instance from an SVG element
   * @static
   * @memberOf fabric.Polyline
   * @param {SVGElement} element Element to parse
   * @param {Object} [options] Options object
   * @return {fabric.Polyline} Instance of fabric.Polyline
   */
  fabric.Polyline.fromElement = function(element, options) {
    if (!element) {
      return null;
    }
    options || (options = { });

    var points = fabric.parsePointsAttribute(element.getAttribute('points')),
        parsedAttributes = fabric.parseAttributes(element, fabric.Polyline.ATTRIBUTE_NAMES);

    return new fabric.Polyline(points, fabric.util.object.extend(parsedAttributes, options));
  };
  /* _FROM_SVG_END_ */

  /**
   * Returns fabric.Polyline instance from an object representation
   * @static
   * @memberOf fabric.Polyline
   * @param {Object} object Object to create an instance from
   * @return {fabric.Polyline} Instance of fabric.Polyline
   */
  fabric.Polyline.fromObject = function(object) {
    var points = object.points;
    return new fabric.Polyline(points, object, true);
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend,
      min = fabric.util.array.min,
      max = fabric.util.array.max,
      toFixed = fabric.util.toFixed;

  if (fabric.Polygon) {
    fabric.warn('fabric.Polygon is already defined');
    return;
  }

  /**
   * Polygon class
   * @class fabric.Polygon
   * @extends fabric.Object
   * @see {@link fabric.Polygon#initialize} for constructor definition
   */
  fabric.Polygon = fabric.util.createClass(fabric.Object, /** @lends fabric.Polygon.prototype */ {

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'polygon',

    /**
     * Points array
     * @type Array
     * @default
     */
    points: null,

    /**
     * Minimum X from points values, necessary to offset points
     * @type Number
     * @default
     */
    minX: 0,

    /**
     * Minimum Y from points values, necessary to offset points
     * @type Number
     * @default
     */
    minY: 0,

    /**
     * Constructor
     * @param {Array} points Array of points
     * @param {Object} [options] Options object
     * @return {fabric.Polygon} thisArg
     */
    initialize: function(points, options) {
      options = options || { };
      this.points = points || [ ];
      this.callSuper('initialize', options);
      this._calcDimensions();
      if (!('top' in options)) {
        this.top = this.minY;
      }
      if (!('left' in options)) {
        this.left = this.minX;
      }
      this.pathOffset = {
        x: this.minX + this.width / 2,
        y: this.minY + this.height / 2
      };
    },

    /**
     * @private
     */
    _calcDimensions: function() {

      var points = this.points,
          minX = min(points, 'x'),
          minY = min(points, 'y'),
          maxX = max(points, 'x'),
          maxY = max(points, 'y');

      this.width = (maxX - minX) || 0;
      this.height = (maxY - minY) || 0;

      this.minX = minX || 0,
      this.minY = minY || 0;
    },

    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} Object representation of an instance
     */
    toObject: function(propertiesToInclude) {
      return extend(this.callSuper('toObject', propertiesToInclude), {
        points: this.points.concat()
      });
    },

    /* _TO_SVG_START_ */
    /**
     * Returns svg representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function(reviver) {
      var points = [], addTransform,
          markup = this._createBaseSVGMarkup();

      for (var i = 0, len = this.points.length; i < len; i++) {
        points.push(toFixed(this.points[i].x, 2), ',', toFixed(this.points[i].y, 2), ' ');
      }
      if (!(this.group && this.group.type === 'path-group')) {
        addTransform = ' translate(' + (-this.pathOffset.x) + ', ' + (-this.pathOffset.y) + ') ';
      }
      markup.push(
        '<', this.type, ' ', this.getSvgId(),
          'points="', points.join(''),
          '" style="', this.getSvgStyles(),
          '" transform="', this.getSvgTransform(), addTransform,
          ' ', this.getSvgTransformMatrix(),
        '"/>\n'
      );

      return reviver ? reviver(markup.join('')) : markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Boolean} noTransform
     */
    _render: function(ctx, noTransform) {
      if (!this.commonRender(ctx, noTransform)) {
        return;
      }
      this._renderFill(ctx);
      if (this.stroke || this.strokeDashArray) {
        ctx.closePath();
        this._renderStroke(ctx);
      }
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Boolean} noTransform
     */
    commonRender: function(ctx, noTransform) {
      var point, len = this.points.length;

      if (!len || isNaN(this.points[len - 1].y)) {
        // do not draw if no points or odd points
        // NaN comes from parseFloat of a empty string in parser
        return false;
      }

      noTransform || ctx.translate(-this.pathOffset.x, -this.pathOffset.y);
      ctx.beginPath();
      ctx.moveTo(this.points[0].x, this.points[0].y);
      for (var i = 0; i < len; i++) {
        point = this.points[i];
        ctx.lineTo(point.x, point.y);
      }
      return true;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderDashedStroke: function(ctx) {
      fabric.Polyline.prototype._renderDashedStroke.call(this, ctx);
      ctx.closePath();
    },

    /**
     * Returns complexity of an instance
     * @return {Number} complexity of this instance
     */
    complexity: function() {
      return this.points.length;
    }
  });

  /* _FROM_SVG_START_ */
  /**
   * List of attribute names to account for when parsing SVG element (used by `fabric.Polygon.fromElement`)
   * @static
   * @memberOf fabric.Polygon
   * @see: http://www.w3.org/TR/SVG/shapes.html#PolygonElement
   */
  fabric.Polygon.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat();

  /**
   * Returns {@link fabric.Polygon} instance from an SVG element
   * @static
   * @memberOf fabric.Polygon
   * @param {SVGElement} element Element to parse
   * @param {Object} [options] Options object
   * @return {fabric.Polygon} Instance of fabric.Polygon
   */
  fabric.Polygon.fromElement = function(element, options) {
    if (!element) {
      return null;
    }

    options || (options = { });

    var points = fabric.parsePointsAttribute(element.getAttribute('points')),
        parsedAttributes = fabric.parseAttributes(element, fabric.Polygon.ATTRIBUTE_NAMES);

    return new fabric.Polygon(points, extend(parsedAttributes, options));
  };
  /* _FROM_SVG_END_ */

  /**
   * Returns fabric.Polygon instance from an object representation
   * @static
   * @memberOf fabric.Polygon
   * @param {Object} object Object to create an instance from
   * @return {fabric.Polygon} Instance of fabric.Polygon
   */
  fabric.Polygon.fromObject = function(object) {
    return new fabric.Polygon(object.points, object, true);
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = { }),
      min = fabric.util.array.min,
      max = fabric.util.array.max,
      extend = fabric.util.object.extend,
      _toString = Object.prototype.toString,
      drawArc = fabric.util.drawArc,
      commandLengths = {
        m: 2,
        l: 2,
        h: 1,
        v: 1,
        c: 6,
        s: 4,
        q: 4,
        t: 2,
        a: 7
      },
      repeatedCommands = {
        m: 'l',
        M: 'L'
      };

  if (fabric.Path) {
    fabric.warn('fabric.Path is already defined');
    return;
  }

  /**
   * Path class
   * @class fabric.Path
   * @extends fabric.Object
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-1#path_and_pathgroup}
   * @see {@link fabric.Path#initialize} for constructor definition
   */
  fabric.Path = fabric.util.createClass(fabric.Object, /** @lends fabric.Path.prototype */ {

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'path',

    /**
     * Array of path points
     * @type Array
     * @default
     */
    path: null,

    /**
     * Minimum X from points values, necessary to offset points
     * @type Number
     * @default
     */
    minX: 0,

    /**
     * Minimum Y from points values, necessary to offset points
     * @type Number
     * @default
     */
    minY: 0,

    /**
     * Constructor
     * @param {Array|String} path Path data (sequence of coordinates and corresponding "command" tokens)
     * @param {Object} [options] Options object
     * @return {fabric.Path} thisArg
     */
    initialize: function(path, options) {
      options = options || { };

      this.setOptions(options);

      if (!path) {
        path = [ ];
      }

      var fromArray = _toString.call(path) === '[object Array]';

      this.path = fromArray
        ? path
        // one of commands (m,M,l,L,q,Q,c,C,etc.) followed by non-command characters (i.e. command values)
        : path.match && path.match(/[mzlhvcsqta][^mzlhvcsqta]*/gi);

      if (!this.path) {
        return;
      }

      if (!fromArray) {
        this.path = this._parsePath();
      }

      this._setPositionDimensions(options);

      if (options.sourcePath) {
        this.setSourcePath(options.sourcePath);
      }
    },

    /**
     * @private
     * @param {Object} options Options object
     */
    _setPositionDimensions: function(options) {
      var calcDim = this._parseDimensions();

      this.minX = calcDim.left;
      this.minY = calcDim.top;
      this.width = calcDim.width;
      this.height = calcDim.height;

      if (typeof options.left === 'undefined') {
        this.left = calcDim.left + (this.originX === 'center'
          ? this.width / 2
          : this.originX === 'right'
            ? this.width
            : 0);
      }

      if (typeof options.top === 'undefined') {
        this.top = calcDim.top + (this.originY === 'center'
          ? this.height / 2
          : this.originY === 'bottom'
            ? this.height
            : 0);
      }

      this.pathOffset = this.pathOffset || {
        x: this.minX + this.width / 2,
        y: this.minY + this.height / 2
      };
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx context to render path on
     */
    _renderPathCommands: function(ctx) {
      var current, // current instruction
          previous = null,
          subpathStartX = 0,
          subpathStartY = 0,
          x = 0, // current x
          y = 0, // current y
          controlX = 0, // current control point x
          controlY = 0, // current control point y
          tempX,
          tempY,
          l = -this.pathOffset.x,
          t = -this.pathOffset.y;

      if (this.group && this.group.type === 'path-group') {
        l = 0;
        t = 0;
      }

      ctx.beginPath();

      for (var i = 0, len = this.path.length; i < len; ++i) {

        current = this.path[i];

        switch (current[0]) { // first letter

          case 'l': // lineto, relative
            x += current[1];
            y += current[2];
            ctx.lineTo(x + l, y + t);
            break;

          case 'L': // lineto, absolute
            x = current[1];
            y = current[2];
            ctx.lineTo(x + l, y + t);
            break;

          case 'h': // horizontal lineto, relative
            x += current[1];
            ctx.lineTo(x + l, y + t);
            break;

          case 'H': // horizontal lineto, absolute
            x = current[1];
            ctx.lineTo(x + l, y + t);
            break;

          case 'v': // vertical lineto, relative
            y += current[1];
            ctx.lineTo(x + l, y + t);
            break;

          case 'V': // verical lineto, absolute
            y = current[1];
            ctx.lineTo(x + l, y + t);
            break;

          case 'm': // moveTo, relative
            x += current[1];
            y += current[2];
            subpathStartX = x;
            subpathStartY = y;
            ctx.moveTo(x + l, y + t);
            break;

          case 'M': // moveTo, absolute
            x = current[1];
            y = current[2];
            subpathStartX = x;
            subpathStartY = y;
            ctx.moveTo(x + l, y + t);
            break;

          case 'c': // bezierCurveTo, relative
            tempX = x + current[5];
            tempY = y + current[6];
            controlX = x + current[3];
            controlY = y + current[4];
            ctx.bezierCurveTo(
              x + current[1] + l, // x1
              y + current[2] + t, // y1
              controlX + l, // x2
              controlY + t, // y2
              tempX + l,
              tempY + t
            );
            x = tempX;
            y = tempY;
            break;

          case 'C': // bezierCurveTo, absolute
            x = current[5];
            y = current[6];
            controlX = current[3];
            controlY = current[4];
            ctx.bezierCurveTo(
              current[1] + l,
              current[2] + t,
              controlX + l,
              controlY + t,
              x + l,
              y + t
            );
            break;

          case 's': // shorthand cubic bezierCurveTo, relative

            // transform to absolute x,y
            tempX = x + current[3];
            tempY = y + current[4];

            if (previous[0].match(/[CcSs]/) === null) {
              // If there is no previous command or if the previous command was not a C, c, S, or s,
              // the control point is coincident with the current point
              controlX = x;
              controlY = y;
            }
            else {
              // calculate reflection of previous control points
              controlX = 2 * x - controlX;
              controlY = 2 * y - controlY;
            }

            ctx.bezierCurveTo(
              controlX + l,
              controlY + t,
              x + current[1] + l,
              y + current[2] + t,
              tempX + l,
              tempY + t
            );
            // set control point to 2nd one of this command
            // "... the first control point is assumed to be
            // the reflection of the second control point on
            // the previous command relative to the current point."
            controlX = x + current[1];
            controlY = y + current[2];

            x = tempX;
            y = tempY;
            break;

          case 'S': // shorthand cubic bezierCurveTo, absolute
            tempX = current[3];
            tempY = current[4];
            if (previous[0].match(/[CcSs]/) === null) {
              // If there is no previous command or if the previous command was not a C, c, S, or s,
              // the control point is coincident with the current point
              controlX = x;
              controlY = y;
            }
            else {
              // calculate reflection of previous control points
              controlX = 2 * x - controlX;
              controlY = 2 * y - controlY;
            }
            ctx.bezierCurveTo(
              controlX + l,
              controlY + t,
              current[1] + l,
              current[2] + t,
              tempX + l,
              tempY + t
            );
            x = tempX;
            y = tempY;

            // set control point to 2nd one of this command
            // "... the first control point is assumed to be
            // the reflection of the second control point on
            // the previous command relative to the current point."
            controlX = current[1];
            controlY = current[2];

            break;

          case 'q': // quadraticCurveTo, relative
            // transform to absolute x,y
            tempX = x + current[3];
            tempY = y + current[4];

            controlX = x + current[1];
            controlY = y + current[2];

            ctx.quadraticCurveTo(
              controlX + l,
              controlY + t,
              tempX + l,
              tempY + t
            );
            x = tempX;
            y = tempY;
            break;

          case 'Q': // quadraticCurveTo, absolute
            tempX = current[3];
            tempY = current[4];

            ctx.quadraticCurveTo(
              current[1] + l,
              current[2] + t,
              tempX + l,
              tempY + t
            );
            x = tempX;
            y = tempY;
            controlX = current[1];
            controlY = current[2];
            break;

          case 't': // shorthand quadraticCurveTo, relative

            // transform to absolute x,y
            tempX = x + current[1];
            tempY = y + current[2];

            if (previous[0].match(/[QqTt]/) === null) {
              // If there is no previous command or if the previous command was not a Q, q, T or t,
              // assume the control point is coincident with the current point
              controlX = x;
              controlY = y;
            }
            else {
              // calculate reflection of previous control point
              controlX = 2 * x - controlX;
              controlY = 2 * y - controlY;
            }

            ctx.quadraticCurveTo(
              controlX + l,
              controlY + t,
              tempX + l,
              tempY + t
            );
            x = tempX;
            y = tempY;

            break;

          case 'T':
            tempX = current[1];
            tempY = current[2];

            if (previous[0].match(/[QqTt]/) === null) {
              // If there is no previous command or if the previous command was not a Q, q, T or t,
              // assume the control point is coincident with the current point
              controlX = x;
              controlY = y;
            }
            else {
              // calculate reflection of previous control point
              controlX = 2 * x - controlX;
              controlY = 2 * y - controlY;
            }
            ctx.quadraticCurveTo(
              controlX + l,
              controlY + t,
              tempX + l,
              tempY + t
            );
            x = tempX;
            y = tempY;
            break;

          case 'a':
            // TODO: optimize this
            drawArc(ctx, x + l, y + t, [
              current[1],
              current[2],
              current[3],
              current[4],
              current[5],
              current[6] + x + l,
              current[7] + y + t
            ]);
            x += current[6];
            y += current[7];
            break;

          case 'A':
            // TODO: optimize this
            drawArc(ctx, x + l, y + t, [
              current[1],
              current[2],
              current[3],
              current[4],
              current[5],
              current[6] + l,
              current[7] + t
            ]);
            x = current[6];
            y = current[7];
            break;

          case 'z':
          case 'Z':
            x = subpathStartX;
            y = subpathStartY;
            ctx.closePath();
            break;
        }
        previous = current;
      }
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx context to render path on
     */
    _render: function(ctx) {
      this._renderPathCommands(ctx);
      this._renderFill(ctx);
      this._renderStroke(ctx);
    },

    /**
     * Returns string representation of an instance
     * @return {String} string representation of an instance
     */
    toString: function() {
      return '#<fabric.Path (' + this.complexity() +
        '): { "top": ' + this.top + ', "left": ' + this.left + ' }>';
    },

    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject: function(propertiesToInclude) {
      var o = extend(this.callSuper('toObject', propertiesToInclude), {
        path: this.path.map(function(item) { return item.slice() }),
        pathOffset: this.pathOffset
      });
      if (this.sourcePath) {
        o.sourcePath = this.sourcePath;
      }
      if (this.transformMatrix) {
        o.transformMatrix = this.transformMatrix;
      }
      return o;
    },

    /**
     * Returns dataless object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toDatalessObject: function(propertiesToInclude) {
      var o = this.toObject(propertiesToInclude);
      if (this.sourcePath) {
        o.path = this.sourcePath;
      }
      delete o.sourcePath;
      return o;
    },

    /* _TO_SVG_START_ */
    /**
     * Returns svg representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function(reviver) {
      var chunks = [],
          markup = this._createBaseSVGMarkup(), addTransform = '';

      for (var i = 0, len = this.path.length; i < len; i++) {
        chunks.push(this.path[i].join(' '));
      }
      var path = chunks.join(' ');
      if (!(this.group && this.group.type === 'path-group')) {
        addTransform = ' translate(' + (-this.pathOffset.x) + ', ' + (-this.pathOffset.y) + ') ';
      }
      markup.push(
        //jscs:disable validateIndentation
        '<path ', this.getSvgId(),
          'd="', path,
          '" style="', this.getSvgStyles(),
          '" transform="', this.getSvgTransform(), addTransform,
          this.getSvgTransformMatrix(), '" stroke-linecap="round" ',
        '/>\n'
        //jscs:enable validateIndentation
      );

      return reviver ? reviver(markup.join('')) : markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * Returns number representation of an instance complexity
     * @return {Number} complexity of this instance
     */
    complexity: function() {
      return this.path.length;
    },

    /**
     * @private
     */
    _parsePath: function() {
      var result = [ ],
          coords = [ ],
          currentPath,
          parsed,
          re = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/ig,
          match,
          coordsStr;

      for (var i = 0, coordsParsed, len = this.path.length; i < len; i++) {
        currentPath = this.path[i];

        coordsStr = currentPath.slice(1).trim();
        coords.length = 0;

        while ((match = re.exec(coordsStr))) {
          coords.push(match[0]);
        }

        coordsParsed = [ currentPath.charAt(0) ];

        for (var j = 0, jlen = coords.length; j < jlen; j++) {
          parsed = parseFloat(coords[j]);
          if (!isNaN(parsed)) {
            coordsParsed.push(parsed);
          }
        }

        var command = coordsParsed[0],
            commandLength = commandLengths[command.toLowerCase()],
            repeatedCommand = repeatedCommands[command] || command;

        if (coordsParsed.length - 1 > commandLength) {
          for (var k = 1, klen = coordsParsed.length; k < klen; k += commandLength) {
            result.push([ command ].concat(coordsParsed.slice(k, k + commandLength)));
            command = repeatedCommand;
          }
        }
        else {
          result.push(coordsParsed);
        }
      }

      return result;
    },

    /**
     * @private
     */
    _parseDimensions: function() {

      var aX = [],
          aY = [],
          current, // current instruction
          previous = null,
          subpathStartX = 0,
          subpathStartY = 0,
          x = 0, // current x
          y = 0, // current y
          controlX = 0, // current control point x
          controlY = 0, // current control point y
          tempX,
          tempY,
          bounds;

      for (var i = 0, len = this.path.length; i < len; ++i) {

        current = this.path[i];

        switch (current[0]) { // first letter

          case 'l': // lineto, relative
            x += current[1];
            y += current[2];
            bounds = [ ];
            break;

          case 'L': // lineto, absolute
            x = current[1];
            y = current[2];
            bounds = [ ];
            break;

          case 'h': // horizontal lineto, relative
            x += current[1];
            bounds = [ ];
            break;

          case 'H': // horizontal lineto, absolute
            x = current[1];
            bounds = [ ];
            break;

          case 'v': // vertical lineto, relative
            y += current[1];
            bounds = [ ];
            break;

          case 'V': // verical lineto, absolute
            y = current[1];
            bounds = [ ];
            break;

          case 'm': // moveTo, relative
            x += current[1];
            y += current[2];
            subpathStartX = x;
            subpathStartY = y;
            bounds = [ ];
            break;

          case 'M': // moveTo, absolute
            x = current[1];
            y = current[2];
            subpathStartX = x;
            subpathStartY = y;
            bounds = [ ];
            break;

          case 'c': // bezierCurveTo, relative
            tempX = x + current[5];
            tempY = y + current[6];
            controlX = x + current[3];
            controlY = y + current[4];
            bounds = fabric.util.getBoundsOfCurve(x, y,
              x + current[1], // x1
              y + current[2], // y1
              controlX, // x2
              controlY, // y2
              tempX,
              tempY
            );
            x = tempX;
            y = tempY;
            break;

          case 'C': // bezierCurveTo, absolute
            x = current[5];
            y = current[6];
            controlX = current[3];
            controlY = current[4];
            bounds = fabric.util.getBoundsOfCurve(x, y,
              current[1],
              current[2],
              controlX,
              controlY,
              x,
              y
            );
            break;

          case 's': // shorthand cubic bezierCurveTo, relative

            // transform to absolute x,y
            tempX = x + current[3];
            tempY = y + current[4];

            if (previous[0].match(/[CcSs]/) === null) {
              // If there is no previous command or if the previous command was not a C, c, S, or s,
              // the control point is coincident with the current point
              controlX = x;
              controlY = y;
            }
            else {
              // calculate reflection of previous control points
              controlX = 2 * x - controlX;
              controlY = 2 * y - controlY;
            }

            bounds = fabric.util.getBoundsOfCurve(x, y,
              controlX,
              controlY,
              x + current[1],
              y + current[2],
              tempX,
              tempY
            );
            // set control point to 2nd one of this command
            // "... the first control point is assumed to be
            // the reflection of the second control point on
            // the previous command relative to the current point."
            controlX = x + current[1];
            controlY = y + current[2];
            x = tempX;
            y = tempY;
            break;

          case 'S': // shorthand cubic bezierCurveTo, absolute
            tempX = current[3];
            tempY = current[4];
            if (previous[0].match(/[CcSs]/) === null) {
              // If there is no previous command or if the previous command was not a C, c, S, or s,
              // the control point is coincident with the current point
              controlX = x;
              controlY = y;
            }
            else {
              // calculate reflection of previous control points
              controlX = 2 * x - controlX;
              controlY = 2 * y - controlY;
            }
            bounds = fabric.util.getBoundsOfCurve(x, y,
              controlX,
              controlY,
              current[1],
              current[2],
              tempX,
              tempY
            );
            x = tempX;
            y = tempY;
            // set control point to 2nd one of this command
            // "... the first control point is assumed to be
            // the reflection of the second control point on
            // the previous command relative to the current point."
            controlX = current[1];
            controlY = current[2];
            break;

          case 'q': // quadraticCurveTo, relative
            // transform to absolute x,y
            tempX = x + current[3];
            tempY = y + current[4];
            controlX = x + current[1];
            controlY = y + current[2];
            bounds = fabric.util.getBoundsOfCurve(x, y,
              controlX,
              controlY,
              controlX,
              controlY,
              tempX,
              tempY
            );
            x = tempX;
            y = tempY;
            break;

          case 'Q': // quadraticCurveTo, absolute
            controlX = current[1];
            controlY = current[2];
            bounds = fabric.util.getBoundsOfCurve(x, y,
              controlX,
              controlY,
              controlX,
              controlY,
              current[3],
              current[4]
            );
            x = current[3];
            y = current[4];
            break;

          case 't': // shorthand quadraticCurveTo, relative
            // transform to absolute x,y
            tempX = x + current[1];
            tempY = y + current[2];
            if (previous[0].match(/[QqTt]/) === null) {
              // If there is no previous command or if the previous command was not a Q, q, T or t,
              // assume the control point is coincident with the current point
              controlX = x;
              controlY = y;
            }
            else {
              // calculate reflection of previous control point
              controlX = 2 * x - controlX;
              controlY = 2 * y - controlY;
            }

            bounds = fabric.util.getBoundsOfCurve(x, y,
              controlX,
              controlY,
              controlX,
              controlY,
              tempX,
              tempY
            );
            x = tempX;
            y = tempY;

            break;

          case 'T':
            tempX = current[1];
            tempY = current[2];

            if (previous[0].match(/[QqTt]/) === null) {
              // If there is no previous command or if the previous command was not a Q, q, T or t,
              // assume the control point is coincident with the current point
              controlX = x;
              controlY = y;
            }
            else {
              // calculate reflection of previous control point
              controlX = 2 * x - controlX;
              controlY = 2 * y - controlY;
            }
            bounds = fabric.util.getBoundsOfCurve(x, y,
              controlX,
              controlY,
              controlX,
              controlY,
              tempX,
              tempY
            );
            x = tempX;
            y = tempY;
            break;

          case 'a':
            // TODO: optimize this
            bounds = fabric.util.getBoundsOfArc(x, y,
              current[1],
              current[2],
              current[3],
              current[4],
              current[5],
              current[6] + x,
              current[7] + y
            );
            x += current[6];
            y += current[7];
            break;

          case 'A':
            // TODO: optimize this
            bounds = fabric.util.getBoundsOfArc(x, y,
              current[1],
              current[2],
              current[3],
              current[4],
              current[5],
              current[6],
              current[7]
            );
            x = current[6];
            y = current[7];
            break;

          case 'z':
          case 'Z':
            x = subpathStartX;
            y = subpathStartY;
            break;
        }
        previous = current;
        bounds.forEach(function (point) {
          aX.push(point.x);
          aY.push(point.y);
        });
        aX.push(x);
        aY.push(y);
      }

      var minX = min(aX) || 0,
          minY = min(aY) || 0,
          maxX = max(aX) || 0,
          maxY = max(aY) || 0,
          deltaX = maxX - minX,
          deltaY = maxY - minY,

          o = {
            left: minX,
            top: minY,
            width: deltaX,
            height: deltaY
          };

      return o;
    }
  });

  /**
   * Creates an instance of fabric.Path from an object
   * @static
   * @memberOf fabric.Path
   * @param {Object} object
   * @param {Function} callback Callback to invoke when an fabric.Path instance is created
   */
  fabric.Path.fromObject = function(object, callback) {
    if (typeof object.path === 'string') {
      fabric.loadSVGFromURL(object.path, function (elements) {
        var path = elements[0],
            pathUrl = object.path;

        delete object.path;

        fabric.util.object.extend(path, object);
        path.setSourcePath(pathUrl);

        callback(path);
      });
    }
    else {
      callback(new fabric.Path(object.path, object));
    }
  };

  /* _FROM_SVG_START_ */
  /**
   * List of attribute names to account for when parsing SVG element (used by `fabric.Path.fromElement`)
   * @static
   * @memberOf fabric.Path
   * @see http://www.w3.org/TR/SVG/paths.html#PathElement
   */
  fabric.Path.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat(['d']);

  /**
   * Creates an instance of fabric.Path from an SVG <path> element
   * @static
   * @memberOf fabric.Path
   * @param {SVGElement} element to parse
   * @param {Function} callback Callback to invoke when an fabric.Path instance is created
   * @param {Object} [options] Options object
   */
  fabric.Path.fromElement = function(element, callback, options) {
    var parsedAttributes = fabric.parseAttributes(element, fabric.Path.ATTRIBUTE_NAMES);
    callback && callback(new fabric.Path(parsedAttributes.d, extend(parsedAttributes, options)));
  };
  /* _FROM_SVG_END_ */

  /**
   * Indicates that instances of this type are async
   * @static
   * @memberOf fabric.Path
   * @type Boolean
   * @default
   */
  fabric.Path.async = true;

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend,
      invoke = fabric.util.array.invoke,
      parentToObject = fabric.Object.prototype.toObject;

  if (fabric.PathGroup) {
    fabric.warn('fabric.PathGroup is already defined');
    return;
  }

  /**
   * Path group class
   * @class fabric.PathGroup
   * @extends fabric.Path
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-1#path_and_pathgroup}
   * @see {@link fabric.PathGroup#initialize} for constructor definition
   */
  fabric.PathGroup = fabric.util.createClass(fabric.Path, /** @lends fabric.PathGroup.prototype */ {

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'path-group',

    /**
     * Fill value
     * @type String
     * @default
     */
    fill: '',

    /**
     * Constructor
     * @param {Array} paths
     * @param {Object} [options] Options object
     * @return {fabric.PathGroup} thisArg
     */
    initialize: function(paths, options) {

      options = options || { };
      this.paths = paths || [ ];

      for (var i = this.paths.length; i--;) {
        this.paths[i].group = this;
      }

      if (options.toBeParsed) {
        this.parseDimensionsFromPaths(options);
        delete options.toBeParsed;
      }
      this.setOptions(options);
      this.setCoords();

      if (options.sourcePath) {
        this.setSourcePath(options.sourcePath);
      }
    },

    /**
     * Calculate width and height based on paths contained
     */
    parseDimensionsFromPaths: function(options) {
      var points, p, xC = [ ], yC = [ ], path, height, width,
          m;
      for (var j = this.paths.length; j--;) {
        path = this.paths[j];
        height = path.height + path.strokeWidth;
        width = path.width + path.strokeWidth;
        points = [
          { x: path.left, y: path.top },
          { x: path.left + width, y: path.top },
          { x: path.left, y: path.top + height },
          { x: path.left + width, y: path.top + height }
        ];
        m = this.paths[j].transformMatrix;
        for (var i = 0; i < points.length; i++) {
          p = points[i];
          if (m) {
            p = fabric.util.transformPoint(p, m, false);
          }
          xC.push(p.x);
          yC.push(p.y);
        }
      }
      options.width = Math.max.apply(null, xC);
      options.height = Math.max.apply(null, yC);
    },

    /**
     * Renders this group on a specified context
     * @param {CanvasRenderingContext2D} ctx Context to render this instance on
     */
    render: function(ctx) {
      // do not render if object is not visible
      if (!this.visible) {
        return;
      }

      ctx.save();

      if (this.transformMatrix) {
        ctx.transform.apply(ctx, this.transformMatrix);
      }
      this.transform(ctx);

      this._setShadow(ctx);
      this.clipTo && fabric.util.clipContext(this, ctx);
      ctx.translate(-this.width/2, -this.height/2);
      for (var i = 0, l = this.paths.length; i < l; ++i) {
        this.paths[i].render(ctx, true);
      }
      this.clipTo && ctx.restore();
      ctx.restore();
    },

    /**
     * Sets certain property to a certain value
     * @param {String} prop
     * @param {*} value
     * @return {fabric.PathGroup} thisArg
     */
    _set: function(prop, value) {

      if (prop === 'fill' && value && this.isSameColor()) {
        var i = this.paths.length;
        while (i--) {
          this.paths[i]._set(prop, value);
        }
      }

      return this.callSuper('_set', prop, value);
    },

    /**
     * Returns object representation of this path group
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject: function(propertiesToInclude) {
      var o = extend(parentToObject.call(this, propertiesToInclude), {
        paths: invoke(this.getObjects(), 'toObject', propertiesToInclude)
      });
      if (this.sourcePath) {
        o.sourcePath = this.sourcePath;
      }
      return o;
    },

    /**
     * Returns dataless object representation of this path group
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} dataless object representation of an instance
     */
    toDatalessObject: function(propertiesToInclude) {
      var o = this.toObject(propertiesToInclude);
      if (this.sourcePath) {
        o.paths = this.sourcePath;
      }
      return o;
    },

    /* _TO_SVG_START_ */
    /**
     * Returns svg representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function(reviver) {
      var objects = this.getObjects(),
          p = this.getPointByOrigin('left', 'top'),
          translatePart = 'translate(' + p.x + ' ' + p.y + ')',
          markup = this._createBaseSVGMarkup();
      markup.push(
        '<g ', this.getSvgId(),
        'style="', this.getSvgStyles(), '" ',
        'transform="', this.getSvgTransformMatrix(), translatePart, this.getSvgTransform(), '" ',
        '>\n'
      );

      for (var i = 0, len = objects.length; i < len; i++) {
        markup.push('\t', objects[i].toSVG(reviver));
      }
      markup.push('</g>\n');

      return reviver ? reviver(markup.join('')) : markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * Returns a string representation of this path group
     * @return {String} string representation of an object
     */
    toString: function() {
      return '#<fabric.PathGroup (' + this.complexity() +
        '): { top: ' + this.top + ', left: ' + this.left + ' }>';
    },

    /**
     * Returns true if all paths in this group are of same color
     * @return {Boolean} true if all paths are of the same color (`fill`)
     */
    isSameColor: function() {
      var firstPathFill = this.getObjects()[0].get('fill') || '';
      if (typeof firstPathFill !== 'string') {
        return false;
      }
      firstPathFill = firstPathFill.toLowerCase();
      return this.getObjects().every(function(path) {
        var pathFill = path.get('fill') || '';
        return typeof pathFill === 'string' && (pathFill).toLowerCase() === firstPathFill;
      });
    },

    /**
     * Returns number representation of object's complexity
     * @return {Number} complexity
     */
    complexity: function() {
      return this.paths.reduce(function(total, path) {
        return total + ((path && path.complexity) ? path.complexity() : 0);
      }, 0);
    },

    /**
     * Returns all paths in this path group
     * @return {Array} array of path objects included in this path group
     */
    getObjects: function() {
      return this.paths;
    }
  });

  /**
   * Creates fabric.PathGroup instance from an object representation
   * @static
   * @memberOf fabric.PathGroup
   * @param {Object} object Object to create an instance from
   * @param {Function} callback Callback to invoke when an fabric.PathGroup instance is created
   */
  fabric.PathGroup.fromObject = function(object, callback) {
    if (typeof object.paths === 'string') {
      fabric.loadSVGFromURL(object.paths, function (elements) {

        var pathUrl = object.paths;
        delete object.paths;

        var pathGroup = fabric.util.groupSVGElements(elements, object, pathUrl);

        callback(pathGroup);
      });
    }
    else {
      fabric.util.enlivenObjects(object.paths, function(enlivenedObjects) {
        delete object.paths;
        callback(new fabric.PathGroup(enlivenedObjects, object));
      });
    }
  };

  /**
   * Indicates that instances of this type are async
   * @static
   * @memberOf fabric.PathGroup
   * @type Boolean
   * @default
   */
  fabric.PathGroup.async = true;

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend,
      min = fabric.util.array.min,
      max = fabric.util.array.max,
      invoke = fabric.util.array.invoke;

  if (fabric.Group) {
    return;
  }

  // lock-related properties, for use in fabric.Group#get
  // to enable locking behavior on group
  // when one of its objects has lock-related properties set
  var _lockProperties = {
    lockMovementX:  true,
    lockMovementY:  true,
    lockRotation:   true,
    lockScalingX:   true,
    lockScalingY:   true,
    lockUniScaling: true
  };

  /**
   * Group class
   * @class fabric.Group
   * @extends fabric.Object
   * @mixes fabric.Collection
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-3#groups}
   * @see {@link fabric.Group#initialize} for constructor definition
   */
  fabric.Group = fabric.util.createClass(fabric.Object, fabric.Collection, /** @lends fabric.Group.prototype */ {

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'group',

    /**
     * Width of stroke
     * @type Number
     * @default
     */
    strokeWidth: 0,

    /**
     * Indicates if click events should also check for subtargets
     * @type Boolean
     * @default
     */
    subTargetCheck: false,

    /**
     * Constructor
     * @param {Object} objects Group objects
     * @param {Object} [options] Options object
     * @param {Boolean} [isAlreadyGrouped] if true, objects have been grouped already.
     * @return {Object} thisArg
     */
    initialize: function(objects, options, isAlreadyGrouped) {
      options = options || { };

      this._objects = [];
      // if objects enclosed in a group have been grouped already,
      // we cannot change properties of objects.
      // Thus we need to set options to group without objects,
      // because delegatedProperties propagate to objects.
      isAlreadyGrouped && this.callSuper('initialize', options);

      this._objects = objects || [];
      for (var i = this._objects.length; i--; ) {
        this._objects[i].group = this;
      }

      this.originalState = { };

      if (options.originX) {
        this.originX = options.originX;
      }
      if (options.originY) {
        this.originY = options.originY;
      }

      if (isAlreadyGrouped) {
        // do not change coordinate of objects enclosed in a group,
        // because objects coordinate system have been group coodinate system already.
        this._updateObjectsCoords(true);
      }
      else {
        this._calcBounds();
        this._updateObjectsCoords();
        this.callSuper('initialize', options);
      }

      this.setCoords();
      this.saveCoords();
    },

    /**
     * @private
     * @param {Boolean} [skipCoordsChange] if true, coordinates of objects enclosed in a group do not change
     */
    _updateObjectsCoords: function(skipCoordsChange) {
      for (var i = this._objects.length; i--; ){
        this._updateObjectCoords(this._objects[i], skipCoordsChange);
      }
    },

    /**
     * @private
     * @param {Object} object
     * @param {Boolean} [skipCoordsChange] if true, coordinates of object dose not change
     */
    _updateObjectCoords: function(object, skipCoordsChange) {
      // do not display corners of objects enclosed in a group
      object.__origHasControls = object.hasControls;
      object.hasControls = false;

      if (skipCoordsChange) {
        return;
      }

      var objectLeft = object.getLeft(),
          objectTop = object.getTop(),
          center = this.getCenterPoint();

      object.set({
        originalLeft: objectLeft,
        originalTop: objectTop,
        left: objectLeft - center.x,
        top: objectTop - center.y
      });
      object.setCoords();
    },

    /**
     * Returns string represenation of a group
     * @return {String}
     */
    toString: function() {
      return '#<fabric.Group: (' + this.complexity() + ')>';
    },

    /**
     * Adds an object to a group; Then recalculates group's dimension, position.
     * @param {Object} object
     * @return {fabric.Group} thisArg
     * @chainable
     */
    addWithUpdate: function(object) {
      this._restoreObjectsState();
      fabric.util.resetObjectTransform(this);
      if (object) {
        this._objects.push(object);
        object.group = this;
        object._set('canvas', this.canvas);
      }
      // since _restoreObjectsState set objects inactive
      this.forEachObject(this._setObjectActive, this);
      this._calcBounds();
      this._updateObjectsCoords();
      return this;
    },

    /**
     * @private
     */
    _setObjectActive: function(object) {
      object.set('active', true);
      object.group = this;
    },

    /**
     * Removes an object from a group; Then recalculates group's dimension, position.
     * @param {Object} object
     * @return {fabric.Group} thisArg
     * @chainable
     */
    removeWithUpdate: function(object) {
      this._restoreObjectsState();
      fabric.util.resetObjectTransform(this);
      // since _restoreObjectsState set objects inactive
      this.forEachObject(this._setObjectActive, this);

      this.remove(object);
      this._calcBounds();
      this._updateObjectsCoords();

      return this;
    },

    /**
     * @private
     */
    _onObjectAdded: function(object) {
      object.group = this;
      object._set('canvas', this.canvas);
    },

    /**
     * @private
     */
    _onObjectRemoved: function(object) {
      delete object.group;
      object.set('active', false);
    },

    /**
     * Properties that are delegated to group objects when reading/writing
     * @param {Object} delegatedProperties
     */
    delegatedProperties: {
      fill:             true,
      stroke:           true,
      strokeWidth:      true,
      fontFamily:       true,
      fontWeight:       true,
      fontSize:         true,
      fontStyle:        true,
      lineHeight:       true,
      textDecoration:   true,
      textAlign:        true,
      backgroundColor:  true
    },

    /**
     * @private
     */
    _set: function(key, value) {
      var i = this._objects.length;

      if (this.delegatedProperties[key] || key === 'canvas') {
        while (i--) {
          this._objects[i].set(key, value);
        }
      }
      else {
        while (i--) {
          this._objects[i].setOnGroup(key, value);
        }
      }

      this.callSuper('_set', key, value);
    },

    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject: function(propertiesToInclude) {
      return extend(this.callSuper('toObject', propertiesToInclude), {
        objects: invoke(this._objects, 'toObject', propertiesToInclude)
      });
    },

    /**
     * Renders instance on a given context
     * @param {CanvasRenderingContext2D} ctx context to render instance on
     */
    render: function(ctx) {
      // do not render if object is not visible
      if (!this.visible) {
        return;
      }

      ctx.save();
      if (this.transformMatrix) {
        ctx.transform.apply(ctx, this.transformMatrix);
      }
      this.transform(ctx);
      this._setShadow(ctx);
      this.clipTo && fabric.util.clipContext(this, ctx);
      this._transformDone = true;
      // the array is now sorted in order of highest first, so start from end
      for (var i = 0, len = this._objects.length; i < len; i++) {
        this._renderObject(this._objects[i], ctx);
      }

      this.clipTo && ctx.restore();
      ctx.restore();
      this._transformDone = false;
    },

    /**
     * Renders controls and borders for the object
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Boolean} [noTransform] When true, context is not transformed
     */
    _renderControls: function(ctx, noTransform) {
      this.callSuper('_renderControls', ctx, noTransform);
      for (var i = 0, len = this._objects.length; i < len; i++) {
        this._objects[i]._renderControls(ctx);
      }
    },

    /**
     * @private
     */
    _renderObject: function(object, ctx) {
      // do not render if object is not visible
      if (!object.visible) {
        return;
      }

      var originalHasRotatingPoint = object.hasRotatingPoint;
      object.hasRotatingPoint = false;
      object.render(ctx);
      object.hasRotatingPoint = originalHasRotatingPoint;
    },

    /**
     * Retores original state of each of group objects (original state is that which was before group was created).
     * @private
     * @return {fabric.Group} thisArg
     * @chainable
     */
    _restoreObjectsState: function() {
      this._objects.forEach(this._restoreObjectState, this);
      return this;
    },

    /**
     * Realises the transform from this group onto the supplied object
     * i.e. it tells you what would happen if the supplied object was in
     * the group, and then the group was destroyed. It mutates the supplied
     * object.
     * @param {fabric.Object} object
     * @return {fabric.Object} transformedObject
     */
    realizeTransform: function(object) {
      var matrix = object.calcTransformMatrix(),
          options = fabric.util.qrDecompose(matrix),
          center = new fabric.Point(options.translateX, options.translateY);
      object.scaleX = options.scaleX;
      object.scaleY = options.scaleY;
      object.skewX = options.skewX;
      object.skewY = options.skewY;
      object.angle = options.angle;
      object.flipX = false;
      object.flipY = false;
      object.setPositionByOrigin(center, 'center', 'center');
      return object;
    },

    /**
     * Restores original state of a specified object in group
     * @private
     * @param {fabric.Object} object
     * @return {fabric.Group} thisArg
     */
    _restoreObjectState: function(object) {
      this.realizeTransform(object);
      object.setCoords();
      object.hasControls = object.__origHasControls;
      delete object.__origHasControls;
      object.set('active', false);
      delete object.group;

      return this;
    },

    /**
     * Destroys a group (restoring state of its objects)
     * @return {fabric.Group} thisArg
     * @chainable
     */
    destroy: function() {
      return this._restoreObjectsState();
    },

    /**
     * Saves coordinates of this instance (to be used together with `hasMoved`)
     * @saveCoords
     * @return {fabric.Group} thisArg
     * @chainable
     */
    saveCoords: function() {
      this._originalLeft = this.get('left');
      this._originalTop = this.get('top');
      return this;
    },

    /**
     * Checks whether this group was moved (since `saveCoords` was called last)
     * @return {Boolean} true if an object was moved (since fabric.Group#saveCoords was called)
     */
    hasMoved: function() {
      return this._originalLeft !== this.get('left') ||
             this._originalTop !== this.get('top');
    },

    /**
     * Sets coordinates of all group objects
     * @return {fabric.Group} thisArg
     * @chainable
     */
    setObjectsCoords: function() {
      this.forEachObject(function(object) {
        object.setCoords();
      });
      return this;
    },

    /**
     * @private
     */
    _calcBounds: function(onlyWidthHeight) {
      var aX = [],
          aY = [],
          o, prop,
          props = ['tr', 'br', 'bl', 'tl'],
          i = 0, iLen = this._objects.length,
          j, jLen = props.length;

      for ( ; i < iLen; ++i) {
        o = this._objects[i];
        o.setCoords();
        for (j = 0; j < jLen; j++) {
          prop = props[j];
          aX.push(o.oCoords[prop].x);
          aY.push(o.oCoords[prop].y);
        }
      }

      this.set(this._getBounds(aX, aY, onlyWidthHeight));
    },

    /**
     * @private
     */
    _getBounds: function(aX, aY, onlyWidthHeight) {
      var ivt = fabric.util.invertTransform(this.getViewportTransform()),
          minXY = fabric.util.transformPoint(new fabric.Point(min(aX), min(aY)), ivt),
          maxXY = fabric.util.transformPoint(new fabric.Point(max(aX), max(aY)), ivt),
          obj = {
            width: (maxXY.x - minXY.x) || 0,
            height: (maxXY.y - minXY.y) || 0
          };

      if (!onlyWidthHeight) {
        obj.left = minXY.x || 0;
        obj.top = minXY.y || 0;
        if (this.originX === 'center') {
          obj.left += obj.width / 2;
        }
        if (this.originX === 'right') {
          obj.left += obj.width;
        }
        if (this.originY === 'center') {
          obj.top += obj.height / 2;
        }
        if (this.originY === 'bottom') {
          obj.top += obj.height;
        }
      }
      return obj;
    },

    /* _TO_SVG_START_ */
    /**
     * Returns svg representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function(reviver) {
      var markup = this._createBaseSVGMarkup();
      markup.push(
        '<g ', this.getSvgId(), 'transform="',
        /* avoiding styles intentionally */
        this.getSvgTransform(),
        this.getSvgTransformMatrix(),
        '" style="',
        this.getSvgFilter(),
        '">\n'
      );

      for (var i = 0, len = this._objects.length; i < len; i++) {
        markup.push('\t', this._objects[i].toSVG(reviver));
      }

      markup.push('</g>\n');

      return reviver ? reviver(markup.join('')) : markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * Returns requested property
     * @param {String} prop Property to get
     * @return {*}
     */
    get: function(prop) {
      if (prop in _lockProperties) {
        if (this[prop]) {
          return this[prop];
        }
        else {
          for (var i = 0, len = this._objects.length; i < len; i++) {
            if (this._objects[i][prop]) {
              return true;
            }
          }
          return false;
        }
      }
      else {
        if (prop in this.delegatedProperties) {
          return this._objects[0] && this._objects[0].get(prop);
        }
        return this[prop];
      }
    }
  });

  /**
   * Returns {@link fabric.Group} instance from an object representation
   * @static
   * @memberOf fabric.Group
   * @param {Object} object Object to create a group from
   * @param {Function} [callback] Callback to invoke when an group instance is created
   * @return {fabric.Group} An instance of fabric.Group
   */
  fabric.Group.fromObject = function(object, callback) {
    fabric.util.enlivenObjects(object.objects, function(enlivenedObjects) {
      delete object.objects;
      callback && callback(new fabric.Group(enlivenedObjects, object, true));
    });
  };

  /**
   * Indicates that instances of this type are async
   * @static
   * @memberOf fabric.Group
   * @type Boolean
   * @default
   */
  fabric.Group.async = true;

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var extend = fabric.util.object.extend;

  if (!global.fabric) {
    global.fabric = { };
  }

  if (global.fabric.Image) {
    fabric.warn('fabric.Image is already defined.');
    return;
  }

  /**
   * Image class
   * @class fabric.Image
   * @extends fabric.Object
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-1#images}
   * @see {@link fabric.Image#initialize} for constructor definition
   */
  fabric.Image = fabric.util.createClass(fabric.Object, /** @lends fabric.Image.prototype */ {

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'image',

    /**
     * crossOrigin value (one of "", "anonymous", "use-credentials")
     * @see https://developer.mozilla.org/en-US/docs/HTML/CORS_settings_attributes
     * @type String
     * @default
     */
    crossOrigin: '',

    /**
     * AlignX value, part of preserveAspectRatio (one of "none", "mid", "min", "max")
     * @see http://www.w3.org/TR/SVG/coords.html#PreserveAspectRatioAttribute
     * This parameter defines how the picture is aligned to its viewport when image element width differs from image width.
     * @type String
     * @default
     */
    alignX: 'none',

    /**
     * AlignY value, part of preserveAspectRatio (one of "none", "mid", "min", "max")
     * @see http://www.w3.org/TR/SVG/coords.html#PreserveAspectRatioAttribute
     * This parameter defines how the picture is aligned to its viewport when image element height differs from image height.
     * @type String
     * @default
     */
    alignY: 'none',

    /**
     * meetOrSlice value, part of preserveAspectRatio  (one of "meet", "slice").
     * if meet the image is always fully visibile, if slice the viewport is always filled with image.
     * @see http://www.w3.org/TR/SVG/coords.html#PreserveAspectRatioAttribute
     * @type String
     * @default
     */
    meetOrSlice: 'meet',

    /**
     * Width of a stroke.
     * For image quality a stroke multiple of 2 gives better results.
     * @type Number
     * @default
     */
    strokeWidth: 0,

    /**
     * private
     * contains last value of scaleX to detect
     * if the Image got resized after the last Render
     * @type Number
     */
    _lastScaleX: 1,

    /**
     * private
     * contains last value of scaleY to detect
     * if the Image got resized after the last Render
     * @type Number
     */
    _lastScaleY: 1,

    /**
     * minimum scale factor under which any resizeFilter is triggered to resize the image
     * 0 will disable the automatic resize. 1 will trigger automatically always.
     * number bigger than 1 can be used in case we want to scale with some filter above
     * the natural image dimensions
     * @type Number
     */
    minimumScaleTrigger: 0.5,

    /**
     * Constructor
     * @param {HTMLImageElement | String} element Image element
     * @param {Object} [options] Options object
     * @param {function} [callback] callback function to call after eventual filters applied.
     * @return {fabric.Image} thisArg
     */
    initialize: function(element, options, callback) {
      options || (options = { });
      this.filters = [ ];
      this.resizeFilters = [ ];
      this.callSuper('initialize', options);
      this._initElement(element, options, callback);
    },

    /**
     * Returns image element which this instance if based on
     * @return {HTMLImageElement} Image element
     */
    getElement: function() {
      return this._element;
    },

    /**
     * Sets image element for this instance to a specified one.
     * If filters defined they are applied to new image.
     * You might need to call `canvas.renderAll` and `object.setCoords` after replacing, to render new image and update controls area.
     * @param {HTMLImageElement} element
     * @param {Function} [callback] Callback is invoked when all filters have been applied and new image is generated
     * @param {Object} [options] Options object
     * @return {fabric.Image} thisArg
     * @chainable
     */
    setElement: function(element, callback, options) {

      var _callback, _this;

      this._element = element;
      this._originalElement = element;
      this._initConfig(options);

      if (this.resizeFilters.length === 0) {
        _callback = callback;
      }
      else {
        _this = this;
        _callback = function() {
          _this.applyFilters(callback, _this.resizeFilters, _this._filteredEl || _this._originalElement, true);
        };
      }

      if (this.filters.length !== 0) {
        this.applyFilters(_callback);
      }
      else if (_callback) {
        _callback(this);
      }

      return this;
    },

    /**
     * Sets crossOrigin value (on an instance and corresponding image element)
     * @return {fabric.Image} thisArg
     * @chainable
     */
    setCrossOrigin: function(value) {
      this.crossOrigin = value;
      this._element.crossOrigin = value;

      return this;
    },

    /**
     * Returns original size of an image
     * @return {Object} Object with "width" and "height" properties
     */
    getOriginalSize: function() {
      var element = this.getElement();
      return {
        width: element.width,
        height: element.height
      };
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _stroke: function(ctx) {
      if (!this.stroke || this.strokeWidth === 0) {
        return;
      }
      var w = this.width / 2, h = this.height / 2;
      ctx.beginPath();
      ctx.moveTo(-w, -h);
      ctx.lineTo(w, -h);
      ctx.lineTo(w, h);
      ctx.lineTo(-w, h);
      ctx.lineTo(-w, -h);
      ctx.closePath();
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderDashedStroke: function(ctx) {
      var x = -this.width / 2,
          y = -this.height / 2,
          w = this.width,
          h = this.height;

      ctx.save();
      this._setStrokeStyles(ctx);

      ctx.beginPath();
      fabric.util.drawDashedLine(ctx, x, y, x + w, y, this.strokeDashArray);
      fabric.util.drawDashedLine(ctx, x + w, y, x + w, y + h, this.strokeDashArray);
      fabric.util.drawDashedLine(ctx, x + w, y + h, x, y + h, this.strokeDashArray);
      fabric.util.drawDashedLine(ctx, x, y + h, x, y, this.strokeDashArray);
      ctx.closePath();
      ctx.restore();
    },

    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} Object representation of an instance
     */
    toObject: function(propertiesToInclude) {
      var filters = [ ], resizeFilters = [ ],
          scaleX = 1, scaleY = 1;

      this.filters.forEach(function(filterObj) {
        if (filterObj) {
          if (filterObj.type === 'Resize') {
            scaleX *= filterObj.scaleX;
            scaleY *= filterObj.scaleY;
          }
          filters.push(filterObj.toObject());
        }
      });

      this.resizeFilters.forEach(function(filterObj) {
        filterObj && resizeFilters.push(filterObj.toObject());
      });

      var object = extend(this.callSuper('toObject', propertiesToInclude), {
        src: this.getSrc(),
        filters: filters,
        resizeFilters: resizeFilters,
        crossOrigin: this.crossOrigin,
        alignX: this.alignX,
        alignY: this.alignY,
        meetOrSlice: this.meetOrSlice
      });

      object.width /= scaleX;
      object.height /= scaleY;

      if (!this.includeDefaultValues) {
        this._removeDefaultValues(object);
      }

      return object;
    },

    /* _TO_SVG_START_ */
    /**
     * Returns SVG representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function(reviver) {
      var markup = this._createBaseSVGMarkup(), x = -this.width / 2, y = -this.height / 2,
          preserveAspectRatio = 'none';
      if (this.group && this.group.type === 'path-group') {
        x = this.left;
        y = this.top;
      }
      if (this.alignX !== 'none' && this.alignY !== 'none') {
        preserveAspectRatio = 'x' + this.alignX + 'Y' + this.alignY + ' ' + this.meetOrSlice;
      }
      markup.push(
        '<g transform="', this.getSvgTransform(), this.getSvgTransformMatrix(), '">\n',
          '<image ', this.getSvgId(), 'xlink:href="', this.getSvgSrc(),
            '" x="', x, '" y="', y,
            '" style="', this.getSvgStyles(),
            // we're essentially moving origin of transformation from top/left corner to the center of the shape
            // by wrapping it in container <g> element with actual transformation, then offsetting object to the top/left
            // so that object's center aligns with container's left/top
            '" width="', this.width,
            '" height="', this.height,
            '" preserveAspectRatio="', preserveAspectRatio, '"',
          '></image>\n'
      );

      if (this.stroke || this.strokeDashArray) {
        var origFill = this.fill;
        this.fill = null;
        markup.push(
          '<rect ',
            'x="', x, '" y="', y,
            '" width="', this.width, '" height="', this.height,
            '" style="', this.getSvgStyles(),
          '"/>\n'
        );
        this.fill = origFill;
      }

      markup.push('</g>\n');

      return reviver ? reviver(markup.join('')) : markup.join('');
    },
    /* _TO_SVG_END_ */

    /**
     * Returns source of an image
     * @return {String} Source of an image
     */
    getSrc: function() {
      var element = this._originalElement;
      if (element) {
        return fabric.isLikelyNode ? element._src : element.src;
      }
      else {
        return this.src || '';
      }
    },

    /**
     * Sets source of an image
     * @param {String} src Source string (URL)
     * @param {Function} [callback] Callback is invoked when image has been loaded (and all filters have been applied)
     * @param {Object} [options] Options object
     * @return {fabric.Image} thisArg
     * @chainable
     */
    setSrc: function(src, callback, options) {
      fabric.util.loadImage(src, function(img) {
        return this.setElement(img, callback, options);
      }, this, options && options.crossOrigin);
    },

    /**
     * Returns string representation of an instance
     * @return {String} String representation of an instance
     */
    toString: function() {
      return '#<fabric.Image: { src: "' + this.getSrc() + '" }>';
    },

    /**
     * Returns a clone of an instance
     * @param {Function} callback Callback is invoked with a clone as a first argument
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     */
    clone: function(callback, propertiesToInclude) {
      this.constructor.fromObject(this.toObject(propertiesToInclude), callback);
    },

    /**
     * Applies filters assigned to this image (from "filters" array)
     * @method applyFilters
     * @param {Function} callback Callback is invoked when all filters have been applied and new image is generated
     * @param {Array} filters to be applied
     * @param {fabric.Image} imgElement image to filter ( default to this._element )
     * @param {Boolean} forResizing
     * @return {CanvasElement} canvasEl to be drawn immediately
     * @chainable
     */
    applyFilters: function(callback, filters, imgElement, forResizing) {

      filters = filters || this.filters;
      imgElement = imgElement || this._originalElement;

      if (!imgElement) {
        return;
      }

      var replacement = fabric.util.createImage(),
          retinaScaling = this.canvas ? this.canvas.getRetinaScaling() : fabric.devicePixelRatio,
          minimumScale = this.minimumScaleTrigger / retinaScaling,
          _this = this, scaleX, scaleY;

      if (filters.length === 0) {
        this._element = imgElement;
        callback && callback(this);
        return imgElement;
      }

      var canvasEl = fabric.util.createCanvasElement();
      canvasEl.width = imgElement.width;
      canvasEl.height = imgElement.height;
      canvasEl.getContext('2d').drawImage(imgElement, 0, 0, imgElement.width, imgElement.height);

      filters.forEach(function(filter) {
        if (forResizing) {
          scaleX = _this.scaleX < minimumScale ? _this.scaleX : 1;
          scaleY = _this.scaleY < minimumScale ? _this.scaleY : 1;
          if (scaleX * retinaScaling < 1) {
            scaleX *= retinaScaling;
          }
          if (scaleY * retinaScaling < 1) {
            scaleY *= retinaScaling;
          }
        }
        else {
          scaleX = filter.scaleX;
          scaleY = filter.scaleY;
        }
        filter && filter.applyTo(canvasEl, scaleX, scaleY);
        if (!forResizing && filter && filter.type === 'Resize') {
          _this.width *= filter.scaleX;
          _this.height *= filter.scaleY;
        }
      });

      /** @ignore */
      replacement.width = canvasEl.width;
      replacement.height = canvasEl.height;
      if (fabric.isLikelyNode) {
        replacement.src = canvasEl.toBuffer(undefined, fabric.Image.pngCompression);
        // onload doesn't fire in some node versions, so we invoke callback manually
        _this._element = replacement;      //   !forResizing && (_this._filteredEl = replacement);
        callback && callback(_this);
      }
      else {
        replacement.onload = function() {
          _this._element = replacement;
          !forResizing && (_this._filteredEl = replacement);
          callback && callback(_this);
          replacement.onload = canvasEl = null;
        };
        replacement.src = canvasEl.toDataURL('image/png');
      }
      return canvasEl;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Boolean} noTransform
     */
    _render: function(ctx, noTransform) {
      var x, y, imageMargins = this._findMargins(), elementToDraw;

      x = (noTransform ? this.left : -this.width / 2);
      y = (noTransform ? this.top : -this.height / 2);

      if (this.meetOrSlice === 'slice') {
        ctx.beginPath();
        ctx.rect(x, y, this.width, this.height);
        ctx.clip();
      }

      if (this.isMoving === false && this.resizeFilters.length && this._needsResize()) {
        this._lastScaleX = this.scaleX;
        this._lastScaleY = this.scaleY;
        elementToDraw = this.applyFilters(null, this.resizeFilters, this._filteredEl || this._originalElement, true);
      }
      else {
        elementToDraw = this._element;
      }
      elementToDraw && ctx.drawImage(elementToDraw,
                                     x + imageMargins.marginX,
                                     y + imageMargins.marginY,
                                     imageMargins.width,
                                     imageMargins.height
                                    );

      this._stroke(ctx);
      this._renderStroke(ctx);
    },

    /**
     * @private, needed to check if image needs resize
     */
    _needsResize: function() {
      return (this.scaleX !== this._lastScaleX || this.scaleY !== this._lastScaleY);
    },

    /**
     * @private
     */
    _findMargins: function() {
      var width = this.width, height = this.height, scales,
          scale, marginX = 0, marginY = 0;

      if (this.alignX !== 'none' || this.alignY !== 'none') {
        scales = [this.width / this._element.width, this.height / this._element.height];
        scale = this.meetOrSlice === 'meet'
                ? Math.min.apply(null, scales) : Math.max.apply(null, scales);
        width = this._element.width * scale;
        height = this._element.height * scale;
        if (this.alignX === 'Mid') {
          marginX = (this.width - width) / 2;
        }
        if (this.alignX === 'Max') {
          marginX = this.width - width;
        }
        if (this.alignY === 'Mid') {
          marginY = (this.height - height) / 2;
        }
        if (this.alignY === 'Max') {
          marginY = this.height - height;
        }
      }
      return {
        width:  width,
        height: height,
        marginX: marginX,
        marginY: marginY
      };
    },

    /**
     * @private
     */
    _resetWidthHeight: function() {
      var element = this.getElement();

      this.set('width', element.width);
      this.set('height', element.height);
    },

    /**
     * The Image class's initialization method. This method is automatically
     * called by the constructor.
     * @private
     * @param {HTMLImageElement|String} element The element representing the image
     * @param {Object} [options] Options object
     */
    _initElement: function(element, options, callback) {
      this.setElement(fabric.util.getById(element), callback, options);
      fabric.util.addClass(this.getElement(), fabric.Image.CSS_CANVAS);
    },

    /**
     * @private
     * @param {Object} [options] Options object
     */
    _initConfig: function(options) {
      options || (options = { });
      this.setOptions(options);
      this._setWidthHeight(options);
      if (this._element && this.crossOrigin) {
        this._element.crossOrigin = this.crossOrigin;
      }
    },

    /**
     * @private
     * @param {Array} filters to be initialized
     * @param {Function} callback Callback to invoke when all fabric.Image.filters instances are created
     */
    _initFilters: function(filters, callback) {
      if (filters && filters.length) {
        fabric.util.enlivenObjects(filters, function(enlivenedObjects) {
          callback && callback(enlivenedObjects);
        }, 'fabric.Image.filters');
      }
      else {
        callback && callback();
      }
    },

    /**
     * @private
     * @param {Object} [options] Object with width/height properties
     */
    _setWidthHeight: function(options) {
      this.width = 'width' in options
        ? options.width
        : (this.getElement()
            ? this.getElement().width || 0
            : 0);

      this.height = 'height' in options
        ? options.height
        : (this.getElement()
            ? this.getElement().height || 0
            : 0);
    },

    /**
     * Returns complexity of an instance
     * @return {Number} complexity of this instance
     */
    complexity: function() {
      return 1;
    }
  });

  /**
   * Default CSS class name for canvas
   * @static
   * @type String
   * @default
   */
  fabric.Image.CSS_CANVAS = 'canvas-img';

  /**
   * Alias for getSrc
   * @static
   */
  fabric.Image.prototype.getSvgSrc = fabric.Image.prototype.getSrc;

  /**
   * Creates an instance of fabric.Image from its object representation
   * @static
   * @param {Object} object Object to create an instance from
   * @param {Function} [callback] Callback to invoke when an image instance is created
   */
  fabric.Image.fromObject = function(object, callback) {
    fabric.util.loadImage(object.src, function(img) {
      fabric.Image.prototype._initFilters.call(object, object.filters, function(filters) {
        object.filters = filters || [ ];
        fabric.Image.prototype._initFilters.call(object, object.resizeFilters, function(resizeFilters) {
          object.resizeFilters = resizeFilters || [ ];
          return new fabric.Image(img, object, callback);
        });
      });
    }, null, object.crossOrigin);
  };

  /**
   * Creates an instance of fabric.Image from an URL string
   * @static
   * @param {String} url URL to create an image from
   * @param {Function} [callback] Callback to invoke when image is created (newly created image is passed as a first argument)
   * @param {Object} [imgOptions] Options object
   */
  fabric.Image.fromURL = function(url, callback, imgOptions) {
    fabric.util.loadImage(url, function(img) {
      callback && callback(new fabric.Image(img, imgOptions));
    }, null, imgOptions && imgOptions.crossOrigin);
  };

  /* _FROM_SVG_START_ */
  /**
   * List of attribute names to account for when parsing SVG element (used by {@link fabric.Image.fromElement})
   * @static
   * @see {@link http://www.w3.org/TR/SVG/struct.html#ImageElement}
   */
  fabric.Image.ATTRIBUTE_NAMES =
    fabric.SHARED_ATTRIBUTES.concat('x y width height preserveAspectRatio xlink:href'.split(' '));

  /**
   * Returns {@link fabric.Image} instance from an SVG element
   * @static
   * @param {SVGElement} element Element to parse
   * @param {Function} callback Callback to execute when fabric.Image object is created
   * @param {Object} [options] Options object
   * @return {fabric.Image} Instance of fabric.Image
   */
  fabric.Image.fromElement = function(element, callback, options) {
    var parsedAttributes = fabric.parseAttributes(element, fabric.Image.ATTRIBUTE_NAMES),
        preserveAR;

    if (parsedAttributes.preserveAspectRatio) {
      preserveAR = fabric.util.parsePreserveAspectRatioAttribute(parsedAttributes.preserveAspectRatio);
      extend(parsedAttributes, preserveAR);
    }

    fabric.Image.fromURL(parsedAttributes['xlink:href'], callback,
      extend((options ? fabric.util.object.clone(options) : { }), parsedAttributes));
  };
  /* _FROM_SVG_END_ */

  /**
   * Indicates that instances of this type are async
   * @static
   * @type Boolean
   * @default
   */
  fabric.Image.async = true;

  /**
   * Indicates compression level used when generating PNG under Node (in applyFilters). Any of 0-9
   * @static
   * @type Number
   * @default
   */
  fabric.Image.pngCompression = 1;

})(typeof exports !== 'undefined' ? exports : this);


fabric.util.object.extend(fabric.Object.prototype, /** @lends fabric.Object.prototype */ {

  /**
   * @private
   * @return {Number} angle value
   */
  _getAngleValueForStraighten: function() {
    var angle = this.getAngle() % 360;
    if (angle > 0) {
      return Math.round((angle - 1) / 90) * 90;
    }
    return Math.round(angle / 90) * 90;
  },

  /**
   * Straightens an object (rotating it from current angle to one of 0, 90, 180, 270, etc. depending on which is closer)
   * @return {fabric.Object} thisArg
   * @chainable
   */
  straighten: function() {
    this.setAngle(this._getAngleValueForStraighten());
    return this;
  },

  /**
   * Same as {@link fabric.Object.prototype.straighten} but with animation
   * @param {Object} callbacks Object with callback functions
   * @param {Function} [callbacks.onComplete] Invoked on completion
   * @param {Function} [callbacks.onChange] Invoked on every step of animation
   * @return {fabric.Object} thisArg
   * @chainable
   */
  fxStraighten: function(callbacks) {
    callbacks = callbacks || { };

    var empty = function() { },
        onComplete = callbacks.onComplete || empty,
        onChange = callbacks.onChange || empty,
        _this = this;

    fabric.util.animate({
      startValue: this.get('angle'),
      endValue: this._getAngleValueForStraighten(),
      duration: this.FX_DURATION,
      onChange: function(value) {
        _this.setAngle(value);
        onChange();
      },
      onComplete: function() {
        _this.setCoords();
        onComplete();
      },
      onStart: function() {
        _this.set('active', false);
      }
    });

    return this;
  }
});

fabric.util.object.extend(fabric.StaticCanvas.prototype, /** @lends fabric.StaticCanvas.prototype */ {

  /**
   * Straightens object, then rerenders canvas
   * @param {fabric.Object} object Object to straighten
   * @return {fabric.Canvas} thisArg
   * @chainable
   */
  straightenObject: function (object) {
    object.straighten();
    this.renderAll();
    return this;
  },

  /**
   * Same as {@link fabric.Canvas.prototype.straightenObject}, but animated
   * @param {fabric.Object} object Object to straighten
   * @return {fabric.Canvas} thisArg
   * @chainable
   */
  fxStraightenObject: function (object) {
    object.fxStraighten({
      onChange: this.renderAll.bind(this)
    });
    return this;
  }
});


/**
 * @namespace fabric.Image.filters
 * @memberOf fabric.Image
 * @tutorial {@link http://fabricjs.com/fabric-intro-part-2#image_filters}
 * @see {@link http://fabricjs.com/image-filters|ImageFilters demo}
 */
fabric.Image.filters = fabric.Image.filters || { };

/**
 * Root filter class from which all filter classes inherit from
 * @class fabric.Image.filters.BaseFilter
 * @memberOf fabric.Image.filters
 */
fabric.Image.filters.BaseFilter = fabric.util.createClass(/** @lends fabric.Image.filters.BaseFilter.prototype */ {

  /**
   * Filter type
   * @param {String} type
   * @default
   */
  type: 'BaseFilter',

  /**
   * Constructor
   * @param {Object} [options] Options object
   */
  initialize: function(options) {
    if (options) {
      this.setOptions(options);
    }
  },

  /**
   * Sets filter's properties from options
   * @param {Object} [options] Options object
   */
  setOptions: function(options) {
    for (var prop in options) {
      this[prop] = options[prop];
    }
  },

  /**
   * Returns object representation of an instance
   * @return {Object} Object representation of an instance
   */
  toObject: function() {
    return { type: this.type };
  },

  /**
   * Returns a JSON representation of an instance
   * @return {Object} JSON
   */
  toJSON: function() {
    // delegate, not alias
    return this.toObject();
  }
});


(function(global) {

  'use strict';

  var fabric  = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend;

  /**
   * Brightness filter class
   * @class fabric.Image.filters.Brightness
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link fabric.Image.filters.Brightness#initialize} for constructor definition
   * @see {@link http://fabricjs.com/image-filters|ImageFilters demo}
   * @example
   * var filter = new fabric.Image.filters.Brightness({
   *   brightness: 200
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.Brightness = fabric.util.createClass(fabric.Image.filters.BaseFilter, /** @lends fabric.Image.filters.Brightness.prototype */ {

    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'Brightness',

    /**
     * Constructor
     * @memberOf fabric.Image.filters.Brightness.prototype
     * @param {Object} [options] Options object
     * @param {Number} [options.brightness=0] Value to brighten the image up (0..255)
     */
    initialize: function(options) {
      options = options || { };
      this.brightness = options.brightness || 0;
    },

    /**
     * Applies filter to canvas element
     * @param {Object} canvasEl Canvas element to apply filter to
     */
    applyTo: function(canvasEl) {
      var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          brightness = this.brightness;

      for (var i = 0, len = data.length; i < len; i += 4) {
        data[i] += brightness;
        data[i + 1] += brightness;
        data[i + 2] += brightness;
      }

      context.putImageData(imageData, 0, 0);
    },

    /**
     * Returns object representation of an instance
     * @return {Object} Object representation of an instance
     */
    toObject: function() {
      return extend(this.callSuper('toObject'), {
        brightness: this.brightness
      });
    }
  });

  /**
   * Returns filter instance from an object representation
   * @static
   * @param {Object} object Object to create an instance from
   * @return {fabric.Image.filters.Brightness} Instance of fabric.Image.filters.Brightness
   */
  fabric.Image.filters.Brightness.fromObject = function(object) {
    return new fabric.Image.filters.Brightness(object);
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric  = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend;

  /**
   * Adapted from <a href="http://www.html5rocks.com/en/tutorials/canvas/imagefilters/">html5rocks article</a>
   * @class fabric.Image.filters.Convolute
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link fabric.Image.filters.Convolute#initialize} for constructor definition
   * @see {@link http://fabricjs.com/image-filters|ImageFilters demo}
   * @example <caption>Sharpen filter</caption>
   * var filter = new fabric.Image.filters.Convolute({
   *   matrix: [ 0, -1,  0,
   *            -1,  5, -1,
   *             0, -1,  0 ]
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   * @example <caption>Blur filter</caption>
   * var filter = new fabric.Image.filters.Convolute({
   *   matrix: [ 1/9, 1/9, 1/9,
   *             1/9, 1/9, 1/9,
   *             1/9, 1/9, 1/9 ]
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   * @example <caption>Emboss filter</caption>
   * var filter = new fabric.Image.filters.Convolute({
   *   matrix: [ 1,   1,  1,
   *             1, 0.7, -1,
   *            -1,  -1, -1 ]
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   * @example <caption>Emboss filter with opaqueness</caption>
   * var filter = new fabric.Image.filters.Convolute({
   *   opaque: true,
   *   matrix: [ 1,   1,  1,
   *             1, 0.7, -1,
   *            -1,  -1, -1 ]
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.Convolute = fabric.util.createClass(fabric.Image.filters.BaseFilter, /** @lends fabric.Image.filters.Convolute.prototype */ {

    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'Convolute',

    /**
     * Constructor
     * @memberOf fabric.Image.filters.Convolute.prototype
     * @param {Object} [options] Options object
     * @param {Boolean} [options.opaque=false] Opaque value (true/false)
     * @param {Array} [options.matrix] Filter matrix
     */
    initialize: function(options) {
      options = options || { };

      this.opaque = options.opaque;
      this.matrix = options.matrix || [
        0, 0, 0,
        0, 1, 0,
        0, 0, 0
      ];
    },

    /**
     * Applies filter to canvas element
     * @param {Object} canvasEl Canvas element to apply filter to
     */
    applyTo: function(canvasEl) {

      var weights = this.matrix,
          context = canvasEl.getContext('2d'),
          pixels = context.getImageData(0, 0, canvasEl.width, canvasEl.height),

          side = Math.round(Math.sqrt(weights.length)),
          halfSide = Math.floor(side/2),
          src = pixels.data,
          sw = pixels.width,
          sh = pixels.height,
          output = context.createImageData(sw, sh),
          dst = output.data,
          // go through the destination image pixels
          alphaFac = this.opaque ? 1 : 0,
          r, g, b, a, dstOff,
          scx, scy, srcOff, wt;

      for (var y = 0; y < sh; y++) {
        for (var x = 0; x < sw; x++) {
          dstOff = (y * sw + x) * 4;
          // calculate the weighed sum of the source image pixels that
          // fall under the convolution matrix
          r = 0; g = 0; b = 0; a = 0;

          for (var cy = 0; cy < side; cy++) {
            for (var cx = 0; cx < side; cx++) {
              scy = y + cy - halfSide;
              scx = x + cx - halfSide;

              /* jshint maxdepth:5 */
              if (scy < 0 || scy > sh || scx < 0 || scx > sw) {
                continue;
              }

              srcOff = (scy * sw + scx) * 4;
              wt = weights[cy * side + cx];

              r += src[srcOff] * wt;
              g += src[srcOff + 1] * wt;
              b += src[srcOff + 2] * wt;
              a += src[srcOff + 3] * wt;
            }
          }
          dst[dstOff] = r;
          dst[dstOff + 1] = g;
          dst[dstOff + 2] = b;
          dst[dstOff + 3] = a + alphaFac * (255 - a);
        }
      }

      context.putImageData(output, 0, 0);
    },

    /**
     * Returns object representation of an instance
     * @return {Object} Object representation of an instance
     */
    toObject: function() {
      return extend(this.callSuper('toObject'), {
        opaque: this.opaque,
        matrix: this.matrix
      });
    }
  });

  /**
   * Returns filter instance from an object representation
   * @static
   * @param {Object} object Object to create an instance from
   * @return {fabric.Image.filters.Convolute} Instance of fabric.Image.filters.Convolute
   */
  fabric.Image.filters.Convolute.fromObject = function(object) {
    return new fabric.Image.filters.Convolute(object);
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric  = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend;

  /**
   * GradientTransparency filter class
   * @class fabric.Image.filters.GradientTransparency
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link fabric.Image.filters.GradientTransparency#initialize} for constructor definition
   * @see {@link http://fabricjs.com/image-filters|ImageFilters demo}
   * @example
   * var filter = new fabric.Image.filters.GradientTransparency({
   *   threshold: 200
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.GradientTransparency = fabric.util.createClass(fabric.Image.filters.BaseFilter, /** @lends fabric.Image.filters.GradientTransparency.prototype */ {

    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'GradientTransparency',

    /**
     * Constructor
     * @memberOf fabric.Image.filters.GradientTransparency.prototype
     * @param {Object} [options] Options object
     * @param {Number} [options.threshold=100] Threshold value
     */
    initialize: function(options) {
      options = options || { };
      this.threshold = options.threshold || 100;
    },

    /**
     * Applies filter to canvas element
     * @param {Object} canvasEl Canvas element to apply filter to
     */
    applyTo: function(canvasEl) {
      var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          threshold = this.threshold,
          total = data.length;

      for (var i = 0, len = data.length; i < len; i += 4) {
        data[i + 3] = threshold + 255 * (total - i) / total;
      }

      context.putImageData(imageData, 0, 0);
    },

    /**
     * Returns object representation of an instance
     * @return {Object} Object representation of an instance
     */
    toObject: function() {
      return extend(this.callSuper('toObject'), {
        threshold: this.threshold
      });
    }
  });

  /**
   * Returns filter instance from an object representation
   * @static
   * @param {Object} object Object to create an instance from
   * @return {fabric.Image.filters.GradientTransparency} Instance of fabric.Image.filters.GradientTransparency
   */
  fabric.Image.filters.GradientTransparency.fromObject = function(object) {
    return new fabric.Image.filters.GradientTransparency(object);
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric  = global.fabric || (global.fabric = { });

  /**
   * Grayscale image filter class
   * @class fabric.Image.filters.Grayscale
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link http://fabricjs.com/image-filters|ImageFilters demo}
   * @example
   * var filter = new fabric.Image.filters.Grayscale();
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.Grayscale = fabric.util.createClass(fabric.Image.filters.BaseFilter, /** @lends fabric.Image.filters.Grayscale.prototype */ {

    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'Grayscale',

    /**
     * Applies filter to canvas element
     * @memberOf fabric.Image.filters.Grayscale.prototype
     * @param {Object} canvasEl Canvas element to apply filter to
     */
    applyTo: function(canvasEl) {
      var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          len = imageData.width * imageData.height * 4,
          index = 0,
          average;

      while (index < len) {
        average = (data[index] + data[index + 1] + data[index + 2]) / 3;
        data[index]     = average;
        data[index + 1] = average;
        data[index + 2] = average;
        index += 4;
      }

      context.putImageData(imageData, 0, 0);
    }
  });

  /**
   * Returns filter instance from an object representation
   * @static
   * @return {fabric.Image.filters.Grayscale} Instance of fabric.Image.filters.Grayscale
   */
  fabric.Image.filters.Grayscale.fromObject = function() {
    return new fabric.Image.filters.Grayscale();
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric  = global.fabric || (global.fabric = { });

  /**
   * Invert filter class
   * @class fabric.Image.filters.Invert
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link http://fabricjs.com/image-filters|ImageFilters demo}
   * @example
   * var filter = new fabric.Image.filters.Invert();
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.Invert = fabric.util.createClass(fabric.Image.filters.BaseFilter, /** @lends fabric.Image.filters.Invert.prototype */ {

    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'Invert',

    /**
     * Applies filter to canvas element
     * @memberOf fabric.Image.filters.Invert.prototype
     * @param {Object} canvasEl Canvas element to apply filter to
     */
    applyTo: function(canvasEl) {
      var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          iLen = data.length, i;

      for (i = 0; i < iLen; i+=4) {
        data[i] = 255 - data[i];
        data[i + 1] = 255 - data[i + 1];
        data[i + 2] = 255 - data[i + 2];
      }

      context.putImageData(imageData, 0, 0);
    }
  });

  /**
   * Returns filter instance from an object representation
   * @static
   * @return {fabric.Image.filters.Invert} Instance of fabric.Image.filters.Invert
   */
  fabric.Image.filters.Invert.fromObject = function() {
    return new fabric.Image.filters.Invert();
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric  = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend;

  /**
   * Mask filter class
   * See http://resources.aleph-1.com/mask/
   * @class fabric.Image.filters.Mask
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link fabric.Image.filters.Mask#initialize} for constructor definition
   */
  fabric.Image.filters.Mask = fabric.util.createClass(fabric.Image.filters.BaseFilter, /** @lends fabric.Image.filters.Mask.prototype */ {

    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'Mask',

    /**
     * Constructor
     * @memberOf fabric.Image.filters.Mask.prototype
     * @param {Object} [options] Options object
     * @param {fabric.Image} [options.mask] Mask image object
     * @param {Number} [options.channel=0] Rgb channel (0, 1, 2 or 3)
     */
    initialize: function(options) {
      options = options || { };

      this.mask = options.mask;
      this.channel = [ 0, 1, 2, 3 ].indexOf(options.channel) > -1 ? options.channel : 0;
    },

    /**
     * Applies filter to canvas element
     * @param {Object} canvasEl Canvas element to apply filter to
     */
    applyTo: function(canvasEl) {
      if (!this.mask) {
        return;
      }

      var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          maskEl = this.mask.getElement(),
          maskCanvasEl = fabric.util.createCanvasElement(),
          channel = this.channel,
          i,
          iLen = imageData.width * imageData.height * 4;

      maskCanvasEl.width = canvasEl.width;
      maskCanvasEl.height = canvasEl.height;

      maskCanvasEl.getContext('2d').drawImage(maskEl, 0, 0, canvasEl.width, canvasEl.height);

      var maskImageData = maskCanvasEl.getContext('2d').getImageData(0, 0, canvasEl.width, canvasEl.height),
          maskData = maskImageData.data;

      for (i = 0; i < iLen; i += 4) {
        data[i + 3] = maskData[i + channel];
      }

      context.putImageData(imageData, 0, 0);
    },

    /**
     * Returns object representation of an instance
     * @return {Object} Object representation of an instance
     */
    toObject: function() {
      return extend(this.callSuper('toObject'), {
        mask: this.mask.toObject(),
        channel: this.channel
      });
    }
  });

  /**
   * Returns filter instance from an object representation
   * @static
   * @param {Object} object Object to create an instance from
   * @param {Function} [callback] Callback to invoke when a mask filter instance is created
   */
  fabric.Image.filters.Mask.fromObject = function(object, callback) {
    fabric.util.loadImage(object.mask.src, function(img) {
      object.mask = new fabric.Image(img, object.mask);
      callback && callback(new fabric.Image.filters.Mask(object));
    });
  };

  /**
   * Indicates that instances of this type are async
   * @static
   * @type Boolean
   * @default
   */
  fabric.Image.filters.Mask.async = true;

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric  = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend;

  /**
   * Noise filter class
   * @class fabric.Image.filters.Noise
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link fabric.Image.filters.Noise#initialize} for constructor definition
   * @see {@link http://fabricjs.com/image-filters|ImageFilters demo}
   * @example
   * var filter = new fabric.Image.filters.Noise({
   *   noise: 700
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.Noise = fabric.util.createClass(fabric.Image.filters.BaseFilter, /** @lends fabric.Image.filters.Noise.prototype */ {

    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'Noise',

    /**
     * Constructor
     * @memberOf fabric.Image.filters.Noise.prototype
     * @param {Object} [options] Options object
     * @param {Number} [options.noise=0] Noise value
     */
    initialize: function(options) {
      options = options || { };
      this.noise = options.noise || 0;
    },

    /**
     * Applies filter to canvas element
     * @param {Object} canvasEl Canvas element to apply filter to
     */
    applyTo: function(canvasEl) {
      var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          noise = this.noise, rand;

      for (var i = 0, len = data.length; i < len; i += 4) {

        rand = (0.5 - Math.random()) * noise;

        data[i] += rand;
        data[i + 1] += rand;
        data[i + 2] += rand;
      }

      context.putImageData(imageData, 0, 0);
    },

    /**
     * Returns object representation of an instance
     * @return {Object} Object representation of an instance
     */
    toObject: function() {
      return extend(this.callSuper('toObject'), {
        noise: this.noise
      });
    }
  });

  /**
   * Returns filter instance from an object representation
   * @static
   * @param {Object} object Object to create an instance from
   * @return {fabric.Image.filters.Noise} Instance of fabric.Image.filters.Noise
   */
  fabric.Image.filters.Noise.fromObject = function(object) {
    return new fabric.Image.filters.Noise(object);
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric  = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend;

  /**
   * Pixelate filter class
   * @class fabric.Image.filters.Pixelate
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link fabric.Image.filters.Pixelate#initialize} for constructor definition
   * @see {@link http://fabricjs.com/image-filters|ImageFilters demo}
   * @example
   * var filter = new fabric.Image.filters.Pixelate({
   *   blocksize: 8
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.Pixelate = fabric.util.createClass(fabric.Image.filters.BaseFilter, /** @lends fabric.Image.filters.Pixelate.prototype */ {

    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'Pixelate',

    /**
     * Constructor
     * @memberOf fabric.Image.filters.Pixelate.prototype
     * @param {Object} [options] Options object
     * @param {Number} [options.blocksize=4] Blocksize for pixelate
     */
    initialize: function(options) {
      options = options || { };
      this.blocksize = options.blocksize || 4;
    },

    /**
     * Applies filter to canvas element
     * @param {Object} canvasEl Canvas element to apply filter to
     */
    applyTo: function(canvasEl) {
      var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          iLen = imageData.height,
          jLen = imageData.width,
          index, i, j, r, g, b, a;

      for (i = 0; i < iLen; i += this.blocksize) {
        for (j = 0; j < jLen; j += this.blocksize) {

          index = (i * 4) * jLen + (j * 4);

          r = data[index];
          g = data[index + 1];
          b = data[index + 2];
          a = data[index + 3];

          /*
           blocksize: 4

           [1,x,x,x,1]
           [x,x,x,x,1]
           [x,x,x,x,1]
           [x,x,x,x,1]
           [1,1,1,1,1]
           */

          for (var _i = i, _ilen = i + this.blocksize; _i < _ilen; _i++) {
            for (var _j = j, _jlen = j + this.blocksize; _j < _jlen; _j++) {
              index = (_i * 4) * jLen + (_j * 4);
              data[index] = r;
              data[index + 1] = g;
              data[index + 2] = b;
              data[index + 3] = a;
            }
          }
        }
      }

      context.putImageData(imageData, 0, 0);
    },

    /**
     * Returns object representation of an instance
     * @return {Object} Object representation of an instance
     */
    toObject: function() {
      return extend(this.callSuper('toObject'), {
        blocksize: this.blocksize
      });
    }
  });

  /**
   * Returns filter instance from an object representation
   * @static
   * @param {Object} object Object to create an instance from
   * @return {fabric.Image.filters.Pixelate} Instance of fabric.Image.filters.Pixelate
   */
  fabric.Image.filters.Pixelate.fromObject = function(object) {
    return new fabric.Image.filters.Pixelate(object);
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric  = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend;

  /**
   * Remove white filter class
   * @class fabric.Image.filters.RemoveWhite
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link fabric.Image.filters.RemoveWhite#initialize} for constructor definition
   * @see {@link http://fabricjs.com/image-filters|ImageFilters demo}
   * @example
   * var filter = new fabric.Image.filters.RemoveWhite({
   *   threshold: 40,
   *   distance: 140
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.RemoveWhite = fabric.util.createClass(fabric.Image.filters.BaseFilter, /** @lends fabric.Image.filters.RemoveWhite.prototype */ {

    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'RemoveWhite',

    /**
     * Constructor
     * @memberOf fabric.Image.filters.RemoveWhite.prototype
     * @param {Object} [options] Options object
     * @param {Number} [options.threshold=30] Threshold value
     * @param {Number} [options.distance=20] Distance value
     */
    initialize: function(options) {
      options = options || { };
      this.threshold = options.threshold || 30;
      this.distance = options.distance || 20;
    },

    /**
     * Applies filter to canvas element
     * @param {Object} canvasEl Canvas element to apply filter to
     */
    applyTo: function(canvasEl) {
      var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          threshold = this.threshold,
          distance = this.distance,
          limit = 255 - threshold,
          abs = Math.abs,
          r, g, b;

      for (var i = 0, len = data.length; i < len; i += 4) {
        r = data[i];
        g = data[i + 1];
        b = data[i + 2];

        if (r > limit &&
            g > limit &&
            b > limit &&
            abs(r - g) < distance &&
            abs(r - b) < distance &&
            abs(g - b) < distance
        ) {
          data[i + 3] = 0;
        }
      }

      context.putImageData(imageData, 0, 0);
    },

    /**
     * Returns object representation of an instance
     * @return {Object} Object representation of an instance
     */
    toObject: function() {
      return extend(this.callSuper('toObject'), {
        threshold: this.threshold,
        distance: this.distance
      });
    }
  });

  /**
   * Returns filter instance from an object representation
   * @static
   * @param {Object} object Object to create an instance from
   * @return {fabric.Image.filters.RemoveWhite} Instance of fabric.Image.filters.RemoveWhite
   */
  fabric.Image.filters.RemoveWhite.fromObject = function(object) {
    return new fabric.Image.filters.RemoveWhite(object);
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric  = global.fabric || (global.fabric = { });

  /**
   * Sepia filter class
   * @class fabric.Image.filters.Sepia
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link http://fabricjs.com/image-filters|ImageFilters demo}
   * @example
   * var filter = new fabric.Image.filters.Sepia();
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.Sepia = fabric.util.createClass(fabric.Image.filters.BaseFilter, /** @lends fabric.Image.filters.Sepia.prototype */ {

    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'Sepia',

    /**
     * Applies filter to canvas element
     * @memberOf fabric.Image.filters.Sepia.prototype
     * @param {Object} canvasEl Canvas element to apply filter to
     */
    applyTo: function(canvasEl) {
      var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          iLen = data.length, i, avg;

      for (i = 0; i < iLen; i+=4) {
        avg = 0.3  * data[i] + 0.59 * data[i + 1] + 0.11 * data[i + 2];
        data[i] = avg + 100;
        data[i + 1] = avg + 50;
        data[i + 2] = avg + 255;
      }

      context.putImageData(imageData, 0, 0);
    }
  });

  /**
   * Returns filter instance from an object representation
   * @static
   * @return {fabric.Image.filters.Sepia} Instance of fabric.Image.filters.Sepia
   */
  fabric.Image.filters.Sepia.fromObject = function() {
    return new fabric.Image.filters.Sepia();
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric  = global.fabric || (global.fabric = { });

  /**
   * Sepia2 filter class
   * @class fabric.Image.filters.Sepia2
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link http://fabricjs.com/image-filters|ImageFilters demo}
   * @example
   * var filter = new fabric.Image.filters.Sepia2();
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.Sepia2 = fabric.util.createClass(fabric.Image.filters.BaseFilter, /** @lends fabric.Image.filters.Sepia2.prototype */ {

    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'Sepia2',

    /**
     * Applies filter to canvas element
     * @memberOf fabric.Image.filters.Sepia.prototype
     * @param {Object} canvasEl Canvas element to apply filter to
     */
    applyTo: function(canvasEl) {
      var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          iLen = data.length, i, r, g, b;

      for (i = 0; i < iLen; i+=4) {
        r = data[i];
        g = data[i + 1];
        b = data[i + 2];

        data[i] = (r * 0.393 + g * 0.769 + b * 0.189 ) / 1.351;
        data[i + 1] = (r * 0.349 + g * 0.686 + b * 0.168 ) / 1.203;
        data[i + 2] = (r * 0.272 + g * 0.534 + b * 0.131 ) / 2.140;
      }

      context.putImageData(imageData, 0, 0);
    }
  });

  /**
   * Returns filter instance from an object representation
   * @static
   * @return {fabric.Image.filters.Sepia2} Instance of fabric.Image.filters.Sepia2
   */
  fabric.Image.filters.Sepia2.fromObject = function() {
    return new fabric.Image.filters.Sepia2();
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric  = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend;

  /**
   * Tint filter class
   * Adapted from <a href="https://github.com/mezzoblue/PaintbrushJS">https://github.com/mezzoblue/PaintbrushJS</a>
   * @class fabric.Image.filters.Tint
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link fabric.Image.filters.Tint#initialize} for constructor definition
   * @see {@link http://fabricjs.com/image-filters|ImageFilters demo}
   * @example <caption>Tint filter with hex color and opacity</caption>
   * var filter = new fabric.Image.filters.Tint({
   *   color: '#3513B0',
   *   opacity: 0.5
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   * @example <caption>Tint filter with rgba color</caption>
   * var filter = new fabric.Image.filters.Tint({
   *   color: 'rgba(53, 21, 176, 0.5)'
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.Tint = fabric.util.createClass(fabric.Image.filters.BaseFilter, /** @lends fabric.Image.filters.Tint.prototype */ {

    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'Tint',

    /**
     * Constructor
     * @memberOf fabric.Image.filters.Tint.prototype
     * @param {Object} [options] Options object
     * @param {String} [options.color=#000000] Color to tint the image with
     * @param {Number} [options.opacity] Opacity value that controls the tint effect's transparency (0..1)
     */
    initialize: function(options) {
      options = options || { };

      this.color = options.color || '#000000';
      this.opacity = typeof options.opacity !== 'undefined'
                      ? options.opacity
                      : new fabric.Color(this.color).getAlpha();
    },

    /**
     * Applies filter to canvas element
     * @param {Object} canvasEl Canvas element to apply filter to
     */
    applyTo: function(canvasEl) {
      var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          iLen = data.length, i,
          tintR, tintG, tintB,
          r, g, b, alpha1,
          source;

      source = new fabric.Color(this.color).getSource();

      tintR = source[0] * this.opacity;
      tintG = source[1] * this.opacity;
      tintB = source[2] * this.opacity;

      alpha1 = 1 - this.opacity;

      for (i = 0; i < iLen; i+=4) {
        r = data[i];
        g = data[i + 1];
        b = data[i + 2];

        // alpha compositing
        data[i] = tintR + r * alpha1;
        data[i + 1] = tintG + g * alpha1;
        data[i + 2] = tintB + b * alpha1;
      }

      context.putImageData(imageData, 0, 0);
    },

    /**
     * Returns object representation of an instance
     * @return {Object} Object representation of an instance
     */
    toObject: function() {
      return extend(this.callSuper('toObject'), {
        color: this.color,
        opacity: this.opacity
      });
    }
  });

  /**
   * Returns filter instance from an object representation
   * @static
   * @param {Object} object Object to create an instance from
   * @return {fabric.Image.filters.Tint} Instance of fabric.Image.filters.Tint
   */
  fabric.Image.filters.Tint.fromObject = function(object) {
    return new fabric.Image.filters.Tint(object);
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric  = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend;

  /**
   * Multiply filter class
   * Adapted from <a href="http://www.laurenscorijn.com/articles/colormath-basics">http://www.laurenscorijn.com/articles/colormath-basics</a>
   * @class fabric.Image.filters.Multiply
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @example <caption>Multiply filter with hex color</caption>
   * var filter = new fabric.Image.filters.Multiply({
   *   color: '#F0F'
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   * @example <caption>Multiply filter with rgb color</caption>
   * var filter = new fabric.Image.filters.Multiply({
   *   color: 'rgb(53, 21, 176)'
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.Multiply = fabric.util.createClass(fabric.Image.filters.BaseFilter, /** @lends fabric.Image.filters.Multiply.prototype */ {

    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'Multiply',

    /**
     * Constructor
     * @memberOf fabric.Image.filters.Multiply.prototype
     * @param {Object} [options] Options object
     * @param {String} [options.color=#000000] Color to multiply the image pixels with
     */
    initialize: function(options) {
      options = options || { };

      this.color = options.color || '#000000';
    },

    /**
     * Applies filter to canvas element
     * @param {Object} canvasEl Canvas element to apply filter to
     */
    applyTo: function(canvasEl) {
      var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          iLen = data.length, i,
          source;

      source = new fabric.Color(this.color).getSource();

      for (i = 0; i < iLen; i+=4) {
        data[i] *= source[0] / 255;
        data[i + 1] *= source[1] / 255;
        data[i + 2] *= source[2] / 255;
      }

      context.putImageData(imageData, 0, 0);
    },

    /**
     * Returns object representation of an instance
     * @return {Object} Object representation of an instance
     */
    toObject: function() {
      return extend(this.callSuper('toObject'), {
        color: this.color
      });
    }
  });

  /**
   * Returns filter instance from an object representation
   * @static
   * @param {Object} object Object to create an instance from
   * @return {fabric.Image.filters.Multiply} Instance of fabric.Image.filters.Multiply
   */
  fabric.Image.filters.Multiply.fromObject = function(object) {
    return new fabric.Image.filters.Multiply(object);
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {
  'use strict';

  var fabric = global.fabric;

  /**
   * Color Blend filter class
   * @class fabric.Image.filter.Blend
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @example
   * var filter = new fabric.Image.filters.Blend({
   *  color: '#000',
   *  mode: 'multiply'
   * });
   *
   * var filter = new fabric.Image.filters.Blend({
   *  image: fabricImageObject,
   *  mode: 'multiply',
   *  alpha: 0.5
   * });

   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.Blend = fabric.util.createClass(fabric.Image.filters.BaseFilter, /** @lends fabric.Image.filters.Blend.prototype */{
    type: 'Blend',

    initialize: function(options) {
      options = options || {};
      this.color = options.color || '#000';
      this.image = options.image || false;
      this.mode = options.mode || 'multiply';
      this.alpha = options.alpha || 1;
    },

    applyTo: function(canvasEl) {
      var context = canvasEl.getContext('2d'),
          imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
          data = imageData.data,
          tr, tg, tb,
          r, g, b,
          _r, _g, _b,
          source,
          isImage = false;

      if (this.image) {
        // Blend images
        isImage = true;

        var _el = fabric.util.createCanvasElement();
        _el.width = this.image.width;
        _el.height = this.image.height;

        var tmpCanvas = new fabric.StaticCanvas(_el);
        tmpCanvas.add(this.image);
        var context2 =  tmpCanvas.getContext('2d');
        source = context2.getImageData(0, 0, tmpCanvas.width, tmpCanvas.height).data;
      }
      else {
        // Blend color
        source = new fabric.Color(this.color).getSource();

        tr = source[0] * this.alpha;
        tg = source[1] * this.alpha;
        tb = source[2] * this.alpha;
      }

      for (var i = 0, len = data.length; i < len; i += 4) {

        r = data[i];
        g = data[i + 1];
        b = data[i + 2];

        if (isImage) {
          tr = source[i] * this.alpha;
          tg = source[i + 1] * this.alpha;
          tb = source[i + 2] * this.alpha;
        }

        switch (this.mode) {
          case 'multiply':
            data[i] = r * tr / 255;
            data[i + 1] = g * tg / 255;
            data[i + 2] = b * tb / 255;
            break;
          case 'screen':
            data[i] = 1 - (1 - r) * (1 - tr);
            data[i + 1] = 1 - (1 - g) * (1 - tg);
            data[i + 2] = 1 - (1 - b) * (1 - tb);
            break;
          case 'add':
            data[i] = Math.min(255, r + tr);
            data[i + 1] = Math.min(255, g + tg);
            data[i + 2] = Math.min(255, b + tb);
            break;
          case 'diff':
          case 'difference':
            data[i] = Math.abs(r - tr);
            data[i + 1] = Math.abs(g - tg);
            data[i + 2] = Math.abs(b - tb);
            break;
          case 'subtract':
            _r = r - tr;
            _g = g - tg;
            _b = b - tb;

            data[i] = (_r < 0) ? 0 : _r;
            data[i + 1] = (_g < 0) ? 0 : _g;
            data[i + 2] = (_b < 0) ? 0 : _b;
            break;
          case 'darken':
            data[i] = Math.min(r, tr);
            data[i + 1] = Math.min(g, tg);
            data[i + 2] = Math.min(b, tb);
            break;
          case 'lighten':
            data[i] = Math.max(r, tr);
            data[i + 1] = Math.max(g, tg);
            data[i + 2] = Math.max(b, tb);
            break;
        }
      }

      context.putImageData(imageData, 0, 0);
    },

    /**
     * Returns object representation of an instance
     * @return {Object} Object representation of an instance
     */
    toObject: function() {
      return {
        color: this.color,
        image: this.image,
        mode: this.mode,
        alpha: this.alpha
      };
    }
  });

  fabric.Image.filters.Blend.fromObject = function(object) {
    return new fabric.Image.filters.Blend(object);
  };
})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric  = global.fabric || (global.fabric = { }), pow = Math.pow, floor = Math.floor,
      sqrt = Math.sqrt, abs = Math.abs, max = Math.max, round = Math.round, sin = Math.sin,
      ceil = Math.ceil;

  /**
   * Resize image filter class
   * @class fabric.Image.filters.Resize
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link http://fabricjs.com/image-filters|ImageFilters demo}
   * @example
   * var filter = new fabric.Image.filters.Resize();
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.Resize = fabric.util.createClass(fabric.Image.filters.BaseFilter, /** @lends fabric.Image.filters.Resize.prototype */ {

    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'Resize',

    /**
     * Resize type
     * @param {String} resizeType
     * @default
     */
    resizeType: 'hermite',

    /**
     * Scale factor for resizing, x axis
     * @param {Number} scaleX
     * @default
     */
    scaleX: 0,

    /**
     * Scale factor for resizing, y axis
     * @param {Number} scaleY
     * @default
     */
    scaleY: 0,

    /**
     * LanczosLobes parameter for lanczos filter
     * @param {Number} lanczosLobes
     * @default
     */
    lanczosLobes: 3,

    /**
     * Applies filter to canvas element
     * @memberOf fabric.Image.filters.Resize.prototype
     * @param {Object} canvasEl Canvas element to apply filter to
     * @param {Number} scaleX
     * @param {Number} scaleY
     */
    applyTo: function(canvasEl, scaleX, scaleY) {
      if (scaleX === 1 && scaleY === 1) {
        return;
      }

      this.rcpScaleX = 1 / scaleX;
      this.rcpScaleY = 1 / scaleY;

      var oW = canvasEl.width, oH = canvasEl.height,
          dW = round(oW * scaleX), dH = round(oH * scaleY),
          imageData;

      if (this.resizeType === 'sliceHack') {
        imageData = this.sliceByTwo(canvasEl, oW, oH, dW, dH);
      }
      if (this.resizeType === 'hermite') {
        imageData = this.hermiteFastResize(canvasEl, oW, oH, dW, dH);
      }
      if (this.resizeType === 'bilinear') {
        imageData = this.bilinearFiltering(canvasEl, oW, oH, dW, dH);
      }
      if (this.resizeType === 'lanczos') {
        imageData = this.lanczosResize(canvasEl, oW, oH, dW, dH);
      }
      canvasEl.width = dW;
      canvasEl.height = dH;
      canvasEl.getContext('2d').putImageData(imageData, 0, 0);
    },

    /**
     * Filter sliceByTwo
     * @param {Object} canvasEl Canvas element to apply filter to
     * @param {Number} oW Original Width
     * @param {Number} oH Original Height
     * @param {Number} dW Destination Width
     * @param {Number} dH Destination Height
     * @returns {ImageData}
     */
    sliceByTwo: function(canvasEl, oW, oH, dW, dH) {
      var context = canvasEl.getContext('2d'), imageData,
          multW = 0.5, multH = 0.5, signW = 1, signH = 1,
          doneW = false, doneH = false, stepW = oW, stepH = oH,
          tmpCanvas = fabric.util.createCanvasElement(),
          tmpCtx = tmpCanvas.getContext('2d');
      dW = floor(dW);
      dH = floor(dH);
      tmpCanvas.width = max(dW, oW);
      tmpCanvas.height = max(dH, oH);

      if (dW > oW) {
        multW = 2;
        signW = -1;
      }
      if (dH > oH) {
        multH = 2;
        signH = -1;
      }
      imageData = context.getImageData(0, 0, oW, oH);
      canvasEl.width = max(dW, oW);
      canvasEl.height = max(dH, oH);
      context.putImageData(imageData, 0, 0);

      while (!doneW || !doneH) {
        oW = stepW;
        oH = stepH;
        if (dW * signW < floor(stepW * multW * signW)) {
          stepW = floor(stepW * multW);
        }
        else {
          stepW = dW;
          doneW = true;
        }
        if (dH * signH < floor(stepH * multH * signH)) {
          stepH = floor(stepH * multH);
        }
        else {
          stepH = dH;
          doneH = true;
        }
        imageData = context.getImageData(0, 0, oW, oH);
        tmpCtx.putImageData(imageData, 0, 0);
        context.clearRect(0, 0, stepW, stepH);
        context.drawImage(tmpCanvas, 0, 0, oW, oH, 0, 0, stepW, stepH);
      }
      return context.getImageData(0, 0, dW, dH);
    },

    /**
     * Filter lanczosResize
     * @param {Object} canvasEl Canvas element to apply filter to
     * @param {Number} oW Original Width
     * @param {Number} oH Original Height
     * @param {Number} dW Destination Width
     * @param {Number} dH Destination Height
     * @returns {ImageData}
     */
    lanczosResize: function(canvasEl, oW, oH, dW, dH) {

      function lanczosCreate(lobes) {
        return function(x) {
          if (x > lobes) {
            return 0;
          }
          x *= Math.PI;
          if (abs(x) < 1e-16) {
            return 1;
          }
          var xx = x / lobes;
          return sin(x) * sin(xx) / x / xx;
        };
      }

      function process(u) {
        var v, i, weight, idx, a, red, green,
            blue, alpha, fX, fY;
        center.x = (u + 0.5) * ratioX;
        icenter.x = floor(center.x);
        for (v = 0; v < dH; v++) {
          center.y = (v + 0.5) * ratioY;
          icenter.y = floor(center.y);
          a = 0, red = 0, green = 0, blue = 0, alpha = 0;
          for (i = icenter.x - range2X; i <= icenter.x + range2X; i++) {
            if (i < 0 || i >= oW) {
              continue;
            }
            fX = floor(1000 * abs(i - center.x));
            if (!cacheLanc[fX]) {
              cacheLanc[fX] = { };
            }
            for (var j = icenter.y - range2Y; j <= icenter.y + range2Y; j++) {
              if (j < 0 || j >= oH) {
                continue;
              }
              fY = floor(1000 * abs(j - center.y));
              if (!cacheLanc[fX][fY]) {
                cacheLanc[fX][fY] = lanczos(sqrt(pow(fX * rcpRatioX, 2) + pow(fY * rcpRatioY, 2)) / 1000);
              }
              weight = cacheLanc[fX][fY];
              if (weight > 0) {
                idx = (j * oW + i) * 4;
                a += weight;
                red += weight * srcData[idx];
                green += weight * srcData[idx + 1];
                blue += weight * srcData[idx + 2];
                alpha += weight * srcData[idx + 3];
              }
            }
          }
          idx = (v * dW + u) * 4;
          destData[idx] = red / a;
          destData[idx + 1] = green / a;
          destData[idx + 2] = blue / a;
          destData[idx + 3] = alpha / a;
        }

        if (++u < dW) {
          return process(u);
        }
        else {
          return destImg;
        }
      }

      var context = canvasEl.getContext('2d'),
          srcImg = context.getImageData(0, 0, oW, oH),
          destImg = context.getImageData(0, 0, dW, dH),
          srcData = srcImg.data, destData = destImg.data,
          lanczos = lanczosCreate(this.lanczosLobes),
          ratioX = this.rcpScaleX, ratioY = this.rcpScaleY,
          rcpRatioX = 2 / this.rcpScaleX, rcpRatioY = 2 / this.rcpScaleY,
          range2X = ceil(ratioX * this.lanczosLobes / 2),
          range2Y = ceil(ratioY * this.lanczosLobes / 2),
          cacheLanc = { }, center = { }, icenter = { };

      return process(0);
    },

    /**
     * bilinearFiltering
     * @param {Object} canvasEl Canvas element to apply filter to
     * @param {Number} oW Original Width
     * @param {Number} oH Original Height
     * @param {Number} dW Destination Width
     * @param {Number} dH Destination Height
     * @returns {ImageData}
     */
    bilinearFiltering: function(canvasEl, oW, oH, dW, dH) {
      var a, b, c, d, x, y, i, j, xDiff, yDiff, chnl,
          color, offset = 0, origPix, ratioX = this.rcpScaleX,
          ratioY = this.rcpScaleY, context = canvasEl.getContext('2d'),
          w4 = 4 * (oW - 1), img = context.getImageData(0, 0, oW, oH),
          pixels = img.data, destImage = context.getImageData(0, 0, dW, dH),
          destPixels = destImage.data;
      for (i = 0; i < dH; i++) {
        for (j = 0; j < dW; j++) {
          x = floor(ratioX * j);
          y = floor(ratioY * i);
          xDiff = ratioX * j - x;
          yDiff = ratioY * i - y;
          origPix = 4 * (y * oW + x);

          for (chnl = 0; chnl < 4; chnl++) {
            a = pixels[origPix + chnl];
            b = pixels[origPix + 4 + chnl];
            c = pixels[origPix + w4 + chnl];
            d = pixels[origPix + w4 + 4 + chnl];
            color = a * (1 - xDiff) * (1 - yDiff) + b * xDiff * (1 - yDiff) +
                    c * yDiff * (1 - xDiff) + d * xDiff * yDiff;
            destPixels[offset++] = color;
          }
        }
      }
      return destImage;
    },

    /**
     * hermiteFastResize
     * @param {Object} canvasEl Canvas element to apply filter to
     * @param {Number} oW Original Width
     * @param {Number} oH Original Height
     * @param {Number} dW Destination Width
     * @param {Number} dH Destination Height
     * @returns {ImageData}
     */
    hermiteFastResize: function(canvasEl, oW, oH, dW, dH) {
      var ratioW = this.rcpScaleX, ratioH = this.rcpScaleY,
          ratioWHalf = ceil(ratioW / 2),
          ratioHHalf = ceil(ratioH / 2),
          context = canvasEl.getContext('2d'),
          img = context.getImageData(0, 0, oW, oH), data = img.data,
          img2 = context.getImageData(0, 0, dW, dH), data2 = img2.data;
      for (var j = 0; j < dH; j++) {
        for (var i = 0; i < dW; i++) {
          var x2 = (i + j * dW) * 4, weight = 0, weights = 0, weightsAlpha = 0,
              gxR = 0, gxG = 0, gxB = 0, gxA = 0, centerY = (j + 0.5) * ratioH;
          for (var yy = floor(j * ratioH); yy < (j + 1) * ratioH; yy++) {
            var dy = abs(centerY - (yy + 0.5)) / ratioHHalf,
                centerX = (i + 0.5) * ratioW, w0 = dy * dy;
            for (var xx = floor(i * ratioW); xx < (i + 1) * ratioW; xx++) {
              var dx = abs(centerX - (xx + 0.5)) / ratioWHalf,
                  w = sqrt(w0 + dx * dx);
              /*jshint maxdepth:5 */
              if (w > 1 && w < -1) {
                continue;
              }
              //hermite filter
              weight = 2 * w * w * w - 3 * w * w + 1;
              if (weight > 0) {
                dx = 4 * (xx + yy * oW);
                //alpha
                gxA += weight * data[dx + 3];
                weightsAlpha += weight;
                //colors
                /*jshint maxdepth:6 */
                if (data[dx + 3] < 255) {
                  weight = weight * data[dx + 3] / 250;
                }
                /*jshint maxdepth:5 */
                gxR += weight * data[dx];
                gxG += weight * data[dx + 1];
                gxB += weight * data[dx + 2];
                weights += weight;
              }
              /*jshint maxdepth:4 */
            }
          }
          data2[x2] = gxR / weights;
          data2[x2 + 1] = gxG / weights;
          data2[x2 + 2] = gxB / weights;
          data2[x2 + 3] = gxA / weightsAlpha;
        }
      }
      return img2;
    },

    /**
     * Returns object representation of an instance
     * @return {Object} Object representation of an instance
     */
    toObject: function() {
      return {
        type: this.type,
        scaleX: this.scaleX,
        scaleY: this.scaleY,
        resizeType: this.resizeType,
        lanczosLobes: this.lanczosLobes
      };
    }
  });

  /**
   * Returns filter instance from an object representation
   * @static
   * @return {fabric.Image.filters.Resize} Instance of fabric.Image.filters.Resize
   */
  fabric.Image.filters.Resize.fromObject = function(object) {
    return new fabric.Image.filters.Resize(object);
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric  = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend;

  /**
   * Color Matrix filter class
   * @class fabric.Image.filters.ColorMatrix
   * @memberOf fabric.Image.filters
   * @extends fabric.Image.filters.BaseFilter
   * @see {@link fabric.Image.filters.ColorMatrix#initialize} for constructor definition
   * @see {@link http://fabricjs.com/image-filters|ImageFilters demo}
   * @see {@Link http://www.webwasp.co.uk/tutorials/219/Color_Matrix_Filter.php}
   * @see {@Link http://phoboslab.org/log/2013/11/fast-image-filters-with-webgl}
   * @example <caption>Kodachrome filter</caption>
   * var filter = new fabric.Image.filters.ColorMatrix({
   *  matrix: [
       1.1285582396593525, -0.3967382283601348, -0.03992559172921793, 0, 63.72958762196502,
       -0.16404339962244616, 1.0835251566291304, -0.05498805115633132, 0, 24.732407896706203,
       -0.16786010706155763, -0.5603416277695248, 1.6014850761964943, 0, 35.62982807460946,
       0, 0, 0, 1, 0
      ]
   * });
   * object.filters.push(filter);
   * object.applyFilters(canvas.renderAll.bind(canvas));
   */
  fabric.Image.filters.ColorMatrix = fabric.util.createClass(fabric.Image.filters.BaseFilter, /** @lends fabric.Image.filters.ColorMatrix.prototype */ {

    /**
     * Filter type
     * @param {String} type
     * @default
     */
    type: 'ColorMatrix',

    /**
     * Constructor
     * @memberOf fabric.Image.filters.ColorMatrix.prototype
     * @param {Object} [options] Options object
     * @param {Array} [options.matrix] Color Matrix to modify the image data with
     */
    initialize: function( options ) {
      options || ( options = {} );
      this.matrix = options.matrix || [
          1, 0, 0, 0, 0,
          0, 1, 0, 0, 0,
          0, 0, 1, 0, 0,
          0, 0, 0, 1, 0
        ];
    },

    /**
     * Applies filter to canvas element
     * @param {Object} canvasEl Canvas element to apply filter to
     */
    applyTo: function( canvasEl ) {
      var context = canvasEl.getContext( '2d' ),
        imageData = context.getImageData( 0, 0, canvasEl.width, canvasEl.height ),
        data = imageData.data,
        iLen = data.length,
        i,
        r,
        g,
        b,
        a,
        m = this.matrix;

      for ( i = 0; i < iLen; i += 4 ) {
        r = data[ i ];
        g = data[ i + 1 ];
        b = data[ i + 2 ];
        a = data[ i + 3 ];

        data[ i ] = r * m[ 0 ] + g * m[ 1 ] + b * m[ 2 ] + a * m[ 3 ] + m[ 4 ];
        data[ i + 1 ] = r * m[ 5 ] + g * m[ 6 ] + b * m[ 7 ] + a * m[ 8 ] + m[ 9 ];
        data[ i + 2 ] = r * m[ 10 ] + g * m[ 11 ] + b * m[ 12 ] + a * m[ 13 ] + m[ 14 ];
        data[ i + 3 ] = r * m[ 15 ] + g * m[ 16 ] + b * m[ 17 ] + a * m[ 18 ] + m[ 19 ];
      }

      context.putImageData( imageData, 0, 0 );
    },

    /**
     * Returns object representation of an instance
     * @return {Object} Object representation of an instance
     */
    toObject: function() {
      return extend(this.callSuper('toObject'), {
        type: this.type,
        matrix: this.matrix
      });
    }
  });

  /**
   * Returns filter instance from an object representation
   * @static
   * @param {Object} object Object to create an instance from
   * @return {fabric.Image.filters.ColorMatrix} Instance of fabric.Image.filters.ColorMatrix
   */
  fabric.Image.filters.ColorMatrix.fromObject = function( object ) {
    return new fabric.Image.filters.ColorMatrix( object );
  };

})(typeof exports !== 'undefined' ? exports : this);


(function(global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = { }),
      extend = fabric.util.object.extend,
      clone = fabric.util.object.clone,
      toFixed = fabric.util.toFixed,
      NUM_FRACTION_DIGITS = fabric.Object.NUM_FRACTION_DIGITS;

  if (fabric.Text) {
    fabric.warn('fabric.Text is already defined');
    return;
  }

  var stateProperties = fabric.Object.prototype.stateProperties.concat();
  stateProperties.push(
    'fontFamily',
    'fontWeight',
    'fontSize',
    'text',
    'textDecoration',
    'textAlign',
    'fontStyle',
    'lineHeight',
    'textBackgroundColor'
  );

  /**
   * Text class
   * @class fabric.Text
   * @extends fabric.Object
   * @return {fabric.Text} thisArg
   * @tutorial {@link http://fabricjs.com/fabric-intro-part-2#text}
   * @see {@link fabric.Text#initialize} for constructor definition
   */
  fabric.Text = fabric.util.createClass(fabric.Object, /** @lends fabric.Text.prototype */ {

    /**
     * Properties which when set cause object to change dimensions
     * @type Object
     * @private
     */
    _dimensionAffectingProps: {
      fontSize: true,
      fontWeight: true,
      fontFamily: true,
      fontStyle: true,
      lineHeight: true,
      text: true,
      charSpacing: true,
      textAlign: true,
      stroke: false,
      strokeWidth: false,
    },

    /**
     * @private
     */
    _reNewline: /\r?\n/,

    /**
     * Use this regular expression to filter for whitespace that is not a new line.
     * Mostly used when text is 'justify' aligned.
     * @private
     */
    _reSpacesAndTabs: /[ \t\r]+/g,

    /**
     * Retrieves object's fontSize
     * @method getFontSize
     * @memberOf fabric.Text.prototype
     * @return {String} Font size (in pixels)
     */

    /**
     * Sets object's fontSize
     * Does not update the object .width and .height,
     * call ._initDimensions() to update the values.
     * @method setFontSize
     * @memberOf fabric.Text.prototype
     * @param {Number} fontSize Font size (in pixels)
     * @return {fabric.Text}
     * @chainable
     */

    /**
     * Retrieves object's fontWeight
     * @method getFontWeight
     * @memberOf fabric.Text.prototype
     * @return {(String|Number)} Font weight
     */

    /**
     * Sets object's fontWeight
     * Does not update the object .width and .height,
     * call ._initDimensions() to update the values.
     * @method setFontWeight
     * @memberOf fabric.Text.prototype
     * @param {(Number|String)} fontWeight Font weight
     * @return {fabric.Text}
     * @chainable
     */

    /**
     * Retrieves object's fontFamily
     * @method getFontFamily
     * @memberOf fabric.Text.prototype
     * @return {String} Font family
     */

    /**
     * Sets object's fontFamily
     * Does not update the object .width and .height,
     * call ._initDimensions() to update the values.
     * @method setFontFamily
     * @memberOf fabric.Text.prototype
     * @param {String} fontFamily Font family
     * @return {fabric.Text}
     * @chainable
     */

    /**
     * Retrieves object's text
     * @method getText
     * @memberOf fabric.Text.prototype
     * @return {String} text
     */

    /**
     * Sets object's text
     * Does not update the object .width and .height,
     * call ._initDimensions() to update the values.
     * @method setText
     * @memberOf fabric.Text.prototype
     * @param {String} text Text
     * @return {fabric.Text}
     * @chainable
     */

    /**
     * Retrieves object's textDecoration
     * @method getTextDecoration
     * @memberOf fabric.Text.prototype
     * @return {String} Text decoration
     */

    /**
     * Sets object's textDecoration
     * @method setTextDecoration
     * @memberOf fabric.Text.prototype
     * @param {String} textDecoration Text decoration
     * @return {fabric.Text}
     * @chainable
     */

    /**
     * Retrieves object's fontStyle
     * @method getFontStyle
     * @memberOf fabric.Text.prototype
     * @return {String} Font style
     */

    /**
     * Sets object's fontStyle
     * Does not update the object .width and .height,
     * call ._initDimensions() to update the values.
     * @method setFontStyle
     * @memberOf fabric.Text.prototype
     * @param {String} fontStyle Font style
     * @return {fabric.Text}
     * @chainable
     */

    /**
     * Retrieves object's lineHeight
     * @method getLineHeight
     * @memberOf fabric.Text.prototype
     * @return {Number} Line height
     */

    /**
     * Sets object's lineHeight
     * @method setLineHeight
     * @memberOf fabric.Text.prototype
     * @param {Number} lineHeight Line height
     * @return {fabric.Text}
     * @chainable
     */

    /**
     * Retrieves object's textAlign
     * @method getTextAlign
     * @memberOf fabric.Text.prototype
     * @return {String} Text alignment
     */

    /**
     * Sets object's textAlign
     * @method setTextAlign
     * @memberOf fabric.Text.prototype
     * @param {String} textAlign Text alignment
     * @return {fabric.Text}
     * @chainable
     */

    /**
     * Retrieves object's textBackgroundColor
     * @method getTextBackgroundColor
     * @memberOf fabric.Text.prototype
     * @return {String} Text background color
     */

    /**
     * Sets object's textBackgroundColor
     * @method setTextBackgroundColor
     * @memberOf fabric.Text.prototype
     * @param {String} textBackgroundColor Text background color
     * @return {fabric.Text}
     * @chainable
     */

    /**
     * Type of an object
     * @type String
     * @default
     */
    type:                 'text',

    /**
     * Font size (in pixels)
     * @type Number
     * @default
     */
    fontSize:             40,

    /**
     * Font weight (e.g. bold, normal, 400, 600, 800)
     * @type {(Number|String)}
     * @default
     */
    fontWeight:           'normal',

    /**
     * Font family
     * @type String
     * @default
     */
    fontFamily:           'Times New Roman',

    /**
     * Text decoration Possible values: "", "underline", "overline" or "line-through".
     * @type String
     * @default
     */
    textDecoration:       '',

    /**
     * Text alignment. Possible values: "left", "center", "right" or "justify".
     * @type String
     * @default
     */
    textAlign:            'left',

    /**
     * Font style . Possible values: "", "normal", "italic" or "oblique".
     * @type String
     * @default
     */
    fontStyle:            '',

    /**
     * Line height
     * @type Number
     * @default
     */
    lineHeight:           1.16,

    /**
     * Background color of text lines
     * @type String
     * @default
     */
    textBackgroundColor:  '',

    /**
     * List of properties to consider when checking if
     * state of an object is changed ({@link fabric.Object#hasStateChanged})
     * as well as for history (undo/redo) purposes
     * @type Array
     */
    stateProperties:      stateProperties,

    /**
     * When defined, an object is rendered via stroke and this property specifies its color.
     * <b>Backwards incompatibility note:</b> This property was named "strokeStyle" until v1.1.6
     * @type String
     * @default
     */
    stroke:               null,

    /**
     * Shadow object representing shadow of this shape.
     * <b>Backwards incompatibility note:</b> This property was named "textShadow" (String) until v1.2.11
     * @type fabric.Shadow
     * @default
     */
    shadow:               null,

    /**
     * @private
     */
    _fontSizeFraction: 0.25,

    /**
     * Text Line proportion to font Size (in pixels)
     * @type Number
     * @default
     */
    _fontSizeMult:             1.13,

    /**
     * additional space between characters
     * expressed in thousands of em unit
     * @type Number
     * @default
     */
    charSpacing:             0,

    /**
     * Constructor
     * @param {String} text Text string
     * @param {Object} [options] Options object
     * @return {fabric.Text} thisArg
     */
    initialize: function(text, options) {
      options = options || { };
      this.text = text;
      this.__skipDimension = true;
      this.setOptions(options);
      this.__skipDimension = false;
      this._initDimensions();
    },

    /**
     * Initialize text dimensions. Render all text on given context
     * or on a offscreen canvas to get the text width with measureText.
     * Updates this.width and this.height with the proper values.
     * Does not return dimensions.
     * @param {CanvasRenderingContext2D} [ctx] Context to render on
     * @private
     */
    _initDimensions: function(ctx) {
      if (this.__skipDimension) {
        return;
      }
      if (!ctx) {
        ctx = fabric.util.createCanvasElement().getContext('2d');
        this._setTextStyles(ctx);
      }
      this._textLines = this._splitTextIntoLines();
      this._clearCache();
      this.width = this._getTextWidth(ctx);
      this.height = this._getTextHeight(ctx);
    },

    /**
     * Returns string representation of an instance
     * @return {String} String representation of text object
     */
    toString: function() {
      return '#<fabric.Text (' + this.complexity() +
        '): { "text": "' + this.text + '", "fontFamily": "' + this.fontFamily + '" }>';
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _render: function(ctx) {
      this.clipTo && fabric.util.clipContext(this, ctx);
      this._setOpacity(ctx);
      this._setShadow(ctx);
      this._setupCompositeOperation(ctx);
      this._renderTextBackground(ctx);
      this._setStrokeStyles(ctx);
      this._setFillStyles(ctx);
      this._renderText(ctx);
      this._renderTextDecoration(ctx);
      this.clipTo && ctx.restore();
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderText: function(ctx) {
      this._renderTextFill(ctx);
      this._renderTextStroke(ctx);
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _setTextStyles: function(ctx) {
      ctx.textBaseline = 'alphabetic';
      ctx.font = this._getFontDeclaration();
    },

    /**
     * @private
     * @return {Number} Height of fabric.Text object
     */
    _getTextHeight: function() {
      return this._getHeightOfSingleLine() + (this._textLines.length - 1) * this._getHeightOfLine();
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @return {Number} Maximum width of fabric.Text object
     */
    _getTextWidth: function(ctx) {
      var maxWidth = this._getLineWidth(ctx, 0);

      for (var i = 1, len = this._textLines.length; i < len; i++) {
        var currentLineWidth = this._getLineWidth(ctx, i);
        if (currentLineWidth > maxWidth) {
          maxWidth = currentLineWidth;
        }
      }
      return maxWidth;
    },

    /*
     * Calculate object dimensions from its properties
     * @override
     * @private
     */
    _getNonTransformedDimensions: function() {
      return { x: this.width, y: this.height };
    },

    /**
     * @private
     * @param {String} method Method name ("fillText" or "strokeText")
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {String} chars Chars to render
     * @param {Number} left Left position of text
     * @param {Number} top Top position of text
     */
    _renderChars: function(method, ctx, chars, left, top) {
      // remove Text word from method var
      var shortM = method.slice(0, -4), char, width;
      if (this[shortM].toLive) {
        var offsetX = -this.width / 2 + this[shortM].offsetX || 0,
            offsetY = -this.height / 2 + this[shortM].offsetY || 0;
        ctx.save();
        ctx.translate(offsetX, offsetY);
        left -= offsetX;
        top -= offsetY;
      }
      if (this.charSpacing !== 0) {
        var additionalSpace = this._getWidthOfCharSpacing();
        chars = chars.split('');
        for (var i = 0, len = chars.length; i < len; i++) {
          char = chars[i];
          width = ctx.measureText(char).width + additionalSpace;
          ctx[method](char, left, top);
          left += width;
        }
      }
      else {
        ctx[method](chars, left, top);
      }
      this[shortM].toLive && ctx.restore();
    },

    /**
     * @private
     * @param {String} method Method name ("fillText" or "strokeText")
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {String} line Text to render
     * @param {Number} left Left position of text
     * @param {Number} top Top position of text
     * @param {Number} lineIndex Index of a line in a text
     */
    _renderTextLine: function(method, ctx, line, left, top, lineIndex) {
      // lift the line by quarter of fontSize
      top -= this.fontSize * this._fontSizeFraction;

      // short-circuit
      var lineWidth = this._getLineWidth(ctx, lineIndex);
      if (this.textAlign !== 'justify' || this.width < lineWidth) {
        this._renderChars(method, ctx, line, left, top, lineIndex);
        return;
      }

      // stretch the line
      var words = line.split(/\s+/),
          charOffset = 0,
          wordsWidth = this._getWidthOfWords(ctx, words.join(''), lineIndex, 0),
          widthDiff = this.width - wordsWidth,
          numSpaces = words.length - 1,
          spaceWidth = numSpaces > 0 ? widthDiff / numSpaces : 0,
          leftOffset = 0, word;

      for (var i = 0, len = words.length; i < len; i++) {
        while (line[charOffset] === ' ' && charOffset < line.length) {
          charOffset++;
        }
        word = words[i];
        this._renderChars(method, ctx, word, left + leftOffset, top, lineIndex, charOffset);
        leftOffset += this._getWidthOfWords(ctx, word, lineIndex, charOffset) + spaceWidth;
        charOffset += word.length;
      }
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {String} word
     */
    _getWidthOfWords: function (ctx, word) {
      var width = ctx.measureText(word).width, charCount, additionalSpace;
      if (this.charSpacing !== 0) {
        charCount = word.split('').length;
        additionalSpace = charCount * this._getWidthOfCharSpacing();
        width += additionalSpace;
      }
      return width;
    },

    /**
     * @private
     * @return {Number} Left offset
     */
    _getLeftOffset: function() {
      return -this.width / 2;
    },

    /**
     * @private
     * @return {Number} Top offset
     */
    _getTopOffset: function() {
      return -this.height / 2;
    },

    /**
     * Returns true because text has no style
     */
    isEmptyStyles: function() {
      return true;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {String} method Method name ("fillText" or "strokeText")
     */
    _renderTextCommon: function(ctx, method) {

      var lineHeights = 0, left = this._getLeftOffset(), top = this._getTopOffset();

      for (var i = 0, len = this._textLines.length; i < len; i++) {
        var heightOfLine = this._getHeightOfLine(ctx, i),
            maxHeight = heightOfLine / this.lineHeight,
            lineWidth = this._getLineWidth(ctx, i),
            leftOffset = this._getLineLeftOffset(lineWidth);
        this._renderTextLine(
          method,
          ctx,
          this._textLines[i],
          left + leftOffset,
          top + lineHeights + maxHeight,
          i
        );
        lineHeights += heightOfLine;
      }
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderTextFill: function(ctx) {
      if (!this.fill && this.isEmptyStyles()) {
        return;
      }

      this._renderTextCommon(ctx, 'fillText');
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderTextStroke: function(ctx) {
      if ((!this.stroke || this.strokeWidth === 0) && this.isEmptyStyles()) {
        return;
      }

      if (this.shadow && !this.shadow.affectStroke) {
        this._removeShadow(ctx);
      }

      ctx.save();
      this._setLineDash(ctx, this.strokedashArray);
      ctx.beginPath();
      this._renderTextCommon(ctx, 'strokeText');
      ctx.closePath();
      ctx.restore();
    },

    /**
     * @private
     * @return {Number} height of line
     */
    _getHeightOfLine: function() {
      return this._getHeightOfSingleLine() * this.lineHeight;
    },

    /**
     * @private
     * @return {Number} height of line without lineHeight
     */
    _getHeightOfSingleLine: function() {
      return this.fontSize * this._fontSizeMult;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderTextBackground: function(ctx) {
      this._renderTextBoxBackground(ctx);
      this._renderTextLinesBackground(ctx);
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderTextBoxBackground: function(ctx) {
      if (!this.backgroundColor) {
        return;
      }

      ctx.fillStyle = this.backgroundColor;

      ctx.fillRect(
        this._getLeftOffset(),
        this._getTopOffset(),
        this.width,
        this.height
      );
      // if there is background color no other shadows
      // should be casted
      this._removeShadow(ctx);
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderTextLinesBackground: function(ctx) {
      if (!this.textBackgroundColor) {
        return;
      }
      var lineTopOffset = 0, heightOfLine,
          lineWidth, lineLeftOffset;

      ctx.fillStyle = this.textBackgroundColor;
      for (var i = 0, len = this._textLines.length; i < len; i++) {
        heightOfLine = this._getHeightOfLine(ctx, i);
        lineWidth = this._getLineWidth(ctx, i);
        if (lineWidth > 0) {
          lineLeftOffset = this._getLineLeftOffset(lineWidth);
          ctx.fillRect(
            this._getLeftOffset() + lineLeftOffset,
            this._getTopOffset() + lineTopOffset,
            lineWidth,
            heightOfLine / this.lineHeight
          );
        }
        lineTopOffset += heightOfLine;
      }
      // if there is text background color no
      // other shadows should be casted
      this._removeShadow(ctx);
    },

    /**
     * @private
     * @param {Number} lineWidth Width of text line
     * @return {Number} Line left offset
     */
    _getLineLeftOffset: function(lineWidth) {
      if (this.textAlign === 'center') {
        return (this.width - lineWidth) / 2;
      }
      if (this.textAlign === 'right') {
        return this.width - lineWidth;
      }
      return 0;
    },

    /**
     * @private
     */
    _clearCache: function() {
      this.__lineWidths = [ ];
      this.__lineHeights = [ ];
    },

    /**
     * @private
     */
    _shouldClearCache: function() {
      var shouldClear = false;
      if (this._forceClearCache) {
        this._forceClearCache = false;
        return true;
      }
      for (var prop in this._dimensionAffectingProps) {
        if (this['__' + prop] !== this[prop]) {
          this['__' + prop] = this[prop];
          shouldClear = true;
        }
      }
      return shouldClear;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Number} lineIndex line number
     * @return {Number} Line width
     */
    _getLineWidth: function(ctx, lineIndex) {
      if (this.__lineWidths[lineIndex]) {
        return this.__lineWidths[lineIndex] === -1 ? this.width : this.__lineWidths[lineIndex];
      }

      var width, wordCount, line = this._textLines[lineIndex];

      if (line === '') {
        width = 0;
      }
      else {
        width = this._measureLine(ctx, lineIndex);
      }
      this.__lineWidths[lineIndex] = width;

      if (width && this.textAlign === 'justify') {
        wordCount = line.split(/\s+/);
        if (wordCount.length > 1) {
          this.__lineWidths[lineIndex] = -1;
        }
      }
      return width;
    },

    _getWidthOfCharSpacing: function() {
      if (this.charSpacing !== 0) {
        return this.fontSize * this.charSpacing / 1000;
      }
      return 0;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Number} lineIndex line number
     * @return {Number} Line width
     */
    _measureLine: function(ctx, lineIndex) {
      var line = this._textLines[lineIndex],
          width = ctx.measureText(line).width,
          additionalSpace = 0, charCount;
      if (this.charSpacing !== 0) {
        charCount = line.split('').length;
        additionalSpace = (charCount - 1) * this._getWidthOfCharSpacing();
      }
      return width + additionalSpace;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderTextDecoration: function(ctx) {
      if (!this.textDecoration) {
        return;
      }
      var halfOfVerticalBox = this.height / 2,
          _this = this, offsets = [];

      /** @ignore */
      function renderLinesAtOffset(offsets) {
        var i, lineHeight = 0, len, j, oLen, lineWidth,
            lineLeftOffset, heightOfLine;

        for (i = 0, len = _this._textLines.length; i < len; i++) {

          lineWidth = _this._getLineWidth(ctx, i),
          lineLeftOffset = _this._getLineLeftOffset(lineWidth),
          heightOfLine = _this._getHeightOfLine(ctx, i);

          for (j = 0, oLen = offsets.length; j < oLen; j++) {
            ctx.fillRect(
              _this._getLeftOffset() + lineLeftOffset,
              lineHeight + (_this._fontSizeMult - 1 + offsets[j] ) * _this.fontSize - halfOfVerticalBox,
              lineWidth,
              _this.fontSize / 15);
          }
          lineHeight += heightOfLine;
        }
      }

      if (this.textDecoration.indexOf('underline') > -1) {
        offsets.push(0.85); // 1 - 3/16
      }
      if (this.textDecoration.indexOf('line-through') > -1) {
        offsets.push(0.43);
      }
      if (this.textDecoration.indexOf('overline') > -1) {
        offsets.push(-0.12);
      }
      if (offsets.length > 0) {
        renderLinesAtOffset(offsets);
      }
    },

    /**
     * return font declaration string for canvas context
     * @returns {String} font declaration formatted for canvas context.
     */
    _getFontDeclaration: function() {
      return [
        // node-canvas needs "weight style", while browsers need "style weight"
        (fabric.isLikelyNode ? this.fontWeight : this.fontStyle),
        (fabric.isLikelyNode ? this.fontStyle : this.fontWeight),
        this.fontSize + 'px',
        '"' + this.fontFamily + '"'
      ].join(' ');
    },

    /**
     * Renders text instance on a specified context
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Boolean} noTransform
     */
    render: function(ctx, noTransform) {
      // do not render if object is not visible
      if (!this.visible) {
        return;
      }

      ctx.save();
      this._setTextStyles(ctx);

      if (this._shouldClearCache()) {
        this._initDimensions(ctx);
      }
      this.drawSelectionBackground(ctx);
      if (!noTransform) {
        this.transform(ctx);
      }
      if (this.transformMatrix) {
        ctx.transform.apply(ctx, this.transformMatrix);
      }
      if (this.group && this.group.type === 'path-group') {
        ctx.translate(this.left, this.top);
      }
      this._render(ctx);
      ctx.restore();
    },

    /**
     * Returns the text as an array of lines.
     * @returns {Array} Lines in the text
     */
    _splitTextIntoLines: function() {
      return this.text.split(this._reNewline);
    },

    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} Object representation of an instance
     */
    toObject: function(propertiesToInclude) {
      var object = extend(this.callSuper('toObject', propertiesToInclude), {
        text:                 this.text,
        fontSize:             this.fontSize,
        fontWeight:           this.fontWeight,
        fontFamily:           this.fontFamily,
        fontStyle:            this.fontStyle,
        lineHeight:           this.lineHeight,
        textDecoration:       this.textDecoration,
        textAlign:            this.textAlign,
        textBackgroundColor:  this.textBackgroundColor,
        charSpacing:          this.charSpacing
      });
      if (!this.includeDefaultValues) {
        this._removeDefaultValues(object);
      }
      return object;
    },

    /* _TO_SVG_START_ */
    /**
     * Returns SVG representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG: function(reviver) {
      var markup = this._createBaseSVGMarkup(),
          offsets = this._getSVGLeftTopOffsets(this.ctx),
          textAndBg = this._getSVGTextAndBg(offsets.textTop, offsets.textLeft);
      this._wrapSVGTextAndBg(markup, textAndBg);

      return reviver ? reviver(markup.join('')) : markup.join('');
    },

    /**
     * @private
     */
    _getSVGLeftTopOffsets: function(ctx) {
      var lineTop = this._getHeightOfLine(ctx, 0),
          textLeft = -this.width / 2,
          textTop = 0;

      return {
        textLeft: textLeft + (this.group && this.group.type === 'path-group' ? this.left : 0),
        textTop: textTop + (this.group && this.group.type === 'path-group' ? -this.top : 0),
        lineTop: lineTop
      };
    },

    /**
     * @private
     */
    _wrapSVGTextAndBg: function(markup, textAndBg) {
      var noShadow = true, filter = this.getSvgFilter(),
          style = filter === '' ? '' : ' style="' + filter + '"';

      markup.push(
        '\t<g ', this.getSvgId(), 'transform="', this.getSvgTransform(), this.getSvgTransformMatrix(), '"',
          style, '>\n',
          textAndBg.textBgRects.join(''),
          '\t\t<text ',
            (this.fontFamily ? 'font-family="' + this.fontFamily.replace(/"/g, '\'') + '" ': ''),
            (this.fontSize ? 'font-size="' + this.fontSize + '" ': ''),
            (this.fontStyle ? 'font-style="' + this.fontStyle + '" ': ''),
            (this.fontWeight ? 'font-weight="' + this.fontWeight + '" ': ''),
            (this.textDecoration ? 'text-decoration="' + this.textDecoration + '" ': ''),
            'style="', this.getSvgStyles(noShadow), '" >\n',
            textAndBg.textSpans.join(''),
          '\t\t</text>\n',
        '\t</g>\n'
      );
    },

    /**
     * @private
     * @param {Number} textTopOffset Text top offset
     * @param {Number} textLeftOffset Text left offset
     * @return {Object}
     */
    _getSVGTextAndBg: function(textTopOffset, textLeftOffset) {
      var textSpans = [ ],
          textBgRects = [ ],
          height = 0;
      // bounding-box background
      this._setSVGBg(textBgRects);

      // text and text-background
      for (var i = 0, len = this._textLines.length; i < len; i++) {
        if (this.textBackgroundColor) {
          this._setSVGTextLineBg(textBgRects, i, textLeftOffset, textTopOffset, height);
        }
        this._setSVGTextLineText(i, textSpans, height, textLeftOffset, textTopOffset, textBgRects);
        height += this._getHeightOfLine(this.ctx, i);
      }

      return {
        textSpans: textSpans,
        textBgRects: textBgRects
      };
    },

    _setSVGTextLineText: function(i, textSpans, height, textLeftOffset, textTopOffset) {
      var yPos = this.fontSize * (this._fontSizeMult - this._fontSizeFraction)
        - textTopOffset + height - this.height / 2;
      if (this.textAlign === 'justify') {
        // i call from here to do not intefere with IText
        this._setSVGTextLineJustifed(i, textSpans, yPos, textLeftOffset);
        return;
      }
      textSpans.push(
        '\t\t\t<tspan x="',
          toFixed(textLeftOffset + this._getLineLeftOffset(this._getLineWidth(this.ctx, i)), NUM_FRACTION_DIGITS), '" ',
          'y="',
          toFixed(yPos, NUM_FRACTION_DIGITS),
          '" ',
          // doing this on <tspan> elements since setting opacity
          // on containing <text> one doesn't work in Illustrator
          this._getFillAttributes(this.fill), '>',
          fabric.util.string.escapeXml(this._textLines[i]),
        '</tspan>\n'
      );
    },

    _setSVGTextLineJustifed: function(i, textSpans, yPos, textLeftOffset) {
      var ctx = fabric.util.createCanvasElement().getContext('2d');

      this._setTextStyles(ctx);

      var line = this._textLines[i],
          words = line.split(/\s+/),
          wordsWidth = this._getWidthOfWords(ctx, words.join('')),
          widthDiff = this.width - wordsWidth,
          numSpaces = words.length - 1,
          spaceWidth = numSpaces > 0 ? widthDiff / numSpaces : 0,
          word, attributes = this._getFillAttributes(this.fill),
          len;

      textLeftOffset += this._getLineLeftOffset(this._getLineWidth(ctx, i));

      for (i = 0, len = words.length; i < len; i++) {
        word = words[i];
        textSpans.push(
          '\t\t\t<tspan x="',
            toFixed(textLeftOffset, NUM_FRACTION_DIGITS), '" ',
            'y="',
            toFixed(yPos, NUM_FRACTION_DIGITS),
            '" ',
            // doing this on <tspan> elements since setting opacity
            // on containing <text> one doesn't work in Illustrator
            attributes, '>',
            fabric.util.string.escapeXml(word),
          '</tspan>\n'
        );
        textLeftOffset += this._getWidthOfWords(ctx, word) + spaceWidth;
      }
    },

    _setSVGTextLineBg: function(textBgRects, i, textLeftOffset, textTopOffset, height) {
      textBgRects.push(
        '\t\t<rect ',
          this._getFillAttributes(this.textBackgroundColor),
          ' x="',
          toFixed(textLeftOffset + this._getLineLeftOffset(this._getLineWidth(this.ctx, i)), NUM_FRACTION_DIGITS),
          '" y="',
          toFixed(height - this.height / 2, NUM_FRACTION_DIGITS),
          '" width="',
          toFixed(this._getLineWidth(this.ctx, i), NUM_FRACTION_DIGITS),
          '" height="',
          toFixed(this._getHeightOfLine(this.ctx, i) / this.lineHeight, NUM_FRACTION_DIGITS),
        '"></rect>\n');
    },

    _setSVGBg: function(textBgRects) {
      if (this.backgroundColor) {
        textBgRects.push(
          '\t\t<rect ',
            this._getFillAttributes(this.backgroundColor),
            ' x="',
            toFixed(-this.width / 2, NUM_FRACTION_DIGITS),
            '" y="',
            toFixed(-this.height / 2, NUM_FRACTION_DIGITS),
            '" width="',
            toFixed(this.width, NUM_FRACTION_DIGITS),
            '" height="',
            toFixed(this.height, NUM_FRACTION_DIGITS),
          '"></rect>\n');
      }
    },

    /**
     * Adobe Illustrator (at least CS5) is unable to render rgba()-based fill values
     * we work around it by "moving" alpha channel into opacity attribute and setting fill's alpha to 1
     *
     * @private
     * @param {*} value
     * @return {String}
     */
    _getFillAttributes: function(value) {
      var fillColor = (value && typeof value === 'string') ? new fabric.Color(value) : '';
      if (!fillColor || !fillColor.getSource() || fillColor.getAlpha() === 1) {
        return 'fill="' + value + '"';
      }
      return 'opacity="' + fillColor.getAlpha() + '" fill="' + fillColor.setAlpha(1).toRgb() + '"';
    },
    /* _TO_SVG_END_ */

    /**
     * Sets specified property to a specified value
     * @param {String} key
     * @param {*} value
     * @return {fabric.Text} thisArg
     * @chainable
     */
    _set: function(key, value) {
      this.callSuper('_set', key, value);

      if (key in this._dimensionAffectingProps) {
        this._initDimensions();
        this.setCoords();
      }
    },

    /**
     * Returns complexity of an instance
     * @return {Number} complexity
     */
    complexity: function() {
      return 1;
    }
  });

  /* _FROM_SVG_START_ */
  /**
   * List of attribute names to account for when parsing SVG element (used by {@link fabric.Text.fromElement})
   * @static
   * @memberOf fabric.Text
   * @see: http://www.w3.org/TR/SVG/text.html#TextElement
   */
  fabric.Text.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat(
    'x y dx dy font-family font-style font-weight font-size text-decoration text-anchor'.split(' '));

  /**
   * Default SVG font size
   * @static
   * @memberOf fabric.Text
   */
  fabric.Text.DEFAULT_SVG_FONT_SIZE = 16;

  /**
   * Returns fabric.Text instance from an SVG element (<b>not yet implemented</b>)
   * @static
   * @memberOf fabric.Text
   * @param {SVGElement} element Element to parse
   * @param {Object} [options] Options object
   * @return {fabric.Text} Instance of fabric.Text
   */
  fabric.Text.fromElement = function(element, options) {
    if (!element) {
      return null;
    }

    var parsedAttributes = fabric.parseAttributes(element, fabric.Text.ATTRIBUTE_NAMES);
    options = fabric.util.object.extend((options ? fabric.util.object.clone(options) : { }), parsedAttributes);

    options.top = options.top || 0;
    options.left = options.left || 0;
    if ('dx' in parsedAttributes) {
      options.left += parsedAttributes.dx;
    }
    if ('dy' in parsedAttributes) {
      options.top += parsedAttributes.dy;
    }
    if (!('fontSize' in options)) {
      options.fontSize = fabric.Text.DEFAULT_SVG_FONT_SIZE;
    }

    if (!options.originX) {
      options.originX = 'left';
    }

    var textContent = '';

    // The XML is not properly parsed in IE9 so a workaround to get
    // textContent is through firstChild.data. Another workaround would be
    // to convert XML loaded from a file to be converted using DOMParser (same way loadSVGFromString() does)
    if (!('textContent' in element)) {
      if ('firstChild' in element && element.firstChild !== null) {
        if ('data' in element.firstChild && element.firstChild.data !== null) {
          textContent = element.firstChild.data;
        }
      }
    }
    else {
      textContent = element.textContent;
    }

    textContent = textContent.replace(/^\s+|\s+$|\n+/g, '').replace(/\s+/g, ' ');

    var text = new fabric.Text(textContent, options),
        textHeightScaleFactor = text.getHeight() / text.height,
        lineHeightDiff = (text.height + text.strokeWidth) * text.lineHeight - text.height,
        scaledDiff = lineHeightDiff * textHeightScaleFactor,
        textHeight = text.getHeight() + scaledDiff,
        offX = 0;
    /*
      Adjust positioning:
        x/y attributes in SVG correspond to the bottom-left corner of text bounding box
        top/left properties in Fabric correspond to center point of text bounding box
    */
    if (text.originX === 'left') {
      offX = text.getWidth() / 2;
    }
    if (text.originX === 'right') {
      offX = -text.getWidth() / 2;
    }
    text.set({
      left: text.getLeft() + offX,
      top: text.getTop() - textHeight / 2 + text.fontSize * (0.18 + text._fontSizeFraction) / text.lineHeight /* 0.3 is the old lineHeight */
    });

    return text;
  };
  /* _FROM_SVG_END_ */

  /**
   * Returns fabric.Text instance from an object representation
   * @static
   * @memberOf fabric.Text
   * @param {Object} object Object to create an instance from
   * @return {fabric.Text} Instance of fabric.Text
   */
  fabric.Text.fromObject = function(object) {
    return new fabric.Text(object.text, clone(object));
  };

  fabric.util.createAccessors(fabric.Text);

})(typeof exports !== 'undefined' ? exports : this);


(function() {

  var clone = fabric.util.object.clone;

  /**
   * IText class (introduced in <b>v1.4</b>) Events are also fired with "text:"
   * prefix when observing canvas.
   * @class fabric.IText
   * @extends fabric.Text
   * @mixes fabric.Observable
   *
   * @fires changed
   * @fires selection:changed
   * @fires editing:entered
   * @fires editing:exited
   *
   * @return {fabric.IText} thisArg
   * @see {@link fabric.IText#initialize} for constructor definition
   *
   * <p>Supported key combinations:</p>
   * <pre>
   *   Move cursor:                    left, right, up, down
   *   Select character:               shift + left, shift + right
   *   Select text vertically:         shift + up, shift + down
   *   Move cursor by word:            alt + left, alt + right
   *   Select words:                   shift + alt + left, shift + alt + right
   *   Move cursor to line start/end:  cmd + left, cmd + right or home, end
   *   Select till start/end of line:  cmd + shift + left, cmd + shift + right or shift + home, shift + end
   *   Jump to start/end of text:      cmd + up, cmd + down
   *   Select till start/end of text:  cmd + shift + up, cmd + shift + down or shift + pgUp, shift + pgDown
   *   Delete character:               backspace
   *   Delete word:                    alt + backspace
   *   Delete line:                    cmd + backspace
   *   Forward delete:                 delete
   *   Copy text:                      ctrl/cmd + c
   *   Paste text:                     ctrl/cmd + v
   *   Cut text:                       ctrl/cmd + x
   *   Select entire text:             ctrl/cmd + a
   *   Quit editing                    tab or esc
   * </pre>
   *
   * <p>Supported mouse/touch combination</p>
   * <pre>
   *   Position cursor:                click/touch
   *   Create selection:               click/touch & drag
   *   Create selection:               click & shift + click
   *   Select word:                    double click
   *   Select line:                    triple click
   * </pre>
   */
  fabric.IText = fabric.util.createClass(fabric.Text, fabric.Observable, /** @lends fabric.IText.prototype */ {

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'i-text',

    /**
     * Index where text selection starts (or where cursor is when there is no selection)
     * @type Number
     * @default
     */
    selectionStart: 0,

    /**
     * Index where text selection ends
     * @type Number
     * @default
     */
    selectionEnd: 0,

    /**
     * Color of text selection
     * @type String
     * @default
     */
    selectionColor: 'rgba(17,119,255,0.3)',

    /**
     * Indicates whether text is in editing mode
     * @type Boolean
     * @default
     */
    isEditing: false,

    /**
     * Indicates whether a text can be edited
     * @type Boolean
     * @default
     */
    editable: true,

    /**
     * Border color of text object while it's in editing mode
     * @type String
     * @default
     */
    editingBorderColor: 'rgba(102,153,255,0.25)',

    /**
     * Width of cursor (in px)
     * @type Number
     * @default
     */
    cursorWidth: 2,

    /**
     * Color of default cursor (when not overwritten by character style)
     * @type String
     * @default
     */
    cursorColor: '#333',

    /**
     * Delay between cursor blink (in ms)
     * @type Number
     * @default
     */
    cursorDelay: 1000,

    /**
     * Duration of cursor fadein (in ms)
     * @type Number
     * @default
     */
    cursorDuration: 600,

    /**
     * Object containing character styles
     * (where top-level properties corresponds to line number and 2nd-level properties -- to char number in a line)
     * @type Object
     * @default
     */
    styles: null,

    /**
     * Indicates whether internal text char widths can be cached
     * @type Boolean
     * @default
     */
    caching: true,

    /**
     * @private
     */
    _reSpace: /\s|\n/,

    /**
     * @private
     */
    _currentCursorOpacity: 0,

    /**
     * @private
     */
    _selectionDirection: null,

    /**
     * @private
     */
    _abortCursorAnimation: false,

    /**
     * @private
     */
    __widthOfSpace: [ ],

    /**
     * Constructor
     * @param {String} text Text string
     * @param {Object} [options] Options object
     * @return {fabric.IText} thisArg
     */
    initialize: function(text, options) {
      this.styles = options ? (options.styles || { }) : { };
      this.callSuper('initialize', text, options);
      this.initBehavior();
    },

    /**
     * @private
     */
    _clearCache: function() {
      this.callSuper('_clearCache');
      this.__widthOfSpace = [ ];
    },

    /**
     * Returns true if object has no styling
     */
    isEmptyStyles: function() {
      if (!this.styles) {
        return true;
      }
      var obj = this.styles;

      for (var p1 in obj) {
        for (var p2 in obj[p1]) {
          /*jshint unused:false */
          for (var p3 in obj[p1][p2]) {
            return false;
          }
        }
      }
      return true;
    },

    /**
     * Sets selection start (left boundary of a selection)
     * @param {Number} index Index to set selection start to
     */
    setSelectionStart: function(index) {
      index = Math.max(index, 0);
      this._updateAndFire('selectionStart', index);
    },

    /**
     * Sets selection end (right boundary of a selection)
     * @param {Number} index Index to set selection end to
     */
    setSelectionEnd: function(index) {
      index = Math.min(index, this.text.length);
      this._updateAndFire('selectionEnd', index);
    },

    /**
     * @private
     * @param {String} property 'selectionStart' or 'selectionEnd'
     * @param {Number} index new position of property
     */
    _updateAndFire: function(property, index) {
      if (this[property] !== index) {
        this._fireSelectionChanged();
        this[property] = index;
      }
      this._updateTextarea();
    },

    /**
     * Fires the even of selection changed
     * @private
     */
    _fireSelectionChanged: function() {
      this.fire('selection:changed');
      this.canvas && this.canvas.fire('text:selection:changed', { target: this });
    },

    /**
     * Gets style of a current selection/cursor (at the start position)
     * @param {Number} [startIndex] Start index to get styles at
     * @param {Number} [endIndex] End index to get styles at
     * @return {Object} styles Style object at a specified (or current) index
     */
    getSelectionStyles: function(startIndex, endIndex) {

      if (arguments.length === 2) {
        var styles = [ ];
        for (var i = startIndex; i < endIndex; i++) {
          styles.push(this.getSelectionStyles(i));
        }
        return styles;
      }

      var loc = this.get2DCursorLocation(startIndex),
          style = this._getStyleDeclaration(loc.lineIndex, loc.charIndex);

      return style || {};
    },

    /**
     * Sets style of a current selection
     * @param {Object} [styles] Styles object
     * @return {fabric.IText} thisArg
     * @chainable
     */
    setSelectionStyles: function(styles) {
      if (this.selectionStart === this.selectionEnd) {
        this._extendStyles(this.selectionStart, styles);
      }
      else {
        for (var i = this.selectionStart; i < this.selectionEnd; i++) {
          this._extendStyles(i, styles);
        }
      }
      /* not included in _extendStyles to avoid clearing cache more than once */
      this._forceClearCache = true;
      return this;
    },

    /**
     * @private
     */
    _extendStyles: function(index, styles) {
      var loc = this.get2DCursorLocation(index);

      if (!this._getLineStyle(loc.lineIndex)) {
        this._setLineStyle(loc.lineIndex, {});
      }

      if (!this._getStyleDeclaration(loc.lineIndex, loc.charIndex)) {
        this._setStyleDeclaration(loc.lineIndex, loc.charIndex, {});
      }

      fabric.util.object.extend(this._getStyleDeclaration(loc.lineIndex, loc.charIndex), styles);
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _render: function(ctx) {
      this.oldWidth = this.width;
      this.oldHeight = this.height;
      this.callSuper('_render', ctx);
      this.ctx = ctx;
      // clear the cursorOffsetCache, so we ensure to calculate once per renderCursor
      // the correct position but not at every cursor animation.
      this.cursorOffsetCache = { };
      this.renderCursorOrSelection();
    },

    /**
     * Renders cursor or selection (depending on what exists)
     */
    renderCursorOrSelection: function() {
      if (!this.active || !this.isEditing) {
        return;
      }
      var chars = this.text.split(''),
          boundaries, ctx;
      if (this.canvas.contextTop) {
        ctx = this.canvas.contextTop;
        ctx.save();
        ctx.transform.apply(ctx, this.canvas.viewportTransform);
        this.transform(ctx);
        this.transformMatrix && ctx.transform.apply(ctx, this.transformMatrix);
        this._clearTextArea(ctx);
      }
      else {
        ctx = this.ctx;
        ctx.save();
      }
      if (this.selectionStart === this.selectionEnd) {
        boundaries = this._getCursorBoundaries(chars, 'cursor');
        this.renderCursor(boundaries, ctx);
      }
      else {
        boundaries = this._getCursorBoundaries(chars, 'selection');
        this.renderSelection(chars, boundaries, ctx);
      }

      ctx.restore();
    },

    _clearTextArea: function(ctx) {
      // we add 4 pixel, to be sure to do not leave any pixel out
      var width = this.oldWidth + 4, height = this.oldHeight + 4;
      ctx.clearRect(-width / 2, -height / 2, width, height);
    },
    /**
     * Returns 2d representation (lineIndex and charIndex) of cursor (or selection start)
     * @param {Number} [selectionStart] Optional index. When not given, current selectionStart is used.
     */
    get2DCursorLocation: function(selectionStart) {
      if (typeof selectionStart === 'undefined') {
        selectionStart = this.selectionStart;
      }
      var len = this._textLines.length;
      for (var i = 0; i < len; i++) {
        if (selectionStart <= this._textLines[i].length) {
          return {
            lineIndex: i,
            charIndex: selectionStart
          };
        }
        selectionStart -= this._textLines[i].length + 1;
      }
      return {
        lineIndex: i - 1,
        charIndex: this._textLines[i - 1].length < selectionStart ? this._textLines[i - 1].length : selectionStart
      };
    },

    /**
     * Returns complete style of char at the current cursor
     * @param {Number} lineIndex Line index
     * @param {Number} charIndex Char index
     * @return {Object} Character style
     */
    getCurrentCharStyle: function(lineIndex, charIndex) {
      var style = this._getStyleDeclaration(lineIndex, charIndex === 0 ? 0 : charIndex - 1);

      return {
        fontSize: style && style.fontSize || this.fontSize,
        fill: style && style.fill || this.fill,
        textBackgroundColor: style && style.textBackgroundColor || this.textBackgroundColor,
        textDecoration: style && style.textDecoration || this.textDecoration,
        fontFamily: style && style.fontFamily || this.fontFamily,
        fontWeight: style && style.fontWeight || this.fontWeight,
        fontStyle: style && style.fontStyle || this.fontStyle,
        stroke: style && style.stroke || this.stroke,
        strokeWidth: style && style.strokeWidth || this.strokeWidth
      };
    },

    /**
     * Returns fontSize of char at the current cursor
     * @param {Number} lineIndex Line index
     * @param {Number} charIndex Char index
     * @return {Number} Character font size
     */
    getCurrentCharFontSize: function(lineIndex, charIndex) {
      var style = this._getStyleDeclaration(lineIndex, charIndex === 0 ? 0 : charIndex - 1);
      return style && style.fontSize ? style.fontSize : this.fontSize;
    },

    /**
     * Returns color (fill) of char at the current cursor
     * @param {Number} lineIndex Line index
     * @param {Number} charIndex Char index
     * @return {String} Character color (fill)
     */
    getCurrentCharColor: function(lineIndex, charIndex) {
      var style = this._getStyleDeclaration(lineIndex, charIndex === 0 ? 0 : charIndex - 1);
      return style && style.fill ? style.fill : this.cursorColor;
    },

    /**
     * Returns cursor boundaries (left, top, leftOffset, topOffset)
     * @private
     * @param {Array} chars Array of characters
     * @param {String} typeOfBoundaries
     */
    _getCursorBoundaries: function(chars, typeOfBoundaries) {

      // left/top are left/top of entire text box
      // leftOffset/topOffset are offset from that left/top point of a text box

      var left = Math.round(this._getLeftOffset()),
          top = this._getTopOffset(),

          offsets = this._getCursorBoundariesOffsets(
                      chars, typeOfBoundaries);

      return {
        left: left,
        top: top,
        leftOffset: offsets.left + offsets.lineLeft,
        topOffset: offsets.top
      };
    },

    /**
     * @private
     */
    _getCursorBoundariesOffsets: function(chars, typeOfBoundaries) {
      if (this.cursorOffsetCache && 'top' in this.cursorOffsetCache) {
        return this.cursorOffsetCache;
      }
      var lineLeftOffset = 0,
          lineIndex = 0,
          charIndex = 0,
          topOffset = 0,
          leftOffset = 0,
          boundaries;

      for (var i = 0; i < this.selectionStart; i++) {
        if (chars[i] === '\n') {
          leftOffset = 0;
          topOffset += this._getHeightOfLine(this.ctx, lineIndex);

          lineIndex++;
          charIndex = 0;
        }
        else {
          leftOffset += this._getWidthOfChar(this.ctx, chars[i], lineIndex, charIndex);
          charIndex++;
        }

        lineLeftOffset = this._getLineLeftOffset(this._getLineWidth(this.ctx, lineIndex));
      }
      if (typeOfBoundaries === 'cursor') {
        topOffset += (1 - this._fontSizeFraction) * this._getHeightOfLine(this.ctx, lineIndex) / this.lineHeight
          - this.getCurrentCharFontSize(lineIndex, charIndex) * (1 - this._fontSizeFraction);
      }
      if (this.charSpacing !== 0 && charIndex === this._textLines[lineIndex].length) {
        leftOffset -= this._getWidthOfCharSpacing();
      }
      boundaries = {
        top: topOffset,
        left: leftOffset,
        lineLeft: lineLeftOffset
      };
      this.cursorOffsetCache = boundaries;
      return this.cursorOffsetCache;
    },

    /**
     * Renders cursor
     * @param {Object} boundaries
     * @param {CanvasRenderingContext2D} ctx transformed context to draw on
     */
    renderCursor: function(boundaries, ctx) {

      var cursorLocation = this.get2DCursorLocation(),
          lineIndex = cursorLocation.lineIndex,
          charIndex = cursorLocation.charIndex,
          charHeight = this.getCurrentCharFontSize(lineIndex, charIndex),
          leftOffset = (lineIndex === 0 && charIndex === 0)
                    ? this._getLineLeftOffset(this._getLineWidth(ctx, lineIndex))
                    : boundaries.leftOffset,
          multiplier = this.scaleX * this.canvas.getZoom(),
          cursorWidth = this.cursorWidth / multiplier;

      ctx.fillStyle = this.getCurrentCharColor(lineIndex, charIndex);
      ctx.globalAlpha = this.__isMousedown ? 1 : this._currentCursorOpacity;

      ctx.fillRect(
        boundaries.left + leftOffset - cursorWidth/2,
        boundaries.top + boundaries.topOffset,
        cursorWidth,
        charHeight);
    },

    /**
     * Renders text selection
     * @param {Array} chars Array of characters
     * @param {Object} boundaries Object with left/top/leftOffset/topOffset
     * @param {CanvasRenderingContext2D} ctx transformed context to draw on
     */
    renderSelection: function(chars, boundaries, ctx) {

      ctx.fillStyle = this.selectionColor;

      var start = this.get2DCursorLocation(this.selectionStart),
          end = this.get2DCursorLocation(this.selectionEnd),
          startLine = start.lineIndex,
          endLine = end.lineIndex;
      for (var i = startLine; i <= endLine; i++) {
        var lineOffset = this._getLineLeftOffset(this._getLineWidth(ctx, i)) || 0,
            lineHeight = this._getHeightOfLine(this.ctx, i),
            realLineHeight = 0, boxWidth = 0, line = this._textLines[i];

        if (i === startLine) {
          for (var j = 0, len = line.length; j < len; j++) {
            if (j >= start.charIndex && (i !== endLine || j < end.charIndex)) {
              boxWidth += this._getWidthOfChar(ctx, line[j], i, j);
            }
            if (j < start.charIndex) {
              lineOffset += this._getWidthOfChar(ctx, line[j], i, j);
            }
          }
          if (j === line.length) {
            boxWidth -= this._getWidthOfCharSpacing();
          }
        }
        else if (i > startLine && i < endLine) {
          boxWidth += this._getLineWidth(ctx, i) || 5;
        }
        else if (i === endLine) {
          for (var j2 = 0, j2len = end.charIndex; j2 < j2len; j2++) {
            boxWidth += this._getWidthOfChar(ctx, line[j2], i, j2);
          }
          if (end.charIndex === line.length) {
            boxWidth -= this._getWidthOfCharSpacing();
          }
        }
        realLineHeight = lineHeight;
        if (this.lineHeight < 1 || (i === endLine && this.lineHeight > 1)) {
          lineHeight /= this.lineHeight;
        }
        ctx.fillRect(
          boundaries.left + lineOffset,
          boundaries.top + boundaries.topOffset,
          boxWidth,
          lineHeight);

        boundaries.topOffset += realLineHeight;
      }
    },

    /**
     * @private
     * @param {String} method
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {String} line Content of the line
     * @param {Number} left
     * @param {Number} top
     * @param {Number} lineIndex
     * @param {Number} charOffset
     */
    _renderChars: function(method, ctx, line, left, top, lineIndex, charOffset) {

      if (this.isEmptyStyles()) {
        return this._renderCharsFast(method, ctx, line, left, top);
      }

      charOffset = charOffset || 0;

      // set proper line offset
      var lineHeight = this._getHeightOfLine(ctx, lineIndex),
          prevStyle,
          thisStyle,
          charsToRender = '';

      ctx.save();
      top -= lineHeight / this.lineHeight * this._fontSizeFraction;
      for (var i = charOffset, len = line.length + charOffset; i <= len; i++) {
        prevStyle = prevStyle || this.getCurrentCharStyle(lineIndex, i);
        thisStyle = this.getCurrentCharStyle(lineIndex, i + 1);

        if (this._hasStyleChanged(prevStyle, thisStyle) || i === len) {
          this._renderChar(method, ctx, lineIndex, i - 1, charsToRender, left, top, lineHeight);
          charsToRender = '';
          prevStyle = thisStyle;
        }
        charsToRender += line[i - charOffset];
      }
      ctx.restore();
    },

    /**
     * @private
     * @param {String} method
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {String} line Content of the line
     * @param {Number} left Left coordinate
     * @param {Number} top Top coordinate
     */
    _renderCharsFast: function(method, ctx, line, left, top) {

      if (method === 'fillText' && this.fill) {
        this.callSuper('_renderChars', method, ctx, line, left, top);
      }
      if (method === 'strokeText' && ((this.stroke && this.strokeWidth > 0) || this.skipFillStrokeCheck)) {
        this.callSuper('_renderChars', method, ctx, line, left, top);
      }
    },

    /**
     * @private
     * @param {String} method
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Number} lineIndex
     * @param {Number} i
     * @param {String} _char
     * @param {Number} left Left coordinate
     * @param {Number} top Top coordinate
     * @param {Number} lineHeight Height of the line
     */
    _renderChar: function(method, ctx, lineIndex, i, _char, left, top, lineHeight) {
      var charWidth, charHeight, shouldFill, shouldStroke,
          decl = this._getStyleDeclaration(lineIndex, i),
          offset, textDecoration, chars;

      if (decl) {
        charHeight = this._getHeightOfChar(ctx, _char, lineIndex, i);
        shouldStroke = decl.stroke;
        shouldFill = decl.fill;
        textDecoration = decl.textDecoration;
      }
      else {
        charHeight = this.fontSize;
      }

      shouldStroke = (shouldStroke || this.stroke) && method === 'strokeText';
      shouldFill = (shouldFill || this.fill) && method === 'fillText';

      decl && ctx.save();

      charWidth = this._applyCharStylesGetWidth(ctx, _char, lineIndex, i, decl || null);
      textDecoration = textDecoration || this.textDecoration;

      if (decl && decl.textBackgroundColor) {
        this._removeShadow(ctx);
      }
      if (this.charSpacing !== 0) {
        chars = _char.split('');
        charWidth = 0;
        for (var j = 0, len = chars.length, char; j < len; j++) {
          char = chars[j];
          shouldFill && ctx.fillText(char, left + charWidth, top);
          shouldStroke && ctx.strokeText(char, left + charWidth, top);
          charWidth += ctx.measureText(char).width + this._getWidthOfCharSpacing();
        }
      }
      else {
        shouldFill && ctx.fillText(_char, left, top);
        shouldStroke && ctx.strokeText(_char, left, top);
      }

      if (textDecoration || textDecoration !== '') {
        offset = this._fontSizeFraction * lineHeight / this.lineHeight;
        this._renderCharDecoration(ctx, textDecoration, left, top, offset, charWidth, charHeight);
      }

      decl && ctx.restore();
      ctx.translate(charWidth, 0);
    },

    /**
     * @private
     * @param {Object} prevStyle
     * @param {Object} thisStyle
     */
    _hasStyleChanged: function(prevStyle, thisStyle) {
      return (prevStyle.fill !== thisStyle.fill ||
              prevStyle.fontSize !== thisStyle.fontSize ||
              prevStyle.textBackgroundColor !== thisStyle.textBackgroundColor ||
              prevStyle.textDecoration !== thisStyle.textDecoration ||
              prevStyle.fontFamily !== thisStyle.fontFamily ||
              prevStyle.fontWeight !== thisStyle.fontWeight ||
              prevStyle.fontStyle !== thisStyle.fontStyle ||
              prevStyle.stroke !== thisStyle.stroke ||
              prevStyle.strokeWidth !== thisStyle.strokeWidth
      );
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderCharDecoration: function(ctx, textDecoration, left, top, offset, charWidth, charHeight) {

      if (!textDecoration) {
        return;
      }

      var decorationWeight = charHeight / 15,
          positions = {
            underline: top + charHeight / 10,
            'line-through': top - charHeight * (this._fontSizeFraction + this._fontSizeMult - 1) + decorationWeight,
            overline: top - (this._fontSizeMult - this._fontSizeFraction) * charHeight
          },
          decorations = ['underline', 'line-through', 'overline'], i, decoration;

      for (i = 0; i < decorations.length; i++) {
        decoration = decorations[i];
        if (textDecoration.indexOf(decoration) > -1) {
          ctx.fillRect(left, positions[decoration], charWidth , decorationWeight);
        }
      }
    },

    /**
     * @private
     * @param {String} method
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {String} line
     * @param {Number} left
     * @param {Number} top
     * @param {Number} lineIndex
     */
    _renderTextLine: function(method, ctx, line, left, top, lineIndex) {
      // to "cancel" this.fontSize subtraction in fabric.Text#_renderTextLine
      // the adding 0.03 is just to align text with itext by overlap test
      if (!this.isEmptyStyles()) {
        top += this.fontSize * (this._fontSizeFraction + 0.03);
      }
      this.callSuper('_renderTextLine', method, ctx, line, left, top, lineIndex);
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderTextDecoration: function(ctx) {
      if (this.isEmptyStyles()) {
        return this.callSuper('_renderTextDecoration', ctx);
      }
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _renderTextLinesBackground: function(ctx) {
      this.callSuper('_renderTextLinesBackground', ctx);

      var lineTopOffset = 0, heightOfLine,
          lineWidth, lineLeftOffset,
          leftOffset = this._getLeftOffset(),
          topOffset = this._getTopOffset(),
          line, _char, style;

      for (var i = 0, len = this._textLines.length; i < len; i++) {
        heightOfLine = this._getHeightOfLine(ctx, i);
        line = this._textLines[i];

        if (line === '' || !this.styles || !this._getLineStyle(i)) {
          lineTopOffset += heightOfLine;
          continue;
        }

        lineWidth = this._getLineWidth(ctx, i);
        lineLeftOffset = this._getLineLeftOffset(lineWidth);

        for (var j = 0, jlen = line.length; j < jlen; j++) {
          style = this._getStyleDeclaration(i, j);
          if (!style || !style.textBackgroundColor) {
            continue;
          }
          _char = line[j];

          ctx.fillStyle = style.textBackgroundColor;

          ctx.fillRect(
            leftOffset + lineLeftOffset + this._getWidthOfCharsAt(ctx, i, j),
            topOffset + lineTopOffset,
            this._getWidthOfChar(ctx, _char, i, j) + 1,
            heightOfLine / this.lineHeight
          );
        }
        lineTopOffset += heightOfLine;
      }
    },

    /**
     * @private
     */
    _getCacheProp: function(_char, styleDeclaration) {
      return _char +
             styleDeclaration.fontSize +
             styleDeclaration.fontWeight +
             styleDeclaration.fontStyle;
    },

    /**
     * @private
     * @param {String} fontFamily name
     * @return {Object} reference to cache
     */
    _getFontCache: function(fontFamily) {
      if (!fabric.charWidthsCache[fontFamily]) {
        fabric.charWidthsCache[fontFamily] = { };
      }
      return fabric.charWidthsCache[fontFamily];
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {String} _char
     * @param {Number} lineIndex
     * @param {Number} charIndex
     * @param {Object} [decl]
     */
    _applyCharStylesGetWidth: function(ctx, _char, lineIndex, charIndex, decl) {
      var charDecl = decl || this._getStyleDeclaration(lineIndex, charIndex),
          styleDeclaration = clone(charDecl),
          width, cacheProp, charWidthsCache;

      this._applyFontStyles(styleDeclaration);
      charWidthsCache = this._getFontCache(styleDeclaration.fontFamily);
      cacheProp = this._getCacheProp(_char, styleDeclaration);

      // short-circuit if no styles for this char
      // global style from object is always applyed and handled by save and restore
      if (!charDecl && charWidthsCache[cacheProp] && this.caching) {
        return charWidthsCache[cacheProp];
      }

      if (typeof styleDeclaration.shadow === 'string') {
        styleDeclaration.shadow = new fabric.Shadow(styleDeclaration.shadow);
      }

      var fill = styleDeclaration.fill || this.fill;
      ctx.fillStyle = fill.toLive
        ? fill.toLive(ctx, this)
        : fill;

      if (styleDeclaration.stroke) {
        ctx.strokeStyle = (styleDeclaration.stroke && styleDeclaration.stroke.toLive)
          ? styleDeclaration.stroke.toLive(ctx, this)
          : styleDeclaration.stroke;
      }

      ctx.lineWidth = styleDeclaration.strokeWidth || this.strokeWidth;
      ctx.font = this._getFontDeclaration.call(styleDeclaration);

      //if we want this._setShadow.call to work with styleDeclarion
      //we have to add those references
      if (styleDeclaration.shadow) {
        styleDeclaration.scaleX = this.scaleX;
        styleDeclaration.scaleY = this.scaleY;
        styleDeclaration.canvas = this.canvas;
        this._setShadow.call(styleDeclaration, ctx);
      }

      if (!this.caching || !charWidthsCache[cacheProp]) {
        width = ctx.measureText(_char).width;
        this.caching && (charWidthsCache[cacheProp] = width);
        return width;
      }

      return charWidthsCache[cacheProp];
    },

    /**
     * @private
     * @param {Object} styleDeclaration
     */
    _applyFontStyles: function(styleDeclaration) {
      if (!styleDeclaration.fontFamily) {
        styleDeclaration.fontFamily = this.fontFamily;
      }
      if (!styleDeclaration.fontSize) {
        styleDeclaration.fontSize = this.fontSize;
      }
      if (!styleDeclaration.fontWeight) {
        styleDeclaration.fontWeight = this.fontWeight;
      }
      if (!styleDeclaration.fontStyle) {
        styleDeclaration.fontStyle = this.fontStyle;
      }
    },

    /**
     * @param {Number} lineIndex
     * @param {Number} charIndex
     * @param {Boolean} [returnCloneOrEmpty=false]
     * @private
     */
    _getStyleDeclaration: function(lineIndex, charIndex, returnCloneOrEmpty) {
      if (returnCloneOrEmpty) {
        return (this.styles[lineIndex] && this.styles[lineIndex][charIndex])
          ? clone(this.styles[lineIndex][charIndex])
          : { };
      }

      return this.styles[lineIndex] && this.styles[lineIndex][charIndex] ? this.styles[lineIndex][charIndex] : null;
    },

    /**
     * @param {Number} lineIndex
     * @param {Number} charIndex
     * @param {Object} style
     * @private
     */
    _setStyleDeclaration: function(lineIndex, charIndex, style) {
      this.styles[lineIndex][charIndex] = style;
    },

    /**
     *
     * @param {Number} lineIndex
     * @param {Number} charIndex
     * @private
     */
    _deleteStyleDeclaration: function(lineIndex, charIndex) {
      delete this.styles[lineIndex][charIndex];
    },

    /**
     * @param {Number} lineIndex
     * @private
     */
    _getLineStyle: function(lineIndex) {
      return this.styles[lineIndex];
    },

    /**
     * @param {Number} lineIndex
     * @param {Object} style
     * @private
     */
    _setLineStyle: function(lineIndex, style) {
      this.styles[lineIndex] = style;
    },

    /**
     * @param {Number} lineIndex
     * @private
     */
    _deleteLineStyle: function(lineIndex) {
      delete this.styles[lineIndex];
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _getWidthOfChar: function(ctx, _char, lineIndex, charIndex) {
      if (!this._isMeasuring && this.textAlign === 'justify' && this._reSpacesAndTabs.test(_char)) {
        return this._getWidthOfSpace(ctx, lineIndex);
      }
      ctx.save();
      var width = this._applyCharStylesGetWidth(ctx, _char, lineIndex, charIndex);
      if (this.charSpacing !== 0) {
        width += this._getWidthOfCharSpacing();
      }
      ctx.restore();
      return width;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Number} lineIndex
     * @param {Number} charIndex
     */
    _getHeightOfChar: function(ctx, lineIndex, charIndex) {
      var style = this._getStyleDeclaration(lineIndex, charIndex);
      return style && style.fontSize ? style.fontSize : this.fontSize;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Number} lineIndex
     * @param {Number} charIndex
     */
    _getWidthOfCharsAt: function(ctx, lineIndex, charIndex) {
      var width = 0, i, _char;
      for (i = 0; i < charIndex; i++) {
        _char = this._textLines[lineIndex][i];
        width += this._getWidthOfChar(ctx, _char, lineIndex, i);
      }
      return width;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Number} lineIndex line number
     * @return {Number} Line width
     */
    _measureLine: function(ctx, lineIndex) {
      this._isMeasuring = true;
      var width = this._getWidthOfCharsAt(ctx, lineIndex, this._textLines[lineIndex].length);
      if (this.charSpacing !== 0) {
        width -= this._getWidthOfCharSpacing();
      }
      this._isMeasuring = false;
      return width;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {Number} lineIndex
     */
    _getWidthOfSpace: function (ctx, lineIndex) {
      if (this.__widthOfSpace[lineIndex]) {
        return this.__widthOfSpace[lineIndex];
      }
      var line = this._textLines[lineIndex],
          wordsWidth = this._getWidthOfWords(ctx, line, lineIndex, 0),
          widthDiff = this.width - wordsWidth,
          numSpaces = line.length - line.replace(this._reSpacesAndTabs, '').length,
          width = Math.max(widthDiff / numSpaces, ctx.measureText(' ').width);
      this.__widthOfSpace[lineIndex] = width;
      return width;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     * @param {String} line
     * @param {Number} lineIndex
     * @param {Number} charOffset
     */
    _getWidthOfWords: function (ctx, line, lineIndex, charOffset) {
      var width = 0;

      for (var charIndex = 0; charIndex < line.length; charIndex++) {
        var _char = line[charIndex];

        if (!_char.match(/\s/)) {
          width += this._getWidthOfChar(ctx, _char, lineIndex, charIndex + charOffset);
        }
      }

      return width;
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _getHeightOfLine: function(ctx, lineIndex) {
      if (this.__lineHeights[lineIndex]) {
        return this.__lineHeights[lineIndex];
      }

      var line = this._textLines[lineIndex],
          maxHeight = this._getHeightOfChar(ctx, lineIndex, 0);

      for (var i = 1, len = line.length; i < len; i++) {
        var currentCharHeight = this._getHeightOfChar(ctx, lineIndex, i);
        if (currentCharHeight > maxHeight) {
          maxHeight = currentCharHeight;
        }
      }
      this.__lineHeights[lineIndex] = maxHeight * this.lineHeight * this._fontSizeMult;
      return this.__lineHeights[lineIndex];
    },

    /**
     * @private
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    _getTextHeight: function(ctx) {
      var lineHeight, height = 0;
      for (var i = 0, len = this._textLines.length; i < len; i++) {
        lineHeight = this._getHeightOfLine(ctx, i);
        height += (i === len - 1 ? lineHeight / this.lineHeight : lineHeight);
      }
      return height;
    },

    /**
     * Returns object representation of an instance
     * @method toObject
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject: function(propertiesToInclude) {
      var clonedStyles = { }, i, j, row;
      for (i in this.styles) {
        row = this.styles[i];
        clonedStyles[i] = { };
        for (j in row) {
          clonedStyles[i][j] = clone(row[j]);
        }
      }
      return fabric.util.object.extend(this.callSuper('toObject', propertiesToInclude), {
        styles: clonedStyles
      });
    }
  });

  /**
   * Returns fabric.IText instance from an object representation
   * @static
   * @memberOf fabric.IText
   * @param {Object} object Object to create an instance from
   * @return {fabric.IText} instance of fabric.IText
   */
  fabric.IText.fromObject = function(object) {
    return new fabric.IText(object.text, clone(object));
  };
})();


(function() {

  var clone = fabric.util.object.clone;

  fabric.util.object.extend(fabric.IText.prototype, /** @lends fabric.IText.prototype */ {

    /**
     * Initializes all the interactive behavior of IText
     */
    initBehavior: function() {
      this.initAddedHandler();
      this.initRemovedHandler();
      this.initCursorSelectionHandlers();
      this.initDoubleClickSimulation();
    },

    /**
     * Initializes "selected" event handler
     */
    initSelectedHandler: function() {
      this.on('selected', function() {

        var _this = this;
        setTimeout(function() {
          _this.selected = true;
        }, 100);
      });
    },

    /**
     * Initializes "added" event handler
     */
    initAddedHandler: function() {
      var _this = this;
      this.on('added', function() {
        if (this.canvas && !this.canvas._hasITextHandlers) {
          this.canvas._hasITextHandlers = true;
          this._initCanvasHandlers();
        }

        // Track IText instances per-canvas. Only register in this array once added
        // to a canvas; we don't want to leak a reference to the instance forever
        // simply because it existed at some point.
        // (Might be added to a collection, but not on a canvas.)
        if (_this.canvas) {
          _this.canvas._iTextInstances = _this.canvas._iTextInstances || [];
          _this.canvas._iTextInstances.push(_this);
        }
      });
    },

    initRemovedHandler: function() {
      var _this = this;
      this.on('removed', function() {
        // (Might be removed from a collection, but not on a canvas.)
        if (_this.canvas) {
          _this.canvas._iTextInstances = _this.canvas._iTextInstances || [];
          fabric.util.removeFromArray(_this.canvas._iTextInstances, _this);
        }
      });
    },

    /**
     * @private
     */
    _initCanvasHandlers: function() {
      var _this = this;

      this.canvas.on('selection:cleared', function() {
        fabric.IText.prototype.exitEditingOnOthers(_this.canvas);
      });

      this.canvas.on('mouse:up', function() {
        if (_this.canvas._iTextInstances) {
          _this.canvas._iTextInstances.forEach(function(obj) {
            obj.__isMousedown = false;
          });
        }
      });

      this.canvas.on('object:selected', function() {
        fabric.IText.prototype.exitEditingOnOthers(_this.canvas);
      });
    },

    /**
     * @private
     */
    _tick: function() {
      this._currentTickState = this._animateCursor(this, 1, this.cursorDuration, '_onTickComplete');
    },

    /**
     * @private
     */
    _animateCursor: function(obj, targetOpacity, duration, completeMethod) {

      var tickState;

      tickState = {
        isAborted: false,
        abort: function() {
          this.isAborted = true;
        },
      };

      obj.animate('_currentCursorOpacity', targetOpacity, {
        duration: duration,
        onComplete: function() {
          if (!tickState.isAborted) {
            obj[completeMethod]();
          }
        },
        onChange: function() {
          // we do not want to animate a selection, only cursor
          if (obj.canvas && obj.selectionStart === obj.selectionEnd) {
            obj.renderCursorOrSelection();
          }
        },
        abort: function() {
          return tickState.isAborted;
        }
      });
      return tickState;
    },

    /**
     * @private
     */
    _onTickComplete: function() {

      var _this = this;

      if (this._cursorTimeout1) {
        clearTimeout(this._cursorTimeout1);
      }
      this._cursorTimeout1 = setTimeout(function() {
        _this._currentTickCompleteState = _this._animateCursor(_this, 0, this.cursorDuration / 2, '_tick');
      }, 100);
    },

    /**
     * Initializes delayed cursor
     */
    initDelayedCursor: function(restart) {
      var _this = this,
          delay = restart ? 0 : this.cursorDelay;

      this.abortCursorAnimation();
      this._currentCursorOpacity = 1;
      this._cursorTimeout2 = setTimeout(function() {
        _this._tick();
      }, delay);
    },

    /**
     * Aborts cursor animation and clears all timeouts
     */
    abortCursorAnimation: function() {
      var shouldClear = this._currentTickState || this._currentTickCompleteState;
      this._currentTickState && this._currentTickState.abort();
      this._currentTickCompleteState && this._currentTickCompleteState.abort();

      clearTimeout(this._cursorTimeout1);
      clearTimeout(this._cursorTimeout2);

      this._currentCursorOpacity = 0;
      // to clear just itext area we need to transform the context
      // it may not be worth it
      if (shouldClear) {
        this.canvas && this.canvas.clearContext(this.canvas.contextTop || this.ctx);
      }

    },

    /**
     * Selects entire text
     */
    selectAll: function() {
      this.selectionStart = 0;
      this.selectionEnd = this.text.length;
      this._fireSelectionChanged();
      this._updateTextarea();
    },

    /**
     * Returns selected text
     * @return {String}
     */
    getSelectedText: function() {
      return this.text.slice(this.selectionStart, this.selectionEnd);
    },

    /**
     * Find new selection index representing start of current word according to current selection index
     * @param {Number} startFrom Surrent selection index
     * @return {Number} New selection index
     */
    findWordBoundaryLeft: function(startFrom) {
      var offset = 0, index = startFrom - 1;

      // remove space before cursor first
      if (this._reSpace.test(this.text.charAt(index))) {
        while (this._reSpace.test(this.text.charAt(index))) {
          offset++;
          index--;
        }
      }
      while (/\S/.test(this.text.charAt(index)) && index > -1) {
        offset++;
        index--;
      }

      return startFrom - offset;
    },

    /**
     * Find new selection index representing end of current word according to current selection index
     * @param {Number} startFrom Current selection index
     * @return {Number} New selection index
     */
    findWordBoundaryRight: function(startFrom) {
      var offset = 0, index = startFrom;

      // remove space after cursor first
      if (this._reSpace.test(this.text.charAt(index))) {
        while (this._reSpace.test(this.text.charAt(index))) {
          offset++;
          index++;
        }
      }
      while (/\S/.test(this.text.charAt(index)) && index < this.text.length) {
        offset++;
        index++;
      }

      return startFrom + offset;
    },

    /**
     * Find new selection index representing start of current line according to current selection index
     * @param {Number} startFrom Current selection index
     * @return {Number} New selection index
     */
    findLineBoundaryLeft: function(startFrom) {
      var offset = 0, index = startFrom - 1;

      while (!/\n/.test(this.text.charAt(index)) && index > -1) {
        offset++;
        index--;
      }

      return startFrom - offset;
    },

    /**
     * Find new selection index representing end of current line according to current selection index
     * @param {Number} startFrom Current selection index
     * @return {Number} New selection index
     */
    findLineBoundaryRight: function(startFrom) {
      var offset = 0, index = startFrom;

      while (!/\n/.test(this.text.charAt(index)) && index < this.text.length) {
        offset++;
        index++;
      }

      return startFrom + offset;
    },

    /**
     * Returns number of newlines in selected text
     * @return {Number} Number of newlines in selected text
     */
    getNumNewLinesInSelectedText: function() {
      var selectedText = this.getSelectedText(),
          numNewLines  = 0;

      for (var i = 0, len = selectedText.length; i < len; i++) {
        if (selectedText[i] === '\n') {
          numNewLines++;
        }
      }
      return numNewLines;
    },

    /**
     * Finds index corresponding to beginning or end of a word
     * @param {Number} selectionStart Index of a character
     * @param {Number} direction 1 or -1
     * @return {Number} Index of the beginning or end of a word
     */
    searchWordBoundary: function(selectionStart, direction) {
      var index     = this._reSpace.test(this.text.charAt(selectionStart)) ? selectionStart - 1 : selectionStart,
          _char     = this.text.charAt(index),
          reNonWord = /[ \n\.,;!\?\-]/;

      while (!reNonWord.test(_char) && index > 0 && index < this.text.length) {
        index += direction;
        _char = this.text.charAt(index);
      }
      if (reNonWord.test(_char) && _char !== '\n') {
        index += direction === 1 ? 0 : 1;
      }
      return index;
    },

    /**
     * Selects a word based on the index
     * @param {Number} selectionStart Index of a character
     */
    selectWord: function(selectionStart) {
      selectionStart = selectionStart || this.selectionStart;
      var newSelectionStart = this.searchWordBoundary(selectionStart, -1), /* search backwards */
          newSelectionEnd = this.searchWordBoundary(selectionStart, 1); /* search forward */

      this.selectionStart = newSelectionStart;
      this.selectionEnd = newSelectionEnd;
      this._fireSelectionChanged();
      this._updateTextarea();
      this.renderCursorOrSelection();
    },

    /**
     * Selects a line based on the index
     * @param {Number} selectionStart Index of a character
     */
    selectLine: function(selectionStart) {
      selectionStart = selectionStart || this.selectionStart;
      var newSelectionStart = this.findLineBoundaryLeft(selectionStart),
          newSelectionEnd = this.findLineBoundaryRight(selectionStart);

      this.selectionStart = newSelectionStart;
      this.selectionEnd = newSelectionEnd;
      this._fireSelectionChanged();
      this._updateTextarea();
    },

    /**
     * Enters editing state
     * @return {fabric.IText} thisArg
     * @chainable
     */
    enterEditing: function(e) {
      if (this.isEditing || !this.editable) {
        return;
      }

      if (this.canvas) {
        this.exitEditingOnOthers(this.canvas);
      }

      this.isEditing = true;

      this.initHiddenTextarea(e);
      this.hiddenTextarea.focus();
      this._updateTextarea();
      this._saveEditingProps();
      this._setEditingProps();
      this._textBeforeEdit = this.text;

      this._tick();
      this.fire('editing:entered');

      if (!this.canvas) {
        return this;
      }
      this.canvas.fire('text:editing:entered', { target: this });
      this.canvas.renderAll();
      this.initMouseMoveHandler();
      return this;
    },

    exitEditingOnOthers: function(canvas) {
      if (canvas._iTextInstances) {
        canvas._iTextInstances.forEach(function(obj) {
          obj.selected = false;
          if (obj.isEditing) {
            obj.exitEditing();
          }
        });
      }
    },

    /**
     * Initializes "mousemove" event handler
     */
    initMouseMoveHandler: function() {
      this.canvas.on('mouse:move', this.mouseMoveHandler.bind(this));
    },

    /**
     * @private
     */
    mouseMoveHandler: function(options) {
      if (!this.__isMousedown || !this.isEditing) {
        return;
      }

      var newSelectionStart = this.getSelectionStartFromPointer(options.e),
          currentStart = this.selectionStart,
          currentEnd = this.selectionEnd;
      if (newSelectionStart === this.__selectionStartOnMouseDown) {
        return;
      }
      if (newSelectionStart > this.__selectionStartOnMouseDown) {
        this.selectionStart = this.__selectionStartOnMouseDown;
        this.selectionEnd = newSelectionStart;
      }
      else {
        this.selectionStart = newSelectionStart;
        this.selectionEnd = this.__selectionStartOnMouseDown;
      }
      if (this.selectionStart !== currentStart || this.selectionEnd !== currentEnd) {
        this._fireSelectionChanged();
        this._updateTextarea();
        this.renderCursorOrSelection();
      }
    },

    /**
     * @private
     */
    _setEditingProps: function() {
      this.hoverCursor = 'text';

      if (this.canvas) {
        this.canvas.defaultCursor = this.canvas.moveCursor = 'text';
      }

      this.borderColor = this.editingBorderColor;

      this.hasControls = this.selectable = false;
      this.lockMovementX = this.lockMovementY = true;
    },

    /**
     * @private
     */
    _updateTextarea: function() {
      if (!this.hiddenTextarea || this.inCompositionMode) {
        return;
      }
      this.cursorOffsetCache = { };
      this.hiddenTextarea.value = this.text;
      this.hiddenTextarea.selectionStart = this.selectionStart;
      this.hiddenTextarea.selectionEnd = this.selectionEnd;
      if (this.selectionStart === this.selectionEnd) {
        var style = this._calcTextareaPosition();
        this.hiddenTextarea.style.left = style.left;
        this.hiddenTextarea.style.top = style.top;
        this.hiddenTextarea.style.fontSize = style.fontSize;
      }
    },

    /**
     * @private
     * @return {Object} style contains style for hiddenTextarea
     */
    _calcTextareaPosition: function() {
      if (!this.canvas) {
        return { x: 1, y: 1 };
      }
      var chars = this.text.split(''),
          boundaries = this._getCursorBoundaries(chars, 'cursor'),
          cursorLocation = this.get2DCursorLocation(),
          lineIndex = cursorLocation.lineIndex,
          charIndex = cursorLocation.charIndex,
          charHeight = this.getCurrentCharFontSize(lineIndex, charIndex),
          leftOffset = (lineIndex === 0 && charIndex === 0)
                    ? this._getLineLeftOffset(this._getLineWidth(this.ctx, lineIndex))
                    : boundaries.leftOffset,
          m = this.calcTransformMatrix(),
          p = {
            x: boundaries.left + leftOffset,
            y: boundaries.top + boundaries.topOffset + charHeight
          },
          upperCanvas = this.canvas.upperCanvasEl,
          maxWidth = upperCanvas.width - charHeight,
          maxHeight = upperCanvas.height - charHeight;

      p = fabric.util.transformPoint(p, m);
      p = fabric.util.transformPoint(p, this.canvas.viewportTransform);

      if (p.x < 0) {
        p.x = 0;
      }
      if (p.x > maxWidth) {
        p.x = maxWidth;
      }
      if (p.y < 0) {
        p.y = 0;
      }
      if (p.y > maxHeight) {
        p.y = maxHeight;
      }

      return { left: p.x + 'px', top: p.y + 'px', fontSize: charHeight };
    },

    /**
     * @private
     */
    _saveEditingProps: function() {
      this._savedProps = {
        hasControls: this.hasControls,
        borderColor: this.borderColor,
        lockMovementX: this.lockMovementX,
        lockMovementY: this.lockMovementY,
        hoverCursor: this.hoverCursor,
        defaultCursor: this.canvas && this.canvas.defaultCursor,
        moveCursor: this.canvas && this.canvas.moveCursor
      };
    },

    /**
     * @private
     */
    _restoreEditingProps: function() {
      if (!this._savedProps) {
        return;
      }

      this.hoverCursor = this._savedProps.overCursor;
      this.hasControls = this._savedProps.hasControls;
      this.borderColor = this._savedProps.borderColor;
      this.lockMovementX = this._savedProps.lockMovementX;
      this.lockMovementY = this._savedProps.lockMovementY;

      if (this.canvas) {
        this.canvas.defaultCursor = this._savedProps.defaultCursor;
        this.canvas.moveCursor = this._savedProps.moveCursor;
      }
    },

    /**
     * Exits from editing state
     * @return {fabric.IText} thisArg
     * @chainable
     */
    exitEditing: function() {
      var isTextChanged = (this._textBeforeEdit !== this.text);
      this.selected = false;
      this.isEditing = false;
      this.selectable = true;

      this.selectionEnd = this.selectionStart;
      this.hiddenTextarea && this.canvas && this.hiddenTextarea.parentNode.removeChild(this.hiddenTextarea);
      this.hiddenTextarea = null;

      this.abortCursorAnimation();
      this._restoreEditingProps();
      this._currentCursorOpacity = 0;

      this.fire('editing:exited');
      isTextChanged && this.fire('modified');
      if (this.canvas) {
        this.canvas.off('mouse:move', this.mouseMoveHandler);
        this.canvas.fire('text:editing:exited', { target: this });
        isTextChanged && this.canvas.fire('object:modified', { target: this });
      }

      return this;
    },

    /**
     * @private
     */
    _removeExtraneousStyles: function() {
      for (var prop in this.styles) {
        if (!this._textLines[prop]) {
          delete this.styles[prop];
        }
      }
    },

    /**
     * @private
     */
    _removeCharsFromTo: function(start, end) {
      while (end !== start) {
        this._removeSingleCharAndStyle(start + 1);
        end--;
      }
      this.selectionStart = start;
      this.selectionEnd = start;
    },

    _removeSingleCharAndStyle: function(index) {
      var isBeginningOfLine = this.text[index - 1] === '\n',
          indexStyle        = isBeginningOfLine ? index : index - 1;
      this.removeStyleObject(isBeginningOfLine, indexStyle);
      this.text = this.text.slice(0, index - 1) +
        this.text.slice(index);

      this._textLines = this._splitTextIntoLines();
    },

    /**
     * Inserts characters where cursor is (replacing selection if one exists)
     * @param {String} _chars Characters to insert
     * @param {Boolean} useCopiedStyle use fabric.copiedTextStyle
     */
    insertChars: function(_chars, useCopiedStyle) {
      var style;

      if (this.selectionEnd - this.selectionStart > 1) {
        this._removeCharsFromTo(this.selectionStart, this.selectionEnd);
      }
      //short circuit for block paste
      if (!useCopiedStyle && this.isEmptyStyles()) {
        this.insertChar(_chars, false);
        return;
      }
      for (var i = 0, len = _chars.length; i < len; i++) {
        if (useCopiedStyle) {
          style = fabric.copiedTextStyle[i];
        }
        this.insertChar(_chars[i], i < len - 1, style);
      }
    },

    /**
     * Inserts a character where cursor is
     * @param {String} _char Characters to insert
     * @param {Boolean} skipUpdate trigger rendering and updates at the end of text insert
     * @param {Object} styleObject Style to be inserted for the new char
     */
    insertChar: function(_char, skipUpdate, styleObject) {
      var isEndOfLine = this.text[this.selectionStart] === '\n';
      this.text = this.text.slice(0, this.selectionStart) +
        _char + this.text.slice(this.selectionEnd);
      this._textLines = this._splitTextIntoLines();
      this.insertStyleObjects(_char, isEndOfLine, styleObject);
      this.selectionStart += _char.length;
      this.selectionEnd = this.selectionStart;
      if (skipUpdate) {
        return;
      }
      this._updateTextarea();
      this.setCoords();
      this._fireSelectionChanged();
      this.fire('changed');
      this.canvas && this.canvas.fire('text:changed', { target: this });
      this.canvas && this.canvas.renderAll();
    },

    /**
     * Inserts new style object
     * @param {Number} lineIndex Index of a line
     * @param {Number} charIndex Index of a char
     * @param {Boolean} isEndOfLine True if it's end of line
     */
    insertNewlineStyleObject: function(lineIndex, charIndex, isEndOfLine) {

      this.shiftLineStyles(lineIndex, +1);

      if (!this.styles[lineIndex + 1]) {
        this.styles[lineIndex + 1] = {};
      }

      var currentCharStyle = {},
          newLineStyles    = {};

      if (this.styles[lineIndex] && this.styles[lineIndex][charIndex - 1]) {
        currentCharStyle = this.styles[lineIndex][charIndex - 1];
      }

      // if there's nothing after cursor,
      // we clone current char style onto the next (otherwise empty) line
      if (isEndOfLine) {
        newLineStyles[0] = clone(currentCharStyle);
        this.styles[lineIndex + 1] = newLineStyles;
      }
      // otherwise we clone styles of all chars
      // after cursor onto the next line, from the beginning
      else {
        for (var index in this.styles[lineIndex]) {
          if (parseInt(index, 10) >= charIndex) {
            newLineStyles[parseInt(index, 10) - charIndex] = this.styles[lineIndex][index];
            // remove lines from the previous line since they're on a new line now
            delete this.styles[lineIndex][index];
          }
        }
        this.styles[lineIndex + 1] = newLineStyles;
      }
      this._forceClearCache = true;
    },

    /**
     * Inserts style object for a given line/char index
     * @param {Number} lineIndex Index of a line
     * @param {Number} charIndex Index of a char
     * @param {Object} [style] Style object to insert, if given
     */
    insertCharStyleObject: function(lineIndex, charIndex, style) {

      var currentLineStyles       = this.styles[lineIndex],
          currentLineStylesCloned = clone(currentLineStyles);

      if (charIndex === 0 && !style) {
        charIndex = 1;
      }

      // shift all char styles by 1 forward
      // 0,1,2,3 -> (charIndex=2) -> 0,1,3,4 -> (insert 2) -> 0,1,2,3,4
      for (var index in currentLineStylesCloned) {
        var numericIndex = parseInt(index, 10);

        if (numericIndex >= charIndex) {
          currentLineStyles[numericIndex + 1] = currentLineStylesCloned[numericIndex];

          // only delete the style if there was nothing moved there
          if (!currentLineStylesCloned[numericIndex - 1]) {
            delete currentLineStyles[numericIndex];
          }
        }
      }

      this.styles[lineIndex][charIndex] =
        style || clone(currentLineStyles[charIndex - 1]);
      this._forceClearCache = true;
    },

    /**
     * Inserts style object(s)
     * @param {String} _chars Characters at the location where style is inserted
     * @param {Boolean} isEndOfLine True if it's end of line
     * @param {Object} [styleObject] Style to insert
     */
    insertStyleObjects: function(_chars, isEndOfLine, styleObject) {
      // removed shortcircuit over isEmptyStyles

      var cursorLocation = this.get2DCursorLocation(),
          lineIndex      = cursorLocation.lineIndex,
          charIndex      = cursorLocation.charIndex;

      if (!this._getLineStyle(lineIndex)) {
        this._setLineStyle(lineIndex, {});
      }

      if (_chars === '\n') {
        this.insertNewlineStyleObject(lineIndex, charIndex, isEndOfLine);
      }
      else {
        this.insertCharStyleObject(lineIndex, charIndex, styleObject);
      }
    },

    /**
     * Shifts line styles up or down
     * @param {Number} lineIndex Index of a line
     * @param {Number} offset Can be -1 or +1
     */
    shiftLineStyles: function(lineIndex, offset) {
      // shift all line styles by 1 upward
      var clonedStyles = clone(this.styles);
      for (var line in this.styles) {
        var numericLine = parseInt(line, 10);
        if (numericLine > lineIndex) {
          this.styles[numericLine + offset] = clonedStyles[numericLine];
          if (!clonedStyles[numericLine - offset]) {
            delete this.styles[numericLine];
          }
        }
      }
      //TODO: evaluate if delete old style lines with offset -1
    },

    /**
     * Removes style object
     * @param {Boolean} isBeginningOfLine True if cursor is at the beginning of line
     * @param {Number} [index] Optional index. When not given, current selectionStart is used.
     */
    removeStyleObject: function(isBeginningOfLine, index) {

      var cursorLocation = this.get2DCursorLocation(index),
          lineIndex      = cursorLocation.lineIndex,
          charIndex      = cursorLocation.charIndex;

      this._removeStyleObject(isBeginningOfLine, cursorLocation, lineIndex, charIndex);
    },

    _getTextOnPreviousLine: function(lIndex) {
      return this._textLines[lIndex - 1];
    },

    _removeStyleObject: function(isBeginningOfLine, cursorLocation, lineIndex, charIndex) {

      if (isBeginningOfLine) {
        var textOnPreviousLine     = this._getTextOnPreviousLine(cursorLocation.lineIndex),
            newCharIndexOnPrevLine = textOnPreviousLine ? textOnPreviousLine.length : 0;

        if (!this.styles[lineIndex - 1]) {
          this.styles[lineIndex - 1] = {};
        }
        for (charIndex in this.styles[lineIndex]) {
          this.styles[lineIndex - 1][parseInt(charIndex, 10) + newCharIndexOnPrevLine]
            = this.styles[lineIndex][charIndex];
        }
        this.shiftLineStyles(cursorLocation.lineIndex, -1);
      }
      else {
        var currentLineStyles = this.styles[lineIndex];

        if (currentLineStyles) {
          delete currentLineStyles[charIndex];
        }
        var currentLineStylesCloned = clone(currentLineStyles);
        // shift all styles by 1 backwards
        for (var i in currentLineStylesCloned) {
          var numericIndex = parseInt(i, 10);
          if (numericIndex >= charIndex && numericIndex !== 0) {
            currentLineStyles[numericIndex - 1] = currentLineStylesCloned[numericIndex];
            delete currentLineStyles[numericIndex];
          }
        }
      }
    },

    /**
     * Inserts new line
     */
    insertNewline: function() {
      this.insertChars('\n');
    }
  });
})();


fabric.util.object.extend(fabric.IText.prototype, /** @lends fabric.IText.prototype */ {
  /**
   * Initializes "dbclick" event handler
   */
  initDoubleClickSimulation: function() {

    // for double click
    this.__lastClickTime = +new Date();

    // for triple click
    this.__lastLastClickTime = +new Date();

    this.__lastPointer = { };

    this.on('mousedown', this.onMouseDown.bind(this));
  },

  onMouseDown: function(options) {

    this.__newClickTime = +new Date();
    var newPointer = this.canvas.getPointer(options.e);

    if (this.isTripleClick(newPointer)) {
      this.fire('tripleclick', options);
      this._stopEvent(options.e);
    }
    else if (this.isDoubleClick(newPointer)) {
      this.fire('dblclick', options);
      this._stopEvent(options.e);
    }

    this.__lastLastClickTime = this.__lastClickTime;
    this.__lastClickTime = this.__newClickTime;
    this.__lastPointer = newPointer;
    this.__lastIsEditing = this.isEditing;
    this.__lastSelected = this.selected;
  },

  isDoubleClick: function(newPointer) {
    return this.__newClickTime - this.__lastClickTime < 500 &&
        this.__lastPointer.x === newPointer.x &&
        this.__lastPointer.y === newPointer.y && this.__lastIsEditing;
  },

  isTripleClick: function(newPointer) {
    return this.__newClickTime - this.__lastClickTime < 500 &&
        this.__lastClickTime - this.__lastLastClickTime < 500 &&
        this.__lastPointer.x === newPointer.x &&
        this.__lastPointer.y === newPointer.y;
  },

  /**
   * @private
   */
  _stopEvent: function(e) {
    e.preventDefault && e.preventDefault();
    e.stopPropagation && e.stopPropagation();
  },

  /**
   * Initializes event handlers related to cursor or selection
   */
  initCursorSelectionHandlers: function() {
    this.initSelectedHandler();
    this.initMousedownHandler();
    this.initMouseupHandler();
    this.initClicks();
  },

  /**
   * Initializes double and triple click event handlers
   */
  initClicks: function() {
    this.on('dblclick', function(options) {
      this.selectWord(this.getSelectionStartFromPointer(options.e));
    });
    this.on('tripleclick', function(options) {
      this.selectLine(this.getSelectionStartFromPointer(options.e));
    });
  },

  /**
   * Initializes "mousedown" event handler
   */
  initMousedownHandler: function() {
    this.on('mousedown', function(options) {
      if (!this.editable) {
        return;
      }
      var pointer = this.canvas.getPointer(options.e);

      this.__mousedownX = pointer.x;
      this.__mousedownY = pointer.y;
      this.__isMousedown = true;

      if (this.selected) {
        this.setCursorByClick(options.e);
      }

      if (this.isEditing) {
        this.__selectionStartOnMouseDown = this.selectionStart;
        if (this.selectionStart === this.selectionEnd) {
          this.abortCursorAnimation();
        }
        this.renderCursorOrSelection();
      }
    });
  },

  /**
   * @private
   */
  _isObjectMoved: function(e) {
    var pointer = this.canvas.getPointer(e);

    return this.__mousedownX !== pointer.x ||
           this.__mousedownY !== pointer.y;
  },

  /**
   * Initializes "mouseup" event handler
   */
  initMouseupHandler: function() {
    this.on('mouseup', function(options) {
      this.__isMousedown = false;
      if (!this.editable || this._isObjectMoved(options.e)) {
        return;
      }

      if (this.__lastSelected && !this.__corner) {
        this.enterEditing(options.e);
        if (this.selectionStart === this.selectionEnd) {
          this.initDelayedCursor(true);
        }
        else {
          this.renderCursorOrSelection();
        }
      }
      this.selected = true;
    });
  },

  /**
   * Changes cursor location in a text depending on passed pointer (x/y) object
   * @param {Event} e Event object
   */
  setCursorByClick: function(e) {
    var newSelectionStart = this.getSelectionStartFromPointer(e);

    if (e.shiftKey) {
      if (newSelectionStart < this.selectionStart) {
        this.selectionEnd = this.selectionStart;
        this.selectionStart = newSelectionStart;
      }
      else {
        this.selectionEnd = newSelectionStart;
      }
    }
    else {
      this.selectionStart = newSelectionStart;
      this.selectionEnd = newSelectionStart;
    }
    this._fireSelectionChanged();
    this._updateTextarea();
  },

  /**
   * Returns index of a character corresponding to where an object was clicked
   * @param {Event} e Event object
   * @return {Number} Index of a character
   */
  getSelectionStartFromPointer: function(e) {
    var mouseOffset = this.getLocalPointer(e),
        prevWidth = 0,
        width = 0,
        height = 0,
        charIndex = 0,
        newSelectionStart,
        line;

    for (var i = 0, len = this._textLines.length; i < len; i++) {
      line = this._textLines[i];
      height += this._getHeightOfLine(this.ctx, i) * this.scaleY;

      var widthOfLine = this._getLineWidth(this.ctx, i),
          lineLeftOffset = this._getLineLeftOffset(widthOfLine);

      width = lineLeftOffset * this.scaleX;

      for (var j = 0, jlen = line.length; j < jlen; j++) {

        prevWidth = width;

        width += this._getWidthOfChar(this.ctx, line[j], i, this.flipX ? jlen - j : j) *
                 this.scaleX;

        if (height <= mouseOffset.y || width <= mouseOffset.x) {
          charIndex++;
          continue;
        }

        return this._getNewSelectionStartFromOffset(
          mouseOffset, prevWidth, width, charIndex + i, jlen);
      }

      if (mouseOffset.y < height) {
        //this happens just on end of lines.
        return this._getNewSelectionStartFromOffset(
          mouseOffset, prevWidth, width, charIndex + i - 1, jlen);
      }
    }

    // clicked somewhere after all chars, so set at the end
    if (typeof newSelectionStart === 'undefined') {
      return this.text.length;
    }
  },

  /**
   * @private
   */
  _getNewSelectionStartFromOffset: function(mouseOffset, prevWidth, width, index, jlen) {

    var distanceBtwLastCharAndCursor = mouseOffset.x - prevWidth,
        distanceBtwNextCharAndCursor = width - mouseOffset.x,
        offset = distanceBtwNextCharAndCursor > distanceBtwLastCharAndCursor ? 0 : 1,
        newSelectionStart = index + offset;

    // if object is horizontally flipped, mirror cursor location from the end
    if (this.flipX) {
      newSelectionStart = jlen - newSelectionStart;
    }

    if (newSelectionStart > this.text.length) {
      newSelectionStart = this.text.length;
    }

    return newSelectionStart;
  }
});


fabric.util.object.extend(fabric.IText.prototype, /** @lends fabric.IText.prototype */ {

  /**
   * Initializes hidden textarea (needed to bring up keyboard in iOS)
   */
  initHiddenTextarea: function() {
    this.hiddenTextarea = fabric.document.createElement('textarea');
    this.hiddenTextarea.setAttribute('autocapitalize', 'off');
    var style = this._calcTextareaPosition();
    this.hiddenTextarea.style.cssText = 'position: absolute; top: ' + style.top + '; left: ' + style.left + ';'
                                        + ' opacity: 0; width: 0px; height: 0px; z-index: -999;';
    fabric.document.body.appendChild(this.hiddenTextarea);

    fabric.util.addListener(this.hiddenTextarea, 'keydown', this.onKeyDown.bind(this));
    fabric.util.addListener(this.hiddenTextarea, 'keyup', this.onKeyUp.bind(this));
    fabric.util.addListener(this.hiddenTextarea, 'input', this.onInput.bind(this));
    fabric.util.addListener(this.hiddenTextarea, 'copy', this.copy.bind(this));
    fabric.util.addListener(this.hiddenTextarea, 'cut', this.cut.bind(this));
    fabric.util.addListener(this.hiddenTextarea, 'paste', this.paste.bind(this));
    fabric.util.addListener(this.hiddenTextarea, 'compositionstart', this.onCompositionStart.bind(this));
    fabric.util.addListener(this.hiddenTextarea, 'compositionupdate', this.onCompositionUpdate.bind(this));
    fabric.util.addListener(this.hiddenTextarea, 'compositionend', this.onCompositionEnd.bind(this));

    if (!this._clickHandlerInitialized && this.canvas) {
      fabric.util.addListener(this.canvas.upperCanvasEl, 'click', this.onClick.bind(this));
      this._clickHandlerInitialized = true;
    }
  },

  /**
   * @private
   */
  _keysMap: {
    8:  'removeChars',
    9:  'exitEditing',
    27: 'exitEditing',
    13: 'insertNewline',
    33: 'moveCursorUp',
    34: 'moveCursorDown',
    35: 'moveCursorRight',
    36: 'moveCursorLeft',
    37: 'moveCursorLeft',
    38: 'moveCursorUp',
    39: 'moveCursorRight',
    40: 'moveCursorDown',
    46: 'forwardDelete'
  },

  /**
   * @private
   */
  _ctrlKeysMapUp: {
    67: 'copy',
    88: 'cut'
  },

  /**
   * @private
   */
  _ctrlKeysMapDown: {
    65: 'selectAll'
  },

  onClick: function() {
    // No need to trigger click event here, focus is enough to have the keyboard appear on Android
    this.hiddenTextarea && this.hiddenTextarea.focus();
  },

  /**
   * Handles keyup event
   * @param {Event} e Event object
   */
  onKeyDown: function(e) {
    if (!this.isEditing) {
      return;
    }
    if (e.keyCode in this._keysMap) {
      this[this._keysMap[e.keyCode]](e);
    }
    else if ((e.keyCode in this._ctrlKeysMapDown) && (e.ctrlKey || e.metaKey)) {
      this[this._ctrlKeysMapDown[e.keyCode]](e);
    }
    else {
      return;
    }
    e.stopImmediatePropagation();
    e.preventDefault();
    this.canvas && this.canvas.renderAll();
  },

  /**
   * Handles keyup event
   * We handle KeyUp because ie11 and edge have difficulties copy/pasting
   * if a copy/cut event fired, keyup is dismissed
   * @param {Event} e Event object
   */
  onKeyUp: function(e) {
    if (!this.isEditing || this._copyDone) {
      this._copyDone = false;
      return;
    }
    if ((e.keyCode in this._ctrlKeysMapUp) && (e.ctrlKey || e.metaKey)) {
      this[this._ctrlKeysMapUp[e.keyCode]](e);
    }
    else {
      return;
    }
    e.stopImmediatePropagation();
    e.preventDefault();
    this.canvas && this.canvas.renderAll();
  },

  /**
   * Handles onInput event
   * @param {Event} e Event object
   */
  onInput: function(e) {
    if (!this.isEditing || this.inCompositionMode) {
      return;
    }
    var offset = this.selectionStart || 0,
        offsetEnd = this.selectionEnd || 0,
        textLength = this.text.length,
        newTextLength = this.hiddenTextarea.value.length,
        diff, charsToInsert, start;
    if (newTextLength > textLength) {
      //we added some character
      start = this._selectionDirection === 'left' ? offsetEnd : offset;
      diff = newTextLength - textLength;
      charsToInsert = this.hiddenTextarea.value.slice(start, start + diff);
    }
    else {
      //we selected a portion of text and then input something else.
      //Internet explorer does not trigger this else
      diff = newTextLength - textLength + offsetEnd - offset;
      charsToInsert = this.hiddenTextarea.value.slice(offset, offset + diff);
    }
    this.insertChars(charsToInsert);
    e.stopPropagation();
  },

  /**
   * Composition start
   */
  onCompositionStart: function() {
    this.inCompositionMode = true;
    this.prevCompositionLength = 0;
    this.compositionStart = this.selectionStart;
  },

  /**
   * Composition end
   */
  onCompositionEnd: function() {
    this.inCompositionMode = false;
  },

  /**
   * Composition update
   */
  onCompositionUpdate: function(e) {
    var data = e.data;
    this.selectionStart = this.compositionStart;
    this.selectionEnd = this.selectionEnd === this.selectionStart ?
      this.compositionStart + this.prevCompositionLength : this.selectionEnd;
    this.insertChars(data, false);
    this.prevCompositionLength = data.length;
  },

  /**
   * Forward delete
   */
  forwardDelete: function(e) {
    if (this.selectionStart === this.selectionEnd) {
      if (this.selectionStart === this.text.length) {
        return;
      }
      this.moveCursorRight(e);
    }
    this.removeChars(e);
  },

  /**
   * Copies selected text
   * @param {Event} e Event object
   */
  copy: function(e) {
    if (this.selectionStart === this.selectionEnd) {
      //do not cut-copy if no selection
      return;
    }
    var selectedText = this.getSelectedText(),
        clipboardData = this._getClipboardData(e);

    // Check for backward compatibility with old browsers
    if (clipboardData) {
      clipboardData.setData('text', selectedText);
    }

    fabric.copiedText = selectedText;
    fabric.copiedTextStyle = this.getSelectionStyles(
                          this.selectionStart,
                          this.selectionEnd);
    e.stopImmediatePropagation();
    e.preventDefault();
    this._copyDone = true;
  },

  /**
   * Pastes text
   * @param {Event} e Event object
   */
  paste: function(e) {
    var copiedText = null,
        clipboardData = this._getClipboardData(e),
        useCopiedStyle = true;

    // Check for backward compatibility with old browsers
    if (clipboardData) {
      copiedText = clipboardData.getData('text').replace(/\r/g, '');
      if (!fabric.copiedTextStyle || fabric.copiedText !== copiedText) {
        useCopiedStyle = false;
      }
    }
    else {
      copiedText = fabric.copiedText;
    }

    if (copiedText) {
      this.insertChars(copiedText, useCopiedStyle);
    }
    e.stopImmediatePropagation();
    e.preventDefault();
  },

  /**
   * Cuts text
   * @param {Event} e Event object
   */
  cut: function(e) {
    if (this.selectionStart === this.selectionEnd) {
      return;
    }

    this.copy(e);
    this.removeChars(e);
  },

  /**
   * @private
   * @param {Event} e Event object
   * @return {Object} Clipboard data object
   */
  _getClipboardData: function(e) {
    return (e && e.clipboardData) || fabric.window.clipboardData;
  },

  /**
   * Gets start offset of a selection
   * @param {Event} e Event object
   * @param {Boolean} isRight
   * @return {Number}
   */
  getDownCursorOffset: function(e, isRight) {
    var selectionProp = isRight ? this.selectionEnd : this.selectionStart,
        cursorLocation = this.get2DCursorLocation(selectionProp),
        _char, lineLeftOffset, lineIndex = cursorLocation.lineIndex,
        textOnSameLineBeforeCursor = this._textLines[lineIndex].slice(0, cursorLocation.charIndex),
        textOnSameLineAfterCursor = this._textLines[lineIndex].slice(cursorLocation.charIndex),
        textOnNextLine = this._textLines[lineIndex + 1] || '';

    // if on last line, down cursor goes to end of line
    if (lineIndex === this._textLines.length - 1 || e.metaKey || e.keyCode === 34) {

      // move to the end of a text
      return this.text.length - selectionProp;
    }

    var widthOfSameLineBeforeCursor = this._getLineWidth(this.ctx, lineIndex);
    lineLeftOffset = this._getLineLeftOffset(widthOfSameLineBeforeCursor);

    var widthOfCharsOnSameLineBeforeCursor = lineLeftOffset;

    for (var i = 0, len = textOnSameLineBeforeCursor.length; i < len; i++) {
      _char = textOnSameLineBeforeCursor[i];
      widthOfCharsOnSameLineBeforeCursor += this._getWidthOfChar(this.ctx, _char, lineIndex, i);
    }

    var indexOnNextLine = this._getIndexOnNextLine(
      cursorLocation, textOnNextLine, widthOfCharsOnSameLineBeforeCursor);

    return textOnSameLineAfterCursor.length + 1 + indexOnNextLine;
  },

  /**
   * @private
   */
  _getIndexOnNextLine: function(cursorLocation, textOnNextLine, widthOfCharsOnSameLineBeforeCursor) {
    var lineIndex = cursorLocation.lineIndex + 1,
        widthOfNextLine = this._getLineWidth(this.ctx, lineIndex),
        lineLeftOffset = this._getLineLeftOffset(widthOfNextLine),
        widthOfCharsOnNextLine = lineLeftOffset,
        indexOnNextLine = 0,
        foundMatch;

    for (var j = 0, jlen = textOnNextLine.length; j < jlen; j++) {

      var _char = textOnNextLine[j],
          widthOfChar = this._getWidthOfChar(this.ctx, _char, lineIndex, j);

      widthOfCharsOnNextLine += widthOfChar;

      if (widthOfCharsOnNextLine > widthOfCharsOnSameLineBeforeCursor) {

        foundMatch = true;

        var leftEdge = widthOfCharsOnNextLine - widthOfChar,
            rightEdge = widthOfCharsOnNextLine,
            offsetFromLeftEdge = Math.abs(leftEdge - widthOfCharsOnSameLineBeforeCursor),
            offsetFromRightEdge = Math.abs(rightEdge - widthOfCharsOnSameLineBeforeCursor);

        indexOnNextLine = offsetFromRightEdge < offsetFromLeftEdge ? j + 1 : j;

        break;
      }
    }

    // reached end
    if (!foundMatch) {
      indexOnNextLine = textOnNextLine.length;
    }

    return indexOnNextLine;
  },

  /**
   * Moves cursor down
   * @param {Event} e Event object
   */
  moveCursorDown: function(e) {
    if (this.selectionStart >= this.text.length && this.selectionEnd >= this.text.length) {
      return;
    }
    this._moveCursorUpOrDown('Down', e);
  },

  /**
   * Moves cursor down without keeping selection
   * @param {Number} offset
   */
  moveCursorDownWithoutShift: function(offset) {
    this._selectionDirection = 'right';
    this.selectionEnd = this.selectionEnd + offset;
    this.selectionStart = this.selectionEnd;
    return offset !== 0;
  },

  /**
   * private
   */
  swapSelectionPoints: function() {
    var swapSel = this.selectionEnd;
    this.selectionEnd = this.selectionStart;
    this.selectionStart = swapSel;
  },

  /**
   * Moves cursor down while keeping selection
   * @param {Number} offset
   */
  moveCursorDownWithShift: function(offset) {
    if (this.selectionEnd === this.selectionStart) {
      this._selectionDirection = 'right';
    }
    if (this._selectionDirection === 'right') {
      this.selectionEnd += offset;
    }
    else {
      this.selectionStart += offset;
    }
    if (this.selectionEnd < this.selectionStart  && this._selectionDirection === 'left') {
      this.swapSelectionPoints();
      this._selectionDirection = 'right';
    }
    if (this.selectionEnd > this.text.length) {
      this.selectionEnd = this.text.length;
    }
    return offset !== 0;
  },

  /**
   * @param {Event} e Event object
   * @param {Boolean} isRight
   * @return {Number}
   */
  getUpCursorOffset: function(e, isRight) {
    var selectionProp = isRight ? this.selectionEnd : this.selectionStart,
        cursorLocation = this.get2DCursorLocation(selectionProp),
        lineIndex = cursorLocation.lineIndex;
    // if on first line, up cursor goes to start of line
    if (lineIndex === 0 || e.metaKey || e.keyCode === 33) {
      return selectionProp;
    }

    var textOnSameLineBeforeCursor = this._textLines[lineIndex].slice(0, cursorLocation.charIndex),
        textOnPreviousLine = this._textLines[lineIndex - 1] || '',
        _char,
        widthOfSameLineBeforeCursor = this._getLineWidth(this.ctx, cursorLocation.lineIndex),
        lineLeftOffset = this._getLineLeftOffset(widthOfSameLineBeforeCursor),
        widthOfCharsOnSameLineBeforeCursor = lineLeftOffset;

    for (var i = 0, len = textOnSameLineBeforeCursor.length; i < len; i++) {
      _char = textOnSameLineBeforeCursor[i];
      widthOfCharsOnSameLineBeforeCursor += this._getWidthOfChar(this.ctx, _char, lineIndex, i);
    }

    var indexOnPrevLine = this._getIndexOnPrevLine(
      cursorLocation, textOnPreviousLine, widthOfCharsOnSameLineBeforeCursor);

    return textOnPreviousLine.length - indexOnPrevLine + textOnSameLineBeforeCursor.length;
  },

  /**
   * @private
   */
  _getIndexOnPrevLine: function(cursorLocation, textOnPreviousLine, widthOfCharsOnSameLineBeforeCursor) {

    var lineIndex = cursorLocation.lineIndex - 1,
        widthOfPreviousLine = this._getLineWidth(this.ctx, lineIndex),
        lineLeftOffset = this._getLineLeftOffset(widthOfPreviousLine),
        widthOfCharsOnPreviousLine = lineLeftOffset,
        indexOnPrevLine = 0,
        foundMatch;

    for (var j = 0, jlen = textOnPreviousLine.length; j < jlen; j++) {

      var _char = textOnPreviousLine[j],
          widthOfChar = this._getWidthOfChar(this.ctx, _char, lineIndex, j);

      widthOfCharsOnPreviousLine += widthOfChar;

      if (widthOfCharsOnPreviousLine > widthOfCharsOnSameLineBeforeCursor) {

        foundMatch = true;

        var leftEdge = widthOfCharsOnPreviousLine - widthOfChar,
            rightEdge = widthOfCharsOnPreviousLine,
            offsetFromLeftEdge = Math.abs(leftEdge - widthOfCharsOnSameLineBeforeCursor),
            offsetFromRightEdge = Math.abs(rightEdge - widthOfCharsOnSameLineBeforeCursor);

        indexOnPrevLine = offsetFromRightEdge < offsetFromLeftEdge ? j : (j - 1);

        break;
      }
    }

    // reached end
    if (!foundMatch) {
      indexOnPrevLine = textOnPreviousLine.length - 1;
    }

    return indexOnPrevLine;
  },

  /**
   * Moves cursor up
   * @param {Event} e Event object
   */
  moveCursorUp: function(e) {
    if (this.selectionStart === 0 && this.selectionEnd === 0) {
      return;
    }
    this._moveCursorUpOrDown('Up', e);
  },

  /**
   * Moves cursor up or down, fires the events
   * @param {String} direction 'Up' or 'Down'
   * @param {Event} e Event object
   */
  _moveCursorUpOrDown: function(direction, e) {
    var action = 'get' + direction + 'CursorOffset',
        moveAction = 'moveCursor' + direction,
        offset = this[action](e, this._selectionDirection === 'right');
    if (e.shiftKey) {
      moveAction += 'WithShift';
    }
    else {
      moveAction += 'WithoutShift';
    }
    if (this[moveAction](offset)) {
      this.abortCursorAnimation();
      this._currentCursorOpacity = 1;
      this.initDelayedCursor();
      this._fireSelectionChanged();
      this._updateTextarea();
    }
  },

  /**
   * Moves cursor up with shift
   * @param {Number} offset
   */
  moveCursorUpWithShift: function(offset) {
    if (this.selectionEnd === this.selectionStart) {
      this._selectionDirection = 'left';
    }
    if (this._selectionDirection === 'right') {
      this.selectionEnd -= offset;
    }
    else {
      this.selectionStart -= offset;
    }
    if (this.selectionEnd < this.selectionStart && this._selectionDirection === 'right') {
      this.swapSelectionPoints();
      this._selectionDirection = 'left';
    }
    return offset !== 0;
  },

  /**
   * Moves cursor up without shift
   * @param {Number} offset
   */
  moveCursorUpWithoutShift: function(offset) {
    this._selectionDirection = 'left';
    this.selectionStart -= offset;
    this.selectionEnd = this.selectionStart;
    return offset !== 0;
  },

  /**
   * Moves cursor left
   * @param {Event} e Event object
   */
  moveCursorLeft: function(e) {
    if (this.selectionStart === 0 && this.selectionEnd === 0) {
      return;
    }
    this._moveCursorLeftOrRight('Left', e);
  },

  /**
   * @private
   * @return {Boolean} true if a change happened
   */
  _move: function(e, prop, direction) {
    var newValue;
    if (e.altKey) {
      newValue = this['findWordBoundary' + direction](this[prop]);
    }
    else if (e.metaKey || e.keyCode === 35 ||  e.keyCode === 36 ) {
      newValue = this['findLineBoundary' + direction](this[prop]);
    }
    else {
      this[prop] += direction === 'Left' ? -1 : 1;
      return true;
    }
    if (typeof newValue !== undefined && this[prop] !== newValue) {
      this[prop] = newValue;
      return true;
    }
  },

  /**
   * @private
   */
  _moveLeft: function(e, prop) {
    return this._move(e, prop, 'Left');
  },

  /**
   * @private
   */
  _moveRight: function(e, prop) {
    return this._move(e, prop, 'Right');
  },

  /**
   * Moves cursor left without keeping selection
   * @param {Event} e
   */
  moveCursorLeftWithoutShift: function(e) {
    var change = true;
    this._selectionDirection = 'left';

    // only move cursor when there is no selection,
    // otherwise we discard it, and leave cursor on same place
    if (this.selectionEnd === this.selectionStart && this.selectionStart !== 0) {
      change = this._moveLeft(e, 'selectionStart');

    }
    this.selectionEnd = this.selectionStart;
    return change;
  },

  /**
   * Moves cursor left while keeping selection
   * @param {Event} e
   */
  moveCursorLeftWithShift: function(e) {
    if (this._selectionDirection === 'right' && this.selectionStart !== this.selectionEnd) {
      return this._moveLeft(e, 'selectionEnd');
    }
    else if (this.selectionStart !== 0){
      this._selectionDirection = 'left';
      return this._moveLeft(e, 'selectionStart');
    }
  },

  /**
   * Moves cursor right
   * @param {Event} e Event object
   */
  moveCursorRight: function(e) {
    if (this.selectionStart >= this.text.length && this.selectionEnd >= this.text.length) {
      return;
    }
    this._moveCursorLeftOrRight('Right', e);
  },

  /**
   * Moves cursor right or Left, fires event
   * @param {String} direction 'Left', 'Right'
   * @param {Event} e Event object
   */
  _moveCursorLeftOrRight: function(direction, e) {
    var actionName = 'moveCursor' + direction + 'With';
    this._currentCursorOpacity = 1;

    if (e.shiftKey) {
      actionName += 'Shift';
    }
    else {
      actionName += 'outShift';
    }
    if (this[actionName](e)) {
      this.abortCursorAnimation();
      this.initDelayedCursor();
      this._fireSelectionChanged();
      this._updateTextarea();
    }
  },

  /**
   * Moves cursor right while keeping selection
   * @param {Event} e
   */
  moveCursorRightWithShift: function(e) {
    if (this._selectionDirection === 'left' && this.selectionStart !== this.selectionEnd) {
      return this._moveRight(e, 'selectionStart');
    }
    else if (this.selectionEnd !== this.text.length) {
      this._selectionDirection = 'right';
      return this._moveRight(e, 'selectionEnd');
    }
  },

  /**
   * Moves cursor right without keeping selection
   * @param {Event} e Event object
   */
  moveCursorRightWithoutShift: function(e) {
    var changed = true;
    this._selectionDirection = 'right';

    if (this.selectionStart === this.selectionEnd) {
      changed = this._moveRight(e, 'selectionStart');
      this.selectionEnd = this.selectionStart;
    }
    else {
      this.selectionStart = this.selectionEnd;
    }
    return changed;
  },

  /**
   * Removes characters selected by selection
   * @param {Event} e Event object
   */
  removeChars: function(e) {
    if (this.selectionStart === this.selectionEnd) {
      this._removeCharsNearCursor(e);
    }
    else {
      this._removeCharsFromTo(this.selectionStart, this.selectionEnd);
    }

    this.setSelectionEnd(this.selectionStart);

    this._removeExtraneousStyles();

    this.canvas && this.canvas.renderAll();

    this.setCoords();
    this.fire('changed');
    this.canvas && this.canvas.fire('text:changed', { target: this });
  },

  /**
   * @private
   * @param {Event} e Event object
   */
  _removeCharsNearCursor: function(e) {
    if (this.selectionStart === 0) {
      return;
    }
    if (e.metaKey) {
      // remove all till the start of current line
      var leftLineBoundary = this.findLineBoundaryLeft(this.selectionStart);

      this._removeCharsFromTo(leftLineBoundary, this.selectionStart);
      this.setSelectionStart(leftLineBoundary);
    }
    else if (e.altKey) {
      // remove all till the start of current word
      var leftWordBoundary = this.findWordBoundaryLeft(this.selectionStart);

      this._removeCharsFromTo(leftWordBoundary, this.selectionStart);
      this.setSelectionStart(leftWordBoundary);
    }
    else {
      this._removeSingleCharAndStyle(this.selectionStart);
      this.setSelectionStart(this.selectionStart - 1);
    }
  }
});


/* _TO_SVG_START_ */
(function() {
  var toFixed = fabric.util.toFixed,
      NUM_FRACTION_DIGITS = fabric.Object.NUM_FRACTION_DIGITS;

  fabric.util.object.extend(fabric.IText.prototype, /** @lends fabric.IText.prototype */ {

    /**
     * @private
     */
    _setSVGTextLineText: function(lineIndex, textSpans, height, textLeftOffset, textTopOffset, textBgRects) {
      if (!this._getLineStyle(lineIndex)) {
        fabric.Text.prototype._setSVGTextLineText.call(this,
          lineIndex, textSpans, height, textLeftOffset, textTopOffset);
      }
      else {
        this._setSVGTextLineChars(
          lineIndex, textSpans, height, textLeftOffset, textBgRects);
      }
    },

    /**
     * @private
     */
    _setSVGTextLineChars: function(lineIndex, textSpans, height, textLeftOffset, textBgRects) {

      var chars = this._textLines[lineIndex],
          charOffset = 0,
          lineLeftOffset = this._getLineLeftOffset(this._getLineWidth(this.ctx, lineIndex)) - this.width / 2,
          lineOffset = this._getSVGLineTopOffset(lineIndex),
          heightOfLine = this._getHeightOfLine(this.ctx, lineIndex);

      for (var i = 0, len = chars.length; i < len; i++) {
        var styleDecl = this._getStyleDeclaration(lineIndex, i) || { };

        textSpans.push(
          this._createTextCharSpan(
            chars[i], styleDecl, lineLeftOffset, lineOffset.lineTop + lineOffset.offset, charOffset));

        var charWidth = this._getWidthOfChar(this.ctx, chars[i], lineIndex, i);

        if (styleDecl.textBackgroundColor) {
          textBgRects.push(
            this._createTextCharBg(
              styleDecl, lineLeftOffset, lineOffset.lineTop, heightOfLine, charWidth, charOffset));
        }

        charOffset += charWidth;
      }
    },

    /**
     * @private
     */
    _getSVGLineTopOffset: function(lineIndex) {
      var lineTopOffset = 0, lastHeight = 0;
      for (var j = 0; j < lineIndex; j++) {
        lineTopOffset += this._getHeightOfLine(this.ctx, j);
      }
      lastHeight = this._getHeightOfLine(this.ctx, j);
      return {
        lineTop: lineTopOffset,
        offset: (this._fontSizeMult - this._fontSizeFraction) * lastHeight / (this.lineHeight * this._fontSizeMult)
      };
    },

    /**
     * @private
     */
    _createTextCharBg: function(styleDecl, lineLeftOffset, lineTopOffset, heightOfLine, charWidth, charOffset) {
      return [
        //jscs:disable validateIndentation
        '\t\t<rect fill="', styleDecl.textBackgroundColor,
        '" x="', toFixed(lineLeftOffset + charOffset, NUM_FRACTION_DIGITS),
        '" y="', toFixed(lineTopOffset - this.height/2, NUM_FRACTION_DIGITS),
        '" width="', toFixed(charWidth, NUM_FRACTION_DIGITS),
        '" height="', toFixed(heightOfLine / this.lineHeight, NUM_FRACTION_DIGITS),
        '"></rect>\n'
        //jscs:enable validateIndentation
      ].join('');
    },

    /**
     * @private
     */
    _createTextCharSpan: function(_char, styleDecl, lineLeftOffset, lineTopOffset, charOffset) {

      var fillStyles = this.getSvgStyles.call(fabric.util.object.extend({
        visible: true,
        fill: this.fill,
        stroke: this.stroke,
        type: 'text',
        getSvgFilter: fabric.Object.prototype.getSvgFilter
      }, styleDecl));

      return [
        //jscs:disable validateIndentation
        '\t\t\t<tspan x="', toFixed(lineLeftOffset + charOffset, NUM_FRACTION_DIGITS), '" y="',
          toFixed(lineTopOffset - this.height/2, NUM_FRACTION_DIGITS), '" ',
          (styleDecl.fontFamily ? 'font-family="' + styleDecl.fontFamily.replace(/"/g, '\'') + '" ': ''),
          (styleDecl.fontSize ? 'font-size="' + styleDecl.fontSize + '" ': ''),
          (styleDecl.fontStyle ? 'font-style="' + styleDecl.fontStyle + '" ': ''),
          (styleDecl.fontWeight ? 'font-weight="' + styleDecl.fontWeight + '" ': ''),
          (styleDecl.textDecoration ? 'text-decoration="' + styleDecl.textDecoration + '" ': ''),
          'style="', fillStyles, '">',
          fabric.util.string.escapeXml(_char),
        '</tspan>\n'
        //jscs:enable validateIndentation
      ].join('');
    }
  });
})();
/* _TO_SVG_END_ */


(function(global) {

  'use strict';

  var fabric = global.fabric || (global.fabric = {}),
      clone  = fabric.util.object.clone;

  /**
   * Textbox class, based on IText, allows the user to resize the text rectangle
   * and wraps lines automatically. Textboxes have their Y scaling locked, the
   * user can only change width. Height is adjusted automatically based on the
   * wrapping of lines.
   * @class fabric.Textbox
   * @extends fabric.IText
   * @mixes fabric.Observable
   * @return {fabric.Textbox} thisArg
   * @see {@link fabric.Textbox#initialize} for constructor definition
   */
  fabric.Textbox = fabric.util.createClass(fabric.IText, fabric.Observable, {

    /**
     * Type of an object
     * @type String
     * @default
     */
    type: 'textbox',

    /**
     * Minimum width of textbox, in pixels.
     * @type Number
     * @default
     */
    minWidth: 20,

    /**
     * Minimum calculated width of a textbox, in pixels.
     * @type Number
     * @default
     */
    dynamicMinWidth: 0,

    /**
     * Cached array of text wrapping.
     * @type Array
     */
    __cachedLines: null,

    /**
     * Override standard Object class values
     */
    lockScalingY: true,

    /**
     * Override standard Object class values
     */
    lockScalingFlip: true,

    /**
     * Constructor. Some scaling related property values are forced. Visibility
     * of controls is also fixed; only the rotation and width controls are
     * made available.
     * @param {String} text Text string
     * @param {Object} [options] Options object
     * @return {fabric.Textbox} thisArg
     */
    initialize: function(text, options) {
      this.ctx = fabric.util.createCanvasElement().getContext('2d');
      this.callSuper('initialize', text, options);
      this.setControlsVisibility(fabric.Textbox.getTextboxControlVisibility());

      // add width to this list of props that effect line wrapping.
      this._dimensionAffectingProps.width = true;
    },

    /**
     * Unlike superclass's version of this function, Textbox does not update
     * its width.
     * @param {CanvasRenderingContext2D} ctx Context to use for measurements
     * @private
     * @override
     */
    _initDimensions: function(ctx) {
      if (this.__skipDimension) {
        return;
      }

      if (!ctx) {
        ctx = fabric.util.createCanvasElement().getContext('2d');
        this._setTextStyles(ctx);
      }

      // clear dynamicMinWidth as it will be different after we re-wrap line
      this.dynamicMinWidth = 0;

      // wrap lines
      this._textLines = this._splitTextIntoLines();
      // if after wrapping, the width is smaller than dynamicMinWidth, change the width and re-wrap
      if (this.dynamicMinWidth > this.width) {
        this._set('width', this.dynamicMinWidth);
      }

      // clear cache and re-calculate height
      this._clearCache();
      this.height = this._getTextHeight(ctx);
    },

    /**
     * Generate an object that translates the style object so that it is
     * broken up by visual lines (new lines and automatic wrapping).
     * The original text styles object is broken up by actual lines (new lines only),
     * which is only sufficient for Text / IText
     * @private
     */
    _generateStyleMap: function() {
      var realLineCount     = 0,
          realLineCharCount = 0,
          charCount         = 0,
          map               = {};

      for (var i = 0; i < this._textLines.length; i++) {
        if (this.text[charCount] === '\n') {
          realLineCharCount = 0;
          charCount++;
          realLineCount++;
        }
        else if (this.text[charCount] === ' ') {
          // this case deals with space's that are removed from end of lines when wrapping
          realLineCharCount++;
          charCount++;
        }

        map[i] = { line: realLineCount, offset: realLineCharCount };

        charCount += this._textLines[i].length;
        realLineCharCount += this._textLines[i].length;
      }

      return map;
    },

    /**
     * @param {Number} lineIndex
     * @param {Number} charIndex
     * @param {Boolean} [returnCloneOrEmpty=false]
     * @private
     */
    _getStyleDeclaration: function(lineIndex, charIndex, returnCloneOrEmpty) {
      if (this._styleMap) {
        var map = this._styleMap[lineIndex];
        if (!map) {
          return returnCloneOrEmpty ? { } : null;
        }
        lineIndex = map.line;
        charIndex = map.offset + charIndex;
      }
      return this.callSuper('_getStyleDeclaration', lineIndex, charIndex, returnCloneOrEmpty);
    },

    /**
     * @param {Number} lineIndex
     * @param {Number} charIndex
     * @param {Object} style
     * @private
     */
    _setStyleDeclaration: function(lineIndex, charIndex, style) {
      var map = this._styleMap[lineIndex];
      lineIndex = map.line;
      charIndex = map.offset + charIndex;

      this.styles[lineIndex][charIndex] = style;
    },

    /**
     * @param {Number} lineIndex
     * @param {Number} charIndex
     * @private
     */
    _deleteStyleDeclaration: function(lineIndex, charIndex) {
      var map = this._styleMap[lineIndex];
      lineIndex = map.line;
      charIndex = map.offset + charIndex;

      delete this.styles[lineIndex][charIndex];
    },

    /**
     * @param {Number} lineIndex
     * @private
     */
    _getLineStyle: function(lineIndex) {
      var map = this._styleMap[lineIndex];
      return this.styles[map.line];
    },

    /**
     * @param {Number} lineIndex
     * @param {Object} style
     * @private
     */
    _setLineStyle: function(lineIndex, style) {
      var map = this._styleMap[lineIndex];
      this.styles[map.line] = style;
    },

    /**
     * @param {Number} lineIndex
     * @private
     */
    _deleteLineStyle: function(lineIndex) {
      var map = this._styleMap[lineIndex];
      delete this.styles[map.line];
    },

    /**
     * Wraps text using the 'width' property of Textbox. First this function
     * splits text on newlines, so we preserve newlines entered by the user.
     * Then it wraps each line using the width of the Textbox by calling
     * _wrapLine().
     * @param {CanvasRenderingContext2D} ctx Context to use for measurements
     * @param {String} text The string of text that is split into lines
     * @returns {Array} Array of lines
     */
    _wrapText: function(ctx, text) {
      var lines = text.split(this._reNewline), wrapped = [], i;

      for (i = 0; i < lines.length; i++) {
        wrapped = wrapped.concat(this._wrapLine(ctx, lines[i], i));
      }

      return wrapped;
    },

    /**
     * Helper function to measure a string of text, given its lineIndex and charIndex offset
     *
     * @param {CanvasRenderingContext2D} ctx
     * @param {String} text
     * @param {number} lineIndex
     * @param {number} charOffset
     * @returns {number}
     * @private
     */
    _measureText: function(ctx, text, lineIndex, charOffset) {
      var width = 0;
      charOffset = charOffset || 0;
      for (var i = 0, len = text.length; i < len; i++) {
        width += this._getWidthOfChar(ctx, text[i], lineIndex, i + charOffset);
      }
      return width;
    },

    /**
     * Wraps a line of text using the width of the Textbox and a context.
     * @param {CanvasRenderingContext2D} ctx Context to use for measurements
     * @param {String} text The string of text to split into lines
     * @param {Number} lineIndex
     * @returns {Array} Array of line(s) into which the given text is wrapped
     * to.
     */
    _wrapLine: function(ctx, text, lineIndex) {
      var lineWidth        = 0,
          lines            = [],
          line             = '',
          words            = text.split(' '),
          word             = '',
          offset           = 0,
          infix            = ' ',
          wordWidth        = 0,
          infixWidth       = 0,
          largestWordWidth = 0,
          lineJustStarted = true,
          additionalSpace = this._getWidthOfCharSpacing();

      for (var i = 0; i < words.length; i++) {
        word = words[i];
        wordWidth = this._measureText(ctx, word, lineIndex, offset);

        offset += word.length;

        lineWidth += infixWidth + wordWidth - additionalSpace;

        if (lineWidth >= this.width && !lineJustStarted) {
          lines.push(line);
          line = '';
          lineWidth = wordWidth;
          lineJustStarted = true;
        }
        else {
          lineWidth += additionalSpace;
        }

        if (!lineJustStarted) {
          line += infix;
        }
        line += word;

        infixWidth = this._measureText(ctx, infix, lineIndex, offset) + additionalSpace;
        offset++;
        lineJustStarted = false;
        // keep track of largest word
        if (wordWidth > largestWordWidth) {
          largestWordWidth = wordWidth;
        }
      }

      i && lines.push(line);

      if (largestWordWidth > this.dynamicMinWidth) {
        this.dynamicMinWidth = largestWordWidth - additionalSpace;
      }

      return lines;
    },
    /**
     * Gets lines of text to render in the Textbox. This function calculates
     * text wrapping on the fly everytime it is called.
     * @returns {Array} Array of lines in the Textbox.
     * @override
     */
    _splitTextIntoLines: function() {
      var originalAlign = this.textAlign;
      this.ctx.save();
      this._setTextStyles(this.ctx);
      this.textAlign = 'left';
      var lines = this._wrapText(this.ctx, this.text);
      this.textAlign = originalAlign;
      this.ctx.restore();
      this._textLines = lines;
      this._styleMap = this._generateStyleMap();
      return lines;
    },

    /**
     * When part of a group, we don't want the Textbox's scale to increase if
     * the group's increases. That's why we reduce the scale of the Textbox by
     * the amount that the group's increases. This is to maintain the effective
     * scale of the Textbox at 1, so that font-size values make sense. Otherwise
     * the same font-size value would result in different actual size depending
     * on the value of the scale.
     * @param {String} key
     * @param {*} value
     */
    setOnGroup: function(key, value) {
      if (key === 'scaleX') {
        this.set('scaleX', Math.abs(1 / value));
        this.set('width', (this.get('width') * value) /
          (typeof this.__oldScaleX === 'undefined' ? 1 : this.__oldScaleX));
        this.__oldScaleX = value;
      }
    },

    /**
     * Returns 2d representation (lineIndex and charIndex) of cursor (or selection start).
     * Overrides the superclass function to take into account text wrapping.
     *
     * @param {Number} [selectionStart] Optional index. When not given, current selectionStart is used.
     */
    get2DCursorLocation: function(selectionStart) {
      if (typeof selectionStart === 'undefined') {
        selectionStart = this.selectionStart;
      }

      var numLines = this._textLines.length,
          removed  = 0;

      for (var i = 0; i < numLines; i++) {
        var line    = this._textLines[i],
            lineLen = line.length;

        if (selectionStart <= removed + lineLen) {
          return {
            lineIndex: i,
            charIndex: selectionStart - removed
          };
        }

        removed += lineLen;

        if (this.text[removed] === '\n' || this.text[removed] === ' ') {
          removed++;
        }
      }

      return {
        lineIndex: numLines - 1,
        charIndex: this._textLines[numLines - 1].length
      };
    },

    /**
     * Overrides superclass function and uses text wrapping data to get cursor
     * boundary offsets instead of the array of chars.
     * @param {Array} chars Unused
     * @param {String} typeOfBoundaries Can be 'cursor' or 'selection'
     * @returns {Object} Object with 'top', 'left', and 'lineLeft' properties set.
     */
    _getCursorBoundariesOffsets: function(chars, typeOfBoundaries) {
      var topOffset      = 0,
          leftOffset     = 0,
          cursorLocation = this.get2DCursorLocation(),
          lineChars      = this._textLines[cursorLocation.lineIndex].split(''),
          lineLeftOffset = this._getLineLeftOffset(this._getLineWidth(this.ctx, cursorLocation.lineIndex));

      for (var i = 0; i < cursorLocation.charIndex; i++) {
        leftOffset += this._getWidthOfChar(this.ctx, lineChars[i], cursorLocation.lineIndex, i);
      }

      for (i = 0; i < cursorLocation.lineIndex; i++) {
        topOffset += this._getHeightOfLine(this.ctx, i);
      }

      if (typeOfBoundaries === 'cursor') {
        topOffset += (1 - this._fontSizeFraction) * this._getHeightOfLine(this.ctx, cursorLocation.lineIndex)
          / this.lineHeight - this.getCurrentCharFontSize(cursorLocation.lineIndex, cursorLocation.charIndex)
          * (1 - this._fontSizeFraction);
      }

      return {
        top: topOffset,
        left: leftOffset,
        lineLeft: lineLeftOffset
      };
    },

    getMinWidth: function() {
      return Math.max(this.minWidth, this.dynamicMinWidth);
    },

    /**
     * Returns object representation of an instance
     * @method toObject
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject: function(propertiesToInclude) {
      return fabric.util.object.extend(this.callSuper('toObject', propertiesToInclude), {
        minWidth: this.minWidth
      });
    }
  });
  /**
   * Returns fabric.Textbox instance from an object representation
   * @static
   * @memberOf fabric.Textbox
   * @param {Object} object Object to create an instance from
   * @return {fabric.Textbox} instance of fabric.Textbox
   */
  fabric.Textbox.fromObject = function(object) {
    return new fabric.Textbox(object.text, clone(object));
  };
  /**
   * Returns the default controls visibility required for Textboxes.
   * @returns {Object}
   */
  fabric.Textbox.getTextboxControlVisibility = function() {
    return {
      tl: false,
      tr: false,
      br: false,
      bl: false,
      ml: true,
      mt: false,
      mr: true,
      mb: false,
      mtr: true
    };
  };

})(typeof exports !== 'undefined' ? exports : this);


(function() {

  /**
   * Override _setObjectScale and add Textbox specific resizing behavior. Resizing
   * a Textbox doesn't scale text, it only changes width and makes text wrap automatically.
   */
  var setObjectScaleOverridden = fabric.Canvas.prototype._setObjectScale;

  fabric.Canvas.prototype._setObjectScale = function(localMouse, transform,
                                                     lockScalingX, lockScalingY, by, lockScalingFlip, _dim) {

    var t = transform.target;
    if (t instanceof fabric.Textbox) {
      var w = t.width * ((localMouse.x / transform.scaleX) / (t.width + t.strokeWidth));
      if (w >= t.getMinWidth()) {
        t.set('width', w);
        return true;
      }
    }
    else {
      return setObjectScaleOverridden.call(fabric.Canvas.prototype, localMouse, transform,
        lockScalingX, lockScalingY, by, lockScalingFlip, _dim);
    }
  };

  /**
   * Sets controls of this group to the Textbox's special configuration if
   * one is present in the group. Deletes _controlsVisibility otherwise, so that
   * it gets initialized to default value at runtime.
   */
  fabric.Group.prototype._refreshControlsVisibility = function() {
    if (typeof fabric.Textbox === 'undefined') {
      return;
    }
    for (var i = this._objects.length; i--;) {
      if (this._objects[i] instanceof fabric.Textbox) {
        this.setControlsVisibility(fabric.Textbox.getTextboxControlVisibility());
        return;
      }
    }
  };

  var clone = fabric.util.object.clone;

  fabric.util.object.extend(fabric.Textbox.prototype, /** @lends fabric.IText.prototype */ {
    /**
     * @private
     */
    _removeExtraneousStyles: function() {
      for (var prop in this._styleMap) {
        if (!this._textLines[prop]) {
          delete this.styles[this._styleMap[prop].line];
        }
      }
    },

    /**
     * Inserts style object for a given line/char index
     * @param {Number} lineIndex Index of a line
     * @param {Number} charIndex Index of a char
     * @param {Object} [style] Style object to insert, if given
     */
    insertCharStyleObject: function(lineIndex, charIndex, style) {
      // adjust lineIndex and charIndex
      var map = this._styleMap[lineIndex];
      lineIndex = map.line;
      charIndex = map.offset + charIndex;

      fabric.IText.prototype.insertCharStyleObject.apply(this, [lineIndex, charIndex, style]);
    },

    /**
     * Inserts new style object
     * @param {Number} lineIndex Index of a line
     * @param {Number} charIndex Index of a char
     * @param {Boolean} isEndOfLine True if it's end of line
     */
    insertNewlineStyleObject: function(lineIndex, charIndex, isEndOfLine) {
      // adjust lineIndex and charIndex
      var map = this._styleMap[lineIndex];
      lineIndex = map.line;
      charIndex = map.offset + charIndex;

      fabric.IText.prototype.insertNewlineStyleObject.apply(this, [lineIndex, charIndex, isEndOfLine]);
    },

    /**
     * Shifts line styles up or down. This function is slightly different than the one in
     * itext_behaviour as it takes into account the styleMap.
     *
     * @param {Number} lineIndex Index of a line
     * @param {Number} offset Can be -1 or +1
     */
    shiftLineStyles: function(lineIndex, offset) {
      // shift all line styles by 1 upward
      var clonedStyles = clone(this.styles),
          map          = this._styleMap[lineIndex];

      // adjust line index
      lineIndex = map.line;

      for (var line in this.styles) {
        var numericLine = parseInt(line, 10);

        if (numericLine > lineIndex) {
          this.styles[numericLine + offset] = clonedStyles[numericLine];

          if (!clonedStyles[numericLine - offset]) {
            delete this.styles[numericLine];
          }
        }
      }
      //TODO: evaluate if delete old style lines with offset -1
    },

    /**
     * Figure out programatically the text on previous actual line (actual = separated by \n);
     *
     * @param {Number} lIndex
     * @returns {String}
     * @private
     */
    _getTextOnPreviousLine: function(lIndex) {
      var textOnPreviousLine = this._textLines[lIndex - 1];

      while (this._styleMap[lIndex - 2] && this._styleMap[lIndex - 2].line === this._styleMap[lIndex - 1].line) {
        textOnPreviousLine = this._textLines[lIndex - 2] + textOnPreviousLine;

        lIndex--;
      }

      return textOnPreviousLine;
    },

    /**
     * Removes style object
     * @param {Boolean} isBeginningOfLine True if cursor is at the beginning of line
     * @param {Number} [index] Optional index. When not given, current selectionStart is used.
     */
    removeStyleObject: function(isBeginningOfLine, index) {

      var cursorLocation = this.get2DCursorLocation(index),
          map            = this._styleMap[cursorLocation.lineIndex],
          lineIndex      = map.line,
          charIndex      = map.offset + cursorLocation.charIndex;
      this._removeStyleObject(isBeginningOfLine, cursorLocation, lineIndex, charIndex);
    }
  });
})();


(function() {
  var override = fabric.IText.prototype._getNewSelectionStartFromOffset;
  /**
   * Overrides the IText implementation and adjusts character index as there is not always a linebreak
   *
   * @param {Number} mouseOffset
   * @param {Number} prevWidth
   * @param {Number} width
   * @param {Number} index
   * @param {Number} jlen
   * @returns {Number}
   */
  fabric.IText.prototype._getNewSelectionStartFromOffset = function(mouseOffset, prevWidth, width, index, jlen) {
    index = override.call(this, mouseOffset, prevWidth, width, index, jlen);

    // the index passed into the function is padded by the amount of lines from _textLines (to account for \n)
    // we need to remove this padding, and pad it by actual lines, and / or spaces that are meant to be there
    var tmp     = 0,
        removed = 0;

    // account for removed characters
    for (var i = 0; i < this._textLines.length; i++) {
      tmp += this._textLines[i].length;

      if (tmp + removed >= index) {
        break;
      }

      if (this.text[tmp + removed] === '\n' || this.text[tmp + removed] === ' ') {
        removed++;
      }
    }

    return index - i + removed;
  };
})();


(function() {

  if (typeof document !== 'undefined' && typeof window !== 'undefined') {
    return;
  }

  var DOMParser = require('xmldom').DOMParser,
      URL = require('url'),
      HTTP = require('http'),
      HTTPS = require('https'),

      Canvas = require('canvas'),
      Image = require('canvas').Image;

  /** @private */
  function request(url, encoding, callback) {
    var oURL = URL.parse(url);

    // detect if http or https is used
    if ( !oURL.port ) {
      oURL.port = ( oURL.protocol.indexOf('https:') === 0 ) ? 443 : 80;
    }

    // assign request handler based on protocol
    var reqHandler = (oURL.protocol.indexOf('https:') === 0 ) ? HTTPS : HTTP,
        req = reqHandler.request({
          hostname: oURL.hostname,
          port: oURL.port,
          path: oURL.path,
          method: 'GET'
        }, function(response) {
          var body = '';
          if (encoding) {
            response.setEncoding(encoding);
          }
          response.on('end', function () {
            callback(body);
          });
          response.on('data', function (chunk) {
            if (response.statusCode === 200) {
              body += chunk;
            }
          });
        });

    req.on('error', function(err) {
      if (err.errno === process.ECONNREFUSED) {
        fabric.log('ECONNREFUSED: connection refused to ' + oURL.hostname + ':' + oURL.port);
      }
      else {
        fabric.log(err.message);
      }
      callback(null);
    });

    req.end();
  }

  /** @private */
  function requestFs(path, callback) {
    var fs = require('fs');
    fs.readFile(path, function (err, data) {
      if (err) {
        fabric.log(err);
        throw err;
      }
      else {
        callback(data);
      }
    });
  }

  fabric.util.loadImage = function(url, callback, context) {
    function createImageAndCallBack(data) {
      if (data) {
        img.src = new Buffer(data, 'binary');
        // preserving original url, which seems to be lost in node-canvas
        img._src = url;
        callback && callback.call(context, img);
      }
      else {
        img = null;
        callback && callback.call(context, null, true);
      }
    }
    var img = new Image();
    if (url && (url instanceof Buffer || url.indexOf('data') === 0)) {
      img.src = img._src = url;
      callback && callback.call(context, img);
    }
    else if (url && url.indexOf('http') !== 0) {
      requestFs(url, createImageAndCallBack);
    }
    else if (url) {
      request(url, 'binary', createImageAndCallBack);
    }
    else {
      callback && callback.call(context, url);
    }
  };

  fabric.loadSVGFromURL = function(url, callback, reviver) {
    url = url.replace(/^\n\s*/, '').replace(/\?.*$/, '').trim();
    if (url.indexOf('http') !== 0) {
      requestFs(url, function(body) {
        fabric.loadSVGFromString(body.toString(), callback, reviver);
      });
    }
    else {
      request(url, '', function(body) {
        fabric.loadSVGFromString(body, callback, reviver);
      });
    }
  };

  fabric.loadSVGFromString = function(string, callback, reviver) {
    var doc = new DOMParser().parseFromString(string);
    fabric.parseSVGDocument(doc.documentElement, function(results, options) {
      callback && callback(results, options);
    }, reviver);
  };

  fabric.util.getScript = function(url, callback) {
    request(url, '', function(body) {
      eval(body);
      callback && callback();
    });
  };

  // fabric.util.createCanvasElement = function(_, width, height) {
  //   return new Canvas(width, height);
  // }

  /**
   * Only available when running fabric on node.js
   * @param {Number} width Canvas width
   * @param {Number} height Canvas height
   * @param {Object} [options] Options to pass to FabricCanvas.
   * @param {Object} [nodeCanvasOptions] Options to pass to NodeCanvas.
   * @return {Object} wrapped canvas instance
   */
  fabric.createCanvasForNode = function(width, height, options, nodeCanvasOptions) {
    nodeCanvasOptions = nodeCanvasOptions || options;

    var canvasEl = fabric.document.createElement('canvas'),
        nodeCanvas = new Canvas(width || 600, height || 600, nodeCanvasOptions),
        nodeCacheCanvas = new Canvas(width || 600, height || 600, nodeCanvasOptions);

    // jsdom doesn't create style on canvas element, so here be temp. workaround
    canvasEl.style = { };

    canvasEl.width = nodeCanvas.width;
    canvasEl.height = nodeCanvas.height;

    var FabricCanvas = fabric.Canvas || fabric.StaticCanvas,
        fabricCanvas = new FabricCanvas(canvasEl, options);

    fabricCanvas.contextContainer = nodeCanvas.getContext('2d');
    fabricCanvas.nodeCanvas = nodeCanvas;
    fabricCanvas.contextCache = nodeCacheCanvas.getContext('2d');
    fabricCanvas.nodeCacheCanvas = nodeCacheCanvas;
    fabricCanvas.Font = Canvas.Font;

    return fabricCanvas;
  };

  /** @ignore */
  fabric.StaticCanvas.prototype.createPNGStream = function() {
    return this.nodeCanvas.createPNGStream();
  };

  fabric.StaticCanvas.prototype.createJPEGStream = function(opts) {
    return this.nodeCanvas.createJPEGStream(opts);
  };

  var origSetWidth = fabric.StaticCanvas.prototype.setWidth;
  fabric.StaticCanvas.prototype.setWidth = function(width, options) {
    origSetWidth.call(this, width, options);
    this.nodeCanvas.width = width;
    return this;
  };
  if (fabric.Canvas) {
    fabric.Canvas.prototype.setWidth = fabric.StaticCanvas.prototype.setWidth;
  }

  var origSetHeight = fabric.StaticCanvas.prototype.setHeight;
  fabric.StaticCanvas.prototype.setHeight = function(height, options) {
    origSetHeight.call(this, height, options);
    this.nodeCanvas.height = height;
    return this;
  };
  if (fabric.Canvas) {
    fabric.Canvas.prototype.setHeight = fabric.StaticCanvas.prototype.setHeight;
  }

})();



