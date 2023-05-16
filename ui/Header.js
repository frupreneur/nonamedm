import React, { useState } from "react";
import Link from "next/link";
import { useGlobalState } from "@/state";
import { useRouter } from "next/router";

export default function Header() {
  const { state, setState } = useGlobalState();
  const router = useRouter();

  return (
    <header>
      <div className="logo">
        <Link href="/">
          <h1 className="logo-text">NoNameDM</h1>
          <p style={{ fontSize: "small", margin: 0, fontStyle: "italic" }}>
            Anonymous Secret Messages
          </p>
        </Link>
      </div>
      <ul className="menu">
        {!state.user.name && (
          <li>
            <Link href="/about">About NoNameDM</Link>
          </li>
        )}

        {state.user.name && (
          <>
            <li>
              <Link
                href="/inbox"
                className={router.pathname.includes("inbox") ? "active" : null}
              >
                Inbox
              </Link>
            </li>
            <li>
              <Link
                href="/share"
                className={router.pathname.includes("share") ? "active" : null}
              >
                Share
              </Link>
            </li>
            <li
              onClick={() => {
                setState((prev) => ({ ...prev, logOut: true }));
                document.documentElement.style = "overflow: hidden !important";
              }}
              style={{ cursor: "pointer" }}
            >
              Logout
            </li>
          </>
        )}
      </ul>
    </header>
  );
}
