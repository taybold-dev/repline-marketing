# SEO Reports

This directory holds the output of recurring SEO/GEO audits run against
repline.io using the skills in [`.claude/skills/`](../../.claude/skills/).

## Convention

Each audit run lands here as its own file, named:

```
YYYY-MM-DD-<scope>.md
```

- `YYYY-MM-DD` — the date the audit was run (report date, not the date of any
  specific finding).
- `<scope>` — what was audited, e.g. `full-site`, `blog`, `pricing`,
  `technical`, `geo`. Use `full-site` for a general recurring audit.

Example: `2026-09-09-full-site.md`.

Reports are append-only history — don't edit or delete old ones. If a past
finding turns out to be wrong, note the correction in the newer report rather
than rewriting history.

## Baseline

[`../baseline.md`](../baseline.md) captures the site's state at the time
SEO tooling was first added, so later reports have something concrete to
diff against (has the title changed? did canonical setup regress? did the
blog post count grow?). It is not itself a report and isn't meant to be
regenerated — treat it as a fixed reference point.

## Running an audit

Invoke the `seo-audit` skill (or a more targeted one, e.g. `schema-markup`,
`geo-analysis`) against `https://www.repline.io`, then save the output here
following the naming convention above.
