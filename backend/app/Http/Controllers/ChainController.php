<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ChainController extends Controller
{
    public function getChains()
    {
        $chains = [
            ['name' => 'Binance Smart Chain', 'imgUrl' => 'https://tap-tether.org/img/ton.png'],
            ['name' => 'Tron', 'imgUrl' => 'https://tap-tether.org/img/trx.png']
        ];
        return response()->json($chains);
    }

    // public function selectedChain(Request $request)
    // {
    //     $selectedChain = $request->input('chain');
    //     // Log or process the selected chain
    //     return response()->json(['message' => 'Chain selected successfully']);
    // }
}
