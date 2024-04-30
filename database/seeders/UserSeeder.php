<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::create([
            'name' => 'ユーザーアカウント',
            'login_id' => 'soja',
            'email_verified_at' => now(),
            'password' => Hash::make('soja'),
            'remember_token' => Str::random(10),
        ]);
    }
}
