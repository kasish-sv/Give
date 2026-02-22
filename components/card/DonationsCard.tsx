import Image from "next/image";
import { Donation } from "@/generated/prisma/client";
import { markDonationAsClaimed } from "@/lib/prisma-db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { liveFormAction } from "@/lib/actions";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
  PopoverTrigger,
} from "../ui/popover";

type donationListProps = {
  donations: Donation[];
};

function normalizeDate(raw: any): Date {
  if (raw.$date) return new Date(raw.$date);
  return new Date(raw);
}

import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { FormSubmit } from "../form/FormSubmit";
import { SubmitConfirm } from "../ui/SubmitConfirm";
import { ConfirmationPage } from "@/app/_internalPage/ConfirmationPage";

export async function DonationsCard({ donations }: donationListProps) {
  const user = await currentUser();
  var recipientId = user?.primaryEmailAddress?.emailAddress || "";
  var recipientName = user?.firstName || "";

  return (
    <div className="grid gap-6 p-4 grid-cols-2 lg:grid-cols-5 justify-center justify-items-center">
      {donations.map((donation) => (
        <Card
          key={donation.id}
          className="flex justify-between w-full max-w-xs flex-col frosted-glass"
        >
          <CardHeader>
            <Image
              src={"/images/givefood.png"}
              alt={donation.title}
              width={96}
              height={96}
              className="aspect-square w-full"
            />
            <p className="py-4 font-bold">{donation.title}</p>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              {donation.address}
            </p>
            <p className="mb-2 text-xs font-bold text-gray-500 dark:text-gray-400">
              Donated on: {normalizeDate(donation.createdAt)?.toLocaleString()}
            </p>
          </CardHeader>
          <CardFooter>
            <form
              action={liveFormAction.bind(
                null,
                donation.id,
                recipientId,
                recipientName,
                donation.donorId,
                donation.title,
                normalizeDate(donation.createdAt).toLocaleString(),
                donation.address,
                donation.special_inst,
              )}
              className="flex flex-col w-full gap-2"
            >
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost">Special Instructions</Button>
                </PopoverTrigger>
                <PopoverContent align="center" className="w-49 frosted-glass">
                  <PopoverHeader>
                    <PopoverDescription>
                      {donation.special_inst}
                    </PopoverDescription>
                  </PopoverHeader>
                </PopoverContent>
              </Popover>
              <FormSubmit value="Claim Donation" />
            </form>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
