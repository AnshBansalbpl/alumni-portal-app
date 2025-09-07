import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  MapPin,
  Calendar,
  Clock,
  Users,
  ArrowLeft,
  Share,
  Bookmark,
  ExternalLink,
  CheckCircle,
  MessageSquare,
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Mock data - in real app this would come from database
const getEventById = (id: string) => {
  const events = [
    {
      id: 1,
      title: "Alumni Networking Mixer",
      description: "Join us for drinks and networking with local alumni in the tech industry.",
      longDescription: `Join us for an evening of networking, drinks, and meaningful connections with fellow alumni working in the tech industry. This mixer is designed to bring together professionals from various stages of their careers to share experiences, insights, and opportunities.

Whether you're a recent graduate looking to expand your network, a seasoned professional seeking new collaborations, or someone considering a career change, this event offers the perfect opportunity to connect with like-minded individuals.

The evening will feature:
- Welcome reception with signature cocktails
- Structured networking activities
- Industry insights from senior alumni
- Informal mingling and conversation
- Light appetizers and refreshments

Come ready to share your story, learn from others, and build lasting professional relationships that can help advance your career.`,
      date: "2024-03-15",
      time: "18:00",
      endTime: "21:00",
      location: "The Tech Hub, San Francisco",
      address: "123 Market St, San Francisco, CA 94105",
      category: "Networking",
      organizer: "Sarah Johnson",
      organizerAvatar: "/placeholder.svg?key=sarah-event-org",
      organizerTitle: "Alumni Relations Manager",
      organizerBio:
        "Sarah has been organizing alumni events for over 5 years and is passionate about connecting our community.",
      attendees: 45,
      maxAttendees: 80,
      price: "Free",
      image: "/placeholder.svg?key=networking-mixer-large",
      isVirtual: false,
      tags: ["Networking", "Tech", "Happy Hour"],
      rsvpDeadline: "2024-03-14",
      agenda: [
        { time: "6:00 PM", activity: "Registration & Welcome Reception" },
        { time: "6:30 PM", activity: "Opening Remarks & Introductions" },
        { time: "7:00 PM", activity: "Structured Networking Activities" },
        { time: "8:00 PM", activity: "Industry Panel Discussion" },
        { time: "8:30 PM", activity: "Open Networking & Refreshments" },
        { time: "9:00 PM", activity: "Closing Remarks & Next Steps" },
      ],
      requirements: ["Professional attire recommended", "Bring business cards", "RSVP required"],
      sponsors: ["TechCorp", "Innovation Labs", "StartupXYZ"],
    },
  ]

  return events.find((event) => event.id === Number.parseInt(id))
}

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const event = getEventById(params.id)

  if (!event) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/events">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Events
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
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Event Header */}
            <Card>
              <div className="aspect-video bg-muted overflow-hidden rounded-t-lg">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{event.category}</Badge>
                      {event.isVirtual && (
                        <Badge variant="outline" className="text-xs">
                          Virtual
                        </Badge>
                      )}
                    </div>
                    <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
                    <p className="text-muted-foreground text-lg">{event.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">{event.price}</p>
                    <p className="text-sm text-muted-foreground">
                      {event.attendees}/{event.maxAttendees} attending
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>
                      {new Date(event.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>
                      {event.time} - {event.endTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button size="lg">RSVP Now</Button>
                  <Button variant="outline" size="lg" className="bg-transparent">
                    <Bookmark className="w-4 h-4 mr-2" />
                    Save Event
                  </Button>
                  <Button variant="outline" size="lg" className="bg-transparent">
                    <Share className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Event Description */}
            <Card>
              <CardHeader>
                <CardTitle>About this event</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="whitespace-pre-line text-muted-foreground leading-relaxed">{event.longDescription}</div>
              </CardContent>
            </Card>

            {/* Event Agenda */}
            <Card>
              <CardHeader>
                <CardTitle>Event Agenda</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {event.agenda.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-20 text-sm font-medium text-accent flex-shrink-0">{item.time}</div>
                      <div className="flex-1">
                        <p className="text-muted-foreground">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>What to bring</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {event.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardHeader>
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">{event.location}</p>
                    <p className="text-muted-foreground">{event.address}</p>
                  </div>
                </div>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Map would be displayed here</p>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View in Maps
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* RSVP Card */}
            <Card>
              <CardHeader>
                <CardTitle>Join this event</CardTitle>
                <CardDescription>{event.maxAttendees - event.attendees} spots remaining</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">{event.price}</p>
                  <p className="text-sm text-muted-foreground">per person</p>
                </div>
                <Button className="w-full" size="lg">
                  RSVP Now
                </Button>
                <div className="text-center text-sm text-muted-foreground">
                  RSVP deadline: {new Date(event.rsvpDeadline).toLocaleDateString()}
                </div>
              </CardContent>
            </Card>

            {/* Organizer */}
            <Card>
              <CardHeader>
                <CardTitle>Event Organizer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={event.organizerAvatar || "/placeholder.svg"} alt={event.organizer} />
                    <AvatarFallback>
                      {event.organizer
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{event.organizer}</p>
                    <p className="text-sm text-muted-foreground">{event.organizerTitle}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{event.organizerBio}</p>
                <Button variant="outline" className="w-full bg-transparent">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Contact Organizer
                </Button>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card>
              <CardHeader>
                <CardTitle>Event Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sponsors */}
            <Card>
              <CardHeader>
                <CardTitle>Event Sponsors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {event.sponsors.map((sponsor) => (
                    <div key={sponsor} className="flex items-center gap-3 p-2 border rounded-lg">
                      <div className="w-8 h-8 bg-muted rounded flex items-center justify-center">
                        <span className="text-xs font-semibold">{sponsor[0]}</span>
                      </div>
                      <span className="text-sm">{sponsor}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Attendees Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Who's attending</CardTitle>
                <CardDescription>{event.attendees} confirmed attendees</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex -space-x-2 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Avatar key={i} className="w-8 h-8 border-2 border-background">
                      <AvatarImage src={`/ceholder-svg-key-attendee-.jpg?key=attendee-${i}`} />
                      <AvatarFallback className="text-xs">A{i}</AvatarFallback>
                    </Avatar>
                  ))}
                  <div className="w-8 h-8 border-2 border-background rounded-full bg-muted flex items-center justify-center">
                    <span className="text-xs">+{event.attendees - 5}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  View All Attendees
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
