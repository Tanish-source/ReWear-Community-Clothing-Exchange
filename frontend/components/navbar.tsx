"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Leaf } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-emerald-600 p-2 rounded-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-emerald-700">ReWear</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <Link href="/browse" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Browse
            </Link>
            <Link href="/dashboard" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Dashboard
            </Link>
            <Link href="/admin" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Admin
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="text-emerald-700 hover:text-emerald-800">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Sign up</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-stone-200">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/browse"
                className="block px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Browse
              </Link>
              <Link
                href="/dashboard"
                className="block px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                href="/admin"
                className="block px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Admin
              </Link>
              <div className="pt-4 pb-2 space-y-2">
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full text-emerald-700">
                    Log in
                  </Button>
                </Link>
                <Link href="/signup" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Sign up</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
