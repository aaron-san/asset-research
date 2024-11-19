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
        Schema::create('notes', function (Blueprint $table) {
            $table->id();
            $table->string('note_ticker');
            $table->foreign('note_ticker')->references('ticker')->on('ticker_profiles')->onDelete('cascade');
            // $table->unsignedBigInteger('profile_id');
            // $table->foreign('profile_id')->references('id')->on(table: 'ticker_profiles')->onDelete('cascade');
            $table->longText('note');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notes');
    }
};