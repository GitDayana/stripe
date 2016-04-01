(function(){"use strict";function e(e,t,n){var r;return function(){var i=this,s=arguments,o=function(){r=null,n||e.apply(i,s)},u=n&&!r;clearTimeout(r),r=setTimeout(o,t),u&&e.apply(i,s)}}function t(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}Prism.languages.json=Prism.languages.insertBefore("clike","string",{"json-key":/(?:\n\s*)("|')(\\\n|\\?.)*?("|')/g,"json-string":/("|')(\\\n|\\?.)*?\1/g}),Prism.languages.insertBefore("bash","operator",{"api-key":{pattern:/(?:-u )([a-zA-Z0-9_]+)/g,inside:{"request-flag":/(^-u)/g}},"request-param":{pattern:/(?:-d )([a-zA-Z0-9]+)/g,inside:{"request-flag":/(^-d)/g}},"request-value":{pattern:/(?:=)(.*?)(?:\n|\\)/g,inside:{operator:/(^=)|(\\$)/g}}}),Prism.languages.insertBefore("bash","number",{"request-url":{pattern:/(?:^curl )(.*?)(?:\n|\\)/g,inside:{operator:/(\\$)/g,keyword:/(^curl)/g}}}),$(document).ready(function(){function f(e){y(function(){n.attr("data-language",e)})}function d(e){e.removeClass("expanded"),e.next(".method-list-group").css("display","none")}function v(e){e.addClass("expanded"),e.next(".method-list-group").css("display","block")}function m(e){var e=e.replace(/[^\w\-#]/g,"");if($(e).length==0)return;$(e).parents(".method-list-child").each(function(){v($(this).children(".method-list-title"))});var t=$(e).children(".method-list").children(".method-list-title");t.length>0&&v(t);var n=$(e).offset().top-r.offset().top+r.scrollTop();r.scrollTop(n)}function g(e){e=e.split("-")[0];var n=p[e];if(n){var r=n.parentId||e;a.val(r);var i=n.$link;c!==i&&(c.removeClass("selected"),c=i.addClass("selected"),n.isExpandable?h!==i&&(h.removeClass("expanded"),h=i.addClass("expanded")):n.$parent?h!==n.$parent&&(h.removeClass("expanded"),h=n.$parent.addClass("expanded")):h.removeClass("expanded")),l.is(":visible")&&!t(c[0])&&c[0].scrollIntoView(!1)}}function y(e){s.waypoint("disable"),e(),location.hash&&m(location.hash),s.waypoint("enable"),$.waypoints("refresh")}function b(e){y(function(){o.find(".method-example-switcher .method-example-switcher-position a").removeClass("selected"),o.find(".method-example-switcher .method-example-switcher-position a."+e).addClass("selected"),o.find(".method-example-specific").addClass("hide"),o.find(".method-example-specific."+e).removeClass("hide")})}function w(e){window.history&&window.history.replaceState&&history.replaceState({},document.title,e)}var n=$("body"),r=$("#content"),i=$("#language"),s=$(".method"),o=$(".method-example.cards, .method-example.bank-accounts"),u=$(".method-list-child .method-list-title"),a=$(".jump-menu select"),l=$("#sidebar"),c=$(),h=$(),p={};u.on("click",function(){var e=$(this);e.attr("class").indexOf("expanded")!==-1?d(e):v(e),$.waypoints("refresh")}),$(".method-list-item").each(function(){var e=$(this),t=e.attr("id");if(t){var n=$("<a />");n.attr("href","#"+t),n.addClass("header-anchor"),n.on("click",function(e){var t="#"+this.href.split("#")[1];m(t),window.history&&window.history.replaceState&&history.replaceState({},"",t),e.preventDefault()}),e.children("h3").first().prepend(n)}}),a.on("change",function(){var e=a.val();m("#"+e)}),l.find(".sidebar-nav-item").each(function(){var e=this.href.split("#")[1],t=$(this);p[e]={$link:t}}),l.find(".sidebar-nav-item.expandable").each(function(){var e=this.href.split("#")[1],t=$(this);p[e].isExpandable=!0;var n=t.siblings(".sidebar-nav-items").find(".sidebar-nav-item");n.each(function(){var n=this.href.split("#")[1];p[n].$parent=t,p[n].parentId=e})}),o.on("click",".method-example-switcher .method-example-switcher-position a",function(e){e.preventDefault();var t=$(e.currentTarget).attr("class").replace(/method-example-switcher-switch\s*/,"");t.indexOf("selected")===-1&&(b(t),$.cookie("cardType",t,{expires:1825,path:"/",domain:".stripe.com",secure:!0}))}),l.on("click",".sidebar-nav-item",function(e){s.waypoint("disable");var t=this.href.split("#")[1];m("#"+t),g(t),w("#"+t),s.waypoint("enable"),e.preventDefault()}),i.on("change",".language-toggle-source",function(e){var t=$(this).data("language"),n="/docs/api/"+t;w(n+window.location.hash),setTimeout(function(){f(t),$.cookie("lang",t,{expires:1825,path:"/",domain:".stripe.com",secure:!0})},10)}),$("a.show-parameters").on("click",function(e){$(e.currentTarget).parent().parent().removeClass("collapsed")});var E=0;$(window).on("resize",function(){s.waypoint("disable"),clearTimeout(E),E=setTimeout(function(){location.hash&&m(location.hash),s.waypoint("enable"),$.waypoints("refresh")},100)}),y(function(){location.hash&&g(location.hash.substring(1))}),s.waypoint({continuous:!1,context:r,handler:e(function(e){var t="#"+this.id,n=undefined;location.hash&&(n=location.hash.split("-")[0]),n!=t&&(w(t),g(location.hash.substring(1)))},50)})})})();