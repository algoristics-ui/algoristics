import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardLayout from "@/components/DashboardLayout";
import Index from "./pages/Index";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import CoursesPage from "./pages/CoursesPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import AssessmentsPage from "./pages/AssessmentsPage";
import ReportsPage from "./pages/ReportsPage";
import StudentsPage from "./pages/StudentsPage";
import InstructorsPage from "./pages/InstructorsPage";
import OrganizationsPage from "./pages/OrganizationsPage";
import SettingsPage from "./pages/SettingsPage";
import { NewCoursePage } from "./pages/NewCoursePage";
import { CreateAssessmentPage } from "./pages/CreateAssessmentPage";
import { AddStudentsPage } from "./pages/AddStudentsPage";
import { CertificatesPage } from "./pages/CertificatesPage";
import CreateOrganizationPage from "./pages/CreateOrganizationPage";
import StanfordPortalPage from "./pages/StanfordPortalPage";
import TechCorpPortalPage from "./pages/TechCorpPortalPage";
import CityCollegePortalPage from "./pages/CityCollegePortalPage";
import OrganizationDashboardPage from "./pages/OrganizationDashboardPage";
import OrganizationCoursesPage from "./pages/OrganizationCoursesPage";
import OrganizationStudentsPage from "./pages/OrganizationStudentsPage";
import OrganizationAnalyticsPage from "./pages/OrganizationAnalyticsPage";
import OrganizationAssessmentsPage from "./pages/OrganizationAssessmentsPage";
import OrganizationCertificatesPage from "./pages/OrganizationCertificatesPage";
import OrganizationReportsPage from "./pages/OrganizationReportsPage";
import OrganizationInstructorsPage from "./pages/OrganizationInstructorsPage";
import OrganizationSettingsPage from "./pages/OrganizationSettingsPage";
import OrganizationNewsFeedPage from "./pages/OrganizationNewsFeedPage";
import NotFound from "./pages/NotFound";
import RequestDemoPage from "./pages/RequestDemoPage";
import WatchVideoPage from "./pages/WatchVideoPage";
import ConsultationPage from "./pages/ConsultationPage";
import GetStartedPage from "./pages/GetStartedPage";
import GlobalUsersPage from "./pages/GlobalUsersPage";
import PerformancePage from "./pages/PerformancePage";
import SecurityPage from "./pages/SecurityPage";
import InfrastructurePage from "./pages/InfrastructurePage";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/request-demo" element={<RequestDemoPage />} />
            <Route path="/watch-video" element={<WatchVideoPage />} />
            <Route path="/consultation" element={<ConsultationPage />} />
            <Route path="/get-started" element={<GetStartedPage />} />
            
            {/* Protected Dashboard Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <DashboardPage />
                </DashboardLayout>
              </ProtectedRoute>
            } />
            
            <Route path="/courses" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <CoursesPage />
                </DashboardLayout>
              </ProtectedRoute>
            } />
            
            <Route path="/analytics" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <AnalyticsPage />
                </DashboardLayout>
              </ProtectedRoute>
            } />
            
            {/* Placeholder routes for other sections */}
            <Route path="/assessments" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <AssessmentsPage />
                </DashboardLayout>
              </ProtectedRoute>
            } />
            
            <Route path="/reports" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <ReportsPage />
                </DashboardLayout>
              </ProtectedRoute>
            } />
            
            <Route path="/students" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <StudentsPage />
                </DashboardLayout>
              </ProtectedRoute>
            } />
            
            <Route path="/instructors" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <InstructorsPage />
                </DashboardLayout>
              </ProtectedRoute>
            } />
            
            <Route path="/organizations" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <OrganizationsPage />
                </DashboardLayout>
              </ProtectedRoute>
            } />
            
            <Route path="/settings" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <SettingsPage />
                </DashboardLayout>
              </ProtectedRoute>
            } />
            
            <Route path="/new-course" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <NewCoursePage />
                </DashboardLayout>
              </ProtectedRoute>
            } />
            
            <Route path="/create-assessment" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <CreateAssessmentPage />
                </DashboardLayout>
              </ProtectedRoute>
            } />
            
            <Route path="/add-students" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <AddStudentsPage />
                </DashboardLayout>
              </ProtectedRoute>
            } />
            
            <Route path="/certificates" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <CertificatesPage />
                </DashboardLayout>
              </ProtectedRoute>
            } />

            <Route path="/users" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <GlobalUsersPage />
                </DashboardLayout>
              </ProtectedRoute>
            } />

            <Route path="/performance" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <PerformancePage />
                </DashboardLayout>
              </ProtectedRoute>
            } />

            <Route path="/security" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <SecurityPage />
                </DashboardLayout>
              </ProtectedRoute>
            } />

            <Route path="/infrastructure" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <InfrastructurePage />
                </DashboardLayout>
              </ProtectedRoute>
            } />


            <Route path="/newsfeed" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <OrganizationNewsFeedPage />
                </DashboardLayout>
              </ProtectedRoute>
            } />

            <Route path="/create-organization" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <CreateOrganizationPage />
                </DashboardLayout>
              </ProtectedRoute>
            } />

            {/* Organization Portal Routes */}
            <Route path="/portal/1" element={<StanfordPortalPage />} />
            <Route path="/portal/2" element={<TechCorpPortalPage />} />
            <Route path="/portal/3" element={<CityCollegePortalPage />} />
            <Route path="/portal/4" element={<CityCollegePortalPage />} />
            <Route path="/portal/5" element={<TechCorpPortalPage />} />
            <Route path="/portal/6" element={<CityCollegePortalPage />} />
            <Route path="/portal/7" element={<TechCorpPortalPage />} />
            <Route path="/portal/8" element={<TechCorpPortalPage />} />
            <Route path="/portal/9" element={<StanfordPortalPage />} />

            {/* Organization Portal Sub-routes */}
            <Route path="/portal/:orgId/dashboard" element={<OrganizationDashboardPage />} />
            <Route path="/portal/:orgId/courses" element={<OrganizationCoursesPage />} />
            <Route path="/portal/:orgId/students" element={<OrganizationStudentsPage />} />
            <Route path="/portal/:orgId/analytics" element={<OrganizationAnalyticsPage />} />
            <Route path="/portal/:orgId/assessments" element={<OrganizationAssessmentsPage />} />
            <Route path="/portal/:orgId/certificates" element={<OrganizationCertificatesPage />} />
            <Route path="/portal/:orgId/reports" element={<OrganizationReportsPage />} />
            <Route path="/portal/:orgId/instructors" element={<OrganizationInstructorsPage />} />
            <Route path="/portal/:orgId/newsfeed" element={<OrganizationNewsFeedPage />} />
            <Route path="/portal/:orgId/settings" element={<OrganizationSettingsPage />} />

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
