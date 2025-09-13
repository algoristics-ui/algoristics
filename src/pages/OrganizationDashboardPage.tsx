import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useParams } from "react-router-dom";
import { OrganizationLayout } from "@/components/OrganizationLayout";
import { 
  Users, 
  BookOpen, 
  TrendingUp, 
  Calendar,
  Award,
  Clock,
  CheckCircle,
  BarChart3,
  ClipboardList,
  AlertCircle,
  Megaphone
} from "lucide-react";

const OrganizationDashboardPage = () => {
  const { orgId } = useParams();

  const dashboardStats = [
    { title: "Active Students", value: "12,500", icon: Users, color: "#8C1515", change: "+8%" },
    { title: "Total Courses", value: "120", icon: BookOpen, color: "#8C1515", change: "+12%" },
    { title: "Completion Rate", value: "89%", icon: TrendingUp, color: "#8C1515", change: "+5%" },
    { title: "Certificates Issued", value: "2,847", icon: Award, color: "#8C1515", change: "+15%" }
  ];

  const newsFeedItems = [
    {
      id: 1,
      type: "due_date",
      title: "Course Completion Due",
      content: "Complete 'Data Science Fundamentals' by March 15th to maintain your certification progress.",
      priority: "high",
      date: "2024-03-15",
      icon: AlertCircle
    },
    {
      id: 2,
      type: "new_course",
      title: "New Course Available",
      content: "Advanced Machine Learning course is now available. Enroll today to enhance your AI skills.",
      priority: "medium",
      date: "2024-03-10",
      icon: BookOpen
    },
    {
      id: 3,
      type: "assessment",
      title: "Assessment Reminder",
      content: "Midterm assessment for 'Cloud Computing' opens tomorrow. Prepare and schedule your exam.",
      priority: "high",
      date: "2024-03-12",
      icon: ClipboardList
    },
    {
      id: 4,
      type: "announcement",
      title: "Spring Break Schedule",
      content: "University will be closed from March 25-29. All online courses remain accessible during this period.",
      priority: "low",
      date: "2024-03-25",
      icon: Megaphone
    },
    {
      id: 5,
      type: "new_course",
      title: "Cybersecurity Fundamentals",
      content: "New cybersecurity course launching next week. Limited spots available, register now!",
      priority: "medium",
      date: "2024-03-18",
      icon: BookOpen
    }
  ];

  const recentActivities = [
    { action: "New course 'Advanced Machine Learning' published", time: "2 hours ago", type: "course" },
    { action: "Sarah Chen completed 'Data Science Fundamentals'", time: "4 hours ago", type: "completion" },
    { action: "25 new students enrolled this week", time: "1 day ago", type: "enrollment" },
    { action: "Q4 completion report generated", time: "2 days ago", type: "report" }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#10b981';
      default: return orgData.primaryColor;
    }
  };

  return (
    <OrganizationLayout 
      orgId={orgId}
      title="Home"
    >
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground">Stay updated with the latest announcements and course information</p>
      </div>

            {/* News Feed Carousel */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Megaphone className="h-5 w-5" style={{ color: orgData.primaryColor }} />
                  <span>Latest Updates & Announcements</span>
                </CardTitle>
                <CardDescription>
                  Important news, course deadlines, and announcements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Carousel className="w-full">
                  <CarouselContent>
                    {newsFeedItems.map((item) => (
                      <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <Card className="h-full">
                            <CardHeader className="pb-3">
                              <div className="flex items-start justify-between">
                                <div className="flex items-center space-x-2">
                                  <item.icon 
                                    className="h-4 w-4" 
                                    style={{ color: getPriorityColor(item.priority) }}
                                  />
                                  <Badge 
                                    variant="secondary" 
                                    className="text-xs"
                                    style={{ 
                                      backgroundColor: `${getPriorityColor(item.priority)}20`,
                                      color: getPriorityColor(item.priority)
                                    }}
                                  >
                                    {item.priority.toUpperCase()}
                                  </Badge>
                                </div>
                                <span className="text-xs text-muted-foreground">
                                  {new Date(item.date).toLocaleDateString()}
                                </span>
                              </div>
                              <CardTitle className="text-sm font-semibold leading-tight">
                                {item.title}
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0">
                              <p className="text-xs text-muted-foreground leading-relaxed">
                                {item.content}
                              </p>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>Quick Actions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                  <Button 
                    variant="outline" 
                    className="h-16 md:h-20 flex flex-col items-center justify-center space-y-1 md:space-y-2"
                    onClick={() => window.location.href = `/portal/${orgId}/courses`}
                  >
                    <BookOpen className="h-5 w-5" style={{ color: orgData.primaryColor }} />
                    <span className="text-xs md:text-sm">View Courses</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-16 md:h-20 flex flex-col items-center justify-center space-y-1 md:space-y-2"
                    onClick={() => window.location.href = `/portal/${orgId}/students`}
                  >
                    <Users className="h-5 w-5" style={{ color: orgData.primaryColor }} />
                    <span className="text-xs md:text-sm">Manage Students</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-16 md:h-20 flex flex-col items-center justify-center space-y-1 md:space-y-2"
                    onClick={() => window.location.href = `/portal/${orgId}/assessments`}
                  >
                    <ClipboardList className="h-5 w-5" style={{ color: orgData.primaryColor }} />
                    <span className="text-xs md:text-sm">Assessments</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-16 md:h-20 flex flex-col items-center justify-center space-y-1 md:space-y-2"
                    onClick={() => window.location.href = `/portal/${orgId}/analytics`}
                  >
                    <BarChart3 className="h-5 w-5" style={{ color: orgData.primaryColor }} />
                    <span className="text-xs md:text-sm">View Analytics</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Dashboard Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
              {dashboardStats.map((stat, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </CardTitle>
                      <stat.icon className="h-5 w-5" style={{ color: stat.color }} />
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="text-3xl font-bold" style={{ color: stat.color }}>
                        {stat.value}
                      </div>
                      <Badge variant="secondary" className="text-green-700 bg-green-50">
                        {stat.change}
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Recent Activities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" style={{ color: orgData.primaryColor }} />
                  <span>Recent Activities</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50">
                    <div 
                      className="w-2 h-2 rounded-full mt-2"
                      style={{ backgroundColor: orgData.primaryColor }}
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
    </OrganizationLayout>
  );
};

export default OrganizationDashboardPage;