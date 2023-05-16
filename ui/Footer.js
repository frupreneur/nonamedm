import React from "react";
import Link from "next/link";

export default function Footer() {
  const [deferredPrompt, setDeferredPrompt] = React.useState(null);

  const footerMenu = [
    { path: "/", name: "Home" },
    { path: "/privacy-policy", name: "Privacy Policy" },
    { path: "/terms-and-conditions", name: "Terms and Conditions" },
    { path: "/contact", name: "Contact" },
  ];
  return (
    <footer>
      <div className="footer">
        <ul className="footer-menu">
          {footerMenu.map((menuItem, i) => (
            <li key={i}>
              <Link href={menuItem.path}>{menuItem.name}</Link>
            </li>
          ))}
        </ul>
        <p>{`All rights reserved © NoNameDM ${new Date().getFullYear()}`} </p>
      </div>
    </footer>
  );
}
