<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateCityRequest;
use App\Models\City;
use COM;

use Illuminate\Support\Facades\Validator;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;

class CityController extends Controller
{
    public function index()
    {
        # Esta forma hace n+1 queries y encima como devuelve coleccion no lo puedo paginar asi nomas.
        // $map_res = City::all()->map(function($city) {
        //     $item = [];
        //     $item['id'] = $city->id;
        //     $item['name'] = $city->name;
        //     $item['flightsOutgoing'] = $city->flightsOutgoing->count();
        //     $item['flightsIncoming'] = $city->flightsIncoming->count();
        //     return $item;
        // });

        $cities = City::query()
            ->withCount('flightsOutgoing')
            ->withCount('flightsIncoming')
            ->paginate(10);

        return view('city', [
            'cities' => $cities
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:cities'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages()
            ]);
        } else {
            $city = new City;
            $city->name = $request->input('name');
            $city->save();
            return response()->json([
                'status' => 200,
                'message' => "City added successfully"
            ]);
        }
    }
    
    public function fetchCities()
    {
        $cities = City::paginate(10);
        
        return response()->json([
            'cities' => $cities
        ]);
    }

    public function edit($id)
    {
        $city = City::find($id);
        if (!$city) {
            dd("ciudad no encontrada");
        }
        return response()->json([
            'status' => 200,
            'city' => $city
        ]);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:cities'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages()
            ]);
        } else {
            $city = City::find($id);
            $city->name = $request->input('name');
            $city->update();
            return response()->json([
                'status' => 200,
                'message' => "City Updated successfully"
            ]);
        }
    }


    // public function store(CreateCityRequest $request) {
    //     $data = $request->validated();

    //     $city = City::updateOrCreate(
    //         [
    //             'id' => $request->id
    //         ],
    //         [
    //             'name' => $request->name,
    //         ]);

    //     return response()->json(['success' => true]);

    //     // City::create($data);
    //     // return redirect('/ciudades');
    // }

    public function delete($id)
    {
        $city = City::where('id', $id)->firstOrFail();

        foreach ($city->flightsIncoming as $f) {
            $f->delete();
        }

        foreach ($city->flightsOutgoing as $f) {
            $f->delete();
        }
            
        $city->delete();

        return response()->json([
            'status' => 200,
            'message' => "City Deleted successfully"
        ]);
    }

    // public function editCity(City $c, CreateCityRequest $request){
    //     $name = $request->input('name');
    //     $cities = City::all();
    //     $error = false;
    //     foreach($cities as $city){
    //         if (strcmp($city, $name) == 0){
    //             $error = true;
    //             break;
    //         }
    //     }
    //     if($name !=''){
    //         $error = true;
    //     }
    //     if (!$error){
    //         $data = $request->validated();
    //         $c->update($data);
    //     } else {
    //         echo "Fill the name of the city taking care that it can not already exist";
    //     }
    //     exit;
    // }
// model binding
// receive Request
// request->all()

    // public function form_edit($id){
    //     $city = City::find($id);
    //     return view('edit_city', $city);
    // }
    // public function save(City $city, CreateCityRequest $request){
    //     //retornar vista en realidad y despues tendria que validar todo esto
    //     $data = $request->validated();
    //     $city->update($data);

    //     return redirect('/ciudades');
    // }
}
