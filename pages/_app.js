import "@/styles/globals.css";
import { Layout, LogOut } from "@/ui";
import StateProvider from "@/state";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const description = `NoNameDM is an anonymous secret messaging app. Create your Profile Link and Send it to all your contacts to check what do your friends think about you. With the help of NoNameDM, you can send and receive anonymous compliments easily for free!
  `;
  const title = `NoNameDM - Receive Anonymous Secret Messages Online`;
  const url = `https://nonamedm.com`;
  return (
    <StateProvider>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="UTF-8" />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="/og-img.png" />

      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <LogOut />
    </StateProvider>
  );
}
