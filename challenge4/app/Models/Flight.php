<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    use HasFactory;

    #deberia encontrar esto porque todos se llaman nombreFuncion_id
    public function origin()
    {
        return $this->hasOne(City::class);
    }

    public function destination()
    {
        return $this->hasOne(City::class);
    }

    public function airline()
    {
        return $this->hasOne(Airline::class);
    }
}
