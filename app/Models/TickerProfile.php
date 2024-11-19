<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TickerProfile extends Model
{
    use HasFactory;

    protected $fillable = [
        'ticker',
        'companyName',
        'companyDescription',
    ];
}
