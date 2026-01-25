"use client";

import * as React from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export function MobileNavbar() {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
          <span className="sr-only">Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onSelect={() => router.push("/")}>
          Home
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => router.push("/about")}>
          About
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => router.push("/give")}>
          Give
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => router.push("/live")}>
          Live
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
