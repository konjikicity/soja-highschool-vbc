<?php

namespace App\Filament\Resources;

use App\Filament\Resources\GameResource\Pages;
use App\Models\Game;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class GameResource extends Resource
{
    protected static ?string $model = Game::class;
    protected static ?string $label = '試合';
    protected static ?string $navigationGroup = '試合管理';
    protected static ?string $navigationIcon = 'heroicon-o-trophy';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Fieldset::make('試合情報')
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->label('タイトル')
                            ->required()
                            ->maxLength(255),
                        Forms\Components\TextInput::make('youtube_url')
                            ->label('YouTubeのURL')
                            ->required()
                            ->maxLength(255),
                        Forms\Components\DatePicker::make('game_date')
                            ->label('試合日')
                            ->required(),
                    ])->columns(1)
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->label('タイトル')
                    ->searchable(),
                Tables\Columns\TextColumn::make('youtube_url')
                    ->label('YouTubeのURL')
                    ->searchable(),
                Tables\Columns\TextColumn::make('game_date')
                    ->label('試合日')
                    ->date('Y年n月j日')
                    ->searchable(),
            ])
            ->filters([])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListGames::route('/'),
            'create' => Pages\CreateGame::route('/create'),
            'edit' => Pages\EditGame::route('/{record}/edit'),
        ];
    }
}
