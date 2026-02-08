import { DonationsCard } from "@/components/card/DonationsCard";
import {
  getAvailableDonations,
  getDonationsNearLocation,
} from "@/lib/prisma-db";
import { auth, currentUser } from "@clerk/nextjs/server";

import { LocationClient } from "@/lib/geolocation";

import { cookies } from "next/headers";
import { SkeletonCard } from "@/components/ui/SkeletonCard";

export default async function Live() {
  // Get the Backend User object when you need access to the user's information
  const user = await currentUser();
  const cookieStore = await cookies();
  const location = cookieStore.get("user_location");

  const coor = location
    ? (JSON.parse(location.value) as { lat: number; lng: number })
    : null;
  const userLat = coor ? coor.lat : 12.9716;
  const userLng = coor ? coor.lng : 77.5946;

  // Fetch donations near the user's location
  const radiusMeters = 5000; // 5 km const

  console.log("Fetching donations near:", userLng, userLat);
  const donations = await getDonationsNearLocation(userLng, userLat);

  return (
    <div>
      <LocationClient />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">
          Browse through the list of available donations in your vicinity
        </h1>
        <span className="text-md">
          Act quickly to make a difference! Donations are only listed if they
          are made in the last 24 hours to ensure freshness.
        </span>
      </div>
      <DonationsCard donations={donations} />
      <p className="leading-4 text-xs text-center p-4">
        Please note that the donations listed here are based on your current
        location. If you wish to see donations in a different area, please
        update your location settings.
      </p>
    </div>
  );
}
