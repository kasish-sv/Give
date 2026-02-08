"use client";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";

export const FormSubmit = ({ value }: { value: string }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className="disabled:bg-gray-600 w-full"
      disabled={pending}
      onClick={() => {
        // This runs after the form action completes successfully
        !pending && toast.success("Form submitted successfully!");
      }}
    >
      {value}
    </Button>
  );
};
