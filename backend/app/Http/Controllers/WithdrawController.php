<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Deposit;

class WithdrawController extends Controller
{
    public function getWithdrawChains()
    {
        $withdrawChains = [
            ['name' => 'Tron', 'imgUrl' => 'https://tap-tether.org/img/trx.png'],
            ['name' => 'Ton', 'imgUrl' => 'https://tap-tether.org/img/ton.png'],
            ['name' => 'Binance Smart Chain', 'imgUrl' => 'https://tap-tether.org/img/trx.png']
        ];
        return response()->json($withdrawChains);
    }

    public function getWithdrawChains1(Request $request)
    {
        //$username = $request->input('username');
        $allData = $request->all();
        //return response()->json($allData/*Deposit::all()*/);
        return response()->json($request->input('username'));
    }

    // public function getWithdrawChildChains(Request $request)
    public function getWitdrawChildChains(Request $request)
    {
        $chainName = $request->query('chainName');
        
        // Example child chains data based on chain name
        $childChains = [
            'Tron' => [
                ['name' => 'Tron', 'imgUrl' => 'https://tap-tether.org/img/trx.png', 'balance' => '0.005358', 'value' => '0'],
            ],
            'Ton' => [
                ['name' => 'Ton','imgUrl' => 'https://tap-tether.org/img/ton.png', 'balance' => '0.003254', 'value' => '0'],
            ],
            'Binance Smart Chain' => [
                ['name' => 'Binance Smart Chain','imgUrl' => 'https://tap-tether.org/img/trx.png', 'balance' => '0.007654', 'value' => '0'],
            ],
        ];
        
        return response()->json($childChains[$chainName] ?? []);
    }
}
