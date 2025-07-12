"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Package,
  ShoppingBag,
  BarChart3,
  Search,
  Eye,
  Ban,
  Check,
  X,
  Trash2,
  Leaf,
  Edit3,
  IndianRupee,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Activity,
  Settings,
  Bell,
  Shield,
  Calendar,
  Clock,
  AlertTriangle,
  CheckCircle,
  Sparkles,
  RefreshCw,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link" // Import Link for navigation

// Import the necessary Sidebar components:
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar"

export default function AdminPanel() {
  const [activeSection, setActiveSection] = useState("dashboard")
  const [searchTerm, setSearchTerm] = useState("")
  const [editingUser, setEditingUser] = useState<number | null>(null)

  const [stats, setStats] = useState({
    totalUsers: 12247,
    activeListings: 8924,
    completedOrders: 4567,
    pendingApprovals: 23,
    revenue: 2450000,
    growth: 12.5,
  })

  const [users, setUsers] = useState([
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
  ])

  const [listings, setListings] = useState([
    {
      id: 1,
      title: "Vintage Denim Jacket",
      submittedBy: "Sarah Johnson",
      category: "Women",
      status: "Pending",
      dateSubmitted: "2024-01-20",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop",
      rupees: 1500,
      description: "Beautiful vintage denim jacket in excellent condition.",
      condition: "Excellent",
      tags: ["vintage", "denim", "jacket"],
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
      description: "Authentic designer handbag with original tags.",
      condition: "Like New",
      tags: ["designer", "handbag", "luxury"],
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
      description: "Comfortable running shoes, barely used.",
      condition: "Good",
      tags: ["shoes", "running", "sneakers"],
    },
  ])

  const [orders, setOrders] = useState([
    {
      id: 1,
      buyer: "Sarah Johnson",
      seller: "Emma Davis",
      item: "Wool Sweater",
      status: "Completed",
      date: "2024-01-18",
      rupees: 1800,
      itemId: 101, // Example item ID
      deliveryAddress: "123 Main St, Anytown",
    },
    {
      id: 2,
      buyer: "Mike Chen",
      seller: "Sarah Johnson",
      item: "Vintage Jeans",
      status: "In Transit",
      date: "2024-01-20",
      rupees: 1200,
      itemId: 102,
      deliveryAddress: "456 Oak Ave, Otherville",
    },
    {
      id: 3,
      buyer: "Emma Davis",
      seller: "Mike Chen",
      item: "Casual Shirt",
      status: "Processing",
      date: "2024-01-22",
      rupees: 900,
      itemId: 103,
      deliveryAddress: "789 Pine Ln, Somewhere",
    },
  ])

  const [userEditForm, setUserEditForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    age: 0,
    gender: "",
    address: "",
    rupees: 0,
  })

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3, color: "text-blue-600" },
    { id: "users", label: "Users", icon: Users, color: "text-emerald-600" },
    { id: "listings", label: "Listings", icon: Package, color: "text-purple-600" },
    { id: "orders", label: "Orders", icon: ShoppingBag, color: "text-orange-600" },
    { id: "analytics", label: "Analytics", icon: TrendingUp, color: "text-pink-600" },
    { id: "settings", label: "Settings", icon: Settings, color: "text-gray-600" },
  ]

  useEffect(() => {
    console.log("Fetching admin data...")
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
      case "Approved":
      case "Completed":
        return "bg-emerald-100 text-emerald-800 border-emerald-200"
      case "Pending":
      case "Processing":
      case "In Transit":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Rejected":
      case "Banned":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const handleUserAction = (userId: number, action: string) => {
    console.log(`${action} user ${userId}`)
    if (action === "ban") {
      setUsers((prev) => prev.map((user) => (user.id === userId ? { ...user, status: "Banned" } : user)))
    }
  }

  const handleEditUser = (userId: number) => {
    const user = users.find((u) => u.id === userId)
    if (user) {
      setUserEditForm({
        name: user.name,
        email: user.email,
        phone: user.phone,
        location: user.location,
        age: user.age,
        gender: user.gender,
        address: user.address,
        rupees: user.rupees,
      })
      setEditingUser(userId)
    }
  }

  const handleSaveUser = () => {
    if (editingUser) {
      setUsers((prev) => prev.map((user) => (user.id === editingUser ? { ...user, ...userEditForm } : user)))
      setEditingUser(null)
      console.log("Updating user...", userEditForm)
    }
  }

  const handleListingAction = (listingId: number, action: string) => {
    console.log(`${action} listing ${listingId}`)
    setListings((prev) =>
      prev.map((listing) =>
        listing.id === listingId ? { ...listing, status: action === "approve" ? "Approved" : "Rejected" } : listing,
      ),
    )
  }

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredListings = listings.filter(
    (listing) =>
      listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.submittedBy.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredOrders = orders.filter(
    (order) =>
      order.buyer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.seller.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.item.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const renderDashboard = () => (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 animate-slide-up flex items-center">
            <Leaf className="h-10 w-10 mr-4 text-emerald-600" /> {/* Added Leaf icon */}
            <Sparkles className="h-10 w-10 mr-4 text-emerald-600 animate-pulse" />
            Admin Dashboard
          </h1>
          <p className="text-gray-600 mt-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Welcome back! Here's what's happening with ReWear today.
          </p>
        </div>
        <div className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button variant="outline" size="icon" className="hover:scale-110 transition-all duration-300 bg-transparent">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="hover:scale-110 transition-all duration-300 bg-transparent">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {[
          {
            title: "Total Users",
            value: stats.totalUsers.toLocaleString(),
            change: "+12%",
            icon: Users,
            color: "bg-blue-500",
            bgColor: "bg-blue-50",
            textColor: "text-blue-600",
          },
          {
            title: "Active Listings",
            value: stats.activeListings.toLocaleString(),
            change: "+8%",
            icon: Package,
            color: "bg-emerald-500",
            bgColor: "bg-emerald-50",
            textColor: "text-emerald-600",
          },
          {
            title: "Orders",
            value: stats.completedOrders.toLocaleString(),
            change: "+15%",
            icon: ShoppingBag,
            color: "bg-purple-500",
            bgColor: "bg-purple-50",
            textColor: "text-purple-600",
          },
          {
            title: "Pending",
            value: stats.pendingApprovals.toString(),
            change: "-5%",
            icon: Clock,
            color: "bg-yellow-500",
            bgColor: "bg-yellow-50",
            textColor: "text-yellow-600",
          },
          {
            title: "Revenue",
            value: `₹${(stats.revenue / 100000).toFixed(1)}L`,
            change: "+18%",
            icon: IndianRupee,
            color: "bg-green-500",
            bgColor: "bg-green-50",
            textColor: "text-green-600",
          },
          {
            title: "Growth",
            value: `${stats.growth}%`,
            change: "+2.3%",
            icon: TrendingUp,
            color: "bg-pink-500",
            bgColor: "bg-pink-50",
            textColor: "text-pink-600",
          },
        ].map((stat, index) => (
          <Card
            key={stat.title}
            className="hover:shadow-xl transition-all duration-500 border-stone-200 hover:scale-105 animate-slide-up bg-white rounded-xl shadow-lg" // Updated card styling
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.bgColor} p-3 rounded-2xl`}>
                  <stat.icon className={`h-6 w-6 ${stat.textColor}`} />
                </div>
                <Badge className="bg-green-100 text-green-800 border-green-200">{stat.change}</Badge>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <Card
          className="border-stone-200 hover:shadow-xl transition-all duration-500 animate-slide-up bg-white rounded-xl shadow-lg" // Updated card styling
          style={{ animationDelay: "0.7s" }}
        >
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center text-xl">
              <Activity className="h-6 w-6 mr-3 text-emerald-600" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                icon: CheckCircle,
                color: "text-green-600 bg-green-100",
                title: "New listing approved",
                description: "Vintage Denim Jacket by Sarah Johnson",
                time: "2 hours ago",
              },
              {
                icon: Users,
                color: "text-blue-600 bg-blue-100",
                title: "New user registered",
                description: "alex.smith@email.com joined the platform",
                time: "4 hours ago",
              },
              {
                icon: ShoppingBag,
                color: "text-emerald-600 bg-emerald-100",
                title: "Order completed",
                description: "Wool Sweater swap between Sarah and Emma",
                time: "6 hours ago",
              },
              {
                icon: AlertTriangle,
                color: "text-yellow-600 bg-yellow-100",
                title: "Item reported",
                description: "User reported suspicious listing",
                time: "8 hours ago",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 bg-stone-50 rounded-2xl hover:bg-stone-100 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className={`p-2 rounded-xl ${activity.color}`}>
                  <activity.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{activity.title}</p>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                </div>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card
          className="border-stone-200 hover:shadow-xl transition-all duration-500 animate-slide-up bg-white rounded-xl shadow-lg" // Updated card styling
          style={{ animationDelay: "0.8s" }}
        >
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center text-xl">
              <BarChart3 className="h-6 w-6 mr-3 text-purple-600" />
              Quick Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              { label: "Top Category", value: "Women's Fashion", percentage: 45 },
              { label: "Avg. Item Price", value: "₹2,450", percentage: 78 },
              { label: "User Satisfaction", value: "4.8/5", percentage: 96 },
              { label: "Completion Rate", value: "94%", percentage: 94 },
            ].map((insight, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${0.9 + index * 0.1}s` }}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">{insight.label}</span>
                  <span className="text-sm font-bold text-gray-900">{insight.value}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${insight.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderUsers = () => (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 animate-slide-up flex items-center">
            <Users className="h-10 w-10 mr-4 text-emerald-600" />
            User Management
          </h1>
          <p className="text-gray-600 mt-2">Manage and monitor user accounts</p>
        </div>
        <div className="flex items-center space-x-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64 focus:ring-2 focus:ring-emerald-500 transition-all border-stone-300"
            />
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white hover:scale-105 transition-all duration-300">
            <Users className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>
      </div>

      {/* User Edit Modal */}
      {editingUser && (
        <Card className="border-emerald-200 bg-gradient-to-r from-emerald-50 to-emerald-100 animate-slide-up shadow-xl">
          <CardHeader>
            <CardTitle className="text-emerald-800 flex items-center text-xl">
              <Edit3 className="h-6 w-6 mr-3" />
              Edit User Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Full Name", key: "name", type: "text" },
                { label: "Email", key: "email", type: "email" },
                { label: "Phone", key: "phone", type: "tel" },
                { label: "Age", key: "age", type: "number" },
                { label: "Location", key: "location", type: "text" },
                { label: "Balance (₹)", key: "rupees", type: "number" },
              ].map((field, index) => (
                <div key={field.key} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{field.label}</label>
                  <Input
                    type={field.type}
                    value={userEditForm[field.key as keyof typeof userEditForm]}
                    onChange={(e) =>
                      setUserEditForm({
                        ...userEditForm,
                        [field.key]: field.type === "number" ? Number.parseInt(e.target.value) || 0 : e.target.value,
                      })
                    }
                    className="border-stone-300 focus:border-emerald-500 transition-all"
                  />
                </div>
              ))}
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
              <select
                value={userEditForm.gender}
                onChange={(e) => setUserEditForm({ ...userEditForm, gender: e.target.value })}
                className="w-full border border-stone-300 rounded-lg px-3 py-2 focus:border-emerald-500 focus:outline-none transition-all"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
              <Input
                value={userEditForm.address}
                onChange={(e) => setUserEditForm({ ...userEditForm, address: e.target.value })}
                className="border-stone-300 focus:border-emerald-500 transition-all"
              />
            </div>
            <div className="flex space-x-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <Button
                onClick={handleSaveUser}
                className="bg-emerald-600 hover:bg-emerald-700 text-white hover:scale-105 transition-all duration-300"
              >
                <Check className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
              <Button
                variant="outline"
                onClick={() => setEditingUser(null)}
                className="hover:scale-105 transition-all duration-300"
              >
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Users Table */}
      <Card
        className="border-stone-200 hover:shadow-xl transition-all duration-500 animate-slide-up bg-white/80 backdrop-blur-sm"
        style={{ animationDelay: "0.3s" }}
      >
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-stone-50 to-stone-100 border-b border-stone-200">
                <tr>
                  <th className="text-left p-6 font-semibold text-gray-900">User</th>
                  <th className="text-left p-6 font-semibold text-gray-900">Contact</th>
                  <th className="text-left p-6 font-semibold text-gray-900">Details</th>
                  <th className="text-left p-6 font-semibold text-gray-900">Balance</th>
                  <th className="text-left p-6 font-semibold text-gray-900">Status</th>
                  <th className="text-left p-6 font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, index) => (
                  <tr
                    key={user.id}
                    className="border-b border-stone-200 hover:bg-stone-50 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <td className="p-6">
                      <div className="flex items-center space-x-4">
                        <Image
                          src={user.avatar || "/placeholder.svg"}
                          alt={user.name}
                          width={48}
                          height={48}
                          className="rounded-full hover:scale-110 transition-transform duration-300"
                        />
                        <div>
                          <p className="font-semibold text-gray-900">{user.name}</p>
                          <p className="text-sm text-gray-600">
                            {user.age} years, {user.gender}
                          </p>
                          <Badge
                            variant={user.role === "Moderator" ? "default" : "secondary"}
                            className="mt-1 hover:scale-105 transition-transform"
                          >
                            {user.role}
                          </Badge>
                        </div>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600 flex items-center">
                          <Mail className="h-4 w-4 mr-2 text-gray-400" />
                          {user.email}
                        </p>
                        <p className="text-sm text-gray-600 flex items-center">
                          <Phone className="h-4 w-4 mr-2 text-gray-400" />
                          {user.phone}
                        </p>
                        <p className="text-sm text-gray-600 flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                          {user.location}
                        </p>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600 flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                          Joined: {user.joinDate}
                        </p>
                        <p className="text-sm text-gray-600 flex items-center">
                          <RefreshCw className="h-4 w-4 mr-2 text-gray-400" />
                          {user.totalSwaps} swaps
                        </p>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="bg-emerald-50 rounded-xl p-3 inline-block">
                        <p className="font-bold text-emerald-600 flex items-center text-lg">
                          <IndianRupee className="h-5 w-5 mr-1" />
                          {user.rupees.toLocaleString()}
                        </p>
                      </div>
                    </td>
                    <td className="p-6">
                      <Badge className={`${getStatusColor(user.status)} border hover:scale-105 transition-transform`}>
                        {user.status}
                      </Badge>
                    </td>
                    <td className="p-6">
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEditUser(user.id)}
                          className="hover:scale-110 transition-all duration-300 hover:bg-emerald-50 hover:border-emerald-300"
                        >
                          <Edit3 className="h-4 w-4" />
                        </Button>
                        <Link href={`/admin/user/${user.id}`}>
                          <Button
                            size="sm"
                            variant="outline"
                            className="hover:scale-110 transition-all duration-300 hover:bg-blue-50 hover:border-blue-300 bg-transparent"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleUserAction(user.id, "ban")}
                          className="text-red-600 hover:text-red-700 hover:scale-110 transition-all duration-300 hover:bg-red-50 hover:border-red-300"
                        >
                          <Ban className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderListings = () => (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 animate-slide-up flex items-center">
            <Package className="h-10 w-10 mr-4 text-purple-600" />
            Listing Management
          </h1>
          <p className="text-gray-600 mt-2">Review and manage product listings</p>
        </div>
        <div className="flex items-center space-x-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search listings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64 focus:ring-2 focus:ring-purple-500 transition-all border-stone-300"
            />
          </div>
        </div>
      </div>

      <Card
        className="border-stone-200 hover:shadow-xl transition-all duration-500 animate-slide-up bg-white/80 backdrop-blur-sm"
        style={{ animationDelay: "0.3s" }}
      >
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-stone-50 to-stone-100 border-b border-stone-200">
                <tr>
                  <th className="text-left p-6 font-semibold text-gray-900">Item</th>
                  <th className="text-left p-6 font-semibold text-gray-900">Submitted By</th>
                  <th className="text-left p-6 font-semibold text-gray-900">Category</th>
                  <th className="text-left p-6 font-semibold text-gray-900">Status</th>
                  <th className="text-left p-6 font-semibold text-gray-900">Price</th>
                  <th className="text-left p-6 font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredListings.map((listing, index) => (
                  <tr
                    key={listing.id}
                    className="border-b border-stone-200 hover:bg-stone-50 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <td className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <Image
                            src={listing.image || "/placeholder.svg"}
                            alt={listing.title}
                            width={80}
                            height={80}
                            className="rounded-xl object-cover hover:scale-110 transition-transform duration-300 shadow-lg"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-lg">{listing.title}</p>
                          <p className="text-sm text-gray-600 flex items-center mt-1">
                            <Calendar className="h-4 w-4 mr-1" />
                            {listing.dateSubmitted}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-6">
                      <p className="font-medium text-gray-900">{listing.submittedBy}</p>
                    </td>
                    <td className="p-6">
                      <Badge variant="outline" className="hover:scale-105 transition-transform">
                        {listing.category}
                      </Badge>
                    </td>
                    <td className="p-6">
                      <Badge
                        className={`${getStatusColor(listing.status)} border hover:scale-105 transition-transform`}
                      >
                        {listing.status}
                      </Badge>
                    </td>
                    <td className="p-6">
                      <div className="bg-emerald-50 rounded-xl p-3 inline-block">
                        <p className="text-emerald-600 font-bold flex items-center text-lg">
                          <IndianRupee className="h-5 w-5 mr-1" />
                          {listing.rupees.toLocaleString()}
                        </p>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleListingAction(listing.id, "approve")}
                          className="text-green-600 hover:text-green-700 hover:scale-110 transition-all duration-300 hover:bg-green-50 hover:border-green-300"
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleListingAction(listing.id, "reject")}
                          className="text-red-600 hover:text-red-700 hover:scale-110 transition-all duration-300 hover:bg-red-50 hover:border-red-300"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                        <Link href={`/admin/listing/${listing.id}`}>
                          <Button
                            size="sm"
                            variant="outline"
                            className="hover:scale-110 transition-all duration-300 hover:bg-blue-50 hover:border-blue-300 bg-transparent"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleListingAction(listing.id, "delete")}
                          className="text-red-600 hover:text-red-700 hover:scale-110 transition-all duration-300 hover:bg-red-50 hover:border-red-300"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderOrders = () => (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 animate-slide-up flex items-center">
            <ShoppingBag className="h-10 w-10 mr-4 text-orange-600" />
            Order Management
          </h1>
          <p className="text-gray-600 mt-2">Track and manage all orders</p>
        </div>
        <div className="flex items-center space-x-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64 focus:ring-2 focus:ring-orange-500 transition-all border-stone-300"
            />
          </div>
        </div>
      </div>

      <Card
        className="border-stone-200 hover:shadow-xl transition-all duration-500 animate-slide-up bg-white/80 backdrop-blur-sm"
        style={{ animationDelay: "0.3s" }}
      >
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-stone-50 to-stone-100 border-b border-stone-200">
                <tr>
                  <th className="text-left p-6 font-semibold text-gray-900">Order ID</th>
                  <th className="text-left p-6 font-semibold text-gray-900">Buyer</th>
                  <th className="text-left p-6 font-semibold text-gray-900">Seller</th>
                  <th className="text-left p-6 font-semibold text-gray-900">Item</th>
                  <th className="text-left p-6 font-semibold text-gray-900">Status</th>
                  <th className="text-left p-6 font-semibold text-gray-900">Amount</th>
                  <th className="text-left p-6 font-semibold text-gray-900">Date</th>
                  <th className="text-left p-6 font-semibold text-gray-900">Actions</th> {/* Added Actions column */}
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order, index) => (
                  <tr
                    key={order.id}
                    className="border-b border-stone-200 hover:bg-stone-50 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <td className="p-6">
                      <div className="bg-blue-50 rounded-xl p-3 inline-block">
                        <p className="font-bold text-blue-600">#{order.id.toString().padStart(4, "0")}</p>
                      </div>
                    </td>
                    <td className="p-6">
                      <p className="font-medium text-gray-900">{order.buyer}</p>
                    </td>
                    <td className="p-6">
                      <p className="font-medium text-gray-900">{order.seller}</p>
                    </td>
                    <td className="p-6">
                      <p className="font-medium text-gray-900">{order.item}</p>
                    </td>
                    <td className="p-6">
                      <Badge className={`${getStatusColor(order.status)} border hover:scale-105 transition-transform`}>
                        {order.status}
                      </Badge>
                    </td>
                    <td className="p-6">
                      <div className="bg-emerald-50 rounded-xl p-3 inline-block">
                        <p className="text-emerald-600 font-bold flex items-center text-lg">
                          <IndianRupee className="h-5 w-5 mr-1" />
                          {order.rupees.toLocaleString()}
                        </p>
                      </div>
                    </td>
                    <td className="p-6">
                      <p className="text-gray-600 flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {order.date}
                      </p>
                    </td>
                    <td className="p-6">
                      <Link href={`/admin/order/${order.id}`}>
                        <Button
                          size="sm"
                          variant="outline"
                          className="hover:scale-110 transition-all duration-300 hover:bg-blue-50 hover:border-blue-300 bg-transparent"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return renderDashboard()
      case "users":
        return renderUsers()
      case "listings":
        return renderListings()
      case "orders":
        return renderOrders()
      default:
        return renderDashboard()
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {" "}
      {/* Changed background to white */}
      <SidebarProvider>
        <div className="flex w-full">
          <Sidebar collapsible="icon" variant="sidebar" className="bg-gradient-to-br from-emerald-50 to-emerald-100">
            {" "}
            {/* Updated sidebar background */}
            <SidebarHeader className="border-b border-stone-200 p-6">
              <div className="flex items-center space-x-2 animate-fade-in">
                <div className="bg-emerald-600 p-2 rounded-lg animate-pulse">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-emerald-700">ReWear</h2>
                  <p className="text-sm text-gray-600">Admin Panel</p>
                </div>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu className="p-4">
                {sidebarItems.map((item, index) => (
                  <SidebarMenuItem
                    key={item.id}
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <SidebarMenuButton
                      onClick={() => setActiveSection(item.id)}
                      isActive={activeSection === item.id}
                      className="w-full justify-start hover:scale-105 transition-all duration-200 data-[active=true]:bg-emerald-600 data-[active=true]:text-white" // Updated active state styling
                      tooltip={item.label}
                    >
                      <item.icon className="h-5 w-5 mr-3" />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarContent>
            {/* Admin Profile - Updated styling */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-emerald-600 rounded-2xl p-4 animate-fade-in">
                {" "}
                {/* Changed background to solid green */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    {" "}
                    {/* Changed icon background to white */}
                    <Shield className="h-6 w-6 text-emerald-600" /> {/* Changed icon color to green */}
                  </div>
                  <div>
                    <p className="font-semibold text-white">Admin User</p> {/* Changed text color to white */}
                    <p className="text-sm text-emerald-100">Super Administrator</p>{" "}
                    {/* Changed text color to lighter green */}
                  </div>
                </div>
              </div>
            </div>
          </Sidebar>

          <SidebarInset className="flex-1">
            {" "}
            {/* Removed ml-72 here */}
            <header className="border-b border-stone-200 bg-white/95 backdrop-blur-sm sticky top-0 z-10">
              <div className="flex items-center justify-between px-6 py-4">
                <SidebarTrigger className="hover:scale-110 transition-transform" />
                <div className="flex items-center space-x-4 animate-fade-in">
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">Welcome back, Admin</p>
                    <p className="text-xs text-gray-600">Last login: Today at 9:30 AM</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-white font-bold text-lg">A</span>
                  </div>
                </div>
              </div>
            </header>
            <main className="p-6">{renderContent()}</main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}
