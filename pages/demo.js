import React from "react";
import { addSecretMessage } from "@/db";
import { useRouter } from "next/router";

export default function SecretMessageForm() {
  const [error, setError] = React.useState(false);
  const textAreaRef = React.useRef();
  const router = useRouter();

  async function submitSecretMessage() {
    if (textAreaRef.current.value.length) {
      const sanitizedMessage = textAreaRef.current.value.replace(/[<>]/g, ""); // Remove unsafe characters
      const visibleNewlinesMessage = sanitizedMessage.replace(/\n/g, "\\n"); // Make newlines visible in console

      console.log(visibleNewlinesMessage);
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

  //   let buttontext;
  //   if (loading) {
  //     buttontext = "Sending...";
  //   } else if (error) {
  //     buttontext = "Error: Input Message";
  //   } else {
  //     buttontext = " Submit Secret Message";
  //   }

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
        Submit Secret Message
      </button>
    </div>
  );
}
