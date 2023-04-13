import Navbar from "./Navbar";
import Footer from "./Footer";

const layoutStyles = {
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
};

const mainStyles = {
  flex: "1",
};

const footerStyles = {
  flexShrink: 0,
};

export default function Layout({ children }) {
  return (
    <div style={layoutStyles}>
      <Navbar />
      <main style={mainStyles}>{children}</main>
      <Footer style={footerStyles} />
    </div>
  );
}
