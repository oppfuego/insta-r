import type { Metadata } from "next";
import LegalDocument from "@/components/legal/LegalDocument";
import { getLegalEntry } from "@/data/legal";

const entry = getLegalEntry("/refund-policy");

export const metadata: Metadata = {
  title: entry.document.title,
  description: entry.description,
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicyPage() {
  return <LegalDocument document={entry.document} description={entry.description} />;
}
