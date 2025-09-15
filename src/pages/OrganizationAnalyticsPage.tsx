import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useParams, useLocation } from "react-router-dom";
import { getOrganizationDataFromPath } from "@/utils/organizationData";
import { 
  BarChart3, 
  TrendingUp,
  Users,
  BookOpen,
  Award,
  Download,
  Calendar
} from "lucide-react";

const OrganizationAnalyticsPage = () => {
  const { orgId } = useParams();
  const location = useLocation();
  const orgData = getOrganizationDataFromPath(location.pathname);
  

  const analyticsData = [
    {
      title: "Student Engagement",
      value: "87%",
      change: "+12%",
      description: "Average time spent on platform",
      icon: Users
    },
    {
      title: "Course Completion Rate",
      value: "89%",
      change: "+5%",
      description: "Students who complete courses",
      icon: BookOpen
    },
    {
      title: "Certificate Issuance",
      value: "2,847",
      change: "+23%",
      description: "Certificates issued this quarter",
      icon: Award
    },
    {
      title: "Monthly Active Users",
      value: "9,847",
      change: "+8%",
      description: "Students active in the last 30 days",
      icon: TrendingUp
    }
  ];

  const topPerformingCourses = [
    { name: "Introduction to Computer Science", completion: 92, enrolled: 1250 },
    { name: "Web Development Bootcamp", completion: 91, enrolled: 634 },
    { name: "Data Science Fundamentals", completion: 87, enrolled: 980 },
    { name: "Advanced Machine Learning", completion: 84, enrolled: 756 }
  ];

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 md:mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground">Detailed insights into your learning platform performance</p>
        </div>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Last 30 Days
                </Button>
                <Button style={{ backgroundColor: orgData.primaryColor }} className="text-white">
                  <Download className="h-4 w-4 mr-2" />
                  Export Report
                </Button>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
              {analyticsData.map((metric, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        {metric.title}
                      </CardTitle>
                      <metric.icon className="h-5 w-5" style={{ color: orgData.primaryColor }} />
                    </div>
                    <div className="space-y-1">
                      <div className="text-3xl font-bold" style={{ color: orgData.primaryColor }}>
                        {metric.value}
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-green-600 font-medium">{metric.change}</span>
                        <span className="text-xs text-muted-foreground">vs last period</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">{metric.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Engagement Chart Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5" style={{ color: orgData.primaryColor }} />
                    <span>Weekly Engagement Trends</span>
                  </CardTitle>
                  <CardDescription>Student activity over the past 12 weeks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-muted-foreground">Engagement chart would be displayed here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Top Performing Courses */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5" style={{ color: orgData.primaryColor }} />
                    <span>Top Performing Courses</span>
                  </CardTitle>
                  <CardDescription>Courses with highest completion rates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {topPerformingCourses.map((course, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h4 className="text-sm font-medium leading-tight">{course.name}</h4>
                        <div className="text-right">
                          <div className="text-sm font-medium">{course.completion}%</div>
                          <div className="text-xs text-muted-foreground">{course.enrolled} students</div>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="h-2 rounded-full"
                          style={{ 
                            width: `${course.completion}%`,
                            backgroundColor: orgData.primaryColor 
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Detailed Analytics Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Paths</CardTitle>
                  <CardDescription>Most popular learning sequences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-32 bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">Learning paths analytics</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Time to Completion</CardTitle>
                  <CardDescription>Average course completion times</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-32 bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">Completion time metrics</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Regional Performance</CardTitle>
                  <CardDescription>Performance by geographic region</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-32 bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">Regional analytics</p>
                  </div>
                </CardContent>
              </Card>
        </div>
    </div>
  );
};

export default OrganizationAnalyticsPage;