import { termsDocument } from "./terms";
import { deliveryDocument } from "./delivery-policy";
import { refundDocument } from "./refund-policy";
import { acceptableUseDocument } from "./acceptable-use";
import { privacyDocument } from "./privacy";
import { cookiesDocument } from "./cookie-policy";
import { complaintsDocument } from "./complaints";
import type { LegalDocument } from "./types";

export type LegalEntry = {
  document: LegalDocument;
  /** Short label used in navigation and footers. */
  label: string;
  /** Lead paragraph shown under the page heading and used as meta description. */
  description: string;
};

export const legalDocuments: LegalEntry[] = [
  {
    document: termsDocument,
    label: "Terms & Conditions",
    description:
      "The terms that govern your use of the website, your orders and the services we provide.",
  },
  {
    document: deliveryDocument,
    label: "Delivery & Refill Policy",
    description:
      "How orders are processed and delivered, how delivery is measured, and when a refill applies.",
  },
  {
    document: refundDocument,
    label: "Refund & Cancellation Policy",
    description:
      "When an order can be cancelled, when a refund is available and how refunds are calculated and paid.",
  },
  {
    document: acceptableUseDocument,
    label: "Acceptable Use Policy",
    description:
      "What you may and may not use the services for, and how we handle social platform compliance.",
  },
  {
    document: privacyDocument,
    label: "Privacy Policy",
    description:
      "What personal data we collect, why we use it, how long we keep it and the rights you have over it.",
  },
  {
    document: cookiesDocument,
    label: "Cookie Policy",
    description:
      "The cookies and similar technologies used on the website, and how you can control them.",
  },
  {
    document: complaintsDocument,
    label: "Complaints Policy",
    description:
      "How to raise a complaint, how we investigate it and what to do if you are not satisfied.",
  },
];

export function getLegalEntry(route: string): LegalEntry {
  const entry = legalDocuments.find((item) => item.document.route === route);
  if (!entry) throw new Error(`Unknown legal document route: ${route}`);
  return entry;
}

export {
  termsDocument,
  deliveryDocument,
  refundDocument,
  acceptableUseDocument,
  privacyDocument,
  cookiesDocument,
  complaintsDocument,
};
