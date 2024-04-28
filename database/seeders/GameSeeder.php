<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GameSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $games = [
            ['id' => 1, 'title' => '対天城高校①', 'description' => '', 'youtube_url' => 'https://www.youtube.com/watch?v=vE9CoQroDiw', 'game_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 2, 'title' => '対天城高校③', 'description' => '', 'youtube_url' => 'https://www.youtube.com/watch?v=ugrbLrfx3-s', 'game_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 3, 'title' => '対一宮高校①', 'description' => '', 'youtube_url' => 'https://www.youtube.com/watch?v=dpodSLGtRIA', 'game_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 4, 'title' => '対一宮高校③', 'description' => '', 'youtube_url' => 'https://www.youtube.com/watch?v=PTx5z1iMJIs', 'game_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
        ];

        DB::table('games')->insert($games);
    }
}
