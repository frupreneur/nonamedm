import React from "react";
import Head from "next/head";
import { Header, Footer, Meta } from "@/ui";
import { useGlobalState } from "@/state";
import { getUser } from "@/db";

import { Roboto } from "@next/font/google";

const andika = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "optional",
});

import { getUsers } from "@/db";

export default function Layout({ children }) {
  const { state, setState } = useGlobalState();

  React.useEffect(() => {
    console.log("Layout Effect");
    if (!state.user.name && localStorage.getItem("loggedUser")) {
      inboxEffect(setState);
    }
  }, [state, setState]);
  return (
    <>
      <main className={andika.className}>
        <Header />
        <section className="main">{children}</section>
        <Footer />
      </main>
    </>
  );
}

async function inboxEffect(setState) {
  await getUser(
    JSON.parse(localStorage.getItem("loggedUser")).userId,
    setState
  );
  setState((prev) => ({ ...prev, inbox: { loading: false } }));
}
