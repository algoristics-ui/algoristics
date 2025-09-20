import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getOrganizationDataFromPath } from "@/utils/organizationData";
import { useAuth } from "@/contexts/AuthContext";
import { 
  Award, 
  Search,
  Plus,
  Download,
  Calendar,
  User,
  BookOpen,
  Users,
  BarChart3
} from "lucide-react";

const OrganizationCertificatesPage = () => {
  const { user } = useAuth();
  const { orgId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const orgData = getOrganizationDataFromPath(location.pathname);

  // Role-based certificate data
  const getCertificatesForRole = () => {
    if (user?.role === 'instructor') {
      // Instructor sees only certificates from their courses
      return [
        {
          id: 1,
          studentName: "Sarah Chen",
          courseName: "Advanced JavaScript Fundamentals",
          issueDate: "2024-01-15",
          certificateId: "CERT-JS-001-2024",
          status: "Issued",
          downloadUrl: "#",
          instructor: user?.name || "Prof. Johnson",
          grade: "A+",
          completionDate: "2024-01-10"
        },
        {
          id: 2,
          studentName: "Michael Rodriguez", 
          courseName: "Data Structures & Algorithms",
          issueDate: "2024-02-03",
          certificateId: "CERT-DS-002-2024",
          status: "Issued",
          downloadUrl: "#",
          instructor: user?.name || "Prof. Johnson",
          grade: "A",
          completionDate: "2024-01-28"
        },
        {
          id: 3,
          studentName: "Emily Johnson",
          courseName: "Advanced JavaScript Fundamentals",
          issueDate: "2024-02-20",
          certificateId: "CERT-JS-003-2024",
          status: "Processing",
          downloadUrl: "#",
          instructor: user?.name || "Prof. Johnson",
          grade: "A-",
          completionDate: "2024-02-15"
        }
      ];
    }
    
    // Admin sees all certificates organization-wide
    return [
      {
        id: 1,
        studentName: "Sarah Chen",
        courseName: "Introduction to Computer Science",
        issueDate: "2024-01-15",
        certificateId: "CERT-CS-001-2024",
        status: "Issued",
        downloadUrl: "#",
        instructor: "Prof. Johnson",
        grade: "A+",
        completionDate: "2024-01-10"
      },
      {
        id: 2,
        studentName: "Michael Rodriguez",
        courseName: "Data Science Fundamentals",
        issueDate: "2024-02-03",
        certificateId: "CERT-DS-002-2024",
        status: "Issued",
        downloadUrl: "#",
        instructor: "Dr. Sarah Wang",
        grade: "A",
        completionDate: "2024-01-28"
      },
      {
        id: 3,
        studentName: "Emily Johnson",
        courseName: "Advanced Machine Learning",
        issueDate: "2024-02-20",
        certificateId: "CERT-ML-003-2024",
        status: "Issued",
        downloadUrl: "#",
        instructor: "Prof. Lisa Wang",
        grade: "B+",
        completionDate: "2024-02-15"
      },
      {
        id: 4,
        studentName: "David Kim",
        courseName: "Web Development Bootcamp",
        issueDate: "2024-03-10",
        certificateId: "CERT-WD-004-2024",
        status: "Processing",
        downloadUrl: "#",
        instructor: "Alex Rodriguez",
        grade: "A-",
        completionDate: "2024-03-05"
      },
      {
        id: 5,
        studentName: "Lisa Thompson",
        courseName: "Database Design Principles",
        issueDate: "2024-03-15",
        certificateId: "CERT-DB-005-2024", 
        status: "Issued",
        downloadUrl: "#",
        instructor: "Prof. Michael Chen",
        grade: "A",
        completionDate: "2024-03-10"
      }
    ];
  };

  const certificates = getCertificatesForRole();

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 md:mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Certificates</h1>
          <p className="text-muted-foreground">Manage and track issued certificates</p>
        </div>
        <Button style={{ backgroundColor: orgData.primaryColor }} className="text-white">
          <Plus className="h-4 w-4 mr-2" />
          Issue Certificate
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
              onClick={() => navigate(`/${orgData.acronym}/issue-certificate`)}
            >
              <Plus className="h-5 w-5" style={{ color: orgData.primaryColor }} />
              <span className="text-sm">Issue Certificate</span>
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
              onClick={() => navigate(`/${orgData.acronym}/students`)}
            >
              <Users className="h-5 w-5" style={{ color: orgData.primaryColor }} />
              <span className="text-sm">View Students</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex flex-col items-center justify-center space-y-2"
              onClick={() => navigate(`/${orgData.acronym}/analytics`)}
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
              <Input placeholder="Search certificates..." className="pl-9" />
            </div>
            <Button variant="outline">Filter by Course</Button>
            <Button variant="outline">Filter by Status</Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Certificates List */}
      <Card>
        <CardHeader>
          <CardTitle>Issued Certificates</CardTitle>
          <CardDescription>View and manage all certificates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {certificates.map((certificate) => (
              <div key={certificate.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: `${orgData.primaryColor}15` }}>
                    <Award className="h-5 w-5" style={{ color: orgData.primaryColor }} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold">{certificate.courseName}</h3>
                      <Badge 
                        variant={certificate.status === 'Issued' ? 'default' : 'secondary'}
                        className={certificate.status === 'Issued' ? 'text-white' : ''}
                        style={certificate.status === 'Issued' ? { backgroundColor: orgData.primaryColor } : {}}
                      >
                        {certificate.status}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{certificate.studentName}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>Issued: {certificate.issueDate}</span>
                      </div>
                      <span>ID: {certificate.certificateId}</span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    style={{ 
                      borderColor: orgData.primaryColor,
                      color: orgData.primaryColor 
                    }}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrganizationCertificatesPage;