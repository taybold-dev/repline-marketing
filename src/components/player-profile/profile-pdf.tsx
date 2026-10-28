/**
 * The free player profile PDF. A deliberately plainer version of the player
 * card Repline generates in the app: same header band, palette, Helvetica
 * and section styles, so the free PDF previews the real one. What it leaves
 * out (photos, video, agency branding) is what the trial adds.
 *
 * Imported only on demand from player-profile-generator.tsx, so
 * @react-pdf/renderer never ships in the page's initial bundle.
 */
import { Document, Page, View, Text, Link, StyleSheet } from "@react-pdf/renderer";
import type { ProfileData } from "./types";

const colors = {
  primary: "#111827",
  secondary: "#6B7280",
  muted: "#9CA3AF",
  border: "#E5E7EB",
  background: "#F9FAFB",
  white: "#FFFFFF",
  accent: "#2563EB",
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingHorizontal: 40,
    // Room for the fixed footer: react-pdf doesn't reserve space for it.
    paddingBottom: 90,
    fontSize: 10,
    fontFamily: "Helvetica",
    color: colors.primary,
  },
  header: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginTop: -40,
    marginHorizontal: -40,
    marginBottom: 18,
  },
  headerName: {
    fontSize: 28,
    fontFamily: "Helvetica-Bold",
    color: colors.white,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  headerSubtitle: {
    fontSize: 9,
    color: colors.muted,
    marginTop: 2,
    marginBottom: 10,
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  headerRow: { flexDirection: "row", marginTop: 2 },
  headerLabel: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: colors.muted,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    width: 60,
  },
  headerValue: { fontSize: 10, color: colors.white, flex: 1 },
  bioTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginTop: 12,
    marginBottom: 5,
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
  bioGrid: { flexDirection: "row", flexWrap: "wrap" },
  bioCol: { width: "50%", flexDirection: "row", marginBottom: 3, paddingRight: 8 },
  bioLabel: { fontSize: 9, fontFamily: "Helvetica-Bold", marginRight: 4 },
  bioValue: { fontSize: 9, color: colors.secondary, flex: 1 },
  sectionTitle: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    color: colors.secondary,
    marginTop: 14,
    marginBottom: 6,
    paddingBottom: 3,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.border,
  },
  blurb: { fontSize: 10, lineHeight: 1.5 },
  linkRow: { flexDirection: "row", marginBottom: 3 },
  linkLabel: { fontSize: 9, fontFamily: "Helvetica-Bold", width: 90 },
  linkValue: { fontSize: 9, color: colors.accent, flex: 1, textDecoration: "underline" },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: colors.background,
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.border,
  },
  tableHeaderCell: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: colors.secondary,
    textTransform: "uppercase",
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.border,
  },
  tableCell: { fontSize: 9 },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 8,
    borderTopWidth: 0.5,
    borderTopColor: colors.border,
  },
  footerStrong: { fontSize: 8, fontFamily: "Helvetica-Bold" },
  footerText: { fontSize: 8, color: colors.muted },
  footerLink: { fontSize: 8, color: colors.muted, textDecoration: "none" },
});

const careerWidths = { season: "15%", team: "35%", level: "25%", league: "25%" };

/** Only http(s) URLs become links; anything else is dropped rather than embedded. */
export function safeUrl(url: string): string | null {
  const trimmed = url.trim();
  if (!trimmed) return null;
  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    const parsed = new URL(withProtocol);
    return parsed.protocol === "https:" || parsed.protocol === "http:" ? parsed.toString() : null;
  } catch {
    return null;
  }
}

function formatDob(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  return m ? `${Number(m[2])}/${Number(m[3])}/${m[1]}` : iso;
}

function HeaderRow({ label, value }: { label: string; value: string }) {
  if (!value.trim()) return null;
  return (
    <View style={styles.headerRow}>
      <Text style={styles.headerLabel}>{label}</Text>
      <Text style={styles.headerValue}>{value}</Text>
    </View>
  );
}

function BioItem({ label, value }: { label: string; value: string }) {
  if (!value.trim()) return null;
  return (
    <View style={styles.bioCol}>
      <Text style={styles.bioLabel}>{label}:</Text>
      <Text style={styles.bioValue}>{value}</Text>
    </View>
  );
}

export function ProfilePdf({ data }: { data: ProfileData }) {
  const name = `${data.lastName} ${data.firstName}`.trim() || "Player Name";
  const links = [
    { label: "Elite Prospects", url: safeUrl(data.eliteProspectsUrl) },
    { label: "Hudl", url: safeUrl(data.hudlUrl) },
  ].filter((l): l is { label: string; url: string } => l.url !== null);
  const career = data.career.filter((r) => r.season || r.team || r.level || r.league);
  const hasAthletic = data.currentTeam || data.currentLevel || data.citizenship;
  const hasAcademic = data.school || data.graduationYear || data.gpa || data.clearinghouseId;
  const hasContact = data.contactName || data.contactPhone || data.contactEmail;
  const school =
    data.school && data.graduationYear ? `${data.school} (Class of ${data.graduationYear})` : data.school;

  return (
    <Document title={`${data.firstName} ${data.lastName} - Player Profile`.trim()} creator="Repline" producer="Repline">
      <Page size="LETTER" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.headerName}>{name}</Text>
          <Text style={styles.headerSubtitle}>Player Profile</Text>
          <HeaderRow label="DOB" value={formatDob(data.dateOfBirth)} />
          <HeaderRow label="Position" value={data.position} />
          <HeaderRow label="Height" value={data.height} />
          <HeaderRow label="Weight" value={data.weight} />
          <HeaderRow label="Shot" value={data.shot} />
        </View>

        {hasAthletic ? (
          <View wrap={false}>
            <Text style={styles.bioTitle}>Athletic</Text>
            <View style={styles.bioGrid}>
              <BioItem label="Team" value={data.currentTeam} />
              <BioItem label="League/Level" value={data.currentLevel} />
              <BioItem label="Citizenship" value={data.citizenship} />
            </View>
          </View>
        ) : null}

        {data.scoutingNotes.trim() ? (
          <View>
            <Text style={styles.sectionTitle}>Scouting Notes</Text>
            <Text style={styles.blurb}>{data.scoutingNotes.trim()}</Text>
          </View>
        ) : null}

        {links.length > 0 ? (
          <View>
            <Text style={styles.sectionTitle}>Scouting / DP Links</Text>
            {links.map((l) => (
              <View key={l.label} style={styles.linkRow}>
                <Text style={styles.linkLabel}>{l.label}</Text>
                <Link src={l.url} style={styles.linkValue}>
                  {l.url}
                </Link>
              </View>
            ))}
          </View>
        ) : null}

        {career.length > 0 ? (
          <View>
            <Text style={styles.sectionTitle}>Career History</Text>
            <View style={styles.tableHeader}>
              <Text style={[styles.tableHeaderCell, { width: careerWidths.season }]}>Year</Text>
              <Text style={[styles.tableHeaderCell, { width: careerWidths.team }]}>Team</Text>
              <Text style={[styles.tableHeaderCell, { width: careerWidths.level }]}>Level</Text>
              <Text style={[styles.tableHeaderCell, { width: careerWidths.league }]}>League</Text>
            </View>
            {career.map((r, i) => (
              <View key={i} style={styles.tableRow} wrap={false}>
                <Text style={[styles.tableCell, { width: careerWidths.season }]}>{r.season || "—"}</Text>
                <Text style={[styles.tableCell, { width: careerWidths.team }]}>{r.team || "—"}</Text>
                <Text style={[styles.tableCell, { width: careerWidths.level }]}>{r.level || "—"}</Text>
                <Text style={[styles.tableCell, { width: careerWidths.league }]}>{r.league || "—"}</Text>
              </View>
            ))}
          </View>
        ) : null}

        {hasAcademic ? (
          <View wrap={false}>
            <Text style={styles.bioTitle}>Academic</Text>
            <View style={styles.bioGrid}>
              <BioItem label="Secondary School" value={school} />
              <BioItem label="GPA" value={data.gpa} />
              <BioItem label="Clearinghouse ID" value={data.clearinghouseId} />
            </View>
          </View>
        ) : null}

        {hasContact ? (
          <View wrap={false}>
            <Text style={styles.bioTitle}>Contact</Text>
            <View style={styles.bioGrid}>
              <BioItem label="Name" value={data.contactRole ? `${data.contactName} (${data.contactRole})` : data.contactName} />
              <BioItem label="Phone" value={data.contactPhone} />
              <BioItem label="Email" value={data.contactEmail} />
            </View>
          </View>
        ) : null}

        <View style={styles.footer} fixed>
          <View>
            <Text style={styles.footerStrong}>Made with Repline</Text>
            <Text style={styles.footerText}>The CRM for hockey agents and advisors</Text>
          </View>
          <Link src="https://www.repline.io/templates/hockey-player-profile" style={styles.footerLink}>
            repline.io/templates
          </Link>
        </View>
      </Page>
    </Document>
  );
}
