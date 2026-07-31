/**
 * Shape of the legal documents in this folder. The content is a verbatim
 * transcription of the source policy documents.
 *
 * The `text` fields contain placeholder tokens ({{brand}}, {{legalName}},
 * {{companyNumber}}, {{address}}, {{email}}, {{domain}}) that are resolved
 * from the environment at render time — see `resolveLegalText` in
 * `components/legal/LegalDocument.tsx`. Nothing brand-specific is hardcoded.
 */
export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] };

export type LegalSection = {
  id: string;
  number: string;
  title: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  title: string;
  route: string;
  effectiveDate: string;
  lastUpdated: string;
  intro: LegalBlock[];
  sections: LegalSection[];
};
