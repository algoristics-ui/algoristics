import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { getOrganizationDataFromPath } from "@/utils/organizationData";
import { 
  GraduationCap,
  Users,
  Building,
  ArrowLeft,
  Eye,
  EyeOff
} from "lucide-react";

const OrganizationLoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { login } = useAuth();
  const orgData = getOrganizationDataFromPath(location.pathname);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState("learner");
  const [error, setError] = useState("");

  // Get role from URL params if provided
  useEffect(() => {
    const roleParam = searchParams.get('role');
    if (roleParam && ['learner', 'instructor', 'org_admin'].includes(roleParam)) {
      setSelectedRole(roleParam);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Use the standard login function with organization
      const success = await login(email, password, orgData.name);
      
      if (success) {
        // Redirect to appropriate dashboard based on role and organization
        const orgPath = location.pathname.replace('/login', '');
        
        if (selectedRole === 'learner') {
          navigate(`${orgPath}/learner/dashboard`);
        } else {
          navigate(`${orgPath}/dashboard`);
        }
      } else {
        setError("Invalid email or password. Please check your credentials.");
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const goBack = () => {
    const orgPath = location.pathname.replace('/login', '');
    navigate(orgPath);
  };

  const roleConfig = {
    learner: {
      title: "Student Login",
      description: "Access your courses and track your learning progress",
      icon: Users,
      color: orgData.primaryColor
    },
    instructor: {
      title: "Instructor Login", 
      description: "Manage your courses and student progress",
      icon: GraduationCap,
      color: orgData.primaryColor
    },
    org_admin: {
      title: "Administrator Login",
      description: "Manage your organization's learning platform",
      icon: Building,
      color: orgData.primaryColor
    }
  };

  const currentConfig = roleConfig[selectedRole as keyof typeof roleConfig];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header 
        className="py-6 px-6 text-white"
        style={{
          background: `linear-gradient(135deg, ${orgData.primaryColor}, ${orgData.secondaryColor})`
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white mr-4"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
              >
                {orgData.name.split(' ').map(word => word.charAt(0)).join('').toUpperCase().slice(0, 3)}
              </div>
              <div>
                <h1 className="text-2xl font-bold">{orgData.name}</h1>
                <p className="text-white/80 text-sm">Learning Management Platform</p>
              </div>
            </div>
            
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/20 hover:text-white font-medium bg-black/20 backdrop-blur-sm border border-white/30"
              onClick={goBack}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 bg-muted/30">
        <div className="w-full max-w-md">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${currentConfig.color}15` }}
                >
                  <currentConfig.icon className="h-8 w-8" style={{ color: currentConfig.color }} />
                </div>
              </div>
              <CardTitle className="text-2xl">{currentConfig.title}</CardTitle>
              <CardDescription className="text-base">
                {currentConfig.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              {/* Role Selection Tabs */}
              <Tabs value={selectedRole} onValueChange={setSelectedRole} className="mb-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="learner" className="text-xs">Student</TabsTrigger>
                  <TabsTrigger value="instructor" className="text-xs">Instructor</TabsTrigger>
                  <TabsTrigger value="org_admin" className="text-xs">Admin</TabsTrigger>
                </TabsList>
              </Tabs>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={`Enter your ${selectedRole === 'org_admin' ? 'admin' : selectedRole} email`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full text-white font-medium shadow-lg"
                  style={{ backgroundColor: currentConfig.color }}
                  disabled={isLoading}
                >
                  {isLoading ? "Signing In..." : "Sign In"}
                </Button>
              </form>

              {/* Demo Credentials */}
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium text-sm mb-2">Demo Credentials:</h4>
                <div className="text-xs text-muted-foreground space-y-1">
                  {orgData.acronym === 'stanford' && (
                    <>
                      <p><strong>Student:</strong> emma@student.edu / algoristic123</p>
                      <p><strong>Admin:</strong> sarah@university.edu / algoristic123</p>
                    </>
                  )}
                  {orgData.acronym === 'techcorp' && (
                    <>
                      <p><strong>Instructor:</strong> mike@techcorp.com / algoristic123</p>
                      <p><strong>Multi-Org Instructor:</strong> alex@consultant.com / algoristic123</p>
                    </>
                  )}
                  {orgData.acronym === 'citycollege' && (
                    <>
                      <p><strong>Student:</strong> jane@citycollege.edu / algoristic123</p>
                      <p><strong>Multi-Org Instructor:</strong> alex@consultant.com / algoristic123</p>
                    </>
                  )}
                  <p className="text-muted-foreground/80 mt-2">All accounts use password: <code>algoristic123</code></p>
                </div>
              </div>

              {/* Links */}
              <div className="mt-6 text-center space-y-2">
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Forgot your password?
                </a>
                <div className="text-sm text-muted-foreground">
                  Need help? <a href="#" className="hover:text-foreground">Contact Support</a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrganizationLoginPage;