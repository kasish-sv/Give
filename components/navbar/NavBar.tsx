import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import CustomUserButton from "./CustomUserButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import Link from "next/link";
import { ThemeProvider } from "next-themes";
import { ModeToggle } from "./ThemeToggle";
import { MobileNavbar } from "./MobileNavbar";
export default function NavBar() {
  return (
    <div className="flex items-center p-5 md:px-8 font-medium border-b border-gray-300 frosted-glass">
      <div className="block sm:hidden">
        <MobileNavbar />
      </div>
      <div className="flex-wrap gap-3 hidden sm:block">
        <NavigationMenu>
          <Link href="/" className="font-serif text-2xl italic px-3">
            Give
          </Link>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className="navbar-link">
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className="navbar-link">
                <Link href="/give">Give</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className="navbar-link">
                <Link href="/live">Live</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex space-x-2.5 ml-auto items-center">
        <SignedOut>
          <SignInButton>
            <Button variant="ghost" className="navbar-link cursor-pointer">
              Sign In
            </Button>
          </SignInButton>
          <SignUpButton>
            <button className="bg-[#6c47ff] text-ceramic-white h-8 rounded-full px-4 sm:h-12 cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <CustomUserButton />
        </SignedIn>
        <ModeToggle />
      </div>
    </div>
  );
}
