import React, { useEffect, useRef, useState } from "react";
import { PenLine, Sparkles, Video } from "lucide-react";

function useReveal(threshold = 0.25) {
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

const steps = [
  {
    time: "00:01",
    icon: PenLine,
    title: "Describe your idea",
    description:
      "Tell us what you're selling and who it's for. A few sentences is enough to get started.",
  },
  {
    time: "00:02",
    icon: Sparkles,
    title: "AI writes and shoots it",
    description:
      "A script, shot list and voiceover come together automatically — no editing skills needed.",
  },
  {
    time: "00:03",
    icon: Video,
    title: "Download and post",
    description:
      "Preview the cut, tweak anything that's off, then export it ready for Reels, Shorts or TikTok.",
  },
];

const HowItWorks = () => {
  const [sectionRef, visible] = useReveal();

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="w-full bg-gradient-to-b
      from-[#F7F4EE] via-[#25232A] to-[#14131A]
      text-[#F7F4EE]"
    >

      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">

        <div className="max-w-2xl">

          <p
            className="text-sm text-[#FF5A36]"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
            }}
          >
            how it works
          </p>

          <h2
            className="mt-4 text-3xl md:text-5xl leading-[1.1]"
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 560,
            }}
          >
            Three cuts between you
            and a finished ad.
          </h2>

          <p className="mt-5 text-[#B7B2AA] leading-relaxed max-w-lg">
            A simple process that turns your idea into a ready-to-share
            advertisement without complicated editing.
          </p>

        </div>


        {/* Timeline */}
        <div className="relative mt-20">

          {/* Base line */}
          <div
            className="hidden md:block absolute top-6 left-0 right-0
            h-px bg-[#3A3740]"
          />

          {/* Animated orange line */}
          <div
            className="hidden md:block absolute top-6 left-0 h-px
            bg-[#FF5A36] transition-all duration-[1400ms]
            ease-out"
            style={{
              width: visible ? "100%" : "0%",
            }}
          />


          <div className="grid md:grid-cols-3 gap-12 md:gap-8">

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (
                <div
                  key={step.time}
                  className="relative transition-all
                  duration-700 ease-out"
                  style={{
                    transitionDelay: visible
                      ? `${index * 180}ms`
                      : "0ms",
                    opacity: visible ? 1 : 0,
                    transform: visible
                      ? "translateY(0)"
                      : "translateY(16px)",
                  }}
                >

                  {/* Timeline point */}
                  <div
                    className="hidden md:flex w-3 h-3 rounded-full
                    bg-[#FF5A36] absolute -top-[7px] left-0
                    ring-4 ring-[#25232A]"
                  />


                  <p
                    className="text-sm text-[#8A8792]"
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                    }}
                  >
                    {step.time}
                  </p>


                  <div
                    className="mt-5 w-11 h-11 rounded-full
                    bg-[#242129] border border-[#3A3740]
                    flex items-center justify-center
                    text-[#FF5A36]
                    hover:bg-[#FF5A36]
                    hover:text-[#14131A]
                    transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </div>


                  <h3
                    className="mt-6 text-xl text-[#F7F4EE]"
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontWeight: 550,
                    }}
                  >
                    {step.title}
                  </h3>


                  <p className="mt-3 text-sm text-[#AAA5AE]
                  leading-relaxed max-w-xs">
                    {step.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>


        <div className="mt-16">
          <p className="text-sm text-[#77736D]">
            No complicated editing. Just your idea and AI.
          </p>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;