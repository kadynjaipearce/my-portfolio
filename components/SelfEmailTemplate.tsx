import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  message: string;
  subject: string;
  email: string;
}

export const SelfEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  message,
  subject,
  email,
}) => (
  <div>
    <h1>
      <span>{firstName}</span> Has Sent You An Email
    </h1>
    <h2>Subject: {subject}</h2>
    <p>{message}</p>

    <h1>Reply To: {email}</h1>
  </div>
);
