'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { LineChart, Line, AreaChart, Area } from 'recharts';

interface Skill {
  name: string;
  score: number;
  category: string;
}

const skillsData: Skill[] = [
  { name: 'Communication', score: 90, category: 'Soft Skills' },
  { name: 'Leadership', score: 85, category: 'Soft Skills' },
  { name: 'Gestion de projet', score: 88, category: 'Hard Skills' },
  { name: 'Analyse', score: 92, category: 'Hard Skills' },
  { name: 'Adaptabilité', score: 89, category: 'Soft Skills' },
  { name: 'Résolution de problèmes', score: 91, category: 'Hard Skills' },
];

export function SkillsChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Évolution des Compétences</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={skillsData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="score" fill="#2563eb" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

interface Experience {
  year: number;
  role: string;
  company: string;
  impact: number;
}

const experienceData: Experience[] = [
  { year: 2023, role: 'Responsable RH', company: 'Entreprise A', impact: 85 },
  { year: 2022, role: 'Manager RH', company: 'Entreprise B', impact: 88 },
  { year: 2021, role: 'Chargé de recrutement', company: 'Entreprise C', impact: 90 },
];

export function ExperienceTimeline() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Chronologie de l'Expérience</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={experienceData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="impact" stroke="#2563eb" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
