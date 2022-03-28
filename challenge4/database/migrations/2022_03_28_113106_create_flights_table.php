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
        Schema::create('flights', function (Blueprint $table) {
            $table->id();
            #$table->unsignedBigInteger('origin_id');
            $table->foreignId('origin_id')->references('id')->on('cities');
            
            #$table->unsignedBigInteger('destination_id');
            $table->foreignId('destination_id')->references('id')->on('cities');
            
            $table->time('takeOff');
            $table->time('landing');
            
            #$table->unsignedBigInteger('airline_id');
            $table->foreignId('airline_id')->references('id')->on('airlines')->cascadeOnDelete();
            
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
        Schema::dropIfExists('flights');
    }
};
