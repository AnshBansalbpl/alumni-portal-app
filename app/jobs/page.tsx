import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, MapPin, Briefcase, Clock, Users, ArrowLeft, Building, Plus } from "lucide-react"
import Link from "next/link"

// Mock data for job postings
const jobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "TechCorp",
    companyLogo: "/placeholder.svg?key=techcorp",
    location: "San Francisco, CA",
    type: "Full-time",
    remote: true,
    salary: "$150k - $200k",
    postedBy: "Sarah Johnson",
    postedDate: "2 days ago",
    description: "Join our engineering team to build scalable web applications using React, Node.js, and AWS.",
    requirements: ["5+ years experience", "React/Node.js", "AWS", "Team leadership"],
    benefits: ["Health insurance", "401k matching", "Flexible PTO", "Remote work"],
    applicants: 23,
    isUrgent: false,
  },
  {
    id: 2,
    title: "Product Manager",
    company: "StartupXYZ",
    companyLogo: "/placeholder.svg?key=startupxyz",
    location: "New York, NY",
    type: "Full-time",
    remote: false,
    salary: "$120k - $160k",
    postedBy: "Michael Chen",
    postedDate: "1 week ago",
    description: "Lead product strategy and work with cross-functional teams to deliver innovative solutions.",
    requirements: ["3+ years PM experience", "Technical background", "Analytics skills", "Leadership"],
    benefits: ["Equity package", "Health insurance", "Learning budget", "Gym membership"],
    applicants: 45,
    isUrgent: true,
  },
  {
    id: 3,
    title: "UX Designer",
    company: "DesignStudio",
    companyLogo: "/placeholder.svg?key=designstudio",
    location: "Austin, TX",
    type: "Contract",
    remote: true,
    salary: "$80 - $120/hr",
    postedBy: "Emily Rodriguez",
    postedDate: "3 days ago",
    description: "Create beautiful and intuitive user experiences for our mobile and web applications.",
    requirements: ["Portfolio required", "Figma/Sketch", "User research", "Prototyping"],
    benefits: ["Flexible schedule", "Remote work", "Creative freedom", "Portfolio building"],
    applicants: 12,
    isUrgent: false,
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "DataCorp",
    companyLogo: "/placeholder.svg?key=datacorp",
    location: "Seattle, WA",
    type: "Full-time",
    remote: true,
    salary: "$130k - $180k",
    postedBy: "David Kim",
    postedDate: "5 days ago",
    description: "Analyze large datasets and build machine learning models to drive business insights.",
    requirements: ["PhD/Masters preferred", "Python/R", "Machine Learning", "SQL"],
    benefits: ["Stock options", "Health insurance", "Conference budget", "Flexible hours"],
    applicants: 31,
    isUrgent: false,
  },
  {
    id: 5,
    title: "Marketing Director",
    company: "GrowthCo",
    companyLogo: "/placeholder.svg?key=growthco",
    location: "Los Angeles, CA",
    type: "Full-time",
    remote: false,
    salary: "$110k - $150k",
    postedBy: "Jessica Thompson",
    postedDate: "1 day ago",
    description: "Lead marketing strategy and team to drive user acquisition and brand awareness.",
    requirements: ["5+ years marketing", "Digital marketing", "Team management", "Analytics"],
    benefits: ["Bonus structure", "Health insurance", "PTO", "Professional development"],
    applicants: 18,
    isUrgent: true,
  },
]

export default function JobsPage() {
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
                <Link href="/jobs/post">
                  <Plus className="w-4 h-4 mr-2" />
                  Post Job
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
          <h1 className="text-3xl font-bold mb-2">Job Board</h1>
          <p className="text-muted-foreground text-lg">
            Discover {jobs.length.toLocaleString()}+ opportunities shared by our alumni network
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input placeholder="Search jobs by title, company, or skills..." className="pl-10 py-3 text-base" />
            </div>

            {/* Filter Button */}
            <Button variant="outline" className="lg:w-auto bg-transparent">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Filter Options */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full-time">Full-time</SelectItem>
                <SelectItem value="part-time">Part-time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
                <SelectItem value="internship">Internship</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="remote">Remote</SelectItem>
                <SelectItem value="san-francisco">San Francisco, CA</SelectItem>
                <SelectItem value="new-york">New York, NY</SelectItem>
                <SelectItem value="seattle">Seattle, WA</SelectItem>
                <SelectItem value="austin">Austin, TX</SelectItem>
                <SelectItem value="boston">Boston, MA</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="entry">Entry Level</SelectItem>
                <SelectItem value="mid">Mid Level</SelectItem>
                <SelectItem value="senior">Senior Level</SelectItem>
                <SelectItem value="lead">Lead/Principal</SelectItem>
                <SelectItem value="executive">Executive</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="product">Product</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="sales">Sales</SelectItem>
                <SelectItem value="data">Data Science</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Salary Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-50k">$0 - $50k</SelectItem>
                <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                <SelectItem value="100k-150k">$100k - $150k</SelectItem>
                <SelectItem value="150k-200k">$150k - $200k</SelectItem>
                <SelectItem value="200k+">$200k+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">Showing {jobs.length} jobs</p>
          <Select defaultValue="recent">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="salary">Highest Salary</SelectItem>
              <SelectItem value="applicants">Fewest Applicants</SelectItem>
              <SelectItem value="company">Company A-Z</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Job Listings */}
        <div className="space-y-4 mb-8">
          {jobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12 flex-shrink-0">
                    <AvatarImage src={job.companyLogo || "/placeholder.svg"} alt={job.company} />
                    <AvatarFallback>
                      <Building className="w-6 h-6" />
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                            {job.title}
                          </h3>
                          {job.isUrgent && (
                            <Badge variant="destructive" className="text-xs">
                              Urgent
                            </Badge>
                          )}
                        </div>
                        <p className="text-accent font-medium">{job.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-lg">{job.salary}</p>
                        <p className="text-sm text-muted-foreground">{job.applicants} applicants</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                        {job.remote && (
                          <Badge variant="secondary" className="ml-1 text-xs">
                            Remote
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>Posted {job.postedDate}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>by {job.postedBy}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 line-clamp-2">{job.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.requirements.slice(0, 4).map((req) => (
                        <Badge key={req} variant="outline" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                      {job.requirements.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{job.requirements.length - 4} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <Button asChild>
                          <Link href={`/jobs/${job.id}`}>View Details</Link>
                        </Button>
                        <Button variant="outline">Save Job</Button>
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
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Jobs
          </Button>
        </div>
      </div>
    </div>
  )
}
