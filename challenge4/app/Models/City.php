<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    use HasFactory;
    protected $with = ['flightsIncoming', 'flightsOutgoing'];


    public function flightsIncoming()
    {
        return $this->hasMany(Flight::class, 'origin_id');
    }

    public function flightsOutgoing()
    {
        return $this->hasMany(Flight::class, 'destination_id');
    }

    public function airlines()
    {
        return $this->belongsToMany(Airline::class, 'airline_city');
    }


}
