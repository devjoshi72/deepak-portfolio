import React, { useState } from "react";
import { ArrowUp, Sparkles, ExternalLink, Copy, Check } from "lucide-react";
import { personalDetails } from "../data/portfolioData";
import { LinkedinIcon, GmailIcon, GoogleLocationIcon } from "./Icons";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(personalDetails.email);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.history.pushState(null, "", "/profile");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="connect" className="py-12 sm:py-16 lg:py-20 relative bg-gradient-to-b from-slate-50 to-white border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Clean Portfolio Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Open for Senior DevOps, Infrastructure Architecture, and SRE Leadership roles. Click below to launch your mail client or copy email address.
          </p>
        </div>

        {/* Clean Contact Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Direct Email Action Card with Gmail Logo */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-cyan-400 hover:shadow-xl transition-all group flex flex-col justify-between">
            <div className="space-y-4">
              <a
                href={`mailto:${personalDetails.email}`}
                className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-all shadow-sm"
                title="Click logo to open Gmail / Mailbox"
              >
                <GmailIcon className="w-8 h-8" />
              </a>
              <div>
                <div className="text-slate-400 text-xs font-mono font-bold uppercase tracking-wider">DIRECT EMAIL</div>
                <a
                  href={`mailto:${personalDetails.email}`}
                  className="block text-slate-900 font-mono font-extrabold text-base sm:text-lg hover:text-cyan-700 transition-colors mt-1"
                >
                  Open Mailbox
                </a>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                  Compose direct message in default mail client or copy email address to clipboard
                </p>
              </div>
            </div>

            {/* Email Actions: Open Mailbox & Copy Email */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2 font-mono text-xs">
              <a
                href={`mailto:${personalDetails.email}`}
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold transition-all shadow-sm"
              >
                <GmailIcon className="w-4 h-4" />
                <span>Open Mailbox</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
              </a>

              <button
                onClick={handleCopyEmail}
                className={`w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border font-bold transition-all cursor-pointer ${
                  copied
                    ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300"
                }`}
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-600" />}
                <span>{copied ? "Copied Email!" : "Copy Email Address"}</span>
              </button>
            </div>
          </div>

          {/* LinkedIn Profile Action Card */}
          <a
            href={personalDetails.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-cyan-400 hover:shadow-xl transition-all group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-200 text-cyan-700 flex items-center justify-center group-hover:bg-cyan-600 group-hover:text-white group-hover:scale-110 transition-all shadow-sm">
                <LinkedinIcon className="w-7 h-7 fill-cyan-700 group-hover:fill-white transition-all" />
              </div>
              <div>
                <div className="text-slate-400 text-xs font-mono font-bold uppercase tracking-wider">LINKEDIN CONNECT</div>
                <div className="text-slate-900 font-mono font-extrabold text-base sm:text-lg group-hover:text-cyan-700 transition-colors mt-1">
                  View Profile
                </div>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                  Click to open official LinkedIn profile in a new tab
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 font-mono text-xs">
              <div className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 group-hover:bg-slate-800 text-white font-bold transition-all shadow-sm">
                <LinkedinIcon className="w-3.5 h-3.5 fill-white" />
                <span>Open LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
              </div>
            </div>
          </a>

          {/* Location Card with Google Maps Location Pin Logo */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-sm">
                <GoogleLocationIcon className="w-8 h-8" />
              </div>
              <div>
                <div className="text-slate-400 text-xs font-mono font-bold uppercase tracking-wider">PRIMARY LOCATION</div>
                <div className="text-slate-900 font-mono font-extrabold text-base sm:text-lg mt-1">
                  Dehradun, Uttarakhand, India
                </div>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                  Available for Remote & Hybrid Senior Engineering Opportunities
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-mono text-slate-500 font-semibold">
              India Standard Time (IST) &bull; GMT+5:30
            </div>
          </div>
        </div>

        {/* Clean Bottom Navigation Bar (No Terminal Launch text) */}
        <div className="flex items-center justify-between p-4 rounded-xl bg-slate-100 border border-slate-200 font-mono text-xs text-slate-600">
          <span className="font-semibold text-slate-700">Deepak Chandra &bull; Senior DevOps Engineer</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-cyan-400 text-cyan-700 font-bold transition-all shadow-sm cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
