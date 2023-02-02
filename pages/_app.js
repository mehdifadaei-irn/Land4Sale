import "../styles/globals.css";
import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "@web3uikit/core";
import MainContextProvider from "../store/context";
// 2. Extend the theme to include custom colors, fonts, etc

function MyApp({ Component, pageProps }) {
  return (
    <MainContextProvider>
      <MoralisProvider initializeOnMount={false}>
        <NotificationProvider>
          <Component {...pageProps} />
        </NotificationProvider>
      </MoralisProvider>
    </MainContextProvider>
  );
}

export default MyApp;
