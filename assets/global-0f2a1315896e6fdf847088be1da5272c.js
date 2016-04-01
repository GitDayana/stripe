(function(){$(function(){var e,t,n,r,i,s,o,u,a,f,l;if(typeof document=="undefined"||document===null||document.domain!=="127.0.0.1")return;u=function(e){var t;return t="debug",e?($("#grid").show(),$("*").addClass("dev-debug")):($("#grid").hide(),$("*").removeClass("dev-debug"))},a=function(){return localStorage.FolsomShowingDebug!=null?(delete localStorage.FolsomShowingDebug,u(!1)):(localStorage.FolsomShowingDebug=!0,u(!0))},$(window).keyup(function(e){return function(e){if(e.keyCode===27)return a()}}(this)),u(localStorage.FolsomShowingDebug!=null);return})}).call(this),function(e){typeof exports=="object"?module.exports=e():typeof window.define=="function"&&window.define.amd?window.define([],e):window.BezierEasing=e()}(function(){function e(t,n,r,i){function o(e,t){return 1-3*t+3*e}function u(e,t){return 3*t-6*e}function a(e){return 3*e}function f(e,t,n){return((o(t,n)*e+u(t,n))*e+a(t))*e}function l(e,t,n){return 3*o(t,n)*e*e+2*u(t,n)*e+a(t)}function c(e){var n=e;for(var i=0;i<8;++i){var s=l(n,t,r);if(s===0)return n;var o=f(n,t,r)-e;n-=o/s}return n}if(this instanceof e){if(arguments.length!==4)throw new Error("BezierEasing requires 4 arguments.");for(var s=0;s<4;++s)if(typeof arguments[s]!="number"||isNaN(arguments[s])||!isFinite(arguments[s]))throw new Error("BezierEasing arguments should be integers.");if(t<0||t>1||r<0||r>1)throw new Error("BezierEasing x values must be in [0, 1] range.");var h=function(e){return t===n&&r===i?e:f(c(e),n,i)},p="BezierEasing("+[t,n,r,i]+")";return h.toString=function(){return p},h}return new e(t,n,r,i)}return e.css={ease:e(.25,.1,.25,1),linear:e(0,0,1,1),"ease-in":e(.42,0,1,1),"ease-out":e(0,0,.58,1),"ease-in-out":e(.42,0,.58,1)},e}),data={live:{0:[[35,41]],1:[[33,39]],2:[[27],[30],[32],[35,37],[39,40]],3:[[23,25],[27],[29,35]],4:[[25],[30,34]],5:[[20,23],[26],[28,36]],6:[[8,9],[21,26],[29],[32,37]],7:[[4,19],[21,30],[32],[34,38]],8:[[2,31],[34,38]],9:[[2,28],[30,31],[34,36],[38]],10:[[0,26],[32,36]],11:[[0,5],[7,25],[32,36]],12:[[1,2],[9,25],[31,36],[58]],13:[[9,26],[31,36],[57,58]],14:[[10,28],[30,37],[54,55],[58,59]],15:[[10,28],[30,38],[54,55],[57,59]],16:[[10,38],[57,59]],17:[[11,38]],18:[[11,33],[38]],19:[[10,35]],20:[[9,32],[34]],21:[[8,31]],22:[[8,29],[56]],23:[[8,28],[56]],24:[[8,28]],25:[[8,27]],26:[[9,26]],27:[[10,25]],28:[[11,18],[20,21],[24]],29:[[14,17],[25]],30:[[16,17],[25]],41:[[37]],42:[[32],[34,36]],47:[[28]],55:[[35]],64:[[134,135]],65:[[133]],66:[[131]],67:[[129,130]],68:[[128,129]]},beta:{1:[[66,67]],2:[[64,66]],6:[[66,70]],7:[[65,70]],8:[[64,67],[69,70]],9:[[63,67],[69,71]],10:[[62,66],[68,71]],11:[[62,66],[68,71]],12:[[62],[64,67],[69,70]],13:[[63,66]],14:[[64,65]],15:[[62,65]],16:[[60,65]],17:[[60,64]],18:[[59,64]],19:[[59,63]],20:[[59,65]],21:[[56,60],[65,66]],22:[[56,59],[64],[66,67],[119]],23:[[56,59],[67],[118]],24:[[57,58],[118]],25:[[117,118]],26:[[116,117]],29:[[11,13]],30:[[12,15]],31:[[13,16]],32:[[13,16]],33:[[14,17],[20,21]],34:[[15,20]],35:[[19]],40:[[106]],41:[[33],[37]],42:[[32,37]],43:[[30],[32,38]],44:[[30,39]],45:[[29,41]],46:[[29,44]],47:[[28,45]],48:[[28,45]],49:[[30,45],[120]],50:[[32,44],[119,121],[125]],51:[[34,43],[117,121],[125]],52:[[34,43],[115,122],[124,125]],53:[[34,43],[115,126]],54:[[35,42],[113,126]],55:[[35,42],[111,127]],56:[[36,41],[110,127]],57:[[37,39],[110,127]],58:[[37,38],[110,127]],59:[[37,38],[110,127]],60:[[36,38],[110,126]],61:[[37],[110,113],[119,125]],62:[[119,124]],63:[[120,123]],66:[[121]]},"default":{0:[[42,54]],1:[[42,55],[87,88]],2:[[41,54]],3:[[40,54],[80],[90,94]],4:[[43,53],[78],[87,95],[105]],5:[[43,52],[77],[83,101],[106]],6:[[43,52],[83,110]],7:[[43,51],[71],[80,81],[83,120]],8:[[42,49],[71,122]],9:[[42,46],[51,54],[72,123]],10:[[42,46],[52],[72,124]],11:[[43,45],[72,121]],12:[[44],[71,116],[120,121]],13:[[69,115],[120,122]],14:[[68,114],[121,122]],15:[[66,115],[122]],16:[[66,116]],17:[[65,115],[117]],18:[[65,116],[118]],19:[[64,71],[73],[75,79],[82,115],[118]],20:[[67,70],[76,79],[81,115]],21:[[68,70],[77,79],[82,113]],22:[[68,80],[83,113]],23:[[69],[71,80],[83,111],[113]],24:[[63],[65],[72,81],[83,111],[114]],25:[[57,64],[75,110],[114]],26:[[56,64],[75,111]],27:[[56,66],[68,71],[75,112]],28:[[55,80],[82,112]],29:[[54,81],[83,112]],30:[[53,74],[76,82],[84,112]],31:[[53,75],[77,85],[90,111],[113]],32:[[24,25],[52,76],[78,86],[90,98],[102,107]],33:[[26],[52,76],[79,86],[92,97],[103,107]],34:[[28,29],[52,76],[79,84],[93,96],[103,108],[114]],35:[[20,22],[52,77],[79,82],[93,95],[105,109],[114]],36:[[20,22],[52,80],[94,95],[105,109],[115]],37:[[22,23],[28],[52,79],[94,95],[105],[107,109],[115,116]],38:[[22,23],[27,33],[53,82],[95],[105],[107,108],[116]],39:[[23,33],[54,82],[96],[105],[116,117]],40:[[26,35],[55,60],[62,82],[113]],41:[[26,32],[34,36],[64,81],[104],[106,107],[112,113]],42:[[25,31],[65,80],[105,107],[111,113]],43:[[25,29],[31],[65,79],[106,107],[110,113],[118]],44:[[24,29],[64,78],[106,107],[110,112],[120]],45:[[24,28],[65,77],[107,108],[110,112],[114,115],[121,124]],46:[[24,28],[66,77],[107,108],[123,126]],47:[[24,27],[66,77],[109],[124,127]],48:[[25,27],[66,77],[110],[117],[123,127]],49:[[26,29],[66,77],[128]],50:[[26,31],[66,77],[82]],51:[[27,33],[66,77],[81,82]],52:[[27,33],[66,76],[80,81]],53:[[29,33],[66,75],[80,81]],54:[[30,34],[66,74],[80,81]],55:[[30,34],[67,75],[79,80]],56:[[30,35],[67,74],[80]],57:[[30,36],[67,73]],58:[[30,36],[67,73]],59:[[30,36],[68,72]],60:[[30,35],[68,72]],61:[[30,36],[68,70]],62:[[30,37]],63:[[30,35]],64:[[30,35]],65:[[30,34]],66:[[31,33]],67:[[31,33]],68:[[31,33]],69:[[31,34]],70:[[31,33]],71:[[32,33]],72:[[32,34]],73:[[34,35]]}};var visibilityChanged=function(){var e,t,n={hidden:"visibilitychange",webkitHidden:"webkitvisibilitychange",mozHidden:"mozvisibilitychange",msHidden:"msvisibilitychange"};for(e in n)if(e in document){t=n[e];break}return function(n){return n&&document.addEventListener(t,function(){n(!document[e])}),!document[e]}}();(function(){$(function(){var e,t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q,R,U,z,W,X,V,J;if(!$("html").hasClass("canvas")){$("div#map").addClass("static");return}w={live:function(e){return"rgba(52, 177, 255, "+e+")"},beta:function(e){return"rgba(52, 177, 255, "+e+")"},"default":function(e){return"rgba(0,0,0,"+.32*e+")"}},t=$("header"),e=$("canvas"),s=e.get()[0],u=952,o=u*3/4,f=s.getContext("2d"),A=window.pixelRatio(),c=5*A,h=2*A,$(window).height()<700&&(c=4*A,t.addClass("small")),$(window).height()<550&&(c=3*A,h=1*A,t.addClass("tiny")),k=Math.round((u*A-135*(c+h)+h)/2),N=/(iPhone|iPad|iPod|Android)/i.test(window.navigator.userAgent),R=function(){return s.width=u*A,s.height=o*A,e.css({width:u,height:o})},R(),P=function(e,t){var n,r;return n=c*e+h*e,r=c*t+h*t,n+=k,[n,r]},d=function(e,t,n,r,i){var s;return e.beginPath(),e.fillStyle=t,s=c,N&&(s*=2),e.arc(n+s/2,r+s/2,s/2*i,0,2*Math.PI),e.fill()},q=.7,i=5e3,O=[],T=[],E=[],C=135,r=function(e,t,n){var r,i,s,a,f,l,c,h,p,d;window.current_country==="JP"&&(l=.65,e=(e+C*l)%C),a=C/2-e,r=Math.sqrt(a*a+t*t),f=P(e,t),c=u/2,h=o/2,i=c-f[0],s=h-f[1],d=[],d[0]=f[0]+a/1.5,d[1]=f[1]-t/1.5,p={x:e,y:t,delay:r*15*q,ticks:{count:0,delay:0},status:n,position:{start:d,end:f},flicking:!1},n!=="default"&&(p.ticks.count=Math.round(0+Math.random()*1),p.ticks.delay=p.delay+(Math.round(700+Math.random()*200)+r*10)*q,Math.round(Math.random()*10)===1&&(p.ticks.delay+=Math.round(Math.random()*600)*q,Math.round(Math.random()*2)===1&&(p.ticks.delay+=Math.round(Math.random()*600)*q))),O.push(p);if(p.status==="live"||p.status==="beta")return T.push(p)},J=window.data;for(F in J){a=J[F];for(H in a){_=a[H],z=parseInt(H,10);for(W=0,V=_.length;W<V;W++){M=_[W];if(M.length===1)U=M[0],(!N||U%2===1&&z%2===1)&&r(U,z,F);else{B=M[0],b=M[M.length-1];for(U=X=B;B<=b?X<=b:X>=b;U=B<=b?++X:--X)(!N||U%2===1&&z%2===1)&&r(U,z,F)}}}}return p=function(e,t){var n,r,s,a,f,l,c,h,p,v,g,y,b,E,S,x;e.clearRect(0,0,u*A,o*A),S=[];for(v=0,g=O.length;v<g;v++){f=O[v];if(f.delay>t)continue;b=f.position.start,h=b[0],p=b[1],E=f.position.end,r=E[0],s=E[1],l=Math.min((t-f.delay)/i,1),y=m(l),U=h+y*(r-h),z=p+y*(s-p),n=null,f.status!=="default"&&(f.ticks.delay>t?n=w["default"](1):!f.ticks.current&&!f.ticks.done&&(f.ticks.count>0?Math.round(Math.random())===1?(f.firstTick?n=w[f.status](Math.round(2+Math.random()*4)):(f.firstTick=!0,n="rgba(118, 198, 255, 1)"),f.ticks.count-=1):n=w["default"](1):f.ticks.current={startTime:t}),f.ticks.current&&(a=Math.min((t-f.ticks.current.startTime)/100,1),n=w[f.status](a),a>=1&&(f.ticks.current=null,f.ticks.done=!0))),n||(n=w[f.status](1)),c=Math.min((t-f.delay)/(i/5),1),x=m(c),S.push(d(e,n,U,z,x))}return S},v=function(e,t){var n,r,i,s,o,u,a,f,l,h,p,v,g,y,b;f=[];for(h=0,v=E.length;h<v;h++)s=E[h],s.flicking&&(y=s.position.end,U=y[0],z=y[1],s.flickingStartTime==null&&(s.flickingStartTime=t),i=Math.min((t-s.flickingStartTime)/1e4,1),l=m(i),a=[255,255,255],r=[52,177,255],u=[Math.round((r[0]-a[0])*l+a[0]),Math.round((r[1]-a[1])*l+a[1]),Math.round((r[2]-a[2])*l+a[2])],n="rgba("+u.join(",")+",1)",l>=1&&(s.flickingStartTime=null,s.flicking=!1,f.push(s)),e.clearRect(U-1,z-1,c+2,c+2),d(e,n,U,z,1));b=[];for(p=0,g=f.length;p<g;p++)s=f[p],o=E.indexOf(s),b.push(E.splice(o,1));return b},j=null,y=BezierEasing(.1,.8,.35,1),g={},m=function(e){return e=Math.round(e*1e4)/1e4,g[e]?g[e]:g[e]=y(e)},n=function(){var e,t;return e=Math.round(Math.random()*(T.length-1)),t=T[e],t.flicking=!0,E.push(t)},x=null,L=!1,S=!1,D=!1,l=0,I=function(e){var t,r;if(!L){j||(j=e),S&&(t=-e+j+l,j-=t,S=!1),l=r=e-j;if(r<i+100)p(f,r);else{if(x==null||x<r-1e3)x=r,n();v(f,r)}}return window.requestAnimationFrame(I)},visibilityChanged(function(e){return function(e){L=!e;if(!L)return S=!0}}(this)),N?$(window).load(function(e){return function(){return window.requestAnimationFrame(I)}}(this)):setTimeout(function(e){return function(){return window.requestAnimationFrame(I)}}(this),100)})}).call(this);