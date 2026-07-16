import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ClientsBar from "./ClientsBar";
import ScrollToTopButton from "./Scrolltotopbutton";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    // Reset scroll position on every route change — without this, React Router
    // keeps whatever scroll position you were at on the previous page, so
    // navigating away from a scrolled-down page lands you at the bottom of
    // the new one instead of the top.
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // Load the GoHighLevel/LeadConnector chat widget once, site-wide
    const existingScript = document.querySelector(
      'script[data-widget-id="6a4be675af4e62471825701c"]'
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://widgets.leadconnectorhq.com/loader.js";
      script.setAttribute(
        "data-resources-url",
        "https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      );
      script.setAttribute("data-widget-id", "6a4be675af4e62471825701c");
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>{children}</main>
      {!isHome && <ClientsBar />}
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;