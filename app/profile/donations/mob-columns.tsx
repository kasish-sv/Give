"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { MoreHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Donation = {
  id: String;
  title: string;
  address: string | null;
  available: boolean;
  special_inst: string | null;
  createdAt: Date;
  claimedAt: Date | null;
  donorId: string;
  recipientId: string | null;
};

export const mobcolumns: ColumnDef<Donation>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc");
            console.log(column.getIsSorted());
          }}
        >
          Item Donated
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "recipientId",
    header: "Recipient Email",
  },
  {
    accessorKey: "available",
    header: "Status",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const donation = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => {
                const mailtoLink = `mailto:${donation.recipientId}`;
                window.open(mailtoLink, "_blank");
              }}
            >
              Contact Recipient
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                alert(
                  "This functionality has not been implemented yet. Stay tuned",
                );
              }}
            >
              Edit Donation
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                alert(
                  "This functionality has not been implemented yet. Stay tuned",
                );
              }}
            >
              <p className="font-bold text-red-500">Cancel Donation</p>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
