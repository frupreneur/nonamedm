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
      const visibleNewlinesMessage = sanitizedMessage.replace(/\n/g, "\\n"); // Make newlines visible in console\
      const viewedMessage = `comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`;

      console.log(viewedMessage.replace(/\n/g, "<br>"));
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
