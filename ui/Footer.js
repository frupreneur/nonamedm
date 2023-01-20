import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <p style={{ fontSize: "0.9rem", fontStyle: "italic" }}>
        NoNameDM is an interactive anonymous messaging app. Create your Profile
        Link and Send it to all your contacts to check what do your friends
        think about you. With the help of NoNameDM, you can send and receive
        anonymous compliments easily for free!
      </p>

      <Link href="/disclaimer" style={{letterSpacing: "3px", color: "#3ECFE1"}}>{`-->Disclaimer<--`}</Link>
    </footer>
  );
}
