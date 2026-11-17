export type Theme = 'light' | 'dark';
export function resolveTheme(saved: string | null, prefersDark: boolean): Theme {
  return saved === 'light' || saved === 'dark' ? saved : prefersDark ? 'dark' : 'light';
}
export function externalLinks(links: { code?: string; demo?: string }) {
  return [{ label: 'View Code', href: links.code }, { label: 'Live Demo', href: links.demo }]
    .filter((link): link is { label: string; href: string } => Boolean(link.href && /^https:\/\/[^\s/]+/.test(link.href)));
}
