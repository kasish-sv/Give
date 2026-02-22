"use server";

import { cookies } from "next/headers";

export async function reverseGeocode(lat: number, lng: number): Promise<string> {
  const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`;

  let lastError: any;

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url, { headers: { "User-Agent": "next-app" } });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      const data = await res.json();
      return data.display_name;
    } catch (err) {
      lastError = err;
      console.warn(`Attempt ${attempt} failed:`, err);

      // exponential backoff: 500ms → 1000ms → 2000ms
      if (attempt < 3) {
        const delay = 500 * Math.pow(2, attempt - 1);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }

  // After 3 failed attempts 
  console.error("Failed to reverse geocode after 3 attempts:", lastError); 
  return "Unknown location";
}

export async function submitLocation(lat: number, lng: number) {
  const cookiesStore = await cookies();
  cookiesStore.set(
    "user_location",
    JSON.stringify({ lat, lng }),
    {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60, // 1 hour
    }
  );
}
