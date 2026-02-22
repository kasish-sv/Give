import { SubmitConfirm } from "../../components/ui/SubmitConfirm";

export function ConfirmationPage() {
  return (
    <SubmitConfirm
      title="Success"
      description="Your donation has been claimed successfully! The details of the claim have been sent to both the donor and recipient's email addresses. Thank you for your generosity and for helping to reduce food waste!"
    />
  );
}
