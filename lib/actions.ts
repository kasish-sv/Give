import { createDonation, markDonationAsClaimed } from "@/lib/prisma-db";
import { redirect } from "next/navigation";
import { auth, currentUser } from "@clerk/nextjs/server";

export async function createDonationAction(formData: FormData) {
    "use server";
    const user = await currentUser();
    const title = formData.get("donate-title") as string;
    const address = formData.get("donate-address") as string;
    var donorId = user?.primaryEmailAddress?.emailAddress || "";
    const data = { title, address, donorId };
    await createDonation(data);
    redirect("/donations");
}

export async function markDonationAsClaimedAction(donationId: string, recipientId: string) {
    "use server";
    await markDonationAsClaimed(donationId, recipientId);
    redirect("/live");
}