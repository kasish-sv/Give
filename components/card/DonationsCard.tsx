import Image from "next/image";
import { Donation } from "@/generated/prisma/client";
import { markDonationAsClaimed } from "@/lib/prisma-db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { markDonationAsClaimedAction } from "@/lib/actions";
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

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { FormSubmit } from "../form/FormSubmit";

export async function DonationsCard({ donations }: donationListProps) {
  const user = await currentUser();
  var recipientId = user?.primaryEmailAddress?.emailAddress || "";
  return (
    <div className="grid gap-6 p-4 grid-cols-2 lg:grid-cols-5 justify-center justify-items-center">
      {donations.map((donation) => (
        <Card
          key={donation.id}
          className="flex justify-between w-full max-w-xs flex-col frosted-glass"
        >
          <CardHeader>
            <Image
              src={"/images/goodfood.jpg"}
              alt={donation.title}
              width={128}
              height={128}
              className="aspect-square w-full rounded-sm object-cover"
            />
            <p className="py-4 font-bold">{donation.title}</p>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              {donation.address}
            </p>
          </CardHeader>
          <CardFooter>
            <form
              action={markDonationAsClaimedAction.bind(
                null,
                donation.id,
                recipientId,
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
