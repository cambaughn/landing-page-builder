import '../styles/globals.css'
import { Provider } from 'react-redux';
import Head from 'next/head';
import store from '../redux/store';


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Maven Landing Page Builder</title>
        <meta name="description" content="Build and launch your course page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
