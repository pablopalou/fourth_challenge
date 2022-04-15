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
        City::factory(15)->create();
        Airline::factory(4)->create();
        Flight::create([
            'origin_id' => 1,
            'destination_id' => 3,
            'takeOff' => date("2020-2-20 16:30:45"),
            'landing' => date("2020-2-21 05:30:45"),
            'airline_id' => 1
        ]);
        Flight::create([
            'origin_id' => City::factory()->create()->id,
            'destination_id' => City::factory()->create()->id,
            'takeOff' => date("2020-2-20 16:30:45"),
            'landing' => date("2020-2-20 19:30:45"),
            'airline_id' => Airline::factory()->create()->id
        ]);
        Flight::create([
            'origin_id' => 2,
            'destination_id' => 1,
            'takeOff' => date("2020-3-16 10:30:45"),
            'landing' => date("2020-3-16 20:40:55"),
            'airline_id' => 1
        ]);
        $city = City::find(1);
        $a = Airline::find(1);
        $city2 = City::find(2);
        $city3 = City::find(3);
        $city4 = City::find(4);
        $city5 = City::find(5);
        $city16 = City::find(16);
        $city17 = City::find(17);

        $a->cities()->attach($city);
        $a->cities()->attach($city2);
        $a->cities()->attach($city3);
        $a->cities()->attach($city4);
        $a->cities()->attach($city5);
        $a->cities()->attach($city16);
        $a->cities()->attach($city17);
        
    }
}
