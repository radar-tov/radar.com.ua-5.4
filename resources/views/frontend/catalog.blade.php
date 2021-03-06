@extends('frontend.layout')

@section('seo')
    @if(isset($subcategory->meta_title) && !empty($subcategory->meta_title))
        <title>{{ $subcategory->meta_title }}</title>
    @else
        <title>{{ isset($subcategory->title) ? $subcategory->title : $header }}</title>
    @endif

    <meta name="description" content="{{ isset($subcategory->meta_description) ?  $subcategory->meta_description : ''}}"/>
    <meta name="keywords" content="{{ isset($subcategory->meta_keywords) ?  $subcategory->meta_keywords : ''}}"/>
@endsection

@section('top-scripts')

@endsection

@section('content')

<section class="breadcrumbs">
    <div class="container">
        <div class="row">
            <ol class="breadcrumb">
                <li><a href="/">Главная</a></li>
                @if(isset($subcategory->parent->slug))
                <li><a href="/{{ $subcategory->parent->slug }}">{{ $subcategory->parent->title }}</a></li>
                @endif
                <li class="active">{{ isset($subcategory->title) ? $subcategory->title : $header }}</li>
            </ol>
        </div>
    </div>
</section>

<section class="content">
    <!--Simple Menu-->
    <div class="container">
        <div class="row">
            <div class="col m12 l3 catalog no-padding main-sidebar2">
                @include('frontend.partials.sidebar')
            </div>
            <div class="col s12 m12 l9 catalog ">
                <h3>{{ isset($subcategory->title) ? $subcategory->title : $header }}</h3>

                @include('frontend.partials.products.controls')

                <div id="products">
                    @if(!Request::has('filter'))

                        @foreach($products as $product)
                            @include('frontend.partials.products.product_template')
                        @endforeach

                    @endif
                </div>

                <div class="col s12 no-padding _pagination" style="position: relative">
        @if(!Request::has('filter'))
            with(new \App\Services\CustomPagination($products))->render() 
        @endif
    </div>

                @if(isset($subcategory))
                    
                    @if($subcategory->description)
                   
                        <div class="col s12 shop-info sport-girl">
                            {!! $subcategory->description !!}
                        </div>
                    @endif
                @endif
            </div>
        </div>
    </div>
    <!--/Menu-->
</section>

@include('frontend.partials.scripts.filter_handler')
@endsection


@section('bottom-scripts')

@endsection