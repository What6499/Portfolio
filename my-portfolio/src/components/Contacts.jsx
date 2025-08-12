import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MessageCircle,
  User,
  Send,
  CheckCircle,
} from "lucide-react";

const Contacts = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="max-w-7xl mx-auto p-6">
      <h2 className="text-center text-5xl font-bold mb-6 text-[#1B1B1B] ">
        Contact Me
      </h2>
      <motion.div
        initial={{
          scaleX: 0,
        }}
        animate={{
          scaleX: 1,
        }}
        transition={{
          duration: 0.4,
        }}
        className="w-[90%] origin-left h-px bg-gray-900/30 mx-auto mb-8"
      ></motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#1B1B1B]">
              Get In Touch
            </h3>
            <p className="text-gray-600 mb-6">
              Feel free to reach out to me through any of the following
              channels. I'll get back to you as soon as possible!
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200 group">
              <div className="flex-shrink-0 w-12 h-12 bg-[#1B1B1B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Mail size={20} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                  Email
                </p>
                <a
                  href="mailto:your.email@example.com"
                  className="text-[#1B1B1B] hover:text-gray-600 transition-colors duration-200 font-medium"
                >
                  your.email@example.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200 group">
              <div className="flex-shrink-0 w-12 h-12 bg-[#1B1B1B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Phone size={20} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                  Phone
                </p>
                <a
                  href="tel:+1234567890"
                  className="text-[#1B1B1B] hover:text-gray-600 transition-colors duration-200 font-medium"
                >
                  +1 234 567 890
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200 group">
              <div className="flex-shrink-0 w-12 h-12 bg-[#1B1B1B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <MessageCircle size={20} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1B1B1B] hover:text-gray-600 transition-colors duration-200 font-medium"
                >
                  +1 234 567 890
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className=" rounded-lg   ">
          <h3 className="text-xl font-semibold mb-6 text-[#1B1B1B]">
            Send Message
          </h3>

          {/* Success Message */}
          {submitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
              <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
              <p className="text-green-800 font-medium">
                Thank you for reaching out! I will get back to you soon.
              </p>
            </div>
          )}

          <div className="space-y-6">
            <div className="relative">
              <label className="block text-sm font-semibold text-[#1B1B1B] mb-2">
                Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={18} className="text-gray-400" />
                </div>
                <input
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B1B1B] focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-semibold text-[#1B1B1B] mb-2">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={18} className="text-gray-400" />
                </div>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B1B1B] focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-semibold text-[#1B1B1B] mb-2">
                Message
              </label>
              <div className="relative">
                <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                  <MessageCircle size={18} className="text-gray-400" />
                </div>
                <textarea
                  name="message"
                  rows="5"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B1B1B] focus:border-transparent transition-all duration-200 resize-none"
                />
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-[#1B1B1B] text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-gray-800 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md"
            >
              <Send size={18} />
              <span>Send Message</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
