(function(a){a(document).on(TMC.Common.Control.Resize.getWindowSizeChangeEventName(),function(){function b(){a(".section.image > ul.figure-block > li").css({height:""});a(".section.image > ul.figure-block > li > dl > dt").css({height:""});a(".section.image > ul.figure-block > li > dl > dt").css({"line-height":""});a.each(a(".section.image > ul.figure-block"),function(e,j){if(a(j).parent().hasClass("list3")&&TMC.Common.Control.Resize.isSP()){return true}var h=0;var g=0;a.each(a(j).find(" > li"),function(l,m){var i=0;if(a(m).find("dt > iframe").length===0){i=a(m).find("dt").height()}else{i=a(m).find("dt > iframe").height()}if(h<i){h=i}var k=a(m).outerHeight()-i;if(g<k){g=k}});var f=h+g;a(j).find(" > li").css({height:f+"px"});a(j).find(" > li > dl > dt").css({height:h+"px"});a(j).find(" > li > dl > dt").css({"line-height":h+"px"})})}b();function d(){if(TMC.Common.Control.Resize.isPC()){var f=a(window).width();var g=Math.floor(f/4)<360?Math.floor(f/4):360;var e=f-e;a(".section.column-l:not(.full, .full-border-t)").css("margin-right",g+"px");a(".section.column-l.full, .section.column-l.full-border-t").css("margin-right",g-66+"px");a(".section.column-r").css("width",g+"px")}else{a(".section.column-l:not(.full, .full-border-t)").css("margin-right","");a(".section.column-l.full, .section.column-l.full-border-t").css("margin-right","");a(".section.column-r").css("width","")}}d();function c(){var g=a(".column-r");if(g.length===1){var f=g.children(".title");var e=g.children("div");var h=f.length>0?(f.outerHeight(true)):0;var i=e.length>0?e.height():0;a("#contents-body").css({"min-height":(h+i)})}}c()})})(jQuery);