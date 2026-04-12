import type { Metadata } from "next";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Repline privacy policy \u2014 how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <Section>
      <div className="max-w-2xl mx-auto prose prose-neutral">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted mb-8">Last updated: April 11, 2026</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">1. Information we collect</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          When you create an account, we collect your name, email address, and organization details. When you use Repline, we store the player data, contacts, contracts, documents, and interactions you add to the platform. We also collect usage analytics (page views, feature usage) to improve the product.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">2. How we use your information</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          We use your information to provide and improve Repline, send transactional emails (password resets, notifications you&apos;ve opted into), and communicate product updates. We do not sell your data to third parties. We do not use your player data to train AI models.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">3. Data storage and security</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          Your data is stored on Supabase infrastructure with row-level security (RLS) ensuring each organization can only access their own data. Documents are stored in encrypted cloud storage. All data is transmitted over HTTPS.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">4. Third-party services</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          Repline integrates with third-party services including Stripe (payments), BoldSign (e-signatures), Twilio (SMS), QuickBooks (accounting sync), and Resend (email delivery). Each service processes data according to their own privacy policies. We only share the minimum data required for each integration to function.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">5. Data retention</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          We retain your data as long as your account is active. If you delete your account, we will delete your data within 30 days. Audit logs may be retained for up to 12 months for security purposes.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">6. Your rights</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          You can export your data, update your information, or delete your account at any time from your settings page. If you have questions about your data, contact us at{" "}
          <a href="mailto:privacy@repline.io" className="text-foreground underline underline-offset-4">
            privacy@repline.io
          </a>.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">7. Changes to this policy</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          We may update this privacy policy from time to time. We will notify you of significant changes by email or through a notice on the platform.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">8. Contact</h2>
        <p className="text-sm text-muted leading-relaxed">
          Questions? Email us at{" "}
          <a href="mailto:privacy@repline.io" className="text-foreground underline underline-offset-4">
            privacy@repline.io
          </a>.
        </p>
      </div>
    </Section>
  );
}
