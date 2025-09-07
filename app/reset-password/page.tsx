import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Users, ArrowLeft, Eye, Shield } from "lucide-react"
import Link from "next/link"

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Sign In
          </Link>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold">AlumniConnect</span>
          </div>
          <h1 className="text-2xl font-bold mb-2">Set new password</h1>
          <p className="text-muted-foreground">Create a strong password for your account</p>
        </div>

        <Card>
          <CardHeader className="space-y-1 text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-accent" />
            </div>
            <CardTitle className="text-xl">Create new password</CardTitle>
            <CardDescription>Your new password must be different from previous passwords</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">New Password</Label>
                <div className="relative">
                  <Input id="password" type="password" placeholder="Enter new password" required />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  >
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Input id="confirmPassword" type="password" placeholder="Confirm new password" required />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  >
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </div>
              </div>

              {/* Password Requirements */}
              <div className="space-y-2">
                <p className="text-sm font-medium">Password must contain:</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></div>
                    At least 8 characters
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></div>
                    One uppercase letter
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></div>
                    One lowercase letter
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></div>
                    One number
                  </li>
                </ul>
              </div>

              <Button type="submit" className="w-full">
                Reset password
              </Button>
            </form>

            <div className="text-center text-sm">
              Remember your password?{" "}
              <Link href="/login" className="text-accent hover:underline">
                Back to sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
