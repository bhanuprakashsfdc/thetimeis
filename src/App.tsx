
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WorldClock from "./pages/WorldClock";
import Timezone from "./pages/Timezone";
import Calendar from "./pages/Calendar";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import CityPage from "./components/CityPage";
import { Helmet, HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HelmetProvider>
        <Helmet>
          <title>TimeSync - Precise Time, Anywhere</title>
          <meta name="description" content="Get accurate time synchronized with atomic clocks around the world. The most reliable time service for your needs." />
        </Helmet>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/world-clock.html" element={<WorldClock />} />
            <Route path="/timezone.html" element={<Timezone />} />
            <Route path="/calendar.html" element={<Calendar />} />
            <Route path="/about.html" element={<About />} />
            <Route path="/terms.html" element={<Terms />} />
            <Route path="/privacy.html" element={<Privacy />} />
            <Route path="/city/:citySlug.html" element={<CityPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
