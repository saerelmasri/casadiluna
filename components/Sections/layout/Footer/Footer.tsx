import Link from "next/link";

const footerLinks = [
  {
    title: "shop",
    links: ["cleansers", "moisturizers", "serums", "exfoliators", "sun"],
  },
  {
    title: "brand",
    links: ["journal", "about"],
  },
  {
    title: "info",
    links: ["contact"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#321e1e] text-white py-12 px-4">
      {/* Navigation Links Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        {/* Map through footerLinks */}
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="text-white mb-4 font-light">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, idx) => (
                <li key={idx} className="mb-2">
                  <Link
                    href={`/collections/${link}`}
                    className="text-sm text-white relative group"
                  >
                    {link}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* About Column */}
        <div>
          <h3 className="text-white mb-4 font-light">about</h3>
          <p className="text-white/80 text-sm font-light">
            Casa di Luna is a curated sanctuary of luxury skincare and wellness
            rituals. We hand-select nature-inspired products that celebrate
            radiant skin, modern beauty, and conscious living — all with
            effortless European elegance.
          </p>
        </div>
      </div>

      {/* STRETCH Logo */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-white text-7xl md:text-[10rem] leading-none font-bold tracking-tighter">
          Casa di Luna
        </h1>
      </div>

      {/* Copyright Section */}
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-6">
        <p className="text-white/80 text-sm font-light">
          © 2025 - All rights reserved to Casa di Luna
        </p>
      </div>
    </footer>
  );
}
