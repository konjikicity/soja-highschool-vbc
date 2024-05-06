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
            'youtube_url',
            'game_date',
            'created_at'
        ])
            ->orderByDesc('created_at')
            ->get();

        return $games;
    }
}
