<?php

namespace App\Utilities;

class GameUtility
{
    public static function getYoutubeThumbnail(string $youtubeUrl): string
    {
        // 通常URL
        if (preg_match('/https:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/', $youtubeUrl, $matches)) {
            $videoId = $matches[1];
            return "https://img.youtube.com/vi/$videoId/hqdefault.jpg";
        }

        // 短縮URL
        if (preg_match('/https:\/\/youtu\.be\/([a-zA-Z0-9_-]+)/', $youtubeUrl, $matches)) {
            $videoId = $matches[1];
            return "https://img.youtube.com/vi/$videoId/hqdefault.jpg";
        }

        // 当てはまらない場合ダミーURLを返す
        return 'https://picsum.photos/200/150?grayscale';
    }
}
