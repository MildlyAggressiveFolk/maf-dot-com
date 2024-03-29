import { useIntersectionObserver } from "~/hooks/useIntersectionObserver";

export default function Hero() {
  const { isIntersecting, ref } = useIntersectionObserver({ rootMargin: "-30%" });

  const style = isIntersecting
    ? { opacity: "1", transition: "all 0.5s" }
    : { opacity: "0", transition: "all 0.5s" };

  const scrollToFeatured = () => {
    document.getElementById("scrollToMaf")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="hero"
      className="relative flex min-h-[92vh] select-none flex-col items-center justify-end pb-4 pt-20 text-center [transition:all_0.5s] sm:pb-12"
    >
      <div className="flex flex-col items-center justify-center">
        <h1
          ref={ref}
          style={{ ...style }}
          className={`text-shadow-lg font-[spacing:_1rem] indent-[.075em] text-[2.75rem] font-black uppercase leading-none tracking-[.075em] sm:text-[5rem]`}
        >
          Mildly
          <br />
          Aggressive
          <br />
          Folk
        </h1>

        <br />
        <p
          id="scrollToMaf"
          style={{ ...style }}
          className="my-4 scroll-my-12 px-4 text-xl font-thin italic"
        >
          Atlanta based Twitch-streaming string duo
        </p>
        <br />

        <div
          style={{ ...style, cursor: isIntersecting ? "pointer" : "default" }}
          className="z-20 m-2 h-fit w-fit cursor-pointer rounded-full border-2 border-white p-4 text-[24px] transition-colors hover:border-highlight hover:text-highlight"
          onClick={scrollToFeatured}
        >
          <DownArrow />
        </div>

        <div
          className="absolute bottom-16 z-10 mt-4 select-none border-[5px] border-white px-6 py-2 text-center text-[2.5rem] font-black"
          style={{
            opacity: isIntersecting ? "0" : "1",
            transitionDelay: isIntersecting ? "0s" : "0.3s",
            transitionProperty: "all",
            transitionDuration: isIntersecting ? "0.3s" : "0.5s",
          }}
        >
          <h1 className="indent-[.125em] tracking-[.125em]">MAF</h1>
        </div>
      </div>
    </div>
  );
}

interface DownArrowProps extends React.SVGProps<SVGSVGElement> {}

function DownArrow(props: DownArrowProps) {
  return (
    <svg
      className="size-6"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 19V5m0 14-4-4m4 4 4-4"
      />
    </svg>
  );
}
