import * as fs from 'fs';
import { compileFromFile } from 'json-schema-to-typescript';
import path from 'node:path';

const schemasPath = path.resolve(__dirname, '..', 'schemas');
const entry = path.resolve(schemasPath, 'color-theme.json');
const typePath = path.resolve(__dirname, '..', 'src', 'types.d.ts');

compileFromFile(entry, { cwd: schemasPath }).then((ts) =>
  fs.writeFileSync(typePath, ts),
);
