import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ClientsBar from "./ClientsBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

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
    </div>
  );
};

export default Layout;