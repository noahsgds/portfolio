export default function DevCV() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary p-8">
      <main className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center">CV Version Développeur</h1>
        <div className="grid gap-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Compétences Techniques</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Frontend</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>React & Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>HTML/CSS</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Backend</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>APIs RESTful</li>
                  <li>Bases de données</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-medium">DevOps</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Docker</li>
                  <li>Git</li>
                  <li>CI/CD</li>
                  <li>Cloud (AWS/GCP)</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
} 