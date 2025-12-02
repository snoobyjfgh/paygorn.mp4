import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  try {
    // index.html yolunu ES Module uyumlu şekilde al
    const filePath = path.join(process.cwd(), 'index.html');
    const html = fs.readFileSync(filePath, 'utf8');

    // HTML olarak render et
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    // Inline göster, indirilmeyecek
    res.setHeader('Content-Disposition', 'inline; filename="doc.png"');

    res.status(200).send(html);

  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
}
