// eslint.config.js
const { defineConfig } = require('eslint/config')

module.exports = defineConfig([
  {
    files: ['**/*.ts', '**/*.js'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
		},
		},
		"extends": ["plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"
		],
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
      // 🧼 Prettier integration
      'prettier/prettier': 'error',

      // 🧠 Semantic clarity
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'no-console': 'warn',

      // 🧩 Modularity
      'import/no-unresolved': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

      // 🎨 Accessibility & clarity
      'prefer-const': 'error',
      'eqeqeq': ['error', 'smart'],
      'curly': 'error',

      // 🧪 Empathy in collaboration
      'no-magic-numbers': ['warn', { ignore: [0, 1] }],
      '@typescript-eslint/no-empty-function': 'warn',
      'max-lines': ['warn', { max: 300, skipBlankLines: true, skipComments: true }],
    },
  },
])