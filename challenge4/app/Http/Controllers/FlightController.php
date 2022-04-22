<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateFlightRequest;
use App\Models\Flight;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
class FlightController extends Controller
{
    public function index(){    
        // return view('flights', [
        //     'flights' => Flight::all()
        // ]); 
        return view('flights');   
    }

    public function getFlights(){    
        // $flights = Flight::paginate(10);
        $flights = Flight::with('origin', 'destination', 'airline')->get();
        return response()->json([
            'flights' => $flights
        ]);    
    }

    public function store(Request $request){  
        
        $validator = Validator::make($request->all(), [
            'airlineId'  => 'required',
            'originId'  => 'required',
            'destinationId'  => 'required',
            'takeOff' => 'required',
            'landing' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages()
            ]);
        } else {
            $flight = new Flight;
            $flight->origin_id = $request->input('originId');
            $flight->destination_id = $request->input('destinationId');
            $flight->takeOff = $request->input('takeOff');
            $flight->landing = $request->input('landing');
            $flight->airline_id = $request->input('airlineId');
            $flight->save();

            $flight = Flight::with('origin', 'destination', 'airline')->find($flight->id);
            return response()->json([
                'status' => 200,
                'message' => "Flight added successfully",
                'flight' => $flight
            ]);
        }
    }
    
    public function update(UpdateFlightRequest $request, Flight $flight){  
        
        $flight->update([
            'airline_id'  =>  $request->input('airlineId'),
            'origin_id'  => $request->input('originId'),
            'destination_id'  => $request->input('destinationId'),
            'takeOff' => $request->input('takeOff'),
            'landing' => $request->input('landing')
        ]);

        $flight = Flight::with('origin', 'destination', 'airline')->find($flight->id);
        return response()->json([
            'status' => 200,
            'message' => "Flight updated successfully",
            'flight' => $flight
        ]);
        
    }

    public function delete(Request $request)
    {
        $flight = Flight::where('id', $request->input('flightId'))->firstOrFail();  
        $flight->delete();

        return response()->json([
            'status' => 200,
            'message' => "Flight Deleted successfully"
        ]);
    }
}
