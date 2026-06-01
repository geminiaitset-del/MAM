"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ArrowRight } from "lucide-react";

// Form Zod validation schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  company: z.string().min(1, { message: "Company name is required" }),
  projectType: z.string().min(1, { message: "Please select a project type" }),
  budget: z.string().min(1, { message: "Please select a budget range" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      projectType: "",
      budget: "",
    }
  });

  const onSubmit = async (data: ContactFormInputs) => {
    setIsSubmitting(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();
  };

  const projectTypes = [
    "AI Agent Integrations",
    "Mobile Applications",
    "SaaS Platform",
    "E-Commerce Solutions",
    "Custom Enterprise Software",
    "Digital Transformation",
  ];

  const budgets = ["< $10,000", "$10,000 - $25,000", "$25,000 - $50,000", "$50,000+"];

  return (
    <section id="contact" className="relative py-28 bg-[#080808] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-20 text-center items-center">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "rgba(0, 255, 136, 0.5)" }}>GET IN TOUCH</span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-tight uppercase leading-tight">
            LET'S BUILD SOMETHING <br />
            AMAZING TOGETHER
          </h2>
          <p className="text-text-secondary text-base leading-relaxed max-w-xl">
            Have a project in mind? Fill out the contact form below and let us discuss how to build it perfectly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="glow-card p-8 flex flex-col gap-6" style={{ background: "#0f0f0f", border: "1px solid rgba(255,255,255,0.07)" }}>
              <h3 className="text-xl font-bold text-white tracking-tight border-b border-white/5 pb-4">
                Contact Information
              </h3>

              <div className="flex flex-col gap-6">
                {[
                  {
                    icon: <Mail className="w-5 h-5" style={{ stroke: "rgba(0, 255, 136, 0.5)" }} />,
                    title: "Email",
                    value: "hello@mamcompany.com",
                    href: "mailto:hello@mamcompany.com",
                  },
                  {
                    icon: <Phone className="w-5 h-5" style={{ stroke: "rgba(0, 255, 136, 0.5)" }} />,
                    title: "Phone",
                    value: "+1 (234) 567-8900",
                    href: "tel:+12345678900",
                  },
                  {
                    icon: <MapPin className="w-5 h-5" style={{ stroke: "rgba(0, 255, 136, 0.5)" }} />,
                    title: "Location",
                    value: "Remote / Worldwide",
                    href: "#",
                  },
                  {
                    icon: <Clock className="w-5 h-5" style={{ stroke: "rgba(0, 255, 136, 0.5)" }} />,
                    title: "Working Hours",
                    value: "24/7 Available",
                    href: "#",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-text-secondary text-xs uppercase tracking-wider font-semibold font-mono">
                        {item.title}
                      </span>
                      {item.href !== "#" ? (
                        <a
                          href={item.href}
                          className="text-white hover:text-white/80 transition-colors text-sm font-semibold"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-white text-sm font-semibold">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form */}
          <div className="lg:col-span-7">
            <div className="glow-card p-8 md:p-10 relative overflow-hidden" style={{ background: "#0f0f0f", border: "1px solid rgba(255,255,255,0.07)" }}>
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Name & Email Group */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-text-secondary uppercase tracking-widest font-mono">
                          Your Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. John Doe"
                          {...register("name")}
                          className="bg-[#080808] border focus:border-white/30 focus:ring-1 focus:ring-white/30 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/20 outline-none transition-all duration-300"
                          style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}
                        />
                        {errors.name && (
                          <span className="text-xs text-rose-500 font-medium">{errors.name.message}</span>
                        )}
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-text-secondary uppercase tracking-widest font-mono">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="e.g. john@company.com"
                          {...register("email")}
                          className="bg-[#080808] border focus:border-white/30 focus:ring-1 focus:ring-white/30 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/20 outline-none transition-all duration-300"
                          style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}
                        />
                        {errors.email && (
                          <span className="text-xs text-rose-500 font-medium">{errors.email.message}</span>
                        )}
                      </div>
                    </div>

                    {/* Company & Project Type */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-text-secondary uppercase tracking-widest font-mono">
                          Company Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. ShopEase LLC"
                          {...register("company")}
                          className="bg-[#080808] border focus:border-white/30 focus:ring-1 focus:ring-white/30 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/20 outline-none transition-all duration-300"
                          style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}
                        />
                        {errors.company && (
                          <span className="text-xs text-rose-500 font-medium">{errors.company.message}</span>
                        )}
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-text-secondary uppercase tracking-widest font-mono">
                          Project Type
                        </label>
                        <select
                          {...register("projectType")}
                          className="bg-[#080808] border focus:border-white/30 focus:ring-1 focus:ring-white/30 rounded-xl px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 appearance-none cursor-pointer"
                          style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}
                        >
                          <option value="" disabled className="bg-[#0f0f0f] text-white/30">
                            Select Category
                          </option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type} className="bg-[#0f0f0f] text-white">
                              {type}
                            </option>
                          ))}
                        </select>
                        {errors.projectType && (
                          <span className="text-xs text-rose-500 font-medium">
                            {errors.projectType.message}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Budget Select */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-text-secondary uppercase tracking-widest font-mono">
                        Estimated Budget
                      </label>
                      <select
                        {...register("budget")}
                        className="bg-[#080808] border focus:border-white/30 focus:ring-1 focus:ring-white/30 rounded-xl px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 appearance-none cursor-pointer"
                        style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}
                      >
                        <option value="" disabled className="bg-[#0f0f0f] text-white/30">
                          Select Range
                        </option>
                        {budgets.map((b) => (
                          <option key={b} value={b} className="bg-[#0f0f0f] text-white">
                            {b}
                          </option>
                        ))}
                      </select>
                      {errors.budget && (
                        <span className="text-xs text-rose-500 font-medium">{errors.budget.message}</span>
                      )}
                    </div>

                    {/* Message Box */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-text-secondary uppercase tracking-widest font-mono">
                        Tell us about your project
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Please details key feature needs, database expectations, or AI capabilities requested..."
                        {...register("message")}
                        className="bg-[#080808] border focus:border-white/30 focus:ring-1 focus:ring-white/30 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/20 outline-none transition-all duration-300 resize-none"
                        style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}
                      />
                      {errors.message && (
                        <span className="text-xs text-rose-500 font-medium">{errors.message.message}</span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="hover:opacity-90 py-4 rounded-xl font-semibold text-xs tracking-widest uppercase flex items-center justify-center gap-2 cursor-pointer font-mono transition-all duration-300"
                      style={{
                        backgroundColor: "#00ff88",
                        color: "#000000",
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send size={14} />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  // Elegant success state card!
                  <motion.div
                    key="success"
                    className="flex flex-col items-center justify-center text-center py-10 gap-6"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    >
                      <CheckCircle2 className="w-20 h-20 text-[#00ff88] drop-shadow-[0_0_20px_rgba(0,255,136,0.3)]" />
                    </motion.div>

                    <div className="flex flex-col gap-2">
                      <h4 className="text-2xl font-bold text-white tracking-tight uppercase">MESSAGE SENT SUCCESSFULLY!</h4>
                      <p className="text-text-secondary text-sm max-w-sm">
                        Thank you for reaching out, master. Our lead architect will review your design specifications and contact you within 12 hours.
                      </p>
                    </div>

                    <motion.button
                      onClick={() => setSubmitSuccess(false)}
                      className="inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:border-white/20 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
                      whileHover={{ scale: 1.05 }}
                    >
                      Submit Another Query <ArrowRight size={14} />
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
