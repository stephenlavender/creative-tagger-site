export default function middleware(request) {
  const host = request.headers.get('host') || '';
  const url = new URL(request.url);

  // app.creativetagger.ai → serve dashboard
  if (host.startsWith('app.')) {
    return fetch(new URL('/app.html', request.url));
  }

  // www → redirect to root
  if (host.startsWith('www.')) {
    return Response.redirect(`https://creativetagger.ai${url.pathname}`, 301);
  }
}

export const config = {
  matcher: '/',
};
