import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  BookOpen, 
  Award,
  BarChart3,
  PieChart,
  Activity,
  Target
} from "lucide-react";

const AnalyticsPage = () => {
  const keyMetrics = [
    {
      title: "Total Learners",
      value: "2,847",
      change: "+18%",
      changeType: "positive" as const,
      icon: Users,
      description: "Active enrolled students"
    },
    {
      title: "Course Completion",
      value: "87.3%",
      change: "+5.2%",
      changeType: "positive" as const,
      icon: Award,
      description: "Average completion rate"
    },
    {
      title: "Engagement Score",
      value: "94.1",
      change: "+2.8%",
      changeType: "positive" as const,
      icon: Activity,
      description: "Learning engagement index"
    },
    {
      title: "Knowledge Retention",
      value: "76.4%",
      change: "-1.2%",
      changeType: "negative" as const,
      icon: Target,
      description: "Long-term retention rate"
    }
  ];

  const coursePerformance = [
    { name: "React Development", students: 145, completion: 92, satisfaction: 4.8 },
    { name: "Data Science", students: 267, completion: 87, satisfaction: 4.9 },
    { name: "Machine Learning", students: 89, completion: 76, satisfaction: 4.7 },
    { name: "Cloud Computing", students: 198, completion: 94, satisfaction: 4.6 },
    { name: "Cybersecurity", students: 134, completion: 89, satisfaction: 4.8 }
  ];

  const learningTrends = [
    { period: "Week 1", completed: 120, started: 180 },
    { period: "Week 2", completed: 145, started: 160 },
    { period: "Week 3", completed: 167, started: 195 },
    { period: "Week 4", completed: 189, started: 220 },
    { period: "Week 5", completed: 203, started: 210 },
    { period: "Week 6", completed: 178, started: 190 }
  ];

  const assessmentMetrics = [
    { type: "Multiple Choice", count: 1247, avgScore: 82.4 },
    { type: "Coding Challenges", count: 456, avgScore: 78.9 },
    { type: "Essay Questions", count: 234, avgScore: 84.2 },
    { type: "Project Reviews", count: 123, avgScore: 86.7 }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-primary via-primary/95 to-primary/90 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/60" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 pt-8 px-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                Platform Analytics
              </h1>
              <p className="text-base md:text-lg text-white/95 max-w-2xl mx-auto drop-shadow-sm">
                Track learning outcomes and platform performance metrics
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
              <Button variant="outline" className="border-white/50 text-white bg-white/10 hover:bg-white/20 hover:text-white hover:border-white/70 font-semibold w-full sm:w-auto backdrop-blur-sm">
                <TrendingUp className="w-4 h-4 mr-2" />
                Export Report
              </Button>
              <Button className="bg-white text-primary hover:bg-white/90 hover:text-primary font-semibold px-6 md:px-8 py-3 w-full sm:w-auto">
                <BarChart3 className="w-4 h-4 mr-2" />
                Generate Insights
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="py-16 -mt-8 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {keyMetrics.map((metric, index) => (
                  <Card key={index} className="gradient-card border-0 shadow-soft hover:shadow-medium transition-smooth">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        {metric.title}
                      </CardTitle>
                      <metric.icon className="h-5 w-5 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">{metric.value}</div>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className={`text-sm font-medium ${metric.changeType === 'positive' ? 'text-success' : 'text-destructive'}`}>
                          {metric.change}
                        </span>
                        <span className="text-sm text-muted-foreground">vs last month</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">{metric.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {/* Learning Trends Chart */}
                <Card className="lg:col-span-2 gradient-card border-0 shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BarChart3 className="h-5 w-5" />
                      <span>Learning Trends</span>
                    </CardTitle>
                    <CardDescription>
                      Course starts vs completions over time
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {learningTrends.map((week, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">{week.period}</span>
                            <div className="flex items-center space-x-4">
                              <span className="text-primary">Started: {week.started}</span>
                              <span className="text-success">Completed: {week.completed}</span>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <div className="flex-1 bg-muted rounded-full h-2">
                              <div 
                                className="bg-primary h-2 rounded-full" 
                                style={{ width: `${(week.started / 250) * 100}%` }}
                              ></div>
                            </div>
                            <div className="flex-1 bg-muted rounded-full h-2">
                              <div 
                                className="bg-success h-2 rounded-full" 
                                style={{ width: `${(week.completed / 250) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Top Performers */}
                <Card className="gradient-card border-0 shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5" />
                      <span>Top Performing Courses</span>
                    </CardTitle>
                    <CardDescription>
                      Ranked by completion rate
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {coursePerformance.slice(0, 5).map((course, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-sm">{course.name}</h4>
                          <Badge variant="outline" className="text-xs">
                            {course.completion}%
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{course.students} students</span>
                          <span>⭐ {course.satisfaction}</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-1.5">
                          <div 
                            className="bg-primary h-1.5 rounded-full" 
                            style={{ width: `${course.completion}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Assessment Analytics */}
              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="gradient-card border-0 shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <PieChart className="h-5 w-5" />
                      <span>Assessment Performance</span>
                    </CardTitle>
                    <CardDescription>
                      Performance across different assessment types
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {assessmentMetrics.map((assessment, index) => (
                        <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                          <div>
                            <h4 className="font-medium">{assessment.type}</h4>
                            <p className="text-sm text-muted-foreground">{assessment.count} assessments</p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold">{assessment.avgScore}%</div>
                            <div className="text-xs text-muted-foreground">Avg Score</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Engagement Insights */}
                <Card className="gradient-card border-0 shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Activity className="h-5 w-5" />
                      <span>Engagement Insights</span>
                    </CardTitle>
                    <CardDescription>
                      Key learning behavior patterns
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Peak Learning Hours</span>
                          <span className="text-sm text-muted-foreground">2:00 PM - 4:00 PM</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full w-3/4"></div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Mobile vs Desktop</span>
                          <span className="text-sm text-muted-foreground">64% / 36%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 flex">
                          <div className="bg-primary h-2 rounded-l-full w-16"></div>
                          <div className="bg-secondary h-2 rounded-r-full w-9"></div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Video Completion Rate</span>
                          <span className="text-sm text-muted-foreground">82.4%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-success h-2 rounded-full" style={{ width: '82.4%' }}></div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border/60">
                        <h4 className="font-medium mb-3">Key Insights</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-start space-x-2">
                            <div className="w-2 h-2 rounded-full bg-success mt-1.5"></div>
                            <span className="text-muted-foreground">Students prefer shorter video segments (5-7 minutes)</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <div className="w-2 h-2 rounded-full bg-warning mt-1.5"></div>
                            <span className="text-muted-foreground">Interactive assessments show 23% higher engagement</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
                            <span className="text-muted-foreground">Weekend study sessions have lower completion rates</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
          </div> {/* Close max-w-6xl */}
        </div> {/* Close container */}
      </div> {/* Close py-16 section */}
    </div> 
  );
};

export default AnalyticsPage;