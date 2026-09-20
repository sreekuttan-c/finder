import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Flame, Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

 const navLinks = [
  { label: "Home", to: "/" },
  { label: "Features", to: "/features" },
  { label: "How it Works", to: "/how-it-works" },
  { label: "Templates", to: "/templates" },
];
  const linkClass = ({ isActive }) =>
    `relative overflow-hidden h-5 block text-sm group ${
      isActive ? "text-stone-900" : "text-stone-600"
    }`;

  return (
    <nav className="w-full relative bg-white border-b border-stone-200">

      {/* Navbar content */}
      <div className="w-full flex items-center justify-between px-8 lg:px-12 py-4">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 shrink-0">
          <span className="flex items-center justify-center w-8 h-8 rounded-md bg-stone-900">
            <Flame
              className="w-4 h-4 text-orange-500"
              strokeWidth={2.5}
            />
          </span>

          <span className="flex items-baseline gap-1">
            <span className="text-lg font-semibold text-stone-900 tracking-tight">
              AdForge
            </span>

            <span className="text-xs font-semibold text-orange-600 tracking-wide">
              AI
            </span>
          </span>
        </NavLink>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-9">

          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={linkClass}
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`block transition-transform duration-300 ease-out ${
                      isActive ? "" : "group-hover:-translate-y-full"
                    }`}
                  >
                    {label}
                  </span>

                  <span className="block absolute top-full left-0 text-stone-900 group-hover:-translate-y-full transition-transform duration-300 ease-out">
                    {label}
                  </span>

                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-orange-600 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}

        </div>

        {/* Desktop Login */}
        <div className="hidden md:flex items-center">

          <NavLink
            to="/login"
            className="group flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors"
          >
            Login

            <Flame
              className="w-3.5 h-3.5 text-stone-500 group-hover:text-orange-500 transition-colors duration-300"
              strokeWidth={2.5}
            />
          </NavLink>

        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-stone-800"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-stone-200 shadow-lg flex-col items-stretch gap-1 px-6 py-4 ${
          menuOpen ? "flex" : "hidden"
        }`}
      >

        {navLinks.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `text-sm py-2.5 border-b border-stone-100 ${
                isActive
                  ? "text-stone-900 font-medium"
                  : "text-stone-700 hover:text-stone-900"
              }`
            }
          >
            {label}
          </NavLink>
        ))}

        {/* Mobile Login */}
        <NavLink
          to="/login"
          onClick={() => setMenuOpen(false)}
          className="mt-2 flex items-center justify-center gap-2 bg-stone-900 text-white text-sm font-medium py-2.5 rounded-md"
        >
          Login

          <Flame
            className="w-3.5 h-3.5 text-orange-500"
            strokeWidth={2.5}
          />
        </NavLink>

      </div>

    </nav>
  );
}

export default Navbar;