import type { Metadata } from "next";
import LegalDocument from "@/components/legal/LegalDocument";
import { getLegalEntry } from "@/data/legal";

const entry = getLegalEntry("/privacy");

export const metadata: Metadata = {
  title: entry.document.title,
  description: entry.description,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <LegalDocument document={entry.document} description={entry.description} />;
}
