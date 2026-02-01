"use client";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export const FormSubmit = ({ value }: { value: string }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className="disabled:bg-gray-600 w-full"
      disabled={pending}
    >
      {value}
    </Button>
  );
};
