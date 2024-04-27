<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;

class HomeController extends Controller
{
    public function index(): RedirectResponse
    {
        if (auth()->check()) {
            return redirect()->route('game.index');
        }

        return redirect()->route('login');
    }
}
