import type { Metadata } from "next";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Repline handles information about agency users, players, parents and contacts — what we collect, who we share it with, and your choices.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

const h2 = "text-xl font-semibold mt-10 mb-3";
const h3 = "text-base font-semibold mt-6 mb-2";
const p = "text-sm text-muted leading-relaxed mb-4";
const ul = "text-sm text-muted leading-relaxed mb-4 space-y-2 list-disc pl-5";

const coreProviders = [
  ["Supabase", "Database, file storage and sign-in", "All Repline data"],
  ["Vercel", "Application hosting", "Requests to the app"],
  [
    "Sentry",
    "Error monitoring",
    "Technical error details, which may include data on the screen when an error occurs",
  ],
  ["Resend", "Email delivery", "Recipient names and addresses, email content, delivery and engagement"],
  ["Twilio", "Text messages", "Phone numbers and message content"],
  ["BoldSign", "Electronic signatures", "Agreements and signers’ names and email addresses"],
  ["Stripe", "Payments", "Payer email and invoice details; card details are entered with Stripe"],
];

const optionalProviders = [
  [
    "QuickBooks (Intuit)",
    "Accounting",
    "Customer names, emails and phone numbers, invoices and payments",
  ],
  ["Wave", "Accounting", "Customer names and emails, invoices and payments"],
  ["Monday.com", "One-time import into Repline", "Data the agency chooses to import"],
];

function ProviderTable({ rows }: { rows: string[][] }) {
  return (
    <div className="overflow-x-auto mb-5">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-border/60">
            <th className="text-left py-2 pr-4 font-semibold align-bottom">Provider</th>
            <th className="text-left py-2 pr-4 font-semibold align-bottom">Purpose</th>
            <th className="text-left py-2 font-semibold align-bottom">Information involved</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([provider, purpose, info]) => (
            <tr key={provider} className="border-b border-border/60 last:border-0">
              <td className="py-2 pr-4 align-top font-medium">{provider}</td>
              <td className="py-2 pr-4 align-top text-muted">{purpose}</td>
              <td className="py-2 align-top text-muted">{info}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <Section>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Repline Privacy Policy</h1>
        <p className="text-sm text-muted mb-8">Last updated: October 29, 2026</p>

        <p className={p}>
          Repline is operated by Repline LLC (&ldquo;Repline&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;). This policy explains what information Repline handles, how we use and
          protect it, and the choices you have.
        </p>

        <h2 className={h2}>1. Who this policy covers</h2>
        <p className={p}>
          Repline is used by hockey advisory agencies (&ldquo;agencies&rdquo;) to manage their work
          with players and families.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Agency users:</strong>{" "}people who sign in to
            Repline. We are responsible for the information we collect about you to run your
            account.
          </li>
          <li>
            <strong className="text-foreground">
              Players, parents, guardians and other contacts:
            </strong>{" "}
            agencies add information about you to Repline, and you may submit information directly
            through forms, signing requests or payment pages an agency sends you. The agency decides
            what information to collect and how to use it. Repline stores and processes it on the
            agency&apos;s behalf and under its instructions. Questions about your information should
            go to the agency first. We&apos;ll help them respond.
          </li>
        </ul>

        <h2 className={h2}>2. Information we collect</h2>

        <h3 className={h3}>From agency users</h3>
        <ul className={ul}>
          <li>
            Account details: email address and password (passwords are handled by our
            authentication provider and never stored in plain text), name, and organization details
            you add.
          </li>
          <li>
            Billing details for your Repline subscription. Card details are entered with Stripe and
            are never stored by Repline.
          </li>
        </ul>

        <h3 className={h3}>
          Information agencies add or collect through Repline (&ldquo;customer data&rdquo;)
        </h3>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Player profiles:</strong>{" "}name, date of birth,
            citizenship, height and weight, team, league and position, school and academic
            information (such as GPA, graduation year and test scores), contact details and home
            address, social media handles, game and career history, and notes.
          </li>
          <li>
            <strong className="text-foreground">Documents and media:</strong>{" "}contracts and signed
            agreements, transcripts, medical and other documents, photos and videos.
          </li>
          <li>
            <strong className="text-foreground">Contacts:</strong>{" "}parents, guardians, billing
            contacts and others, with names, phone numbers, email addresses, relationships, and
            country and province (used to work out sales tax on invoices).
          </li>
          <li>
            <strong className="text-foreground">Communications:</strong>{" "}emails and text messages
            sent through Repline, replies received by text, and whether emails were delivered,
            opened or clicked.
          </li>
          <li>
            <strong className="text-foreground">Billing records:</strong>{" "}invoices, payment plans
            and payment status. Card payments are processed by Stripe; Repline never sees or stores
            card numbers.
          </li>
          <li>
            <strong className="text-foreground">Form and signing information:</strong>{" "}answers and
            files submitted through intake forms an agency sends, and signature activity on
            agreements.
          </li>
        </ul>

        <h3 className={h3}>Collected automatically</h3>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Cookies:</strong>{" "}we use only the cookies needed to
            keep you signed in. We don&apos;t use advertising or tracking cookies, and we don&apos;t
            use third-party analytics.
          </li>
          <li>
            <strong className="text-foreground">Error diagnostics:</strong>{" "}when something goes
            wrong, technical details about the error are sent to our error-monitoring provider so we
            can fix it.
          </li>
          <li>
            <strong className="text-foreground">Email engagement:</strong>{" "}when emails are sent
            through Repline, our email provider reports delivery, opens and link clicks.
          </li>
        </ul>

        <h2 className={h2}>3. Information about minors</h2>
        <p className={p}>
          Many players whose information is stored in Repline are under 18. Agencies are responsible
          for having the authority and any consents needed, including from a parent or guardian,
          before adding a minor&apos;s information or contacting them through Repline. Repline is not
          directed at children, and children do not create Repline accounts.
        </p>

        <h2 className={h2}>4. How we use information</h2>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">To provide Repline:</strong>{" "}storing records,
            generating documents, sending agreements for signature, sending invoices and messages the
            agency requests, and syncing with tools the agency connects.
          </li>
          <li>
            <strong className="text-foreground">To send service emails:</strong>{" "}account and
            security emails, invitations, notifications and digests you&apos;ve turned on, and
            onboarding messages about your account.
          </li>
          <li>To keep Repline secure, investigate problems and fix errors.</li>
          <li>To meet legal obligations.</li>
        </ul>
        <p className={p}>
          We do not sell personal information. We do not use customer data for advertising. We do not
          use customer data to train AI models, and Repline does not currently send customer data to
          any AI service.
        </p>

        <h2 className={h2}>5. Service providers we share information with</h2>
        <p className={p}>
          We share information only with the providers needed to run Repline, and only what each one
          needs:
        </p>
        <ProviderTable rows={coreProviders} />

        <p className={p}>
          <strong className="text-foreground">Only if an agency connects them:</strong>
        </p>
        <ProviderTable rows={optionalProviders} />

        <p className={p}>Other providers:</p>
        <ul className={ul}>
          <li>
            Browser push notifications are delivered through the push service of your browser or
            device.
          </li>
          <li>Videos linked from YouTube or Vimeo are loaded from those sites when viewed.</li>
          <li>
            Public game schedules are retrieved from league data providers. No personal information
            is sent to them.
          </li>
        </ul>
        <p className={p}>
          Each provider handles information under its own privacy and security terms. We may also
          disclose information where required by law, or as part of a merger or sale of our business,
          in which case this policy would continue to apply.
        </p>

        <h2 className={h2}>6. Where information is stored</h2>
        <p className={p}>
          Repline&apos;s data is stored with Supabase, in the region that matches your agency. Data
          for agencies in Canada is stored in Canada (Central). Data for agencies in the United
          States is stored in US West.
        </p>
        <p className={p}>
          Regardless of which region holds your agency&apos;s records, some providers &mdash;
          including Sentry, Stripe, Resend and Twilio &mdash; process information in the United
          States. Information may therefore be stored or processed outside your province, state or
          country, where local laws may allow authorities to access it.
        </p>

        <h2 className={h2}>7. How we protect information</h2>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Encryption:</strong>{" "}all connections use HTTPS.
            Stored data is encrypted at rest by our hosting provider.
          </li>
          <li>
            <strong className="text-foreground">Separation between agencies:</strong>{" "}each
            agency&apos;s data is separated at the database level, so one agency cannot access
            another&apos;s.
          </li>
          <li>
            <strong className="text-foreground">Access within an agency:</strong>{" "}roles control who
            can view or change information (owner, representative, read-only). Agencies can restrict
            each player&apos;s profile to the representatives assigned to them.
          </li>
          <li>
            <strong className="text-foreground">Files:</strong>{" "}documents, contracts and videos are
            stored privately and opened through links that expire after an hour. Video share links
            can be revoked at any time and expire after 90 days. Profile photos and logos are stored
            at hard-to-guess web addresses, so they can appear in player profiles and PDFs.
          </li>
          <li>
            <strong className="text-foreground">Connected tools:</strong>{" "}keys for connected
            accounting tools are encrypted.
          </li>
          <li>
            <strong className="text-foreground">Logging:</strong>{" "}security-relevant actions are
            recorded in an audit log that agency users cannot alter.
          </li>
        </ul>
        <p className={p}>
          No system is perfectly secure. If a breach affects your personal information and creates a
          real risk of significant harm, we will notify affected agencies, and individuals and
          regulators as required by law.
        </p>

        <h2 className={h2}>8. How long we keep information</h2>
        <ul className={ul}>
          <li>We keep customer data for as long as the agency&apos;s account is active.</li>
          <li>
            When an agency deletes its account, its data is permanently deleted from our systems
            right away. Copies in our hosting provider&apos;s backups are removed within 7 days.
          </li>
          <li>Audit logs are kept for 12 months for security purposes, then deleted.</li>
          <li>
            Agencies can delete individual players, contacts, documents and videos at any time.
          </li>
        </ul>

        <h2 className={h2}>9. Your choices and rights</h2>
        <p className={p}>Agency users can:</p>
        <ul className={ul}>
          <li>update their information in Settings;</li>
          <li>
            export their organization&apos;s data (players, contacts, contracts and documents) from
            Settings &rarr; Account;
          </li>
          <li>delete their account from the same page;</li>
          <li>turn notification digests off in Settings;</li>
          <li>unsubscribe from product emails using the link in each email.</li>
        </ul>
        <p className={p}>Families and contacts can:</p>
        <ul className={ul}>
          <li>unsubscribe from an agency&apos;s emails using the link in each email;</li>
          <li>stop text messages by replying STOP.</li>
        </ul>
        <p className={p}>
          Depending on where you live, including under Canada&apos;s PIPEDA and Qu&eacute;bec&apos;s
          Law 25, you may have the right to access or correct your personal information, withdraw
          consent, or ask that it be deleted. If an agency stores your information, contact the
          agency. You can also contact us, and we&apos;ll help or forward your request.
        </p>

        <h2 className={h2}>10. Changes to this policy</h2>
        <p className={p}>
          We&apos;ll post any changes here and update the date above. For significant changes,
          we&apos;ll notify agency users by email or in Repline.
        </p>

        <h2 className={h2}>11. Contact</h2>
        <p className={p}>
          Our privacy officer is Taylor Bold, reachable at{" "}
          <a
            href="mailto:privacy@repline.io"
            className="text-foreground underline underline-offset-4"
          >
            privacy@repline.io
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
