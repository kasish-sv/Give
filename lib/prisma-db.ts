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
    where: { donorId },
  });
}
