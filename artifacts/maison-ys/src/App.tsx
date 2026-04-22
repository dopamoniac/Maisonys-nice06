import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import PageLayout from "@/components/layout/PageLayout";

import Home from "@/pages/Home";
import Collection from "@/pages/Collection";
import Product from "@/pages/Product";
import Maison from "@/pages/Maison";
import Gifting from "@/pages/Gifting";
import Contact from "@/pages/Contact";

const queryClient = new QueryClient();

function Router() {
  return (
    <PageLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/collection" component={Collection} />
        <Route path="/product/:name" component={Product} />
        <Route path="/maison" component={Maison} />
        <Route path="/gifting" component={Gifting} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </PageLayout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
