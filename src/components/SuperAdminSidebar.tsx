import { useState, useEffect } from "react";
import { 
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar
} from "@/components/ui/sidebar";
import { 
  Building2,
  Users,
  BarChart3,
  FileText,
  Settings,
  Shield,
  Globe,
  TrendingUp,
  Database,
  Zap
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useMobileDetection } from "@/hooks/useMobileDetection";

const SuperAdminSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isMobile = useMobileDetection();
  const { setOpenMobile } = useSidebar();

  // Auto-collapse on mobile when navigating to a new page
  useEffect(() => {
    if (isMobile && setOpenMobile) {
      setOpenMobile(false);
    }
  }, [currentPath, isMobile, setOpenMobile]);

  const menuGroups = {
    "Overview": [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: BarChart3,
      }
    ],
    "Management": [
      {
        title: "Organizations",
        url: "/organizations",
        icon: Building2,
      },
      {
        title: "Global Users",
        url: "/users",
        icon: Users,
      }
    ],
    "Analytics": [
      {
        title: "Platform Analytics",
        url: "/analytics", 
        icon: BarChart3,
      },
      {
        title: "System Reports",
        url: "/reports",
        icon: FileText,
      },
      {
        title: "Performance",
        url: "/performance",
        icon: TrendingUp,
      }
    ],
    "System": [
      {
        title: "Security",
        url: "/security",
        icon: Shield,
      },
      {
        title: "Infrastructure",
        url: "/infrastructure",
        icon: Database,
      }
    ],
    "Configuration": [
      {
        title: "Global Settings",
        url: "/settings",
        icon: Settings,
      }
    ]
  };

  const isActive = (url: string) => {
    return location.pathname === url;
  };

  return (
    <Sidebar collapsible="icon" className="border-r border-border/60 bg-background">
      <SidebarContent>
        {/* Header without toggle */}
        <div className="flex h-12 items-center px-4 border-b">
          <div className="font-semibold text-foreground group-data-[collapsible=icon]:hidden">
            
          </div>
        </div>
        
        {/* Navigation Groups */}
        {Object.entries(menuGroups).map(([groupName, items], index) => (
          <SidebarGroup key={groupName}>
            {groupName === "Overview" ? (
              <div className="flex items-center space-x-2 py-3 px-3">
                <SidebarTrigger className="h-5 w-5 opacity-70 hover:opacity-100 transition-opacity bg-transparent hover:bg-muted rounded-sm p-1" />
                <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {groupName}
                </SidebarGroupLabel>
              </div>
            ) : (
              <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {groupName}
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      className={`${isActive(item.url) ? 'bg-primary/10 text-primary' : ''}`}
                      tooltip={item.title}
                    >
                      <Link to={item.url} className="flex items-center">
                        <item.icon className="h-4 w-4 shrink-0" />
                        <span className="group-data-[collapsible=icon]:hidden ml-2">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
};

export default SuperAdminSidebar;