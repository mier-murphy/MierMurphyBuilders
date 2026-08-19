import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import type { RouteRecord } from "vite-react-ssg";

import Layout from "@/components/Layout";

import Index from "./pages/Index";
import About from "./pages/About";
import AboutTeam from "./pages/AboutTeam";
import AboutTestimonials from "./pages/AboutTestimonials";

import BathroomKitchenRemodeling from "./pages/BathroomKitchenRemodeling";
import WaterDamageMoldRemediation from "./pages/WaterDamageMoldRemediation";
import DrywallPlasterStuccoRepair from "./pages/DrywallPlasterStuccoRepair";
import BalconyDeckRepair from "./pages/BalconyDeckRepair";
import CommercialTenantImprovement from "./pages/CommercialTenantImprovement";

import Projects from "./pages/Projects";
import Cabin from "./pages/projects/cabin";
import CondoRetreat from "./pages/projects/condo-retreat";
import CommercialCellStore from "./pages/projects/commercial-cell-store";
import Ranch from "./pages/projects/ranch";

import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

import BookOnline from "./pages/BookOnline";

import Areas from "./pages/Areas";
import Area91360 from "./pages/areas/Area91360";
import Area91362 from "./pages/areas/Area91362";
import Area91361 from "./pages/areas/Area91361";
import Area91320 from "./pages/areas/Area91320";
import Area91301 from "./pages/areas/Area91301";
import Area91377 from "./pages/areas/Area91377";
import Area91302 from "./pages/areas/Area91302";
import Area91311 from "./pages/areas/Area91311";
import Area91367 from "./pages/areas/Area91367";
import Area91364 from "./pages/areas/Area91364";
import Area90265 from "./pages/areas/Area90265";
import Area93021 from "./pages/areas/Area93021";
import Area93062 from "./pages/areas/Area93062";
import Area90001 from "./pages/areas/Area90001";
import Area91319 from "./pages/areas/Area91319";

import NotFound from "./pages/NotFound";

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
            index: true,
            element: <Index />,
          },

          {
            path: "about",
            element: <About />,
          },
          {
            path: "about/team",
            element: <AboutTeam />,
          },
          {
            path: "about/testimonials",
            element: <AboutTestimonials />,
          },

          {
            path: "services/bathroom-kitchen-remodeling",
            element: <BathroomKitchenRemodeling />,
          },
          {
            path: "services/water-damage-mold-remediation",
            element: <WaterDamageMoldRemediation />,
          },
          {
            path: "services/drywall-plaster-stucco-repair",
            element: <DrywallPlasterStuccoRepair />,
          },
          {
            path: "services/balcony-deck-repair",
            element: <BalconyDeckRepair />,
          },
          {
            path: "services/commercial-tenant-improvement",
            element: <CommercialTenantImprovement />,
          },

          {
            path: "projects",
            element: <Projects />,
          },
          {
            path: "projects/cabin",
            element: <Cabin />,
          },
          {
            path: "projects/condo-retreat",
            element: <CondoRetreat />,
          },
          {
            path: "projects/commercial-cell-store",
            element: <CommercialCellStore />,
          },
          {
            path: "projects/ranch",
            element: <Ranch />,
          },

          {
            path: "blog",
            element: <Blog />,
          },
          {
            path: "blog/:slug",
            element: <BlogPost />,

            async loader({ params }) {
              if (!params.slug) {
                throw new Response("Not Found", {
                  status: 404,
                });
              }

              const { getPostBySlug, getRelatedPosts } = await import(
                "@/lib/sanity"
              );

              const post = await getPostBySlug(params.slug);

              if (!post) {
                throw new Response("Not Found", {
                  status: 404,
                });
              }

              const relatedPosts = await getRelatedPosts(post._id, 3);

              return {
                post,
                relatedPosts,
              };
            },

            async getStaticPaths() {
              const { getAllPosts } = await import("@/lib/sanity");

              try {
                const posts = await getAllPosts();
                return posts.map((post) => `/blog/${post.slug}`);
              } catch (err) {
                // Don't let a Sanity outage/misconfig at build time take down
                // the entire site's static generation. Log it so it's visible
                // in the Vercel build output, but let the build continue.
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
            element: <Contact />,
          },
          {
            path: "privacy-policy",
            element: <PrivacyPolicy />,
          },
          {
            path: "terms-and-conditions",
            element: <TermsAndConditions />,
          },


          {
            path: "book-online",
            element: <BookOnline />,
          },



          {
            path: "areas",
            element: <Areas />,
          },
          {
            path: "areas/91360",
            element: <Area91360 />,
          },
          {
            path: "areas/91362",
            element: <Area91362 />,
          },
          {
            path: "areas/91361",
            element: <Area91361 />,
          },
          {
            path: "areas/91320",
            element: <Area91320 />,
          },
          {
            path: "areas/91301",
            element: <Area91301 />,
          },
          {
            path: "areas/91377",
            element: <Area91377 />,
          },
          {
            path: "areas/91302",
            element: <Area91302 />,
          },
          {
            path: "areas/91311",
            element: <Area91311 />,
          },
          {
            path: "areas/91367",
            element: <Area91367 />,
          },
          {
            path: "areas/91364",
            element: <Area91364 />,
          },
          {
            path: "areas/90265",
            element: <Area90265 />,
          },
          {
            path: "areas/93021",
            element: <Area93021 />,
          },
          {
            path: "areas/93062",
            element: <Area93062 />,
          },
          {
            path: "areas/90001",
            element: <Area90001 />,
          },
          {
            path: "areas/91319",
            element: <Area91319 />,
          },

          {
            path: "*",
            element: <NotFound />,
          },
        ],
      },
    ],
  },
];