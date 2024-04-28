<?php

namespace App\Services;

use App\Http\Controllers\Controller;
use App\Repositries\GameRepository;
use Illuminate\Database\Eloquent\Collection;
use App\Utilities\GameUtility;

class GameService extends Controller
{
    private GameRepository $gameRepository;

    public function __construct(GameRepository $gameRepository)
    {
        $this->gameRepository = $gameRepository;
    }

    public function index(): Collection
    {
        $games = $this->gameRepository->index();

        foreach ($games as $game) {
            $game->format_game_date = $game->game_date ? $game->game_date->format('Y年n月j日') : '';
            $game->image_url = $game->youtube_url ? GameUtility::getYoutubeThumbnail($game->youtube_url) :
                'https://picsum.photos/200?grayscale';
        }

        return $games;
    }
}
