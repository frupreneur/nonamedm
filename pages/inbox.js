import React, { useState } from "react";
import { Messages } from "@/ui";
import { getUser } from "@/db";
import { useGlobalState } from "@/state";
import { useRouter } from "next/router";
import Link from "next/link";
import { TiMessages } from "react-icons/ti";

export default function Inbox() {
  const { state, setState } = useGlobalState();
  const router = useRouter();

  React.useEffect(() => {
    if (!localStorage.getItem("loggedUser")) {
      router.push("/");
    } else if (!state.user.name) {
      inboxEffect(setState);
    }
  }, [setState, state, router]);

  return (
    <div className="container">
      <h1>Messages</h1>
      {!state.user.name ? (
        !state.fetchErr ? (
          <p>Loading Messages...</p>
        ) : (
          <>
            <p>Error: Please Check Your Internet</p>
            <div
              className="refresh"
              onClick={() => {
                router.reload(window.location.pathname);
              }}
            >
              <span>Try Again</span>
            </div>
          </>
        )
      ) : (
        <>
          <div
            className="refresh"
            onClick={() => {
              router.reload(window.location.pathname);
            }}
          >
            <span>Refresh</span> <TiMessages className="refresh-icon" />
          </div>
          <p>{`${
            state.user.name.charAt(0).toUpperCase() + state.user.name.slice(1)
          }'s secret messages`}</p>
        </>
      )}

      {!state.inbox.loading && !state.fetchErr && (
        <>
          <Messages messages={[...state.user.messages].reverse()} />
          <Link href="/share">
            <button
              style={{
                backgroundColor: "#42CDE1",
                color: "#250933",
                padding: "0.5rem 1.5rem",
                margin: "1rem",
                letterSpacing: "2px",
              }}
            >
              Share My Link
            </button>{" "}
          </Link>
          <div
            className="refresh"
            onClick={() => {
              router.reload(window.location.pathname);
            }}
          >
            <span>Refresh</span> <TiMessages className="refresh-icon" />
          </div>
        </>
      )}
    </div>
  );
}

async function inboxEffect(setState) {
  await getUser(
    JSON.parse(localStorage.getItem("loggedUser")).userId,
    setState
  );
  setState((prev) => ({ ...prev, inbox: { loading: false } }));
}
