'use client';

import { Card } from "@/components/ui/card";

interface ContactInfoProps {
  name: string;
  phone: string;
  email: string;
  linkedin?: string;
  github?: string;
}

export function ContactInfo({ name, phone, email, linkedin, github }: ContactInfoProps) {
  return (
    <Card className="p-6 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 rounded-xl">
      <h3 className="text-2xl font-bold text-white mb-4">{name}</h3>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <span className="text-green-400">📞</span>
          <span className="text-white">{phone}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-green-400">📧</span>
          <span className="text-white">{email}</span>
        </div>
        {linkedin && (
          <div className="flex items-center gap-4">
            <span className="text-green-400">🔗</span>
            <span className="text-white">LinkedIn</span>
          </div>
        )}
        {github && (
          <div className="flex items-center gap-4">
            <span className="text-green-400">💻</span>
            <span className="text-white">GitHub</span>
          </div>
        )}
      </div>
    </Card>
  );
}
