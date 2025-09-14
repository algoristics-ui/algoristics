import { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import Navigation from "@/components/Navigation";
import SuperAdminSidebar from "@/components/SuperAdminSidebar";
import { useMobileDetection } from "@/hooks/useMobileDetection";

interface SuperAdminLayoutProps {
  children: ReactNode;
}

const SuperAdminLayout: React.FC<SuperAdminLayoutProps> = ({ children }) => {
  const isMobile = useMobileDetection();
  // Always collapse on mobile, expand on desktop
  const shouldOpenByDefault = !isMobile;

  // Debug log for children
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-console
    console.log('[SuperAdminLayout] children:', children);
  }

  return (
    <>
      {/* Global navigation/header */}
      <Navigation />
      
      <SidebarProvider defaultOpen={shouldOpenByDefault}>
        {/* Main container with top padding to account for fixed nav */}
        <div className="min-h-screen bg-background flex flex-col pt-16">
          
          {/* Sidebar and Main Content container */}
          <div className="flex flex-1 overflow-hidden">
            <SuperAdminSidebar />
            <main className="flex-1 overflow-y-auto bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="h-full">
                {children}
              </div>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </>
  );
};

export default SuperAdminLayout;