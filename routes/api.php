<?php

use App\Http\Controllers\BMIsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Why do i need this??? Why would I ever show all 
// Route::get('/bmi-show', [BMIsController::class, 'index'])->name('bmi-show');

Route::prefix('/bmi')->group(function () {
    Route::post('/store', [BMIsController::class, 'store']);
    Route::get('/{id}', [BMIsController::class, 'show']);
    Route::put('/{id}', [BMIsController::class, 'update']);
    Route::delete('/{id}', [BMIsController::class, 'destroy']);
});
