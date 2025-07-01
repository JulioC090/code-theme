import theme from '@/theme-template';
import fs from 'node:fs';
import path from 'node:path';

const fileName = 'code theme-color-theme.json';

fs.writeFileSync(
  path.resolve(__dirname, '..', 'themes', fileName),
  JSON.stringify(theme, null, 2),
);
