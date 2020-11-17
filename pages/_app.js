import '../styles/globals.scss'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <div className='root-app'>
      <Head>
        <title>NEXT APP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
