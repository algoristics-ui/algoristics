import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useParams } from "react-router-dom";
import { OrganizationLayout } from "@/components/OrganizationLayout";
import { 
  BookOpen, 
  Search,
  Plus,
  Users,
  Clock,
  CheckCircle,
  ClipboardList,
  BarChart3
} from "lucide-react";

const OrganizationCoursesPage = () => {
  const { orgId } = useParams();

  const courses = [
    {
      id: 1,
      title: "Introduction to Computer Science",
      description: "Fundamental concepts of programming and computer science",
      instructor: "Prof. Sarah Johnson",
      enrolled: 1250,
      duration: "12 weeks",
      status: "Active",
      completion: 92
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      description: "Learn the basics of data analysis and machine learning",
      instructor: "Dr. Michael Chen",
      enrolled: 980,
      duration: "10 weeks",
      status: "Active",
      completion: 87
    },
    {
      id: 3,
      title: "Advanced Machine Learning",
      description: "Deep dive into ML algorithms and neural networks",
      instructor: "Prof. Lisa Wang",
      enrolled: 756,
      duration: "16 weeks",
      status: "Active",
      completion: 84
    },
    {
      id: 4,
      title: "Web Development Bootcamp",
      description: "Full-stack web development with modern frameworks",
      instructor: "Alex Rodriguez",
      enrolled: 634,
      duration: "14 weeks",
      status: "Draft",
      completion: 91
    }
  ];

  return (
    <OrganizationLayout 
      orgId={orgId}
      title="Courses"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 md:mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Courses</h1>
          <p className="text-muted-foreground">Manage your organization's course catalog</p>
        </div>
              <Button style={{ backgroundColor: orgData.primaryColor }} className="text-white">
                <Plus className="h-4 w-4 mr-2" />
                Create Course
              </Button>
            </div>

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
                    className="h-20 flex flex-col items-center justify-center space-y-2"
                    onClick={() => window.location.href = `/new-course`}
                  >
                    <Plus className="h-5 w-5" style={{ color: orgData.primaryColor }} />
                    <span className="text-sm">Create Course</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex flex-col items-center justify-center space-y-2"
                    onClick={() => window.location.href = `/portal/${orgId}/students`}
                  >
                    <Users className="h-5 w-5" style={{ color: orgData.primaryColor }} />
                    <span className="text-sm">View Students</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex flex-col items-center justify-center space-y-2"
                    onClick={() => window.location.href = `/portal/${orgId}/assessments`}
                  >
                    <ClipboardList className="h-5 w-5" style={{ color: orgData.primaryColor }} />
                    <span className="text-sm">Create Assessment</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex flex-col items-center justify-center space-y-2"
                    onClick={() => window.location.href = `/portal/${orgId}/analytics`}
                  >
                    <BarChart3 className="h-5 w-5" style={{ color: orgData.primaryColor }} />
                    <span className="text-sm">View Analytics</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Search and Filters */}
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search courses..." className="pl-9" />
                  </div>
                  <Button variant="outline">Filter</Button>
                </div>
              </CardContent>
            </Card>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{course.title}</CardTitle>
                        <CardDescription className="text-sm mb-3">
                          {course.description}
                        </CardDescription>
                      </div>
                      <Badge 
                        variant={course.status === 'Active' ? 'default' : 'secondary'}
                        className={course.status === 'Active' ? 'text-white' : ''}
                        style={course.status === 'Active' ? { backgroundColor: orgData.primaryColor } : {}}
                      >
                        {course.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Instructor:</span>
                        <span className="font-medium">{course.instructor}</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{course.enrolled} enrolled</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{course.duration}</span>
                        </div>
                      </div>

                      {course.status === 'Active' && (
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Completion Rate</span>
                            <span>{course.completion}%</span>
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
                      )}

                      <div className="flex space-x-2 pt-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          View
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          style={{ 
                            borderColor: orgData.primaryColor,
                            color: orgData.primaryColor 
                          }}
                        >
                          Edit
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
        </div>
    </OrganizationLayout>
  );
};

export default OrganizationCoursesPage;