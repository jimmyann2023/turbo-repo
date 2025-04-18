import type { Linter } from 'eslint';

import { javascript, prettier, react, typescript, importPluginConfig } from './config';

type FlatConfig = Linter.Config;

type FlatConfigPromise = FlatConfig | FlatConfig[] | Promise<FlatConfig> | Promise<FlatConfig[]>;

async function defineConfig(customConfig: FlatConfig[] = []) {
  const configs: FlatConfigPromise[] = [
    javascript(),
    prettier(),
    typescript(),
    importPluginConfig(),
    react(),
    ...customConfig,
  ];

  const resolved = await Promise.all(configs);

  return resolved.flat();
}

export { defineConfig };
