$(document).ready(function(){function t(t,n){$('.tab-control[data-identifier="'+t+'"]').each(function(){var r=$(this),i=$(this).find("nav"),s=i.find('a[data-tab="'+n+'"]');s.length>0&&(i.find("a").removeClass("selected"),s.addClass("selected"),r.find("div.terminal-wrap").each(function(){var r=$(this),i=r.find("div.terminal");i.html(jQuery.trim(e[t][n]))}))})}var e={};$("section.tab-control").each(function(t){var n=$(this),r="data-"+t;n.attr("data-identifier",r),e[r]={};var i=n.find("data");i.each(function(t){var n=$(this),i="tab-"+t,s=n.html().trim();e[r][i]=s});var s=$.map(i,function(e,t){var n="tab-"+t,r=$(e).attr("display-name");return"<a href='.' data-tab='"+n+"'>"+r+"</a>"}).join(""),o=$("<nav>"+s+"</nav>"),u=$('<div class="terminal-wrap"><div class="terminal"></div></div>');n.append(o),n.append(u)}),$(".tab-control").each(function(){var e=$(this),n=e.attr("data-identifier");e.find("nav a:first-child").each(function(){t(n,$(this).attr("data-tab"))}),e.find("nav a").click(function(){var e=$(this),r=$(window).scrollTop(),i=e.offset().top;t(n,e.attr("data-tab"));var s=e.offset().top-i;return $(window).scrollTop(r+s),!1})})});