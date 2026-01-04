import { DonationsCard } from "@/components/DonationsCard";
import { getAvailableDonations } from "@/lib/prisma-db";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Live() {
  // Use `auth()` to access `isAuthenticated` - if false, the user is not signed in
  const { isAuthenticated } = await auth();

  // Protect the route by checking if the user is signed in
  if (!isAuthenticated) {
    return <div>Sign in to view this page</div>;
  }

  // Get the Backend User object when you need access to the user's information
  const user = await currentUser();

  const donations = await getAvailableDonations();

  return (
    <div>
      <div>Welcome, {user?.primaryEmailAddress?.emailAddress}!</div>
      <h1 className="text-2xl font-bold mb-4">All Available Donations</h1>
      <DonationsCard donations={donations} />
    </div>
  );
}
