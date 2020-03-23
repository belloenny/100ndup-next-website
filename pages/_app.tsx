import React from "react"
import App from "next/app"
import "../global/main.css"
import Head from "next/head"

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <>
                <Head>
                    <link
                        rel="shortcut icon"
                        type="image/x-icon"
                        href="/static/favicon_yNz_icon.ico"
                    />
                </Head>
                <Component {...pageProps} />
            </>
        )
    }
}

export default MyApp
