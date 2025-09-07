"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Users } from "lucide-react"

interface AuthGuardProps {
  children: React.ReactNode
  requireAuth?: boolean
}

export function AuthGuard({ children, requireAuth = true }: AuthGuardProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Simulate auth check - replace with real authentication logic
    const checkAuth = async () => {
      try {
        // Check for auth token, validate session, etc.
        const token = localStorage.getItem("auth-token")
        setIsAuthenticated(!!token)
      } catch (error) {
        setIsAuthenticated(false)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  useEffect(() => {
    if (!isLoading && requireAuth && !isAuthenticated) {
      router.push("/login")
    }
  }, [isLoading, requireAuth, isAuthenticated, router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="flex flex-col items-center justify-center p-8">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 animate-pulse">
              <Users className="w-6 h-6 text-primary-foreground" />
            </div>
            <p className="text-muted-foreground">Loading...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (requireAuth && !isAuthenticated) {
    return null // Will redirect to login
  }

  return <>{children}</>
}
