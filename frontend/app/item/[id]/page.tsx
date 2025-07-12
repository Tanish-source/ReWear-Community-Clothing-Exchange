"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ChevronLeft,
  ChevronRight,
  Star,
  MapPin,
  Calendar,
  RefreshCw,
  Heart,
  Share2,
  Flag,
  IndianRupee,
} from "lucide-react"
import Image from "next/image"

export default function ItemDetailPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [item, setItem] = useState({
    id: 1,
    title: "Vintage Denim Jacket",
    description:
      "Beautiful vintage denim jacket in excellent condition. This classic piece features a relaxed fit with authentic distressing and fading that gives it character. Perfect for layering over dresses or with your favorite jeans. The jacket has been well-maintained and comes from a smoke-free home.",
    category: "Women",
    type: "Outerwear",
    size: "M",
    condition: "Excellent",
    rupees: 1500,
    tags: ["vintage", "denim", "casual", "classic"],
    images: [
      "/placeholder.svg?height=500&width=500&text=Main+Image",
      "/placeholder.svg?height=500&width=500&text=Detail+1",
      "/placeholder.svg?height=500&width=500&text=Detail+2",
      "/placeholder.svg?height=500&width=500&text=Back+View",
    ],
    availability: "Available",
    datePosted: "2024-01-15",
    views: 127,
    likes: 23,
    uploader: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 4.8,
      totalSwaps: 23,
      memberSince: "March 2024",
      location: "San Francisco, CA",
    },
  })

  const [relatedItems, setRelatedItems] = useState([
    {
      id: 2,
      title: "Denim Skirt",
      category: "Women",
      points: 120,
      image: "/placeholder.svg?height=200&width=200",
      condition: "Good",
    },
    {
      id: 3,
      title: "Vintage Blazer",
      category: "Women",
      points: 180,
      image: "/placeholder.svg?height=200&width=200",
      condition: "Like New",
    },
    {
      id: 4,
      title: "Casual Jeans",
      category: "Women",
      points: 100,
      image: "/placeholder.svg?height=200&width=200",
      condition: "Excellent",
    },
  ])

  useEffect(() => {
    // Simulate API call to get item details
    // GET /api/items/[id]
    console.log("Fetching item details...")
  }, [])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % item.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + item.images.length) % item.images.length)
  }

  const handleRequestSwap = () => {
    // POST /api/transactions
    console.log("Requesting swap for item:", item.id)
  }

  const handleRedeemWithPoints = () => {
    // POST /api/transactions
    console.log("Redeeming item with points:", item.id)
  }

  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-800"
      case "Swapped":
        return "bg-blue-100 text-blue-800"
      case "Unavailable":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
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

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Carousel */}
          <div className="space-y-4">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-stone-100">
                <Image
                  src={item.images[currentImageIndex] || "/placeholder.svg"}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Navigation Arrows */}
              {item.images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {item.images.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {item.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {item.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex ? "border-emerald-500" : "border-stone-200"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${item.title} ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Item Details */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <Badge className={getAvailabilityColor(item.availability)}>{item.availability}</Badge>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsLiked(!isLiked)}
                    className={isLiked ? "text-red-500" : "text-gray-400"}
                  >
                    <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400">
                    <Share2 className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400">
                    <Flag className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">{item.title}</h1>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">{item.category}</Badge>
                {item.type && <Badge variant="outline">{item.type}</Badge>}
                {item.size && <Badge variant="outline">Size {item.size}</Badge>}
                <Badge className={getConditionColor(item.condition)}>{item.condition}</Badge>
              </div>

              <div className="bg-emerald-50 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-center mb-2">
                  <IndianRupee className="h-6 w-6 text-emerald-600 mr-2" />
                  <span className="text-3xl font-bold text-emerald-600">{item.rupees.toLocaleString()}</span>
                  <span className="text-emerald-700 ml-2">rupees</span>
                </div>
                <p className="text-center text-emerald-700 text-sm">Buy with rupees or propose a swap</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleRequestSwap}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-12"
              >
                <RefreshCw className="mr-2 h-5 w-5" />
                Request Swap
              </Button>
              <Button
                onClick={handleRedeemWithPoints}
                variant="outline"
                className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50 h-12 bg-transparent"
              >
                <IndianRupee className="mr-2 h-5 w-5" />
                Buy with Rupees
              </Button>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>

            {/* Tags */}
            {item.tags.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Item Stats */}
            <div className="grid grid-cols-3 gap-4 py-4 border-t border-stone-200">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">{item.views}</p>
                <p className="text-sm text-gray-600">Views</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">{item.likes}</p>
                <p className="text-sm text-gray-600">Likes</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">
                  {new Date(item.datePosted).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                </p>
                <p className="text-sm text-gray-600">Posted</p>
              </div>
            </div>

            {/* Uploader Info */}
            <Card className="border-stone-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Image
                    src={item.uploader.avatar || "/placeholder.svg"}
                    alt={item.uploader.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{item.uploader.name}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        <span>{item.uploader.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <RefreshCw className="h-4 w-4 mr-1" />
                        <span>{item.uploader.totalSwaps} swaps</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{item.uploader.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Since {item.uploader.memberSince}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Items */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedItems.map((relatedItem) => (
              <Card key={relatedItem.id} className="group hover:shadow-lg transition-shadow border-stone-200">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={relatedItem.image || "/placeholder.svg"}
                      alt={relatedItem.title}
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className={`absolute top-3 left-3 ${getConditionColor(relatedItem.condition)}`}>
                      {relatedItem.condition}
                    </Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">{relatedItem.title}</h3>
                    <p className="text-gray-600 mb-3">{relatedItem.category}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-emerald-600 font-bold">{relatedItem.points} points</span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
