import type { Linter } from 'eslint';

import { interopDefault } from '../util';

export async function prettier(): Promise<Linter.Config[]> {
  const [prettierConfig] = await Promise.all([
    interopDefault(import('eslint-config-prettier')),
  ] as const);
  return [
    {
      ...prettierConfig,
    },
  ];
}
