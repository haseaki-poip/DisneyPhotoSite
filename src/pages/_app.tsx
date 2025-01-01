import { createStore, RootState } from "@/store/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

export default function App({ Component, pageProps }: AppProps) {
  const preloadedState = {
    photoDetail: {
      result: pageProps.photoDetail ?? null,
      isError: false,
    },
    areas: {
      result: pageProps.areaData ?? null,
      isError: false,
    },
  } as RootState;
  const store = createStore(preloadedState);
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
