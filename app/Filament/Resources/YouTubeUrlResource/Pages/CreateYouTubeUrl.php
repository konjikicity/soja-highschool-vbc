<?php

namespace App\Filament\Resources\YouTubeUrlResource\Pages;

use App\Filament\Resources\YouTubeUrlResource;
use Filament\Resources\Pages\CreateRecord;

class CreateYouTubeUrl extends CreateRecord
{
    protected static string $resource = YouTubeUrlResource::class;
    protected static ?string $title = '作成';
    protected static bool $canCreateAnother = false;
}
