import { useState, useCallback } from "react";
import teddyImg from "@/assets/teddy.png";

const AskOutSection = () => {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [accepted, setAccepted] = useState(false);
  const [noCount, setNoCount] = useState(0);

  const noMessages = [
    "No 😢",
    "Are you sure? 🥺",
    "Really sure? 😭",
    "Think again! 💔",
    "Last chance! 😿",
    "Don't do this! 🥹",
    "You're breaking my heart 💀",
    "I'll cry! 😩",
  ];

  const moveNoButton = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;
    setNoPos({ x, y });
    setNoCount((p) => Math.min(p + 1, noMessages.length - 1));
  }, []);

  if (accepted) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center px-4 hero-glow">
        <div className="text-center">
          <div className="animate-pulse-heart inline-block mb-8">
            <span className="text-8xl">💖</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display text-primary mb-6">
            Yayyy!! 🎉
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-body mb-8">
            I knew you'd say yes! Can't wait for our date! 🥰💕
          </p>
          <img
            src={teddyImg}
            alt="Happy teddy"
            className="w-40 h-40 mx-auto animate-float drop-shadow-xl"
          />
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 hero-glow relative overflow-hidden">
      <div className="animate-float mb-6">
        <img src={teddyImg} alt="Teddy asking" className="w-36 h-36 drop-shadow-xl" />
      </div>

      <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-primary mb-4 text-center">
        Will you go on a date with me? 💝
      </h2>
      <p className="text-lg text-muted-foreground font-body mb-12 text-center">
        Please say yes... pretty please 🥺
      </p>

      <div className="flex gap-6 items-center relative">
        <button className="btn-yes" onClick={() => setAccepted(true)}>
          Yes! 💖
        </button>

        <button
          className="btn-no select-none"
          style={{
            transform: `translate(${noPos.x}px, ${noPos.y}px)`,
            transition: "transform 0.15s ease-out",
            touchAction: "none",
          }}
          onMouseEnter={moveNoButton}
          onMouseDown={moveNoButton}
          onTouchStart={moveNoButton}
          onTouchEnd={(e) => e.preventDefault()}
          onClick={(e) => { e.preventDefault(); moveNoButton(e); }}
          onPointerDown={moveNoButton}
        >
          {noMessages[noCount]}
        </button>
      </div>

      {noCount > 0 && (
        <p className="mt-8 text-sm text-muted-foreground font-body animate-pulse">
          Hehe, you can't click No! 😜
        </p>
      )}
    </section>
  );
};

export default AskOutSection;
