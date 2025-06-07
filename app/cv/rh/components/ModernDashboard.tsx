'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { SkillCard } from "@/components/ui/skill-card";
import { ProjectCard } from "@/components/ui/project-card";

export default function ModernDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-bold text-white">Portfolio Data & IA</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkillCard
          title="Compétences Techniques"
          skills={[
            { name: "Python - Pandas, NumPy", level: "Expert" },
            { name: "SQL - PostgreSQL, MySQL", level: "Avancé" },
            { name: "PowerBI, Tableau", level: "Expert" },
            { name: "Machine Learning", level: "Avancé" },
          ]}
        />
        <SkillCard
          title="Outils d'Automatisation"
          skills={[
            { name: "Power Automate", level: "Expert" },
            { name: "UiPath", level: "Avancé" },
            { name: "RPA", level: "Expert" },
            { name: "API Integration", level: "Avancé" },
          ]}
        />
        <SkillCard
          title="Soft Skills"
          skills={[
            { name: "Analyse de données" },
            { name: "Résolution de problèmes" },
            { name: "Gestion de projet" },
            { name: "Communication" },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          title="Solution IA Prédictive"
          description="Développement d'un modèle prédictif pour l'optimisation des processus"
          achievements={[
            "Réduction des coûts de 20%",
            "Amélioration de la précision",
            "Intégration avec les systèmes existants"
          ]}
        />
        <ProjectCard
          title="Automatisation RPA"
          description="Mise en place d'une solution RPA pour les processus métier"
          achievements={[
            "100+ heures économisées/mois",
            "Fiabilité accrue",
            "Réduction des erreurs"
          ]}
        />
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-white mb-4">Formation et Certifications</h2>
        <Card className="p-6 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 rounded-xl">
          <h3 className="text-lg font-semibold text-white mb-4">Formation Data Science</h3>
          <p className="text-white/80 mb-4">Université de Paris</p>
          <p className="text-white/80">2020 - 2022</p>
        </Card>
        <Card className="p-6 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 rounded-xl">
          <h3 className="text-lg font-semibold text-white mb-4">Certifications</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span>•</span>
              <span className="text-white">Certification PowerBI</span>
            </li>
            <li className="flex items-center gap-2">
              <span>•</span>
              <span className="text-white">Certification Python</span>
            </li>
            <li className="flex items-center gap-2">
              <span>•</span>
              <span className="text-white">Certification RPA</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
