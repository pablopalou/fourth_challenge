<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('airline_city', function (Blueprint $table) {
            $table->id();

            #$table->BigInteger('airline_id');
            $table->foreignId('airline_id')->references('id')->on('airlines');
            
            #$table->BigInteger('city_id');
            $table->foreignId('city_id')->references('id')->on('cities');
            
            $table->timestamps();
        });
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('airline_city');
    }
};
