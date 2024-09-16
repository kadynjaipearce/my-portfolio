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
  <body
    style={{
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
      margin: "0",
      padding: "0",
      backgroundColor: "#f0f4f8",
      lineHeight: "1.6",
    }}
  >
    <table
      width="100%"
      cellSpacing="0"
      cellPadding="0"
      style={{
        maxWidth: "600px",
        margin: "20px auto",
        backgroundColor: "#ffffff",
        border: "none",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        overflow: "hidden",
      }}
    >
      <tr>
        <td
          style={{
            padding: "20px",
            textAlign: "center",
            background: "linear-gradient(to right, #60a5fa, #a855f7)",
            color: "#ffffff",
          }}
        >
          <h1 style={{ margin: "0" }}>
            <span style={{ fontWeight: "bold" }}>{firstName}</span> Has Sent You
            An Email
          </h1>
        </td>
      </tr>
      <tr>
        <td style={{ padding: "20px 30px", color: "#333333" }}>
          <h2
            style={{
              paddingBottom: "5px",
              color: "#000",
            }}
          >
            Message:
          </h2>
          <p
            style={{ fontSize: "16px", marginBottom: "20px", color: "#555555" }}
          >
            {message}
          </p>
        </td>
      </tr>
      <tr>
        <td style={{ padding: "20px 30px", textAlign: "center" }}>
          <h2
            style={{
              borderTop: "2px solid #a855f7",
              paddingTop: "10px",
              color: "#000",
              marginBottom: "10px",
            }}
          >
            Reply To:{" "}
            <a href={`mailto:${email}`} style={{ color: "#60a5fa" }}>
              {email}
            </a>
          </h2>
        </td>
      </tr>
      <tr>
        <td
          style={{
            background: "linear-gradient(to right, #60a5fa, #a855f7)",
            padding: "20px",
            textAlign: "center",
            color: "#ffffff",
            fontSize: "12px",
          }}
        >
          <p style={{ margin: "0" }}>
            © {new Date().getFullYear()} Kadyn-Jai Pearce. All rights reserved.
          </p>
        </td>
      </tr>
    </table>
  </body>
);
