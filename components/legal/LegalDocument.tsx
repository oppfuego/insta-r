import Container from "@/components/layout/Container";
import { siteConfig } from "@/config/site";
import type { LegalBlock, LegalDocument as LegalDocumentType } from "@/data/legal/types";

const tokens: Record<string, string> = {
  brand: siteConfig.companyName,
  legalName: siteConfig.companyLegalName || siteConfig.companyName,
  companyNumber: siteConfig.companyNumber,
  address: siteConfig.companyAddress,
  email: siteConfig.companyEmail,
  domain: siteConfig.domain,
};

/** Replaces {{token}} placeholders with the env-driven company details. */
export function resolveLegalText(text: string): string {
  return text.replace(/\{\{(\w+)\}\}/g, (match, key: string) =>
    key in tokens ? tokens[key] : match
  );
}

/** Turns the company email into a mailto link without altering the wording. */
function withEmailLinks(text: string) {
  const email = siteConfig.companyEmail;
  if (!email || !text.includes(email)) return text;
  return text.split(email).flatMap((part, i) =>
    i === 0
      ? [part]
      : [
          <a
            key={i}
            href={`mailto:${email}`}
            className="underline hover:text-gray-900"
          >
            {email}
          </a>,
          part,
        ]
  );
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "h3":
      return (
        <h3 className="mt-6 text-sm font-semibold text-gray-900">
          {resolveLegalText(block.text)}
        </h3>
      );
    case "ul":
      return (
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-gray-500">
          {block.items.map((item, i) => (
            <li key={i}>{resolveLegalText(item)}</li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <thead className="bg-gray-50">
              <tr>
                {block.headers.map((header, i) => (
                  <th
                    key={i}
                    className="border-b border-gray-200 px-4 py-2.5 font-semibold text-gray-900"
                  >
                    {resolveLegalText(header)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="align-top even:bg-gray-50/50">
                  {row.map((cell, j) => (
                    <td key={j} className="border-t border-gray-100 px-4 py-2.5 text-gray-500">
                      {resolveLegalText(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return (
        <p className="mt-3 text-sm leading-relaxed whitespace-pre-line text-gray-500">
          {withEmailLinks(resolveLegalText(block.text))}
        </p>
      );
  }
}

export default function LegalDocument({
  document,
  description,
}: {
  document: LegalDocumentType;
  description?: string;
}) {
  return (
    <section className="py-12 lg:py-20">
      <Container>
        <div className="mx-auto max-w-6xl">
          <header className="max-w-3xl">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{document.title}</h1>
            {description && (
              <p className="mt-4 text-base leading-relaxed text-gray-500">{description}</p>
            )}
            <p className="mt-4 text-sm text-gray-400">
              {document.effectiveDate && <>Effective date: {document.effectiveDate}</>}
              {document.effectiveDate && document.lastUpdated && <br />}
              {document.lastUpdated && <>Last updated: {document.lastUpdated}</>}
            </p>
          </header>

          <div className="mt-10 lg:grid lg:grid-cols-[16rem_1fr] lg:gap-10">
            {/* Table of contents — collapsed on mobile, sticky on desktop */}
            <nav className="lg:sticky lg:top-24 lg:self-start">
              <details className="rounded-2xl border border-gray-200 bg-white p-4" open>
                <summary className="cursor-pointer list-none text-sm font-semibold text-gray-900 lg:pointer-events-none">
                  Contents
                </summary>
                <ol className="mt-3 max-h-[70vh] space-y-1.5 overflow-y-auto pr-1">
                  {document.sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="block text-xs leading-relaxed text-gray-500 transition-colors hover:text-violet-600"
                      >
                        {section.number}. {resolveLegalText(section.title)}
                      </a>
                    </li>
                  ))}
                </ol>
              </details>
            </nav>

            <article className="mt-8 min-w-0 lg:mt-0">
              {document.intro.length > 0 && (
                <div className="mb-8">
                  {document.intro.map((block, i) => (
                    <Block key={i} block={block} />
                  ))}
                </div>
              )}

              <div className="space-y-10">
                {document.sections.map((section) => (
                  <div key={section.id} id={section.id} className="scroll-mt-24">
                    <h2 className="text-lg font-semibold text-gray-900">
                      {section.number}. {resolveLegalText(section.title)}
                    </h2>
                    {section.blocks.map((block, i) => (
                      <Block key={i} block={block} />
                    ))}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
