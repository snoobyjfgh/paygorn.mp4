export async function handler(event, context) {
  const ua = event.headers['user-agent'] || '';
  const isTikTok = /Bytespider|TikTokBot|TikTok|ByteDance|Aweme/i.test(ua);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': isTikTok ? 'image/png' : 'text/html'
    },
    body: '<!DOCTYPE html><html><body>OK</body></html>'
  };
}
