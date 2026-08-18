import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTopButton from "./Scrolltotopbutton";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    console.log(
      "[SCROLL DEBUG] location effect fired for",
      location.pathname,
      "| scrollY before reset:",
      window.scrollY,
      "| body.overflow:",
      document.body.style.overflow
    );

    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";

    const scrollTop = (label: string) => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      console.log(
        `[SCROLL DEBUG] ${label} | scrollY after:`,
        window.scrollY
      );
    };

    scrollTop("immediate reset");

    requestAnimationFrame(() => {
      scrollTop("rAF #1 reset");

      requestAnimationFrame(() => {
        scrollTop("rAF #2 reset");

        setTimeout(() => {
          console.log(
            "[SCROLL DEBUG] +300ms check | scrollY:",
            window.scrollY,
            "| body.overflow:",
            document.body.style.overflow
          );
        }, 300);
      });
    });
  }, [location.pathname]);

  useEffect(() => {
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

      script.setAttribute(
        "data-widget-id",
        "6a4be675af4e62471825701c"
      );

      script.async = true;

      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />

      <ScrollToTopButton />
    </div>
  );
};

export default Layout;