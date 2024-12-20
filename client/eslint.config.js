import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import stylistic from '@stylistic/eslint-plugin'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      react,
      stylistic
    },
    rules: {
      // "object-curly-spacing": ["error", "always"],
      // STYLISTIC
      "stylistic/semi": ['error', 'never'],
      "stylistic/array-bracket-spacing": ['error', 'never'],
      "stylistic/arrow-spacing": 'error',
      "stylistic/arrow-parens": ["error", "as-needed"],
      "stylistic/object-curly-spacing": ['error', 'always'],
      "stylistic/quotes": ['error', 'single'],
      "stylistic/brace-style": 'error',
      "stylistic/comma-dangle": ["error", "never"],
      "stylistic/comma-spacing": ['error', { 'before': false, 'after': true }],
      "stylistic/comma-style": ["error", "last"],
      "stylistic/computed-property-spacing": ['error', 'never'],
      "stylistic/curly-newline": ['error', 'always'],
      "stylistic/dot-location": ['error', 'property'],
      "stylistic/function-call-spacing": ['error', 'never'],
      "stylistic/function-paren-newline": ['error', { "minItems": 3 }],
      "stylistic/indent": ['error', 2],
      "stylistic/space-before-blocks": ["error", 'always'],
      // jsx
      "stylistic/jsx-closing-bracket-location": [1, { selfClosing: 'after-props' }],
      "stylistic/jsx-closing-tag-location": 1,
      "stylistic/jsx-closing-tag-location": [1, 'tag-aligned'],
      "stylistic/jsx-curly-spacing": ['error', 'always'],
      "stylistic/jsx-first-prop-new-line": ['error', 'multiline'],
      "stylistic/jsx-max-props-per-line": [1, { 'maximum': { single: 3, multi: 1 } }],
      "stylistic/jsx-quotes": ["error", "prefer-double"],
      "stylistic/jsx-self-closing-comp": ['error', {
        "component": true,
        "html": true
      }],
      "stylistic/jsx-sort-props": ['error', { "callbacksLast": true, "multiline": 'first' }],
      "stylistic/jsx-tag-spacing": ['error', { "beforeSelfClosing": "always" }],
      "stylistic/max-len": ["error", { "code": 80 }],
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
