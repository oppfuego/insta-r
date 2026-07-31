import type { Metadata } from "next";
import LegalDocument from "@/components/legal/LegalDocument";
import { getLegalEntry } from "@/data/legal";

const entry = getLegalEntry("/terms");

export const metadata: Metadata = {
  title: entry.document.title,
  description: entry.description,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <LegalDocument document={entry.document} description={entry.description} />;
}
