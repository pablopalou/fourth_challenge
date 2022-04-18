<?php

use App\Http\Controllers\CityController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AirlineController;
use App\Http\Controllers\FlightController;

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

Route::get('/airlines', [AirlineController::class, 'index']);

Route::post('/airlines', [AirlineController::class, 'store']);

Route::get('/fetch-airlines', [AirlineController::class, 'fetchAirlines']);

Route::get('/editairline/{id}', [AirlineController::class, 'edit']);

Route::post('/updateairline/{id}', [AirlineController::class, 'update']);

Route::delete('/deleteairline/{id}', [AirlineController::class, 'delete']);

Route::get('/flights', [FlightController::class, 'index']);

Route::get('/getFlights', [FlightController::class, 'getFlights']);

Route::get('/getAirlines', [AirlineController::class, 'getAirlines']);