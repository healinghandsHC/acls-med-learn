import { Link, useLocation } from "wouter";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/algorithms", label: "Algorithms" },
    { href: "/medications", label: "Medications" },
    { href: "/simulation", label: "Simulation" },
    { href: "/quiz", label: "Quiz" },
    { href: "/reference", label: "Quick Reference" }
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col md:flex-row bg-background">
      <div className="w-full md:w-64 border-r border-border bg-sidebar text-sidebar-foreground">
        <div className="p-4 font-bold text-xl tracking-tight border-b border-sidebar-border">
          Code Blue Learning
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          {links.map((link) => {
            const isActive = location === link.href || (link.href !== "/" && location.startsWith(link.href));
            return (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`px-3 py-2 rounded-md transition-colors ${
                  isActive 
                    ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" 
                    : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
