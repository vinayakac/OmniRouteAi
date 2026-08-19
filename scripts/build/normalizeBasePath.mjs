export function normalizeBasePath(basePath) {
  if (!basePath || typeof basePath !== "string") return "";
  const trimmed = basePath.trim();
  if (!trimmed || trimmed === "/") return "";
  const prefixed = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  return prefixed.endsWith("/") ? prefixed.slice(0, -1) : prefixed;
}
