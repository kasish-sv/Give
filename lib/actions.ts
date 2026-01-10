import { createDonation, markDonationAsClaimed } from "@/lib/prisma-db";
import { redirect } from "next/navigation";
import { auth, currentUser } from "@clerk/nextjs/server";

export async function createDonationAction(formData: FormData) {
    "use server";
    const user = await currentUser();
    const title = formData.get("donate-title") as string;
    const address = formData.get("donate-address") as string;
    const special_inst = formData.get("donate-special-instructions") as string;
    console.log("Form Data:", { title, address, special_inst });
    
    const longitude = formData.get("donate-longitude") as string;
    const latitude = formData.get("donate-latitude") as string;

    const location = { type: "Point", coordinates: [parseFloat(longitude), parseFloat(latitude)] };
    var donorId = user?.primaryEmailAddress?.emailAddress || "";
    
    const data = { title, address, special_inst, donorId, location };
    await createDonation(data);
    redirect("/donations");
}

export async function markDonationAsClaimedAction(donationId: string, recipientId: string) {
    "use server";
    await markDonationAsClaimed(donationId, recipientId);
    redirect("/live");
}
