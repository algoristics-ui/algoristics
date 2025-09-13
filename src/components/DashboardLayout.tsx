import { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import DashboardHeader from "@/components/DashboardHeader";
import { OrganizationHeader, OrganizationData } from "@/components/OrganizationHeader";
import { useAuth } from "@/contexts/AuthContext";
import { useSmartSidebarDefault } from "@/hooks/useMobileDetection";
import { GraduationCap, Zap } from "lucide-react";
import SuperAdminLayout from "@/components/SuperAdminLayout";

interface DashboardLayoutProps {
  children: ReactNode;
}

// Helper function to get organization data
const getOrganizationData = (orgName: string): OrganizationData => {
  const orgData: Record<string, OrganizationData> = {
    'Stanford University': {
      name: "Stanford University",
      logo: "/placeholder.svg",
      headerImage: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1200&h=300&fit=crop",
      primaryColor: "#8C1515",
      secondaryColor: "#B1040E",
      customUrl: "stanford.learningplatform.com",
      location: "Stanford, CA",
      planType: "Enterprise"
    },
    'TechCorp Training': {
      name: "TechCorp Training",
      logo: "/placeholder.svg",
      headerImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=300&fit=crop",
      primaryColor: "#0066CC",
      secondaryColor: "#004499",
      customUrl: "techcorp.learningplatform.com",
      location: "San Francisco, CA",
      subtitle: "Corporate Learning Hub",
      planType: "Professional",
      additionalBadges: [{
        text: "Tech Focus",
        icon: Zap,
        color: "blue"
      }]
    },
    'City Community College': {
      name: "City Community College",
      logo: "/placeholder.svg",
      headerImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=300&fit=crop",
      primaryColor: "#228B22",
      secondaryColor: "#32CD32",
      customUrl: "citycc.learningplatform.com",
      location: "Los Angeles, CA",
      subtitle: "Student Success Portal",
      planType: "Trial",
      additionalBadges: [{
        text: "Community Focus",
        icon: GraduationCap,
        color: "green"
      }]
    },
    'Algoristics': {
      name: "Algoristics",
      logo: "/placeholder.svg",
      headerImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=300&fit=crop",
      primaryColor: "#3B82F6",
      secondaryColor: "#1D4ED8",
      customUrl: "algoristic.learningplatform.com",
      location: "San Jose, CA",
      subtitle: "Learning Management Portal",
      planType: "Enterprise"
    }
  };
  
  return orgData[orgName] || orgData['Algoristics'];
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { user } = useAuth();
  const shouldOpenByDefault = useSmartSidebarDefault();

  // Use Super Admin Layout for super admins
  if (user?.role === 'super_admin') {
    return <SuperAdminLayout>{children}</SuperAdminLayout>;
  }

  return (
    <SidebarProvider defaultOpen={shouldOpenByDefault}>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col min-w-0">
          {user && (
            <OrganizationHeader 
              orgData={getOrganizationData(user.organization)}
              stickyHeader={false}
            />
          )}
          <DashboardHeader />
          
          <main className="flex-1 p-3 md:p-6 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;