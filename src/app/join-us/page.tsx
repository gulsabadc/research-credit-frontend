"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/global-components/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/global-components/card"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function JoinUs() {
  const [formData, setFormData] = useState({
    companyName: "",
    ein: "",
    website: "",
    industry: "",
    stateOfIncorporation: "",
    employeeCount: "",
    fullName: "",
    email: "",
    contactNo: "",
    agreeToTerms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Join Us</h1>
          <p className="text-gray-600">Start Maximizing Your R&D Tax Credits Today</p>
        </div>

        <Card className="bg-white shadow-sm">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Company Info Section */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Company Info</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="companyName" className="text-sm font-medium text-gray-700">
                      Company Name *
                    </Label>
                    <Input
                      id="companyName"
                      type="text"
                      required
                      className="mt-1"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange("companyName", e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="ein" className="text-sm font-medium text-gray-700">
                      EIN *
                    </Label>
                    <Input
                      id="ein"
                      type="text"
                      required
                      className="mt-1"
                      value={formData.ein}
                      onChange={(e) => handleInputChange("ein", e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="website" className="text-sm font-medium text-gray-700">
                      Website / LinkedIn *
                    </Label>
                    <Input
                      id="website"
                      type="url"
                      required
                      className="mt-1"
                      value={formData.website}
                      onChange={(e) => handleInputChange("website", e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="industry" className="text-sm font-medium text-gray-700">
                      Industry *
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("industry", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="life-science">Life Science</SelectItem>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="stateOfIncorporation" className="text-sm font-medium text-gray-700">
                      State Of Incorporation *
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("stateOfIncorporation", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="alabama">Alabama</SelectItem>
                        <SelectItem value="alaska">Alaska</SelectItem>
                        <SelectItem value="arizona">Arizona</SelectItem>
                        <SelectItem value="arkansas">Arkansas</SelectItem>
                        <SelectItem value="california">California</SelectItem>
                        <SelectItem value="colorado">Colorado</SelectItem>
                        <SelectItem value="connecticut">Connecticut</SelectItem>
                        <SelectItem value="delaware">Delaware</SelectItem>
                        <SelectItem value="florida">Florida</SelectItem>
                        <SelectItem value="georgia">Georgia</SelectItem>
                        {/* Add more states as needed */}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="employeeCount" className="text-sm font-medium text-gray-700">
                      How Many Employees Do You Have? *
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("employeeCount", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select employee count" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 Members</SelectItem>
                        <SelectItem value="11-50">11-50 Members</SelectItem>
                        <SelectItem value="51-100">51-100 Members</SelectItem>
                        <SelectItem value="101-500">101-500 Members</SelectItem>
                        <SelectItem value="500+">500+ Members</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Point-of-contact Section */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Point-of-contact</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      required
                      className="mt-1"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="mt-1"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor="contactNo" className="text-sm font-medium text-gray-700">
                      Contact No.
                    </Label>
                    <Input
                      id="contactNo"
                      type="tel"
                      className="mt-1"
                      value={formData.contactNo}
                      onChange={(e) => handleInputChange("contactNo", e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Terms and Submit */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                  />
                  <Label htmlFor="terms" className="text-sm text-gray-700">
                    I agree to CreditPro&apos;s{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#96ED00] hover:bg-[#85d400] text-black font-medium py-3 rounded-lg transition-colors"
                  disabled={!formData.agreeToTerms}
                >
                  Submit →
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
