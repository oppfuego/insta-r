import type { Metadata } from "next";
import LegalDocument from "@/components/legal/LegalDocument";
import { getLegalEntry } from "@/data/legal";

const entry = getLegalEntry("/delivery-policy");

export const metadata: Metadata = {
  title: entry.document.title,
  description: entry.description,
  alternates: { canonical: "/delivery-policy" },
};

export default function DeliveryPolicyPage() {
  return <LegalDocument document={entry.document} description={entry.description} />;
}
