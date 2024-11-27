import { ChakraProvider } from "@chakra-ui/react";
import DashboardLayout from "layouts/dashboard-layout";
import type { AppProps } from "next/app";
import Head from "next/head";
import theme from "../themes/themes";
import { Provider } from "react-redux";
import { store } from "@MME-redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Massive Music - Dashboard</title>
        <meta name="description" content="Massive Music - Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        </Provider>
      </ChakraProvider>
    </>
  );
}
