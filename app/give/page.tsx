import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { createDonation } from "@/lib/prisma-db";
import { redirect } from "next/navigation";
import { createDonationAction } from "@/lib/actions";

export default function FieldDemo() {
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
              <Field>
                <FieldLabel htmlFor="donate-address">Address</FieldLabel>
                <Input
                  id="donate-address"
                  name="donate-address"
                  placeholder="1234 Main St, City, State, ZIP"
                />
                <FieldDescription>
                  Enter your complete address for smoother pickup
                </FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor="donate-optcomments">Comments</FieldLabel>
                <Textarea
                  id="donate-optcomments"
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
