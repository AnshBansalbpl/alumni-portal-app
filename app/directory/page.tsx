import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, MapPin, Calendar, MessageSquare, Users, ArrowLeft } from "lucide-react"
import Link from "next/link"

// Mock data for alumni
const alumni = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Senior Product Manager",
    company: "Google",
    location: "San Francisco, CA",
    graduationYear: "2018",
    major: "Computer Science",
    avatar: "/professional-woman-diverse.png",
    skills: ["Product Management", "Strategy", "Analytics"],
    bio: "Passionate about building products that make a difference. Love connecting with fellow alumni!",
    isOnline: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Software Engineering Manager",
    company: "Microsoft",
    location: "Seattle, WA",
    graduationYear: "2016",
    major: "Software Engineering",
    avatar: "/professional-asian-man.png",
    skills: ["Leadership", "Full Stack", "Cloud Architecture"],
    bio: "Leading engineering teams and mentoring the next generation of developers.",
    isOnline: false,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "UX Design Director",
    company: "Airbnb",
    location: "Austin, TX",
    graduationYear: "2015",
    major: "Design",
    avatar: "/latina-professional-woman.png",
    skills: ["UX Design", "Design Systems", "User Research"],
    bio: "Creating delightful user experiences and building inclusive design teams.",
    isOnline: true,
  },
  {
    id: 4,
    name: "David Kim",
    title: "Data Science Lead",
    company: "Netflix",
    location: "Los Angeles, CA",
    graduationYear: "2017",
    major: "Data Science",
    avatar: "/professional-korean-man.png",
    skills: ["Machine Learning", "Python", "Analytics"],
    bio: "Leveraging data to drive business decisions and improve user experiences.",
    isOnline: true,
  },
  {
    id: 5,
    name: "Jessica Thompson",
    title: "Marketing Director",
    company: "Spotify",
    location: "New York, NY",
    graduationYear: "2019",
    major: "Marketing",
    avatar: "/professional-blonde-woman.png",
    skills: ["Digital Marketing", "Brand Strategy", "Growth"],
    bio: "Building brands and driving growth through innovative marketing strategies.",
    isOnline: false,
  },
  {
    id: 6,
    name: "Alex Patel",
    title: "Startup Founder",
    company: "TechStart Inc.",
    location: "Boston, MA",
    graduationYear: "2014",
    major: "Business",
    avatar: "/professional-man-indian.jpg",
    skills: ["Entrepreneurship", "Business Development", "Fundraising"],
    bio: "Building the next generation of fintech solutions. Always happy to mentor!",
    isOnline: true,
  },
]

export default function DirectoryPage() {
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
          <h1 className="text-3xl font-bold mb-2">Alumni Directory</h1>
          <p className="text-muted-foreground text-lg">
            Connect with {alumni.length.toLocaleString()}+ alumni from our network
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input placeholder="Search by name, company, or skills..." className="pl-10 py-3 text-base" />
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
                <SelectValue placeholder="Graduation Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2020">2020</SelectItem>
                <SelectItem value="older">2019 and earlier</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="consulting">Consulting</SelectItem>
                <SelectItem value="startup">Startup</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="san-francisco">San Francisco, CA</SelectItem>
                <SelectItem value="new-york">New York, NY</SelectItem>
                <SelectItem value="seattle">Seattle, WA</SelectItem>
                <SelectItem value="austin">Austin, TX</SelectItem>
                <SelectItem value="boston">Boston, MA</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Major" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="computer-science">Computer Science</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="data-science">Data Science</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">Showing {alumni.length} alumni</p>
          <Select defaultValue="recent">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Recently Joined</SelectItem>
              <SelectItem value="name">Name (A-Z)</SelectItem>
              <SelectItem value="year">Graduation Year</SelectItem>
              <SelectItem value="location">Location</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {alumni.map((person) => (
            <Card key={person.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={person.avatar || "/placeholder.svg"} alt={person.name} />
                      <AvatarFallback className="text-lg font-semibold">
                        {person.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {person.isOnline && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-background rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg group-hover:text-accent transition-colors">{person.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {person.title} at {person.company}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{person.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>
                      Class of {person.graduationYear} • {person.major}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2">{person.bio}</p>

                <div className="flex flex-wrap gap-1">
                  {person.skills.slice(0, 3).map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1" asChild>
                    <Link href={`/directory/${person.id}`}>View Profile</Link>
                  </Button>
                  <Button size="sm" variant="outline">
                    <MessageSquare className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Alumni
          </Button>
        </div>
      </div>
    </div>
  )
}
