"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Package, IndianRupee, Calendar, User, ArrowLeft, Check, X, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AdminListingDetailPage() {
  const params = useParams()
  const listingId = Number.parseInt(params.id as string)

  // Simulate fetching listing data
  const [listing, setListing] = useState<any | null>(null)

  // Dummy data for demonstration
  const allListings = [
    {
      id: 1,
      title: "Vintage Denim Jacket",
      submittedBy: "Sarah Johnson",
      category: "Women",
      status: "Pending",
      dateSubmitted: "2024-01-20",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop",
      rupees: 1500,
      description:
        "Beautiful vintage denim jacket in excellent condition. This classic piece features a relaxed fit with authentic distressing and fading that gives it character. Perfect for layering over dresses or with your favorite jeans. The jacket has been well-maintained and comes from a smoke-free home.",
      condition: "Excellent",
      tags: ["vintage", "denim", "jacket", "outerwear", "casual"],
    },
    {
      id: 2,
      title: "Designer Handbag",
      submittedBy: "Emma Davis",
      category: "Accessories",
      status: "Approved",
      dateSubmitted: "2024-01-18",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
      rupees: 2000,
      description:
        "Authentic designer handbag with original tags. Made from genuine leather with gold-tone hardware. Spacious interior with multiple compartments, ideal for daily use or special occasions. Comes with original dust bag.",
      condition: "Like New",
      tags: ["designer", "handbag", "luxury", "accessory", "leather"],
    },
    {
      id: 3,
      title: "Running Shoes",
      submittedBy: "Mike Chen",
      category: "Shoes",
      status: "Rejected",
      dateSubmitted: "2024-01-16",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      rupees: 1800,
      description:
        "Comfortable running shoes, barely used. Lightweight design with responsive cushioning for optimal performance. Suitable for both casual wear and athletic activities. Cleaned and ready for a new owner.",
      condition: "Good",
      tags: ["shoes", "running", "sneakers", "athletic", "footwear"],
    },
  ]

  useEffect(() => {
    // In a real application, you would fetch data from an API:
    // fetch(`/api/admin/listings/${listingId}`).then(res => res.json()).then(data => setListing(data));
    const foundListing = allListings.find((l) => l.id === listingId)
    setListing(foundListing)
  }, [listingId])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-emerald-100 text-emerald-800 border-emerald-200"
      case "Pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Rejected":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  if (!listing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <p className="text-gray-600">Loading listing details...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 animate-fade-in">
        <div className="flex items-center justify-between mb-8">
          <Link href="/admin?section=listings">
            <Button variant="ghost" className="text-gray-600 hover:text-emerald-600">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Listings
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Listing Details</h1>
          <div className="flex space-x-2">
            <Button variant="outline" className="text-green-600 hover:bg-green-50 bg-transparent">
              <Check className="h-4 w-4 mr-2" />
              Approve
            </Button>
            <Button variant="outline" className="text-red-600 hover:bg-red-50 bg-transparent">
              <X className="h-4 w-4 mr-2" />
              Reject
            </Button>
            <Button variant="outline" className="text-red-600 hover:bg-red-50 bg-transparent">
              <Trash2 className="h-4 w-4 mr-2" />
              Delete
            </Button>
          </div>
        </div>

        <Card className="border-stone-200 mb-6">
          <CardContent className="p-6 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <Image
              src={listing.image || "/placeholder.svg"}
              alt={listing.title}
              width={200}
              height={200}
              className="rounded-lg object-cover shadow-md"
            />
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{listing.title}</h2>
              <Badge className={`mb-4 ${getStatusColor(listing.status)}`}>{listing.status}</Badge>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                <p className="flex items-center">
                  <User className="h-4 w-4 mr-2 text-gray-500" />
                  Submitted By: {listing.submittedBy}
                </p>
                <p className="flex items-center">
                  <Package className="h-4 w-4 mr-2 text-gray-500" />
                  Category: {listing.category}
                </p>
                <p className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                  Date Submitted: {listing.dateSubmitted}
                </p>
                <p className="flex items-center">
                  <IndianRupee className="h-4 w-4 mr-2 text-gray-500" />
                  Price: ₹{listing.rupees.toLocaleString()}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-stone-200 mb-6">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-900">Description</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-700 leading-relaxed">{listing.description}</p>
          </CardContent>
        </Card>

        <Card className="border-stone-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-900">Additional Details</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-gray-700">Condition:</p>
                <Badge variant="outline" className="mt-1">
                  {listing.condition}
                </Badge>
              </div>
              <div>
                <p className="font-medium text-gray-700">Tags:</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {listing.tags.map((tag: string, index: number) => (
                    <Badge key={index} variant="secondary">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
