import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2Icon, InfoIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ConfirmationPage } from "@/app/_internalPage/ConfirmationPage";
export function SubmitConfirm({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 backdrop-blur-sm">
      <Alert className="w-full max-w-md mx-auto flex flex-col items-center justify-center text-center">
        <CheckCircle2Icon />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
        <div className="flex flex-row gap-3 ml-auto">
          <Link href="/live">
            <button className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              Claim another donation
            </button>
          </Link>
          <Link href="/profile">
            <button className="mt-4 inline-flex items-center px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              Go to Profile
            </button>
          </Link>
        </div>
      </Alert>
    </div>
  );
}
