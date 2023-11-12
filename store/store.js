import { create } from "zustand";
//supabase
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const useSupabaseStore = create((set) => ({
  tech: [],
  fetch: async () => {
    let { data: technologies, error } = await supabase
      .from("technologies")
      .select("*");

    set({ tech: technologies });
  },
}));

export const useRaindropStore = create((set) => ({
  bookmarks: [],
  accessToken: "",
  refreshTokens: process.env.NEXT_PUBLIC_RAINDROP_REFRESH_TOKEN,

  refreshToken: async () => {
    const responses = await fetch("https://raindrop.io/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: process.env.NEXT_PUBLIC_RAINDROP_CLIENT_ID,
        refresh_token: useRaindropStore.getState().refreshTokens,
        client_secret: process.env.NEXT_PUBLIC_RAINDROP_CLIENT_SECRET,
        grant_type: "refresh_token",
      }),
    });

    const tokenData = await responses.json();

    set({ accessToken: tokenData.access_token });
  },

  fetch: async () => {
    await useRaindropStore.getState().refreshToken();
    const response = await fetch(
      `https://api.raindrop.io/rest/v1/raindrops/${process.env.NEXT_PUBLIC_RAINDROP_ID}`,
      {
        headers: {
          Authorization: `Bearer ${useRaindropStore.getState().accessToken}`,
        },
      }
    );

    const data = await response.json();
    set({ bookmarks: data.items });
  },
}));

export const usePhotoStore = create((set) => ({
  photoStatistics: [],
  photos: [],
  fetch: async () => {
    const response = await fetch(
      `https://api.unsplash.com//users/emreturkan/statistics/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API}`
    );
    const data = await response.json();
    set({ photoStatistics: data });
  },
  fetchPhotos: async () => {
    const response = await fetch(
      `https://api.unsplash.com//users/emreturkan/photos/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API}&per_page=50`
    );
    const data = await response.json();
    set({ photos: data });
  },
}));
