# Skill Attribution

The SEO/GEO skills under `.claude/skills/` are vendored from two upstream
repositories, both MIT-licensed. Files are copied in directly (no git
submodule) so they're versioned alongside the rest of this repo.

## OpenClaudia Skills

- Source: https://github.com/OpenClaudia/openclaudia-skills
- License: MIT
- Commit vendored: `715b30394ba73c6e5497180d46ed1f19445484f9`
- Date vendored: 2026-09-09
- Skills copied (from `skills/<name>/` in the source repo):
  - `seo-audit`
  - `schema-markup`
  - `programmatic-seo`
  - `search-console`
  - `seo-content-brief`
  - `serp-analyzer`
  - `content-gap-analysis`
  - `geo-analysis`
  - `geo-difficulty`
  - `ai-citations-report`

## SEO/GEO Optimizer

- Source: https://github.com/199-biotechnologies/claude-skill-seo-geo-optimizer
- License: MIT
- Commit vendored: `d07fb889a25273d171b5633c4f11cac4ff09f8ff`
- Date vendored: 2026-09-09
- Vendored to: `.claude/skills/seo-geo-optimizer/`
- Removed from the vendored copy: `.git/`, `PLAN.md`, `PHASE2-PLAN.md`,
  `PHASE3-PLAN.md` (internal planning docs, not part of the skill itself)

## Re-pulling updates

To refresh either skill set, re-clone the source repo at a newer commit,
diff its `skills/<name>/` (or repo root, for seo-geo-optimizer) against the
corresponding directory here, and update the commit SHA and date above.
