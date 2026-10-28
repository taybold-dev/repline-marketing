"use client";

import { useState } from "react";
import {
  EMPTY_CAREER_ROW,
  EMPTY_PROFILE,
  EXAMPLE_PROFILE,
  type CareerRow,
  type ProfileData,
} from "./types";

const MAX_CAREER_ROWS = 8;
const TRIAL_URL = "https://app.repline.io/auth/sign-up?ref=profile-generator";

/**
 * The PDF uses the built-in Helvetica, which covers Western European
 * characters but not, for example, Polish "ł" or Cyrillic. Flag those
 * before download rather than letting them print as garbage.
 */
const EXTRA_SUPPORTED = new Set("–—‘’“”•…€ŠšŽžŒœŸ");
function unsupportedChars(data: ProfileData): string[] {
  const text = JSON.stringify(data);
  const bad = new Set<string>();
  for (const ch of text) {
    if (ch.codePointAt(0)! > 0xff && !EXTRA_SUPPORTED.has(ch)) bad.add(ch);
  }
  return [...bad];
}

function fileName(data: ProfileData): string {
  const base = `${data.firstName}-${data.lastName}`
    .normalize("NFKD")
    .replace(/[^\w-]+/g, "")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
  return `${base || "player"}-profile.pdf`;
}

const inputClass =
  "mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40";

function Field({
  label,
  value,
  onChange,
  type = "text",
  inputMode,
  placeholder,
  maxLength = 80,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  inputMode?: "url";
  placeholder?: string;
  maxLength?: number;
}) {
  return (
    <label className="block text-sm">
      <span className="font-medium">{label}</span>
      <input
        type={type}
        inputMode={inputMode}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={(e) => onChange(e.target.value)}
        className={inputClass}
      />
    </label>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <fieldset className="space-y-3">
      <legend className="text-xs font-semibold uppercase tracking-wide text-muted mb-2">{title}</legend>
      {children}
    </fieldset>
  );
}

export function PlayerProfileGenerator() {
  const [data, setData] = useState<ProfileData>(EMPTY_PROFILE);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = (key: keyof Omit<ProfileData, "career">) => (v: string) =>
    setData((d) => ({ ...d, [key]: v }));
  const setCareer = (i: number, key: keyof CareerRow, v: string) =>
    setData((d) => ({ ...d, career: d.career.map((r, j) => (j === i ? { ...r, [key]: v } : r)) }));

  const bad = unsupportedChars(data);
  const canDownload = (data.firstName.trim() || data.lastName.trim()) && !busy;

  async function download() {
    setBusy(true);
    setError(null);
    try {
      const [{ pdf }, { ProfilePdf }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("./profile-pdf"),
      ]);
      const blob = await pdf(<ProfilePdf data={data} />).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName(data);
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 10_000);
    } catch {
      setError("Something went wrong building the PDF. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="grid lg:grid-cols-[1fr_280px] gap-8">
      <form
        className="space-y-8 rounded-xl border border-border/60 p-5 md:p-8"
        onSubmit={(e) => {
          e.preventDefault();
          if (canDownload) download();
        }}
      >
        <div className="flex flex-wrap gap-3 text-sm">
          <button
            type="button"
            onClick={() => setData(EXAMPLE_PROFILE)}
            className="rounded-md border border-border px-3 py-1.5 hover:bg-muted-bg transition-colors"
          >
            Fill with example
          </button>
          <button
            type="button"
            onClick={() => setData(EMPTY_PROFILE)}
            className="rounded-md border border-border px-3 py-1.5 hover:bg-muted-bg transition-colors"
          >
            Clear
          </button>
        </div>

        <Group title="Player">
          <div className="grid sm:grid-cols-2 gap-3">
            <Field label="First name" value={data.firstName} onChange={set("firstName")} maxLength={40} />
            <Field label="Last name" value={data.lastName} onChange={set("lastName")} maxLength={40} />
            <Field label="Date of birth" type="date" value={data.dateOfBirth} onChange={set("dateOfBirth")} />
            <Field label="Position" value={data.position} onChange={set("position")} placeholder="Center, LD, G…" maxLength={30} />
            <Field label="Height" value={data.height} onChange={set("height")} placeholder={`6'1" (185 cm)`} maxLength={30} />
            <Field label="Weight" value={data.weight} onChange={set("weight")} placeholder="180 lbs (82 kg)" maxLength={30} />
            <Field label="Shot / catches" value={data.shot} onChange={set("shot")} placeholder="Left" maxLength={10} />
            <Field label="Citizenship" value={data.citizenship} onChange={set("citizenship")} maxLength={40} />
            <Field label="Current team" value={data.currentTeam} onChange={set("currentTeam")} maxLength={60} />
            <Field label="League / level" value={data.currentLevel} onChange={set("currentLevel")} placeholder="U18 AAA, USHL, OHL…" maxLength={60} />
          </div>
        </Group>

        <Group title="Scouting notes">
          <label className="block text-sm">
            <span className="font-medium">A short summary for coaches</span>
            <textarea
              value={data.scoutingNotes}
              maxLength={700}
              rows={4}
              onChange={(e) => set("scoutingNotes")(e.target.value)}
              className={inputClass}
            />
            <span className="mt-1 block text-xs text-muted">{data.scoutingNotes.length}/700</span>
          </label>
        </Group>

        <Group title="Links">
          <div className="grid sm:grid-cols-2 gap-3">
            <Field label="Elite Prospects URL" inputMode="url" value={data.eliteProspectsUrl} onChange={set("eliteProspectsUrl")} maxLength={200} />
            <Field label="Hudl URL" inputMode="url" value={data.hudlUrl} onChange={set("hudlUrl")} maxLength={200} />
          </div>
        </Group>

        <Group title="Career history">
          <div className="space-y-3">
            {data.career.map((row, i) => (
              <div key={i} className="grid grid-cols-2 sm:grid-cols-[90px_1fr_1fr_1fr_auto] gap-2 items-end">
                <Field label="Season" value={row.season} onChange={(v) => setCareer(i, "season", v)} placeholder="2025-26" maxLength={10} />
                <Field label="Team" value={row.team} onChange={(v) => setCareer(i, "team", v)} maxLength={60} />
                <Field label="Level" value={row.level} onChange={(v) => setCareer(i, "level", v)} maxLength={40} />
                <Field label="League" value={row.league} onChange={(v) => setCareer(i, "league", v)} maxLength={40} />
                <button
                  type="button"
                  aria-label={`Remove season ${i + 1}`}
                  onClick={() =>
                    setData((d) => ({
                      ...d,
                      career: d.career.length > 1 ? d.career.filter((_, j) => j !== i) : [{ ...EMPTY_CAREER_ROW }],
                    }))
                  }
                  className="h-[38px] rounded-md border border-border px-3 text-sm text-muted hover:bg-muted-bg transition-colors"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
          {data.career.length < MAX_CAREER_ROWS && (
            <button
              type="button"
              onClick={() => setData((d) => ({ ...d, career: [...d.career, { ...EMPTY_CAREER_ROW }] }))}
              className="text-sm font-medium underline underline-offset-4"
            >
              + Add a season
            </button>
          )}
        </Group>

        <Group title="Academic (optional)">
          <div className="grid sm:grid-cols-2 gap-3">
            <Field label="School" value={data.school} onChange={set("school")} maxLength={80} />
            <Field label="Graduation year" value={data.graduationYear} onChange={set("graduationYear")} maxLength={4} />
            <Field label="GPA" value={data.gpa} onChange={set("gpa")} maxLength={10} />
            <Field label="NCAA Clearinghouse ID" value={data.clearinghouseId} onChange={set("clearinghouseId")} maxLength={20} />
          </div>
        </Group>

        <Group title="Contact">
          <div className="grid sm:grid-cols-2 gap-3">
            <Field label="Name" value={data.contactName} onChange={set("contactName")} maxLength={60} />
            <Field label="Role" value={data.contactRole} onChange={set("contactRole")} placeholder="Advisor, parent…" maxLength={30} />
            <Field label="Phone" type="tel" value={data.contactPhone} onChange={set("contactPhone")} maxLength={30} />
            <Field label="Email" type="email" value={data.contactEmail} onChange={set("contactEmail")} maxLength={80} />
          </div>
        </Group>

        <div className="border-t border-border/60 pt-6">
          {bad.length > 0 && (
            <p className="mb-3 text-sm text-amber-700" role="status">
              The free PDF can&apos;t display {bad.slice(0, 5).join(" ")}. Those characters will print incorrectly.
            </p>
          )}
          {error && (
            <p className="mb-3 text-sm text-red-600" role="alert">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={!canDownload}
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {busy ? "Building PDF…" : "Download PDF"}
          </button>
          <p className="mt-2 text-xs text-muted">
            {canDownload || busy
              ? "Free. No sign-up. Your details stay in your browser and are never sent to us."
              : "Add the player's name to download. Your details stay in your browser and are never sent to us."}
          </p>
        </div>
      </form>

      <aside className="rounded-xl border border-border/60 bg-muted-bg p-5 h-fit lg:sticky lg:top-24">
        <h2 className="text-sm font-semibold">In Repline, the same profile adds</h2>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          {[
            "Headshot and action photo",
            "Video clips, as links coaches can open",
            "Your agency's logo, colours and contact footer",
            "Parents, contracts and key contacts",
            "Saved profiles you update each season",
          ].map((f) => (
            <li key={f} className="flex gap-2">
              <span aria-hidden>&#128274;</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <a
          href={TRIAL_URL}
          className="mt-5 inline-flex w-full items-center justify-center rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium hover:bg-background/70 transition-colors"
        >
          Start free 30-day trial
        </a>
        <p className="mt-2 text-xs text-muted">No credit card required.</p>
      </aside>
    </div>
  );
}
