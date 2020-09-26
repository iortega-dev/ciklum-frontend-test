module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  plugins: ['@typescript-eslint', 'react-hooks', 'prettier'],
  parserOptions: {
    project: './tsconfig.json', // Required to have rules that rely on Types.
    tsconfigRootDir: './',
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    jsx: true,
    useJSXTextNode: true,
  },
  env: {
    browser: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<roo/>@types` directory even it doesn't contain any source code, like `@types/unist`
        directory: './tsconfig.json',
      },
      node: {
        extensions: ['.js', '.ts', '.tsx', '.jsx', '.d.ts'],
      },
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'spaced-comment': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    "@typescript-eslint/explicit-module-boundary-types": 'off',
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    "@typescript-eslint/no-explicit-any": 'off',
    '@typescript-eslint/no-redeclare': 'off',
    '@typescript-eslint/no-shadow': 'off',
    "@typescript-eslint/no-unsafe-assignment": 'off',
    "@typescript-eslint/no-unsafe-call": 'off',
    "@typescript-eslint/no-use-before-define": 'off',
    "@typescript-eslint/no-unescaped-entities": 'off',
    'import/no-extraneous-dependencies': [
      "error",
      {
        "devDependencies": true,
      }
    ],
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'off',
      'ignorePackages',
      {
        'js': 'never',
        'ts': 'never',
        'tsx': 'never'
      }
    ]
  },
}
