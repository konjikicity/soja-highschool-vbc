<?php

namespace App\Http\Controllers\Game;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class GameController extends Controller
{
    /**
     * Display the login view.
     */
    public function index(): Response
    {
        return Inertia::render('Game/Index');
    }
}
