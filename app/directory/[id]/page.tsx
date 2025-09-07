import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  MapPin,
  Briefcase,
  MessageSquare,
  Users,
  ArrowLeft,
  Mail,
  Linkedin,
  Twitter,
  ExternalLink,
  GraduationCap,
  Building,
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Mock data - in real app this would come from database
const getAlumniById = (id: string) => {
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
      skills: ["Product Management", "Strategy", "Analytics", "User Research", "A/B Testing", "SQL"],
      bio: "Passionate about building products that make a difference. I've been working in tech for over 6 years, focusing on consumer products that reach millions of users. I love connecting with fellow alumni and helping recent graduates break into product management.",
      isOnline: true,
      experience: [
        {
          title: "Senior Product Manager",
          company: "Google",
          duration: "2021 - Present",
          description: "Leading product strategy for Google Search features used by 1B+ users",
        },
        {
          title: "Product Manager",
          company: "Facebook",
          duration: "2019 - 2021",
          description: "Managed Instagram Shopping features, driving 40% increase in conversion",
        },
        {
          title: "Associate Product Manager",
          company: "Uber",
          duration: "2018 - 2019",
          description: "Launched rider safety features across 50+ cities",
        },
      ],
      education: [
        {
          degree: "Bachelor of Science in Computer Science",
          school: "University Name",
          year: "2018",
          details: "Magna Cum Laude, Dean's List",
        },
      ],
      interests: ["Mentoring", "Product Strategy", "Data Analytics", "Travel", "Photography"],
      social: {
        email: "sarah.johnson@email.com",
        linkedin: "linkedin.com/in/sarahjohnson",
        twitter: "@sarahjohnson",
      },
    },
  ]

  return alumni.find((person) => person.id === Number.parseInt(id))
}

export default function AlumniProfilePage({ params }: { params: { id: string } }) {
  const alumni = getAlumniById(params.id)

  if (!alumni) {
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
                <Link href="/directory">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Directory
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
          {/* Main Profile */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative">
                    <Avatar className="w-32 h-32">
                      <AvatarImage src={alumni.avatar || "/placeholder.svg"} alt={alumni.name} />
                      <AvatarFallback className="text-2xl font-semibold">
                        {alumni.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {alumni.isOnline && (
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 border-4 border-background rounded-full"></div>
                    )}
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <h1 className="text-3xl font-bold mb-2">{alumni.name}</h1>
                      <p className="text-xl text-muted-foreground mb-4">
                        {alumni.title} at {alumni.company}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{alumni.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-4 h-4" />
                          <span>Class of {alumni.graduationYear}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          <span>{alumni.major}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button>
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                      <Button variant="outline">
                        <Mail className="w-4 h-4 mr-2" />
                        Email
                      </Button>
                      <Button variant="outline" size="icon">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Twitter className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{alumni.bio}</p>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card>
              <CardHeader>
                <CardTitle>Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {alumni.experience.map((exp, index) => (
                  <div key={index}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{exp.title}</h3>
                        <p className="text-accent font-medium">{exp.company}</p>
                        <p className="text-sm text-muted-foreground mb-2">{exp.duration}</p>
                        <p className="text-muted-foreground">{exp.description}</p>
                      </div>
                    </div>
                    {index < alumni.experience.length - 1 && <Separator className="mt-6" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                {alumni.education.map((edu, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{edu.degree}</h3>
                      <p className="text-accent font-medium">{edu.school}</p>
                      <p className="text-sm text-muted-foreground">{edu.year}</p>
                      <p className="text-sm text-muted-foreground">{edu.details}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {alumni.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card>
              <CardHeader>
                <CardTitle>Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {alumni.interests.map((interest) => (
                    <Badge key={interest} variant="outline">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{alumni.social.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Linkedin className="w-4 h-4 text-muted-foreground" />
                  <a href={`https://${alumni.social.linkedin}`} className="text-accent hover:underline">
                    LinkedIn Profile
                    <ExternalLink className="w-3 h-3 ml-1 inline" />
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Twitter className="w-4 h-4 text-muted-foreground" />
                  <a
                    href={`https://twitter.com/${alumni.social.twitter.replace("@", "")}`}
                    className="text-accent hover:underline"
                  >
                    {alumni.social.twitter}
                    <ExternalLink className="w-3 h-3 ml-1 inline" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Mutual Connections */}
            <Card>
              <CardHeader>
                <CardTitle>Mutual Connections</CardTitle>
                <CardDescription>3 mutual connections</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/professional-person.png" />
                      <AvatarFallback>MC</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">Michael Chen</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/professional-person.png" />
                      <AvatarFallback>ER</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">Emily Rodriguez</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/professional-person.png" />
                      <AvatarFallback>DK</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">David Kim</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
