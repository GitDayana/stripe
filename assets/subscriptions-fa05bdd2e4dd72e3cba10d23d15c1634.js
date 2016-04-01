function startFlowSwitcher(){function e(e){var t=0;while(e=e.previousElementSibling)++t;return t}var t=document.querySelectorAll("#flow-switcher > li"),n=document.querySelectorAll("#flow-boxes .codebox-container .codebox"),r=document.querySelectorAll("#flow-boxes .text"),i=document.querySelector("#flow-boxes .codebox-container"),s=document.querySelector("#flow-boxes .boxes"),o=document.querySelector("#flow-boxes .end");for(var u=0;u<t.length;++u)t[u].addEventListener("mouseover",function(u){u.stopPropagation();var a=document.querySelector("#flow-switcher .active"),f=u.target.nodeName=="SPAN"?u.target.parentNode:u.target;if(a==f)return;var l=e(a),c=e(f);$(s).toggleClass("active",c!=t.length-1),$(o).toggleClass("active",c==t.length-1),c==t.length-1?($(i).removeClass("active"),$(i).addClass("hiddenLeft")):($(i).removeClass("hiddenLeft"),$(i).addClass("active"));for(var h=0;h<t.length;++h)h<t.length-1&&$(n[h]).removeClass("hiddenLeft active hiddenRight"),$(r[h]).removeClass("hiddenLeft active hiddenRight"),h<c?(t[h].className="done",h<t.length-1&&$(n[h]).addClass("hiddenLeft"),$(r[h]).addClass("hiddenLeft")):h==c?(t[h].className="active",h<t.length-1&&$(n[h]).addClass("active"),$(r[h]).addClass("active")):h>c&&(t[h].className="",h<t.length-1&&$(n[h]).addClass("hiddenRight"),$(r[h]).addClass("hiddenRight"))})}function startUniverse(){var e=416;window.headerUniverse=new bubbleUniverse({icons:["api","cal","card","costs","custom","data","hooks","lock","piggy","shield","stats"],svg_id:"bubble-universe",size:[2e3,e],root_pos:[648,173],ring_start_r:193,ring_spread:150,ring_count:6,bubble_r:50,bubble_spread:650,fps:30,v_min:.005,v_max:.05}),headerUniverse.play(),window.addEventListener("scroll",function(t){window.pageYOffset<e?headerUniverse.play():headerUniverse.pause()}),window.addEventListener("blur",function(e){headerUniverse.pause()}),window.addEventListener("focus",function(t){window.pageYOffset<e&&headerUniverse.play()})}function bubbleUniverse(e){function u(e){return[t.c.root_pos[0]+Math.cos(e.angle)*e.ring.r,t.c.root_pos[1]+Math.sin(e.angle)*e.ring.r]}function a(){if(t.c.seed===undefined)return Math.random();var e=Math.sin(t.c.seed++)*1e4;return e-Math.floor(e)}function f(e){return isNaN(e)?NaN:e===0?e:e>0?1:-1}function l(e){return e%=Math.PI*2,e<0&&(e+=Math.PI*2),e}function c(e,t){return Math.min(Math.abs(e-t),Math.abs(e-Math.PI*2-t))}function h(e){var t=e.length,n,r;while(t>0)r=Math.floor(Math.random()*t),t--,n=e[t],e[t]=e[r],e[r]=n;return e}var t=this;t.ns="http://www.w3.org/2000/svg",t.c=e,t.last_tick=0,t.playing=!1,t.next_icon=t.c.icons.length,t.svg=document.getElementById(e.svg_id),t.svg.setAttribute("width",e.size[0]),t.svg.setAttribute("height",e.size[1]),t.rings=[],t.bubbles=[];for(var n=0;n<t.c.ring_count;++n){var r={};r.r=t.c.ring_start_r+n*t.c.ring_spread,r.circ=2*Math.PI*r.r,r.bubble_angle=2*t.c.bubble_r/r.circ*2*Math.PI,r.bubbles=[],r.el=document.createElementNS(t.ns,"circle"),r.el.setAttribute("fill","transparent"),r.el.setAttribute("stroke","black"),r.el.setAttribute("stroke-width","2px"),r.el.setAttribute("cx",t.c.root_pos[0]),r.el.setAttribute("cy",t.c.root_pos[1]),r.el.setAttribute("r",r.r),t.svg.appendChild(r.el),t.rings.push(r);var i=Math.round(r.circ/t.c.bubble_spread);for(var s=0;s<i;++s){var o={blah:15};o.ring=r,o.angle=a()*Math.PI*2,o.pos=u(o),o.v=Math.pow(a(),2)*(t.c.v_max-t.c.v_min)+t.c.v_min,a()>.5&&(o.v*=-1),o.el=document.createElementNS(t.ns,"g"),o.el_circle=document.createElementNS(t.ns,"circle"),o.el_circle.setAttribute("r",t.c.bubble_r),o.el_circle.setAttribute("fill","white"),o.el_circle.setAttribute("stroke","black"),o.el_circle.setAttribute("stroke-width","2px"),t.next_icon==t.c.icons.length&&(h(t.c.icons),t.next_icon=0),o.el_icon=document.createElementNS(t.ns,"use"),o.el_icon.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#"+t.c.icons[t.next_icon]),o.el_icon.setAttribute("x",-63),o.el_icon.setAttribute("y",-63),o.el_icon.setAttribute("transform","scale(0.8)"),++t.next_icon,o.el.appendChild(o.el_circle),o.el.appendChild(o.el_icon),t.svg.appendChild(o.el),r.bubbles.push(o),t.bubbles.push(o)}}for(var n=0;n<5;++n)t.bubbles.forEach(function(e){var t=e.ring.bubble_angle*3;e.ring.bubbles.forEach(function(n){if(e===n)return;var r=Math.abs(e.angle-n.angle);if(r<t){var i=e.angle-n.angle,s=n.angle-e.angle,o=1-r/t;e.angle+=i*o,n.angle+=s*o}})});t.tick=function(e){t.playing&&requestAnimationFrame(t.tick);if(e-t.last_tick<1e3/t.c.fps)return;t.last_tick=e,t.bubbles.forEach(function(e){e.angle=l(e.angle+e.v/t.c.fps),e.pos=u(e),e.el.setAttribute("transform","translate("+e.pos[0]+" "+e.pos[1]+")");var n=e.ring.bubble_angle;e.ring.bubbles.forEach(function(t){if(e===t)return;var r=c(e.angle,t.angle);if(r<e.ring.bubble_angle){var i=t.v<=e.v?-1:1,s=e.v,o=t.v;e.v=o,t.v=s,e.angle=l(e.angle+(n-r)/2*i),t.angle=l(t.angle+(n-r)/2*-1*i)}})})},t.play=function(){if(t.playing)return;t.playing=!0,requestAnimationFrame(t.tick)},t.pause=function(){if(!t.playing)return;t.playing=!1}};