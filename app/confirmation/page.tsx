// app/confirmation/page.tsx
import { redirect } from "next/navigation";
import { ConfirmationPage } from "../_internalPage/ConfirmationPage";

export default function ConfirmationRoute() {
  // Prevent direct navigation
  if (typeof window !== "undefined") {
    redirect("/404");
  }

  return <ConfirmationPage />;
}
