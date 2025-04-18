import { cac } from 'cac';
import colors from 'chalk';
import { consola } from 'consola';

import { defineLintCommand } from './lint';

try {
  const vsh = cac('vsh');

  // vsh lint
  defineLintCommand(vsh);

  // Invalid command
  vsh.on('command:*', () => {
    consola.error(colors.red('Invalid command!'));
    process.exit(1);
  });

  vsh.usage('vsh');
  vsh.help();
  vsh.parse();
} catch (error) {
  consola.error(error);
  process.exit(1);
}
