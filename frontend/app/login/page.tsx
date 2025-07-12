"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Eye, EyeOff, Loader2, Sparkles } from "lucide-react"
import Image from "next/image"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      window.location.href = "/dashboard"
    } catch (error) {
      console.error("Login failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-stone-50 to-emerald-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-stone-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8 animate-fade-in">
          <Link href="/" className="inline-flex items-center space-x-2 group">
            <div className="bg-emerald-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-2xl font-bold text-emerald-700">ReWear</span>
              <Sparkles className="h-5 w-5 text-emerald-500 animate-pulse" />
            </div>
          </Link>
        </div>

        {/* Hero Image */}
        <div className="mb-8 animate-slide-up">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
            alt="Fashion Store"
            width={600}
            height={400}
            className="w-full h-48 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Login Card */}
        <Card
          className="animate-slide-up border-stone-200 shadow-2xl backdrop-blur-sm bg-white/95 hover:shadow-3xl transition-all duration-300"
          style={{ animationDelay: "0.2s" }}
        >
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900 animate-fade-in">Welcome Back</CardTitle>
            <p className="text-gray-600 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Sign in to your sustainable fashion journey
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                  Username or Email
                </label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username or email"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 hover:border-emerald-400"
                  required
                />
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 hover:border-emerald-400 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 hover:scale-110 transition-all"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <label className="flex items-center group cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-stone-300 text-emerald-600 focus:ring-emerald-500 group-hover:scale-110 transition-transform"
                  />
                  <span className="ml-2 text-sm text-gray-600 group-hover:text-emerald-600 transition-colors">
                    Remember me
                  </span>
                </label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-emerald-600 hover:text-emerald-700 hover:underline transition-all"
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-12 animate-fade-in hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                disabled={isLoading}
                style={{ animationDelay: "0.6s" }}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Sign In
                  </>
                )}
              </Button>
            </form>

            {/* Sign Up Link */}
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="text-emerald-600 hover:text-emerald-700 font-medium hover:underline transition-all"
                >
                  Sign up here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Fashion Quote */}
        <div className="text-center mt-8 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <p className="text-gray-600 italic">
            "Fashion is about dressing according to what's fashionable. Style is more about being yourself."
          </p>
          <p className="text-gray-500 text-sm mt-2">- Oscar de la Renta</p>
        </div>
      </div>
    </div>
  )
}
