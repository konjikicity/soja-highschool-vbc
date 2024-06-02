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
            ['id' => 1, 'title' => '対天城高校①', 'youtube_url' => 'https://www.youtube.com/watch?v=vE9CoQroDiw', 'game_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 2, 'title' => '対天城高校③', 'youtube_url' => 'https://www.youtube.com/watch?v=ugrbLrfx3-s', 'game_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 3, 'title' => '対一宮高校①', 'youtube_url' => 'https://www.youtube.com/watch?v=dpodSLGtRIA', 'game_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 4, 'title' => '対一宮高校③', 'youtube_url' => 'https://www.youtube.com/watch?v=PTx5z1iMJIs', 'game_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 5, 'title' => '対一宮高校③', 'youtube_url' => 'https://www.youtube.com/watch?v=PTx5z1iMJIs', 'game_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 6, 'title' => '対一宮高校③', 'youtube_url' => 'https://www.youtube.com/watch?v=PTx5z1iMJIs', 'game_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 7, 'title' => '対一宮高校③', 'youtube_url' => 'https://www.youtube.com/watch?v=PTx5z1iMJIs', 'game_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 8, 'title' => '対一宮高校③', 'youtube_url' => 'https://www.youtube.com/watch?v=PTx5z1iMJIs', 'game_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 9, 'title' => '対一宮高校③', 'youtube_url' => 'https://www.youtube.com/watch?v=PTx5z1iMJIs', 'game_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 10, 'title' => '対一宮高校③', 'youtube_url' => 'https://www.youtube.com/watch?v=PTx5z1iMJIs', 'game_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 11, 'title' => '対一宮高校③', 'youtube_url' => 'https://www.youtube.com/watch?v=PTx5z1iMJIs', 'game_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 12, 'title' => '対一宮高校③', 'youtube_url' => 'https://www.youtube.com/watch?v=PTx5z1iMJIs', 'game_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 13, 'title' => '対一宮高校③', 'youtube_url' => 'https://www.youtube.com/watch?v=PTx5z1iMJIs', 'game_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 14, 'title' => '対一宮高校③', 'youtube_url' => 'https://www.youtube.com/watch?v=PTx5z1iMJIs', 'game_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 15, 'title' => '対一宮高校③', 'youtube_url' => 'https://www.youtube.com/watch?v=PTx5z1iMJIs', 'game_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 16, 'title' => '対一宮高校③', 'youtube_url' => 'https://www.youtube.com/watch?v=PTx5z1iMJIs', 'game_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 17, 'title' => '対一宮高校③', 'youtube_url' => 'https://www.youtube.com/watch?v=PTx5z1iMJIs', 'game_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 18, 'title' => '対一宮高校③', 'youtube_url' => 'https://www.youtube.com/watch?v=PTx5z1iMJIs', 'game_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 19, 'title' => '対一宮高校③', 'youtube_url' => 'https://www.youtube.com/watch?v=PTx5z1iMJIs', 'game_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 20, 'title' => '対一宮高校③', 'youtube_url' => 'https://www.youtube.com/watch?v=PTx5z1iMJIs', 'game_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 21, 'title' => '対一宮高校③', 'youtube_url' => 'https://www.youtube.com/watch?v=PTx5z1iMJIs', 'game_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 22, 'title' => '対一宮高校③', 'youtube_url' => 'https://www.youtube.com/watch?v=PTx5z1iMJIs', 'game_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 23, 'title' => '対一宮高校③', 'youtube_url' => 'https://www.youtube.com/watch?v=PTx5z1iMJIs', 'game_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 24, 'title' => '対一宮高校③', 'youtube_url' => 'https://www.youtube.com/watch?v=PTx5z1iMJIs', 'game_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 25, 'title' => '対一宮高校③', 'youtube_url' => 'https://www.youtube.com/watch?v=PTx5z1iMJIs', 'game_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 26, 'title' => '対一宮高校③', 'youtube_url' => 'https://www.youtube.com/watch?v=PTx5z1iMJIs', 'game_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 27, 'title' => '対一宮高校③', 'youtube_url' => 'https://www.youtube.com/watch?v=PTx5z1iMJIs', 'game_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 28, 'title' => '対一宮高校③', 'youtube_url' => 'https://www.youtube.com/watch?v=PTx5z1iMJIs', 'game_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 29, 'title' => '対一宮高校③', 'youtube_url' => 'https://www.youtube.com/watch?v=PTx5z1iMJIs', 'game_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 30, 'title' => '対一宮高校③', 'youtube_url' => 'https://www.youtube.com/watch?v=PTx5z1iMJIs', 'game_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],

        ];

        DB::table('games')->insert($games);
    }
}
