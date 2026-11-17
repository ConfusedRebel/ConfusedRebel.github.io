import * as icons from 'simple-icons';
import { writeFileSync } from 'node:fs';
const names = {
  Java:'siOpenjdk', 'Spring Boot':'siSpringboot', Python:'siPython', JavaScript:'siJavascript', TypeScript:'siTypescript', React:'siReact', 'React Native':'siReact',
  MySQL:'siMysql', MongoDB:'siMongodb', Redis:'siRedis', NumPy:'siNumpy', Pandas:'siPandas', Git:'siGit', GitHub:'siGithub', Postman:'siPostman', Linux:'siLinux', Docker:'siDocker',
  Streamlit:'siStreamlit', SymPy:'siSympy', Plotly:'siPlotly', Pytest:'siPytest', SciPy:'siScipy', Supabase:'siSupabase', Textual:'siTextual',
};
const paths = Object.fromEntries(Object.entries(names).map(([name,key]) => { if (!icons[key]) throw new Error(`Missing ${key}`); return [name,icons[key].path]; }));
writeFileSync(new URL('../src/components/tech-icons.ts',import.meta.url), '// Selected Simple Icons paths (CC0). Regenerate with node scripts/build-tech-icons.mjs.\nexport const techIcons: Record<string,string> = '+JSON.stringify(paths,null,2)+';\n');
