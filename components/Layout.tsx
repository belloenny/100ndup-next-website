import * as React from "react"
import Head from "next/head"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

interface Props {
    children?: React.ReactNode
    ref?: React.LegacyRef<HTMLElement> 
}

const Layout: React.FC<Props> = ({ children,ref }) => {
    return (
        <React.Fragment>
            <Head>
                <title>Hundred and up | creative agency</title>
                <link
                    rel="stylesheet"
                    href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Navbar/>
            <main ref={ref}>{children}</main>
            <Footer/>
            <style jsx global>{`
                * {
                    box-sizing: border-box;
                }
                body {
                    background-color: transparent;
                    font-family: "Roboto", sans-serif;
                    color: #2b2c30;
                    font-size: 14px;
                    line-height: 20px;
                    font-weight: 400;
                }

                h1 {
                    margin-top: 0px;
                    margin-bottom: 0px;
                    font-size: 38px;
                    line-height: 44px;
                    font-weight: 700;
                }

                a {
                    text-decoration: none;
                }

                ul {
                    margin-top: 0px;
                    margin-bottom: 0px;
                    padding-left: 0px;
                }
            `}</style>
        </React.Fragment>
    )
}

export default Layout
