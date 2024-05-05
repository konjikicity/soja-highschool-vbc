<?php

namespace App\Utilities;

class PictureUtility
{
    public static function getImage(string $imageUrl): string
    {
        $pattern = '/https:\/\/drive\.google\.com\/file\/d\/([a-zA-Z0-9-_]+)\/view\?usp=/';

        // Use preg_match to extract the ID from the URL
        if (preg_match($pattern, $imageUrl, $matches)) {
            // Check if we successfully extracted an ID
            if (!empty($matches[1])) {
                $fileId = $matches[1];
                // Return the direct image link format
                return "https://lh3.googleusercontent.com/d/{$fileId}";
            }
        }

        // Return an empty string if the URL does not match the expected format
        return '';
    }
}
