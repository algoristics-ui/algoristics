import { useState, useEffect } from "react";
import { 
  Home,
  BookOpen, 
  BarChart3, 
  ClipboardList,
  Settings,
  GraduationCap,
  Map,
  Award
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { getOrganizationDataFromPath } from "@/utils/organizationData";
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

const getLearnerNavigationItems = () => [
  {
    title: "Dashboard",
    url: "/learner/dashboard",
    icon: Home,
    group: "Overview",
    description: "Your learning overview"
  },
  {
    title: "My Courses",
    url: "/learner/courses",
    icon: BookOpen,
    group: "Learning",
    description: "Browse and manage your courses"
  },
  {
    title: "Learning Paths",
    url: "/learner/paths",
    icon: Map,
    group: "Learning",
    description: "Follow structured learning journeys"
  },
  {
    title: "Assessments",
    url: "/learner/assessments",
    icon: ClipboardList,
    group: "Learning",
    description: "Take tests and quizzes"
  },
  {
    title: "My Analytics",
    url: "/learner/analytics",
    icon: BarChart3,
    group: "Progress",
    description: "Track your learning progress"
  },
  {
    title: "Certificates",
    url: "/learner/certificates",
    icon: Award,
    group: "Achievements",
    description: "View your earned certificates"
  },
  {
    title: "Settings",
    url: "/learner/settings",
    icon: Settings,
    group: "Account",
    description: "Manage your profile and preferences"
  }
];

export function LearnerSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { user } = useAuth();
  const isMobile = useMobileDetection();
  const { setOpenMobile } = useSidebar();

  // Get organization context
  const orgData = getOrganizationDataFromPath(location.pathname);
  const orgPrefix = orgData ? `/${orgData.acronym}` : '';

  // Get learner navigation items with organization prefix
  const getNavigationItems = () => {
    const baseItems = getLearnerNavigationItems();
    return baseItems.map(item => ({
      ...item,
      url: `${orgPrefix}${item.url}`
    }));
  };

  const navigationItems = getNavigationItems();

  // Group items by their group property
  const groupedItems = navigationItems.reduce((groups, item) => {
    const group = item.group;
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(item);
    return groups;
  }, {} as Record<string, typeof navigationItems>);

  // Close mobile sidebar when clicking a link
  const handleNavClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <Sidebar>
      <SidebarContent>
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <GraduationCap 
              className="h-6 w-6" 
              style={{ color: orgData?.primaryColor || '#000' }} 
            />
            <span className="font-semibold text-lg">Student Portal</span>
          </div>
          <SidebarTrigger className="lg:hidden" />
        </div>

        {Object.entries(groupedItems).map(([groupName, items]) => (
          <SidebarGroup key={groupName}>
            <SidebarGroupLabel className="px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {groupName}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => {
                  const isActive = currentPath === item.url || 
                    (item.url !== `${orgPrefix}/learner/dashboard` && currentPath.startsWith(item.url));
                  
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild 
                        isActive={isActive}
                        className="group relative"
                      >
                        <NavLink 
                          to={item.url} 
                          onClick={handleNavClick}
                          className="flex items-center space-x-3 px-3 py-2 rounded-md transition-colors"
                        >
                          <item.icon className="h-4 w-4 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium">{item.title}</div>
                            <div className="text-xs text-muted-foreground line-clamp-1">
                              {item.description}
                            </div>
                          </div>
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}

        {/* Quick Stats Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Quick Stats
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="px-4 py-3 space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Courses in Progress</span>
                <span className="font-medium" style={{ color: orgData?.primaryColor }}>3</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Completed</span>
                <span className="font-medium" style={{ color: orgData?.primaryColor }}>12</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Certificates</span>
                <span className="font-medium" style={{ color: orgData?.primaryColor }}>8</span>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}