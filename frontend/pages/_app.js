import "@/styles/globals.css";
import "@fontsource/quicksand";
import "bootstrap/dist/css/bootstrap.min.css";
import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ProgressBar
        height="4px"
        color="#B378FF"
        startPosition={0.3}
        stopDelayMs={200}
        options={{ showSpinner: true }}
        shallowRouting
      />
    </>
  );
}