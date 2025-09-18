import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getOrganizationDataFromPath } from "@/utils/organizationData";
import { 
  Settings, 
  Building,
  Palette,
  Users,
  Bell,
  Shield,
  Globe,
  Save,
  Search,
  Plus,
  BookOpen,
  BarChart3,
  UserCheck
} from "lucide-react";

const OrganizationSettingsPage = () => {
  const { orgId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const orgData = getOrganizationDataFromPath(location.pathname);
  

  return (
    <div className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 md:mb-6 gap-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Settings</h1>
                <p className="text-muted-foreground">Configure your organization's learning platform</p>
              </div>
              <Button style={{ backgroundColor: orgData.primaryColor }} className="text-white">
                <Save className="h-4 w-4 mr-2" />
                Save Changes
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
                    onClick={() => navigate(`/${orgData.acronym}/courses`)}
                  >
                    <BookOpen className="h-5 w-5" style={{ color: orgData.primaryColor }} />
                    <span className="text-sm">Manage Courses</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex flex-col items-center justify-center space-y-2"
                    onClick={() => navigate(`/${orgData.acronym}/instructors`)}
                  >
                    <UserCheck className="h-5 w-5" style={{ color: orgData.primaryColor }} />
                    <span className="text-sm">Manage Users</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex flex-col items-center justify-center space-y-2"
                    onClick={() => navigate(`/${orgData.acronym}/analytics`)}
                  >
                    <BarChart3 className="h-5 w-5" style={{ color: orgData.primaryColor }} />
                    <span className="text-sm">View Analytics</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex flex-col items-center justify-center space-y-2"
                    onClick={() => navigate(`/${orgData.acronym}/reports`)}
                  >
                    <Settings className="h-5 w-5" style={{ color: orgData.primaryColor }} />
                    <span className="text-sm">Advanced Settings</span>
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
                    <Input placeholder="Search settings..." className="pl-9" />
                  </div>
                  <Button variant="outline">Filter by Category</Button>
                  <Button variant="outline">Export Configuration</Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {/* Organization Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building className="h-5 w-5" style={{ color: orgData.primaryColor }} />
                    <span>Organization Details</span>
                  </CardTitle>
                  <CardDescription>Basic information about your organization</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="orgName">Organization Name</Label>
                      <Input id="orgName" defaultValue="Stanford University" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="orgUrl">Custom URL</Label>
                      <Input id="orgUrl" defaultValue="stanford.learningplatform.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="orgDescription">Description</Label>
                    <Textarea 
                      id="orgDescription" 
                      defaultValue="Leading research university dedicated to excellence in education and innovation."
                      rows={3}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactEmail">Contact Email</Label>
                      <Input id="contactEmail" defaultValue="admin@stanford.edu" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <Input id="timezone" defaultValue="Pacific Standard Time (PST)" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Branding */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Palette className="h-5 w-5" style={{ color: orgData.primaryColor }} />
                    <span>Branding & Appearance</span>
                  </CardTitle>
                  <CardDescription>Customize the look and feel of your portal</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="primaryColor">Primary Color</Label>
                      <div className="flex space-x-2">
                        <Input id="primaryColor" defaultValue="#8C1515" className="flex-1" />
                        <div 
                          className="w-10 h-10 rounded border"
                          style={{ backgroundColor: orgData.primaryColor }}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="logoUrl">Logo URL</Label>
                      <Input id="logoUrl" defaultValue="/placeholder.svg" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="headerImage">Header Background Image</Label>
                    <Input id="headerImage" defaultValue="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b" />
                  </div>
                </CardContent>
              </Card>

              {/* User Management */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5" style={{ color: orgData.primaryColor }} />
                    <span>User Management</span>
                  </CardTitle>
                  <CardDescription>Control user access and permissions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Auto-approve new students</Label>
                      <p className="text-sm text-muted-foreground">Automatically approve student registrations</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Require email verification</Label>
                      <p className="text-sm text-muted-foreground">Students must verify their email address</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Allow instructor self-registration</Label>
                      <p className="text-sm text-muted-foreground">Let instructors create their own accounts</p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>

              {/* Notifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="h-5 w-5" style={{ color: orgData.primaryColor }} />
                    <span>Notifications</span>
                  </CardTitle>
                  <CardDescription>Configure notification preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Course completion notifications</Label>
                      <p className="text-sm text-muted-foreground">Email notifications when students complete courses</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Weekly progress reports</Label>
                      <p className="text-sm text-muted-foreground">Automated weekly reports to administrators</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>New enrollment notifications</Label>
                      <p className="text-sm text-muted-foreground">Alert when new students enroll</p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>

              {/* Security */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5" style={{ color: orgData.primaryColor }} />
                    <span>Security</span>
                  </CardTitle>
                  <CardDescription>Security and privacy settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Two-factor authentication required</Label>
                      <p className="text-sm text-muted-foreground">Require 2FA for all administrators</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Session timeout</Label>
                      <p className="text-sm text-muted-foreground">Automatically log out inactive users</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sessionDuration">Session Duration (minutes)</Label>
                    <Input id="sessionDuration" defaultValue="120" type="number" className="w-32" />
                  </div>
                </CardContent>
              </Card>

              {/* Integration */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Globe className="h-5 w-5" style={{ color: orgData.primaryColor }} />
                    <span>Integrations</span>
                  </CardTitle>
                  <CardDescription>Connect with external services</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>SSO Integration</Label>
                      <p className="text-sm text-muted-foreground">Single Sign-On with your organization's identity provider</p>
                    </div>
                    <Button variant="outline">Configure</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Google Analytics</Label>
                      <p className="text-sm text-muted-foreground">Track portal usage and performance</p>
                    </div>
                    <Button variant="outline">Connect</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>LTI Integration</Label>
                      <p className="text-sm text-muted-foreground">Learning Tools Interoperability for external content</p>
                    </div>
                    <Button variant="outline">Setup</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
    </div>
  );
};

export default OrganizationSettingsPage;