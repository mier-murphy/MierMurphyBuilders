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
    // Mobile browsers (Chrome/Safari on iOS in particular) do their own
    // native scroll-position bookkeeping on navigation, which fights with
    // an SPA's client-side routing. Turning this off puts us fully in
    // control of scroll position instead of the browser silently
    // re-applying its own idea of "where you were".
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    // Reset scroll position on every route change — without this, React Router
    // keeps whatever scroll position you were at on the previous page, so
    // navigating away from a scrolled-down page lands you at the bottom of
    // the new one instead of the top.
    console.log("[SCROLL DEBUG] location effect fired for", location.pathname, "| scrollY before reset:", window.scrollY, "| body.overflow:", document.body.style.overflow);

    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";

    const scrollTop = (label: string) => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      console.log(`[SCROLL DEBUG] ${label} | scrollY after:`, window.scrollY);
    };

    scrollTop("immediate reset");
    requestAnimationFrame(() => {
      scrollTop("rAF #1 reset");
      requestAnimationFrame(() => {
        scrollTop("rAF #2 reset");
        setTimeout(() => {
          console.log("[SCROLL DEBUG] +300ms check | scrollY:", window.scrollY, "| body.overflow:", document.body.style.overflow);
        }, 300);
      });
    });
  }, [location.pathname]);

  useEffect(() => {
    // Load the GoHighLevel/LeadConnector chat widget once, site-wide
    const existingScript = document.querySelector(
      'script[data-widget-id="6a6ba87126a343b92bb447e5"]'
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://widgets.leadconnectorhq.com/loader.js";
      script.setAttribute(
        "data-resources-url",
        "https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      );
      script.setAttribute("data-widget-id", "6a6ba87126a343b92bb447e5");
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