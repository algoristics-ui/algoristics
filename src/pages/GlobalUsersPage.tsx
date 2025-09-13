import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  Search, 
  Filter, 
  MoreHorizontal,
  UserCheck,
  UserX,
  Crown,
  Building2,
  Mail,
  Phone,
  Calendar
} from "lucide-react";

const GlobalUsersPage = () => {
  const globalUsers = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@stanford.edu",
      role: "org_admin",
      organization: "Stanford University",
      status: "active",
      lastLogin: "2 hours ago",
      joinDate: "Jan 15, 2024"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@techcorp.com",
      role: "instructor",
      organization: "TechCorp Training",
      status: "active",
      lastLogin: "1 day ago",
      joinDate: "Mar 8, 2024"
    },
    {
      id: 3,
      name: "Michael Chen",
      email: "m.chen@citycc.edu",
      role: "learner",
      organization: "City Community College",
      status: "inactive",
      lastLogin: "1 week ago",
      joinDate: "Feb 22, 2024"
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@harvard.edu",
      role: "org_admin",
      organization: "Harvard University",
      status: "active",
      lastLogin: "30 mins ago",
      joinDate: "Dec 5, 2023"
    }
  ];

  const userStats = [
    {
      title: "Total Users",
      value: "47,853",
      change: "+1,247",
      changeType: "positive" as const,
      icon: Users,
    },
    {
      title: "Active Users",
      value: "42,156",
      change: "+892",
      changeType: "positive" as const,
      icon: UserCheck,
    },
    {
      title: "Organizations",
      value: "124",
      change: "+3",
      changeType: "positive" as const,
      icon: Building2,
    },
    {
      title: "Super Admins",
      value: "8",
      change: "0",
      changeType: "neutral" as const,
      icon: Crown,
    }
  ];

  const getRoleBadge = (role: string) => {
    const roleConfig = {
      super_admin: { label: "Super Admin", color: "bg-red-500/10 text-red-700 border-red-200" },
      org_admin: { label: "Org Admin", color: "bg-blue-500/10 text-blue-700 border-blue-200" },
      instructor: { label: "Instructor", color: "bg-green-500/10 text-green-700 border-green-200" },
      learner: { label: "Learner", color: "bg-gray-500/10 text-gray-700 border-gray-200" }
    };
    
    const config = roleConfig[role as keyof typeof roleConfig] || roleConfig.learner;
    return <Badge className={config.color}>{config.label}</Badge>;
  };

  const getStatusBadge = (status: string) => {
    return status === "active" ? (
      <Badge className="bg-green-500/10 text-green-700 border-green-200">Active</Badge>
    ) : (
      <Badge className="bg-gray-500/10 text-gray-700 border-gray-200">Inactive</Badge>
    );
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-primary via-primary/95 to-primary/90 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/60" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 pt-8 px-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                Global Users
              </h1>
              <p className="text-base md:text-lg text-white/95 max-w-2xl mx-auto drop-shadow-sm">
                Manage users across all organizations
              </p>
            </div>
            
            <div className="flex justify-center px-4">
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-6 md:px-8 py-3 w-full sm:w-auto">
                <UserCheck className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                Add User
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="py-16 -mt-8 relative z-10">
        <div className="container mx-auto px-6 space-y-8">

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {userStats.map((stat, index) => (
          <Card key={index} className="shadow-elegant hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                  <p className={`text-sm mt-1 ${
                    stat.changeType === 'positive' ? 'text-green-600' : 
                    stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-600'
                  }`}>
                    {stat.change} this month
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Users Management */}
      <Card className="shadow-elegant">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle className="text-xl font-bold">All Users</CardTitle>
              <p className="text-muted-foreground">Complete list of platform users</p>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search users..."
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {globalUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 border border-border/10">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white font-semibold">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-semibold text-foreground">{user.name}</h3>
                      {getRoleBadge(user.role)}
                      {getStatusBadge(user.status)}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Mail className="w-3 h-3" />
                        {user.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Building2 className="w-3 h-3" />
                        {user.organization}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right space-y-1">
                  <p className="text-sm text-muted-foreground">Last login: {user.lastLogin}</p>
                  <p className="text-xs text-muted-foreground">Joined: {user.joinDate}</p>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
        </div>
      </div>
    </div>
  );
};

export default GlobalUsersPage;