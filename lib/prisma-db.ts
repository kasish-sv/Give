import { prisma } from './prisma'
import { ObjectId } from 'mongodb';
export async function getAlldonations() {
  return await prisma.donation.findMany();
}

export async function createDonation(data: { title: string; address: string ;special_inst?: string; donorId:string; location: { type: string; coordinates: number[] };}) {
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
      recipientId: recipientId,
      claimedAt: new Date()
     },
  });
}

type DonationRaw = {
  _id: ObjectId;
  title: string;
  address: string | null;
  available: boolean;
  special_inst: string | null;
  createdAt: Date;
  claimedAt: Date | null;
  location: { type: "Point"; coordinates: [number, number] };
  donorId: string;
  recipientId: string | null;
};

//creating a findraw as Prisma does not support geospatial queries natively
export async function getDonationsNearLocation(userLng: number, userLat: number) {
  let rawDonations;
  
  rawDonations = await prisma.donation.findRaw({
    filter: {
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [userLng, userLat], // Mongo expects [lng, lat]
          },
          $maxDistance: 5000, // meters (5 km)
        },
      },
      createdAt: { $gte: {$date : new Date(Date.now() - 24*3600*1000) } },
      available: true,
      // Only show donations from the last 24 hours
    },
  }) as unknown as DonationRaw[];

  // Map raw donations to the expected format as Prisma does not return them in the mapped format
  const donations = rawDonations.map((raw) => ({
    id: (raw._id as any).$oid, // Convert ObjectId to string as ID is coming up weirdly as stored in Mongo
    title: raw.title,
    address: raw.address,
    available: raw.available,
    special_inst: raw.special_inst,
    createdAt: raw.createdAt,
    claimedAt: raw.claimedAt,
    location: {
      type: "Point",
      coordinates: raw.location.coordinates,
    },
    donorId: raw.donorId,
    recipientId: raw.recipientId,
  }));

  return donations;
}

