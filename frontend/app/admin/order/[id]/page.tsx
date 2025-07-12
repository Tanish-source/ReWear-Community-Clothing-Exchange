"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { IndianRupee, Calendar, User, ArrowLeft, Truck, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AdminOrderDetailPage() {
  const params = useParams()
  const orderId = Number.parseInt(params.id as string)

  // Simulate fetching order data
  const [order, setOrder] = useState<any | null>(null)

  // Dummy data for demonstration
  const allOrders = [
    {
      id: 1,
      buyer: "Sarah Johnson",
      seller: "Emma Davis",
      item: "Wool Sweater",
      status: "Completed",
      date: "2024-01-18",
      rupees: 1800,
      itemId: 101,
      deliveryAddress: "123 Main St, Bandra West, Mumbai - 400050",
      itemImage: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=200&h=200&fit=crop", // Example image
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
      deliveryAddress: "456 Tech Park, Gurgaon, Delhi - 122001",
      itemImage: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=200&fit=crop",
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
      deliveryAddress: "789 IT Hub, Whitefield, Bangalore - 560066",
      itemImage: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=200&h=200&fit=crop",
    },
  ]

  useEffect(() => {
    // In a real application, you would fetch data from an API:
    // fetch(`/api/admin/orders/${orderId}`).then(res => res.json()).then(data => setOrder(data));
    const foundOrder = allOrders.find((o) => o.id === orderId)
    setOrder(foundOrder)
  }, [orderId])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-emerald-100 text-emerald-800 border-emerald-200"
      case "In Transit":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "Processing":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <p className="text-gray-600">Loading order details...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 animate-fade-in">
        <div className="flex items-center justify-between mb-8">
          <Link href="/admin?section=orders">
            <Button variant="ghost" className="text-gray-600 hover:text-emerald-600">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Orders
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Order Details #{order.id.toString().padStart(4, "0")}</h1>
          <div className="flex space-x-2">
            <Button variant="outline" className="text-blue-600 hover:bg-blue-50 bg-transparent">
              <Truck className="h-4 w-4 mr-2" />
              Update Status
            </Button>
            <Button variant="outline" className="text-green-600 hover:bg-green-50 bg-transparent">
              <CheckCircle className="h-4 w-4 mr-2" />
              Mark Completed
            </Button>
          </div>
        </div>

        <Card className="border-stone-200 mb-6">
          <CardContent className="p-6 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <Image
              src={order.itemImage || "/placeholder.svg"}
              alt={order.item}
              width={150}
              height={150}
              className="rounded-lg object-cover shadow-md"
            />
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{order.item}</h2>
              <Badge className={`mb-4 ${getStatusColor(order.status)}`}>{order.status}</Badge>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                <p className="flex items-center">
                  <User className="h-4 w-4 mr-2 text-gray-500" />
                  Buyer: {order.buyer}
                </p>
                <p className="flex items-center">
                  <User className="h-4 w-4 mr-2 text-gray-500" />
                  Seller: {order.seller}
                </p>
                <p className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                  Order Date: {order.date}
                </p>
                <p className="flex items-center">
                  <IndianRupee className="h-4 w-4 mr-2 text-gray-500" />
                  Amount: ₹{order.rupees.toLocaleString()}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-stone-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-900">Delivery Information</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-700">{order.deliveryAddress}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
