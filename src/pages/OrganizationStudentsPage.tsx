import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getOrganizationDataFromPath } from "@/utils/organizationData";
import { 
  Users, 
  Search,
  Plus,
  Mail,
  Calendar,
  Award,
  TrendingUp,
  BookOpen
} from "lucide-react";

const OrganizationStudentsPage = () => {
  const { orgId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const orgData = getOrganizationDataFromPath(location.pathname);

  const students = [
    {
      id: 1,
      name: "Sarah Chen",
      email: "sarah.chen@stanford.edu",
      avatar: "/placeholder.svg",
      enrollmentDate: "Jan 2024",
      coursesCompleted: 5,
      coursesActive: 2,
      overallProgress: 78,
      status: "Active"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      email: "m.rodriguez@stanford.edu",
      avatar: "/placeholder.svg",
      enrollmentDate: "Feb 2024",
      coursesCompleted: 3,
      coursesActive: 3,
      overallProgress: 65,
      status: "Active"
    },
    {
      id: 3,
      name: "Emily Johnson",
      email: "emily.j@stanford.edu",
      avatar: "/placeholder.svg",
      enrollmentDate: "Dec 2023",
      coursesCompleted: 8,
      coursesActive: 1,
      overallProgress: 92,
      status: "Active"
    },
    {
      id: 4,
      name: "David Kim",
      email: "david.kim@stanford.edu",
      avatar: "/placeholder.svg",
      enrollmentDate: "Mar 2024",
      coursesCompleted: 1,
      coursesActive: 4,
      overallProgress: 34,
      status: "Inactive"
    }
  ];

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 md:mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Students</h1>
          <p className="text-muted-foreground">Manage student enrollment and progress</p>
        </div>
              <Button style={{ backgroundColor: orgData.primaryColor }} className="text-white">
                <Plus className="h-4 w-4 mr-2" />
                Add Students
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
                    onClick={() => navigate(`/${orgData.acronym}/add-students`)}
                  >
                    <Plus className="h-5 w-5" style={{ color: orgData.primaryColor }} />
                    <span className="text-sm">Add Students</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex flex-col items-center justify-center space-y-2"
                    onClick={() => navigate(`/${orgData.acronym}/courses`)}
                  >
                    <BookOpen className="h-5 w-5" style={{ color: orgData.primaryColor }} />
                    <span className="text-sm">View Courses</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex flex-col items-center justify-center space-y-2"
                    onClick={() => navigate(`/${orgData.acronym}/certificates`)}
                  >
                    <Award className="h-5 w-5" style={{ color: orgData.primaryColor }} />
                    <span className="text-sm">Certificates</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex flex-col items-center justify-center space-y-2"
                    onClick={() => navigate(`/${orgData.acronym}/analytics`)}
                  >
                    <TrendingUp className="h-5 w-5" style={{ color: orgData.primaryColor }} />
                    <span className="text-sm">Student Progress</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Total Students
                    </CardTitle>
                    <Users className="h-5 w-5" style={{ color: orgData.primaryColor }} />
                  </div>
                  <div className="text-3xl font-bold" style={{ color: orgData.primaryColor }}>
                    12,500
                  </div>
                </CardHeader>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Active This Month
                    </CardTitle>
                    <TrendingUp className="h-5 w-5" style={{ color: orgData.primaryColor }} />
                  </div>
                  <div className="text-3xl font-bold" style={{ color: orgData.primaryColor }}>
                    9,847
                  </div>
                </CardHeader>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Certificates Earned
                    </CardTitle>
                    <Award className="h-5 w-5" style={{ color: orgData.primaryColor }} />
                  </div>
                  <div className="text-3xl font-bold" style={{ color: orgData.primaryColor }}>
                    2,847
                  </div>
                </CardHeader>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Avg. Completion Rate
                    </CardTitle>
                    <TrendingUp className="h-5 w-5" style={{ color: orgData.primaryColor }} />
                  </div>
                  <div className="text-3xl font-bold" style={{ color: orgData.primaryColor }}>
                    89%
                  </div>
                </CardHeader>
              </Card>
            </div>

            {/* Search and Filters */}
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search students..." className="pl-9" />
                  </div>
                  <Button variant="outline">Filter</Button>
                  <Button variant="outline">Export</Button>
                </div>
              </CardContent>
            </Card>

            {/* Students List */}
            <Card>
              <CardHeader>
                <CardTitle>All Students</CardTitle>
                <CardDescription>Manage and track student progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {students.map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={student.avatar} alt={student.name} />
                          <AvatarFallback>
                            {student.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div>
                          <h3 className="font-semibold">{student.name}</h3>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Mail className="h-3 w-3" />
                            <span>{student.email}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <div className="text-sm font-medium">{student.coursesCompleted}</div>
                          <div className="text-xs text-muted-foreground">Completed</div>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-sm font-medium">{student.coursesActive}</div>
                          <div className="text-xs text-muted-foreground">Active</div>
                        </div>
                        
                        <div className="text-center min-w-16">
                          <div className="text-sm font-medium">{student.overallProgress}%</div>
                          <div className="text-xs text-muted-foreground">Progress</div>
                        </div>
                        
                        <Badge 
                          variant={student.status === 'Active' ? 'default' : 'secondary'}
                          className={student.status === 'Active' ? 'text-white' : ''}
                          style={student.status === 'Active' ? { backgroundColor: orgData.primaryColor } : {}}
                        >
                          {student.status}
                        </Badge>
                        
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            style={{ 
                              borderColor: orgData.primaryColor,
                              color: orgData.primaryColor 
                            }}
                          >
                            Edit
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
        </Card>
    </div>
  );
};

export default OrganizationStudentsPage;