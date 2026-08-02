"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [postcode, setPostcode] = useState("");
  const [marketing, setMarketing] = useState(false);
  const [privacy, setPrivacy] = useState(false);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!privacy) {
      alert("Please accept the Privacy Policy.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("signups").insert({
      name,
      email,
      postcode,
      marketing_consent: marketing,
      privacy_consent: privacy,
    });

    if (error) {
      setLoading(false);
      alert(error.message);
      return;
    }

    await fetch("/api/send-welcome", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        name,
      }),
    });

    setLoading(false);
    setSuccess(true);
  }

  if (success) {
    return (
      <div className="mt-10 rounded-xl border border-[#E8D5B7] p-8 text-center">
        <h2 className="text-2xl mb-2">Thanks!</h2>
        <p>You're on the list. We'll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-4 text-left">

      <input
        type="text"
        placeholder="Name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-xl bg-[#F8F5EF] px-5 py-4 text-[#173629] outline-none focus:ring-2 focus:ring-[#E8D5B7]"
      />

      <input
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-xl bg-[#F8F5EF] px-5 py-4 text-[#173629] outline-none focus:ring-2 focus:ring-[#E8D5B7]"
      />

      <input
        type="text"
        placeholder="Postcode"
        value={postcode}
        onChange={(e) => setPostcode(e.target.value)}
        className="w-full rounded-xl bg-[#F8F5EF] px-5 py-4 text-[#173629] outline-none focus:ring-2 focus:ring-[#E8D5B7]"
      />

      <label className="flex items-start gap-3 text-sm text-[#D8C5A7]">
        <input
          type="checkbox"
          checked={marketing}
          onChange={(e) => setMarketing(e.target.checked)}
          className="mt-1"
        />
        <span>
          I'd like to receive launch updates from Mudball Golf.
        </span>
      </label>

      <label className="flex items-start gap-3 text-sm text-[#D8C5A7]">
        <input
          type="checkbox"
          checked={privacy}
          onChange={(e) => setPrivacy(e.target.checked)}
          className="mt-1"
        />
        <span>
          I have read the{" "}
          <a
            href="/privacy"
            target="_blank"
            className="underline hover:text-white"
          >
            Privacy Policy
          </a>{" "}
          and consent to Mudball Golf storing my information.
        </span>
      </label>

      <button
        type="submit"
        disabled={loading}
        className="mt-6 w-full rounded-xl border border-[#E8D5B7] bg-transparent py-4 font-semibold tracking-[0.2em] uppercase transition hover:bg-[#E8D5B7] hover:text-[#173629] disabled:opacity-50"
      >
        {loading ? "Signing Up..." : "Sign Up"}
      </button>
    </form>
  );
}