import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

const OrganizationSettingsPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 pb-6 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Manage your organization settings and preferences
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="w-5 h-5" />
              <span>Organization Settings</span>
            </CardTitle>
            <CardDescription>Configure your organization preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Organization settings will be available here. This is a placeholder for organization-specific settings.
            </p>
            <div className="mt-4">
              <Button>Save Settings</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrganizationSettingsPage;