import React from "react";
import { addSecretMessage } from "@/db";
import { useRouter } from "next/router";

export default function SecretMessageForm({ setSent, loading, setLoading }) {
  const textAreaRef = React.useRef();
  const router = useRouter();

  async function submitSecretMessage() {
    setLoading(true);
    await addSecretMessage(
      router.query.userId.split("-")[1],
      textAreaRef.current.value.replace(/[^a-zA-Z0-9 ]/g, "")
    );

    setSent(true);
  }

  return (
    <div className="card">
      <textarea
        ref={textAreaRef}
        rows="10"
        placeholder="Enter Your Secret Message"
      ></textarea>
      <button
        style={{ backgroundColor: "#29d5de", padding: "0.5rem 1rem" }}
        onClick={submitSecretMessage}
      >
        {loading ? "Sending..." : " Submit Secret Message"}
      </button>
    </div>
  );
}
