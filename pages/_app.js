import "@/styles/globals.css";
import { Layout } from "@/ui";
import StateProvider from "@/state";

export default function App({ Component, pageProps }) {
  return (
    <StateProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateProvider>
  );
}
