import React from "react";
import Head from "next/head";

export default function Meta({
  description = `NoNameDM is an anonymous secret messaging app. Create your Profile Link and Send it to all your contacts to check what do your friends think about you. With the help of NoNameDM, you can send and receive anonymous compliments easily for free!
  `,
  title = `NoNameDM - Receive Anonymous Secret Messages Online`,
  url = `https://nonamedm.com`,

  index = "index, follow",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content="https:/nonamedm.com" />
      <meta property="og:site_name" content="No Name DM" />
      <meta name="robots" content={index} />
    </Head>
  );
}
