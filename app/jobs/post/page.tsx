import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Users, ArrowLeft, Briefcase } from "lucide-react"
import Link from "next/link"

export default function PostJobPage() {
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

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Page Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Briefcase className="w-8 h-8 text-accent" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Post a Job</h1>
          <p className="text-muted-foreground text-lg">Share opportunities with our alumni network</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Job Details</CardTitle>
            <CardDescription>Fill out the information below to post your job opportunity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Basic Information</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="jobTitle">Job Title *</Label>
                    <Input id="jobTitle" placeholder="e.g. Senior Software Engineer" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company *</Label>
                    <Input id="company" placeholder="e.g. TechCorp" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="jobType">Job Type *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="internship">Internship</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <Input id="location" placeholder="e.g. San Francisco, CA" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="product">Product</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="sales">Sales</SelectItem>
                        <SelectItem value="data">Data Science</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="salaryMin">Salary Range</Label>
                    <div className="flex gap-2">
                      <Input id="salaryMin" placeholder="Min (e.g. 120000)" type="number" />
                      <Input id="salaryMax" placeholder="Max (e.g. 160000)" type="number" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience Level</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="entry">Entry Level</SelectItem>
                        <SelectItem value="mid">Mid Level</SelectItem>
                        <SelectItem value="senior">Senior Level</SelectItem>
                        <SelectItem value="lead">Lead/Principal</SelectItem>
                        <SelectItem value="executive">Executive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="remote" />
                  <Label htmlFor="remote">Remote work available</Label>
                </div>
              </div>

              {/* Job Description */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Job Description</h3>

                <div className="space-y-2">
                  <Label htmlFor="shortDescription">Short Description *</Label>
                  <Textarea
                    id="shortDescription"
                    placeholder="Brief overview of the role (1-2 sentences)"
                    className="min-h-[80px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fullDescription">Full Description *</Label>
                  <Textarea
                    id="fullDescription"
                    placeholder="Detailed description of the role, responsibilities, and what makes this opportunity exciting"
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements">Requirements *</Label>
                  <Textarea
                    id="requirements"
                    placeholder="List the key requirements and qualifications (one per line)"
                    className="min-h-[100px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="benefits">Benefits & Perks</Label>
                  <Textarea
                    id="benefits"
                    placeholder="List the benefits and perks offered (one per line)"
                    className="min-h-[80px]"
                  />
                </div>
              </div>

              {/* Application Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Application Details</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="applicationEmail">Application Email *</Label>
                    <Input id="applicationEmail" type="email" placeholder="jobs@company.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="applicationDeadline">Application Deadline</Label>
                    <Input id="applicationDeadline" type="date" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="applicationInstructions">Application Instructions</Label>
                  <Textarea
                    id="applicationInstructions"
                    placeholder="Any specific instructions for applicants (e.g. portfolio requirements, cover letter topics)"
                    className="min-h-[80px]"
                  />
                </div>
              </div>

              {/* Additional Options */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Additional Options</h3>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="urgent" />
                    <Label htmlFor="urgent">Mark as urgent hiring</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="featured" />
                    <Label htmlFor="featured">Feature this job (additional fee applies)</Label>
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
                  Post Job
                </Button>
                <Button type="button" variant="outline" className="flex-1 bg-transparent">
                  Save as Draft
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          By posting a job, you agree to our{" "}
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/job-posting-guidelines" className="hover:underline">
            Job Posting Guidelines
          </Link>
        </div>
      </div>
    </div>
  )
}
