import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Users, 
  GraduationCap, 
  TrendingUp, 
  Award,
  AlertCircle,
  Calendar,
  Clock,
  Target,
  Star,
  Megaphone
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const ComingSoonPage = () => {
  const { user } = useAuth();

  // News feed items for the carousel
  const newsFeedItems = [
    {
      id: 1,
      type: "course_due",
      title: "Course Deadline Reminder",
      content: "Advanced Data Science course assignments are due in 3 days. Complete your final project submission.",
      priority: "high",
      date: "2024-01-15",
      icon: Target
    },
    {
      id: 2,
      type: "new_course",
      title: "New Course Available",
      content: "Introduction to Machine Learning is now available. Enroll to start your AI journey.",
      priority: "medium",
      date: "2024-01-14",
      icon: BookOpen
    },
    {
      id: 3,
      type: "assessment",
      title: "Assessment Schedule",
      content: "Mid-term assessments for Q1 2024 will begin next week. Check your calendar for specific dates.",
      priority: "high",
      date: "2024-01-13",
      icon: Calendar
    },
    {
      id: 4,
      type: "announcement",
      title: "Platform Maintenance",
      content: "Scheduled maintenance this Saturday 2-4 AM EST. Platform will be temporarily unavailable.",
      priority: "low",
      date: "2024-01-12",
      icon: Megaphone
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-500/10 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800";
      case "medium": return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800";
      case "low": return "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800";
      default: return "bg-gray-500/10 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-800";
    }
  };

  // Super Admin specific statistics
  const stats = [
    {
      title: "Total Organizations",
      value: "12",
      change: "+8%",
      changeType: "positive" as const,
      icon: BookOpen,
      description: "Active organizations"
    },
    {
      title: "Global Users",
      value: "5,847",
      change: "+12.5%",
      changeType: "positive" as const,
      icon: Users,
      description: "Across all organizations"
    },
    {
      title: "Platform Usage",
      value: "94%",
      change: "+2.3%",
      changeType: "positive" as const,
      icon: Award,
      description: "System utilization"
    },
    {
      title: "Revenue",
      value: "$48,950",
      change: "+22%",
      changeType: "positive" as const,
      icon: GraduationCap,
      description: "This month"
    }
  ];

  const recentCourses = [
    {
      title: "Advanced React Development",
      students: 45,
      progress: 78,
      instructor: "Dr. Sarah Wilson",
      status: "active"
    },
    {
      title: "Data Science Fundamentals",
      students: 67,
      progress: 92,
      instructor: "Prof. Mike Johnson",
      status: "completed"
    },
    {
      title: "Machine Learning Basics",
      students: 34,
      progress: 23,
      instructor: "Dr. Lisa Chen",
      status: "active"
    }
  ];

  const upcomingEvents = [
    {
      title: "Platform Review Meeting",
      time: "10:00 AM - 11:00 AM",
      date: "Today",
      type: "meeting"
    },
    {
      title: "Quarterly Business Review",
      time: "2:00 PM - 4:00 PM",
      date: "Tomorrow",
      type: "event"
    },
    {
      title: "System Maintenance",
      time: "12:00 AM - 2:00 AM",
      date: "Dec 15",
      type: "maintenance"
    }
  ];

  const formatRole = (role: string) => {
    return role.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">
          Coming Soon Features, {user?.name}! 🚀
        </h1>
        <div className="flex items-center space-x-4 text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Badge variant="secondary">{user ? formatRole(user.role) : 'User'}</Badge>
            <span>•</span>
            <span>{user?.organization}</span>
          </div>
        </div>
      </div>

      {/* News Feed Carousel */}
      <Card className="gradient-card border-0 shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Megaphone className="h-5 w-5" />
            Upcoming Features & Announcements
          </CardTitle>
          <CardDescription>
            Preview of exciting new features coming to the platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel className="w-full">
            <CarouselContent>
              {newsFeedItems.map((item) => (
                <CarouselItem key={item.id}>
                  <Card className={`border-l-4 ${getPriorityColor(item.priority)}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <item.icon className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <Badge variant="outline" className={getPriorityColor(item.priority)}>
                              Coming Soon
                            </Badge>
                          </div>
                          <p className="text-muted-foreground mb-2">{item.content}</p>
                          <p className="text-sm text-muted-foreground">{item.date}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="gradient-card border-0 shadow-soft hover:shadow-medium transition-smooth">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center space-x-2">
                <span className={`text-xs ${stat.changeType === 'positive' ? 'text-success' : 'text-destructive'}`}>
                  {stat.change}
                </span>
                <span className="text-xs text-muted-foreground">vs last month</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Courses */}
        <div className="lg:col-span-2">
          <Card className="gradient-card border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>Featured Courses Preview</span>
              </CardTitle>
              <CardDescription>
                Preview of new course features and enhancements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentCourses.map((course, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                  <div className="space-y-1">
                    <h3 className="font-medium">{course.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <Users className="h-3 w-3" />
                        <span>{course.students} students</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Star className="h-3 w-3" />
                        <span>{course.instructor}</span>
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Progress value={course.progress} className="w-24" />
                      <span className="text-sm text-muted-foreground">{course.progress}%</span>
                    </div>
                  </div>
                  <Badge 
                    variant="outline"
                    className="bg-blue-500/10 text-blue-700 border-blue-200"
                  >
                    Preview
                  </Badge>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                Explore New Features
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Events */}
        <div>
          <Card className="gradient-card border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Development Timeline</span>
              </CardTitle>
              <CardDescription>
                Feature release schedule and milestones
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium">{event.title}</h4>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{event.time}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {event.date}
                      </Badge>
                    </div>
                  </div>
                  {index < upcomingEvents.length - 1 && (
                    <div className="border-b border-border/60"></div>
                  )}
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View Roadmap
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <Card className="gradient-card border-0 shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5" />
            <span>Coming Soon Actions</span>
          </CardTitle>
          <CardDescription>
            Preview of new administrative tools and features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Button variant="outline" className="h-20 flex-col space-y-2" disabled>
              <BookOpen className="h-6 w-6" />
              <span className="text-sm">AI Course Builder</span>
            </Button>
            
            <Button variant="outline" className="h-20 flex-col space-y-2" disabled>
              <GraduationCap className="h-6 w-6" />
              <span className="text-sm">Smart Assessment</span>
            </Button>
            
            <Button variant="outline" className="h-20 flex-col space-y-2" disabled>
              <Users className="h-6 w-6" />
              <span className="text-sm">Bulk User Import</span>
            </Button>
            
            <Button variant="outline" className="h-20 flex-col space-y-2" disabled>
              <TrendingUp className="h-6 w-6" />
              <span className="text-sm">Advanced Analytics</span>
            </Button>
            
            <Button variant="outline" className="h-20 flex-col space-y-2" disabled>
              <AlertCircle className="h-6 w-6" />
              <span className="text-sm">Custom Reports</span>
            </Button>
            
            <Button variant="outline" className="h-20 flex-col space-y-2" disabled>
              <Award className="h-6 w-6" />
              <span className="text-sm">Badge System</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComingSoonPage;