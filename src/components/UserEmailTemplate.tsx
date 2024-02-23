import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const UserEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <body
    style={{
      fontFamily: "Arial, sans-serif",
      margin: "0",
      padding: "0",
      backgroundColor: "#f4f4f4",
    }}
  >
    <table
      width="100%"
      cellSpacing="0"
      cellPadding="0"
      style={{
        maxWidth: "600px",
        margin: "auto",
        backgroundColor: "#ffffff",
        border: "1px solid #dddddd",
      }}
    >
      <tr>
        <td style={{ padding: "20px", textAlign: "center" }}>
          <h1 style={{ color: "#333333" }}>Hello {firstName},</h1>
          <p style={{ color: "#555555" }}>
            Thank you for reaching out. I will try to reply to this email asap.
          </p>
          {/* Main content goes here */}
          <p style={{ color: "#555555" }}>
            In the meantime should you have any further questions, please
            don&apos;t hesitate to reply to this email or contact me via my
            socials below.
          </p>
        </td>
      </tr>
      <tr>
        <td style={{ padding: "20px", textAlign: "center" }}>
          <p style={{ color: "#999999", fontSize: "12px" }}>Follow me on:</p>
          <a
            href="https://github.com/kadynjaipearce"
            style={{ textDecoration: "none", color: "#0077cc" }}
          >
            Github
          </a>
          |{" "}
          <a
            href="https://www.linkedin.com/in/kadynpearce/"
            style={{ textDecoration: "none", color: "#0077cc" }}
          >
            Linkedin
          </a>
          |{" "}
          <a
            href="https://www.instagram.com/kadynpearce/"
            style={{ textDecoration: "none", color: "#0077cc" }}
          >
            Instagram
          </a>
        </td>
      </tr>
    </table>
  </body>
);
