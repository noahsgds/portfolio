'use client';

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ProfessionalInfoProps {
  avatar?: React.ReactNode;
  title: string;
  subtitle: string;
  content: string;
  achievements: string[];
  icon?: string;
  className?: string;
  contactButtonText?: string;
  contactLink?: string;
  linkedinLink?: string;
  githubLink?: string;
}

export function ProfessionalInfo({ avatar, title, subtitle, content, achievements, icon = '', className, contactButtonText, contactLink, linkedinLink, githubLink }: ProfessionalInfoProps) {
  return (
    <Card className={`p-6 bg-black border border-blue-500/50 hover:border-blue-500 hover:bg-blue-900/20 backdrop-blur-md transition-all duration-300 rounded-xl ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {avatar && (
          <div className="flex flex-col items-center justify-center mb-2">
            {avatar}
          </div>
        )}
        {(linkedinLink || githubLink) && (
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4"> {/* Adjusted mt-6 to mt-4 */}
            {linkedinLink && (
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-3 py-1 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900"
              >
                <svg viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.155 1.459-2.155 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587z"/>
                </svg>
                LinkedIn
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-3 py-1 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900"
              >
                <svg viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
                GitHub
              </a>
            )}
          </div>
        )}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <span className="text-2xl text-white/80">{icon}</span>
        </div>
        <h4 className="text-lg font-semibold text-white/90 mb-4">{subtitle}</h4>
        <p className="text-white/80 mb-6">
          {content} En tant que {subtitle}, j'ai acquis une expérience précieuse en travaillant sur divers projets qui m'ont permis de développer mes compétences en {achievements.join(", ")}.
          J'ai également eu l'opportunité de collaborer avec des équipes talentueuses et de contribuer à des initiatives stratégiques qui ont eu un impact significatif sur l'organisation.
        </p>
        <div className="border-t border-white/10 pt-4 mt-4">
          <h5 className="text-lg font-semibold text-white/90 mb-2">Réalisations</h5>
          <ul className="space-y-2 list-disc pl-5">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-green-400">•</span>
                <span className="text-white">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {contactLink && contactButtonText && (
          <div className="mt-6 flex justify-center">
            <a
              href={contactLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <svg className="sparkle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
              </svg>
              <span className="text">{contactButtonText}</span>
            </a>
          </div>
        )}


      </motion.div>
    </Card>
  );
}
