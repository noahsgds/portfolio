'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MetricCard } from "./Metrics";
import { SkillsChart } from "./Charts";
import { ExperienceTimeline } from "./Charts";
import { ProjectCard } from "./ProjectCard";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8">
      {/* En-tête avec animation */}
      <div className="flex flex-col gap-4 animate-fade-in">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
          Expertise RH & Développement
        </h1>
        <p className="text-gray-400">
          Visualisation interactive de mon parcours professionnel et mes compétences RH
        </p>
      </div>

      {/* Section Compétences Principales */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <MetricCard
          title="Gestion de Projet"
          value="92%"
          description="Expérience confirmée en gestion de projets RH"
          icon="🎯"
          color="bg-blue-500"
        />
        <MetricCard
          title="Formation"
          value="95%"
          description="Conception et mise en œuvre de programmes de formation"
          icon="🎓"
          color="bg-green-500"
        />
        <MetricCard
          title="Communication"
          value="90%"
          description="Communication efficace et leadership"
          icon="📢"
          color="bg-purple-500"
        />
      </div>

      {/* Onglets de navigation */}
      <Tabs defaultValue="experience" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-white/10 backdrop-blur-md rounded-xl p-1">
          <TabsTrigger value="experience" className="bg-white/50">Expérience</TabsTrigger>
          <TabsTrigger value="projects" className="bg-white/50">Projets</TabsTrigger>
          <TabsTrigger value="achievements" className="bg-white/50">Réalisations</TabsTrigger>
          <TabsTrigger value="skills" className="bg-white/50">Compétences</TabsTrigger>
        </TabsList>

        {/* Onglet Expérience */}
        <TabsContent value="experience" className="mt-6">
          <div className="space-y-6">
            <ExperienceTimeline />
          </div>
        </TabsContent>

        {/* Onglet Projets */}
        <TabsContent value="projects" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <ProjectCard
              title="Transformation RH"
              description="Mise en place d'une nouvelle organisation RH"
              impact="Réduction des temps de traitement de 30%"
              tags={[
                "Organisation",
                "Processus",
                "Digitalisation"
              ]}
            />
            <ProjectCard
              title="Programme de Formation"
              description="Développement d'un programme de formation interne"
              impact="Engagement des collaborateurs +25%"
              tags={[
                "Formation",
                "Développement",
                "Engagement"
              ]}
            />
          </div>
        </TabsContent>

        {/* Onglet Réalisations */}
        <TabsContent value="achievements" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <MetricCard
              title="Engagement"
              value="+25%"
              description="Augmentation de l'engagement des équipes"
              icon="📈"
              color="bg-green-500"
            />
            <MetricCard
              title="Productivité"
              value="+30%"
              description="Amélioration des processus RH"
              icon="🚀"
              color="bg-blue-500"
            />
          </div>
        </TabsContent>

        {/* Onglet Compétences */}
        <TabsContent value="skills" className="mt-6">
          <div className="space-y-6">
            <SkillsChart />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
