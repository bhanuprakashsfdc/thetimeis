
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
import { APP_NAME, TIMEIN, WHATISTHETIMERIGHTNOWIN, TIMENOW, LOCALTIME, WHATTIMEITISIN, CURRENTTIME, CURRENTTIMEIN, LOCALTIMEIN, TIMEINIS, CURRENTTIMEINIS, LOCALTIMEINIS, TIMENOWINIS, EXACTTIMEIN, REALTIMEIN, RIGHTNOWINIS, WHATSTHETIMENOWINIS, WHATTIMEISIT, WHATTIMEISITNOW, WHATTIMEISITRIGHTNOW, WHATTIMEISITIN, WHATTIMEISITCURRENTLY, WHATTIMEISITRIGHTNOWING, WHATISTHECURRENTTIMEIN, WHATISTHELOCALTIME, WHATISTHELOCALTIMEIN, WHATISTHECURRENTTIME, WHATISTIMENOW, WHATISTHENOWTIME, WHATISTIMERIGHTNOW, WHATISTHETIMEIN, WHATISTHETIMECURRENTLY, WHATISTHETIMETODAY, CLOCKIN, CLOCKNOW, CLOCKTIMEIN, CURRENTCLOCKIN, LOCALCLOCKIN, CLOCKTIMEZONE, WORLDCLOCKIN, WORLDCLOCKFOR, WORLDCLOCK, NOWTIMEIN, NOWLOCALTIMEIN, TIMERIGHTNOWIN, TIMERIGHTNOW, TIMEATTHISMOMENT, TIMEATTHISMOMENTIN, CURRENTMOMENTTIME, TIMETODAYIN, TIMETODAY, TIMENOWAT, TIMEZONEIN, TIMEZONEFOR, TIMEZONEOF, TIMEZONECLOCK, TIMEZONECHECK, CHECKTIMEZONEIN, CURRENTTIMEZONE, LOCALTIMEZONE, LOCALTIMEZONEIN, TIMEBYTIMEZONE, TIMEFORTIMEZONE, TIMEFORCITY, TIMEFORCOUNTRY, TIMEINCOUNTRY, TIMEINCITY, LOCALTIMEFOR, CURRENTTIMEFOR, CURRENTTIMEAT, LOCALTIMEAT, TIMENOWFOR, CHECKTIMEIN, CHECKTIMENOW, FINDTIMEIN, FINDTIMENOW, GETTIMEIN, GETTIMENOW, GETLOCALTIME, GETLOCALTIMEIN, GETCURRENTTIME, GETCURRENTTIMEIN, VIEWTIMEIN, SHOWTIMEIN, SHOWTIMENOW, HOWLATEISIT, HOWLATEISITIN, HOWEARLYIN, ISITLATETHERE, ISITMORNINGIN, ISITNIGHTIN, ISITDAYIN, WHATHOURISIT, WHATHOURISITIN, EXACTTIMEZONE, PRECISETIMEIN, PRECISECURRENTTIME, ACTUALTIMEIN, ACTUALTIMEZONE, LIVETIME, LIVETIMEIN, LIVETIMEFOR } from "@/constants/constants";

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
            <Route path={`/${CURRENTTIME}:citySlug`} element={<CityPage />} />
            <Route path={`/${CURRENTTIME}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${CURRENTTIMEIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${CURRENTTIMEIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${LOCALTIMEIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${LOCALTIMEIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${WHATISTHETIMERIGHTNOWIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${WHATTIMEITISIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${TIMEIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${TIMENOW}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${LOCALTIME}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${WHATISTHETIMERIGHTNOWIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${WHATTIMEITISIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${TIMEINIS}:citySlug`} element={<CityPage />} />
            <Route path={`/${TIMEINIS}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${CURRENTTIMEINIS}:citySlug`} element={<CityPage />} />
            <Route path={`/${CURRENTTIMEINIS}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${LOCALTIMEINIS}:citySlug`} element={<CityPage />} />
            <Route path={`/${LOCALTIMEINIS}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${TIMENOWINIS}:citySlug`} element={<CityPage />} />
            <Route path={`/${TIMENOWINIS}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${EXACTTIMEIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${EXACTTIMEIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${REALTIMEIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${REALTIMEIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${RIGHTNOWINIS}:citySlug`} element={<CityPage />} />
            <Route path={`/${RIGHTNOWINIS}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${WHATSTHETIMENOWINIS}:citySlug`} element={<CityPage />} />
            <Route path={`/${WHATSTHETIMENOWINIS}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${WHATTIMEISIT}:citySlug`} element={<CityPage />} />
            <Route path={`/${WHATTIMEISIT}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${WHATTIMEISITNOW}:citySlug`} element={<CityPage />} />
            <Route path={`/${WHATTIMEISITNOW}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${WHATTIMEISITRIGHTNOW}:citySlug`} element={<CityPage />} />
            <Route path={`/${WHATTIMEISITRIGHTNOW}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${WHATTIMEISITIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${WHATTIMEISITIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${WHATTIMEISITCURRENTLY}:citySlug`} element={<CityPage />} />
            <Route path={`/${WHATTIMEISITCURRENTLY}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${WHATTIMEISITRIGHTNOWING}:citySlug`} element={<CityPage />} />
            <Route path={`/${WHATTIMEISITRIGHTNOWING}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${WHATISTHECURRENTTIMEIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${WHATISTHECURRENTTIMEIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${WHATISTHELOCALTIME}:citySlug`} element={<CityPage />} />
            <Route path={`/${WHATISTHELOCALTIME}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${WHATISTHELOCALTIMEIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${WHATISTHELOCALTIMEIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${WHATISTHECURRENTTIME}:citySlug`} element={<CityPage />} />
            <Route path={`/${WHATISTHECURRENTTIME}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${WHATISTIMENOW}:citySlug`} element={<CityPage />} />
            <Route path={`/${WHATISTIMENOW}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${WHATISTHENOWTIME}:citySlug`} element={<CityPage />} />
            <Route path={`/${WHATISTHENOWTIME}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${WHATISTIMERIGHTNOW}:citySlug`} element={<CityPage />} />
            <Route path={`/${WHATISTIMERIGHTNOW}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${WHATISTHETIMEIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${WHATISTHETIMEIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${WHATISTHETIMECURRENTLY}:citySlug`} element={<CityPage />} />
            <Route path={`/${WHATISTHETIMECURRENTLY}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${WHATISTHETIMETODAY}:citySlug`} element={<CityPage />} />
            <Route path={`/${WHATISTHETIMETODAY}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${CLOCKIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${CLOCKIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${CLOCKNOW}:citySlug`} element={<CityPage />} />
            <Route path={`/${CLOCKNOW}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${CLOCKTIMEIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${CLOCKTIMEIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${CURRENTCLOCKIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${CURRENTCLOCKIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${LOCALCLOCKIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${LOCALCLOCKIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${CLOCKTIMEZONE}:citySlug`} element={<CityPage />} />
            <Route path={`/${CLOCKTIMEZONE}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${WORLDCLOCKIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${WORLDCLOCKIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${WORLDCLOCKFOR}:citySlug`} element={<CityPage />} />
            <Route path={`/${WORLDCLOCKFOR}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${WORLDCLOCK}:citySlug`} element={<CityPage />} />
            <Route path={`/${WORLDCLOCK}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${NOWTIMEIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${NOWTIMEIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${NOWLOCALTIMEIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${NOWLOCALTIMEIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${TIMERIGHTNOWIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${TIMERIGHTNOWIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${TIMERIGHTNOW}:citySlug`} element={<CityPage />} />
            <Route path={`/${TIMERIGHTNOW}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${TIMEATTHISMOMENT}:citySlug`} element={<CityPage />} />
            <Route path={`/${TIMEATTHISMOMENT}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${TIMEATTHISMOMENTIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${TIMEATTHISMOMENTIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${CURRENTMOMENTTIME}:citySlug`} element={<CityPage />} />
            <Route path={`/${CURRENTMOMENTTIME}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${TIMETODAYIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${TIMETODAYIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${TIMETODAY}:citySlug`} element={<CityPage />} />
            <Route path={`/${TIMETODAY}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${TIMENOWAT}:citySlug`} element={<CityPage />} />
            <Route path={`/${TIMENOWAT}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${TIMEZONEIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${TIMEZONEIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${TIMEZONEFOR}:citySlug`} element={<CityPage />} />
            <Route path={`/${TIMEZONEFOR}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${TIMEZONEOF}:citySlug`} element={<CityPage />} />
            <Route path={`/${TIMEZONEOF}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${TIMEZONECLOCK}:citySlug`} element={<CityPage />} />
            <Route path={`/${TIMEZONECLOCK}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${TIMEZONECHECK}:citySlug`} element={<CityPage />} />
            <Route path={`/${TIMEZONECHECK}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${CHECKTIMEZONEIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${CHECKTIMEZONEIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${CURRENTTIMEZONE}:citySlug`} element={<CityPage />} />
            <Route path={`/${CURRENTTIMEZONE}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${LOCALTIMEZONE}:citySlug`} element={<CityPage />} />
            <Route path={`/${LOCALTIMEZONE}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${LOCALTIMEZONEIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${LOCALTIMEZONEIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${TIMEBYTIMEZONE}:citySlug`} element={<CityPage />} />
            <Route path={`/${TIMEBYTIMEZONE}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${TIMEFORTIMEZONE}:citySlug`} element={<CityPage />} />
            <Route path={`/${TIMEFORTIMEZONE}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${TIMEFORCITY}:citySlug`} element={<CityPage />} />
            <Route path={`/${TIMEFORCITY}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${TIMEFORCOUNTRY}:citySlug`} element={<CityPage />} />
            <Route path={`/${TIMEFORCOUNTRY}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${TIMEINCOUNTRY}:citySlug`} element={<CityPage />} />
            <Route path={`/${TIMEINCOUNTRY}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${TIMEINCITY}:citySlug`} element={<CityPage />} />
            <Route path={`/${TIMEINCITY}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${LOCALTIMEFOR}:citySlug`} element={<CityPage />} />
            <Route path={`/${LOCALTIMEFOR}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${CURRENTTIMEFOR}:citySlug`} element={<CityPage />} />
            <Route path={`/${CURRENTTIMEFOR}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${CURRENTTIMEAT}:citySlug`} element={<CityPage />} />
            <Route path={`/${CURRENTTIMEAT}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${LOCALTIMEAT}:citySlug`} element={<CityPage />} />
            <Route path={`/${LOCALTIMEAT}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${TIMENOWFOR}:citySlug`} element={<CityPage />} />
            <Route path={`/${TIMENOWFOR}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${CHECKTIMEIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${CHECKTIMEIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${CHECKTIMENOW}:citySlug`} element={<CityPage />} />
            <Route path={`/${CHECKTIMENOW}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${FINDTIMEIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${FINDTIMEIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${FINDTIMENOW}:citySlug`} element={<CityPage />} />
            <Route path={`/${FINDTIMENOW}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${GETTIMEIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${GETTIMEIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${GETTIMENOW}:citySlug`} element={<CityPage />} />
            <Route path={`/${GETTIMENOW}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${GETLOCALTIME}:citySlug`} element={<CityPage />} />
            <Route path={`/${GETLOCALTIME}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${GETLOCALTIMEIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${GETLOCALTIMEIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${GETCURRENTTIME}:citySlug`} element={<CityPage />} />
            <Route path={`/${GETCURRENTTIME}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${GETCURRENTTIMEIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${GETCURRENTTIMEIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${VIEWTIMEIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${VIEWTIMEIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${SHOWTIMEIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${SHOWTIMEIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${SHOWTIMENOW}:citySlug`} element={<CityPage />} />
            <Route path={`/${SHOWTIMENOW}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${HOWLATEISIT}:citySlug`} element={<CityPage />} />
            <Route path={`/${HOWLATEISIT}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${HOWLATEISITIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${HOWLATEISITIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${HOWEARLYIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${HOWEARLYIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${ISITLATETHERE}:citySlug`} element={<CityPage />} />
            <Route path={`/${ISITLATETHERE}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${ISITMORNINGIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${ISITMORNINGIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${ISITNIGHTIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${ISITNIGHTIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${ISITDAYIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${ISITDAYIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${WHATHOURISIT}:citySlug`} element={<CityPage />} />
            <Route path={`/${WHATHOURISIT}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${WHATHOURISITIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${WHATHOURISITIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${EXACTTIMEZONE}:citySlug`} element={<CityPage />} />
            <Route path={`/${EXACTTIMEZONE}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${PRECISETIMEIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${PRECISETIMEIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${PRECISECURRENTTIME}:citySlug`} element={<CityPage />} />
            <Route path={`/${PRECISECURRENTTIME}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${ACTUALTIMEIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${ACTUALTIMEIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${ACTUALTIMEZONE}:citySlug`} element={<CityPage />} />
            <Route path={`/${ACTUALTIMEZONE}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${LIVETIME}:citySlug`} element={<CityPage />} />
            <Route path={`/${LIVETIME}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${LIVETIMEIN}:citySlug`} element={<CityPage />} />
            <Route path={`/${LIVETIMEIN}country/:countrySlug`} element={<CountryPage />} />
            <Route path={`/${LIVETIMEFOR}:citySlug`} element={<CityPage />} />
            <Route path={`/${LIVETIMEFOR}country/:countrySlug`} element={<CountryPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
