import { useState, useEffect } from "react";
import { 
  Home,
  BookOpen, 
  BarChart3, 
  Users, 
  Building2,
  ClipboardList,
  FileText,
  Settings,
  GraduationCap,
  UserCheck,
  Megaphone
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useMobileDetection } from "@/hooks/useMobileDetection";

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
  useSidebar,
} from "@/components/ui/sidebar";

const getAllNavigationItems = () => [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
    group: "Overview",
    roles: ["super_admin", "org_admin", "instructor", "learner"]
  },
  {
    title: "Courses",
    url: "/courses",
    icon: BookOpen,
    group: "Learning",
    roles: ["super_admin", "org_admin", "instructor", "learner"]
  },
  {
    title: "Assessments",
    url: "/assessments",
    icon: ClipboardList,
    group: "Learning",
    roles: ["super_admin", "org_admin", "instructor"]
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: BarChart3,
    group: "Insights",
    roles: ["super_admin", "org_admin", "instructor"]
  },
  {
    title: "Reports",
    url: "/reports",
    icon: FileText,
    group: "Insights",
    roles: ["super_admin", "org_admin"]
  },
  {
    title: "Students",
    url: "/students",
    icon: Users,
    group: "Management",
    roles: ["super_admin", "org_admin", "instructor"]
  },
  {
    title: "Instructors",
    url: "/instructors",
    icon: UserCheck,
    group: "Management",
    roles: ["super_admin", "org_admin"]
  },
  {
    title: "News Feed",
    url: "/newsfeed",
    icon: Megaphone,
    group: "Management",
    roles: ["super_admin", "org_admin"]
  },
  {
    title: "Organizations",
    url: "/organizations",
    icon: Building2,
    group: "Management",
    roles: ["super_admin"]
  },
  {
    title: "Certificates",
    url: "/certificates",
    icon: FileText,
    group: "Learning",
    roles: ["super_admin", "org_admin", "instructor", "learner"]
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
    group: "Configuration",
    roles: ["super_admin", "org_admin", "instructor", "learner"]
  },
];

export function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { user } = useAuth();
  const isMobile = useMobileDetection();
  const { setOpenMobile } = useSidebar();

  // Filter navigation items based on user role
  const navigationItems = getAllNavigationItems().filter(item => 
    user?.role ? item.roles.includes(user.role) : false
  );

  // Group items by their group property
  const groupedItems = navigationItems.reduce((groups, item) => {
    const group = item.group;
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(item);
    return groups;
  }, {} as Record<string, typeof navigationItems>);

  // Auto-collapse on mobile when navigating to a new page
  useEffect(() => {
    if (isMobile && setOpenMobile) {
      setOpenMobile(false);
    }
  }, [currentPath, isMobile, setOpenMobile]);

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-primary text-primary-foreground font-medium" : "hover:bg-muted/50";

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        {/* Header with Logo and Toggle */}
        <div className="p-4 border-b border-border/60">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 min-w-0 flex-1">
              <div className="gradient-hero w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <div className="group-data-[collapsible=icon]:hidden min-w-0">
                <h1 className="text-lg font-bold text-foreground truncate">Algoristics</h1>
                <p className="text-xs text-muted-foreground">Learning Management</p>
              </div>
            </div>
            {/* Toggle button always visible */}
            <div className="flex-shrink-0">
              <SidebarTrigger className="h-5 w-5 opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>

        {/* Navigation Groups */}
        {Object.entries(groupedItems).map(([groupName, items]) => {
          const hasActiveItem = items.some(item => isActive(item.url));
          
          return (
            <SidebarGroup key={groupName}>
              <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {groupName}
              </SidebarGroupLabel>

              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <NavLink 
                          to={item.url} 
                          end 
                          className={({ isActive }) => getNavCls({ isActive })}
                          title={item.title}
                        >
                          <item.icon className="h-4 w-4 flex-shrink-0" />
                          <span className="group-data-[collapsible=icon]:hidden ml-3">{item.title}</span>
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          );
        })}
      </SidebarContent>
    </Sidebar>
  );
}