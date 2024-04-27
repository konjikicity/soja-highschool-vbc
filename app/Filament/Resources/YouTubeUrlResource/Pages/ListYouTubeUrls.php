<?php

namespace App\Filament\Resources\YouTubeUrlResource\Pages;

use App\Filament\Resources\YouTubeUrlResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListYouTubeUrls extends ListRecords
{
    protected static string $resource = YouTubeUrlResource::class;
    protected static ?string $title = '一覧';

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
