import { useEffect, useState } from "react";

interface Snowflake {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  emoji: string;
}

const emojis = ["❤️", "💕", "💖", "🌸", "✨", "💗", "🩷", "🤍"];

const Snowfall = () => {
  const [flakes, setFlakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const generated: Snowflake[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 16 + 10,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 10,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }));
    setFlakes(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {flakes.map((f) => (
        <span
          key={f.id}
          className="snowflake"
          style={{
            left: `${f.left}%`,
            fontSize: `${f.size}px`,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
            animationIterationCount: "infinite",
          }}
        >
          {f.emoji}
        </span>
      ))}
    </div>
  );
};

export default Snowfall;
