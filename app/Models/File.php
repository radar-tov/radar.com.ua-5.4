<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class File extends Model
{
    protected $fillable = [
        'name',
        'path',
        'hash_name',
        'downloads',
        'show',
        'created_at',
        'updated_at'
    ];

    public function add($path, $product_id){
        $date = new \DateTime('NOW');
        $id = DB::table('files')->insertGetId([
                'path'          =>  $path,
                'show'          =>  1,
                'created_at'    =>  $date->format("Y-m-d H:i:s"),
                'updated_at'    =>  $date->format("Y-m-d H:i:s")
            ]);

        if(DB::table('file_product')->insert([
                'file_id'       =>  $id,
                'product_id'    =>  $product_id, 'show'=>1
            ])
        ){
            return true;
        }else{
            return false;
        }
    }

    public function deletFileProduct($productId, $fileId){
        DB::table('file_product')->where('product_id', $productId)->where('file_id', $fileId)->delete();
        if(DB::table('file_product')->where('file_id', $fileId)->first()){
            return true;
        }else{
            return false;
        }
    }

    public function deletFile($fileId){
        $file = DB::table('files')->where('id', $fileId)->first();
        if($file){
            $path = public_path($file->path);
            unlink($path);
            DB::table('files')->where('id', $fileId)->delete();
            return true;
        }
        return false;
    }

    public function visible($file_id, $product_id){
        return DB::table('file_product')->where('product_id', $product_id)->where('file_id', $file_id)->first();
    }

    public function updateProduct($request){
        DB::table('file_product')->where('product_id', $request->productID)->where('file_id', $request->fileID)->update(['show' => $request->showProduct]);
    }

    public function getfileProduct($product_id){
        return DB::table('file_product')->where('product_id', $product_id)->get();
    }
}