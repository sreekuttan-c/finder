import React, { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import HowItWorks from "./HowItWorks";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Footer from "../components/Footer";

function useReveal(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold }
    );

    io.observe(el);

    return () => io.disconnect();
  }, [threshold]);

  return [ref, visible];
}

const Home = () => {
  const [introRef, introVisible] = useReveal();

  return (
    <div className="w-full bg-[#F7F4EE]">

      {/* ================= HERO ================= */}
      <Hero />


      {/* ================= INTRO ================= */}
      <section className="w-full bg-gradient-to-b from-white to-[#F7F4EE]">

        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">

          <div
            ref={introRef}
            className={`grid md:grid-cols-[1.1fr_0.9fr]
            gap-14 md:gap-20 items-center
            transition-all duration-700 ease-out ${
              introVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >

            {/* Left Content */}
            <div>

              <p
                className="text-sm text-[#FF5A36] mb-4"
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              >
                00:00 — the idea
              </p>

              <h2
                className="text-3xl md:text-5xl text-[#14131A]
                leading-[1.1]"
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontWeight: 560,
                }}
              >
                From a sentence to a finished ad,
                in the time it takes to write one.
              </h2>

              <p className="mt-6 text-[#6E6A5E] leading-relaxed max-w-md">
                Describe your product the way you'd explain it to a friend.
                Our AI writes the script, picks the shots, and cuts the video
                — no timeline to drag, no software to learn.
              </p>

            </div>


            {/* Video Preview */}
            <div className="relative mx-auto w-full max-w-[280px]">

              <div
                className="relative aspect-[9/16] rounded-2xl
                bg-[#14131A] border border-[#2A2930]
                overflow-hidden
                shadow-[0_30px_60px_-25px_rgba(20,19,26,0.35)]"
              >

                <div className="absolute inset-0 flex flex-col
                items-center justify-center gap-4">

                  <span className="relative flex h-3 w-3">

                    <span
                      className="animate-ping absolute inline-flex
                      h-full w-full rounded-full
                      bg-[#FF5A36] opacity-60"
                    />

                    <span
                      className="relative inline-flex rounded-full
                      h-3 w-3 bg-[#FF5A36]"
                    />

                  </span>

                  <p
                    className="text-[#A29FAA] text-xs tracking-wide"
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                    }}
                  >
                    RENDERING PREVIEW
                  </p>

                </div>

                {/* Film edge */}
                <div className="absolute left-2 top-0 bottom-0
                flex flex-col justify-between py-3">

                  {Array.from({ length: 10 }).map((_, i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-[2px]
                      bg-[#2A2930]"
                    />
                  ))}

                </div>

              </div>


              {/* Scrubber */}
              <div className="mt-4 flex items-center gap-3">

                <span
                  className="text-xs text-[#6E6A5E]"
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                >
                  00:06
                </span>

                <div className="relative flex-1 h-1 rounded-full
                bg-[#DED7C9]">

                  <div
                    className="absolute left-0 top-0 h-1 w-2/5
                    rounded-full bg-[#FF5A36]"
                  />

                  <div
                    className="absolute left-2/5 -top-1 w-3 h-3
                    rounded-full bg-[#FF5A36]
                    -translate-x-1/2 border-2 border-[#F7F4EE]"
                  />

                </div>

                <span
                  className="text-xs text-[#6E6A5E]"
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                >
                  00:15
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


       {/* ================= HOW IT WORKS ================= */}
      <HowItWorks />

      {/* ================= FEATURES ================= */}
      <Features />

      {/* ================= TESTIMONIALS ================= */}
      <Testimonials />
      {/*=============FOOTER=========== */}
      <Footer/>

    </div>
  );
};

export default Home;