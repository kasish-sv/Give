import { Button } from "@/components/ui/button";
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

export default function Give() {
  return (
    <div className="w-full max-w-md mx-auto py-10 frosted-glass p-6 m-6 rounded-lg shadow-lg ">
      <form action={createDonationAction} className="space-y-8">
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
    </div>
  );
}
