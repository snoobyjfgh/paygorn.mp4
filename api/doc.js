import fs from 'fs';
import path from 'path');

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'index.html');
  const html = fs.readFileSync(filePath, 'utf8');

  // Zorunlu header: HTML olarak render
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  // Tarayıcıya indirilmeye çalışmaması için
  res.setHeader('Content-Disposition', 'inline; filename="doc.png"');
  
  res.status(200).send(html);
}
