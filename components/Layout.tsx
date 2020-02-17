import * as React from 'react'
import Head from "next/head";

interface Props {
    children?: React.ReactNode
}

const Layout: React.FC<Props> = ({children}) => {
    return (
        <React.Fragment>
            <Head>
                <title>Hundred and up | creative agency</title>
                <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"/>
                <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"/>
            </Head>
            <main>
                {children}
            </main>
            <style jsx global>{`
                body {
                    font-family: 'Roboto', sans-serif;
                }
                main {
                    max-width: 960px;
                    margin-left: auto;
                    margin-right: auto;
                    overflow: hidden;
                }
                h1 {
                    font-size: 47px !important;
                    font-weight: 900 !important;
                    line-height: 70px;
                }
               
            `}</style>
        </React.Fragment>
    )
}

export default Layout