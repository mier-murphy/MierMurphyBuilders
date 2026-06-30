import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import AboutLegacy from "./pages/AboutLegacy";
import AboutTeam from "./pages/AboutTeam";
import AboutTestimonials from "./pages/AboutTestimonials";
import ServiceInterior from "./pages/ServiceInterior";
import ServiceExterior from "./pages/ServiceExterior";
import ServiceWaterDamage from "./pages/ServiceWaterDamage";
import ServiceMoldRemediation from "./pages/ServiceMoldRemediation";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about/legacy" element={<AboutLegacy />} />
            <Route path="/about/team" element={<AboutTeam />} />
            <Route path="/about/testimonials" element={<AboutTestimonials />} />
            <Route path="/services/interior" element={<ServiceInterior />} />
            <Route path="/services/exterior" element={<ServiceExterior />} />
            <Route path="/services/water-damage" element={<ServiceWaterDamage />} />
            <Route path="/services/mold-remediation" element={<ServiceMoldRemediation />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/areas/91360" element={<Area91360 />} />
            <Route path="/areas/91362" element={<Area91362 />} />
            <Route path="/areas/91361" element={<Area91361 />} />
            <Route path="/areas/91320" element={<Area91320 />} />
            <Route path="/areas/91301" element={<Area91301 />} />
            <Route path="/areas/91377" element={<Area91377 />} />
            <Route path="/areas/91302" element={<Area91302 />} />
            <Route path="/areas/91311" element={<Area91311 />} />
            <Route path="/areas/91367" element={<Area91367 />} />
            <Route path="/areas/91364" element={<Area91364 />} />
            <Route path="/areas/90265" element={<Area90265 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
