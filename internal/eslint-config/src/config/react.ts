import { Linter } from 'eslint';
import { interopDefault } from '../util';
import globals from 'globals';

export async function react(): Promise<Linter.Config[]> {
  const [pluginReact, pluginReactHooks] = await Promise.all([
    interopDefault(import('eslint-plugin-react')),
    interopDefault(import('eslint-plugin-react-hooks')),
  ]);

  const useFiles = '**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}';
  return [
    {
      files: [useFiles],
      ...pluginReact.configs.flat.recommended,
      languageOptions: {
        ...pluginReact.configs.flat.recommended?.languageOptions,
        globals: {
          ...globals.serviceworker,
          ...globals.browser,
        },
      },
    },

    {
      files: [useFiles],
      plugins: {
        'react-hooks': pluginReactHooks,
      },
      settings: { react: { version: 'detect' } },
      rules: {
        ...pluginReactHooks.configs.recommended.rules,
        // React scope no longer necessary with new JSX transform.
        'react/react-in-jsx-scope': 'off',
      },
    },
  ];
}
