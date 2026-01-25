import Image from "next/image";
import { Donation } from "@/generated/prisma/client";
import { markDonationAsClaimed } from "@/lib/prisma-db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { markDonationAsClaimedAction } from "@/lib/actions";
import { Button } from "../ui/button";

type donationListProps = {
  donations: Donation[];
};

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemGroup,
  ItemTitle,
} from "@/components/ui/item";
import { Suspense } from "react";
import { FormSubmit } from "../form/FormSubmit";

export async function DonationsCard({ donations }: donationListProps) {
  const user = await currentUser();
  var recipientId = user?.primaryEmailAddress?.emailAddress || "";
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex w-full max-w-xl flex-col gap-6">
        <ItemGroup className="grid grid-cols-3 gap-4">
          {donations.map((donation) => (
            <Item key={donation.id} variant="outline">
              <form
                action={markDonationAsClaimedAction.bind(
                  null,
                  donation.id,
                  recipientId,
                )}
              >
                <ItemHeader>
                  <Image
                    src={"/images/goodfood.jpg"}
                    alt={donation.title}
                    width={128}
                    height={128}
                    className="aspect-square w-full rounded-sm object-cover"
                  />
                </ItemHeader>
                <ItemContent>
                  <ItemTitle>{donation.title}</ItemTitle>
                  <ItemDescription>{donation.address}</ItemDescription>
                </ItemContent>
                <FormSubmit value="Get this" />
              </form>
            </Item>
          ))}
        </ItemGroup>
      </div>
    </Suspense>
  );
}
