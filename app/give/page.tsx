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
import { DonorLocation } from "@/components/DonorLocation";
import { reverseGeocode } from "@/lib/location";

export default function Give() {
  return (
    <div className="w-full max-w-md">
      <form action={createDonationAction} className="space-y-8">
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Donation</FieldLegend>
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
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button type="submit">Submit</Button>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}
