import { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import SuperAdminHeader from "@/components/SuperAdminHeader";
import SuperAdminSidebar from "@/components/SuperAdminSidebar";
import { useMobileDetection } from "@/hooks/useMobileDetection";

interface SuperAdminLayoutProps {
  children: ReactNode;
}

const SuperAdminLayout: React.FC<SuperAdminLayoutProps> = ({ children }) => {
  const isMobile = useMobileDetection();
  // Always collapse on mobile, expand on desktop
  const shouldOpenByDefault = !isMobile;

  return (
    <SidebarProvider defaultOpen={shouldOpenByDefault}>
      <div className="min-h-screen bg-background flex flex-col">
        {/* Header - spans full width above everything */}
        <SuperAdminHeader />
        
        {/* Sidebar and Main Content container - below header */}
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
  );
};

export default SuperAdminLayout;