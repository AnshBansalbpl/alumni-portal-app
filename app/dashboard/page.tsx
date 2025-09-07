import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  Briefcase,
  Calendar,
  MessageSquare,
  Settings,
  Bell,
  TrendingUp,
  MapPin,
  Clock,
  Eye,
  Plus,
} from "lucide-react"
import Link from "next/link"

// Mock user data
const user = {
  name: "John Doe",
  title: "Senior Software Engineer",
  company: "TechCorp",
  location: "San Francisco, CA",
  graduationYear: "2018",
  major: "Computer Science",
  avatar: "/placeholder.svg?key=john-dashboard",
  profileCompletion: 85,
  connections: 127,
  jobApplications: 8,
  eventsAttended: 12,
  savedJobs: 5,
  upcomingEvents: 3,
}

const recentActivity = [
  {
    type: "connection",
    message: "Sarah Johnson accepted your connection request",
    time: "2 hours ago",
    avatar: "/placeholder.svg?key=sarah-activity",
  },
  {
    type: "job",
    message: "New job posted: Frontend Developer at StartupXYZ",
    time: "4 hours ago",
    avatar: "/placeholder.svg?key=job-activity",
  },
  {
    type: "event",
    message: "Reminder: Alumni Networking Mixer tomorrow at 6 PM",
    time: "1 day ago",
    avatar: "/placeholder.svg?key=event-activity",
  },
  {
    type: "message",
    message: "Michael Chen sent you a message",
    time: "2 days ago",
    avatar: "/placeholder.svg?key=michael-activity",
  },
]

const savedJobs = [
  {
    id: 1,
    title: "Senior Product Manager",
    company: "Google",
    location: "Mountain View, CA",
    salary: "$180k - $220k",
    postedDate: "3 days ago",
    logo: "/placeholder.svg?key=google-logo",
  },
  {
    id: 2,
    title: "Engineering Manager",
    company: "Meta",
    location: "Menlo Park, CA",
    salary: "$200k - $250k",
    postedDate: "1 week ago",
    logo: "/placeholder.svg?key=meta-logo",
  },
]

const upcomingEvents = [
  {
    id: 1,
    title: "Alumni Networking Mixer",
    date: "2024-03-15",
    time: "18:00",
    location: "The Tech Hub, SF",
    attendees: 45,
  },
  {
    id: 2,
    title: "Career Development Workshop",
    date: "2024-03-20",
    time: "14:00",
    location: "Virtual Event",
    attendees: 120,
  },
]

const recentConnections = [
  {
    name: "Sarah Johnson",
    title: "Product Manager at Google",
    avatar: "/placeholder.svg?key=sarah-conn",
    mutualConnections: 12,
  },
  {
    name: "Michael Chen",
    title: "Engineering Manager at Microsoft",
    avatar: "/placeholder.svg?key=michael-conn",
    mutualConnections: 8,
  },
  {
    name: "Emily Rodriguez",
    title: "UX Designer at Airbnb",
    avatar: "/placeholder.svg?key=emily-conn",
    mutualConnections: 15,
  },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">AlumniConnect</span>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="/dashboard/settings">
                  <Settings className="w-5 h-5" />
                </Link>
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                <AvatarFallback>
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback className="text-xl">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-bold">{user.name}</h2>
                  <p className="text-muted-foreground">{user.title}</p>
                  <p className="text-sm text-muted-foreground">{user.company}</p>
                  <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mt-2">
                    <MapPin className="w-4 h-4" />
                    <span>{user.location}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Profile Completion</span>
                    <span>{user.profileCompletion}%</span>
                  </div>
                  <Progress value={user.profileCompletion} className="h-2" />
                </div>

                <Button className="w-full mt-4" asChild>
                  <Link href="/dashboard/profile">Edit Profile</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Your Network</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-accent" />
                    <span className="text-sm">Connections</span>
                  </div>
                  <span className="font-semibold">{user.connections}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-accent" />
                    <span className="text-sm">Job Applications</span>
                  </div>
                  <span className="font-semibold">{user.jobApplications}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span className="text-sm">Events Attended</span>
                  </div>
                  <span className="font-semibold">{user.eventsAttended}</span>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/directory">
                    <Users className="w-4 h-4 mr-2" />
                    Browse Alumni
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/jobs">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Find Jobs
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/events">
                    <Calendar className="w-4 h-4 mr-2" />
                    Discover Events
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/messages">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Messages
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Welcome Section */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-bold mb-2">Welcome back, {user.name.split(" ")[0]}!</h1>
                    <p className="text-muted-foreground">Here's what's happening in your alumni network today.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-green-500 font-medium">+12% network growth</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Main Dashboard Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="jobs">Jobs</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="network">Network</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Recent Activity */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        Recent Activity
                        <Button variant="ghost" size="sm">
                          View All
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={activity.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {activity.type === "job" ? (
                                <Briefcase className="w-4 h-4" />
                              ) : activity.type === "event" ? (
                                <Calendar className="w-4 h-4" />
                              ) : activity.type === "message" ? (
                                <MessageSquare className="w-4 h-4" />
                              ) : (
                                <Users className="w-4 h-4" />
                              )}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm">{activity.message}</p>
                            <p className="text-xs text-muted-foreground">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Upcoming Events */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        Upcoming Events
                        <Button variant="ghost" size="sm" asChild>
                          <Link href="/events">View All</Link>
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {upcomingEvents.map((event) => (
                        <div key={event.id} className="border rounded-lg p-3">
                          <h4 className="font-medium text-sm mb-1">{event.title}</h4>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{new Date(event.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{event.time}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                            <MapPin className="w-3 h-3" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Jobs Tab */}
              <TabsContent value="jobs" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Your Job Activity</h2>
                  <Button asChild>
                    <Link href="/jobs">
                      <Plus className="w-4 h-4 mr-2" />
                      Browse Jobs
                    </Link>
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Saved Jobs */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Saved Jobs ({user.savedJobs})</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {savedJobs.map((job) => (
                        <div key={job.id} className="border rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <Avatar className="w-10 h-10">
                              <AvatarImage src={job.logo || "/placeholder.svg"} alt={job.company} />
                              <AvatarFallback>
                                <Briefcase className="w-5 h-5" />
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-sm">{job.title}</h4>
                              <p className="text-sm text-accent">{job.company}</p>
                              <p className="text-xs text-muted-foreground">{job.location}</p>
                              <p className="text-xs font-medium mt-1">{job.salary}</p>
                            </div>
                            <Button size="sm" variant="outline" asChild>
                              <Link href={`/jobs/${job.id}`}>
                                <Eye className="w-4 h-4" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Application Status */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Application Status</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Applied</span>
                          <Badge variant="secondary">5</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">In Review</span>
                          <Badge variant="outline">2</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Interview Scheduled</span>
                          <Badge className="bg-green-500">1</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Rejected</span>
                          <Badge variant="destructive">0</Badge>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full bg-transparent">
                        View All Applications
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Events Tab */}
              <TabsContent value="events" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Your Events</h2>
                  <Button asChild>
                    <Link href="/events">
                      <Plus className="w-4 h-4 mr-2" />
                      Browse Events
                    </Link>
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Upcoming Events */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Upcoming Events ({user.upcomingEvents})</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {upcomingEvents.map((event) => (
                        <div key={event.id} className="border rounded-lg p-4">
                          <h4 className="font-medium text-sm mb-2">{event.title}</h4>
                          <div className="space-y-1 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{new Date(event.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              <span>{event.attendees} attending</span>
                            </div>
                          </div>
                          <Button size="sm" variant="outline" className="w-full mt-3 bg-transparent" asChild>
                            <Link href={`/events/${event.id}`}>View Details</Link>
                          </Button>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Event History */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Event History</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-8">
                        <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground mb-4">You've attended {user.eventsAttended} events</p>
                        <Button variant="outline" className="bg-transparent">
                          View Event History
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Network Tab */}
              <TabsContent value="network" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Your Network</h2>
                  <Button asChild>
                    <Link href="/directory">
                      <Plus className="w-4 h-4 mr-2" />
                      Find Alumni
                    </Link>
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Recent Connections */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Connections</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {recentConnections.map((connection, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={connection.avatar || "/placeholder.svg"} alt={connection.name} />
                            <AvatarFallback>
                              {connection.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm">{connection.name}</p>
                            <p className="text-xs text-muted-foreground">{connection.title}</p>
                            <p className="text-xs text-muted-foreground">
                              {connection.mutualConnections} mutual connections
                            </p>
                          </div>
                          <Button size="sm" variant="outline" className="bg-transparent">
                            <MessageSquare className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Network Stats */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Network Insights</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Total Connections</span>
                          <span className="font-semibold">{user.connections}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">New This Month</span>
                          <span className="font-semibold text-green-500">+8</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Profile Views</span>
                          <span className="font-semibold">24</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Messages Sent</span>
                          <span className="font-semibold">12</span>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full bg-transparent">
                        View Network Analytics
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
