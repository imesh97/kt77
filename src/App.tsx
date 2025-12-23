import { useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

export default function App() {
  const supporterCount = useQuery(api.supporters.getSupporterCount);
  const addSupporter = useMutation(api.supporters.addSupporter);

  const handleSupport = async () => {
    await addSupporter();
  };

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      {/* Hidden easter egg - invisible text */}
      <div className="absolute top-0 left-0 text-white text-xs opacity-0 hover:opacity-100 transition-opacity duration-1000 p-2">
        "The truth will set you free, but first it will piss you off." - Gloria
        Steinem
      </div>

      {/* Hidden easter egg - bottom right corner */}
      <div className="fixed bottom-4 right-4 text-xs text-gray-100 hover:text-black transition-colors duration-500 cursor-default">
        silence = non-violence.
      </div>

      <main className="container mx-auto px-8 py-16 max-w-4xl">
        {/* Main heading */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none mb-8">
            A PATTERN
            <br />
            OF VIOLENCE~
          </h1>

          {/* Hidden easter egg in the dots */}
          <div className="flex justify-center space-x-2 mb-12">
            <span className="w-2 h-2 bg-black rounded-full"></span>
            <span className="w-2 h-2 bg-black rounded-full opacity-70"></span>
            <span className="w-2 h-2 bg-black rounded-full opacity-40"></span>
            <span
              className="w-2 h-2 bg-black rounded-full opacity-20 hover:opacity-100 transition-opacity cursor-default"
              title="we see you~"
            ></span>
          </div>
        </div>

        {/* Main content */}
        <div className="space-y-12 text-lg leading-relaxed max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl font-light">
            This website documents systematic{" "}
            <span className="font-bold">sexual harassment and assault</span> by{" "}
            <i>individuals</i> within our university communities.
            <br />
            <br />
            These are not isolated incidents.
            <br />
            <br />
            They represent a pattern of predatory behaviour institutionalized by
            silence.
          </p>

          <p className="text-xl md:text-2xl font-light">
            Through community reporting and transparent documentation, we
            reclaim our power to tell the <i>truth.</i>
          </p>
        </div>

        <div className="flex justify-center my-12">
          <a
            href="/article.pdf"
            className="text-decoration-none underline underline-offset-4 cursor-pointer text-[#4d179a]"
            target="_blank"
          >
            ~ view article ~
          </a>
        </div>

        {/* Counter section */}
        <div className="text-center">
          <div className="inline-block border-2 border-black p-8">
            <div className="text-4xl md:text-6xl font-bold mb-4">
              {supporterCount?.toLocaleString() || "0"}
            </div>
            <div className="text-lg uppercase tracking-wider">
              SUPPORTERS OF NON-VIOLENCE
            </div>

            <button
              onClick={() => handleSupport}
              className="mt-6 px-8 py-3 border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 uppercase tracking-wider font-bold"
            >
              COUNT ME IN.
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="/truth.pdf"
            className="text-decoration-none underline underline-offset-4 cursor-pointer text-[#4d179a]"
            target="_blank"
          >
            ~ view truth ~
          </a>
        </div>

        {/* Hidden easter egg - middle section */}
        <div className="mt-32 text-center">
          <div
            className="w-px h-16 bg-black mx-auto opacity-20 hover:opacity-100 transition-opacity duration-1000"
            title="~made for responsible ai"
          ></div>
        </div>

        {/* Footer message */}
        <footer className="mt-32 pt-16 border-t border-black">
          <div className="text-center">
            <p className="text-sm uppercase tracking-wider opacity-70 max-w-2xl mx-auto leading-relaxed">
              A misconduct disclosure for predatory behaviour and institutional{" "}
              <a
                href="https://i.ibb.co/Dg8Dwjb5/KRIStom-is-rapist.png"
                className="text-decoration-none"
                target="_blank"
              >
                failure.
              </a>
              <br />
              Built by survivors, and{" "}
              <a
                className="underline-none"
                href="https://www.nimsitha.com/"
                target="_blank"
              >
                those
              </a>{" "}
              committed to <span className="font-bold">accountability</span> 💜
            </p>

            {/* Hidden easter egg in footer */}
            <div className="mt-8 text-xs opacity-0 hover:opacity-50 transition-opacity duration-1000">
              in the night, we will remember not the words of our enemies, but
              the silence of our seekers.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
