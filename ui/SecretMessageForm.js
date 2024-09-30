import React from "react";
import { addSecretMessage } from "@/db";
import { useRouter } from "next/router";

export default function SecretMessageForm({ setSent, loading, setLoading }) {
  const [error, setError] = React.useState(false);
  const textAreaRef = React.useRef();
  const router = useRouter();

  async function submitSecretMessage() {
    if (textAreaRef.current.value.length) {
      setLoading(true);
      await addSecretMessage(
        router.query.userId.split("-")[1],
        textAreaRef.current.value.replace(/[<>]/g, "")
      );

      setSent(true);
    } else {
      setError(true);
    }
  }

  React.useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 1000);
    }
  }, [error, setError]);

  let buttontext;
  if (loading) {
    buttontext = "Sending...";
  } else if (error) {
    buttontext = "Error: Input Message";
  } else {
    buttontext = " Submit Secret Message";
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
        {buttontext}
      </button>
    </div>
  );
}
