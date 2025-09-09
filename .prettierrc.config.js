/** 
 * Pixels Past Prettier Config
 * Combines Prettier defaults with lore-driven coding principles:
 * - Semantic clarity
 * - Modularity
 * - Accessibility
 * - Empathy in collaboration
 */

module.exports = {
  // 📏 Line length: default is 80, but we allow up to 100 for readability
  printWidth: 100,

  // 🔠 Indentation: default is 2 spaces, no tabs.
  tabWidth: 4,
  useTabs: true,

  // 🧹 Semicolons: default is true, we keep them for clarity
  semi: true,

  // 📝 Quotes: default is double, we prefer single for consistency with HTML/CSS
  singleQuote: true,

  // 🧭 Object formatting: default is true, we keep spacing for readability
  bracketSpacing: true,

  // ➡️ Arrow functions: default is "always", we prefer "avoid" for cleaner syntax
  arrowParens: 'avoid',

  // 📚 Trailing commas: default is "es5", we use "all" for easier diffs
  trailingComma: 'all',

  // 🧠 HTML sensitivity: default is "css", we keep it to respect layout rules
  htmlWhitespaceSensitivity: 'css',

  // 📦 JSX: not used heavily, but we keep defaults for future-proofing
  jsxSingleQuote: true,
  jsxBracketSameLine: false,

  // 🧾 Markdown & prose: wrap for accessibility and readability
  proseWrap: 'always',

  // 🧪 Pragmas: not used, but documented for clarity
  insertPragma: false,
  requirePragma: false,

  // 🧠 Quote props: default is "as-needed", aligns with semantic clarity
  quoteProps: 'as-needed',
}