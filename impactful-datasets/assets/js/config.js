/* Deployment settings. Safe to edit by hand after a build.
   Counts are deliberately NOT here: they are derived from the data file at
   load time, so they can never go stale against it. */
window.SITE_CONFIG = {
  dataUrl: "data/impactful_datasets.data.jsonld",
  featured: "agu-0004",   // dataset shown if someone lands on the detail page cold
};
