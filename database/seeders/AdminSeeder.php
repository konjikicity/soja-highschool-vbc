<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class AdminSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Admin::create([
            'name' => '管理アカウント',
            'login_id' => 'soja',
            'email_verified_at' => now(),
            'password' => Hash::make('soja'),
            'remember_token' => Str::random(10),
        ]);
    }
}
