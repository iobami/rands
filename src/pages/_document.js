import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="nk-body npc-crypto has-sidebar has-sidebar-fat ui-clean">
          <Main />
          <NextScript />

          {/* <script src="/assets/js/bundle.js?ver=1.4.0" />
          <script src="/assets/js/scripts.js?ver=1.4.0" />
          <script src="/assets/js/charts/chart-crypto.js?ver=1.4.0" /> */}
        </body>
      </Html>
    )
  }
}

export default MyDocument