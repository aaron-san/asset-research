<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ticker_profiles', function (Blueprint $table) {
            $table->id();
            $table->string("ticker")->unique();
            $table->string("companyName")->nullable();
            $table->string("companyDescription")->nullable();
            // $table->string("companyDescription")->default('none');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profiles');
    }
};
