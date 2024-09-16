import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const UserEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
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
          }}
        >
          <h1 style={{ color: "#ffffff", margin: "0" }}>
            Thank you {firstName}.,
          </h1>
        </td>
      </tr>
      <tr>
        <td style={{ padding: "20px 30px", color: "#333333" }}>
          <p style={{ fontSize: "16px", marginBottom: "20px" }}>
            Thank you for reaching out! I will try to reply to this email as
            soon as possible.
          </p>
          <p style={{ fontSize: "16px", marginBottom: "20px" }}>
            In the meantime, if you have any further questions, don&apos;t
            hesitate to reply to this email or contact me via my social media
            channels below.
          </p>
        </td>
      </tr>
      <tr>
        <td
          style={{
            padding: "20px 30px",
            textAlign: "center",
            backgroundColor: "#f7f7f7",
          }}
        >
          <p
            style={{ fontSize: "14px", color: "#666666", marginBottom: "10px" }}
          >
            Follow me on:
          </p>
          <a
            href="https://github.com/kadynjaipearce"
            style={{
              textDecoration: "none",
              color: "#000",
              fontWeight: "bold",
              margin: "0 10px",
            }}
          >
            GitHub
          </a>
          |
          <a
            href="https://www.linkedin.com/in/kadynpearce/"
            style={{
              textDecoration: "none",
              color: "#000",
              fontWeight: "bold",
              margin: "0 10px",
            }}
          >
            LinkedIn
          </a>
          |
          <a
            href="https://www.instagram.com/kadynpearce/"
            style={{
              textDecoration: "none",
              color: "#000",
              fontWeight: "bold",
              margin: "0 10px",
            }}
          >
            Instagram
          </a>
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
