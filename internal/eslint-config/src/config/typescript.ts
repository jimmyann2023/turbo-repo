import type { Linter } from 'eslint';

import { interopDefault } from '../util';

export async function typescript(): Promise<Linter.Config[]> {
  const [pluginTs, tsParser] = await Promise.all([
    interopDefault(import('@typescript-eslint/eslint-plugin')),
    // @ts-expect-error missing types
    interopDefault(import('@typescript-eslint/parser')),
  ] as const);

  return [
    {
      files: ['**/*.?([cm])[jt]s?(x)'],
      languageOptions: {
        parser: tsParser,
        parserOptions: {
          sourceType: 'module',
          ecmaVersion: 'latest',
          project: './tsconfig.*.json',
        },
      },
      plugins: {
        '@typescript-eslint': pluginTs,
      },
      rules: {
        ...pluginTs.configs.recommended.rules,
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-namespace': 'off',
      },
    },
  ];
}
