import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#14131A] text-[#F7F4EE] overflow-hidden">

      {/* Subtle orange glow */}
      <div className="absolute top-0 right-[-120px] w-[400px] h-[400px] rounded-full bg-[#FF5A36]/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* ================= TOP CTA ================= */}
        <div className="py-20 md:py-24 border-b border-[#2E2C34]">

          <div className="max-w-3xl">

            <p
              className="text-xs text-[#FF5A36] mb-5 tracking-wide"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              START CREATING
            </p>

            <h2
              className="text-4xl md:text-6xl leading-[1.05] tracking-tight"
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 560,
              }}
            >
              Your next ad
              <br />
              starts with an idea.
            </h2>

            <p className="mt-6 text-[#AAA5AD] text-sm md:text-base max-w-lg leading-relaxed">
              Turn your ideas into engaging short video advertisements
              with the power of AI.
            </p>

            <Link
              to="/login"
              className="group inline-flex items-center gap-2 mt-8 px-6 py-3.5 rounded-md bg-[#FF5A36] text-white text-sm font-medium hover:bg-[#FF6A4A] transition-all duration-300 hover:shadow-[0_12px_35px_rgba(255,90,54,0.2)]"
            >
              Start Creating
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

          </div>
        </div>


        {/* ================= MAIN FOOTER ================= */}
        <div className="py-16 md:py-20 grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 md:gap-16">

          {/* Brand */}
          <div>

            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xl font-semibold tracking-tight"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A36]" />
              AdFlow
            </Link>

            <p className="mt-5 max-w-xs text-sm text-[#85818A] leading-relaxed">
              An AI-powered platform for creating short video
              advertisements faster and easier.
            </p>

          </div>


          {/* Product */}
          <div>

            <p
              className="text-[11px] text-[#F7F4EE] tracking-widest mb-5"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              PRODUCT
            </p>

            <div className="flex flex-col gap-3.5">

              <Link
                to="/"
                className="text-sm text-[#85818A] hover:text-[#F7F4EE] transition-colors"
              >
                Home
              </Link>

              <Link
                to="/features"
                className="text-sm text-[#85818A] hover:text-[#F7F4EE] transition-colors"
              >
                Features
              </Link>

              <Link
                to="/how-it-works"
                className="text-sm text-[#85818A] hover:text-[#F7F4EE] transition-colors"
              >
                How It Works
              </Link>

            </div>

          </div>


          {/* Resources */}
          <div>

            <p
              className="text-[11px] text-[#F7F4EE] tracking-widest mb-5"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              RESOURCES
            </p>

            <div className="flex flex-col gap-3.5">

              <a
                href="#"
                className="text-sm text-[#85818A] hover:text-[#F7F4EE] transition-colors"
              >
                Templates
              </a>

              <a
                href="#"
                className="text-sm text-[#85818A] hover:text-[#F7F4EE] transition-colors"
              >
                Documentation
              </a>

              <a
                href="#"
                className="text-sm text-[#85818A] hover:text-[#F7F4EE] transition-colors"
              >
                Contact
              </a>

            </div>

          </div>


          {/* Legal */}
          <div>

            <p
              className="text-[11px] text-[#F7F4EE] tracking-widest mb-5"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              LEGAL
            </p>

            <div className="flex flex-col gap-3.5">

              <a
                href="#"
                className="text-sm text-[#85818A] hover:text-[#F7F4EE] transition-colors"
              >
                Privacy
              </a>

              <a
                href="#"
                className="text-sm text-[#85818A] hover:text-[#F7F4EE] transition-colors"
              >
                Terms
              </a>

            </div>

          </div>

        </div>


        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-[#2E2C34] py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p
            className="text-[11px] text-[#66626B]"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            © 2026 Adforge
          </p>

          <div className="flex items-center gap-6">

            <a
              href="#"
              className="text-[11px] text-[#66626B] hover:text-[#F7F4EE] transition-colors"
            >
              Instagram
            </a>

            <a
              href="#"
              className="text-[11px] text-[#66626B] hover:text-[#F7F4EE] transition-colors"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="text-[11px] text-[#66626B] hover:text-[#F7F4EE] transition-colors"
            >
              GitHub
            </a>

          </div>

          <p
            className="text-[11px] text-[#66626B]"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            AI VIDEO · MADE SIMPLE
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;