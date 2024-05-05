<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PictureSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $pictures = [
            ['id' => 1, 'title' => '集合写真①', 'picture_url' => 'https://drive.google.com/file/d/1kOmxEfC8xYFsYNA5Ye-2KRmKkdsRlXDD/view?usp=drive_link', 'take_picture_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 2, 'title' => '集合写真②', 'pictire_url' => 'https://drive.google.com/file/d/164arZJyo7ddbbk2joK8PmoJMaWR94pgH/view?usp=drive_link', 'take_picture_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 3, 'title' => '集合写真③', 'picture_url' => 'https://drive.google.com/file/d/1_wHm-rcasAb50zOLT7vDjuZfEsUvsiJf/view?usp=drive_link', 'take_picture_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 4, 'title' => '集合写真④', 'picture_url' => 'https://drive.google.com/file/d/1H1o_rYud7Y-biIz7hCELwAJ8-0KXFRas/view?usp=drive_link', 'take_picture_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 5, 'title' => '集合写真⑤', 'picture_url' => 'https://drive.google.com/file/d/13oGN-MFkN35sl7ZOuC9DrSlIkW0A4n7b/view?usp=drive_link', 'take_picture_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 6, 'title' => '集合写真⑥', 'picture_url' => 'https://drive.google.com/file/d/156QvyWssGedtstDLU1QdaNlyRN4jjAWQ/view?usp=drive_link', 'take_picture_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 7, 'title' => '集合写真⑦', 'picture_url' => 'https://drive.google.com/file/d/1CoE8pPUUes7zV9NUfmJX1uLlSykAopRY/view?usp=drive_link', 'take_picture_date' => '2024-03-16', 'created_at' => now(), 'updated_at' => now()],
        ];

        DB::table('pictures')->insert($pictures);
    }
}
