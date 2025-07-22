import * as ReactQuery from "@tanstack/react-query";
import * as ReactRouterDom from "react-router-dom";
import { ThemeProvider } from "next-themes";

import { Toaster } from "./components/ui/toaster.tsx";
import { Toaster as Sonner } from "./components/ui/sonner.tsx";
import { TooltipProvider } from "./components/ui/tooltip.tsx";
import Index from "./pages/Index.tsx";
import Catalog from "./pages/Catalog.tsx";
import Simulator from "./pages/Simulator.tsx";
import Promotions from "./pages/Promotions.tsx";
import About from "./pages/About.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new ReactQuery.QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <ReactQuery.QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ReactRouterDom.BrowserRouter>
          <ReactRouterDom.Routes>
            <ReactRouterDom.Route path="/" element={<Index />} />
            <ReactRouterDom.Route path="/catalog" element={<Catalog />} />
            <ReactRouterDom.Route path="/simulator" element={<Simulator />} />
            <ReactRouterDom.Route path="/promotions" element={<Promotions />} />
            <ReactRouterDom.Route path="/about" element={<About />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <ReactRouterDom.Route path="*" element={<NotFound />} />
          </ReactRouterDom.Routes>
        </ReactRouterDom.BrowserRouter>
      </TooltipProvider>
    </ReactQuery.QueryClientProvider>
  </ThemeProvider>
);

export default App;
