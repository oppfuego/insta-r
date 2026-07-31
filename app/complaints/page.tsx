import type { Metadata } from "next";
import LegalDocument from "@/components/legal/LegalDocument";
import { getLegalEntry } from "@/data/legal";

const entry = getLegalEntry("/complaints");

export const metadata: Metadata = {
  title: entry.document.title,
  description: entry.description,
  alternates: { canonical: "/complaints" },
};

export default function ComplaintsPage() {
  return <LegalDocument document={entry.document} description={entry.description} />;
}
