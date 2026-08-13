import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, ShieldCheck, Clock } from "lucide-react";
import { LinkedinIcon } from "./Icons";
import { personalDetails } from "../data/portfolioData";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    priority: "Standard Inquiry",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 relative bg-[#070a12] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>DIRECT COMMUNICATION CHANNEL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch & Schedule Consultation
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Open for Senior DevOps, Lead Platform Engineering, and Site Reliability Engineering (SRE) opportunities globally.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-card rounded-xl p-6 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                <span>Contact Touchpoints</span>
              </h3>

              <div className="space-y-4 font-mono text-xs">
                {/* Email */}
                <a
                  href={`mailto:${personalDetails.email}`}
                  className="flex items-center gap-3 p-4 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="p-3 rounded bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-[10px]">EMAIL ADDRESS</div>
                    <div className="text-white font-bold group-hover:text-cyan-300 text-sm">{personalDetails.email}</div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="p-3 rounded bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-[10px]">LINKEDIN PROFILE</div>
                    <div className="text-white font-bold group-hover:text-blue-300 text-sm">linkedin.com/in/deepakchandra72</div>
                  </div>
                </a>

                {/* Location / Address */}
                <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="p-3 rounded bg-purple-500/10 text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-[10px]">LOCATION / ADDRESS</div>
                    <div className="text-white font-bold text-sm">{personalDetails.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* SLA Response card */}
            <div className="glass-card rounded-xl p-5 border border-cyan-500/30 bg-cyan-950/20 font-mono text-xs space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-bold">
                <Clock className="w-4 h-4" />
                <span>RESPONSE SLA GUARANTEE</span>
              </div>
              <p className="text-gray-300 text-[11px] leading-relaxed">
                Direct inquiries are usually answered within <span className="text-emerald-400 font-bold">2 - 4 hours</span> during business hours (IST / UTC+5:30).
              </p>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800">
              {submitted ? (
                <div className="py-12 text-center space-y-4 font-mono">
                  <div className="inline-flex p-4 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Transmitted Successfully!</h3>
                  <p className="text-gray-300 text-sm max-w-md mx-auto">
                    Thank you for reaching out, {formData.name}. Deepak Chandra will review your message and respond shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", priority: "Standard Inquiry", message: "" });
                    }}
                    className="px-6 py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-2">Send Message / Inquiry</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1">YOUR NAME *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white font-mono text-sm focus:border-cyan-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1">YOUR EMAIL *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white font-mono text-sm focus:border-cyan-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">INQUIRY CATEGORY / PRIORITY</label>
                    <select
                      value={formData.priority}
                      onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white font-mono text-sm focus:border-cyan-500 focus:outline-none"
                    >
                      <option value="Senior DevOps Role">Senior DevOps / SRE Hiring Opportunity</option>
                      <option value="Contract / Consulting">Cloud Infrastructure Consulting</option>
                      <option value="Standard Inquiry">General Technical Discussion</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">MESSAGE / PROJECT DETAILS *</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Detail your infrastructure requirements or hiring opportunity..."
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white font-mono text-sm focus:border-cyan-500 focus:outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-mono font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>TRANSMIT MESSAGE</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
