<?php

Route::group(['middleware' => ['permissions','handleSlug'],'namespace'=>'\App\Http\Controllers\Admin'], function() {

    Route::group(['prefix'=>'dashboard'], function () {

        // Images
        Route::post('products/{id}/images/add',['as'=>'dashboard.products.images', 'uses'=>'ProductsController@images']);
        //copy
        Route::get('products/copy/{id}',['as' => 'dashboard.products.copy', 'uses' => 'ProductsController@copyProduct']);
        // Trash
        Route::get('products/trash',['as'=>'dashboard.products.trash', 'uses'=>'ProductsController@trash']);
        Route::get('products/{id}/trash',['as'=>'dashboard.products.trash.restore', 'uses'=>'ProductsController@restore']);
        Route::delete('products/{id}/trash',['as'=>'dashboard.products.trash.remove', 'uses'=>'ProductsController@remove']);
        // Drafts
        Route::get('products/drafts',['as'=>'dashboard.products.drafts', 'uses'=>'ProductsController@drafts']);

        Route::get('transfer/rollback',['as'=>'dashboard.transfer.rollback','uses'=>'TransferController@rollback']);
        Route::get('transfer/export',['as'=>'dashboard.transfer.export','uses'=>'TransferController@export']);
        Route::resource('transfer','TransferController');
        /**
         * Products routes begin
         * */
        Route::post('product-actions/getProductsBySale','ProductsController@getProductsBySale');
        Route::post('product-actions/getProductsForSale','ProductsController@getProductsForSale');
        Route::post('product-actions/getRelatedProducts','ProductsController@getRelatedProducts');
        Route::post('product-actions/syncRelated','ProductsController@syncRelatedProducts');
        Route::get('product-actions/getProducts','ProductsController@getProducts');
        Route::post('product-actions/delete','ProductsController@massDelete');
        Route::post('product-actions/deactivate','ProductsController@massDeactivate');
        Route::post('product-actions/activate','ProductsController@massActivate');
        Route::post('product-actions/markAsBestseller','ProductsController@massMarkAsBestseller');
        Route::post('product-actions/unmarkAsBestseller','ProductsController@massUnmarkAsBestseller');
        Route::post('product-actions/markAsNew','ProductsController@massMarkAsNew');
        Route::post('product-actions/unmarkAsNew','ProductsController@massUnmarkAsNew');
        Route::post('product-actions/dropDiscount','ProductsController@massDropDiscount');
        Route::post('product-actions/stock-products','ProductsController@getStockProducts');
        Route::post('product-actions/sklad-true','ProductsController@massSkladTrue');
        Route::post('product-actions/sklad-false','ProductsController@massSkladFalse');
        Route::post('product-actions/sklad-custom','ProductsController@massSkladCustom');
        Route::post('product-actions/sitemap-true','ProductsController@massSitemapTrue');
        Route::post('product-actions/sitemap-false','ProductsController@massSitemapFalse');
        Route::post('product-actions/yandex-true','ProductsController@massYandexTrue');
        Route::post('product-actions/yandex-false','ProductsController@massYandexFalse');

        Route::get('products/trash',['as'=>'dashboard.products.trash', 'uses'=>'ProductsController@trash']);
        Route::post('get-products', 'ProductsController@getProducts');
        Route::delete('products/destroy-from-trash/{product_id}', 'ProductsController@destroyFromTrash');
        Route::get('products/restore-from-trash/{product_id}', 'ProductsController@restoreFromTrash');
        Route::resource('products', 'ProductsController');

        /*
         * Products routes end
         */

        Route::delete('destroy_ordered_product/{product_id}', 'OrderedProductsController@destroy');

        Route::resource('orders', 'OrdersController');
        Route::resource('shipments', 'ShipmentMethodsController');
        Route::resource('payments', 'PaymentMethodsController');
        Route::resource('groups', 'CustomerGroupsController');
        Route::resource('brands', 'BrandsController');
        Route::resource('sales', 'SalesController');
        Route::resource('stock', 'StockController');

        Route::get('users/search',['as'=>'dashboard.users.search','uses'=>'UsersController@search']);

        Route::resource('users', 'UsersController');

        Route::resource('pages', 'PagesController');
        Route::resource('static_pages', 'StaticPagesController');
        Route::resource('articles', 'ArticlesController');
        Route::resource('sliders', 'SlidersController');
        Route::resource('slider2','Slider2Controller');
        Route::post('categories/order', ['as' => 'dashboard.categories.order', 'uses' => 'CategoriesController@order']);
        Route::resource('categories', 'CategoriesController');
        Route::resource('banners', 'BannersController');

        Route::get('reviews/search',['as'=>'dashboard.reviews.search','uses'=>'ReviewsController@search']);
        Route::resource('reviews', 'ReviewsController');

        Route::post("categories/get-fields/{category_id}", "CategoriesController@loadCategoryFields");

        Route::get('helpers/translate','HelperControllers@translate');

        /**
         * Images routes
         * */
        Route::post("upload-image", "ProductImagesController@uploadImage");
        Route::post("get-images/{accommodation_id}", "ProductImagesController@getProductImages");
        Route::post("remove-image/{image_id}", "ProductImagesController@removeImage");
        Route::post("set-thumbnail/{image_id}", "ProductImagesController@setThumbnail");
        Route::post("remove-flash/{product_id}", "ProductsController@removeFlash");


        Route::get('elfinder-popup/{input_id}',
            ['as' => 'dashboard.elfinder-popup',
                'uses' => '\Barryvdh\Elfinder\ElfinderController@showPopup'
            ]
        );


        Route::get('/index',['as'=>'dashboard.index','uses'=>'DashboardController@getIndex']);
        Route::put('/{id}',['as'=>'dashboard.update','uses'=>'DashboardController@putIndex']);

        /* PDF */
        Route::post("upload-pdf","ProductsController@uploadPDF");
        Route::post("remove-pdf", "ProductsController@removePDF");
        Route::get("pdf", 'PdfController@index');
        Route::get("pdf/add/{categoryID}/{brandID}/{id}", 'PdfController@show');
        Route::get("pdf/{id}/{productID}", 'PdfController@edit');
        Route::post("pdf", 'PdfController@update');
        Route::post("pdf/addfile", 'PdfController@store');
        Route::get('pdf/get', 'PdfController@getList');
        Route::get('pdf-get-order', 'PdfController@orderList');
        Route::post('pdf/order', 'PdfController@orderSave');
        /* /end PDF */

        /* PARAMETERS */
        Route::get("parameters/add/{categoryID}/{brandID}/{productID}", ['as'=>'dashboard.parameters.add','uses'=>'ParametersController@create']);
        Route::post("parameters/addparams", ['as'=>'dashboard.parameters.addparams','uses'=>'ParametersController@addparams']);
        Route::get("parameters/selection/{categoryID}/{brandID}/{productID}", ['as'=>'dashboard.parameters.selection','uses'=>'ParametersController@index']);
        Route::post("parameters/save", ['as'=>'dashboard.parameters.save','uses'=>'ParametersController@saveParams']);
        Route::get("parameters/list", ['as'=>'dashboard.parameters.list','uses'=>'ParametersController@show']);
        Route::get("parameters/edit_value/{productID}/{parameterID}", ['as'=>'dashboard.parameters.edit_value','uses'=>'ParametersController@edit']);
        Route::get("parameters/edit_value_name/{valueID}", 'ParametersController@editValueName');
        Route::post("parameters/save_value_name", 'ParametersController@saveValueName');
        Route::post("parameters/save_value", ['as'=>'dashboard.parameters.save_value','uses'=>'ParametersController@save_value']);
        Route::post("parameters/getvalue", ['as'=>'dashboard.parameters.getvalue','uses'=>'ParametersController@getvalue']);
        Route::get("parameters/edit_param_name/{paramID}", ['as'=>'dashboard.parameters.edit_param','uses'=>'ParametersController@edit_param']);
        Route::get("parameters/edit_param/{catID}/{brandID}/{productID}/{ID}", 'ParametersController@editParamName');
        Route::post("parameters/save_param", ['as'=>'dashboard.parameters.save_param','uses'=>'ParametersController@save_param']);
        Route::post("parameters/save_param_name", ['as'=>'dashboard.parameters.save_param','uses'=>'ParametersController@saveParamName']);
        Route::post("parameters/delete", ['as'=>'dashboard.parameters.delete','uses'=>'ParametersController@delete']);
        Route::get("parameters/get", 'ParametersController@getParam');
        Route::get("parameters-get-order", 'ParametersController@orderList');
        Route::post("parameters/order", 'ParametersController@orderSave');
        /* /end PARAMETER */

        /* FILTERS */
        Route::post('values/{id}/filter',['as'=>'dashboard.values.filter', 'uses'=>'FiltersValuesController@fetchByFilter']);
        Route::post('values/order',['as'=>'dashboard.values.order', 'uses'=>'FiltersValuesController@order']);
        Route::post('filters/get', 'FiltersController@getFilters');
        Route::resource('filters', 'FiltersController');
        Route::put('values/{id}', 'FiltersValuesController@update');
        Route::delete('values/{id}', 'FiltersValuesController@destroy');
        Route::resource('values', 'FiltersValuesController');
        /* /end FILTERS */

        /* CHRACTERISTICS */
        Route::post('characteristics_value/{id}/characteristics',['as'=>'dashboard.values.characteristics', 'uses'=>'CharacteristicsValuesController@fetchByCharacteristic']);
        Route::post('characteristics_value/order',['as'=>'dashboard.characteristics_value.order', 'uses'=>'CharacteristicsValuesController@order']);
        Route::post('characteristics/get', 'CharacteristicsController@getCharact');
        Route::get("characteristics/{id}/edit", ['as'=>'dashboard.characteristics.edit', 'uses'=>'CharacteristicsController@edit']);
        Route::resource('characteristics', 'CharacteristicsController');
        Route::resource('characteristics_value', 'CharacteristicsValuesController');
        /* /end CHRACTERISTICS */


        /* CENA */
        Route::get('cena/list', 'CenaController@show');
        Route::get('cena/{id}/refresh', 'CenaController@refresh');
        Route::resource('cena', 'CenaController');
        /* /end CENA */
    });

});

