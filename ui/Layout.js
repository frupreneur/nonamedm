import React from "react";
import Head from "next/head";
import { Header, Footer, Meta } from "@/ui";
import { useGlobalState } from "@/state";
import { getUser } from "@/db";

import { Andika } from "@next/font/google";

const andika = Andika({
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
      <Head>
        <title>NoNameDM - Receive Anonymous Secret Messages</title>
        <link rel="shortcut icon" href="/assets/favicon.ico" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="UTF-8" />
      </Head>
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
