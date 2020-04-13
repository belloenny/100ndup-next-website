import Document, { Html, Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components";
import Safe from 'react-safe'


export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
        <Html
            data-wf-page="5e905ead4576bc5abfb55426"
            data-wf-site="5e905ead4576bced72b55425"
            data-wf-status="1"
        >
            <Head>
                <Safe.script type="text/javascript">
                    {`
    !function(o, c) {
        var n = c.documentElement
          , t = " w-mod-";
        n.className += t + "js",
        ("ontouchstart"in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch")
    }(window, document);
    
    
    `}
                </Safe.script>
                
            </Head>
            <body>
                <Main />
                <script
                    src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js?site=5e905ead4576bced72b55425"
                    type="text/javascript"
                    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
                    crossOrigin="anonymous"
                ></script>
                {/* <Safe.script src="static/webflow.js"></Safe.script> */}
                <NextScript />
            </body>
        </Html>
    )
}
  
}