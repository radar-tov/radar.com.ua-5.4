<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Models\Cenagrup;
use App\Models\Product;

class CenaController extends AdminController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.cena.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $cenagrup = Cenagrup::create([]);
        return view('admin.cena.create', compact('cenagrup'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Cenagrup $cenagrup, Request $request)
    {
        if($cenagrup->findOrFail($request->id)->update($request->all())){
            return '<h3 align="center">Сохранено.</h3>';
        }else{
            return '<h3 align="center">Ошибка.</h3>';
        }
    }


    public function show(Cenagrup $cenagrup){
        $cenagrups = $cenagrup->orderBy('name')->with('getCountProducts')->get();
        return view('admin.cena.list', compact('cenagrups'));
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $cenagrup = Cenagrup::find($id);
        return view('admin.cena.edit', compact('cenagrup'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Cenagrup $cenagrup, Request $request, $id)
    {
        $request->merge(array('curs' => str_replace(",",".",$request->get('curs'))));
        $request->merge(array('skidka' => str_replace(",",".",$request->get('skidka'))));
        $request->merge(array('nacenka' => str_replace(",",".",$request->get('nacenka'))));
        $request->merge(array('skidka_montaj' => str_replace(",",".",$request->get('skidka_montaj'))));

        if($cenagrup->findOrFail($id)->update($request->all())){
            return '<h3 align="center">Сохранено.</h3>';
        }else{
            return '<h3 align="center">Ошибка.</h3>';
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Cenagrup $cenagrup, $id)
    {
        if($cenagrup->findOrFail($id)->delete()){
            return '<h3 align="center">Удалено.</h3>';
        }else{
            return '<h3 align="center">Ошибка.</h3>';
        }
    }


    public function refresh(Cenagrup $cenagrup, Product $product_m, $id){
        $cenagrup = $cenagrup->find($id);
        $products = $product_m->where('cenagrup_id', $id)->get();

        $out = "<p>Обновляем цены в товарах группы: ".$cenagrup->name."</p>";
        $out .= "<p>Найдено товаров: ".count($products)."</p>";

        foreach($products as $product){
            $out .= "<hr>";
            $out .= "<p>Товар:".$product->title."</p>";
            if($product->base_price != 0){

                $product->price = round(($product->base_price * $cenagrup->curs));
                $out .= "<p>Цена - ".$product->price."</p>";

                $product->out_price = round(($product->base_price * $cenagrup->curs));
                $out .= "<p>Выходная цена - ".$product->out_price."</p>";

                $product->discount = $cenagrup->skidka;
                $out .= "<p>Скидка - ".$product->discount."</p>";

                $product->nacenka = $cenagrup->nacenka;
                $out .= "<p>Наценка - ".$product->nacenka."</p>";

                $product->discount_montaj = $cenagrup->skidka_montaj;
                $out .= "<p>Скидка для монтажников - ".$product->discount_montaj."</p>";

                $product->opt_discount = $cenagrup->skidka_opt;
                $out .= "<p>Скидка для оптовиков - ".$product->opt_discount."</p>";

                if($cenagrup->skidka != 0){
                    $product->out_price = round((round(($product->base_price * $cenagrup->curs))) - ((round(($product->base_price * $cenagrup->curs))) * $product->discount / 100));
                    $out .= "<p>Новая выходная цена - ".$product->out_price."</p>";
                }else{
                    if($cenagrup->nacenka != 0){
                        $product->out_price = round((round(($product->base_price * $cenagrup->curs))) + ((round(($product->base_price * $cenagrup->curs))) * $product->nacenka / 100));
                        $out .= "<p>Новая выходная цена - ".$product->out_price."</p>";
                    }else{
                        $product->out_price = round($product->base_price * $cenagrup->curs);
                    }
                }

                if($cenagrup->skidka_montaj != 0){
                    $product->cena_montaj = round($product->out_price - ($product->out_price * $cenagrup->skidka_montaj / 100));
                    $out .= "<p>Новая цена для монтажников - ".$product->cena_montaj."</p>";
                }else{
                    $product->cena_montaj = $product->out_price;
                }

                if($cenagrup->skidka_opt != 0){
                    $product->opt_price = round(round(($product->base_price * $cenagrup->curs_opt)) - (round(($product->base_price * $cenagrup->curs_opt)) * $cenagrup->skidka_opt / 100));
                    $out .= "<p>Новая цена для оптовиков - ".$product->opt_price."</p>";
                }else{
                    $product->opt_price = round(($product->base_price * $cenagrup->curs_opt)) * $cenagrup->skidka_opt / 100;
                }



            }else{
                $out .= "<p>Не найдена базовая цена.</p>";
            }

            if($product_m->where('id', $product->id)->update(
                [
                    'price' => $product->price,
                    'discount' => $product->discount,
                    'out_price' => $product->out_price,
                    'nacenka' => $product->nacenka,
                    'discount_montaj' => $product->discount_montaj,
                    'cena_montaj' => $product->cena_montaj,
                    'opt_price' => $product->opt_price,
                    'opt_discount' => $product->opt_discount,
                ]
            )){
                $out .= "<p>Товар обновили.</p>";
            }else{
                $out .= "<p>Ошибка обновления товара.</p>";
            }

        }
        $date = new \DateTime('NOW');
        $cenagrup->where('id', $id)->update(['pereschet' => $date->format("Y-m-d H:i:s")]);
        return $out;
    }

}
