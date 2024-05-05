<?php

namespace App\Http\Controllers\Game;

use App\Http\Controllers\Controller;
use App\Services\GameService;
use Inertia\Inertia;
use Inertia\Response;

class GameController extends Controller
{
    private GameService $gameService;

    /**
     * Display the Game view.
     */
    public function __construct(GameService $gameService)
    {
        $this->gameService = $gameService;
    }

    public function index(): Response
    {
        $games = $this->gameService->index();

        return Inertia::render('Game/Index', ['games' => $games, 'isSearch' => true]);
    }
}
