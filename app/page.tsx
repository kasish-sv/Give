import Image from "next/image";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import frontPage from "@/components/comp/frontPage";

export default async function Home() {
  // Use `auth()` to access `isAuthenticated` - if false, the user is not signed in
  const { isAuthenticated } = await auth();
  // Protect the route by checking if the user is signed in
  if (!isAuthenticated) {
    return frontPage();
  } else {
    redirect("/profile");
  }
}
