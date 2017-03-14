<?php

namespace App\ViewDataProviders;

use App\Models\Cena;

class CenaGrupsDataProvider {


    public function getList()
    {
        return Cena::orderBy('name')->pluck('name', 'id');
    }
}