<?php

namespace App\Repositries;

use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Collection;
use App\Models\Game;

class GameRepository extends Controller
{
    public function index(): Collection
    {
        $games = Game::select([
            'title',
            'description',
            'youtube_url',
            'game_date'
        ])->get();

        return $games;
    }
}
