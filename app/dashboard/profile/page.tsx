import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Users, ArrowLeft, Camera, Plus, X } from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
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
              <Button variant="outline">Preview Profile</Button>
              <Button>Save Changes</Button>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          {/* Page Header */}
          <div>
            <h1 className="text-3xl font-bold mb-2">Edit Profile</h1>
            <p className="text-muted-foreground">Update your information to help fellow alumni connect with you</p>
          </div>

          {/* Profile Photo */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Photo</CardTitle>
              <CardDescription>Upload a professional photo to help others recognize you</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-6">
                <div className="relative">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src="/placeholder.svg?key=profile-edit" alt="Profile" />
                    <AvatarFallback className="text-2xl">JD</AvatarFallback>
                  </Avatar>
                  <Button size="icon" className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full" variant="secondary">
                    <Camera className="w-4 h-4" />
                  </Button>
                </div>
                <div className="space-y-2">
                  <Button variant="outline" className="bg-transparent">
                    Upload New Photo
                  </Button>
                  <p className="text-sm text-muted-foreground">JPG, PNG or GIF. Max size 5MB.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="headline">Professional Headline *</Label>
                <Input id="headline" defaultValue="Senior Software Engineer at TechCorp" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell fellow alumni about yourself, your interests, and what you're passionate about..."
                  className="min-h-[100px]"
                  defaultValue="Passionate software engineer with 6+ years of experience building scalable web applications. Love mentoring junior developers and contributing to open source projects."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue="San Francisco, CA" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Personal Website</Label>
                  <Input id="website" placeholder="https://yourwebsite.com" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
              <CardDescription>Your educational background</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="university">University *</Label>
                  <Input id="university" defaultValue="University Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="degree">Degree *</Label>
                  <Input id="degree" defaultValue="Bachelor of Science" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="major">Major *</Label>
                  <Input id="major" defaultValue="Computer Science" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="graduationYear">Graduation Year *</Label>
                  <Select defaultValue="2018">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2022">2022</SelectItem>
                      <SelectItem value="2021">2021</SelectItem>
                      <SelectItem value="2020">2020</SelectItem>
                      <SelectItem value="2019">2019</SelectItem>
                      <SelectItem value="2018">2018</SelectItem>
                      <SelectItem value="2017">2017</SelectItem>
                      <SelectItem value="2016">2016</SelectItem>
                      <SelectItem value="2015">2015</SelectItem>
                      <SelectItem value="older">Before 2015</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="honors">Honors & Awards</Label>
                <Input id="honors" placeholder="e.g. Magna Cum Laude, Dean's List" />
              </div>
            </CardContent>
          </Card>

          {/* Professional Experience */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Professional Experience</CardTitle>
                  <CardDescription>Your work history and current position</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="bg-transparent">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Experience
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Current Position */}
              <div className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="font-semibold">Current Position</h4>
                  <Button variant="ghost" size="sm">
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentTitle">Job Title *</Label>
                    <Input id="currentTitle" defaultValue="Senior Software Engineer" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentCompany">Company *</Label>
                    <Input id="currentCompany" defaultValue="TechCorp" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <Label htmlFor="startDate">Start Date</Label>
                    <Input id="startDate" type="month" defaultValue="2021-03" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentLocation">Location</Label>
                    <Input id="currentLocation" defaultValue="San Francisco, CA" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentDescription">Description</Label>
                  <Textarea
                    id="currentDescription"
                    placeholder="Describe your role, responsibilities, and achievements..."
                    className="min-h-[80px]"
                    defaultValue="Lead development of scalable web applications serving millions of users. Mentor junior developers and contribute to architectural decisions."
                  />
                </div>
              </div>

              {/* Previous Position */}
              <div className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="font-semibold">Previous Position</h4>
                  <Button variant="ghost" size="sm">
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <Label htmlFor="prevTitle">Job Title</Label>
                    <Input id="prevTitle" defaultValue="Software Engineer" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prevCompany">Company</Label>
                    <Input id="prevCompany" defaultValue="StartupXYZ" />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="space-y-2">
                    <Label htmlFor="prevStartDate">Start Date</Label>
                    <Input id="prevStartDate" type="month" defaultValue="2018-06" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prevEndDate">End Date</Label>
                    <Input id="prevEndDate" type="month" defaultValue="2021-02" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prevLocation">Location</Label>
                    <Input id="prevLocation" defaultValue="Palo Alto, CA" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="prevDescription">Description</Label>
                  <Textarea
                    id="prevDescription"
                    placeholder="Describe your role, responsibilities, and achievements..."
                    className="min-h-[80px]"
                    defaultValue="Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality features."
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
              <CardDescription>Add skills to help others find you for opportunities and collaborations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-sm">
                  JavaScript
                  <Button variant="ghost" size="sm" className="ml-1 h-auto p-0">
                    <X className="w-3 h-3" />
                  </Button>
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  React
                  <Button variant="ghost" size="sm" className="ml-1 h-auto p-0">
                    <X className="w-3 h-3" />
                  </Button>
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Node.js
                  <Button variant="ghost" size="sm" className="ml-1 h-auto p-0">
                    <X className="w-3 h-3" />
                  </Button>
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  TypeScript
                  <Button variant="ghost" size="sm" className="ml-1 h-auto p-0">
                    <X className="w-3 h-3" />
                  </Button>
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Python
                  <Button variant="ghost" size="sm" className="ml-1 h-auto p-0">
                    <X className="w-3 h-3" />
                  </Button>
                </Badge>
                <Button variant="outline" size="sm" className="bg-transparent">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Skill
                </Button>
              </div>

              <div className="space-y-2">
                <Label htmlFor="newSkill">Add New Skill</Label>
                <div className="flex gap-2">
                  <Input id="newSkill" placeholder="Enter a skill..." />
                  <Button>Add</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>How fellow alumni can reach you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" defaultValue="john.doe@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn Profile</Label>
                  <Input id="linkedin" placeholder="https://linkedin.com/in/johndoe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="github">GitHub Profile</Label>
                  <Input id="github" placeholder="https://github.com/johndoe" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
              <CardDescription>Control who can see your information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="profileVisibility">Profile Visibility</Label>
                <Select defaultValue="alumni">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Public - Anyone can view</SelectItem>
                    <SelectItem value="alumni">Alumni Only - Only verified alumni</SelectItem>
                    <SelectItem value="connections">Connections Only - Only your connections</SelectItem>
                    <SelectItem value="private">Private - Only you can view</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactVisibility">Contact Information Visibility</Label>
                <Select defaultValue="connections">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alumni">All Alumni</SelectItem>
                    <SelectItem value="connections">Connections Only</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-6">
            <Button variant="outline" asChild>
              <Link href="/dashboard">Cancel</Link>
            </Button>
            <Button>Save Changes</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
