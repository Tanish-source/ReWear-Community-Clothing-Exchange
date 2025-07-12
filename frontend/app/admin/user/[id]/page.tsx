"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { User, Mail, Phone, MapPin, Calendar, RefreshCw, IndianRupee, ArrowLeft, Edit3, Ban } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AdminUserDetailPage() {
  const params = useParams()
  const userId = Number.parseInt(params.id as string)

  // Simulate fetching user data
  const [user, setUser] = useState<any | null>(null)

  // Dummy data for demonstration
  const allUsers = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      phone: "+91 9876543210",
      role: "User",
      joinDate: "2024-01-15",
      status: "Active",
      totalSwaps: 23,
      location: "Mumbai, Maharashtra",
      age: 28,
      gender: "Female",
      address: "123 Fashion Street, Bandra West, Mumbai - 400050",
      rupees: 4500,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop",
    },
    {
      id: 2,
      name: "Mike Chen",
      email: "mike.chen@email.com",
      phone: "+91 9876543211",
      role: "User",
      joinDate: "2024-01-10",
      status: "Active",
      totalSwaps: 15,
      location: "Delhi, Delhi",
      age: 32,
      gender: "Male",
      address: "456 Tech Park, Gurgaon, Delhi - 122001",
      rupees: 3200,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      id: 3,
      name: "Emma Davis",
      email: "emma.davis@email.com",
      phone: "+91 9876543212",
      role: "Moderator",
      joinDate: "2024-01-05",
      status: "Active",
      totalSwaps: 31,
      location: "Bangalore, Karnataka",
      age: 26,
      gender: "Female",
      address: "789 IT Hub, Whitefield, Bangalore - 560066",
      rupees: 5800,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
  ]

  useEffect(() => {
    // In a real application, you would fetch data from an API:
    // fetch(`/api/admin/users/${userId}`).then(res => res.json()).then(data => setUser(data));
    const foundUser = allUsers.find((u) => u.id === userId)
    setUser(foundUser)
  }, [userId])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-emerald-100 text-emerald-800 border-emerald-200"
      case "Banned":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <p className="text-gray-600">Loading user details...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 animate-fade-in">
        <div className="flex items-center justify-between mb-8">
          <Link href="/admin?section=users">
            <Button variant="ghost" className="text-gray-600 hover:text-emerald-600">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Users
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">User Details</h1>
          <div className="flex space-x-2">
            <Button variant="outline" className="text-emerald-600 hover:bg-emerald-50 bg-transparent">
              <Edit3 className="h-4 w-4 mr-2" />
              Edit
            </Button>
            <Button variant="outline" className="text-red-600 hover:bg-red-50 bg-transparent">
              <Ban className="h-4 w-4 mr-2" />
              Ban User
            </Button>
          </div>
        </div>

        <Card className="border-stone-200 mb-6">
          <CardContent className="p-6 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <Image
              src={user.avatar || "/placeholder.svg"}
              alt={user.name}
              width={120}
              height={120}
              className="rounded-full object-cover shadow-md"
            />
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{user.name}</h2>
              <Badge className={`mb-4 ${getStatusColor(user.status)}`}>{user.status}</Badge>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-gray-500" />
                  {user.email}
                </p>
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-gray-500" />
                  {user.phone}
                </p>
                <p className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                  {user.location}
                </p>
                <p className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                  Joined: {user.joinDate}
                </p>
                <p className="flex items-center">
                  <RefreshCw className="h-4 w-4 mr-2 text-gray-500" />
                  Total Swaps: {user.totalSwaps}
                </p>
                <p className="flex items-center">
                  <User className="h-4 w-4 mr-2 text-gray-500" />
                  Age: {user.age}, Gender: {user.gender}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-stone-200 mb-6">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-900">Financial Information</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <IndianRupee className="h-6 w-6 text-emerald-600" />
              <p className="text-2xl font-bold text-emerald-600">Available Balance: ₹{user.rupees.toLocaleString()}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-stone-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-900">Address Details</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-700">{user.address}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
