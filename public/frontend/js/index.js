/**
 * Created by Evgenii on 05.12.2016.
 */

$(document).ready(function() {
    $(".fancybox").fancybox();

    $(".various").fancybox({
        maxWidth	: 500,
        maxHeight	: 300,
        fitToView	: false,
        width		: '70%',
        height		: '50%',
        autoSize	: false,
        closeClick	: false,
        openEffect	: 'none',
        closeEffect	: 'none'
    });

    $(".various1").fancybox({
        maxWidth	: 500,
        maxHeight	: 800,
        fitToView	: false,
        width		: '70%',
        height		: '90%',
        autoSize	: false,
        closeClick	: false,
        openEffect	: 'none',
        closeEffect	: 'none'
    });

    setTimeout(function() {
        var partner = document.getElementById('partner');
        partner.style.display = 'block';
    }, 1000);

});

//Из файла resources\views\frontend\layout.blade.php
//>>>>>>>>>>>>>>
var disabled = $(".disabled").prop('disabled', true);

$("._disabled").click(function () {
    return false;
})

function printsite() {
    if (navigator.platform == "Win32") {
        window.print();
    } else {
        alert("print out this page by hitting command + p");
    }
}



$("body").on('click', '.buy', function(){
    var productId = $(this).attr('data-productid'),
        token = $("#token").val();
    $.post('/add_to_cart', {'productId': productId,  _token: token}).done(function(data){
        $("#_cart").find('.qty').html(data.count);
        $("#_cart").find('.qty-items').html(data.count);
        $("#_cart").find('._sum').html(data.total);
        $('.cart_empty').hide();
        $('.cart_filled').show();
    });
    $(this).val('В корзине');
    $(this).parents('.item').find('.buy').val('В корзине');

    setTimeout(function() {
        $("#otvet").click();
    }, 1000);

});

$("body").on('click', '.buyKol', function(){
    var productId = $(this).attr('data-productid'),
        qty = $("#colichestvo").val(),
        token = $("#token").val();
    $.post('/addKol_to_cart', {'productId': productId, 'qty': qty,  _token: token}).done(function(data){
        $("#_cart").find('.qty').html(data.count);
        $("#_cart").find('.qty-items').html(data.count);

        $("#_cart").find('._sum').html(data.total);
        $('.cart_empty').hide();
        $('.cart_filled').show();
    });
    $(this).val('В корзине');
    $(this).parents('.item').find('.buy').val('В корзине');

    setTimeout(function() {
        $("#otvet").click();
    }, 1000);

});


$(".buySet").click(function(){
// console.log(this);
// console.log($(this).attr('data-stockid'));
    var stockId = $(this).attr('data-stockid'),
        token = $("#token").val();

    $.post('/add_set_to_cart', {'stockId': stockId, _token: token}).done(function(data){
//          console.log(data);
        $("#_cart").find('.qty').html(data.count);
        $("#_cart").find('.qty-items').html(data.count);

        $("#_cart").find('._sum').html(data.total);
        $('.cart_empty').hide();
        $('.cart_filled').show();
    });

    $(this).val('В корзине');
    $(this).parents('.item').find('.buy').val('В корзине');
})
//<<<<<<<<<<<<<<<<<<<<<
//Из файла resources\views\frontend\layout.blade.php


//Из файла frontend.partials.scripts.add_to_compare
//>>>>>>>>>>>>>>>>>
$("body").on("click",".compare",function()
{
    var productId = $(this).attr('data-productid');
    var token = $('#token').val();

    $.post('/add_to_compare', {'productId': productId, _token: token}).done(function(data){

        $("#com_count").html(data.count);//(parseInt($("#com_count").html()) + 1);
    });
    $(this).val('В сравнении');
    $(this).parents('.item').find('.compare').val('В сравнении');

});
//<<<<<<<<<<<<<<<<<<<<
//Из файла frontend.partials.scripts.add_to_compare


//Из файла resources\views\frontend\catalog.blade.php
//>>>>>>>>>>>>>>>>
$("body").on('click', '.video-review', function(e){
    e.preventDefault();
    var video = $(this).siblings('._video').html();
    $('#video').find('.video-container').html(video);
})
//<<<<<<<<<<<<<<<
//Из файла resources\views\frontend\catalog.blade.php


//из файла frontend.partials.scripts.filter_handler
//>>>>>>>>>>>>>>>>>
$("#range").ionRangeSlider({
    type: "double",
    min: 0,
    max: maxPrice,
    from: 0,
    to: filtrPrice,
    prefix: "",
    step: 100,
    onFinish: function (data) {
        $("#filter").change();
    },
    prettify: function (num) {
        var endSign = '';
//                if(this.max == num) endSign = ' +';
        return (num ) + ' грн.' + endSign;
    }
});


/* Parse Query string */
var getParameterByName = function(name, href) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(!!href ? href : location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};



$("#filter").on('change', filterProducts);
setTimeout(function(){
    filterProducts(false);
},100);


$(".orderBy").change(function(){
    var $this = this;
    $('select.orderBy').each(function(i, sel){
        sel.selectedIndex = $this.selectedIndex;
        $('.select-dropdown').val(sel.options[sel.selectedIndex].innerHTML);
    });
    filterProducts(true);
});


function filterProducts(filcl, page){
    $("#isDirty").val(1);
    if(isNaN(page)) page = 1;

    var data = $('.orderBy').serialize(),
        filters = $("#filter");

    if(filters.length > 0){
        data = filters.serialize();
    }

    if(!!getParameterByName('search')) data += '&search=' + getParameterByName('search');

    if(filcl) data = data + '&click=true';

    $.ajax({
        url: location.href,
        method: 'GET',
        cache: false,
        data: data + '&page=' + page
    }).done(function(response){
        $("#products").html(response.products);
        $("._pagination").html(response.pagination)

        initRating();
    });
}

$("body").on('click', '._pagination a', function(event){
    event.preventDefault();
//        $('html', 'body').scrollTop(0);
    $("html, body").animate({ scrollTop: 0 }, 0);
    var href = $(this).attr('href'),
        page = parseInt(getParameterByName('page', href));
    filterProducts(true, page);
});


$("#range").change(function(){
    return false;
})
//<<<<<<<<<<<<<<<<<<<<<
//из файла frontend.partials.scripts.filter_handler


//Из файла resources\views\frontend\product.blade.php
//>>>>>>>>>>>>>>>>>>>>>
//console.log(!!$("#check").val());

$('#rating_3').rating({
    fx: 'full',
    image: '/frontend/images/stars2.png',
    loader: '/frontend/images/loader.gif',
    url: location.href, /*обработка результатов голосования*/
    type: 'GET',
    readOnly: !!$("#check").val(),
    callback: function (responce) {
        this._data.val = Math.round(responce);
        this.set();
        this.vote_success.fadeOut(2000);
    }
});
//<<<<<<<<<<<<<<<<<<<<<<<<
//Из файла resources\views\frontend\product.blade.php


//Из файла resources\views\frontend\compare.blade.php
//>>>>>>>>>>>>>>>>>>>>>>>>>
setTimeout(function () {
    $('.compare-list').each(function () {

        var min_height = 0;
        var parent = this;
        $(parent).find('.compare_product').each(function () {
            var height = $(this).outerHeight();
            if (min_height <= height) {
                min_height = height;
            }
        })
        $(parent).find('.compare_product').each(function () {
            $(this).height(min_height);
        })
    })
}, 1000);
//<<<<<<<<<<<<<<<<<<<<<<<<
//Из файла resources\views\frontend\compare.blade.php


//Из файла resources\views\frontend\layout.blade.php
//>>>>>>>>>>>>>>>>>>>>>>>>>
//var flashObject = $(".flashObject");
//flashObject.css({"display": "block"});
//
//$(document).ready(function () {
//    $(".object-3d").click(function () {
//        $(".modalTest").addClass("modalAnimation");
//        $("body").append("<div class='lean-overlay over' id='materialize-lean-overlay-4' style='z-index: 1002; display: block; opacity: 0.5;'></div>");
//
//        $('.over').show();
//        flashObject.css({"margin": "auto"});
//        function second() {
//            $(".object-hover").css({"display": "none"});
//        }
//        setTimeout(second, "400");
//    });
//    $(".objClose").click(function () {
//        $('.over').hide();
//        $(".modalTest").removeClass("modalAnimation");
//        $(".over").css("display", "none");
//        flashObject.css({"margin-left": "-3000px"});
//    });
//});

//<<<<<<<<<<<<<<<<<<<<<<<<
//Из файла resources\views\frontend\layout.blade.php
