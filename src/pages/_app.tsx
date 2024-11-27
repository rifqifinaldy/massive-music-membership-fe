import { ChakraProvider } from "@chakra-ui/react";
import DashboardLayout from "layouts/dashboard-layout";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Massive Music - Dashboard</title>
        <meta name="description" content="Massive Music - Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </ChakraProvider>
    </>
  );
}
