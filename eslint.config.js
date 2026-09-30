import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import react from 'eslint-plugin-react'
export default [
  { ignores: ['dist'] },
  { ...js.configs.recommended, files: ['**/*.{js,jsx}'] },
  { ...react.configs.flat.recommended, files: ['**/*.{js,jsx}'], settings: { react: { version: 'detect' } } },
  { ...reactHooks.configs['recommended-latest'], files: ['**/*.{js,jsx}'] },
  { ...reactRefresh.configs.vite, files: ['**/*.{js,jsx}'] },
  { files: ['**/*.{js,jsx}'], rules: { 'react/react-in-jsx-scope': 'off', 'react/prop-types': 'off' }, languageOptions: { ecmaVersion: 2020, globals: globals.browser, parserOptions: { ecmaVersion: 'latest', ecmaFeatures: { jsx: true }, sourceType: 'module' } } },
  { files: ['src/context/FavoritesContext.jsx'], rules: { 'react-refresh/only-export-components': 'off' } }
]
