<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Airline;
use App\Models\City;
use App\Models\Flight;
use Illuminate\Support\Facades\Validator;

class AirlineController extends Controller
{
    public function index()
    {
        $airlines = Airline::query()
            ->withCount('flights')
            ->paginate(10);

        $cities = City::all();
        return view('airlines', [
            'airlines' => $airlines,
            'cities' => $cities,
        ]);
    }
    
    public function fetchAirlines()
    {
        $airlines = Airline::paginate(10);
        
        return response()->json([
            'airlines' => $airlines
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:airlines',
            'description' => 'required'

        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages()
            ]);
        } else {
            $airline = new Airline;
            $airline->name = $request->input('name');
            $airline->description = $request->input('description');
            $airline->save();
            if ($request->input('selectedCities')) {
                $cities = $request->input('selectedCities');
                foreach ($cities as $city) {
                    $airline->cities()->attach(intval($city));
                }
            }
            return response()->json([
                'status' => 200,
                'message' => "Airline added successfully",
                'airline' => $airline
            ]);
        }
    }

    public function edit($id)
    {
        $airline = Airline::find($id);
        if (!$airline) {
            dd("ciudad no encontrada");
        }
        return response()->json([
            'status' => 200,
            'airline' => $airline
        ]);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:airlines',
            'description' => 'required'
            
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages()
            ]);
        } else {
            $airline = Airline::find($id);
            $airline->name = $request->input('name');
            $airline->description = $request->input('description');
            $airline->update();
            return response()->json([
                'status' => 200,
                'message' => "Airline Updated successfully"
            ]);
        }
    }

    public function delete($id)
    {
        $airline = Airline::where('id', $id)->firstOrFail();
            
        $airline->delete();

        return response()->json([
            'status' => 200,
            'message' => "Airline Deleted successfully"
        ]);
    }

    public function getName($id){
        return Airline::find($id)->name;
    }
}
