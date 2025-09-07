import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Users, ArrowLeft, Mail } from "lucide-react"
import Link from "next/link"

export default function ForgotPasswordPage() {
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
          <h1 className="text-2xl font-bold mb-2">Reset your password</h1>
          <p className="text-muted-foreground">Enter your email and we'll send you a reset link</p>
        </div>

        <Card>
          <CardHeader className="space-y-1 text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <CardTitle className="text-xl">Forgot password?</CardTitle>
            <CardDescription>No worries, we'll send you reset instructions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email address" required />
              </div>

              <Button type="submit" className="w-full">
                Send reset instructions
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

        <div className="mt-8 text-center text-xs text-muted-foreground">
          Didn't receive the email? Check your spam folder or{" "}
          <Link href="/contact" className="hover:underline">
            contact support
          </Link>
        </div>
      </div>
    </div>
  )
}
