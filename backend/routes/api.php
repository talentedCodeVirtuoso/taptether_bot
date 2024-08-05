<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChainController;
use App\Http\Controllers\AddressController;
use App\Http\Controllers\DepositController;
use App\Http\Controllers\WithdrawController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/chains', [ChainController::class, 'getChains']);
Route::get('/address', [AddressController::class, 'getAddress']);
// Route::post('/selectedChain', [ChainController::class, 'selectedChain']);
Route::post('/deposit', [DepositController::class, 'makeDeposit']);
Route::get('/withdraw', [WithdrawController::class, 'getWithdrawChains']);
Route::post('/withdraw1', [WithdrawController::class, 'getWithdrawChains1']);
Route::get('/selectedWithdraw', [WithdrawController::class, 'getWitdrawChildChains']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
