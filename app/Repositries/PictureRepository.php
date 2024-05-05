<?php

namespace App\Repositries;

use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Collection;
use App\Models\Picture;

class PictureRepository extends Controller
{
    public function index(): Collection
    {
        $pictures = Picture::select([
            'title',
            'picture_url',
            'take_picture_date'
        ])->get();

        return $pictures;
    }
}
