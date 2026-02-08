import * as React from "react";

interface EmailTemplateProps {
  title: string;
  address: string | null;
  createdAt: string;
  recipientName: string;
  recipientEmail: string;
}

export function DonorConfirmation({
  title,
  address,
  createdAt,
  recipientName,
  recipientEmail,
}: EmailTemplateProps) {
  return (
    <div>
      <h3>Hey Patron! We have some happy news!</h3>

      <p>
        We just wanted to let you know that your donation "{title}" donated from{" "}
        {address} on {createdAt} has been claimed by a recipient in need. Your
        generosity is making a real difference in someone's life, and we
        couldn't be more grateful for your support.
      </p>

      <p>Please find the details of the recipient below: </p>
      <h4>
        <ul>
          <li>Name: {recipientName}</li>
          <li>Email: {recipientEmail}</li>
        </ul>
      </h4>
      <p>
        Thank you for being a part of our community and for your kindness. We
        will keep you updated on the impact of your donation and the recipient's
        journey. If you have any questions or would like to get involved
        further, please don't hesitate to reach out.
      </p>
      <p>Warm regards,</p>
      <p>The Give Team</p>
    </div>
  );
}
