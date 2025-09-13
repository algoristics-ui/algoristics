import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Globe, 
  MapPin, 
  Bell, 
  Download, 
  Settings,
  CheckCircle,
  Timer,
  GraduationCap,
  Zap
} from "lucide-react";

interface OrganizationData {
  name: string;
  logo: string;
  headerImage: string;
  primaryColor: string;
  secondaryColor: string;
  customUrl: string;
  location: string;
  subtitle?: string;
  planType?: 'Enterprise' | 'Professional' | 'Trial';
  additionalBadges?: Array<{
    text: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
  }>;
}

interface OrganizationHeaderProps {
  orgData: OrganizationData;
  stickyHeader?: boolean;
}

const OrganizationHeader = ({ orgData, stickyHeader = false }: OrganizationHeaderProps) => {
  const getAcronym = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 3);
  };

  const getPlanBadgeColor = (planType?: string) => {
    switch (planType) {
      case 'Enterprise':
        return orgData.primaryColor;
      case 'Professional':
        return orgData.primaryColor;
      case 'Trial':
        return '#f59e0b';
      default:
        return orgData.primaryColor;
    }
  };

  const getStatusBadges = () => {
    const badges = [];
    
    if (orgData.planType) {
      badges.push(
        <Badge 
          key="plan"
          className="text-white px-3 py-1"
          style={{ backgroundColor: getPlanBadgeColor(orgData.planType) }}
        >
          {orgData.planType} Plan
        </Badge>
      );
    }

    if (orgData.planType === 'Trial') {
      badges.push(
        <Badge key="trial" variant="outline" className="text-orange-700 border-orange-300">
          <Timer className="h-3 w-3 mr-1" />
          30 Days Remaining
        </Badge>
      );
    } else {
      badges.push(
        <Badge key="active" variant="outline" className="text-green-700 border-green-300">
          <CheckCircle className="h-3 w-3 mr-1" />
          Active
        </Badge>
      );
    }

    if (orgData.additionalBadges) {
      orgData.additionalBadges.forEach((badge, index) => {
        badges.push(
          <Badge key={`additional-${index}`} variant="outline" className={`text-${badge.color}-700 border-${badge.color}-300`}>
            <badge.icon className="h-3 w-3 mr-1" />
            {badge.text}
          </Badge>
        );
      });
    }

    return badges;
  };

  return (
    <>
      {stickyHeader && (
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
          <div className="flex h-14 items-center px-4">
            <h1 className="text-lg font-semibold">{orgData.name} Portal</h1>
          </div>
        </header>
      )}
      
      <div
        className="h-48 relative"
        style={{
          backgroundImage: `url(${orgData.headerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-3 md:px-6">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <Avatar className="h-16 w-16 md:h-20 md:w-20 border-4 border-white shadow-xl">
                <AvatarImage src={orgData.logo} alt={orgData.name} />
                <AvatarFallback 
                  className="text-xl md:text-2xl font-bold text-white" 
                  style={{ backgroundColor: orgData.primaryColor }}
                >
                  {getAcronym(orgData.name)}
                </AvatarFallback>
              </Avatar>
              <div className="text-white text-center md:text-left">
                <h1 className="text-2xl md:text-4xl font-bold">{orgData.name}</h1>
                <p className="text-lg md:text-xl opacity-90">
                  {orgData.subtitle || 'Learning Management Portal'}
                </p>
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mt-2 text-sm opacity-80">
                  <div className="flex items-center space-x-1">
                    <Globe className="h-4 w-4" />
                    <span>{orgData.customUrl}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{orgData.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-6 -mt-12 relative z-10">
        <Card className="mb-8 bg-white/95 backdrop-blur-sm shadow-xl border-0">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                {getStatusBadges()}
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Bell className="h-4 w-4 mr-2" />
                  {orgData.planType === 'Trial' ? 'Announcements' : 
                   orgData.planType === 'Professional' ? 'Alerts' : 'Notifications'}
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  {orgData.planType === 'Trial' ? 'Student Data' : 'Export Data'}
                </Button>
                <Button 
                  size="sm" 
                  className="text-white"
                  style={{ backgroundColor: orgData.primaryColor }}
                >
                  <Settings className="h-4 w-4 mr-2" />
                  {orgData.planType === 'Trial' ? 'Administration' : 
                   orgData.planType === 'Professional' ? 'Manage' : 'Settings'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export { OrganizationHeader };
export type { OrganizationData };