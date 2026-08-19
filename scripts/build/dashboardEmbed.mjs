export function resolveDashboardEmbedMode(env = process.env) {
  const mode = env && env.DASHBOARD_ALLOW_EMBED;
  if (mode === "vscode") return "vscode";
  return null;
}

export function nonPageRoutePrefixes(rewrites = []) {
  if (!Array.isArray(rewrites)) return [];
  return rewrites
    .map((r) => r.source)
    .filter((s) => typeof s === "string" && s.startsWith("/api/"));
}

export function buildSecurityHeaderRules({ mode, securityHeaders, prefixes = [] }) {
  if (!mode) {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  }

  const embedHeaders = securityHeaders
    .map((h) => {
      if (h.key === "Content-Security-Policy") {
        return {
          key: "Content-Security-Policy",
          value: h.value.replace("frame-ancestors 'none'", "frame-ancestors 'self' vscode-webview:"),
        };
      }
      return h;
    })
    .filter((h) => h.key !== "X-Frame-Options");

  return [
    {
      source: "/:path*",
      headers: embedHeaders,
    },
  ];
}
