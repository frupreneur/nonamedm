import React from "react";
import { Login } from "@/ui";
import { addDocument } from "@/db";
import { useRouter } from "next/router";
import { useGlobalState } from "@/state";

export default function Home() {
  const router = useRouter();
  // const { state } = useGlobalState();

  React.useEffect(() => {
    if (localStorage.getItem("loggedUser")) {
      router.push("/inbox");
    }
  }, [router]);

  return (
    <div className="container">
      <h1>Receive Secret Anonymous Messages Online</h1>

      <Login addDocument={addDocument} />
    </div>
  );
}
