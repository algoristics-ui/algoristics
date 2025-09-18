import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getOrganizationDataFromPath } from "@/utils/organizationData";
import { 
  UserCheck, 
  Search,
  Plus,
  Mail,
  BookOpen,
  Users,
  Star,
  Calendar,
  BarChart3
} from "lucide-react";

const OrganizationInstructorsPage = () => {
  const { orgId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const orgData = getOrganizationDataFromPath(location.pathname);

  const instructors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      email: "sarah.johnson@stanford.edu",
      avatar: "/placeholder.svg",
      department: "Computer Science",
      coursesTeaching: 3,
      totalStudents: 450,
      rating: 4.8,
      joinDate: "Sep 2020",
      status: "Active",
      specialization: "Machine Learning"
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      email: "m.chen@stanford.edu",
      avatar: "/placeholder.svg",
      department: "Data Science",
      coursesTeaching: 2,
      totalStudents: 320,
      rating: 4.7,
      joinDate: "Jan 2019",
      status: "Active",
      specialization: "Data Analytics"
    },
    {
      id: 3,
      name: "Dr. Lisa Wang",
      email: "lisa.wang@stanford.edu",
      avatar: "/placeholder.svg",
      department: "Computer Science",
      coursesTeaching: 4,
      totalStudents: 580,
      rating: 4.9,
      joinDate: "Mar 2018",
      status: "Active",
      specialization: "Neural Networks"
    },
    {
      id: 4,
      name: "Alex Rodriguez",
      email: "alex.r@stanford.edu",
      avatar: "/placeholder.svg",
      department: "Web Development",
      coursesTeaching: 2,
      totalStudents: 280,
      rating: 4.6,
      joinDate: "Aug 2021",
      status: "On Leave",
      specialization: "Full-Stack Development"
    }
  ];

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 md:mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Instructors</h1>
          <p className="text-muted-foreground">Manage teaching staff and performance</p>
        </div>
        <Button style={{ backgroundColor: orgData.primaryColor }} className="text-white">
          <Plus className="h-4 w-4 mr-2" />
          Add Instructor
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
              onClick={() => navigate(`/${orgData.acronym}/add-instructor`)}
            >
              <Plus className="h-5 w-5" style={{ color: orgData.primaryColor }} />
              <span className="text-sm">Add Instructor</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex flex-col items-center justify-center space-y-2"
              onClick={() => navigate(`/${orgData.acronym}/courses`)}
            >
              <BookOpen className="h-5 w-5" style={{ color: orgData.primaryColor }} />
              <span className="text-sm">Assign Courses</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex flex-col items-center justify-center space-y-2"
              onClick={() => navigate(`/${orgData.acronym}/analytics`)}
            >
              <BarChart3 className="h-5 w-5" style={{ color: orgData.primaryColor }} />
              <span className="text-sm">Performance</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex flex-col items-center justify-center space-y-2"
              onClick={() => navigate(`/${orgData.acronym}/reports`)}
            >
              <UserCheck className="h-5 w-5" style={{ color: orgData.primaryColor }} />
              <span className="text-sm">Reports</span>
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
              <Input placeholder="Search instructors..." className="pl-9" />
            </div>
            <Button variant="outline">Filter by Department</Button>
            <Button variant="outline">Filter by Status</Button>
            <Button variant="outline">Export</Button>
          </div>
        </CardContent>
      </Card>

      {/* Instructors List */}
      <Card>
        <CardHeader>
          <CardTitle>All Instructors</CardTitle>
          <CardDescription>Manage instructor profiles and performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {instructors.map((instructor) => (
              <div key={instructor.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={instructor.avatar} alt={instructor.name} />
                    <AvatarFallback>
                      {instructor.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold">{instructor.name}</h3>
                      <Badge 
                        variant={instructor.status === 'Active' ? 'default' : 'secondary'}
                        className={instructor.status === 'Active' ? 'text-white' : ''}
                        style={instructor.status === 'Active' ? { backgroundColor: orgData.primaryColor } : {}}
                      >
                        {instructor.status}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-1">
                      <Mail className="h-3 w-3" />
                      <span>{instructor.email}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{instructor.department}</span>
                      <span>•</span>
                      <span>{instructor.specialization}</span>
                      <span>•</span>
                      <span>Joined {instructor.joinDate}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-sm font-medium">{instructor.coursesTeaching}</div>
                    <div className="text-xs text-muted-foreground">Courses</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm font-medium">{instructor.totalStudents}</div>
                    <div className="text-xs text-muted-foreground">Students</div>
                  </div>
                  
                  <div className="text-center min-w-16">
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{instructor.rating}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      View Profile
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

export default OrganizationInstructorsPage;