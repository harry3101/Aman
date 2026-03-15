import { useEffect, useRef, useState } from "react";
import couple1 from "@/assets/couple-1.jpg";
import couple2 from "@/assets/couple-2.jpg";
import couple3 from "@/assets/couple-3.jpg";
import couple4 from "@/assets/couple-4.jpg";
import couple5 from "@/assets/couple-5.jpg";
import couple6 from "@/assets/couple-6.jpg";
import couple7 from "@/assets/couple-7.jpg";
import couple8 from "@/assets/couple-8.jpg";
import couple9 from "@/assets/couple-9.jpg";

const sections = [
  {
    type: "text" as const,
    content: "Every  story is beautiful, but ours is my favorite... 💕",
  },
  {
    type: "photos" as const,
    photos: [
      { src: couple1, caption: "Your smile lights up my world 🌸", rotate: "-6deg" },
      { src: couple2, caption: "Grace in every step 💃", rotate: "4deg" },
      { src: couple3, caption: "🌍💖", rotate: "-3deg" },
    ],
  },
  {
    type: "text" as const,
    content: "From strangers to soulmates — every moment with you feels like magic ✨",
  },
  {
    type: "photos" as const,
    photos: [
      { src: couple4, caption: "Lost in the horizon 🌅", rotate: "5deg" },
      { src: couple5, caption: "That beautiful smile 😊", rotate: "-4deg" },
    ],
  },
  {
    type: "text" as const,
    content: "You make my heart smile in ways I never knew were possible 🥰",
  },
  {
    type: "photos" as const,
    photos: [
      { src: couple6, caption: "Those eyes tell a story 💖", rotate: "-5deg" },
      { src: couple7, caption: "Elegance personified 🌷", rotate: "3deg" },
      { src: couple8, caption: "Mirror mirror... the prettiest 📸", rotate: "-2deg" },
      { src: couple9, caption: "My favorite view 💕", rotate: "6deg" },
    ],
  },
  {
    type: "text" as const,
    content: "I could write a thousand love letters and still not capture how you make me feel... 💌",
  },
];

const PhotoTimeline = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, idx]));
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 relative">
      <h2 className="text-4xl md:text-6xl font-display text-primary text-center mb-16">
        Our Little Story 💝
      </h2>

      {/* Ribbon connector line */}
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 timeline-line rounded-full hidden md:block" />

        {sections.map((section, i) => (
          <div
            key={i}
            ref={(el) => (itemRefs.current[i] = el)}
            data-index={i}
            className={`relative mb-20 transition-all duration-700 ${
              visibleItems.has(i)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16"
            }`}
          >
            {/* Timeline node */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-3 timeline-node hidden md:block z-10" />

            {section.type === "text" ? (
              <div className="max-w-2xl mx-auto text-center py-8 px-6">
                <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border shadow-lg">
                  <span className="text-4xl mb-4 block">💌</span>
                  <p className="text-xl md:text-2xl font-display text-primary leading-relaxed">
                    {section.content}
                  </p>
                  <div className="mt-4 flex justify-center gap-2">
                    {["💖", "🌸", "✨"].map((e, j) => (
                      <span key={j} className="text-lg opacity-50 animate-pulse-heart" style={{ animationDelay: `${j * 0.3}s` }}>
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className={`flex flex-wrap justify-center gap-6 md:gap-10 py-4 ${
                section.photos.length === 2 ? "max-w-2xl" : section.photos.length === 4 ? "max-w-5xl" : "max-w-4xl"
              } mx-auto`}>
                {section.photos.map((photo, j) => (
                  <div
                    key={j}
                    className="polaroid-frame group"
                    style={{
                      transform: `rotate(${photo.rotate})`,
                      transitionDelay: `${j * 150}ms`,
                    }}
                  >
                    <div className="polaroid-inner">
                      <div className="polaroid-image-wrapper">
                        <img
                          src={photo.src}
                          alt={photo.caption}
                          className="polaroid-image"
                        />
                      </div>
                      <div className="polaroid-caption">
                        <p className="font-display text-foreground text-base md:text-lg">
                          {photo.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoTimeline;
