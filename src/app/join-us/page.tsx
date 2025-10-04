"use client";

import type React from "react";

import { useState } from "react";
// import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
// import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/Footer";
import { PhoneInput } from "@/components/ui/phone-input";
import { Button } from "@/components/global-components/button";
import { Card, CardContent } from "@/components/global-components/card";
import JoinUsNavigation from "./components/join-us-nav";

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
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <JoinUsNavigation />

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center gap-[28px]">
          <h1
            className="text-[#020202] not-italic text-[66px] leading-[66px] tracking-[-0.02em] text-center [leading-trim:cap-height]"
            style={{ fontFamily: "var(--font-gilroy-bold)" }}
          >
            Join Us
          </h1>
          <p className="text-black/80 font-grotesk font-normal text-[26px] leading-[30px]">
            Start Maximizing Your R&D Tax Credits Today
          </p>
        </div>

        <Card className="bg-white border-0">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Company Info Section */}
              <div>
                <h2
                  className="text-4xl leading-[66px] text-[#020202] mb-6"
                  style={{ fontFamily: "var(--font-gilroy-bold)" }}
                >
                  Company Info
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="companyName"
                      className="text-sm gap-0.5 font-medium text-gray-700"
                    >
                      Company Name
                      <span className="text-red-500 h-[15px] w-[12px] opacity-60 font-normal text-[22px] leading-8 mb-4 pl-0 ml-0">
                        *
                      </span>
                    </Label>
                    <Input
                      id="companyName"
                      type="text"
                      required
                      className="mt-1 border-[#0002841F]/12"
                      value={formData.companyName}
                      onChange={(e) =>
                        handleInputChange("companyName", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="ein"
                      className="text-sm gap-0.5 font-medium text-gray-700"
                    >
                      EIN
                      <span className="text-red-500 h-[15px] w-[12px] opacity-60 font-normal text-[22px] leading-8 mb-4 pl-0 ml-0">
                        *
                      </span>
                    </Label>
                    <Input
                      id="ein"
                      type="text"
                      required
                      className="mt-1 border-[#0002841F]/12"
                      value={formData.ein}
                      onChange={(e) => handleInputChange("ein", e.target.value)}
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="website"
                      className="text-sm gap-0.5 font-medium text-gray-700"
                    >
                      Website / LinkedIn
                      <span className="text-red-500 h-[15px] w-[12px] opacity-60 font-normal text-[22px] leading-8 mb-4 pl-0 ml-0">
                        *
                      </span>
                    </Label>
                    <Input
                      id="website"
                      type="url"
                      required
                      className="mt-1 border-[#0002841F]/12"
                      value={formData.website}
                      onChange={(e) =>
                        handleInputChange("website", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="industry"
                      className="text-sm gap-0.5 font-medium text-gray-700"
                    >
                      Industry
                      <span className="text-red-500 h-[15px] w-[12px] opacity-60 font-normal text-[22px] leading-8 mb-4 pl-0 ml-0">
                        *
                      </span>
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("industry", value)
                      }
                    >
                      <SelectTrigger className="mt-1 border-[#0002841F]/12">
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="life-science">
                          Life Science
                        </SelectItem>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="manufacturing">
                          Manufacturing
                        </SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label
                      htmlFor="stateOfIncorporation"
                      className="text-sm gap-0.5 font-medium text-gray-700"
                    >
                      State Of Incorporation
                      <span className="text-red-500 h-[15px] w-[12px] opacity-60 font-normal text-[22px] leading-8 mb-4 pl-0 ml-0">
                        *
                      </span>
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("stateOfIncorporation", value)
                      }
                    >
                      <SelectTrigger className="mt-1 border-[#0002841F]/12">
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
                    <Label
                      htmlFor="employeeCount"
                      className="text-sm gap-0.5 font-medium text-gray-700"
                    >
                      How Many Employees Do You Have?
                      <span className="text-red-500 h-[15px] w-[12px] opacity-60 font-normal text-[22px] leading-8 mb-4 pl-0 ml-0">
                        *
                      </span>
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("employeeCount", value)
                      }
                    >
                      <SelectTrigger className="mt-1 border-[#0002841F]/12">
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
                <h2
                  className="text-4xl font-normal text-[#020202] leading-[66px] mb-6"
                  style={{ fontFamily: "var(--font-gilroy-bold)" }}
                >
                  Contact Person
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="fullName"
                      className="text-sm gap-0.5 font-medium text-gray-700"
                    >
                      Full Name
                      <span className="text-red-500 h-[15px] w-[12px] opacity-60 font-normal text-[22px] leading-8 mb-4 pl-0 ml-0">
                        *
                      </span>
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      required
                      className="mt-1 border-[#0002841F]/12"
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="text-sm gap-0.5 font-medium text-gray-700"
                    >
                      Email
                      <span className="text-red-500 h-[15px] w-[12px] opacity-60 font-normal text-[22px] leading-8 mb-4 pl-0 ml-0">
                        *
                      </span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="mt-1 border-[#0002841F]/12"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                    />
                  </div>

                  <div className="md:col-span-1">
                    <Label
                      htmlFor="contactNo"
                      className="text-sm font-medium text-gray-700"
                    >
                      Contact No.
                    </Label>
                    <div className="mt-1 relative">
                      <PhoneInput
                        id="contactNo"
                        className="phone-input-container"
                        value={formData.contactNo}
                        onChange={(value) =>
                          handleInputChange("contactNo", value)
                        }
                        defaultCountry="US"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms and Submit */}
              <div className="flex flex-col items-center space-y-6">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) =>
                      handleInputChange("agreeToTerms", checked as boolean)
                    }
                  />
                  <Label
                    htmlFor="terms"
                    className="text-[16px] font-normal leading-[30px] space-x-0 font-grotesk text-black/80"
                  >
                    I agree to CreditPro&apos;s{" "}
                    <a href="#" className="text-[#1D00FF] hover:underline">
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-[#1D00FF] hover:underline">
                      Privacy Policy.
                    </a>
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-[484px] h-[78px] bg-[#96ED00] hover:bg-[#85d400] text-black font-normal font-main leading-[94px] py-3 rounded-[8px] transition-colors opacity-50"
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
  );
}
