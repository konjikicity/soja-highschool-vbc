<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PictureResource\Pages;
use App\Models\Picture;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class PictureResource extends Resource
{
    protected static ?string $model = Picture::class;
    protected static ?string $label = '写真';
    protected static ?string $navigationGroup = '写真管理';
    protected static ?string $navigationIcon = 'heroicon-o-photo';

    public static function form(Form $form): Form
    {
        return $form

            ->schema([
                Forms\Components\Fieldset::make('写真情報')
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->label('タイトル')
                            ->required()
                            ->maxLength(255),
                        Forms\Components\TextInput::make('picture_url')
                            ->label('写真のURL')
                            ->placeholder('Google Driveに保存した画像の共有URLを保存してください(URLを知っている人は閲覧可能設定にすること)')
                            ->required()
                            ->maxLength(255),
                        Forms\Components\DatePicker::make('take_picture_date')
                            ->label('撮影日')
                            ->required(),
                        Tables\Columns\TextColumn::make('created_at')
                            ->label('登録日')
                            ->date('Y年n月j日')
                            ->sortable()
                            ->searchable(),
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
                Tables\Columns\TextColumn::make('picture_url')
                    ->label('写真のURL')
                    ->searchable(),
                Tables\Columns\TextColumn::make('take_picture_date')
                    ->label('撮影日')
                    ->date('Y年n月j日')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('登録日')
                    ->date('Y年n月j日')
                    ->sortable()
                    ->searchable(),
            ])
            ->defaultSort('created_at', 'desc')
            ->filters([
                //
            ])
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
            'index' => Pages\ListPictures::route('/'),
            'create' => Pages\CreatePicture::route('/create'),
            'edit' => Pages\EditPicture::route('/{record}/edit'),
        ];
    }
}
