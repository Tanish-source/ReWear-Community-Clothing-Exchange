"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  ChevronDown,
  ArrowRight,
  UserPlus,
  Package,
  RefreshCw,
  Star,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Heart,
  Users,
  Award,
  Globe,
  IndianRupee,
} from "lucide-react"
import Image from "next/image"

export default function LandingPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentHeroImage, setCurrentHeroImage] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const heroImages = [
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop",
  ]

  const allFeaturedItems = [
    // Renamed to avoid conflict with filtered array
    {
      id: 1,
      title: "Vintage Denim Jacket",
      category: "Women",
      rupees: 1500,
      originalPrice: 2500,
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop",
      condition: "Excellent",
      seller: {
        name: "Sarah Johnson",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop",
        rating: 4.9,
      },
      likes: 23,
      isNew: false,
      tags: ["denim", "jacket", "vintage", "outerwear"],
    },
    {
      id: 2,
      title: "Designer Silk Dress",
      category: "Women",
      rupees: 2800,
      originalPrice: 4200,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
      condition: "Like New",
      seller: {
        name: "Emma Davis",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
        rating: 4.8,
      },
      likes: 34,
      isNew: true,
      tags: ["silk", "dress", "designer", "formal"],
    },
    {
      id: 3,
      title: "Leather Handbag",
      category: "Accessories",
      rupees: 3200,
      originalPrice: 5000,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
      condition: "Excellent",
      seller: {
        name: "Priya Sharma",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
        rating: 4.7,
      },
      likes: 45,
      isNew: false,
      tags: ["leather", "bag", "luxury", "accessory"],
    },
    {
      id: 4,
      title: "Wool Winter Coat",
      category: "Women",
      rupees: 4500,
      originalPrice: 7000,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      condition: "Like New",
      seller: {
        name: "Anita Gupta",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
        rating: 4.9,
      },
      likes: 52,
      isNew: false,
      tags: ["wool", "coat", "winter", "outerwear"],
    },
    {
      id: 5,
      title: "Men's Casual Shirt",
      category: "Men",
      rupees: 900,
      originalPrice: 1500,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      condition: "Good",
      seller: {
        name: "Raj Patel",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
        rating: 4.8,
      },
      likes: 18,
      isNew: true,
      tags: ["shirt", "casual", "men", "top"],
    },
    {
      id: 6,
      title: "Kids' Summer Dress",
      category: "Kids",
      rupees: 700,
      originalPrice: 1200,
      image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&h=400&fit=crop",
      condition: "Excellent",
      seller: {
        name: "Meera Singh",
        avatar: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=100&h=100&fit=crop",
        rating: 4.7,
      },
      likes: 15,
      isNew: false,
      tags: ["kids", "dress", "summer", "girls"],
    },
  ]

  const categories = ["All", "Men", "Women", "Kids", "Accessories", "Shoes", "Bags"]

  const filteredFeaturedItems = allFeaturedItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "ReWear has completely changed how I think about fashion. I've swapped over 20 items and saved hundreds of dollars!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop",
      rating: 5,
      location: "Mumbai, India",
      swaps: 23,
    },
    {
      name: "Mike Chen",
      text: "The point system is genius. I love being able to redeem points for items I really want.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      rating: 5,
      location: "Delhi, India",
      swaps: 15,
    },
    {
      name: "Emma Davis",
      text: "Such a sustainable way to refresh my wardrobe. The community is amazing and the quality is always great.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      rating: 5,
      location: "Bangalore, India",
      swaps: 31,
    },
  ]

  const communityStats = [
    { label: "Active Users", value: "12,000+", icon: Users, color: "text-blue-600" },
    { label: "Items Swapped", value: "45,000+", icon: RefreshCw, color: "text-green-600" },
    { label: "CO₂ Saved", value: "2.5 Tons", icon: Globe, color: "text-emerald-600" },
    { label: "Money Saved", value: "₹50L+", icon: IndianRupee, color: "text-purple-600" },
  ]

  const topUsers = [
    {
      name: "Priya Sharma",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      swaps: 45,
      rating: 4.9,
      badge: "Eco Warrior",
    },
    {
      name: "Raj Patel",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      swaps: 38,
      rating: 4.8,
      badge: "Style Master",
    },
    {
      name: "Anita Gupta",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
      swaps: 42,
      rating: 4.9,
      badge: "Trendsetter",
    },
    {
      name: "Arjun Kumar",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      swaps: 35,
      rating: 4.7,
      badge: "Fashion Pro",
    },
  ]

  useEffect(() => {
    setIsVisible(true)
    const heroInterval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(heroInterval)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-stone-50 py-20 lg:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-stone-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
              <div className="space-y-6">
                <div className="flex items-center space-x-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <Badge className="bg-emerald-100 text-emerald-800 px-4 py-2 text-sm font-medium">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Sustainable Fashion Revolution
                  </Badge>
                </div>

                <h1
                  className="text-4xl lg:text-7xl font-bold text-gray-900 leading-tight animate-fade-in"
                  style={{ animationDelay: "0.4s" }}
                >
                  Sustainable Fashion
                  <span className="block text-emerald-600 gradient-text">Starts Here</span>
                </h1>

                <p
                  className="text-xl text-gray-600 max-w-lg leading-relaxed animate-fade-in"
                  style={{ animationDelay: "0.6s" }}
                >
                  Join thousands of fashion lovers swapping, sharing, and discovering amazing pieces while reducing
                  environmental impact. Every swap makes a difference.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Start Swapping
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-medium hover:scale-105 transition-all duration-300"
                >
                  <Package className="mr-2 h-5 w-5" />
                  Browse Items
                </Button>
              </div>

              {/* Stats */}
              <div
                className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 animate-fade-in"
                style={{ animationDelay: "1s" }}
              >
                {communityStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="text-center group hover:scale-110 transition-all duration-300"
                    style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                  >
                    <div className={`${stat.color} mb-2 flex justify-center`}>
                      <stat.icon className="h-8 w-8 group-hover:animate-pulse" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`relative ${isVisible ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-3xl transform rotate-3 opacity-20"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden hover:scale-105 transition-all duration-700">
                  <Image
                    src={heroImages[currentHeroImage] || "/placeholder.svg"}
                    alt="Sustainable Fashion"
                    width={600}
                    height={500}
                    className="w-full h-96 object-cover transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex -space-x-2">
                          {topUsers.slice(0, 3).map((user, index) => (
                            <Image
                              key={index}
                              src={user.avatar || "/placeholder.svg"}
                              alt={user.name}
                              width={32}
                              height={32}
                              className="w-8 h-8 rounded-full border-2 border-white hover:scale-110 transition-transform"
                            />
                          ))}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Join 12,000+ fashion lovers</p>
                          <p className="text-xs text-gray-600">Swapping sustainably every day</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl border border-stone-100 p-8 hover:shadow-3xl transition-all duration-500 animate-slide-up">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 animate-fade-in">
              Find Your Perfect Piece
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search for items, brands, or styles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-14 border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                />
              </div>
              <div className="relative animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-white border border-stone-300 rounded-xl px-6 py-4 pr-12 h-14 focus:border-emerald-500 focus:outline-none transition-all duration-300 text-lg"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
              </div>
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white h-14 px-8 text-lg font-medium hover:scale-105 transition-all duration-300 shadow-lg animate-fade-in"
                style={{ animationDelay: "0.6s" }}
              >
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-20 bg-gradient-to-br from-stone-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Items</h2>
            <p className="text-xl text-gray-600">Discover amazing pieces from our community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredFeaturedItems.map((item, index) => (
              <Card
                key={item.id}
                className="group hover:shadow-2xl transition-all duration-500 border-stone-200 hover:scale-105 animate-slide-up bg-white/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-xl">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 flex flex-col space-y-2">
                      <Badge className="bg-emerald-100 text-emerald-800 shadow-lg">{item.condition}</Badge>
                      {item.isNew && (
                        <Badge className="bg-blue-100 text-blue-800 shadow-lg animate-pulse">
                          <Sparkles className="h-3 w-3 mr-1" />
                          New
                        </Badge>
                      )}
                    </div>
                    <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg">
                      <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
                    </button>
                    {item.originalPrice > item.rupees && (
                      <div className="absolute bottom-4 left-4">
                        <Badge className="bg-red-100 text-red-800 shadow-lg">
                          {Math.round(((item.originalPrice - item.rupees) / item.originalPrice) * 100)}% OFF
                        </Badge>
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 group-hover:text-emerald-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.category}</p>
                    </div>

                    {/* Seller Info */}
                    <div className="flex items-center space-x-3">
                      <Image
                        src={item.seller.avatar || "/placeholder.svg"}
                        alt={item.seller.name}
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full hover:scale-110 transition-transform"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{item.seller.name}</p>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          <span className="text-xs text-gray-600">{item.seller.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="space-y-1">
                        <span className="text-2xl font-bold text-emerald-600 flex items-center">
                          <IndianRupee className="h-5 w-5 mr-1" />
                          {item.rupees.toLocaleString()}
                        </span>
                        {item.originalPrice > item.rupees && (
                          <span className="text-gray-500 line-through text-sm">
                            ₹{item.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-1 text-gray-500">
                        <Heart className="h-4 w-4" />
                        <span className="text-sm">{item.likes}</span>
                      </div>
                    </div>

                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white hover:scale-105 transition-all duration-300 shadow-lg">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to sustainable fashion</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: UserPlus,
                title: "Sign Up",
                description: "Create your account and join our sustainable fashion community. It's quick and free!",
                color: "bg-blue-100 text-blue-600",
              },
              {
                icon: Package,
                title: "List Items",
                description: "Upload photos and details of clothes you no longer wear. Earn points for each listing!",
                color: "bg-emerald-100 text-emerald-600",
              },
              {
                icon: RefreshCw,
                title: "Swap or Redeem",
                description: "Exchange items directly with other users or use your points to get pieces you love.",
                color: "bg-purple-100 text-purple-600",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`${step.color} w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                >
                  <step.icon className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Amazing Community</h2>
            <p className="text-xl text-gray-600">Meet the fashion lovers making a difference</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {topUsers.map((user, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-500 border-stone-200 hover:scale-105 animate-slide-up bg-white/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="relative inline-block mb-4">
                    <Image
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full mx-auto hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute -top-2 -right-2 bg-emerald-100 text-emerald-800 rounded-full p-1">
                      <Award className="h-4 w-4" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{user.name}</h3>
                  <Badge className="bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-800 mb-3">
                    {user.badge}
                  </Badge>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-medium">{user.rating}</span>
                    </div>
                    <p className="text-sm text-gray-600">{user.swaps} successful swaps</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Community Says</h2>
            <p className="text-xl text-gray-600">Real stories from real users</p>
          </div>

          <div className="relative">
            <Card className="border-stone-200 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white/80 backdrop-blur-sm animate-slide-up">
              <CardContent className="p-12 text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current animate-pulse" />
                  ))}
                </div>
                <p className="text-2xl text-gray-700 mb-8 italic leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <Image
                    src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    width={80}
                    height={80}
                    className="rounded-full hover:scale-110 transition-transform duration-300"
                  />
                  <div className="text-left">
                    <p className="font-bold text-xl text-gray-900">{testimonials[currentTestimonial].name}</p>
                    <p className="text-gray-600">{testimonials[currentTestimonial].location}</p>
                    <p className="text-sm text-emerald-600 font-medium">
                      {testimonials[currentTestimonial].swaps} swaps completed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white shadow-xl hover:bg-stone-50 hover:scale-110 transition-all duration-300 w-12 h-12"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white shadow-xl hover:bg-stone-50 hover:scale-110 transition-all duration-300 w-12 h-12"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentTestimonial ? "bg-emerald-600 shadow-lg" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your Sustainable Fashion Journey?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Join thousands of fashion lovers who are making a difference, one swap at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-stone-50 px-8 py-4 text-lg font-medium hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Join ReWear Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-medium hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <Package className="mr-2 h-5 w-5" />
                Browse Items
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
