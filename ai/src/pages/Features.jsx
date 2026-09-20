import React, { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  PenTool,
  LayoutTemplate,
  Share2,
  Zap,
  CheckCircle2,
} from "lucide-react";

function useReveal(threshold = 0.15) {
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

const features = [
  {
    icon: Sparkles,
    title: "AI Video Generation",
    description:
      "Turn a simple idea into a complete short video advertisement using AI.",
  },
  {
    icon: PenTool,
    title: "AI Script Generation",
    description:
      "Generate engaging advertising scripts automatically based on your product.",
  },
  {
    icon: LayoutTemplate,
    title: "Smart Templates",
    description:
      "Choose from ready-made templates designed for modern short-form advertising.",
  },
  {
    icon: Share2,
    title: "Social Media Ready",
    description:
      "Create videos optimized for platforms like Instagram, YouTube and other social networks.",
  },
  {
    icon: Zap,
    title: "Fast Generation",
    description:
      "Generate your advertisement quickly without spending hours editing manually.",
  },
  {
    icon: CheckCircle2,
    title: "Simple Workflow",
    description:
      "Describe your idea, generate the video, customize it and publish.",
  },
];

const Features = () => {
  const [headingRef, headingVisible] = useReveal();
  const [gridRef, gridVisible] = useReveal();

  return (
    <section
      id="features"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#14131A] via-[#29262D] to-[#F7F4EE]"
    >
      {/* Soft transition from dark section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#14131A] to-transparent pointer-events-none" />

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">

        {/* Heading */}
        <div
          ref={headingRef}
          className={`max-w-3xl transition-all duration-700 ease-out ${
            headingVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="text-sm text-[#FF5A36] mb-4"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            03:00 — features
          </p>

          <h2
            className="text-3xl md:text-5xl leading-[1.1] text-[#F7F4EE]"
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 560,
            }}
          >
            Everything you need to create
            <span className="text-[#FF5A36]"> better ads.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-[#B7B2B9] leading-relaxed">
            From writing the script to generating the final video, everything
            happens in one simple AI-powered workflow.
          </p>
        </div>

        {/* Features */}
        <div
          ref={gridRef}
          className={`mt-16 md:mt-20 grid md:grid-cols-2 gap-x-10 gap-y-0 transition-all duration-700 ease-out ${
            gridVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group flex gap-5 py-7 border-t border-[#4A474F]/70 transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className="
                    flex-shrink-0
                    w-11 h-11
                    rounded-xl
                    bg-[#1D1B24]
                    border border-[#3A3740]
                    flex items-center justify-center
                    transition-all duration-300
                    group-hover:bg-[#FF5A36]
                    group-hover:border-[#FF5A36]
                  "
                >
                  <Icon
                    className="
                      w-5 h-5
                      text-[#FF5A36]
                      transition-colors duration-300
                      group-hover:text-white
                    "
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-medium text-[#F7F4EE]">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[#AAA5AD] max-w-md">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className="
            relative
            mt-20
            rounded-2xl
            overflow-hidden
            border border-[#4A474F]
            bg-[#1D1B24]
            px-7 py-10
            md:px-12 md:py-12
          "
        >
          {/* Orange glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#FF5A36]/10 blur-3xl" />

          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p
                className="text-xs text-[#FF5A36] mb-3"
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              >
                READY TO CREATE?
              </p>

              <h3
                className="text-2xl md:text-3xl text-[#F7F4EE]"
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontWeight: 560,
                }}
              >
                Turn your next idea into an ad.
              </h3>

              <p className="mt-3 text-sm text-[#AAA5AD]">
                Start creating short video advertisements with AI.
              </p>
            </div>

            <button
              className="
                flex-shrink-0
                px-6 py-3
                rounded-md
                bg-[#FF5A36]
                text-white
                text-sm font-medium
                hover:bg-[#FF6A4A]
                transition-all duration-300
                hover:shadow-[0_10px_30px_rgba(255,90,54,0.25)]
              "
            >
              Start Creating
            </button>
          </div>
        </div>
      </div>

      {/* Bottom transition back to cream */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F7F4EE] pointer-events-none" />
    </section>
  );
};

export default Features;