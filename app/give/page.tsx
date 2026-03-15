"use client";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createDonationAction } from "@/lib/actions";
import { DonorLocation } from "@/components/form/DonorLocation";
import { ImageUpload } from "@/components/card/DonationImage";
import { FormSubmit } from "@/components/form/FormSubmit";
import { useState } from "react";
import { ConfirmationModal } from "@/components/ui/ConfirmationModal";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Give() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const result = await createDonationAction(formData);
    if (result.success) {
      setMessage("Your donation has been created successfully!");
      setOpen(true);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto py-10 frosted-glass p-6 m-6 rounded-lg shadow-lg ">
      <form onSubmit={handleSubmit} className="space-y-8">
        <FieldGroup>
          <FieldSet>
            <FieldLegend>
              Donate today and be part of a better tomorrow
            </FieldLegend>
            <FieldDescription>
              All Donations are transparent and go directly to the cause
            </FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="donate-title">
                  What would you like to donate?
                </FieldLabel>
                <Input id="donate-title" name="donate-title" required />
              </Field>

              <Field>
                <FieldLabel htmlFor="donate-type">
                  What is the type of Donation?
                </FieldLabel>
                <Select defaultValue="Other" name="donate-type">
                  <SelectTrigger
                    id="donate-type"
                    name="donate-type"
                    className="w-full"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Food">Food</SelectItem>
                    <SelectItem value="Medicine">Medicine</SelectItem>
                    <SelectItem value="Books">Books</SelectItem>
                    <SelectItem value="Clothing">Clothing</SelectItem>
                    <SelectItem value="Others">Others</SelectItem>
                  </SelectContent>
                </Select>
              </Field>

              <Field>
                <FieldLabel htmlFor="donate-best-before">
                  Best Before
                </FieldLabel>
                <Input
                  id="donate-best-before"
                  name="donate-best-before"
                  type="date"
                  required
                />
              </Field>

              <DonorLocation />

              <Field>
                <FieldLabel htmlFor="donate-special-instructions">
                  Comments
                </FieldLabel>
                <Textarea
                  name="donate-special-instructions"
                  id="donate-special-instructions"
                  placeholder="Add any additional comments"
                  className="resize-none"
                />
              </Field>
              <ImageUpload />
            </FieldGroup>
          </FieldSet>
          <Field orientation="vertical">
            <FormSubmit value="Donate" />
          </Field>
        </FieldGroup>
      </form>
      <ConfirmationModal open={open} onOpenChange={setOpen} message={message} />
    </div>
  );
}
