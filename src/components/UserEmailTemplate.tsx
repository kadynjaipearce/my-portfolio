import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const UserEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>
      <span>{firstName}</span> Thank you for sending me an email ill try to
      reply asap
    </h1>
  </div>
);
