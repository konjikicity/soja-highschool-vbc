<?php

use App\Http\Controllers\Game\GameController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('index');

Route::middleware('auth')->group(function () {
    Route::get('/games', [GameController::class, 'index'])->name('game.index');
});

require __DIR__ . '/auth.php';
