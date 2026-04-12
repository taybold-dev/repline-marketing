import type { Metadata } from "next";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Repline terms of service \u2014 the agreement between you and Repline.",
};

export default function TermsPage() {
  return (
    <Section>
      <div className="max-w-2xl mx-auto prose prose-neutral">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Terms of Service</h1>
        <p className="text-sm text-muted mb-8">Last updated: April 11, 2026</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">1. Acceptance of terms</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          By accessing or using Repline (&ldquo;the Service&rdquo;), you agree to be bound by these Terms of Service. If you are using the Service on behalf of an organization, you represent that you have the authority to bind that organization.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">2. Description of service</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          Repline is a cloud-based platform for managing player representation activities including player profiles, contacts, contracts, documents, tasks, and communications. The Service is provided on a subscription basis with multiple plan tiers.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">3. Accounts</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must provide accurate and complete information when creating an account.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">4. Acceptable use</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          You agree to use the Service only for lawful purposes related to player representation and agency management. You may not use the Service to store or transmit malicious code, violate any applicable laws, or infringe on the rights of others.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">5. Data ownership</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          You retain full ownership of all data you enter into the Service. Repline does not claim any intellectual property rights over your content. We process your data solely to provide and improve the Service.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">6. Payment and billing</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          Paid plans are billed monthly or annually in advance. Prices are subject to change with 30 days&apos; notice. You may cancel your subscription at any time; cancellations take effect at the end of the current billing period. No refunds are provided for partial billing periods.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">7. Service availability</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          We strive to maintain high availability but do not guarantee uninterrupted access. We may perform scheduled maintenance with reasonable advance notice. We are not liable for downtime caused by factors outside our control.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">8. Limitation of liability</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          To the maximum extent permitted by law, Repline shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">9. Termination</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          Either party may terminate this agreement at any time. Upon termination, your right to access the Service ceases. We will retain your data for 30 days following termination, after which it will be permanently deleted.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">10. Changes to terms</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          We may modify these terms at any time. Material changes will be communicated via email or in-app notification at least 30 days before they take effect. Continued use of the Service after changes constitutes acceptance of the new terms.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">11. Contact</h2>
        <p className="text-sm text-muted leading-relaxed">
          Questions about these terms? Email us at{" "}
          <a href="mailto:legal@repline.io" className="text-foreground underline underline-offset-4">
            legal@repline.io
          </a>.
        </p>
      </div>
    </Section>
  );
}
