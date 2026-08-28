import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import type { RouteRecord } from "vite-react-ssg";

import Layout from "@/components/Layout";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            // Kept eager: it's the most-visited page, and this avoids an
            // extra chunk fetch/fallback flash on first load.
            index: true,
            element: <Index />,
          },

          {
            path: "about",
            lazy: () =>
              import("./pages/About").then((m) => ({ Component: m.default })),
          },
          {
            path: "about/team",
            lazy: () =>
              import("./pages/AboutTeam").then((m) => ({
                Component: m.default,
              })),
          },
          {
            path: "about/testimonials",
            lazy: () =>
              import("./pages/AboutTestimonials").then((m) => ({
                Component: m.default,
              })),
          },

          {
            path: "services/bathroom-kitchen-remodeling",
            lazy: () =>
              import("./pages/BathroomKitchenRemodeling").then((m) => ({
                Component: m.default,
              })),
          },
          {
            path: "services/water-damage-mold-remediation",
            lazy: () =>
              import("./pages/WaterDamageMoldRemediation").then((m) => ({
                Component: m.default,
              })),
          },
          {
            path: "services/drywall-plaster-stucco-repair",
            lazy: () =>
              import("./pages/DrywallPlasterStuccoRepair").then((m) => ({
                Component: m.default,
              })),
          },
          {
            path: "services/balcony-deck-repair",
            lazy: () =>
              import("./pages/BalconyDeckRepair").then((m) => ({
                Component: m.default,
              })),
          },
          {
            path: "services/commercial-tenant-improvement",
            lazy: () =>
              import("./pages/CommercialTenantImprovement").then((m) => ({
                Component: m.default,
              })),
          },

          {
            path: "projects",
            lazy: () =>
              import("./pages/Projects").then((m) => ({
                Component: m.default,
              })),
          },
          {
            path: "projects/cabin",
            lazy: () =>
              import("./pages/projects/cabin").then((m) => ({
                Component: m.default,
              })),
          },
          {
            path: "projects/condo-retreat",
            lazy: () =>
              import("./pages/projects/condo-retreat").then((m) => ({
                Component: m.default,
              })),
          },
          {
            path: "projects/commercial-cell-store",
            lazy: () =>
              import("./pages/projects/commercial-cell-store").then((m) => ({
                Component: m.default,
              })),
          },
          {
            path: "projects/ranch",
            lazy: () =>
              import("./pages/projects/ranch").then((m) => ({
                Component: m.default,
              })),
          },

          {
            path: "blog",
            lazy: () =>
              import("./pages/Blog").then((m) => ({ Component: m.default })),
          },
          {
            path: "blog/:slug",
            lazy: async () => {
              const { default: Component } = await import(
                "./pages/BlogPost"
              );

              return {
                Component,

                async loader({ params }: { params: { slug?: string } }) {
                  if (!params.slug) {
                    throw new Response("Not Found", { status: 404 });
                  }

                  const { getPostBySlug, getRelatedPosts } = await import(
                    "@/lib/sanity"
                  );

                  const post = await getPostBySlug(params.slug);

                  if (!post) {
                    throw new Response("Not Found", { status: 404 });
                  }

                  const relatedPosts = await getRelatedPosts(post._id, 3);

                  return { post, relatedPosts };
                },
              };
            },

            // getStaticPaths must stay a sibling of `lazy`, not inside it —
            // vite-react-ssg needs this at build time to know which slugs
            // to prerender, before any route-level code runs.
            async getStaticPaths() {
              const { getAllPosts } = await import("@/lib/sanity");

              try {
                const posts = await getAllPosts();
                return posts.map((post) => `/blog/${post.slug}`);
              } catch (err) {
                console.error(
                  "[getStaticPaths] Failed to fetch blog posts from Sanity — skipping blog post pages for this build:",
                  err
                );
                return [];
              }
            },
          },

          {
            path: "contact",
            lazy: () =>
              import("./pages/Contact").then((m) => ({
                Component: m.default,
              })),
          },
          {
            path: "privacy-policy",
            lazy: () =>
              import("./pages/PrivacyPolicy").then((m) => ({
                Component: m.default,
              })),
          },
          {
            path: "terms-and-conditions",
            lazy: () =>
              import("./pages/TermsAndConditions").then((m) => ({
                Component: m.default,
              })),
          },

          {
            path: "book-online",
            lazy: () =>
              import("./pages/BookOnline").then((m) => ({
                Component: m.default,
              })),
          },

          {
            path: "areas",
            lazy: () =>
              import("./pages/Areas").then((m) => ({ Component: m.default })),
          },
          {
            path: "areas/91360",
            lazy: () =>
              import("./pages/areas/Area91360").then((m) => ({
                Component: m.default,
              })),
          },
          {
            path: "areas/91362",
            lazy: () =>
              import("./pages/areas/Area91362").then((m) => ({
                Component: m.default,
              })),
          },
          {
            path: "areas/91361",
            lazy: () =>
              import("./pages/areas/Area91361").then((m) => ({
                Component: m.default,
              })),
          },
          {
            path: "areas/91320",
            lazy: () =>
              import("./pages/areas/Area91320").then((m) => ({
                Component: m.default,
              })),
          },
          {
            path: "areas/91301",
            lazy: () =>
              import("./pages/areas/Area91301").then((m) => ({
                Component: m.default,
              })),
          },
          {
            path: "areas/91377",
            lazy: () =>
              import("./pages/areas/Area91377").then((m) => ({
                Component: m.default,
              })),
          },
          {
            path: "areas/91302",
            lazy: () =>
              import("./pages/areas/Area91302").then((m) => ({
                Component: m.default,
              })),
          },
          {
            path: "areas/91311",
            lazy: () =>
              import("./pages/areas/Area91311").then((m) => ({
                Component: m.default,
              })),
          },
          {
            path: "areas/91367",
            lazy: () =>
              import("./pages/areas/Area91367").then((m) => ({
                Component: m.default,
              })),
          },
          {
            path: "areas/91364",
            lazy: () =>
              import("./pages/areas/Area91364").then((m) => ({
                Component: m.default,
              })),
          },
          {
            path: "areas/90265",
            lazy: () =>
              import("./pages/areas/Area90265").then((m) => ({
                Component: m.default,
              })),
          },
          {
            path: "areas/93021",
            lazy: () =>
              import("./pages/areas/Area93021").then((m) => ({
                Component: m.default,
              })),
          },
          {
            path: "areas/93062",
            lazy: () =>
              import("./pages/areas/Area93062").then((m) => ({
                Component: m.default,
              })),
          },
          {
            path: "areas/90001",
            lazy: () =>
              import("./pages/areas/Area90001").then((m) => ({
                Component: m.default,
              })),
          },
          {
            path: "areas/91319",
            lazy: () =>
              import("./pages/areas/Area91319").then((m) => ({
                Component: m.default,
              })),
          },

          {
            path: "*",
            lazy: () =>
              import("./pages/NotFound").then((m) => ({
                Component: m.default,
              })),
          },
        ],
      },
    ],
  },
];