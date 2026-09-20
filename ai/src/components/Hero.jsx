import { NavLink } from "react-router-dom";
import { ArrowRight, Flame } from "lucide-react";

function Hero() {
  return (
    <section className="w-full bg-white">

      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">

        {/* Small Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-200 bg-stone-50 text-stone-600 text-sm mb-8">
          <Flame className="w-4 h-4 text-orange-500" />
          AI-Powered Video Ads
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-stone-900 leading-tight max-w-4xl mx-auto">
          Create powerful ads
          <br />
          <span className="text-orange-600">
            with AI.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-base md:text-lg text-stone-500 max-w-2xl mx-auto leading-relaxed">
          Turn your ideas into engaging short video advertisements
          in minutes. Create, customize, and generate ads with the
          power of AI.
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">

          <NavLink
            to="/login"
            className="group flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white px-6 py-3 rounded-md text-sm font-medium transition-all duration-300"
          >
            Start Creating

            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </NavLink>

          <NavLink
            to="/templates"
            className="flex items-center gap-2 border border-stone-300 hover:bg-stone-50 text-stone-700 px-6 py-3 rounded-md text-sm font-medium transition-colors"
          >
            Explore Templates
          </NavLink>

        </div>

        {/* Bottom Text */}
        <p className="mt-6 text-xs text-stone-400">
          Create ads faster. No complicated editing required.
        </p>

      </div>

    </section>
  );
}

export default Hero;
