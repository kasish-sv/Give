"use server";
import { createDonation, markDonationAsClaimed } from "@/lib/prisma-db";
import { redirect } from "next/navigation";
import { auth, currentUser } from "@clerk/nextjs/server";
import { DonorConfirmation } from "@/components/mail_template/DonorConfirmation";
import { RecipientConfirmation } from "@/components/mail_template/RecipientConfirmation";
import {Resend} from "resend";
import error from "next/error";
import { create } from "domain";
import { env } from "process";

export async function createDonationAction(formData: FormData) {
    
    const user = await currentUser();
    const title = formData.get("donate-title") as string;
    const address = formData.get("donate-address") as string;
    const special_inst = formData.get("donate-special-instructions") as string;
    
    const longitude = formData.get("donate-longitude") as string;
    const latitude = formData.get("donate-latitude") as string;

    const location = { type: "Point", coordinates: [parseFloat(longitude), parseFloat(latitude)] };
    var donorId = user?.primaryEmailAddress?.emailAddress || "";
    
    const data = { title, address, special_inst, donorId, location };
    await createDonation(data);
    redirect("/donations");
}

export async function markDonationAsClaimedAction(donationId: string, recipientId: string) {
    await markDonationAsClaimed(donationId, recipientId);
    redirect("/live");
}

export async function sendDonorConfirmationEmail(firstName: string, email: string) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev', // Development only
    to: [email],
    subject: 'Welcome to Resend!',
    react: DonorConfirmation({ firstName }),
    });

  if (error) {
    console.error(error)
    return { success: false }
  }
  return { success: true }
}

export async function sendRecipientConfirmationEmail(firstName: string, email: string) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev', // Development only
    to: [email],
    subject: 'Welcome to Resend!',
    react: RecipientConfirmation({ firstName }),
    });

  if (error) {
    console.error(error)
    return { success: false }
  }
  return { success: true }
}

export async function liveFormAction(donationId: string, recipientId: string, title: string, donorId: string, address: string|null, special_inst: string|null) {
    Promise.all([
        markDonationAsClaimedAction(donationId, recipientId),
        sendDonorConfirmationEmail("Kasish", donorId),
        sendRecipientConfirmationEmail("Kasish", recipientId)
    ]);
    redirect("/live");
}