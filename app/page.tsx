import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Users, Briefcase, Calendar, MessageSquare, Search, ArrowRight, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">AlumniConnect</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/directory" className="text-muted-foreground hover:text-foreground transition-colors">
                Directory
              </Link>
              <Link href="/jobs" className="text-muted-foreground hover:text-foreground transition-colors">
                Jobs
              </Link>
              <Link href="/events" className="text-muted-foreground hover:text-foreground transition-colors">
                Events
              </Link>
              <Link href="/mentorship" className="text-muted-foreground hover:text-foreground transition-colors">
                Mentorship
              </Link>
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

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-4">
            Connecting 50,000+ Alumni Worldwide
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Your Professional Network
            <span className="text-accent block">Starts Here</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
            Connect with fellow alumni, discover career opportunities, attend exclusive events, and build meaningful
            professional relationships that last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/register">
                Join the Network
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
              <Link href="/directory">Explore Alumni</Link>
            </Button>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input placeholder="Search alumni by name, company, or industry..." className="pl-10 py-3 text-base" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Everything You Need to Network</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our platform provides all the tools you need to connect, grow, and succeed in your career.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Alumni Directory</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Browse and connect with alumni from your university across different industries and locations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Job Board</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Discover exclusive job opportunities shared by alumni and partner companies.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Events & Meetups</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Join networking events, workshops, and reunions happening in your area.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Mentorship</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Find mentors or become one. Share knowledge and guide the next generation.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Recent Activity</h2>
            <Button variant="outline" asChild>
              <Link href="/activity">View All</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Job Posting */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-base">New Job Posted</CardTitle>
                    <CardDescription className="text-sm">2 hours ago</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">Senior Software Engineer</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  TechCorp is looking for experienced developers to join their team.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
              </CardContent>
            </Card>

            {/* Event */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-base">Upcoming Event</CardTitle>
                    <CardDescription className="text-sm">Tomorrow</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">Alumni Networking Mixer</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Join us for drinks and networking with local alumni.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>6:00 PM - 9:00 PM</span>
                </div>
              </CardContent>
            </Card>

            {/* New Member */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-base">New Member</CardTitle>
                    <CardDescription className="text-sm">1 day ago</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">Sarah Johnson joined</h3>
                <p className="text-sm text-muted-foreground mb-3">Product Manager at Google, Class of 2018</p>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Product
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Tech
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Expand Your Network?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of alumni who are already building meaningful connections and advancing their careers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link href="/register">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground/20 hover:bg-primary-foreground/10 bg-transparent"
              asChild
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">AlumniConnect</span>
              </div>
              <p className="text-muted-foreground">
                Building bridges between alumni and creating opportunities for professional growth.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/directory" className="hover:text-foreground transition-colors">
                    Alumni Directory
                  </Link>
                </li>
                <li>
                  <Link href="/jobs" className="hover:text-foreground transition-colors">
                    Job Board
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-foreground transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/mentorship" className="hover:text-foreground transition-colors">
                    Mentorship
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/help" className="hover:text-foreground transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/newsletter" className="hover:text-foreground transition-colors">
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 AlumniConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
