module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'airbnb',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json', '.tsx', '.ts'],
      },
    },
    'import/extensions': ['.js', '.mjs', '.jsx', '.tsx', '.ts'],
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.tsx', '.ts'] }], // 在文件写jsx代码
    'import/extensions': [ // import 导入规则
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        tsx: 'never',
        ts: 'never',
      },
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error"
    ],
    'no-plusplus': 0,
    'react/prop-types': 0,
    'func-names': 0,
  },
};
