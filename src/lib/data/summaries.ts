// Per-application summary variants.
//
// Select a variant at build/dev time with the VITE_CV_VARIANT env flag, e.g.
//   VITE_CV_VARIANT=alipes npm run build
// Unset (or an unknown value) falls back to `default`.
//
// Keep this minimal: a keyed object of full summary strings, no templating.
// Add a new key here to spin up a variant for another application.

export type SummaryVariant = 'default' | 'alipes';

// Base text. Spaced em dashes (` — `), single spaces throughout.
const DEFAULT_SUMMARY =
	'Machine Learning Engineer working the production side of the stack — dataset ' +
	'generation, training, deployment, monitoring. Currently building LLM pipelines at ' +
	'Numerator that turn large volumes of unstructured images and text into structured ' +
	'data products at scale, on AWS with Python, Kubernetes, Terraform, and Snowflake. ' +
	'Background in Computer Vision, Deep Learning, and LLMs — and the MLOps that gets ' +
	'them into production.';

export const summaries: Record<SummaryVariant, string> = {
	default: DEFAULT_SUMMARY,
	// Alipes application: domain-neutral phrasing. Identical to the base for now —
	// diverge here if a domain-specific default is ever introduced.
	alipes: DEFAULT_SUMMARY
};

const selected = (import.meta.env.VITE_CV_VARIANT ?? 'default') as SummaryVariant;

export const summary: string = summaries[selected] ?? summaries.default;
