import "@styles/globals.css";
import type { AppProps } from "next/app";
import Theme from "../utils/Theme";
import { Fira_Sans, Nunito } from "next/font/google";
import Layout from "@components/Layout";

const fira = Fira_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
const nunito = Nunito({ weight: ["400"], subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Theme>
        <main className={`${fira.className} ${nunito.className}`}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </Theme>
    </>
  );
}
