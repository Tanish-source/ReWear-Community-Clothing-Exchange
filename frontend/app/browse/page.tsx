"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Filter,
  Grid3X3,
  List,
  Heart,
  Star,
  IndianRupee,
  Shirt,
  Crown,
  Baby,
  Watch,
  Footprints,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Eye,
} from "lucide-react"
import Image from "next/image"

export default function BrowsePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("newest")
  const [priceRange, setPriceRange] = useState("all")
  const [likedItems, setLikedItems] = useState<number[]>([])

  const categories = [
    { id: "All", name: "All Items", icon: Grid3X3, count: 892, color: "bg-gray-100 text-gray-800" },
    { id: "Women", name: "Women", icon: Crown, count: 324, color: "bg-pink-100 text-pink-800" },
    { id: "Men", name: "Men", icon: Shirt, count: 287, color: "bg-blue-100 text-blue-800" },
    { id: "Kids", name: "Kids", icon: Baby, count: 156, color: "bg-purple-100 text-purple-800" },
    { id: "Accessories", name: "Accessories", icon: Watch, count: 89, color: "bg-yellow-100 text-yellow-800" },
    { id: "Shoes", name: "Shoes", icon: Footprints, count: 67, color: "bg-green-100 text-green-800" },
    { id: "Bags", name: "Bags", icon: ShoppingBag, count: 45, color: "bg-indigo-100 text-indigo-800" },
  ]

  const [items, setItems] = useState([
    {
      id: 1,
      title: "Vintage Denim Jacket",
      category: "Women",
      rupees: 1500,
      originalPrice: 2500,
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop",
      condition: "Excellent",
      seller: "Sarah Johnson",
      rating: 4.8,
      views: 127,
      likes: 23,
      isNew: false,
      isTrending: true,
      tags: ["vintage", "denim", "casual"],
    },
    {
      id: 2,
      title: "Designer Silk Dress",
      category: "Women",
      rupees: 2800,
      originalPrice: 4500,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
      condition: "Like New",
      seller: "Emma Davis",
      rating: 4.9,
      views: 89,
      likes: 34,
      isNew: true,
      isTrending: false,
      tags: ["designer", "silk", "formal"],
    },
    {
      id: 3,
      title: "Casual Cotton T-Shirt",
      category: "Men",
      rupees: 800,
      originalPrice: 1200,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      condition: "Good",
      seller: "Mike Chen",
      rating: 4.5,
      views: 156,
      likes: 18,
      isNew: false,
      isTrending: false,
      tags: ["casual", "cotton", "basic"],
    },
    {
      id: 4,
      title: "Leather Handbag",
      category: "Accessories",
      rupees: 3200,
      originalPrice: 5000,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
      condition: "Excellent",
      seller: "Priya Sharma",
      rating: 4.7,
      views: 203,
      likes: 45,
      isNew: false,
      isTrending: true,
      tags: ["leather", "handbag", "luxury"],
    },
    {
      id: 5,
      title: "Running Sneakers",
      category: "Shoes",
      rupees: 2200,
      originalPrice: 3500,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      condition: "Good",
      seller: "Raj Patel",
      rating: 4.6,
      views: 98,
      likes: 27,
      isNew: true,
      isTrending: false,
      tags: ["sneakers", "sports", "comfortable"],
    },
    {
      id: 6,
      title: "Wool Winter Coat",
      category: "Women",
      rupees: 4500,
      originalPrice: 7000,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      condition: "Like New",
      seller: "Anita Gupta",
      rating: 4.9,
      views: 167,
      likes: 52,
      isNew: false,
      isTrending: true,
      tags: ["wool", "winter", "coat"],
    },
    {
      id: 7,
      title: "Kids Summer Dress",
      category: "Kids",
      rupees: 900,
      originalPrice: 1500,
      image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&h=400&fit=crop",
      condition: "Excellent",
      seller: "Meera Singh",
      rating: 4.8,
      views: 76,
      likes: 19,
      isNew: true,
      isTrending: false,
      tags: ["kids", "summer", "dress"],
    },
    {
      id: 8,
      title: "Formal Blazer",
      category: "Men",
      rupees: 2500,
      originalPrice: 4000,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      condition: "Excellent",
      seller: "Arjun Kumar",
      rating: 4.7,
      views: 134,
      likes: 31,
      isNew: false,
      isTrending: false,
      tags: ["formal", "blazer", "office"],
    },
  ])

  const toggleLike = (itemId: number) => {
    setLikedItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case "Like New":
        return "bg-emerald-100 text-emerald-800"
      case "Excellent":
        return "bg-green-100 text-green-800"
      case "Good":
        return "bg-yellow-100 text-yellow-800"
      case "Fair":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
    const matchesPrice =
      priceRange === "all" ||
      (priceRange === "under1000" && item.rupees < 1000) ||
      (priceRange === "1000-3000" && item.rupees >= 1000 && item.rupees <= 3000) ||
      (priceRange === "over3000" && item.rupees > 3000)

    return matchesSearch && matchesCategory && matchesPrice
  })

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.rupees - b.rupees
      case "price-high":
        return b.rupees - a.rupees
      case "popular":
        return b.likes - a.likes
      case "rating":
        return b.rating - a.rating
      default:
        return b.id - a.id
    }
  })

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
            <Sparkles className="h-8 w-8 mr-3 text-emerald-600 animate-pulse" />
            Browse Fashion
          </h1>
          <p className="text-gray-600">Discover amazing pre-loved fashion pieces from our community</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4 animate-slide-up">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search for items, brands, or styles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
              />
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
                className="hover:scale-110 transition-transform"
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
                className="hover:scale-110 transition-transform"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-stone-300 rounded-lg px-3 py-2 focus:border-emerald-500 focus:outline-none transition-all hover:border-emerald-400"
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
            </select>

            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="border border-stone-300 rounded-lg px-3 py-2 focus:border-emerald-500 focus:outline-none transition-all hover:border-emerald-400"
            >
              <option value="all">All Prices</option>
              <option value="under1000">Under ₹1,000</option>
              <option value="1000-3000">₹1,000 - ₹3,000</option>
              <option value="over3000">Over ₹3,000</option>
            </select>

            <Button
              variant="outline"
              className="flex items-center space-x-2 hover:scale-105 transition-all bg-transparent"
            >
              <Filter className="h-4 w-4" />
              <span>More Filters</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-stone-200 sticky top-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-300 hover:scale-105 animate-fade-in ${
                        selectedCategory === category.id
                          ? "bg-emerald-50 border-2 border-emerald-200 shadow-md"
                          : "hover:bg-stone-50 border-2 border-transparent"
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${category.color} transition-all duration-300`}>
                          <category.icon className="h-4 w-4" />
                        </div>
                        <span className="font-medium text-gray-900">{category.name}</span>
                      </div>
                      <Badge variant="secondary" className="animate-pulse">
                        {category.count}
                      </Badge>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Items Grid/List */}
          <div className="lg:col-span-3">
            <div className="mb-4 flex items-center justify-between animate-fade-in">
              <p className="text-gray-600">
                Showing {sortedItems.length} of {items.length} items
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <TrendingUp className="h-4 w-4" />
                <span>Updated just now</span>
              </div>
            </div>

            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedItems.map((item, index) => (
                  <Card
                    key={item.id}
                    className="group hover:shadow-xl transition-all duration-300 border-stone-200 hover:scale-105 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          width={400}
                          height={300}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />

                        {/* Badges */}
                        <div className="absolute top-3 left-3 flex flex-col space-y-2">
                          <Badge className={getConditionColor(item.condition)}>{item.condition}</Badge>
                          {item.isNew && (
                            <Badge className="bg-blue-100 text-blue-800 animate-pulse">
                              <Sparkles className="h-3 w-3 mr-1" />
                              New
                            </Badge>
                          )}
                          {item.isTrending && (
                            <Badge className="bg-orange-100 text-orange-800 animate-bounce">
                              <TrendingUp className="h-3 w-3 mr-1" />
                              Trending
                            </Badge>
                          )}
                        </div>

                        {/* Like Button */}
                        <button
                          onClick={() => toggleLike(item.id)}
                          className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white hover:scale-110 transition-all"
                        >
                          <Heart
                            className={`h-4 w-4 ${
                              likedItems.includes(item.id) ? "text-red-500 fill-current" : "text-gray-600"
                            }`}
                          />
                        </button>

                        {/* Discount Badge */}
                        {item.originalPrice > item.rupees && (
                          <div className="absolute bottom-3 left-3">
                            <Badge className="bg-red-100 text-red-800">
                              {Math.round(((item.originalPrice - item.rupees) / item.originalPrice) * 100)}% OFF
                            </Badge>
                          </div>
                        )}
                      </div>

                      <div className="p-4 space-y-3">
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900 group-hover:text-emerald-600 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 text-sm">by {item.seller}</p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1">
                          {item.tags.slice(0, 3).map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              variant="secondary"
                              className="text-xs hover:bg-emerald-100 hover:text-emerald-800 transition-colors cursor-pointer"
                            >
                              #{tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Price */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
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
                        </div>

                        {/* Stats */}
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center">
                              <Eye className="h-4 w-4 mr-1" />
                              {item.views}
                            </span>
                            <span className="flex items-center">
                              <Heart className="h-4 w-4 mr-1" />
                              {item.likes}
                            </span>
                            <span className="flex items-center">
                              <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                              {item.rating}
                            </span>
                          </div>
                        </div>

                        {/* Action Button */}
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white hover:scale-105 transition-all">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {sortedItems.map((item, index) => (
                  <Card
                    key={item.id}
                    className="hover:shadow-lg transition-all duration-300 border-stone-200 animate-slide-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-6">
                        <div className="relative">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            width={120}
                            height={120}
                            className="rounded-lg object-cover hover:scale-110 transition-transform"
                          />
                          <button
                            onClick={() => toggleLike(item.id)}
                            className="absolute -top-2 -right-2 p-1 bg-white rounded-full shadow-md hover:scale-110 transition-all"
                          >
                            <Heart
                              className={`h-4 w-4 ${
                                likedItems.includes(item.id) ? "text-red-500 fill-current" : "text-gray-600"
                              }`}
                            />
                          </button>
                        </div>

                        <div className="flex-1 space-y-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-xl font-semibold text-gray-900 hover:text-emerald-600 transition-colors">
                                {item.title}
                              </h3>
                              <p className="text-gray-600">by {item.seller}</p>
                            </div>
                            <div className="flex flex-col items-end space-y-2">
                              <Badge className={getConditionColor(item.condition)}>{item.condition}</Badge>
                              {item.isNew && <Badge className="bg-blue-100 text-blue-800">New</Badge>}
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-1">
                            {item.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="secondary" className="text-xs">
                                #{tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="text-2xl font-bold text-emerald-600 flex items-center">
                                <IndianRupee className="h-5 w-5 mr-1" />
                                {item.rupees.toLocaleString()}
                              </span>
                              {item.originalPrice > item.rupees && (
                                <span className="text-gray-500 line-through">
                                  ₹{item.originalPrice.toLocaleString()}
                                </span>
                              )}
                            </div>

                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span className="flex items-center">
                                <Eye className="h-4 w-4 mr-1" />
                                {item.views}
                              </span>
                              <span className="flex items-center">
                                <Heart className="h-4 w-4 mr-1" />
                                {item.likes}
                              </span>
                              <span className="flex items-center">
                                <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                                {item.rating}
                              </span>
                            </div>
                          </div>
                        </div>

                        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white hover:scale-105 transition-all">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {sortedItems.length === 0 && (
              <div className="text-center py-12 animate-fade-in">
                <div className="text-gray-400 mb-4">
                  <Search className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No items found</h3>
                <p className="text-gray-600">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
