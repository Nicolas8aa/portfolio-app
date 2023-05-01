import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Nicolas Cuellar</title>
        <meta name="description" content="Nicolas cuellar porfolio web" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{/* <h1>Nicolas Cuellar</h1> */}</main>
    </>
  );
}
