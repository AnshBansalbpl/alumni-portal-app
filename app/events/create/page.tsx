import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Users, ArrowLeft, Calendar } from "lucide-react"
import Link from "next/link"

export default function CreateEventPage() {
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

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Page Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-8 h-8 text-accent" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Create Event</h1>
          <p className="text-muted-foreground text-lg">Organize an event for the alumni community</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Event Details</CardTitle>
            <CardDescription>Fill out the information below to create your event</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Basic Information</h3>

                <div className="space-y-2">
                  <Label htmlFor="eventTitle">Event Title *</Label>
                  <Input id="eventTitle" placeholder="e.g. Alumni Networking Mixer" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="shortDescription">Short Description *</Label>
                  <Textarea
                    id="shortDescription"
                    placeholder="Brief overview of the event (1-2 sentences)"
                    className="min-h-[80px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fullDescription">Full Description *</Label>
                  <Textarea
                    id="fullDescription"
                    placeholder="Detailed description of the event, what attendees can expect, and why they should attend"
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="networking">Networking</SelectItem>
                        <SelectItem value="workshop">Workshop</SelectItem>
                        <SelectItem value="social">Social</SelectItem>
                        <SelectItem value="competition">Competition</SelectItem>
                        <SelectItem value="conference">Conference</SelectItem>
                        <SelectItem value="volunteer">Volunteer</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tags">Tags</Label>
                    <Input id="tags" placeholder="e.g. networking, tech, career (comma separated)" />
                  </div>
                </div>
              </div>

              {/* Date and Time */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Date & Time</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="eventDate">Event Date *</Label>
                    <Input id="eventDate" type="date" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rsvpDeadline">RSVP Deadline</Label>
                    <Input id="rsvpDeadline" type="date" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="startTime">Start Time *</Label>
                    <Input id="startTime" type="time" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="endTime">End Time *</Label>
                    <Input id="endTime" type="time" required />
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Location</h3>

                <div className="flex items-center space-x-2 mb-4">
                  <Checkbox id="isVirtual" />
                  <Label htmlFor="isVirtual">This is a virtual event</Label>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="venueName">Venue Name *</Label>
                  <Input id="venueName" placeholder="e.g. The Tech Hub or Virtual Event" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="e.g. 123 Market St, San Francisco, CA 94105" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="locationNotes">Location Notes</Label>
                  <Textarea
                    id="locationNotes"
                    placeholder="Additional location details, parking information, or virtual meeting links"
                    className="min-h-[60px]"
                  />
                </div>
              </div>

              {/* Capacity and Pricing */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Capacity & Pricing</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="maxAttendees">Maximum Attendees</Label>
                    <Input id="maxAttendees" type="number" placeholder="e.g. 100" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price">Ticket Price</Label>
                    <Input id="price" placeholder="e.g. Free or $25" />
                  </div>
                </div>
              </div>

              {/* Requirements and Agenda */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Additional Details</h3>

                <div className="space-y-2">
                  <Label htmlFor="requirements">Requirements</Label>
                  <Textarea
                    id="requirements"
                    placeholder="What should attendees bring or know? (one per line)"
                    className="min-h-[80px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="agenda">Event Agenda</Label>
                  <Textarea
                    id="agenda"
                    placeholder="Schedule of activities (e.g. 6:00 PM - Registration, 6:30 PM - Welcome remarks)"
                    className="min-h-[100px]"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Contact Information</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="organizerName">Organizer Name *</Label>
                    <Input id="organizerName" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organizerEmail">Contact Email *</Label>
                    <Input id="organizerEmail" type="email" placeholder="your.email@example.com" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organizerBio">Organizer Bio</Label>
                  <Textarea
                    id="organizerBio"
                    placeholder="Brief bio about yourself and why you're organizing this event"
                    className="min-h-[60px]"
                  />
                </div>
              </div>

              {/* Additional Options */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Event Options</h3>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="requiresApproval" />
                    <Label htmlFor="requiresApproval">Require approval for RSVPs</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="allowWaitlist" />
                    <Label htmlFor="allowWaitlist">Allow waitlist when event is full</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="sendReminders" />
                    <Label htmlFor="sendReminders">Send reminder emails to attendees</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="alumniOnly" />
                    <Label htmlFor="alumniOnly">Only visible to alumni network</Label>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="flex gap-4 pt-6">
                <Button type="submit" className="flex-1">
                  Create Event
                </Button>
                <Button type="button" variant="outline" className="flex-1 bg-transparent">
                  Save as Draft
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          By creating an event, you agree to our{" "}
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/event-guidelines" className="hover:underline">
            Event Guidelines
          </Link>
        </div>
      </div>
    </div>
  )
}
