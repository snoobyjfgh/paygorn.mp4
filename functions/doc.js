import fs from 'fs';
import path from 'path';

export async function handler(event, context) {
  const indexPath = path.resolve('./index.html');
  const htmlContent = fs.readFileSync(indexPath, 'utf8');

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html'
    },
    body: htmlContent
  };
}
