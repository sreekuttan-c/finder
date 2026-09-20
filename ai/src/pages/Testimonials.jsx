import React, { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

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

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Content Creator",
    text: "Creating ads used to take hours. Now I can turn an idea into a finished video in just a few minutes.",
  },
  {
    name: "Sarah Miller",
    role: "Small Business Owner",
    text: "The AI workflow makes creating promotional videos much simpler. I can focus on my business instead of editing.",
  },
  {
    name: "Daniel Thomas",
    role: "Marketing Student",
    text: "I really like how quickly I can create different ad ideas and experiment with different concepts.",
  },
];

const Testimonials = () => {
  const [headingRef, headingVisible] = useReveal();
  const [cardsRef, cardsVisible] = useReveal();

  return (
    <section className="relative w-full bg-[#F7F4EE] overflow-hidden">
      {/* Top transition */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#F7F4EE] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">

        {/* Heading */}
        <div
          ref={headingRef}
          className={`text-center max-w-3xl mx-auto transition-all duration-700 ease-out ${
            headingVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="text-sm text-[#FF5A36] mb-4"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            04:00 — testimonials
          </p>

          <h2
            className="text-3xl md:text-5xl text-[#14131A] leading-[1.1]"
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 560,
            }}
          >
            Made for people who
            <span className="text-[#FF5A36]"> create.</span>
          </h2>

          <p className="mt-6 text-[#6E6A5E] leading-relaxed max-w-2xl mx-auto">
            See how creators and businesses are using AI to turn their ideas
            into engaging short video advertisements.
          </p>
        </div>

        {/* Testimonials */}
        <div
          ref={cardsRef}
          className={`mt-16 grid md:grid-cols-3 gap-6 transition-all duration-700 ease-out ${
            cardsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative bg-white border border-[#E7E1D4] rounded-2xl p-7 shadow-[0_15px_40px_-25px_rgba(20,19,26,0.25)] hover:-translate-y-1 hover:shadow-[0_20px_45px_-25px_rgba(20,19,26,0.3)] transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-6 h-6 text-[#FF5A36]/30" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#FF5A36] text-[#FF5A36]"
                  />
                ))}
              </div>

              {/* Testimonial */}
              <p className="text-[#3D3942] leading-relaxed text-sm md:text-base">
                "{testimonial.text}"
              </p>

              {/* User */}
              <div className="mt-7 pt-5 border-t border-[#E7E1D4] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#14131A] flex items-center justify-center">
                  <span className="text-sm font-medium text-[#F7F4EE]">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>

                <div>
                  <p className="text-sm font-medium text-[#14131A]">
                    {testimonial.name}
                  </p>

                  <p
                    className="text-xs text-[#8A8479] mt-0.5"
                    style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-16 text-center">
          <p
            className="text-xs text-[#8A8479]"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            SIMPLE TO CREATE · POWERFUL TO SHARE
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;