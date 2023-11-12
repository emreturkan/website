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
  fetchRaindrop: async (access_token) => {
    const response = await fetch(
      `https://api.raindrop.io/rest/v1/raindrops/${process.env.NEXT_PUBLIC_RAINDROP_ID}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
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
