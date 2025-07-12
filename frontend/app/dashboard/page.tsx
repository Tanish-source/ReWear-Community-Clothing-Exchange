"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Package,
  ShoppingBag,
  Settings,
  Edit3,
  Eye,
  Trash2,
  Star,
  Calendar,
  MapPin,
  IndianRupee,
  User,
  Phone,
  Mail,
} from "lucide-react"
import Image from "next/image"

export default function DashboardPage() {
  const [user, setUser] = useState({
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+91 9876543210",
    avatar: "/placeholder.svg?height=80&width=80",
    rupees: 4500,
    memberSince: "March 2024",
    location: "Mumbai, Maharashtra",
    rating: 4.8,
    totalSwaps: 23,
    address: "123 Fashion Street, Bandra West, Mumbai - 400050",
    age: 28,
    gender: "Female",
  })

  const [myListings, setMyListings] = useState([
    {
      id: 1,
      title: "Vintage Denim Jacket",
      category: "Women",
      rupees: 1500,
      image: "/placeholder.svg?height=200&width=200",
      status: "Available",
      views: 45,
      likes: 12,
      datePosted: "2024-01-15",
      description: "Beautiful vintage denim jacket in excellent condition",
    },
    {
      id: 2,
      title: "Designer Handbag",
      category: "Accessories",
      rupees: 2000,
      image: "/placeholder.svg?height=200&width=200",
      status: "Sold",
      views: 78,
      likes: 23,
      datePosted: "2024-01-10",
      description: "Authentic designer handbag with original tags",
    },
    {
      id: 3,
      title: "Silk Blouse",
      category: "Women",
      rupees: 1200,
      image: "/placeholder.svg?height=200&width=200",
      status: "Pending",
      views: 32,
      likes: 8,
      datePosted: "2024-01-20",
      description: "Elegant silk blouse perfect for office wear",
    },
  ])

  const [myPurchases, setMyPurchases] = useState([
    {
      id: 1,
      title: "Wool Sweater",
      seller: "Emma Davis",
      rupees: 1800,
      image: "/placeholder.svg?height=200&width=200",
      status: "Delivered",
      date: "2024-01-18",
      rating: 5,
      orderDate: "2024-01-15",
      deliveryDate: "2024-01-18",
    },
    {
      id: 2,
      title: "Running Shoes",
      seller: "Mike Chen",
      rupees: 2200,
      image: "/placeholder.svg?height=200&width=200",
      status: "In Transit",
      date: "2024-01-22",
      rating: null,
      orderDate: "2024-01-20",
      deliveryDate: null,
    },
    {
      id: 3,
      title: "Casual T-Shirt",
      seller: "Raj Patel",
      rupees: 800,
      image: "/placeholder.svg?height=200&width=200",
      status: "Processing",
      date: "2024-01-24",
      rating: null,
      orderDate: "2024-01-24",
      deliveryDate: null,
    },
  ])

  const [isEditing, setIsEditing] = useState(false)
  const [editForm, setEditForm] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    location: user.location,
    address: user.address,
    age: user.age,
    gender: user.gender,
  })

  useEffect(() => {
    // Simulate API call to get user data
    // GET /api/user/me
    console.log("Fetching user data...")
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-800"
      case "Sold":
        return "bg-blue-100 text-blue-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Delivered":
        return "bg-green-100 text-green-800"
      case "In Transit":
        return "bg-orange-100 text-orange-800"
      case "Processing":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleSaveProfile = () => {
    setUser({ ...user, ...editForm })
    setIsEditing(false)
    // PUT /api/user/me
    console.log("Updating profile...", editForm)
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-stone-200 sticky top-8">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="relative inline-block">
                    <Image
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                      width={80}
                      height={80}
                      className="rounded-full mx-auto mb-4"
                    />
                    <Button
                      size="icon"
                      variant="outline"
                      className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-white"
                    >
                      <Edit3 className="h-4 w-4" />
                    </Button>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-1">{user.name}</h2>
                  <p className="text-gray-600 mb-4">{user.email}</p>

                  <div className="bg-emerald-50 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-center mb-2">
                      <IndianRupee className="h-5 w-5 text-emerald-600 mr-2" />
                      <span className="text-2xl font-bold text-emerald-600">{user.rupees.toLocaleString()}</span>
                    </div>
                    <p className="text-sm text-emerald-700">Available Balance</p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Rating</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        <span className="font-medium">{user.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Total Swaps</span>
                      <span className="font-medium">{user.totalSwaps}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Member Since</span>
                      <span className="font-medium">{user.memberSince}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Location</span>
                      <span className="font-medium">{user.location}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4 bg-white border border-stone-200">
                <TabsTrigger
                  value="profile"
                  className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700"
                >
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </TabsTrigger>
                <TabsTrigger
                  value="listings"
                  className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700"
                >
                  <Package className="h-4 w-4 mr-2" />
                  My Listings
                </TabsTrigger>
                <TabsTrigger
                  value="purchases"
                  className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700"
                >
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  My Purchases
                </TabsTrigger>
                <TabsTrigger
                  value="settings"
                  className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </TabsTrigger>
              </TabsList>

              {/* User Profile Tab */}
              <TabsContent value="profile" className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">User Profile</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Personal Information */}
                  <Card className="border-stone-200">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <User className="h-5 w-5 mr-2" />
                        Personal Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <p className="text-gray-900 mt-1">{user.name}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Age</label>
                        <p className="text-gray-900 mt-1">{user.age} years</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Gender</label>
                        <p className="text-gray-900 mt-1">{user.gender}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Location</label>
                        <p className="text-gray-900 mt-1 flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {user.location}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Contact Information */}
                  <Card className="border-stone-200">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Phone className="h-5 w-5 mr-2" />
                        Contact Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <p className="text-gray-900 mt-1 flex items-center">
                          <Mail className="h-4 w-4 mr-2" />
                          {user.email}
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <p className="text-gray-900 mt-1 flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          {user.phone}
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Address</label>
                        <p className="text-gray-900 mt-1">{user.address}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Account Statistics */}
                <Card className="border-stone-200">
                  <CardHeader>
                    <CardTitle>Account Statistics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 bg-emerald-50 rounded-lg">
                        <div className="text-2xl font-bold text-emerald-600">₹{user.rupees.toLocaleString()}</div>
                        <div className="text-sm text-emerald-700">Balance</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{myListings.length}</div>
                        <div className="text-sm text-blue-700">Active Listings</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">{myPurchases.length}</div>
                        <div className="text-sm text-purple-700">Purchases</div>
                      </div>
                      <div className="text-center p-4 bg-yellow-50 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-600">{user.rating}</div>
                        <div className="text-sm text-yellow-700">Rating</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* My Listings Tab */}
              <TabsContent value="listings" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">My Listings</h2>
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    <Package className="h-4 w-4 mr-2" />
                    Add New Item
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {myListings.map((item) => (
                    <Card key={item.id} className="border-stone-200 hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="relative">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            width={200}
                            height={200}
                            className="w-full h-48 object-cover rounded-t-lg"
                          />
                          <Badge className={`absolute top-3 right-3 ${getStatusColor(item.status)}`}>
                            {item.status}
                          </Badge>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-600 mb-2">{item.category}</p>
                          <p className="text-gray-500 text-sm mb-3">{item.description}</p>
                          <p className="text-emerald-600 font-bold mb-3 flex items-center">
                            <IndianRupee className="h-4 w-4 mr-1" />
                            {item.rupees.toLocaleString()}
                          </p>

                          <div className="flex justify-between text-sm text-gray-500 mb-4">
                            <span className="flex items-center">
                              <Eye className="h-4 w-4 mr-1" />
                              {item.views} views
                            </span>
                            <span className="flex items-center">
                              <Star className="h-4 w-4 mr-1" />
                              {item.likes} likes
                            </span>
                          </div>

                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                              <Edit3 className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                            <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-red-600 hover:text-red-700 bg-transparent"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* My Purchases Tab */}
              <TabsContent value="purchases" className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">My Purchases</h2>

                <div className="space-y-4">
                  {myPurchases.map((purchase) => (
                    <Card key={purchase.id} className="border-stone-200">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <Image
                            src={purchase.image || "/placeholder.svg"}
                            alt={purchase.title}
                            width={80}
                            height={80}
                            className="rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg text-gray-900">{purchase.title}</h3>
                            <p className="text-gray-600">Seller: {purchase.seller}</p>
                            <p className="text-emerald-600 font-bold flex items-center">
                              <IndianRupee className="h-4 w-4 mr-1" />
                              {purchase.rupees.toLocaleString()}
                            </p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                              <span>Order Date: {purchase.orderDate}</span>
                              {purchase.deliveryDate && <span>Delivered: {purchase.deliveryDate}</span>}
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge className={getStatusColor(purchase.status)}>{purchase.status}</Badge>
                            <p className="text-sm text-gray-500 mt-2 flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {purchase.date}
                            </p>
                            {purchase.rating && (
                              <div className="flex items-center mt-2">
                                {[...Array(purchase.rating)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="settings" className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Account Settings</h2>

                <Card className="border-stone-200">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Personal Information
                      {!isEditing && (
                        <Button
                          variant="outline"
                          onClick={() => setIsEditing(true)}
                          className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                        >
                          <Edit3 className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {isEditing ? (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                            <Input
                              value={editForm.name}
                              onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                              className="border-stone-300 focus:border-emerald-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                            <Input
                              type="number"
                              value={editForm.age}
                              onChange={(e) => setEditForm({ ...editForm, age: Number.parseInt(e.target.value) })}
                              className="border-stone-300 focus:border-emerald-500"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <Input
                              value={editForm.email}
                              onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                              className="border-stone-300 focus:border-emerald-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                            <Input
                              value={editForm.phone}
                              onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                              className="border-stone-300 focus:border-emerald-500"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                          <Input
                            value={editForm.location}
                            onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                            className="border-stone-300 focus:border-emerald-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                          <Input
                            value={editForm.address}
                            onChange={(e) => setEditForm({ ...editForm, address: e.target.value })}
                            className="border-stone-300 focus:border-emerald-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                          <select
                            value={editForm.gender}
                            onChange={(e) => setEditForm({ ...editForm, gender: e.target.value })}
                            className="w-full border border-stone-300 rounded-lg px-3 py-2 focus:border-emerald-500 focus:outline-none"
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div className="flex space-x-3">
                          <Button
                            onClick={handleSaveProfile}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white"
                          >
                            Save Changes
                          </Button>
                          <Button variant="outline" onClick={() => setIsEditing(false)}>
                            Cancel
                          </Button>
                        </div>
                      </>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Full Name</label>
                            <p className="text-gray-900">{user.name}</p>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Email Address</label>
                            <p className="text-gray-900">{user.email}</p>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <p className="text-gray-900">{user.phone}</p>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Age</label>
                            <p className="text-gray-900">{user.age} years</p>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Gender</label>
                            <p className="text-gray-900">{user.gender}</p>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Location</label>
                            <p className="text-gray-900 flex items-center">
                              <MapPin className="h-4 w-4 mr-2" />
                              {user.location}
                            </p>
                          </div>
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700">Address</label>
                          <p className="text-gray-900">{user.address}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card className="border-stone-200">
                  <CardHeader>
                    <CardTitle>Change Password</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                      <Input
                        type="password"
                        placeholder="Enter current password"
                        className="border-stone-300 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                      <Input
                        type="password"
                        placeholder="Enter new password"
                        className="border-stone-300 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                      <Input
                        type="password"
                        placeholder="Confirm new password"
                        className="border-stone-300 focus:border-emerald-500"
                      />
                    </div>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Update Password</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
