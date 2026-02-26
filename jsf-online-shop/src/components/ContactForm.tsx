"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Melding sendt:", message);

    router.push("/takk");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="message">Din Melding:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={{ width: "100%", minHeight: "100px", marginTop: "5px" }}
        />
      </div>
      <button type="submit" style={{ marginTop: "10px" }}>
        Send Melding
      </button>
    </form>
  );
}
