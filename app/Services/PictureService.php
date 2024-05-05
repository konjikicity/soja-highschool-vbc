<?php

namespace App\Services;

use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Collection;
use App\Repositries\PictureRepository;
use App\Utilities\PictureUtility;

class PictureService extends Controller
{
    private PictureRepository $pictureRepository;

    public function __construct(PictureRepository $pictureRepository)
    {
        $this->pictureRepository = $pictureRepository;
    }

    public function index(): Collection
    {
        $pictures = $this->pictureRepository->index();

        $pictures = $pictures->map(function ($picture) {
            $picture->format_picture_url = $picture->picture_url ? PictureUtility::getImage($picture->picture_url) : '';
            return $picture;
        })->filter(function ($picture) {
            return !empty($picture->format_picture_url);
        });

        return $pictures;
    }
}
