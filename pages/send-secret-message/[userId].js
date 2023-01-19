import React, { useState } from "react";
import { useRouter } from "next/router";
import { SecretMessageForm } from "@/ui";
import Link from "next/link";

export default function SendMessage() {
  const [user, setUser] = useState({ name: "", id: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [sameUser, setSameUser] = useState(false);
  const router = useRouter();

  React.useEffect(() => {
    if (router.isReady && !user.name && !sameUser) {
      const [linkOwner, linkOwnerId] = router.query.userId.split("-");
      console.log();
      if (
        JSON.parse(localStorage.getItem("loggedUser"))?.uid.toLowerCase() ===
        linkOwnerId
      ) {
        console.log("setting user to true");
        setSameUser(true);
      } else {
        setUser({ name: linkOwner, id: linkOwnerId });
      }
    } else if (router.isReady && sameUser) {
      setTimeout(() => {
        router.push("/inbox");
      }, 3000);
    }

    if (sent) {
      //   setLoading(false);
      //   setSent(false);
    }
  }, [sent, router, user, sameUser]);

  if (sameUser) {
    return (
      <div className="container">
        <h2>Sorry, you can`t send anonymous messages to yourself!</h2>
        <p>redirecting to inbox...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>
        {user.name
          ? `Send Secret Message To ${
              user.name.charAt(0).toUpperCase() + user.name.slice(1)
            }`
          : "loading..."}
      </h2>
      {!sent && (
        <SecretMessageForm
          setSent={setSent}
          loading={loading}
          setLoading={setLoading}
        />
      )}
      {sent && (
        <div className="card">
          <h2>Secret Message Sent!</h2>
          <p>Thank you for participating.</p>
          <p>Click below link to generate your secret message link.</p>
          <Link href="/inbox">
            <button className="share-button copy">Create Your Own Link</button>
          </Link>
        </div>
      )}
    </div>
  );
}
