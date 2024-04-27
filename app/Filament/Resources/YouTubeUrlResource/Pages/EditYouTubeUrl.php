<?php

namespace App\Filament\Resources\YouTubeUrlResource\Pages;

use App\Filament\Resources\YouTubeUrlResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditYouTubeUrl extends EditRecord
{
    protected static string $resource = YouTubeUrlResource::class;
    protected static ?string $title = '編集';

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
