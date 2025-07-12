"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Upload, X, Eye, Loader2, Check, AlertCircle, Package, IndianRupee } from "lucide-react"
import Image from "next/image"

export default function AddItemPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    type: "",
    size: "",
    condition: "",
    tags: "",
    rupees: "",
  })

  const [images, setImages] = useState<string[]>([])
  const [isUploading, setIsUploading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showPreview, setShowPreview] = useState(false)

  const categories = ["Men", "Women", "Kids", "Accessories", "Shoes", "Bags"]
  const types = ["Tops", "Bottoms", "Dresses", "Outerwear", "Activewear", "Formal"]
  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "One Size"]
  const conditions = ["Like New", "Excellent", "Good", "Fair"]

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    setIsUploading(true)

    try {
      // Simulate upload to /api/upload
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const newImages = Array.from(files).map(
        (file, index) => `/placeholder.svg?height=300&width=300&text=Image${images.length + index + 1}`,
      )

      setImages((prev) => [...prev, ...newImages])
    } catch (error) {
      console.error("Upload failed:", error)
    } finally {
      setIsUploading(false)
    }
  }

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.title.trim()) newErrors.title = "Title is required"
    if (!formData.description.trim()) newErrors.description = "Description is required"
    if (!formData.category) newErrors.category = "Category is required"
    if (!formData.condition) newErrors.condition = "Condition is required"
    if (!formData.rupees || Number.parseInt(formData.rupees) < 1) newErrors.rupees = "Valid rupees value is required"
    if (images.length === 0) newErrors.images = "At least one image is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // POST /api/items
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Success - redirect to dashboard or item page
      window.location.href = "/dashboard"
    } catch (error) {
      console.error("Failed to create item:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const getTagsArray = () => {
    return formData.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0)
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Item</h1>
          <p className="text-gray-600">Share your pre-loved fashion with the ReWear community</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="space-y-6">
            <Card className="border-stone-200">
              <CardHeader>
                <CardTitle>Item Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                    <Input
                      placeholder="e.g., Vintage Denim Jacket"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className={`border-stone-300 focus:border-emerald-500 ${errors.title ? "border-red-500" : ""}`}
                    />
                    {errors.title && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.title}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                    <Textarea
                      placeholder="Describe the item's style, fit, and any special features..."
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className={`border-stone-300 focus:border-emerald-500 ${errors.description ? "border-red-500" : ""}`}
                    />
                    {errors.description && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.description}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className={`w-full border border-stone-300 rounded-lg px-3 py-2 focus:border-emerald-500 focus:outline-none ${errors.category ? "border-red-500" : ""}`}
                      >
                        <option value="">Select category</option>
                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                      {errors.category && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.category}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full border border-stone-300 rounded-lg px-3 py-2 focus:border-emerald-500 focus:outline-none"
                      >
                        <option value="">Select type</option>
                        {types.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                      <select
                        value={formData.size}
                        onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                        className="w-full border border-stone-300 rounded-lg px-3 py-2 focus:border-emerald-500 focus:outline-none"
                      >
                        <option value="">Select size</option>
                        {sizes.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Condition *</label>
                      <select
                        value={formData.condition}
                        onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                        className={`w-full border border-stone-300 rounded-lg px-3 py-2 focus:border-emerald-500 focus:outline-none ${errors.condition ? "border-red-500" : ""}`}
                      >
                        <option value="">Select condition</option>
                        {conditions.map((condition) => (
                          <option key={condition} value={condition}>
                            {condition}
                          </option>
                        ))}
                      </select>
                      {errors.condition && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.condition}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                    <Input
                      placeholder="e.g., vintage, designer, casual (comma separated)"
                      value={formData.tags}
                      onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                      className="border-stone-300 focus:border-emerald-500"
                    />
                    <p className="mt-1 text-sm text-gray-500">Separate tags with commas</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price (₹) *</label>
                    <Input
                      type="number"
                      placeholder="e.g., 1500"
                      value={formData.rupees}
                      onChange={(e) => setFormData({ ...formData, rupees: e.target.value })}
                      className={`border-stone-300 focus:border-emerald-500 ${errors.rupees ? "border-red-500" : ""}`}
                      min="1"
                    />
                    {errors.rupees && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.rupees}
                      </p>
                    )}
                    <p className="mt-1 text-sm text-gray-500">Price in Indian Rupees</p>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Image Upload */}
            <Card className="border-stone-200">
              <CardHeader>
                <CardTitle>Photos *</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Upload Area */}
                  <div className="border-2 border-dashed border-stone-300 rounded-lg p-8 text-center hover:border-emerald-500 transition-colors">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                      disabled={isUploading}
                    />
                    <label htmlFor="image-upload" className="cursor-pointer">
                      {isUploading ? (
                        <div className="flex flex-col items-center">
                          <Loader2 className="h-8 w-8 text-emerald-600 animate-spin mb-2" />
                          <p className="text-gray-600">Uploading images...</p>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center">
                          <Upload className="h-8 w-8 text-gray-400 mb-2" />
                          <p className="text-gray-600 mb-1">Click to upload images</p>
                          <p className="text-sm text-gray-500">PNG, JPG up to 10MB each</p>
                        </div>
                      )}
                    </label>
                  </div>

                  {errors.images && (
                    <p className="text-sm text-red-600 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.images}
                    </p>
                  )}

                  {/* Image Preview Grid */}
                  {images.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {images.map((image, index) => (
                        <div key={index} className="relative group">
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`Upload ${index + 1}`}
                            width={150}
                            height={150}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          <button
                            onClick={() => removeImage(index)}
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="h-4 w-4" />
                          </button>
                          {index === 0 && (
                            <Badge className="absolute bottom-2 left-2 bg-emerald-600 text-white">Main</Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <Button
                type="submit"
                onClick={handleSubmit}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white h-12"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating listing...
                  </>
                ) : (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Create Listing
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowPreview(!showPreview)}
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
              >
                <Eye className="mr-2 h-4 w-4" />
                Preview
              </Button>
            </div>
          </div>

          {/* Preview Section */}
          <div className="space-y-6">
            <Card className="border-stone-200 sticky top-8">
              <CardHeader>
                <CardTitle>Live Preview</CardTitle>
              </CardHeader>
              <CardContent>
                {formData.title || images.length > 0 ? (
                  <div className="space-y-4">
                    {/* Main Image */}
                    {images.length > 0 && (
                      <div className="relative">
                        <Image
                          src={images[0] || "/placeholder.svg"}
                          alt="Main preview"
                          width={400}
                          height={300}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        {formData.condition && (
                          <Badge className="absolute top-3 left-3 bg-emerald-600 text-white">
                            {formData.condition}
                          </Badge>
                        )}
                      </div>
                    )}

                    {/* Item Info */}
                    <div className="space-y-3">
                      {formData.title && <h3 className="text-xl font-bold text-gray-900">{formData.title}</h3>}

                      {(formData.category || formData.type || formData.size) && (
                        <div className="flex flex-wrap gap-2">
                          {formData.category && <Badge variant="outline">{formData.category}</Badge>}
                          {formData.type && <Badge variant="outline">{formData.type}</Badge>}
                          {formData.size && <Badge variant="outline">Size {formData.size}</Badge>}
                        </div>
                      )}

                      {formData.description && <p className="text-gray-600">{formData.description}</p>}

                      {getTagsArray().length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {getTagsArray().map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                      )}

                      {formData.rupees && (
                        <div className="bg-emerald-50 rounded-lg p-3">
                          <p className="text-emerald-700 font-bold text-lg flex items-center">
                            <IndianRupee className="h-4 w-4 mr-1" />
                            {formData.rupees}
                          </p>
                        </div>
                      )}

                      {/* Action Buttons Preview */}
                      <div className="space-y-2 pt-4">
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white" disabled>
                          Request Swap
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full border-emerald-600 text-emerald-600 bg-transparent"
                          disabled
                        >
                          Redeem with Points
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <Package className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>Start filling out the form to see your listing preview</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
