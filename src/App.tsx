import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const LanguageWrapper = () => {
  const { i18n } = useTranslation();
  const pathname = window.location.pathname;
  
  useEffect(() => {
    if (pathname.startsWith('/en')) {
      i18n.changeLanguage('en');
    } else if (pathname.startsWith('/es')) {
      i18n.changeLanguage('es');
    } else {
      i18n.changeLanguage('pt');
    }
  }, [pathname, i18n]);
  
  return <Index />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/jeffersonlmendes" element={<Index />} />
          <Route path="/en" element={<LanguageWrapper />} />
          <Route path="/es" element={<LanguageWrapper />} />
          <Route path="/en/jeffersonlmendes" element={<LanguageWrapper />} />
          <Route path="/es/jeffersonlmendes" element={<LanguageWrapper />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
