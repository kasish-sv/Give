import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { redirect } from "next/navigation";
interface ConfirmationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  message: string;
}

export function ConfirmationModal({
  open,
  onOpenChange,
  message,
}: ConfirmationModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Action Successfull!
          </DialogTitle>
        </DialogHeader>
        <div className="mt-2 text-sm text-gray-700 dark:text-gray-500">
          {message}
        </div>

        <div className="flex flex-row gap-3 ml-auto">
          <button
            className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            onClick={() => onOpenChange(false)}
          >
            Close
          </button>
          <button
            className="mt-4 inline-flex items-center px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            onClick={() => redirect("/profile")}
          >
            Go to Profile
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
