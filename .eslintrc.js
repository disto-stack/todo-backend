/**
 * Se utiliza un eslint como linter y prettier como formateador de código,
 * esto con el fin de detectar posibles bugs y mantener una consistencia en
 * el código
 */

module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
};
