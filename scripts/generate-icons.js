const fs = require('fs');
const path = require('path');
const h2x = require('./transform/h2x');

const ejs = require('ejs');
const prettier = require('prettier');

const ICON_DIR = path.resolve(__dirname, '..', 'icons');
const TEMPLATE_PATH = path.resolve(__dirname, 'templates', 'icon.template.tsx');
const INDEX_TEMPLATE_PATH = path.resolve(
  __dirname,
  'templates',
  'icon-index.template.ts',
);
const STORY_TEMPLATE_PATH = path.resolve(
  __dirname,
  'templates',
  'icon-story.template.tsx',
);
const OUT_DIR = path.resolve(__dirname, '..', 'src', 'icons');

(async () => {
  const prettierCnf = await prettier.resolveConfig(process.cwd());
  const ic = fs.readdirSync(ICON_DIR);
  for (const icon of ic) {
    const ext = path.extname(path.resolve(ICON_DIR, icon));
    if (ext !== '.svg') return;
    const name = icon.replace(ext, '');

    let svg = fs.readFileSync(path.resolve(ICON_DIR, icon), 'utf-8');
    svg = await h2x(svg, {}).join('\n      ');

    let r = await ejs.renderFile(TEMPLATE_PATH, {
      name,
      svg,
    });
    r = prettier.format(r, { parser: 'typescript', ...prettierCnf });
    fs.writeFileSync(path.resolve(OUT_DIR, `${name}Icon.tsx`), r);
  }

  const icons = ic
    .map((icon) => {
      const ext = path.extname(path.resolve(ICON_DIR, icon));
      if (ext !== '.svg') return;
      return icon.replace(ext, '');
    })
    .filter((i) => i);

  let r = await ejs.renderFile(INDEX_TEMPLATE_PATH, {
    icons,
  });
  r = prettier.format(r, { parser: 'typescript', ...prettierCnf });
  fs.writeFileSync(path.resolve(OUT_DIR, `index.ts`), r);

  let s = await ejs.renderFile(STORY_TEMPLATE_PATH, {
    icons,
  });
  s = prettier.format(s, { parser: 'typescript', ...prettierCnf });
  fs.writeFileSync(path.resolve(OUT_DIR, `icon.stories.tsx`), s);
})()
  .catch(console)
  .then(console);
