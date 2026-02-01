"use client";
import { UserButton } from "@clerk/nextjs";
import { CircleUser } from "lucide-react";

const CustomUserButton = () => {
  return (
    <header>
      <UserButton>
        <UserButton.MenuItems>
          <UserButton.Link
            label="View Profile"
            labelIcon={<CircleUser className="h-4 w-4" />}
            href="/profile"
          />
        </UserButton.MenuItems>
      </UserButton>
    </header>
  );
};

export default CustomUserButton;
