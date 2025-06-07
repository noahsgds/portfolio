import { Cta } from "@/components/ui/cta";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-blue-950 p-6">
      <Cta
        title="Contactez-moi"
        description="Pour toute collaboration, projet ou question, contactez-moi via LinkedIn ou GitHub."
        linkedinLink="https://www.linkedin.com/in/noah-segonds/"
        githubLink="https://github.com/noahsgds"
      />
    </main>
  );
}
