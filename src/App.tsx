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
import { BathroomKitchenRemodeling } from "./pages/BathroomKitchenRemodeling";
import { WaterDamageMoldRemediation } from "./pages/WaterDamageMoldRemediation";
import { DrywallPlasterStuccoRepair } from "./pages/DrywallPlasterStuccoRepair";
import { BalconyDeckRepair } from "./pages/balconyDeckRepair";
import { CommercialTenantImprovement } from "./pages/CommercialTenantImprovement";
import ComingSoon from "@/components/ComingSoon";
import Projects from "./pages/Projects";
import Cabin from "./pages/projects/cabin"
import CondoRetreat from "./pages/projects/condo-retreat"
import CommercialCellStore from "./pages/projects/commercial-cell-store"
import Ranch from "./pages/projects/ranch"
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
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
import { ScrollToTop } from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about/team" element={<AboutTeam />} />

            <Route path="/about/ComingSoon" element={<ComingSoon serviceName={""} description={""} icon={undefined} />} />
            <Route path="/about/team" element={<AboutTeam />} />
            <Route path="/about/testimonials" element={<AboutTestimonials />} />
            <Route path="/services/bathroom-kitchen-remodeling" element={<BathroomKitchenRemodeling />} />
            <Route path="/services/water-damage-mold-remediation" element={<WaterDamageMoldRemediation />} />
            <Route path="/services/drywall-plaster-stucco-repair" element={<DrywallPlasterStuccoRepair />} />
            <Route path="/services/balcony-deck-repair" element={<BalconyDeckRepair/>} />
            <Route path="/services/commercial-tenant-improvement" element={<CommercialTenantImprovement/>} />

            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/cabin" element={<Cabin />} />
            <Route path="/projects/condo-retreat" element={<CondoRetreat />} />
            <Route path="/projects/commercial-cell-store" element={<CommercialCellStore />} />
            <Route path="/projects/ranch" element={<Ranch />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
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
            <Route path="/areas/93021" element={<Area93021 />} />
            <Route path="/areas/93062" element={<Area93062 />} />
            <Route path="/areas/90001" element={<Area90001 />} />
            <Route path="/areas/91319" element={<Area91319 />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;