'use client';

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from 'react';

interface JobCardProps {
  title: string;
  role: string;
  period: string;
  achievements: string[];
  className?: string;
}

interface ProjectCardProps {
  title: string;
  situation: string;
  problem: string;
  actions: string;
  result: string;
  skills: string[];
  tools: string[];
  description: string;
  githubLink?: string;
  className?: string;
  presentationLink?: string;
}

export function JobCard({ title, role, period, achievements, className }: JobCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className={`p-4 bg-black border border-blue-500/50 hover:border-blue-500 hover:bg-blue-900/20 backdrop-blur-md transition-all duration-300 rounded-xl shadow-lg cursor-pointer ${className}`}
        onClick={toggleModal}
      >
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-white/80 mb-2">{role}</p>
        <p className="text-white/60 mb-4">{period}</p>
        <div className="flex justify-center">
          <button className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300">
            Voir détails
          </button>
        </div>
      </motion.div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={toggleModal}>
          <div className="bg-gradient-to-br from-black/95 via-zinc-900/90 to-blue-950/90 border-2 border-blue-500/40 shadow-2xl shadow-blue-900/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 flex flex-col gap-6" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-3xl font-bold text-white mb-2 text-left w-full">{title}</h2>
            <div>
              <h4 className="text-xl font-bold text-blue-300 mb-1 text-left">Rôle</h4>
              <p className="text-white/90 text-left">{role}</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-blue-300 mb-1 text-left">Période</h4>
              <p className="text-white/90 text-left">{period}</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-blue-300 mb-2 text-left">Réalisations</h4>
              <ul className="list-disc pl-5 space-y-1">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-white/90">{achievement}</li>
              ))}
            </ul>
            </div>
            <div className="flex justify-end mt-4">
              <button onClick={toggleModal} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 mt-4">
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function ProjectCard({ title, situation, problem, actions, result, skills, tools, description, githubLink, className, presentationLink }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  function highlightNumbers(text: string): string {
    return text.replace(/\d+/g, '<span class="text-blue-500">$&</span>');
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className={`p-4 bg-black border border-blue-500/50 hover:border-blue-500 hover:bg-blue-900/20 backdrop-blur-md transition-all duration-300 rounded-xl shadow-lg cursor-pointer ${className}`}
        onClick={toggleModal}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 text-left">{title}</h3>
<p className="text-white/90 mb-3 text-left" dangerouslySetInnerHTML={{ __html: highlightNumbers(description) }}></p>
<div className="flex flex-wrap gap-2 mb-3">
  {skills.map((skill, index) => (
    <span key={index} className="bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-blue-700/30">
      {skill}
    </span>
  ))}
</div>
<div className="mt-2 mb-2">
  <h4 className="text-md font-semibold text-blue-300 mb-1">Actions</h4>
  <p className="text-white/80 text-sm mb-1" dangerouslySetInnerHTML={{ __html: highlightNumbers(actions) }}></p>
  <h4 className="text-md font-semibold text-blue-300 mb-1">Résultat</h4>
  <p className="text-white/80 text-sm mb-1" dangerouslySetInnerHTML={{ __html: highlightNumbers(result) }}></p>
  <h4 className="text-md font-semibold text-blue-300 mb-1">Outils</h4>
  <div className="flex flex-wrap gap-2">
    {tools.map((tool, index) => (
      <span key={index} className="bg-blue-900/40 text-blue-300 px-2 py-0.5 rounded-full text-xs font-medium border border-blue-700/30">
        {tool}
      </span>
    ))}
  </div>
</div>
      </motion.div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={toggleModal}>
          <div className="bg-gradient-to-br from-black/95 via-zinc-900/90 to-blue-950/90 border-2 border-blue-500/40 shadow-2xl shadow-blue-900/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 flex flex-col gap-6" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-3xl font-bold text-white mb-4 text-left w-full">{title}</h2>
            <div className="flex flex-col md:flex-row gap-10 md:gap-y-4 w-full">
              <div className="flex-1 min-w-0">
                <h4 className="text-xl font-bold text-blue-300 mb-2 text-left">Situation</h4>
                <p className="mb-3 text-white/90 text-left" dangerouslySetInnerHTML={{ __html: highlightNumbers(situation + ' - Ce projet visait à résoudre un problème spécifique en utilisant des techniques et outils avancés.') }}></p>
                <h4 className="text-xl font-bold text-blue-300 mb-2 text-left">Problème</h4>
                <p className="mb-3 text-white/90 text-left" dangerouslySetInnerHTML={{ __html: highlightNumbers(problem + ' - Une analyse approfondie a été menée pour comprendre les défis rencontrés et les opportunités d\'amélioration.') }}></p>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xl font-bold text-blue-300 mb-2 text-left">Actions</h4>
                <p className="mb-3 text-white/90 text-left" dangerouslySetInnerHTML={{ __html: highlightNumbers(actions + ' - Des stratégies spécifiques ont été mises en œuvre pour atteindre les objectifs fixés, impliquant une collaboration étroite avec les parties prenantes.') }}></p>
                <h4 className="text-xl font-bold text-blue-300 mb-2 text-left">Résultat</h4>
                <p className="mb-3 text-white/90 text-left" dangerouslySetInnerHTML={{ __html: highlightNumbers(result + ' - Les résultats ont été mesurés et analysés pour évaluer l\'impact des actions entreprises.') }}></p>
                <h4 className="text-xl font-bold text-blue-300 mb-2 text-left">Outils Utilisés</h4>
                <ul className="flex flex-wrap gap-2 mb-2">
                  {tools.map((tool, index) => (
                    <li key={index} className="bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-blue-700/30">
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {(githubLink || presentationLink) && (
  <div className="flex gap-4 justify-end mt-6 w-full">
    {githubLink && (
      <a href={githubLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-white rounded-xl hover:from-blue-600 hover:to-blue-300 font-semibold shadow-md transition-all duration-300">
        Voir sur GitHub
      </a>
    )}
    {presentationLink && (
      <a href={presentationLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-violet-700 via-violet-500 to-blue-400 text-white rounded-xl hover:from-violet-600 hover:to-blue-300 font-semibold shadow-md transition-all duration-300">
        Voir la présentation
      </a>
    )}
  </div>
)}
            <div className="flex justify-end w-full">
              <button onClick={toggleModal} className="px-4 py-2 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-white rounded-xl hover:from-blue-600 hover:to-blue-300 font-semibold shadow-md transition-all duration-300 mt-4">
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function getToolDescription(tool: string): string {
  switch (tool) {
    case 'Make':
      return "Make est une plateforme d'automatisation qui permet de connecter des applications pour automatiser les flux de travail.";
    case 'Mistral':
      return "Mistral est un outil de gestion de leads qui aide à scorer et à prioriser les prospects.";
    case 'CRM':
      return "CRM (Customer Relationship Management) est un système pour gérer les interactions avec les clients et les prospects.";
    case 'Python':
      return "Python est un langage de programmation polyvalent utilisé pour le développement web, l'analyse de données, et plus encore.";
    case 'Perplexity':
      return "Perplexity est un outil d'analyse de données qui aide à comprendre les relations complexes entre les données.";
    case 'Vibe Coding':
      return "Vibe Coding est un environnement de développement pour créer des applications interactives et des visualisations de données.";
    case 'SQL':
      return "SQL est un langage de programmation utilisé pour gérer et manipuler les bases de données.";
    case 'PowerBI':
      return "PowerBI est un outil d'analyse de données qui permet de créer des visualisations interactives et des rapports.";
    case 'Tableau':
      return "Tableau est un logiciel de visualisation de données qui facilite la création de tableaux de bord interactifs.";
    case 'Django':
      return "Django est un framework web Python qui facilite le développement rapide de sites web sécurisés et maintenables.";
    case 'React':
      return "React est une bibliothèque JavaScript pour construire des interfaces utilisateur dynamiques et réactives.";
    default:
      return "Description non disponible.";
  }
}
