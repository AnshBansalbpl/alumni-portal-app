import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  MapPin,
  Briefcase,
  Clock,
  Users,
  ArrowLeft,
  Building,
  Share,
  Bookmark,
  ExternalLink,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Mock data - in real app this would come from database
const getJobById = (id: string) => {
  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechCorp",
      companyLogo: "/placeholder.svg?key=techcorp-logo",
      location: "San Francisco, CA",
      type: "Full-time",
      remote: true,
      salary: "$150k - $200k",
      postedBy: "Sarah Johnson",
      postedByTitle: "Engineering Manager",
      postedByAvatar: "/placeholder.svg?key=sarah-avatar",
      postedDate: "2 days ago",
      description:
        "Join our engineering team to build scalable web applications using React, Node.js, and AWS. You'll be working on products that serve millions of users worldwide and have the opportunity to mentor junior developers.",
      longDescription: `We're looking for a Senior Software Engineer to join our growing engineering team. In this role, you'll be responsible for designing and implementing scalable web applications, mentoring junior developers, and contributing to architectural decisions.

Our tech stack includes React, Node.js, TypeScript, PostgreSQL, and AWS. We follow agile development practices and believe in continuous learning and improvement.

You'll be working closely with product managers, designers, and other engineers to deliver high-quality features that delight our users. We value collaboration, innovation, and work-life balance.`,
      requirements: [
        "5+ years of software engineering experience",
        "Strong proficiency in React and Node.js",
        "Experience with AWS cloud services",
        "Team leadership and mentoring experience",
        "Bachelor's degree in Computer Science or related field",
        "Experience with TypeScript and modern JavaScript",
        "Knowledge of database design and optimization",
        "Familiarity with CI/CD pipelines",
      ],
      responsibilities: [
        "Design and develop scalable web applications",
        "Mentor junior developers and conduct code reviews",
        "Collaborate with cross-functional teams on product features",
        "Participate in architectural decisions and technical planning",
        "Optimize application performance and user experience",
        "Contribute to engineering best practices and standards",
      ],
      benefits: [
        "Competitive salary and equity package",
        "Comprehensive health, dental, and vision insurance",
        "401(k) matching up to 6%",
        "Flexible PTO and work-from-home options",
        "Professional development budget ($2,000/year)",
        "Top-tier equipment and home office setup",
        "Catered meals and snacks",
        "Gym membership reimbursement",
      ],
      companyInfo: {
        size: "500-1000 employees",
        founded: "2015",
        industry: "Technology",
        website: "https://techcorp.com",
        description:
          "TechCorp is a leading technology company focused on building innovative solutions for modern businesses.",
      },
      applicants: 23,
      isUrgent: false,
      applicationDeadline: "March 15, 2024",
    },
  ]

  return jobs.find((job) => job.id === Number.parseInt(id))
}

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const job = getJobById(params.id)

  if (!job) {
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
                <Link href="/jobs">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Jobs
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
            {/* Job Header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={job.companyLogo || "/placeholder.svg"} alt={job.company} />
                    <AvatarFallback>
                      <Building className="w-8 h-8" />
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
                        <p className="text-xl text-accent font-medium mb-2">{job.company}</p>

                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                            {job.remote && (
                              <Badge variant="secondary" className="ml-1 text-xs">
                                Remote
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>Posted {job.postedDate}</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">{job.salary}</p>
                        <p className="text-sm text-muted-foreground">{job.applicants} applicants</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button size="lg">Apply Now</Button>
                      <Button variant="outline" size="lg">
                        <Bookmark className="w-4 h-4 mr-2" />
                        Save Job
                      </Button>
                      <Button variant="outline" size="lg">
                        <Share className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Job Description */}
            <Card>
              <CardHeader>
                <CardTitle>About this role</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                <div className="whitespace-pre-line text-muted-foreground leading-relaxed">{job.longDescription}</div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle>Key Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {job.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-muted-foreground">{resp}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Benefits & Perks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {job.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Card */}
            <Card>
              <CardHeader>
                <CardTitle>Ready to apply?</CardTitle>
                <CardDescription>Join {job.applicants} other candidates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" size="lg">
                  Apply Now
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Save for Later
                </Button>
                <div className="text-center text-sm text-muted-foreground">
                  Application deadline: {job.applicationDeadline}
                </div>
              </CardContent>
            </Card>

            {/* Posted By */}
            <Card>
              <CardHeader>
                <CardTitle>Posted by</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={job.postedByAvatar || "/placeholder.svg"} alt={job.postedBy} />
                    <AvatarFallback>
                      {job.postedBy
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{job.postedBy}</p>
                    <p className="text-sm text-muted-foreground">{job.postedByTitle}</p>
                    <p className="text-sm text-muted-foreground">{job.company}</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Message Recruiter
                </Button>
              </CardContent>
            </Card>

            {/* Company Info */}
            <Card>
              <CardHeader>
                <CardTitle>About {job.company}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{job.companyInfo.description}</p>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Industry:</span>
                    <span>{job.companyInfo.industry}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Company size:</span>
                    <span>{job.companyInfo.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Founded:</span>
                    <span>{job.companyInfo.founded}</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full bg-transparent">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Website
                </Button>
              </CardContent>
            </Card>

            {/* Similar Jobs */}
            <Card>
              <CardHeader>
                <CardTitle>Similar Jobs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="border rounded-lg p-3">
                    <h4 className="font-medium text-sm">Frontend Engineer</h4>
                    <p className="text-xs text-muted-foreground">StartupXYZ • $120k - $160k</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h4 className="font-medium text-sm">Full Stack Developer</h4>
                    <p className="text-xs text-muted-foreground">WebCorp • $130k - $170k</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h4 className="font-medium text-sm">Software Architect</h4>
                    <p className="text-xs text-muted-foreground">TechGiant • $180k - $220k</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/jobs">View All Jobs</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
