import type { Linter } from 'eslint';

import {
  ignores,
  importPluginConfig,
  javascript,
  jsdoc,
  jsonc,
  node,
  perfectionist,
  prettier,
  react,
  typescript,
} from './config';

type FlatConfig = Linter.Config;

type FlatConfigPromise = FlatConfig | FlatConfig[] | Promise<FlatConfig> | Promise<FlatConfig[]>;

async function defineConfig(customConfig: FlatConfig[] = []) {
  const configs: FlatConfigPromise[] = [
    javascript(),
    prettier(),
    typescript(),
    importPluginConfig(),
    react(),
    jsdoc(),
    jsonc(),
    ignores(),
    node(),
    perfectionist(),
    ...customConfig,
  ];

  const resolved = await Promise.all(configs);

  return resolved.flat();
}

export { defineConfig };
