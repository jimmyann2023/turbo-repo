// @ts-check

import { defineConfig } from '@repo/eslint-config';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 */

// 自定eslint的配置 传入已定义好的defineConfig
const customConfig = [
  {
    files: ['apps/**/**'],
    ignores: ['**/vite.config.mts', '**/tailwind.config.mjs', '**/postcss.config.mjs'],
    rules: {
      'no-console': 'off',
    },
  },
];

export default defineConfig(customConfig);
