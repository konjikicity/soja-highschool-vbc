<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Picture extends Model
{
    use HasFactory;

    protected $table = 'pictures';

    protected $fillable = [
        'title',
        'picture_url',
        'take_picture_date',
    ];

    protected $casts = [
        'take_picture_date' => 'date'
    ];
}
