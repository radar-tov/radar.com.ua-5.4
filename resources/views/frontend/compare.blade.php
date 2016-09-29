@inject('cartProvider', '\App\ViewDataProviders\CartDataProvider')
@inject('settingsProvider', '\App\ViewDataProviders\SettingsDataProvider')

@section('seo')
    <title>{{ 'Сравнение' }}</title>
    <meta name="description" content=""/>
    <meta name="description" content=""/>
@endsection

@extends('frontend.layout')
@section('content')





    <section class="breadcrumbs">
    <div class="container">
        <div class="row">
            <ol class="breadcrumb">
                <li><a href="/">Главная</a></li>
                <li class="active">Сравнение</li>
            </ol>
        </div>
    </div>
</section>

<section class="content compare_page" id="cart">
    <div class="container" v-el="cartContent" style="display: none;">
    <h3>Сравнение</h3>

    @foreach($cartProvider->getToCompare() as $categoryName => $chunk)


        <div><h4>{{ $categoryName }}</h4></div>

<div class="row compare-list">

        @foreach($chunk as $product)

            <div class="col s12 m6 l4">
            <div class="compare_product">

            <div class="name">{{ $product->name }}</div>
            <div>{{ $product->price }}</div>
            




            <div><img src="{{ $product->options->thumbnail}}"></div>

            <br>
           
               @foreach($product->options->characteristics as $key => $val)
               
	                <div class="row">
	                <div class="col aspect s12">
	                <div class="row">
	                  
	                    <div class="col s8 m7"><p>{{ $key }}</p></div>
	                    <div class="col s4 m5 no-padding"><p >{{ $val }}</p></div>
	                    </div>
	                </div>
	                </div>
               
                @endforeach
                <button v-on="click: deleteItem({{ $product->id }})" class="compare-button-hover compare anim" id="remove">Удалить из сравнения</button>
                </div>
            </div>
        @endforeach
         

       
             </div>



    @endforeach


        <!--<h5 v-if="!len > 0"> Нет товаров для сравнения</h5>-->
        <div class="row"  v-show="len > 0">
            {{--<h1>@{{ len == 0 }}</h1>--}}

            <div>
                <div class="basket-row col s12 no-padding">
                    <div class="col m1 hide-on-small-and-down center">Фото</div>
                    {{--<div class="col s1">№</div>--}}
                    <div class="col m2 hide-on-small-and-down">Код</div>
                    <div class="col s5 m4">Название</div>
                    <div class="col s3 m3">Кол-во</div>
                    <div class="col s3 center m2">Всего</div>
                </div>
                <!--Товар в корзине-->

              
                <div class="basket-item col s12" v-repeat="product in cart">
                    <div class="col m1 hide-on-small-and-down item-image">
                        <a href="/@{{ product.options.categorySlug }}/@{{ product.options.productSlug }}">
                            <img v-attr="src: product.options.thumbnail" class="responsive-img" v-if="product.options.thumbnail"/>
                            <img src="/frontend/images/default.png" class="responsive-img" v-if="!product.options.thumbnail"/>
                        </a>
                    </div>

                    {{--<div class="col s1"><p>1</p></div>--}}
                    <div class="col m2 hide-on-small-and-down">
                        <p>@{{ product.options.article }}</p>
                    </div>
                    <div class="col s5 m4">
                        <p><a href="/@{{ product.options.categorySlug }}/@{{ product.options.productSlug }}">@{{ product.name }}</a></p>
                        <p>@{{ product.options.excerpt }}</p>
                    </div>
                    <div class="col s3 m3 center">
                        <input type='number'
                            value="@{{ product.qty }}"
                            v-on="input: updateItem(product, this)"
                            debounce="500"
                            class="item-quantity"
                            v-attr='disabled: product.options.in_set_with'>

                        <div class="options">
                            <button type="submit" v-on="click: deleteItem(product.rowid)"><i class="fa fa-trash"></i></button>
                        </div>
                    </div>
                    <div class="col s3 m2 center">
                        <p v-show="product.subtotal > 0">
                            @{{ product.subtotal }} <span>грн</span>
                        </p>
                        <p v-show="product.subtotal == 0">
                            <span style="color:indianred;font-size:16px">В подарок!</span>
                        </p>

                    </div>
                </div>
            </div>
            <!--конец товара в корзине. ха ха ха-.-->
            <div class="col s12 no-padding grey">
                <div class="col s6 l10 right-align" id="order_subtotal"><p class="bold">Всего:</p></div>
                <div class="col s6 l2 center" id="order_subtotal_basket"><p class="bold">@{{ total }} грн</p></div>
            </div>
            <!--Registration - DON'T show if user authorized on the site-->

            
            <div class="col clearing s12"></div>
       
                @if (count($errors) > 0)
                    <div class="col s6">
                        <ul style="padding-top: 20px;">
                            @foreach ($errors->all() as $error)
                                <li style="color: indianred">{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif
            <div class="col s12 offset-top-30px"></div>
        </div>


        <input type="hidden" value="{{ csrf_token() }}" v-model="token"/>
        {{--<pre>--}}
            {{--@{{ $data | json}}--}}
        {{--</pre>--}}
    </div>
<!--<div id="otc" class="modal">
    <div class="modal-content">
        <a href="#!" class="modal-action modal-close waves-effect btn-flat "><i class="fa fa-close"></i></a>
        <p>{!! $settingsProvider->getAgreement() !!}</p>тег p можно убрать
    </div>-->
</div>
</section>

@endsection

@section('bottom-scripts')
    {!! Html::script("admin/assets/js/vue.js") !!}

    <script>
        new Vue({

            el: "#cart",
            data: {
                cart: {},
                token: null,
                len: 0,
                total: 0,
                stockProducts: null
            },

            ready: function(){
                var vue = this;
                vue.getContent();
//                setInterval(function(){
//                    vue.getContent();
//                }, 2000);

                $(this.$$.cartContent).show();
            },

            methods: {
                getContent: function(){
                    var vue = this;
                    $(this.$$.cartContent).css('opacity', '.4');
                    $.post("/cart/get_to_compare", {_token: this.token }).done(function(cart){
                        vue.cart = cart.content;
                        vue.len = cart.len;
                        vue.total = cart.total;

                        var cart = $("#_cart");
                        cart.find('.qty').html(vue.len);
                        cart.find('.qty-items').html(vue.len);
                        cart.find('._sum').html(vue.total);

                        $(vue.$$.cartContent).css('opacity', '1');
                    });
                },
                deleteItem: function(id) {
                    var vue = this;
                    $.post('/cart/delete_from_compare', { _token: this.token, product_id: id})
                        .done(function(){
                                window.location.reload();
                            })
                },

                updateItem: function(product, _qty){

                    var vue = this,
                        qty = $(_qty.$el).find('.item-quantity');

//                    console.log(product.options.instance);

                    qty.css('border-color', '#7cb342');
                    if(qty.val().match(/^[0-9]{1,3}$/) && qty.val() > 0){
                        $.post('/cart/update_item', {
                            _token: this.token,
                            product: product,
                            qty: qty.val(),
                            instance: product.options.instance
                        }).done(function(){
                            vue.getContent();
                        })
                    } else if(qty.val().match(/^\d{0}$/)){
                        qty.css('border-color', 'red');
                    } else {
                        $(_qty.$el).find('.item-quantity').val(product.qty);
                    }
                }
            }



        })
    </script>

    <script type="text/javascript">
    setTimeout(function(){
    $('.compare-list').each(function(){

		 var min_height = 0;
		 var parent = this;
		 $(parent).find('.compare_product').each(function(){
		  var height = $(this).outerHeight();
		  if(min_height <= height) { min_height = height;}
		 })
		 $(parent).find('.compare_product').each(function(){
		  $(this).height(min_height);
		 })
		})},1000);
    </script>


@endsection
