import React from "react";
import { Login } from "@/ui";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();

  React.useEffect(() => {
    if (localStorage.getItem("loggedUser")) {
      router.push("/inbox");
    }
  }, [router]);

  return (
    <div className="container">
      <h1>Receive Secret Anonymous Messages Online</h1>

      <Login />

    </div>
  );
}
