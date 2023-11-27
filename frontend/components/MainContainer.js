import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Main({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}
