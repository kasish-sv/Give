"use client";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { Spinner } from "../ui/spinner";

export const FormSubmit = ({ value }: { value: string }) => {
  const { pending } = useFormStatus();
  return (
    <div>
      <Button
        type="submit"
        className="disabled:bg-gray-600 w-full text-xs md:text-sm"
        disabled={pending}
      >
        {value}
        {pending && <Spinner className="m-2" />}
      </Button>
    </div>
  );
};
