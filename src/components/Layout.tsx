import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTopButton from "./Scrolltotopbutton";

const CHAT_WIDGET_ID = "6a4be675af4e62471825701c";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // On every route change, scroll to the section named in the URL hash
  // (for example /contact#iirc), or to the top of the page when there is
  // none. Two animation-frame passes cover content that is still settling
  // (images, fonts, widgets) after the first paint.
  useEffect(() => {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";

    const hashId = location.hash ? decodeURIComponent(location.hash.slice(1)) : "";

    const scrollToTarget = () => {
      const target = hashId ? document.getElementById(hashId) : null;

      if (target) {
        target.scrollIntoView({ block: "start" });
        return;
      }

      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    scrollToTarget();

    const frame = requestAnimationFrame(() => {
      scrollToTarget();
      requestAnimationFrame(scrollToTarget);
    });

    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  // Sends a GA4 event whenever a visitor taps any phone link on the site.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.('a[href^="tel:"]');
      if (!link) return;

      const { gtag } = window as Window & { gtag?: (...args: unknown[]) => void };
      gtag?.("event", "phone_click", {
        link_url: link.getAttribute("href"),
        page_path: window.location.pathname,
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Defer the GoHighLevel chat widget until the visitor interacts with the
  // page (scroll, mouse, touch, key) or a few seconds have passed. This keeps
  // it out of the critical path so it doesn't compete with the hero content.
  useEffect(() => {
    let loaded = false;
    let idleId: number | undefined;

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

    function loadChatWidget() {
      if (loaded) return;
      loaded = true;
      cleanupListeners();

      const existingScript = document.querySelector(
        `script[data-widget-id="${CHAT_WIDGET_ID}"]`
      );

      if (existingScript) return;

      const script = document.createElement("script");
      script.src = "https://widgets.leadconnectorhq.com/loader.js";
      script.setAttribute(
        "data-resources-url",
        "https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      );
      script.setAttribute("data-widget-id", CHAT_WIDGET_ID);
      script.async = true;
      document.body.appendChild(script);
    }

    interactionEvents.forEach((event) =>
      window.addEventListener(event, loadChatWidget, {
        once: true,
        passive: true,
      })
    );

    // Safety net: wait 4 seconds, then load during the next idle moment,
    // in case the visitor never interacts. (Calling requestIdleCallback
    // straight away would load the widget almost immediately after page load.)
    const timeoutId = setTimeout(() => {
      if ("requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(loadChatWidget, { timeout: 2000 });
      } else {
        loadChatWidget();
      }
    }, 4000);

    return () => {
      cleanupListeners();
      clearTimeout(timeoutId);
      if (idleId !== undefined && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-lg focus:font-sans focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>

      <Footer />

      <ScrollToTopButton />
    </div>
  );
};

export default Layout;