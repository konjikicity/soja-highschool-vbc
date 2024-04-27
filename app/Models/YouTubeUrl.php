<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class YouTubeUrl extends Model
{
    use HasFactory;

    protected $table = 'youtube_urls';

    protected $fillable = [
        'title',
        'description',
        'url',
        'post_date',
    ];

    protected $casts = [
        'post_date' => 'date'
    ];
}
