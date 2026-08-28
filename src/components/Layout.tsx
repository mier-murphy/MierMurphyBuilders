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

  // Reset scroll to top on every route change. Uses two animation-frame
  // passes since some layout/content (images, fonts, widgets) can still
  // be settling after the immediate reset, which would otherwise leave
  // the page scrolled slightly on the next paint.
  useEffect(() => {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";

    const scrollTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    scrollTop();

    requestAnimationFrame(() => {
      scrollTop();
      requestAnimationFrame(scrollTop);
    });
  }, [location.pathname]);

  // Defer the GoHighLevel chat widget until the browser is idle AND/OR
  // the user shows intent to engage with the page (scroll/mouse/touch).
  // This keeps it out of the critical path so it doesn't compete with
  // hero content for bandwidth/main-thread time during initial load.
  useEffect(() => {
    let loaded = false;

    const loadChatWidget = () => {
      if (loaded) return;
      loaded = true;

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

      cleanupListeners();
    };

    const interactionEvents: (keyof WindowEventMap)[] = [
      "scroll",
      "mousemove",
      "touchstart",
      "keydown",
    ];

    const cleanupListeners = () => {
      interactionEvents.forEach((event) =>
        window.removeEventListener(event, loadChatWidget)
      );
    };

    interactionEvents.forEach((event) =>
      window.addEventListener(event, loadChatWidget, {
        once: true,
        passive: true,
      })
    );

    // Safety net: load anyway after idle time / timeout, in case the
    // user never scrolls or interacts (e.g. reads a long hero section).
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(loadChatWidget, { timeout: 5000 });
    } else {
      timeoutId = setTimeout(loadChatWidget, 4000);
    }

    return () => {
      cleanupListeners();
      if (idleId !== undefined && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
    };
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