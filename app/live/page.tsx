import { DonationsCard } from "@/components/card/DonationsCard";
import {
  getAvailableDonations,
  getDonationsNearLocation,
} from "@/lib/prisma-db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { LocationClient } from "@/lib/geolocation";

import { cookies } from "next/headers";

export default async function Live() {
  // Use `auth()` to access `isAuthenticated` - if false, the user is not signed in
  const { isAuthenticated } = await auth();

  // Protect the route by checking if the user is signed in
  if (!isAuthenticated) {
    return <div>Sign in to view this page</div>;
  }

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
      <div>Welcome, {user?.primaryEmailAddress?.emailAddress}!</div>
      <h1 className="text-2xl font-bold mb-4">All Available Donations</h1>
      <DonationsCard donations={donations} />
    </div>
  );
}
