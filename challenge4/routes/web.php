<?php

use App\Http\Controllers\CityController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});

Route::get('/ciudades', [CityController::class, 'index']);

Route::post('/ciudades', [CityController::class, 'store']);

Route::get('/fetch-cities', [CityController::class, 'fetchCities']);

Route::get('/editCity/{id}', [CityController::class, 'edit']);

Route::post('/updateCity/{id}', [CityController::class, 'update']);
// cambie a post en vez de put

Route::delete('/deleteCity/{id}', [CityController::class, 'delete']);


