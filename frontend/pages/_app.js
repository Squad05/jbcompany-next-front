import "@/styles/globals.css";
import MainContainer from "../components/MainContainer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  );
}
