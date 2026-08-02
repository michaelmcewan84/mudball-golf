"use client";

import { useEffect, useState } from "react";

export default function UnsubscribePage() {
  const [status, setStatus] = useState(
    "Removing you from the Mudball Golf mailing list..."
  );

  useEffect(() => {
    const unsubscribe = async () => {
      const params = new URLSearchParams(window.location.search);
      const email = params.get("email");

      if (!email) {
        setStatus("No email address found.");
        return;
      }

      const response = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    };

    unsubscribe();
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#173629",
        color: "#E8D5B7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "650px",
        }}
      >
        <img
          src="/logo.png"
          alt="Mudball Golf"
          style={{
            width: "100px",
            display: "block",
            margin: "0 auto 45px",
          }}
        />

        {status === "success" ? (
          <>
            <h1
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "42px",
                fontWeight: "400",
                margin: "0 0 35px",
                color: "#E8D5B7",
              }}
            >
              Sorry to see you go!
            </h1>

            <p
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "22px",
                lineHeight: "1.6",
                margin: "0 0 30px",
                color: "#FFFFFF",
              }}
            >
              You have been removed from the Mudball Golf mailing list.
            </p>

            <p
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "22px",
                lineHeight: "1.6",
                margin: "0 0 45px",
                color: "#FFFFFF",
              }}
            >
              Missing you already! Come back any time!
            </p>

            <a
              href="https://mudballgolf.uk"
              style={{
                display: "inline-block",
                backgroundColor: "#E8D5B7",
                color: "#173629",
                padding: "16px 35px",
                textDecoration: "none",
                fontFamily: "Georgia, serif",
                fontSize: "18px",
              }}
            >
              Return to Mudball Golf
            </a>
          </>
        ) : (
          <p
            style={{
              fontSize: "18px",
              color: "#E8D5B7",
            }}
          >
            {status}
          </p>
        )}
      </div>
    </main>
  );
}