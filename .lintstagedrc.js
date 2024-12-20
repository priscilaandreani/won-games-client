module.exports = {
  // Lint & Prettier TS and JS Files
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `npm run lint --fix . ${filenames.join(' --file')}`,
    `npm test:ci`
  ]
};
