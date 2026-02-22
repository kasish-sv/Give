import { getDonationsByDonorId } from "@/lib/prisma-db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { mobcolumns } from "./mob-columns";

import { MobDataTable } from "./mob-data-table";
import { Suspense } from "react";

export default async function DonationsPage() {
  // Use `auth()` to access `isAuthenticated` - if false, the user is not signed in
  const { isAuthenticated } = await auth();

  // Protect the route by checking if the user is signed in
  if (!isAuthenticated) {
    return <div>Sign in to view this page</div>;
  }

  // Get the Backend User object when you need access to the user's information
  const user = await currentUser();

  const donations = await getDonationsByDonorId(
    user?.primaryEmailAddress?.emailAddress || "",
  );

  return (
    <div>
      <div className="p-4">
        <p className="text-xl font-bold mb-4">
          Hey {user?.firstName}, Thanks for empowering communities through
          giving!
        </p>
        <p className="mt-2">Here are your donations so far:</p>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <DataTable columns={columns} data={donations} />
        <MobDataTable columns={mobcolumns} data={donations} />
      </Suspense>
    </div>
  );
}
