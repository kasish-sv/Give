import { getDonationsByRecipientId } from "@/lib/prisma-db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { DataTable } from "./claimData-table";
import { columns } from "./claimcolumns";

import { Suspense } from "react";

export default async function ClaimsPage() {
  // Use `auth()` to access `isAuthenticated` - if false, the user is not signed in
  const { isAuthenticated } = await auth();

  // Protect the route by checking if the user is signed in
  if (!isAuthenticated) {
    return <div>Sign in to view this page</div>;
  }

  // Get the Backend User object when you need access to the user's information
  const user = await currentUser();

  const claims = await getDonationsByRecipientId(
    user?.primaryEmailAddress?.emailAddress || "",
  );

  return (
    <div>
      <div className="p-4">
        <p className="text-xl font-bold mb-4">
          Hey {user?.firstName}, Thanks for empowering communities through your
          service!
        </p>
        <p className="mt-2">Here are the donations you've claimed:</p>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <DataTable columns={columns} data={claims} />
      </Suspense>
    </div>
  );
}
