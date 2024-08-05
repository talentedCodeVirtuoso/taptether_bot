<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AddressController extends Controller
{
    public function getAddress(Request $request)
    {
        $chain = $request->query('chain');
        $addresses = [
            'Binance Smart Chain' => '0x0369e5ec67f700fefccd85438780dcdeed30a732',
            'Tron' => '0x1234567890abcdef1234567890abcdef12345678'
        ];
        return response()->json(['address' => $addresses[$chain] ?? '']);
    }
}
