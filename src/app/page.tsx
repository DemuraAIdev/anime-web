import SearchBar from "./searchbar";
import TypedBios from "@/components/typed";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen space-y-2 pb-8 pt-5 md:space-y-5 md:lg:mt-20 ">
        <div
          className="animate-text bg-gradient-to-r 
            from-[#6EE7B7] via-[#3B82F6]  to-[#9333EA]
            bg-clip-text
            text-transparent
            "
        >
          <h1 className="tracking-tightest my-20 select-none text-6xl font-bold leading-none sm:my-10 sm:text-7xl ">
            AniSearch
          </h1>
        </div>
        <div className="rounded-lg border-2 border-dotted border-gray-600 p-5 ">
          <TypedBios />
          <p className="hover text-lg leading-7 text-black dark:text-gray-400 ">
            Search for your favorite anime
          </p>
        </div>

        <SearchBar />
        {/* <svg
          id="visual"
          viewBox="0 0 900 450"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          className="absolute inset-x-0 hidden w-full md:block"
        >
          <path
            d="M0 118L90 118L90 103L180 103L180 153L270 153L270 133L360 133L360 112L450 112L450 138L540 138L540 155L630 155L630 75L720 75L720 116L810 116L810 61L900 61"
            fill="none"
            stroke-linecap="square"
            stroke-linejoin="miter"
            stroke="#1a1818"
            stroke-width="12"
          ></path>
        </svg> */}
      </div>
    </main>
  );
}
