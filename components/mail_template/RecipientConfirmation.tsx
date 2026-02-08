import * as React from "react";

interface EmailTemplateProps {
  title: string;
  address: string | null;
  createdAt: string;
  donorId: string;
  special_inst: string | null;
}

export function RecipientConfirmation({
  title,
  address,
  createdAt,
  donorId,
  special_inst,
}: EmailTemplateProps) {
  return (
    <div>
      <h3>Hey Patron! We have some happy news!</h3>

      <p>
        We just wanted to let you know that your claim for the donation "{title}
        " donated from {address} on {createdAt} has been successful.
      </p>

      <p>Please find the details of the donation below: </p>
      <h4>
        <ul>
          <li>Donation: {title}</li>
          <li>Donor Email: {donorId}</li>
          <li>Address: {address}</li>
          <li>Donation Recorded At: {createdAt}</li>
          {special_inst && <li>Special Instructions: {special_inst}</li>}
        </ul>
      </h4>
      <p>
        Thank you for being a part of our community. If you have any questions
        or any concerns, please don't hesitate to reach out.
      </p>
      <p>Warm regards,</p>
      <p>The Give Team</p>
    </div>
  );
}
