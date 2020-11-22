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
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument