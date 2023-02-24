import App from 'next/app'
import {createGlobalStyle} from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    box-sizing: border-box;
  }
`

class WisApp extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProps =  {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return pageProps;
  }

  render() {
    const {Component, ...otherProps} = this.props;
    return(
      <>
        <StyledGlobalStyle />
        <Component {...otherProps} />
      </>
    )
  }
}

export default WisApp;