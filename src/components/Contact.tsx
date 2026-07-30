import React, { useRef, useState } from "react";
import { IoIosMail, IoIosSend } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    // 1. Rate Limiting Check: 2-hour cooldown verification
    const lastSent = localStorage.getItem("contact_form_last_sent");
    if (lastSent) {
      const COOLDOWN_DURATION = 2 * 60 * 60 * 1000; // 2 hours in milliseconds
      const timePassed = Date.now() - parseInt(lastSent, 10);

      if (timePassed < COOLDOWN_DURATION) {
        const minutesLeft = Math.ceil(
          (COOLDOWN_DURATION - timePassed) / (60 * 1000),
        );
        setStatusMessage({
          type: "error",
          text: `You can only send 1 message at a time. Please wait ${minutesLeft} minutes before trying again.`,
        });
        return;
      }
    }

    setIsSending(true);
    setStatusMessage(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

      // 2. Set Rate Limiting Flag: Store the successful submission timestamp
      localStorage.setItem("contact_form_last_sent", Date.now().toString());

      setStatusMessage({
        type: "success",
        text: "Thank you! Your message has been sent successfully.",
      });
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatusMessage({
        type: "error",
        text: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="space-y-10 py-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Contact Me</h2>
        <p className="text-xs text-purple-400 tracking-widest uppercase">
          Get in touch
        </p>
      </div>

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
        <form
          ref={formRef}
          onSubmit={handleSendEmail}
          className="space-y-4 bg-[#151421]/30 p-6 rounded-2xl border border-gray-800/30"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            required
            minLength={2}
            maxLength={50}
            className="w-full p-3.5 bg-[#e0e0e9]/10 text-white rounded-xl border border-transparent focus:border-purple-600 focus:bg-[#e0e0e9]/15 focus:outline-none transition-all placeholder-gray-500 text-sm"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
            className="w-full p-3.5 bg-[#e0e0e9]/10 text-white rounded-xl border border-transparent focus:border-purple-600 focus:bg-[#e0e0e9]/15 focus:outline-none transition-all placeholder-gray-500 text-sm"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            minLength={3}
            maxLength={100}
            className="w-full p-3.5 bg-[#e0e0e9]/10 text-white rounded-xl border border-transparent focus:border-purple-600 focus:bg-[#e0e0e9]/15 focus:outline-none transition-all placeholder-gray-500 text-sm"
          />
          <textarea
            rows={4}
            name="message"
            placeholder="Message"
            required
            minLength={10}
            maxLength={2000}
            className="w-full p-3.5 bg-[#e0e0e9]/10 text-white rounded-xl border border-transparent focus:border-purple-600 focus:bg-[#e0e0e9]/15 focus:outline-none transition-all placeholder-gray-500 text-sm resize-none"
          />

          {/* Status Alert Notification */}
          {statusMessage && (
            <div
              className={`p-3 text-center text-xs font-medium rounded-xl border ${
                statusMessage.type === "success"
                  ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                  : "bg-rose-500/10 text-rose-400 border-rose-500/20"
              }`}
            >
              {statusMessage.text}
            </div>
          )}

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              disabled={isSending}
              className={`px-6 py-3 bg-[linear-gradient(to_right,#f9ce34,#ee2a7b,#6228d7)] hover:bg-purple-700 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-purple-600/10 flex items-center space-x-2 transform duration-100 ${
                isSending
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer hover:-translate-y-0.5"
              }`}
            >
              <span>{isSending ? "Sending..." : "Send Message"}</span>
              {!isSending && (
                <span>
                  <IoIosSend size={20} />
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
