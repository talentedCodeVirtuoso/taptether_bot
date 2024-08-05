<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DepositController extends Controller
{
    public function makeDeposit(Request $request)
    {
        $amount = $request->input('amount');
        $address = $request->input('address');
        // Process the deposit
        return response()->json(['message' => 'Deposit request sent successfully']);
    }
}
