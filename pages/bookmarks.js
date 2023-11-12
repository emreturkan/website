import React, { useEffect } from "react";
import { useRaindropStore } from "@/store/store";
import Bookmarks from "@/components/page/bookmarks";

const BookmarksPage = ({ size, text }) => {
  const { bookmarks, fetchRaindrop } = useRaindropStore((state) => state);

  useEffect(() => {
    const refreshAccessToken = async () => {
      try {
        const response = await fetch("/api/postRaindrop", {
          method: "POST",
        });

        if (!response.ok) {
          throw new Error("Failed to refresh token");
        }

        const result = await response.json();
        const { message, tokenData } = result;

        fetchRaindrop(tokenData.access_token);
      } catch (error) {
        console.error("Error refreshing token:", error.message);
      }
    };

    refreshAccessToken();
  }, [fetchRaindrop]);

  if (size === false && text === false) {
    return <Bookmarks bookmarks={bookmarks} size={size} text={size} />;
  }

  return <Bookmarks bookmarks={bookmarks} size={true} text={true} />;
};

export default BookmarksPage;
