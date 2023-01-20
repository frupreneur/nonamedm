import React from "react";
import Link from "next/link";

export default function Footer() {
  const [deferredPrompt, setDeferredPrompt] = React.useState(null);

  React.useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      setDeferredPrompt(e);
    });
  });

  async function installApp() {
    if (deferredPrompt !== null) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setDeferredPrompt(null);
      }
    }
  }
  return (
    <footer>
      <p style={{ fontSize: "0.9rem", fontStyle: "italic" }}>
        NoNameDM is an interactive anonymous messaging app. Create your Profile
        Link and Send it to all your contacts to check what do your friends
        think about you. With the help of NoNameDM, you can send and receive
        anonymous compliments easily for free!
      </p>
      <span
        style={{ letterSpacing: "3px", color: "#3ECFE1", cursor: "pointer" }}
        onClick={installApp}
      >{`Install App`}</span>
      {" | "}

      <Link
        href="/disclaimer"
        style={{ letterSpacing: "3px", color: "#3ECFE1" }}
      >{`Disclaimer`}</Link>
    </footer>
  );
}
