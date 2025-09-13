import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useParams } from "react-router-dom";
import { OrganizationLayout } from "@/components/OrganizationLayout";
import { 
  Megaphone,
  Plus,
  Edit,
  Trash2,
  Eye,
  AlertCircle,
  BookOpen,
  ClipboardList,
  Calendar
} from "lucide-react";

const OrganizationNewsFeedPage = () => {
  const { orgId } = useParams();
  

  const [newsFeedItems, setNewsFeedItems] = useState([
    {
      id: 1,
      type: "due_date",
      title: "Course Completion Due",
      content: "Complete 'Data Science Fundamentals' by March 15th to maintain your certification progress.",
      priority: "high",
      date: "2024-03-15",
      createdAt: "2024-03-01",
      author: "Admin"
    },
    {
      id: 2,
      type: "new_course",
      title: "New Course Available",
      content: "Advanced Machine Learning course is now available. Enroll today to enhance your AI skills.",
      priority: "medium",
      date: "2024-03-10",
      createdAt: "2024-03-05",
      author: "Course Director"
    },
    {
      id: 3,
      type: "assessment",
      title: "Assessment Reminder",
      content: "Midterm assessment for 'Cloud Computing' opens tomorrow. Prepare and schedule your exam.",
      priority: "high",
      date: "2024-03-12",
      createdAt: "2024-03-08",
      author: "Assessment Team"
    },
    {
      id: 4,
      type: "announcement",
      title: "Spring Break Schedule",
      content: "University will be closed from March 25-29. All online courses remain accessible during this period.",
      priority: "low",
      date: "2024-03-25",
      createdAt: "2024-03-01",
      author: "Admin"
    }
  ]);

  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [newItem, setNewItem] = useState({
    type: "",
    title: "",
    content: "",
    priority: "",
    date: ""
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'due_date': return AlertCircle;
      case 'new_course': return BookOpen;
      case 'assessment': return ClipboardList;
      case 'announcement': return Megaphone;
      default: return Megaphone;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#10b981';
      default: return orgData.primaryColor;
    }
  };

  const handleCreate = () => {
    const id = Math.max(...newsFeedItems.map(item => item.id)) + 1;
    setNewsFeedItems([...newsFeedItems, {
      ...newItem,
      id,
      createdAt: new Date().toISOString().split('T')[0],
      author: "Admin"
    }]);
    setNewItem({ type: "", title: "", content: "", priority: "", date: "" });
    setIsCreateDialogOpen(false);
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    setNewItem({
      type: item.type,
      title: item.title,
      content: item.content,
      priority: item.priority,
      date: item.date
    });
    setIsEditDialogOpen(true);
  };

  const handleUpdate = () => {
    setNewsFeedItems(newsFeedItems.map(item => 
      item.id === selectedItem.id 
        ? { ...item, ...newItem }
        : item
    ));
    setIsEditDialogOpen(false);
    setSelectedItem(null);
    setNewItem({ type: "", title: "", content: "", priority: "", date: "" });
  };

  const handleDelete = (id) => {
    setNewsFeedItems(newsFeedItems.filter(item => item.id !== id));
  };

  return (
    <OrganizationLayout 
      orgId={orgId}
      title="News Feed Management"
    >
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">News Feed Management</h1>
          <p className="text-muted-foreground">Create and manage announcements for your organization</p>
        </div>
              
              <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
                <DialogTrigger asChild>
                  <Button style={{ backgroundColor: orgData.primaryColor }} className="text-white">
                    <Plus className="h-4 w-4 mr-2" />
                    Create News Item
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Create News Item</DialogTitle>
                    <DialogDescription>
                      Add a new announcement or news item for your organization.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="type">Type</Label>
                        <Select value={newItem.type} onValueChange={(value) => setNewItem({...newItem, type: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="announcement">Announcement</SelectItem>
                            <SelectItem value="new_course">New Course</SelectItem>
                            <SelectItem value="assessment">Assessment</SelectItem>
                            <SelectItem value="due_date">Due Date</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="priority">Priority</Label>
                        <Select value={newItem.priority} onValueChange={(value) => setNewItem({...newItem, priority: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select priority" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="low">Low</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title">Title</Label>
                      <Input 
                        id="title"
                        value={newItem.title}
                        onChange={(e) => setNewItem({...newItem, title: e.target.value})}
                        placeholder="Enter news item title"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="content">Content</Label>
                      <Textarea 
                        id="content"
                        value={newItem.content}
                        onChange={(e) => setNewItem({...newItem, content: e.target.value})}
                        placeholder="Enter news item content"
                        rows={3}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date">Event Date</Label>
                      <Input 
                        id="date"
                        type="date"
                        value={newItem.date}
                        onChange={(e) => setNewItem({...newItem, date: e.target.value})}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleCreate} style={{ backgroundColor: orgData.primaryColor }} className="text-white">
                      Create
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            {/* News Feed Items */}
            <div className="grid gap-4">
              {newsFeedItems.map((item) => {
                const TypeIcon = getTypeIcon(item.type);
                return (
                  <Card key={item.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <TypeIcon 
                            className="h-5 w-5" 
                            style={{ color: getPriorityColor(item.priority) }}
                          />
                          <div>
                            <CardTitle className="text-lg">{item.title}</CardTitle>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge 
                                variant="secondary"
                                style={{ 
                                  backgroundColor: `${getPriorityColor(item.priority)}20`,
                                  color: getPriorityColor(item.priority)
                                }}
                              >
                                {item.priority.toUpperCase()}
                              </Badge>
                              <Badge variant="outline">
                                {item.type.replace('_', ' ').toUpperCase()}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm" onClick={() => handleEdit(item)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleDelete(item.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3">{item.content}</p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-4">
                          <span>Event Date: {new Date(item.date).toLocaleDateString()}</span>
                          <span>Created: {new Date(item.createdAt).toLocaleDateString()}</span>
                          <span>By: {item.author}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
      </div>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Edit News Item</DialogTitle>
            <DialogDescription>
              Update the announcement or news item details.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-type">Type</Label>
                <Select value={newItem.type} onValueChange={(value) => setNewItem({...newItem, type: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="announcement">Announcement</SelectItem>
                    <SelectItem value="new_course">New Course</SelectItem>
                    <SelectItem value="assessment">Assessment</SelectItem>
                    <SelectItem value="due_date">Due Date</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-priority">Priority</Label>
                <Select value={newItem.priority} onValueChange={(value) => setNewItem({...newItem, priority: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-title">Title</Label>
              <Input 
                id="edit-title"
                value={newItem.title}
                onChange={(e) => setNewItem({...newItem, title: e.target.value})}
                placeholder="Enter news item title"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-content">Content</Label>
              <Textarea 
                id="edit-content"
                value={newItem.content}
                onChange={(e) => setNewItem({...newItem, content: e.target.value})}
                placeholder="Enter news item content"
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-date">Event Date</Label>
              <Input 
                id="edit-date"
                type="date"
                value={newItem.date}
                onChange={(e) => setNewItem({...newItem, date: e.target.value})}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleUpdate} style={{ backgroundColor: orgData.primaryColor }} className="text-white">
              Update
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </OrganizationLayout>
  );
};

export default OrganizationNewsFeedPage;