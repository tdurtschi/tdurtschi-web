import '../styles/globals.css'
import Head from 'next/head'
import Header from "../components/header"

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>tdurtschi.com</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
