<?php

namespace Database\Seeders;

use App\Models\Airline;
use App\Models\City;
use App\Models\Flight;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        City::factory(3)->create();
        Airline::factory(3)->create();
        Flight::create([
            'origin_id' => 1,
            'destination_id' => 1,
            'takeOff' => Carbon::now(),
            'landing' => Carbon::now(),
            'airline_id' => 1
        ]);
        $city = City::find(1);
        $a = Airline::find(1);
        $a->cities()->attach($city);
    }
}
