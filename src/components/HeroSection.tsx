import teddyImg from "@/assets/teddy.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative hero-glow px-4">
      <div className="animate-float mb-8">
        <img src={teddyImg} alt="Cute teddy bear" className="w-48 h-48 md:w-64 md:h-64 drop-shadow-2xl" />
      </div>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-primary mb-6 text-center leading-tight">
        Hey Doraemon ✨
      </h1>
      <p className="text-lg md:text-2xl text-muted-foreground font-body max-w-lg text-center mb-8">
        I made this little something just for you... scroll down 💕
      </p>
      <div className="animate-bounce mt-4">
        <span className="text-4xl">👇</span>
      </div>
    </section>
  );
};

export default HeroSection;
