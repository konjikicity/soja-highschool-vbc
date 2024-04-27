<?php

namespace App\Filament\Resources;

use App\Filament\Resources\YouTubeUrlResource\Pages;
use App\Models\YouTubeUrl;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Support\Enums\MaxWidth;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Forms\Components\DatePicker;
use Filament\Tables\Filters\Filter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class YouTubeUrlResource extends Resource
{
    protected static ?string $model = YouTubeUrl::class;
    protected static ?string $pluralModelLabel = '投稿動画';
    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title')
                    ->label('タイトル')
                    ->required()
                    ->maxLength(50),
                Forms\Components\TextInput::make('description')
                    ->label('説明')
                    ->required()
                    ->maxLength(50),
                Forms\Components\TextInput::make('url')
                    ->label('URL')
                    ->required()
                    ->maxLength(100),
                Forms\Components\DatePicker::make('post_date')
                    ->label('投稿日時')
                    ->required()
            ])->columns(1);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->label('タイトル'),
                Tables\Columns\TextColumn::make('post_date')
                    ->label('投稿日時')
                    ->date('Y年n月j日'),
            ])
            ->persistSearchInSession()
            ->filters([
                Filter::make('title')
                    ->form([
                        Forms\Components\TextInput::make('title')
                            ->label('タイトル')
                    ])
                    ->query(function (Builder $query, array $data): Builder {
                        return $query
                            ->when(
                                $data['title'],
                                fn (Builder $query, $title): Builder => $query->where('title', 'like', "%{$title}%")
                            );
                    }),
                Filter::make('post_date')
                    ->form([
                        DatePicker::make('post_date')->label('投稿日時'),
                    ])
                    ->query(function (Builder $query, array $data): Builder {
                        return $query
                            ->when(
                                $data['post_date'],
                                fn (Builder $query, $date): Builder => $query->whereDate('post_date', '=', $date)
                            );
                    })
            ])
            ->filtersFormWidth(MaxWidth::Medium)
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
            'index' => Pages\ListYouTubeUrls::route('/'),
            'create' => Pages\CreateYouTubeUrl::route('/create'),
            'edit' => Pages\EditYouTubeUrl::route('/{record}/edit'),
        ];
    }
}
