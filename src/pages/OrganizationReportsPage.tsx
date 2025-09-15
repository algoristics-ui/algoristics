import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useParams, useLocation } from "react-router-dom";
import { getOrganizationDataFromPath } from "@/utils/organizationData";
import { 
  FileText, 
  Download,
  Plus,
  Calendar,
  BarChart3,
  Users,
  BookOpen,
  Clock,
  Search
} from "lucide-react";

const OrganizationReportsPage = () => {
  const { orgId } = useParams();
  const location = useLocation();
  const orgData = getOrganizationDataFromPath(location.pathname);

  const reports = [
    {
      id: 1,
      name: "Student Enrollment Report",
      description: "Detailed analysis of student enrollment trends and demographics",
      type: "Enrollment",
      generatedDate: "2024-03-01",
      period: "Q1 2024",
      status: "Ready",
      fileSize: "2.4 MB",
      format: "PDF"
    },
    {
      id: 2,
      name: "Course Completion Analytics",
      description: "Comprehensive overview of course completion rates and performance metrics",
      type: "Analytics",
      generatedDate: "2024-02-28",
      period: "February 2024",
      status: "Ready",
      fileSize: "1.8 MB",
      format: "Excel"
    },
    {
      id: 3,
      name: "Instructor Performance Review",
      description: "Assessment of instructor effectiveness and student feedback analysis",
      type: "Performance",
      generatedDate: "2024-02-25",
      period: "Q1 2024",
      status: "Ready",
      fileSize: "3.1 MB",
      format: "PDF"
    },
    {
      id: 4,
      name: "Certificate Issuance Summary",
      description: "Summary of certificates issued across all programs and courses",
      type: "Certificates",
      generatedDate: "2024-03-05",
      period: "YTD 2024",
      status: "Generating",
      fileSize: "Pending",
      format: "PDF"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Enrollment': return 'bg-blue-100 text-blue-800';
      case 'Analytics': return 'bg-green-100 text-green-800';
      case 'Performance': return 'bg-purple-100 text-purple-800';
      case 'Certificates': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 md:mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports</h1>
          <p className="text-muted-foreground">Generate and access comprehensive reports</p>
        </div>
        <Button style={{ backgroundColor: orgData.primaryColor }} className="text-white">
          <Plus className="h-4 w-4 mr-2" />
          Generate Custom Report
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
              onClick={() => window.location.href = `/custom-report`}
            >
              <Plus className="h-5 w-5" style={{ color: orgData.primaryColor }} />
              <span className="text-sm">Custom Report</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex flex-col items-center justify-center space-y-2"
              onClick={() => window.location.href = `/${orgData.acronym}/analytics`}
            >
              <BarChart3 className="h-5 w-5" style={{ color: orgData.primaryColor }} />
              <span className="text-sm">Analytics</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex flex-col items-center justify-center space-y-2"
              onClick={() => window.location.href = `/${orgData.acronym}/students`}
            >
              <Users className="h-5 w-5" style={{ color: orgData.primaryColor }} />
              <span className="text-sm">Student Reports</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex flex-col items-center justify-center space-y-2"
              onClick={() => window.location.href = `/${orgData.acronym}/courses`}
            >
              <BookOpen className="h-5 w-5" style={{ color: orgData.primaryColor }} />
              <span className="text-sm">Course Reports</span>
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
              <Input placeholder="Search reports..." className="pl-9" />
            </div>
            <Button variant="outline">Filter by Type</Button>
            <Button variant="outline">Filter by Period</Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export All
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Reports List */}
      <Card>
        <CardHeader>
          <CardTitle>All Reports</CardTitle>
          <CardDescription>View and manage all generated reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reports.map((report) => (
              <div key={report.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: `${orgData.primaryColor}15` }}>
                    <FileText className="h-5 w-5" style={{ color: orgData.primaryColor }} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold">{report.name}</h3>
                      <Badge className={getTypeColor(report.type)}>
                        {report.type}
                      </Badge>
                      <Badge 
                        variant={report.status === 'Ready' ? 'default' : 'secondary'}
                        className={report.status === 'Ready' ? 'text-white' : ''}
                        style={report.status === 'Ready' ? { backgroundColor: orgData.primaryColor } : {}}
                      >
                        {report.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{report.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>Period: {report.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>Generated: {report.generatedDate}</span>
                      </div>
                      <span>Size: {report.fileSize}</span>
                      <span>Format: {report.format}</span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  {report.status === 'Ready' && (
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  )}
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

export default OrganizationReportsPage;