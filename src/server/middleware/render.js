/* global VENDOR_BUNDLE: true, CLIENT_BUNDLE: true */
function render(req, res) {
  const context = {}

  if (context.url) {
    return res.redirect(302, context.url)
  }

  return res.status(context.status || 200).send(`
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta http-equiv="x-ua-compatible" content="ie=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <meta name="description" content="Full-Stack Developer From Canada">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <meta name="twitter:card" content="Full-Stack Developer From Canada">
          <meta name="twitter:site" content="@ianduke_exe">
          <meta name="twitter:title" content="Ian Duke - Full-Stack Developer">
          <meta name="twitter:creator" content="@ianduke_exe">
          <meta property="og:title" content="Ian Duke - Full-Stack Developer" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://www.ianduke.io/" />
          <meta property="og:description" content="Full-Stack Developer From Canada" />
          <link rel="me" href="https://twitter.com/ianduke_exe" type="text/html">
          <link rel="me" href="mailto:hey@ianduke.io">
          <title>ianduke.io</title>
        </head>
        <body>
          <div id="root">
          </div>
          <noscript>
            Ian Duke
            Full Stack Developer
            </noscript>
          <script src="${VENDOR_BUNDLE}"></script>
          <script src="${CLIENT_BUNDLE}"></script>
          <script>
            (function(a, h, d, c, g, f) {
                a.GoogleAnalyticsObject = c;
                a[c] || (a[c] = function() {
                    (a[c].q = a[c].q || []).push(arguments)
                });
                a[c].l = +new Date;
                g = h.createElement(d);
                f = h.getElementsByTagName(d)[0];
                g.src = "//www.google-analytics.com/analytics.js";
                f.parentNode.insertBefore(g, f)
            }(window, document, "script", "ga"));
            ga("create", "UA-72753738-1");
            ga("send", "pageview");
        </script>
        </body>
      </html>
    `)
}

export default render
