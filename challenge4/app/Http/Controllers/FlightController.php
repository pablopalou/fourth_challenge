<?php

namespace App\Http\Controllers;
use App\Models\Flight;

class FlightController extends Controller
{
    public function index(){    
        return view('flights', [
            'flights' => Flight::all()
        ]);    
    }

    public function getFlights(){    
        // $flights = Flight::paginate(10);
        $flights = Flight::all();
        return response()->json([
            'flights' => $flights
        ]);    
    }
    
}
