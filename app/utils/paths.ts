/**
 * Helper function to get the correct asset path with basePath
 * Handles GitHub Pages deployment with basePath configuration
 */
export function getAssetPath(path: string): string {
  // Use the environment variable that's set in next.config.ts
  // This works on both client and server side
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  // Combine basePath with asset path
  return basePath ? `${basePath}${cleanPath}` : cleanPath;
}
