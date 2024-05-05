<?php

namespace App\Http\Controllers\Picture;

use App\Http\Controllers\Controller;
use App\Services\PictureService;
use Inertia\Inertia;
use Inertia\Response;

class PictureController extends Controller
{
    private PictureService $pictureService;

    /**
     * Display the Picture view.
     */
    public function __construct(PictureService $pictureService)
    {
        $this->pictureService = $pictureService;
    }

    public function index(): Response
    {
        $pictures = $this->pictureService->index();

        return Inertia::render('Picture/Index', ['pictures' => $pictures]);
    }
}
