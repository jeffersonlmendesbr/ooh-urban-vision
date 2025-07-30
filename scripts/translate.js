import fs from 'fs';
import path from 'path';

const translateText = async (text, target) => {
  const params = new URLSearchParams({
    client: 'gtx',
    sl: 'pt',
    tl: target,
    dt: 't',
    q: text,
  });
  const res = await fetch(`https://translate.googleapis.com/translate_a/single?${params.toString()}`);
  if (!res.ok) throw new Error('translate failed');
  const data = await res.json();
  return data[0][0][0];
};

const translateObject = async (obj, target) => {
  const result = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === 'string') {
      if (value.includes('{{')) {
        result[key] = value; // skip strings with interpolation
      } else {
        result[key] = await translateText(value, target);
        await new Promise(r => setTimeout(r, 100));
      }
    } else {
      result[key] = await translateObject(value, target);
    }
  }
  return result;
};

const ptPath = path.resolve('src/locales/pt.json');
const pt = JSON.parse(fs.readFileSync(ptPath, 'utf8'));

const run = async () => {
  for (const target of ['en', 'es']) {
    const translated = await translateObject(pt, target);
    fs.writeFileSync(path.resolve(`src/locales/${target}.json`), JSON.stringify(translated, null, 2));
  }
};

run().catch(err => {
  console.error(err);
  process.exit(1);
});
