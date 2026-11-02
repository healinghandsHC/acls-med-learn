import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { AppLayout } from "@/components/layout/AppLayout";
import Dashboard from "@/pages/Dashboard";
import Algorithms from "@/pages/Algorithms";
import AlgorithmDetail from "@/pages/AlgorithmDetail";
import Medications from "@/pages/Medications";
import MedicationDetail from "@/pages/MedicationDetail";
import Simulation from "@/pages/Simulation";
import Quiz from "@/pages/Quiz";
import Reference from "@/pages/Reference";

const queryClient = new QueryClient();

function Router() {
  return (
    <AppLayout>
      <Switch>
        <Route path="/" component={Dashboard} />
        <Route path="/algorithms" component={Algorithms} />
        <Route path="/algorithms/:id" component={AlgorithmDetail} />
        <Route path="/medications" component={Medications} />
        <Route path="/medications/:id" component={MedicationDetail} />
        <Route path="/simulation" component={Simulation} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/reference" component={Reference} />
        <Route component={NotFound} />
      </Switch>
    </AppLayout>
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
