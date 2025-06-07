import { JobCard } from "@/components/ui/project-card";

'use client';

import Link from "next/link";
import Scene3D from "@/components/Scene3D";
import { Cta } from "@/components/ui/cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-between p-4 py-8 w-full max-w-full">
      {/* Header avec le nom */}
      <header className="w-full max-w-full break-words text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white break-words">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 mb-4 sm:mb-0">
            <a
              href="https://www.linkedin.com/in/noah-segonds/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-3 py-1 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900"
            >
              <svg viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.155 1.459-2.155 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/noahsgds"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-3 py-1 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900"
            >
              <svg viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
              GitHub
            </a>
          </div>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-white">
            Noah Segonds
          </span>
        </h1>
      </header>

      {/* Texte Choose your character */}
      <div className="text-center relative w-full max-w-full break-words">
        <h2 className="text-2xl md:text-3xl text-zinc-400 font-medium tracking-wider uppercase relative">
          Choose your character
          <div className="h-px w-1/2 bg-gradient-to-r from-transparent via-zinc-700 to-transparent absolute -bottom-2 left-1/4"></div>
        </h2>
      </div>

      {/* Menu de sélection */}
      <main className="w-full max-w-[1000px] flex-1 flex items-center justify-center my-4 overflow-x-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-full px-2 sm:px-4 break-words">
          {/* Section RH */}
          <div className="text-center">
            <Link href="/cv/rh" className="block group">
              <div className="relative aspect-[2/3] md:aspect-[3/4] w-full max-w-[400px] mx-auto rounded-xl overflow-hidden 
                shadow-lg shadow-blue-900/20 
                group-hover:shadow-2xl group-hover:shadow-blue-500/40 
                group-hover:scale-[1.02] 
                transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 ring-2 ring-blue-500/0 group-hover:ring-blue-500/50 transition-all duration-300" />
                <Scene3D type="rh" rotationSpeed={1} />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <h2 className="text-3xl md:text-4xl font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
                    Version RH
                  </h2>
                  
                </div>
              </div>
            </Link>
          </div>

          {/* Section DEV */}
          <div className="text-center">
            <Link href="/cv/dev" className="block group">
              <div className="relative aspect-[2/3] md:aspect-[3/4] w-full max-w-[400px] mx-auto rounded-xl overflow-hidden 
                shadow-lg shadow-purple-900/20 
                group-hover:shadow-2xl group-hover:shadow-purple-500/40 
                group-hover:scale-[1.02] 
                transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 ring-2 ring-purple-500/0 group-hover:ring-purple-500/50 transition-all duration-300" />
                <Scene3D type="dev" rotationSpeed={1} />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <h2 className="text-3xl md:text-4xl font-medium text-purple-400 group-hover:text-purple-300 transition-colors">
                    Version DEV
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* Section Call to Action */}
      <section className="w-full max-w-3xl mx-auto mt-12 mb-8 px-4">
        <Cta 
          title="Intéressé par mon profil ?"
          description="Contactez-moi pour discuter de collaborations potentielles et de projets futurs."
          actionText="Prendre contact"
          actionLink="https://tally.so/r/w8gKvx"
        />
      </section>
    </div>
  );
}
