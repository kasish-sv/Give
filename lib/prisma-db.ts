import { prisma } from './prisma'

export async function getAlldonations() {
  return await prisma.donation.findMany();
}

export async function createDonation(data: { title: string; address: string ; donorId:string}) {
  return await prisma.donation.create({
    data,
  });
}

export async function getDonationsByDonorId(donorId: string) {
  return await prisma.donation.findMany({
    where: { donorId : donorId },
  });
}

export async function getAvailableDonations() {
  return await prisma.donation.findMany({
    where: { available: true },
  });
}

export async function markDonationAsClaimed(donationId: string, recipientId: string) {
  return await prisma.donation.update({
    where: { id: donationId },  
    data: { available: false,
      recipientId: recipientId
     },      // field to update
  });
}