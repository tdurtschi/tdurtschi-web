import '../styles/globals.scss'
import Head from 'next/head'
import Header from "../components/header/header"

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>tdurtschi.com</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&display=swap" rel="stylesheet" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-111893401-1"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || []
                            function gtag() {
                                dataLayer.push(arguments)
                            }
                            gtag("js", new Date())
                    
                            gtag("config", "UA-111893401-1")
                        `
                    }}
                />
            </Head>
            <Header />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
