import React, { useRef, useState } from "react";
import { useRouter } from "next/router";

export default function Login({ addDocument }) {
  const [buttontext, setButtonText] = React.useState("Get Started");
  const loginRef = useRef();
  const router = useRouter();

  const loginHandler = async (e) => {
    // const user =
    setButtonText("Loading...");
    if (loginRef.current.value) {
      let inputValue = loginRef.current.value.replace(/[^a-zA-Z0-9]/g, "");
      await addDocument(inputValue, { name: inputValue, messages: [] });
      setButtonText("Get Started");
      router.push("/inbox");
    } else {
      setButtonText("Error: Input Name");
    }

    setTimeout(() => {
      setButtonText("Get Started");
    }, 1000);
  };

  return (
    <div className="card">
      <ul>
        <li>
          Enter your Name, Create Secret Message link and Share with your
          friends on Whatsapp, Facebook.
        </li>
        <li>Get unknown feedback from your friends, co-workers, and Fans.</li>
        <li>
          Once your friends send you a message, you will see the results on a
          Message board.
        </li>
      </ul>
      <div className="input-wrapper">
        <input
          ref={loginRef}
          type="text"
          className="login-input"
          placeholder="Enter your name"
        />
        <button onClick={loginHandler}>{buttontext}</button>
      </div>
    </div>
  );
}
