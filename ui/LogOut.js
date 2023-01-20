import React from "react";
import { useGlobalState } from "@/state";
import { useRouter } from "next/router";

export default function LogOut() {
  const { state, setState } = useGlobalState();
  const router = useRouter();
  return (
    <div className={state.logOut ? "logout-prompt active" : "logout-prompt"}>
      <div className="card">
        {" "}
        <h2>ATTENTION!</h2>
        <p>
          Logging out will delete your account entirely and all messages will be
          lost, do you want to continue?
        </p>
        <button
          className="share-button  copy"
          style={{ backgroundColor: "#a10c4a", color: "white" }}
          onClick={() => {
            localStorage.removeItem("loggedUser");
            setState((prev) => ({
              ...prev,
              logOut: false,
              user: { messages: [] },
            }));
            document.documentElement.style = "overflow: null !important";
            router.push("/");
          }}
        >
          <span>YES! Delete Account</span>
        </button>
        <button
          className="share-button  copy"
          onClick={() => {
            setState((prev) => ({ ...prev, logOut: false }));
            document.documentElement.style = "overflow: null !important";
          }}
        >
          <span>Go Back</span>
        </button>
      </div>
    </div>
  );
}
