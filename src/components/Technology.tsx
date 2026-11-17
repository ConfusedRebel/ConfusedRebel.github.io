import { Box, Braces, Database, HardDrive, Layers, Network, PanelsTopLeft, Server } from 'lucide-react';
import { techIcons } from './tech-icons';
const fallbackIcons = {
  SQL: Database,
  Windows: PanelsTopLeft,
  'REST APIs': Network,
  BSD: Server,
  'BSD Jails': Box,
  Virtualization: Layers,
  Virtualización: Layers,
  NAS: HardDrive,
} as const;
export function Technology({ name }: { name: string }) {
  const path = techIcons[name];
  const Symbol = fallbackIcons[name as keyof typeof fallbackIcons] ?? Braces;
  return <span className="technology"><span className="technology-symbol">{path ? <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d={path}/></svg> : <Symbol size={16} strokeWidth={1.7} aria-hidden="true"/>}</span><span>{name}</span></span>;
}
