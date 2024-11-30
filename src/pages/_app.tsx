import { createStore, store } from "@/store/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={createStore()}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
