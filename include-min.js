/* include.js | github.com/CapMousse/include.js */
!function(a){function g(a,b,d){var e=this;"string"!=typeof a&&(d=b,b=a,a=null),b.constructor!==[].constructor&&(d=b,b=[]),c.unshift([a,b,d]),e.checkModuleLoaded(),b.length&&e.each(b,e.parseFiles)}var b={},c=[],d=1,e=document.getElementsByTagName("base")[0],f=document.getElementsByTagName("head")[0];g.prototype.each=function(a,b){var d,c=this;for(d=0;d<a.length&&(void 0===a[d]||b.call(c,a[d],d,a)!==!1);d++);},g.prototype.checkModuleLoaded=function(){var a=this;a.each(c,function(e,f){var g=e[0],h=e[1],i=e[2],j=[];a.each(h,function(a,c,d){c=a.push?a[0]:a,d=document.querySelector('[data-module="'+c+'"]'),void 0!==b[c]&&j.push(b[c]),d&&"LINK"==d.nodeName&&j.push(null)}),h.length!==j.length&&0!==h.length||(null===g&&f+1===c.length&&(c=[],d=1),i="function"==typeof i?i.apply(this,j):i,null!==g&&(b[g]=i))})},g.prototype.onModuleLoaded=function(a,e,f){var g=this;e>c.length?(d--,b[a]=b[a]||d):null===c[0][0]&&(c[0][0]=a),g.checkModuleLoaded()},g.prototype.onLoad=function(a,b){var c=this,d=a.currentTarget||a.srcElement;"load"!==a.type&&"complete"!=d.readyState||(d.setAttribute("data-loaded",!0),c.onModuleLoaded(d.getAttribute("data-module"),d.getAttribute("data-count")),d.attachEvent?d.detachEvent("onreadystatechange",b):d.removeEventListener("load",b))},g.prototype.watchCss=function(a){for(var b=this,c=document.styleSheets,d=c.length,e=a.href.split("//").pop();d--;)if(c[d].href.indexOf(e)!=-1)return a.setAttribute("data-loaded",!0),b.onModuleLoaded(a.getAttribute("data-module"),a.getAttribute("data-count"),!0),void b.checkModuleLoaded();setTimeout(function(){b.watchCss.call(b,a)})},g.prototype.attachEvents=function(a,b){var c=this,d=function(){var a=Array.prototype.slice.call(arguments);a.push(d),c.onLoad.apply(c,a)};b?a.attachEvent?a.attachEvent("onreadystatechange",d):a.addEventListener("load",d,!0):c.watchCss(a)},g.prototype.checkExists=function(a,b){var c=!1;return this.each(document.getElementsByTagName(b?"script":"link"),function(b){if(b.getAttribute("data-module")&&b.getAttribute("data-module")===a)return c=b,!1}),c},g.prototype.create=function(a,b,c){var g=this;setTimeout(function(){var h=g.checkExists.call(g,a,c);h||(d++,h=document.createElement(c?"script":"link"),c?(h.async=!0,h.type="text/javascript",h.src=b):(h.media="all",h.href=b,h.rel="stylesheet"),h.setAttribute("data-module",a),h.setAttribute("data-count",d),h.setAttribute("data-loaded",!1),e?e.parentNode.insertBefore(h,e):f.appendChild(h),g.attachEvents.call(g,h,c))},0)},g.prototype.parseFiles=function(a){var e,c=a.push?a[0]:a,d=a.push?a[1]:a;return b[c]?void this.checkModuleLoaded():(d.indexOf("//")!=-1||/\.js/.test(d)||/^http/.test(d)||(d=d.replace(".","/"),d+=".js"),e="js"==d.split(".").pop(),void this.create.call(this,c,d,e))},g.prototype.reset=function(){b={},c=[],d=1},a.include=a.require=a.define=function(a,b,c){return new g(a,b,c)}}(this);