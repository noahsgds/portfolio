'use client'

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Role = 'rh' | 'dev' | null

export function RoleSelector() {
  const [selectedRole, setSelectedRole] = useState<Role>(null)

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role)
  }

  return (
    <div className="space-y-12">
      {/* Role Selection Section */}
      <section className="text-center space-y-8">
        <h2 className="text-2xl font-semibold">Bienvenue sur mon portfolio</h2>
        <p className="text-muted-foreground">Sélectionnez votre profil pour découvrir mon parcours</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card 
            className={`hover:shadow-lg transition-all cursor-pointer ${
              selectedRole === 'rh' ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => handleRoleSelect('rh')}
          >
            <CardHeader>
              <CardTitle>Recruteur RH</CardTitle>
              <CardDescription>Découvrez mon profil professionnel</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-left">
                <li>Soft skills et communication</li>
                <li>Expérience en gestion de projet</li>
                <li>Adaptabilité et travail en équipe</li>
              </ul>
            </CardContent>
          </Card>

          <Card 
            className={`hover:shadow-lg transition-all cursor-pointer ${
              selectedRole === 'dev' ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => handleRoleSelect('dev')}
          >
            <CardHeader>
              <CardTitle>Développeur</CardTitle>
              <CardDescription>Explorez mes compétences techniques</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-left">
                <li>Stack technique complète</li>
                <li>Architecture logicielle</li>
                <li>Bonnes pratiques de développement</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Content Section */}
      <section className={`transition-opacity duration-500 ${selectedRole ? 'opacity-100' : 'opacity-0'}`}>
        {selectedRole === 'rh' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center">Profil Professionnel</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Soft Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Communication efficace</li>
                    <li>Leadership et gestion d'équipe</li>
                    <li>Résolution de problèmes</li>
                    <li>Adaptabilité et flexibilité</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Expérience</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Gestion de projets agiles</li>
                    <li>Collaboration interdisciplinaire</li>
                    <li>Formation et mentorat</li>
                    <li>Gestion du changement</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {selectedRole === 'dev' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center">Compétences Techniques</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Frontend</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>React & Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>HTML/CSS</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Backend</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>APIs RESTful</li>
                    <li>Bases de données</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>DevOps</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Docker</li>
                    <li>Git</li>
                    <li>CI/CD</li>
                    <li>Cloud (AWS/GCP)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </section>
    </div>
  )
} 