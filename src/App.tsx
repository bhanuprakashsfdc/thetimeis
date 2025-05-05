
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipProvider } from '@/components/ui/tooltip';
import Index from "./pages/Index";
import WorldClock from "./pages/WorldClock";
import Timezone from "./pages/Timezone";
import Calendar from "./pages/Calendar";
import CountdownTimer from "./pages/CountdownTimer";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";
import CityPage from "./components/CityPage";
import CountryPage from "./components/CountryPage";
import TimezonePage from "./components/TimezonePage";
import WorldTimeMapPage from "./pages/WorldTimeMapPage";
import Pomodoro from "./pages/Pomodoro";
import SpinWheel from "./pages/SpinWheel";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Cookies from "./pages/Cookies";
import Accessibility from "./pages/Accessibility";
import FAQ from "./pages/FAQ";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { APP_NAME, TIMEIN, WHATISTHETIMERIGHTNOWIN, TIMENOW, LOCALTIME, WHATTIMEITISIN } from "@/constants/constants";

// Create a new QueryClient instance
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <Helmet>
        <title>{APP_NAME} - Precise Time, Anywhere</title>
        <meta name="description" content="Get accurate time synchronized with atomic clocks around the world. The most reliable time service for your needs." />
      </Helmet>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about.html" element={<About />} />
            <Route path="/terms.html" element={<Terms />} />
            <Route path="/privacy.html" element={<Privacy />} />
            <Route path="/disclaimer.html" element={<Disclaimer />} />
            <Route path="/blog.html" element={<Blog />} />
            <Route path="/contact.html" element={<Contact />} />
            <Route path="/cookies.html" element={<Cookies />} />
            <Route path="/accessibility.html" element={<Accessibility />} />
            <Route path="/faq.html" element={<FAQ />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/world-clock.html" element={<WorldClock />} />
            <Route path="/timezone.html" element={<Timezone />} />
            <Route path="/calendar.html" element={<Calendar />} />
            <Route path="/countdown-timer.html" element={<CountdownTimer />} />
            <Route path="/pomodoro.html" element={<Pomodoro />} />
            <Route path="/spin-wheel.html" element={<SpinWheel />} />
            <Route path="/:timezoneSlug" element={<TimezonePage />} />
            <Route path={`/${TIMEIN}:citySlug`} element={<CityPage />} />
            <Route path="/country/:countrySlug" element={<CountryPage />} />
            <Route path="/world-time-map.html" element={<WorldTimeMapPage />} />            
            <Route path={`/${TIMENOW}:citySlug`} element={<CityPage />} />
            <Route path={`/${LOCALTIME}:citySlug`} element={<CityPage />} />
            <Route path={`/${WHATISTHETIMERIGHTNOWIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${WHATTIMEITISIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${TIMEIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${TIMENOW}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${LOCALTIME}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${WHATISTHETIMERIGHTNOWIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${WHATTIMEITISIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
