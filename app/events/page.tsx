import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, Calendar, MapPin, Clock, Users, ArrowLeft, Plus, Grid, List } from "lucide-react"
import Link from "next/link"

// Mock data for events
const events = [
  {
    id: 1,
    title: "Alumni Networking Mixer",
    description: "Join us for drinks and networking with local alumni in the tech industry.",
    date: "2024-03-15",
    time: "18:00",
    endTime: "21:00",
    location: "The Tech Hub, San Francisco",
    address: "123 Market St, San Francisco, CA 94105",
    category: "Networking",
    organizer: "Sarah Johnson",
    organizerAvatar: "/placeholder.svg?key=sarah-org",
    organizerTitle: "Alumni Relations Manager",
    attendees: 45,
    maxAttendees: 80,
    price: "Free",
    image: "/placeholder.svg?key=networking-event",
    isVirtual: false,
    tags: ["Networking", "Tech", "Happy Hour"],
    rsvpDeadline: "2024-03-14",
  },
  {
    id: 2,
    title: "Career Development Workshop",
    description: "Learn essential skills for advancing your career with industry experts.",
    date: "2024-03-20",
    time: "14:00",
    endTime: "17:00",
    location: "Virtual Event",
    address: "Online via Zoom",
    category: "Workshop",
    organizer: "Michael Chen",
    organizerAvatar: "/placeholder.svg?key=michael-org",
    organizerTitle: "Career Services Director",
    attendees: 120,
    maxAttendees: 200,
    price: "$25",
    image: "/placeholder.svg?key=workshop-event",
    isVirtual: true,
    tags: ["Career", "Professional Development", "Skills"],
    rsvpDeadline: "2024-03-19",
  },
  {
    id: 3,
    title: "Annual Alumni Gala",
    description: "Celebrate our achievements and connect with fellow alumni at our annual gala dinner.",
    date: "2024-04-05",
    time: "19:00",
    endTime: "23:00",
    location: "Grand Ballroom, Marriott Hotel",
    address: "55 Fourth St, San Francisco, CA 94103",
    category: "Social",
    organizer: "Emily Rodriguez",
    organizerAvatar: "/placeholder.svg?key=emily-org",
    organizerTitle: "Event Coordinator",
    attendees: 180,
    maxAttendees: 250,
    price: "$75",
    image: "/placeholder.svg?key=gala-event",
    isVirtual: false,
    tags: ["Gala", "Formal", "Celebration"],
    rsvpDeadline: "2024-04-01",
  },
  {
    id: 4,
    title: "Startup Pitch Competition",
    description: "Watch alumni entrepreneurs pitch their startups to a panel of investors.",
    date: "2024-03-25",
    time: "15:00",
    endTime: "18:00",
    location: "Innovation Center",
    address: "456 Innovation Way, Palo Alto, CA 94301",
    category: "Competition",
    organizer: "David Kim",
    organizerAvatar: "/placeholder.svg?key=david-org",
    organizerTitle: "Entrepreneurship Program Director",
    attendees: 85,
    maxAttendees: 150,
    price: "Free",
    image: "/placeholder.svg?key=pitch-event",
    isVirtual: false,
    tags: ["Startup", "Entrepreneurship", "Competition"],
    rsvpDeadline: "2024-03-23",
  },
  {
    id: 5,
    title: "Alumni Book Club Meeting",
    description: "Monthly discussion of 'The Lean Startup' with fellow alumni readers.",
    date: "2024-03-18",
    time: "19:00",
    endTime: "20:30",
    location: "Central Library",
    address: "100 Larkin St, San Francisco, CA 94102",
    category: "Social",
    organizer: "Jessica Thompson",
    organizerAvatar: "/placeholder.svg?key=jessica-org",
    organizerTitle: "Book Club Organizer",
    attendees: 15,
    maxAttendees: 25,
    price: "Free",
    image: "/placeholder.svg?key=book-club-event",
    isVirtual: false,
    tags: ["Book Club", "Discussion", "Learning"],
    rsvpDeadline: "2024-03-17",
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">AlumniConnect</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" asChild>
                <Link href="/events/create">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Event
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Join Network</Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Alumni Events</h1>
          <p className="text-muted-foreground text-lg">
            Discover and join {events.length}+ upcoming events in our community
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input placeholder="Search events by title, location, or organizer..." className="pl-10 py-3 text-base" />
            </div>

            {/* Filter Button */}
            <Button variant="outline" className="lg:w-auto bg-transparent">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Filter Options */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="networking">Networking</SelectItem>
                <SelectItem value="workshop">Workshop</SelectItem>
                <SelectItem value="social">Social</SelectItem>
                <SelectItem value="competition">Competition</SelectItem>
                <SelectItem value="conference">Conference</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="virtual">Virtual</SelectItem>
                <SelectItem value="san-francisco">San Francisco</SelectItem>
                <SelectItem value="new-york">New York</SelectItem>
                <SelectItem value="seattle">Seattle</SelectItem>
                <SelectItem value="austin">Austin</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Date Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="this-week">This Week</SelectItem>
                <SelectItem value="this-month">This Month</SelectItem>
                <SelectItem value="next-month">Next Month</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="free">Free</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="under-50">Under $50</SelectItem>
                <SelectItem value="over-50">$50+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* View Toggle and Results */}
        <Tabs defaultValue="list" className="w-full">
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">Showing {events.length} events</p>
            <div className="flex items-center gap-4">
              <Select defaultValue="date">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Sort by Date</SelectItem>
                  <SelectItem value="popularity">Most Popular</SelectItem>
                  <SelectItem value="price">Price: Low to High</SelectItem>
                  <SelectItem value="alphabetical">Alphabetical</SelectItem>
                </SelectContent>
              </Select>
              <TabsList>
                <TabsTrigger value="list">
                  <List className="w-4 h-4 mr-2" />
                  List
                </TabsTrigger>
                <TabsTrigger value="grid">
                  <Grid className="w-4 h-4 mr-2" />
                  Grid
                </TabsTrigger>
              </TabsList>
            </div>
          </div>

          {/* List View */}
          <TabsContent value="list" className="space-y-4">
            {events.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="w-24 h-24 bg-muted rounded-lg flex-shrink-0 overflow-hidden">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                              {event.title}
                            </h3>
                            <Badge variant="secondary">{event.category}</Badge>
                            {event.isVirtual && (
                              <Badge variant="outline" className="text-xs">
                                Virtual
                              </Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground mb-2">{event.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-lg">{event.price}</p>
                          <p className="text-sm text-muted-foreground">
                            {event.attendees}/{event.maxAttendees} attending
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(event.date).toLocaleDateString("en-US", {
                              weekday: "short",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>
                            {event.time} - {event.endTime}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>by {event.organizer}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {event.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <Button asChild>
                            <Link href={`/events/${event.id}`}>View Details</Link>
                          </Button>
                          <Button variant="outline" className="bg-transparent">
                            RSVP
                          </Button>
                        </div>
                        <Button variant="ghost" size="sm">
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Grid View */}
          <TabsContent value="grid">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className="aspect-video bg-muted overflow-hidden rounded-t-lg">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {event.category}
                      </Badge>
                      <span className="font-semibold text-sm">{event.price}</span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-accent transition-colors line-clamp-2">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(event.date).toLocaleDateString("en-US", {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>
                          {event.time} - {event.endTime}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="line-clamp-1">{event.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Avatar className="w-6 h-6">
                        <AvatarImage src={event.organizerAvatar || "/placeholder.svg"} alt={event.organizer} />
                        <AvatarFallback className="text-xs">
                          {event.organizer
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-muted-foreground">{event.organizer}</span>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1" asChild>
                        <Link href={`/events/${event.id}`}>Details</Link>
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        RSVP
                      </Button>
                    </div>

                    <div className="text-center text-xs text-muted-foreground">
                      {event.attendees}/{event.maxAttendees} attending
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Events
          </Button>
        </div>
      </div>
    </div>
  )
}
