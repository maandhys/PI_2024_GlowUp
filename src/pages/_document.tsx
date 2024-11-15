// pages/_document.tsx

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          {/* Link para a fonte IBM Plex Mono */}
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="font-mono">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
