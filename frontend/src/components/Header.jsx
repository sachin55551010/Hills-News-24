import { useEffect, useState } from "react";
import background from "../assets/background.png";
import newLogo from "../assets/newLogo.png";
export const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const today = new Date();
  const formattedTime = currentTime.toLocaleTimeString("en-IN");
  const formattedDate = today.toLocaleDateString("en-IN", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    // header
    <header
      className="flex p-2"
      style={{
        backgroundImage: `
    linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.6)),
    url(${background})
  `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        width: "100%",
        height: "10.3rem",
      }}
    >
      {/* logo section */}
      <section className="flex items-center justify-center">
        <img src={newLogo} alt="logo" className="h-30" />
      </section>

      {/* date time and banner section */}
      <section className="flex-1 gap-1 flex flex-col lg:flex lg:flex-row">
        {/* heading, date and time section */}
        <div className="flex flex-col lg:justify-center">
          <h1 className="font-extrabold text-2xl md:text-xl lg:text-4xl tracking-widest text-red-500">
            Hills News 24
          </h1>

          <div className="lg:flex lg:flex-col flex gap-2">
            <span className="text-gray-300 text-sm md:text-lg lg:text-2xl">
              {formattedDate}
            </span>
            <span className="text-gray-300 text-sm lg:text-xl">
              {formattedTime}
            </span>
          </div>
        </div>

        {/*ad banner */}
        <a
          href="https://wa.me/919817540917?text=Hello%20I%20want%20more%20information"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <div
            className="flex-1 relative overflow-hidden cursor-pointer group
    rounded-xl
    bg-black/40 hover:bg-zinc-800/50
    border border-zinc-700/60 hover:border-zinc-500/60
    transition-all duration-500"
          >
            {/* Corner accents */}
            <span className="absolute top-2 left-2 w-2 h-2 border-t border-l border-zinc-600/60 group-hover:border-zinc-400/80 transition-colors duration-500 rounded-tl-sm" />
            <span className="absolute top-2 right-2 w-2 h-2 border-t border-r border-zinc-600/60 group-hover:border-zinc-400/80 transition-colors duration-500 rounded-tr-sm" />
            <span className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-zinc-600/60 group-hover:border-zinc-400/80 transition-colors duration-500 rounded-bl-sm" />
            <span className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-zinc-600/60 group-hover:border-zinc-400/80 transition-colors duration-500 rounded-br-sm" />

            {/* Shimmer sweep */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-transform duration-700
      bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.04)_50%,transparent_60%)]
      translate-x group-hover:translate-x-full
      transition-transform duration-700 ease-in-out pointer-events-none"
            />

            <div
              className="relative w-full h-full rounded-xl px-5 py-4
      flex flex-col justify-center items-center gap-1.5"
            >
              {/* Label with pulse dot */}
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-zinc-500 group-hover:bg-zinc-300 animate-pulse transition-colors duration-300" />
                <span
                  className="text-[1rem] font-medium tracking-[0.2em] uppercase
          text-zinc-500 group-hover:text-zinc-300
          transition-colors duration-300"
                >
                  Advertisement
                </span>
              </span>

              {/* Divider */}
              <div
                className="h-px bg-zinc-700/60 group-hover:bg-zinc-500/80
        w-8 group-hover:w-14
        transition-all duration-500"
              />

              {/* Main text */}
              <p
                className="text-sm lg:text-lg font-normal text-center
        text-zinc-400 group-hover:text-zinc-200
        leading-snug tracking-wide
        transition-all duration-300"
              >
                Contact us to place your advertisement
              </p>
            </div>
          </div>
        </a>
      </section>
    </header>
  );
};
