function printsite(){"Win32"==navigator.platform?window.print():alert("print out this page by hitting command + p")}function filterProducts(t,e){$("#isDirty").val(1),isNaN(e)&&(e=1);var i=$(".orderBy").serialize(),n=$("#filter");n.length>0&&(i=n.serialize()),getParameterByName("search")&&(i+="&search="+getParameterByName("search")),t&&(i+="&click=true"),$.ajax({url:location.href,method:"GET",cache:!1,data:i+"&page="+e,beforeSend:function(){$("#products").html("<div align='center'><img src='/frontend/images/loading.gif'></div>")},success:function(t){$("#products").html(t.products),$("._pagination").html(t.pagination),initRating()}})}$(document).ready(function(){$(".fancybox").fancybox(),$(".various").fancybox({maxWidth:500,maxHeight:300,fitToView:!1,width:"70%",height:"50%",autoSize:!1,closeClick:!1,openEffect:"none",closeEffect:"none"}),$(".various1").fancybox({maxWidth:500,maxHeight:800,fitToView:!1,width:"70%",height:"90%",autoSize:!1,closeClick:!1,openEffect:"none",closeEffect:"none"}),setTimeout(function(){var t=document.getElementById("partner");t.style.display="block"},1e3)});var disabled=$(".disabled").prop("disabled",!0);$("._disabled").click(function(){return!1}),$("body").on("click",".buy",function(){var t=$(this).attr("data-productid"),e=$("#token").val();$.post("/add_to_cart",{productId:t,_token:e}).done(function(t){$("#_cart").find(".qty").html(t.count),$("#_cart").find(".qty-items").html(t.count),$("#_cart").find("._sum").html(t.total),$(".cart_empty").hide(),$(".cart_filled").show()}),$(this).val("В корзине"),$(this).parents(".item").find(".buy").val("В корзине"),setTimeout(function(){$("#otvet").click()},1500)}),$("body").on("click",".buyKol",function(){var t=$(this).attr("data-productid"),e=$("#colichestvo").val(),i=$("#token").val();$.post("/addKol_to_cart",{productId:t,qty:e,_token:i}).done(function(t){$("#_cart").find(".qty").html(t.count),$("#_cart").find(".qty-items").html(t.count),$("#_cart").find("._sum").html(t.total),$(".cart_empty").hide(),$(".cart_filled").show()}),$(this).val("В корзине"),$(this).parents(".item").find(".buy").val("В корзине"),setTimeout(function(){$("#otvet").click()},1500)}),$(".buySet").click(function(){var t=$(this).attr("data-stockid"),e=$("#token").val();$.post("/add_set_to_cart",{stockId:t,_token:e}).done(function(t){$("#_cart").find(".qty").html(t.count),$("#_cart").find(".qty-items").html(t.count),$("#_cart").find("._sum").html(t.total),$(".cart_empty").hide(),$(".cart_filled").show()}),$(this).val("В корзине"),$(this).parents(".item").find(".buy").val("В корзине")}),$("body").on("click",".compare",function(){var t=$(this).attr("data-productid"),e=$("#token").val();$.post("/add_to_compare",{productId:t,_token:e}).done(function(t){$("#com_count").html(t.count)}),$(this).val("В сравнении"),$(this).parents(".item").find(".compare").val("В сравнении")}),$("body").on("click",".video-review",function(t){t.preventDefault();var e=$(this).siblings("._video").html();$("#video").find(".video-container").html(e)}),$("#range").ionRangeSlider({type:"double",min:0,max:maxPrice,from:0,to:filtrPrice,prefix:"",step:100,onFinish:function(t){$("#filter").change()},prettify:function(t){var e="";return t+" грн."+e}});var getParameterByName=function(t,e){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var i=new RegExp("[\\?&]"+t+"=([^&#]*)"),n=i.exec(e?e:location.search);return null===n?"":decodeURIComponent(n[1].replace(/\+/g," "))};$("#filter").on("change",filterProducts),setTimeout(function(){filterProducts(!1)},100),$(".orderBy").change(function(){var t=this;$("select.orderBy").each(function(e,i){i.selectedIndex=t.selectedIndex,$(".select-dropdown").val(i.options[i.selectedIndex].innerHTML)}),filterProducts(!0)}),$("body").on("click","._pagination a",function(t){t.preventDefault(),$("html, body").animate({scrollTop:0},0);var e=$(this).attr("href"),i=parseInt(getParameterByName("page",e));filterProducts(!0,i)}),$("#range").change(function(){return!1}),$("#rating_3").rating({fx:"full",image:"/frontend/images/stars2.png",loader:"/frontend/images/loading.gif",url:location.href,type:"GET",readOnly:!!$("#check").val(),callback:function(t){this._data.val=Math.round(t),this.set(),this.vote_success.fadeOut(2e3)}}),setTimeout(function(){$(".compare-list").each(function(){var t=0,e=this;$(e).find(".compare_product").each(function(){var e=$(this).outerHeight();t<=e&&(t=e)}),$(e).find(".compare_product").each(function(){$(this).height(t)})})},1e3);