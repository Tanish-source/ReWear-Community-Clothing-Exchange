"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Eye, EyeOff, Loader2, Check, X, Sparkles, Heart } from "lucide-react"
import Image from "next/image"

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email address"
    }

    if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters"
    }

    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      window.location.href = "/dashboard"
    } catch (error) {
      console.error("Registration failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const getPasswordStrength = () => {
    const password = formData.password
    if (password.length === 0) return { strength: 0, text: "" }
    if (password.length < 6) return { strength: 1, text: "Weak" }
    if (password.length < 10) return { strength: 2, text: "Medium" }
    return { strength: 3, text: "Strong" }
  }

  const passwordStrength = getPasswordStrength()

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
              <Heart className="h-5 w-5 text-emerald-500 animate-pulse" />
            </div>
          </Link>
        </div>

        {/* Hero Image */}
        <div className="mb-8 animate-slide-up">
          <Image
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop"
            alt="Sustainable Fashion"
            width={600}
            height={400}
            className="w-full h-48 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Sign Up Card */}
        <Card
          className="animate-slide-up border-stone-200 shadow-2xl backdrop-blur-sm bg-white/95 hover:shadow-3xl transition-all duration-300"
          style={{ animationDelay: "0.2s" }}
        >
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900 animate-fade-in">Join ReWear</CardTitle>
            <p className="text-gray-600 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Start your sustainable fashion journey today
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 hover:border-emerald-400 ${errors.email ? "border-red-500" : ""}`}
                  required
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 flex items-center animate-fade-in">
                    <X className="h-4 w-4 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Choose a username"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className={`border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 hover:border-emerald-400 ${errors.username ? "border-red-500" : ""}`}
                  required
                />
                {errors.username && (
                  <p className="mt-1 text-sm text-red-600 flex items-center animate-fade-in">
                    <X className="h-4 w-4 mr-1" />
                    {errors.username}
                  </p>
                )}
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className={`border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 hover:border-emerald-400 pr-10 ${errors.password ? "border-red-500" : ""}`}
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

                {/* Password Strength Indicator */}
                {formData.password && (
                  <div className="mt-2 animate-fade-in">
                    <div className="flex space-x-1">
                      {[1, 2, 3].map((level) => (
                        <div
                          key={level}
                          className={`h-2 flex-1 rounded transition-all duration-300 ${
                            level <= passwordStrength.strength
                              ? level === 1
                                ? "bg-red-500"
                                : level === 2
                                  ? "bg-yellow-500"
                                  : "bg-green-500"
                              : "bg-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-gray-600 mt-1">Password strength: {passwordStrength.text}</p>
                  </div>
                )}

                {errors.password && (
                  <p className="mt-1 text-sm text-red-600 flex items-center animate-fade-in">
                    <X className="h-4 w-4 mr-1" />
                    {errors.password}
                  </p>
                )}
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className={`border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 hover:border-emerald-400 ${errors.confirmPassword ? "border-red-500" : ""}`}
                  required
                />
                {formData.confirmPassword && formData.password === formData.confirmPassword && (
                  <p className="mt-1 text-sm text-green-600 flex items-center animate-fade-in">
                    <Check className="h-4 w-4 mr-1" />
                    Passwords match
                  </p>
                )}
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600 flex items-center animate-fade-in">
                    <X className="h-4 w-4 mr-1" />
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              <div className="flex items-start animate-fade-in" style={{ animationDelay: "0.7s" }}>
                <input
                  type="checkbox"
                  className="rounded border-stone-300 text-emerald-600 focus:ring-emerald-500 mt-1 hover:scale-110 transition-transform"
                  required
                />
                <span className="ml-2 text-sm text-gray-600">
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-emerald-600 hover:text-emerald-700 hover:underline transition-all"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-emerald-600 hover:text-emerald-700 hover:underline transition-all"
                  >
                    Privacy Policy
                  </Link>
                </span>
              </div>

              <Button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-12 animate-fade-in hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                disabled={isLoading}
                style={{ animationDelay: "0.8s" }}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Create Account
                  </>
                )}
              </Button>
            </form>

            {/* Login Link */}
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.9s" }}>
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-emerald-600 hover:text-emerald-700 font-medium hover:underline transition-all"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Sustainability Message */}
        <div className="text-center mt-8 animate-fade-in" style={{ animationDelay: "1s" }}>
          <p className="text-gray-600 italic">"The future of fashion is circular, sustainable, and beautiful."</p>
          <p className="text-gray-500 text-sm mt-2">Join the sustainable fashion revolution</p>
        </div>
      </div>
    </div>
  )
}
