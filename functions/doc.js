import fs from 'fs';
import path from 'path';

export async function handler(event, context) {
  const html = fs.readFileSync(path.join(process.cwd(), 'index.html'), 'utf8');

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html'  // zorunlu: HTML render etmesi için
    },
    body: html
  };
}
