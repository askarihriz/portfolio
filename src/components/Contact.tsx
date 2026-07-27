import React from "react";
import { IoIosMail, IoIosSend } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { IoLocation } from "react-icons/io5";

const Contact: React.FC = () => {
  return (
    <div className="space-y-10 py-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Contact Me</h2>
        <p className="text-xs text-purple-400 tracking-widest uppercase">
          Get in touch
        </p>
      </div>

      {/* Grid wrapper for layout consistency */}
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Quick Contacts Bar Container */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-xs text-gray-400">
          <div className="space-y-1">
            <span className="flex items-center justify-center text-white font-medium">
              <IoIosCall size={20} className="text-purple-400 mr-2" /> Call Me
            </span>
            <span>+49-1636806854</span>
          </div>
          <div className="space-y-1">
            <span className="flex items-center justify-center text-white font-medium">
              <IoIosMail size={20} className="text-purple-400 mr-2" /> Email
            </span>
            <span>askarihriz@gmail.com</span>
          </div>
          <div className="space-y-1">
            <span className="flex items-center justify-center text-white font-medium">
              <IoLocation size={20} className="text-purple-400 mr-2" /> Location
            </span>
            <span>Bamberg, Germany</span>
          </div>
        </div>

        {/* Action Form Grid element container */}
        <form className="space-y-4 bg-[#151421]/30 p-6 rounded-2xl border border-gray-800/30">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3.5 bg-[#e0e0e9]/10 text-white rounded-xl border border-transparent focus:border-purple-600 focus:bg-[#e0e0e9]/15 focus:outline-none transition-all placeholder-gray-500 text-sm"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3.5 bg-[#e0e0e9]/10 text-white rounded-xl border border-transparent focus:border-purple-600 focus:bg-[#e0e0e9]/15 focus:outline-none transition-all placeholder-gray-500 text-sm"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3.5 bg-[#e0e0e9]/10 text-white rounded-xl border border-transparent focus:border-purple-600 focus:bg-[#e0e0e9]/15 focus:outline-none transition-all placeholder-gray-500 text-sm"
          />
          <textarea
            rows={4}
            placeholder="Message"
            className="w-full p-3.5 bg-[#e0e0e9]/10 text-white rounded-xl border border-transparent focus:border-purple-600 focus:bg-[#e0e0e9]/15 focus:outline-none transition-all placeholder-gray-500 text-sm resize-none"
          />

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="px-6 py-3 bg-[linear-gradient(to_right,#f9ce34,#ee2a7b,#6228d7)] hover:bg-purple-700 text-white font-bold text-sm rounded-xl transition-colors shadow-lg shadow-purple-600/10 cursor-pointer flex items-center space-x-2 hover:-translate-y-0.5 transform transition-transform duration-100"
            >
              <span>Send Message</span>
              <span>
                <IoIosSend size={20} />
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
