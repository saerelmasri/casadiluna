/* eslint-disable react/no-unescaped-entities */
"use client";

import { Dot } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <div
        className="relative h-[50vh] sm:h-[60vh] bg-cover bg-center flex justify-center items-center overflow-hidden"
        style={{ backgroundImage: "url('/images/wall.jpg')" }}
      >
        <h1 className="font-bricolage lowercase text-white text-4xl sm:text-5xl md:text-6xl max-w-[40%] text-center px-4">
          We'd love to hear from you
        </h1>
      </div>
      <div className="w-full bg-[#faf4f0] flex flex-col justify-center items-center py-8 space-y-14 px-4 sm:px-8">
        <div className="flex flex-col items-center py-7 px-5 space-y-6 sm:space-y-9">
          <div className="flex items-center">
            <Dot color="black" size={32} />
            <p className="font-instrument text-xs font-semibold lowercase ml-2">
              Contact Us
            </p>
          </div>
          <p className="font-instrument text-sm text-center max-w-lg">
            If you have any questions, please fill in this contact form, and our
            team will reach you back as soon as possible.
          </p>
        </div>
        <div className="flex flex-col w-full max-w-lg space-y-4 px-6 py-5">
          <div className="flex flex-col sm:flex-row sm:space-x-5 w-full space-y-4 sm:space-y-0">
            <Input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="h-12 rounded-full border-black px-4 w-full"
            />
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="h-12 rounded-full border-black px-4 w-full"
            />
          </div>
          <Select
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, subject: value }))
            }
          >
            <SelectTrigger className="w-full h-12 rounded-full border-black px-4">
              <SelectValue placeholder="Subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="orders">Orders</SelectItem>
              <SelectItem value="press">Press</SelectItem>
              <SelectItem value="partnership">Partnership</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          <textarea
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="h-28 w-full rounded-2xl border border-black px-4 py-3 text-sm resize-y focus:border-black focus:ring-0"
          />
          <div className="w-full flex justify-center">
            <Button
              size="lg"
              className="lowercase cursor-pointer"
              type="submit"
              onClick={handleSubmit}
            >
              Send message
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
