<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Airline extends Model
{
    use HasFactory;
    protected $with = ['flights'];
    public function flights()
    {
        return $this->hasMany(Flight::class);
    }

    public function cities()
    {
        return $this->belongsToMany(City::class, 'airline_city');
    }
}
