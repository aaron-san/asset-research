<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Http\Request;

class Note extends Model
{
    use HasFactory;

    protected $fillable = ['note_ticker', 'note'];

    public function notes(): HasMany
    {
        return $this->hasMany(Note::class);
    }
}
