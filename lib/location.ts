"use server";
import { cookies } from "next/headers";

export async function reverseGeocode(lat: number, lng: number) : Promise<string> {
    const res = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
    );
    const data = await res.json();
    return data.display_name;
}

export async function submitLocation(lat: number, lng: number) {
  console.log("User location:", { lat, lng });
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
