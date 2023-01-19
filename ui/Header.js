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
            Free Anonymous Messaging
          </p>
        </Link>
      </div>
      <ul className="menu">
        {!state.user.name && (
          <li>
            <Link href="/">Get Started</Link>
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
                localStorage.removeItem("loggedUser");
                setState((prev) => ({ ...prev, user: {} }));
                router.push("/");
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
