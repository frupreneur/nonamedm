import React from "react";
import { FaWhatsapp, FaRegCopy } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ShareButtons() {
  const [link, setLink] = React.useState("loading...");
  const inputRef = React.useRef();
  const router = useRouter();

  async function copyToClipboard() {
    await navigator.clipboard.writeText(inputRef.current.value);
    alert(
      "Your Link has been copied to clipboard, paste it on social media to get secret messages"
    );
  }

  React.useEffect(() => {
    if (router.isReady) {
      if (!localStorage.getItem("loggedUser")) {
        router.push("/");
      } else {
        setLink(
          `${process.env.NEXT_PUBLIC_DOMAIN}/send-secret-message/${JSON.parse(
            localStorage.getItem("loggedUser")
          ).userName.toLowerCase()}-${JSON.parse(
            localStorage.getItem("loggedUser")
          ).uid.toString()}`
        );
      }
    }
  }, [router]);
  return (
    <div className="card">
      <div className="share-container">
        <input
          ref={inputRef}
          type="text"
          className="classic-form"
          name="link"
          value={link}
          id="shareLink"
          readOnly
        />
        <div className="share-buttons">
          <Link
            href={`https://api.whatsapp.com/send?text=Write a *secret anonymous message* for me…🙂  I *won't know* who wrote it. ${link}`}
            target="_blank"
            className="share-button wa"
          >
            <FaWhatsapp style={{ fontSize: "1.5rem" }} />{" "}
            <span> Share on WhatsApp</span>
          </Link>
          <button className="share-button  copy" onClick={copyToClipboard}>
            <FaRegCopy style={{ fontSize: "1.5rem" }} />{" "}
            <span>Copy Your Link</span>
          </button>
        </div>
      </div>
    </div>
  );
}
