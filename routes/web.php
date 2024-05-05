<?php

use App\Http\Controllers\Game\GameController;
use App\Http\Controllers\Picture\PictureController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('index');

Route::middleware('auth')->group(function () {
    Route::get('/games', [GameController::class, 'index'])->name('game.index');
    Route::get('/pictures', [PictureController::class, 'index'])->name('picture.index');
});

require __DIR__ . '/auth.php';
