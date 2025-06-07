'use client';

import Image from "next/image";
import { ContactInfo } from "@/components/ui/contact-info";
import { ProfessionalInfo } from "@/components/ui/professional-info";
import { SkillBadges } from "@/components/ui/skill-badges";
import { Cta } from "@/components/ui/cta";
import { ProjectCard } from "@/components/ui/project-card";
import { JobCard } from '@/components/ui/project-card'; 
import { KPIDashboard } from "@/components/ui/kpi-dashboard"; 

export default function RHPage() {
  const experiences = [
    {
      company: "SIMIO",
      role: "Alternance - Business Developer / CSM",
      period: "Sept 2024 - Présent",
      achievements: [
        "Pitch de l'outil Simio, création de supports et onboarding des nouveaux clients",
        "Automatisation du processus de personnalisation et de création de campagnes mailing : 40% taux de click",
        "Création de campagnes marketing WhatsApp : +500K€",
        "Audit des campagnes et conseils aux clients",
        "Cold Calling : +70 rendez-vous et 10 nouveaux clients"
      ]
    },
    {
      company: "YOC AntiGaspi",
      role: "Stage - Assistant Commercial et Marketing",
      period: "Avril-Juin 2024",
      achievements: [
        "Développement du programme \"Ambassadeurs\" : +1300 utilisateurs",
        "Définition de la stratégie marketing et commerciale",
        "Collaboration avec les data analyst pour optimiser les prises de décision",
        "Participation aux réunions avec Elior et API Restauration"
      ]
    },
    {
      company: "DOMY",
      role: "Alternance - Business Developer",
      period: "Août-Nov. 2023",
      achievements: [
        "Gestion de 250 psychologues en SA V",
        "Création d'une stratégie marketing et commerciale",
        "Acquisition de +80 psychologues et 10 partenaires",
        "Construction du CRM sur NOTION"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-between p-4 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* En-tête */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <h2 className="text-2xl font-bold text-white mb-4">Profil Professionnel</h2>

          <ProfessionalInfo
            contactLink="https://tally.so/r/w8gKvx"
            contactButtonText="Contactez-moi"
            linkedinLink="https://www.linkedin.com/in/noah-segonds/"
            githubLink="https://github.com/noahsgds/"
            avatar={
              <div className="flex flex-col items-center gap-4 mt-2 mb-4">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-36 h-36 rounded-full bg-gradient-to-tr from-blue-600 via-purple-700 to-blue-400 opacity-30 blur-2xl"></div>
                  <Image
                    src="/77703DAC-C5C3-4EAF-89F1-E4D2C4861D42_4_5005_c.jpeg"
                    alt="Photo de profil Noah Segonds"
                    width={128}
                    height={128}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl relative z-10"
                  />
                </div>
                {/* Les boutons LinkedIn et GitHub sont maintenant gérés par le composant ProfessionalInfo lui-même */}
              </div>
            }
            title="Noah SEGONDS"
            subtitle="Étudiant en MSc Business Analytics"
            content="Passionné par l'entrepreneuriat et l'IA, je souhaite créer ma Startup ou devenir Freelance tout en réalisant un tour du monde."
            achievements={[
              "Vainqueur de hackathons (3M, GoFusion)",
              "Membre du programme Excellence Propulsion ESCP",
              "Top 5% promo en MSc Business Analytics"
            ]}
            className="bg-black border border-blue-500/50 hover:border-blue-500 hover:bg-blue-900/20 transition"
          />
        </div>

        {/* Compétences */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Compétences Techniques</h2>
          <SkillBadges
            title=""
            skills={[
              { name: "Python", category: "Programming" },
              { name: "SQL", category: "Data" },
              { name: "PowerBI", category: "BI" },
              { name: "Tableau", category: "BI" },
              { name: "Dataiku", category: "Data" },
              { name: "Google Analytics", category: "Analytics" },
              { name: "Make", category: "Automation" },
              { name: "N8N", category: "Automation" }
            ]}
            className="bg-black border border-blue-500/50 hover:border-blue-500 hover:bg-blue-900/20 transition"
          />
        </div>

        {/* Projets */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 col-span-1 md:col-span-2">Projets</h2>
          <ProjectCard
            title="Projet Hackathon 3M"
            situation="Malt cherchait à développer les leads dormants provenant de plusieurs canaux de communication."
            problem="Difficulté à gérer et convertir les leads efficacement."
            actions="Création de workflows sur Make avec Mistral pour scorer les leads, établissement de personas et adaptation de la communication, segmentation des canaux et personnalisation des messages."
            result="80% de temps gagné pour les commerciaux."
            skills={["Make", "Mistral", "Communication", "Segmentation"]}
            tools={["Make", "Mistral", "CRM"]}
            description="Optimisation des processus de gestion des leads pour Malt."
            className="bg-black border border-blue-500/50 hover:border-blue-500 hover:bg-blue-900/20 transition"
            presentationLink="https://www.canva.com/design/DAGgYu3FtjE/EpFFoy-XYZRHiEH1cTAHiQ/edit?utm_content=DAGgYu3FtjE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          />
          <ProjectCard
            title="Projet Carrefour"
            situation="Carrefour Link souhaitait vérifier les marques en rayon et leurs holdings associées."
            problem="Manque d'efficacité dans la vérification des marques et holdings."
            actions="Code Python relié à Perplexity pour vérification, dashboard en Vibe Coding pour une utilisation facile, enrichissement et vérification des données."
            result="Économie de 2 jours par semaine."
            skills={["Python", "Perplexity", "Vibe Coding", "Data Enrichment"]}
            tools={["Python", "Perplexity", "Vibe Coding"]}
            description="Automatisation de la vérification des marques pour Carrefour."
            githubLink="https://github.com/votre-utilisateur/projet-carrefour"
            className="bg-black border border-blue-500/50 hover:border-blue-500 hover:bg-blue-900/20 transition"
          />
          <ProjectCard
            title="Projet SQL"
            situation="Analyse complexe avec SQL, PowerBI, et Tableau."
            problem="Difficulté à extraire des insights clairs et exploitables."
            actions="Création d'un dashboard analytique, amélioration de la stratégie de l'entreprise, recommandations concrètes basées sur l'analyse."
            result="Amélioration significative de la prise de décision."
            skills={["SQL", "PowerBI", "Tableau", "Analytical Insights"]}
            tools={["SQL", "PowerBI", "Tableau"]}
            description="Développement d'un dashboard analytique pour des insights clairs."
            className="bg-black border border-blue-500/50 hover:border-blue-500 hover:bg-blue-900/20 transition"
          />
          <ProjectCard
            title="Projet Python et Site FreeGo"
            situation="Récupération des données et développement du site 'FreeGo'."
            problem="Gestion inefficace des recettes et filtrage des données."
            actions="Récupération des données de chaque recette, création de tableaux analytiques, développement du site 'FreeGo' pour filtrer les recettes."
            result="Optimisation de la gestion des recettes."
            skills={["Python", "Data Analysis", "Web Development"]}
            tools={["Python", "Django", "React"]}
            description="Création d'un site pour optimiser la gestion des recettes."
            githubLink="https://github.com/noahsgds/scraping-marmiton"
            className="bg-black border border-blue-500/50 hover:border-blue-500 hover:bg-blue-900/20 transition"
          />
        </div>

        {/* Expériences */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 col-span-1 md:col-span-3">Expériences Professionnelles</h2>
          {experiences.map((experience, index) => (
            <JobCard
              key={index}
              title={experience.company}
              role={experience.role}
              period={experience.period}
              achievements={experience.achievements}
              className="bg-black border border-blue-500/50 hover:border-blue-500 hover:bg-blue-900/20 transition"
            />
          ))}
        </div>

        {/* Éducation */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 gap-4 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Éducation</h2>
          <ProfessionalInfo
            title=""
            subtitle="Formations et Certifications"
            content="Formation complète en Business Analytics et Marketing Digital."
            achievements={[
              "MSc Business Analytics - Eugenia School",
              "BUT GACO - Spécialité MCMO",
              "Certification Dataiku",
              "Programme Excellence Propulsion ESCP"
            ]}
            className="bg-black border border-blue-500/50 hover:border-blue-500 hover:bg-blue-900/20 transition"
          />
        </div>

        {/* CTA Final */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <Cta
            title="Intéressé par mon profil ?"
            description="Contactez-moi pour discuter de collaborations potentielles et de projets futurs."
            actionText="Contactez-moi"
            actionLink="https://tally.so/r/w8gKvx"
            className="bg-black border border-blue-500/50 hover:border-blue-500 hover:bg-blue-900/20 transition"
          />
        </div>
      </div>

      <style jsx>{`
        .text-blue {
          color: #00aaff;
        }
        .border-blue {
          border-color: #00aaff;
        }
        .bg-blue {
          background-color: #00aaff;
        }
      `}</style>
    </div>
  );
}