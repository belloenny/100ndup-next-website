import * as React from "react"
import Layout from "../components/Layout"
import { NextPage } from "next"
import styled from "styled-components"
import { motion, useViewportScroll } from "framer-motion"

const IndexPage: NextPage = () => {
    const { scrollYProgress } = useViewportScroll()
    return (
        <Layout>
            <div className="hero-section">
                <div className="container w-container">
                    <div className="text-side">
                        <p className="body-text">100ndup</p>
                        <h1 className="heading1">
                            <strong>
                                Gain a competitive advantage
                                <br />
                                in a connected digital world
                            </strong>
                        </h1>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .body-text {
                        color: #2b2c30;
                        font-size: 24px;
                        line-height: 28px;
                        font-weight: 300;
                    }
                    .heading1 {
                        color: #2b2c30;
                        font-size: 47px;
                        line-height: 70px;
                        font-weight: 900;
                    }
                    .hero-section {
                        display: -webkit-box;
                        display: -webkit-flex;
                        display: -ms-flexbox;
                        display: flex;
                        height: 100vh;
                        -webkit-box-orient: horizontal;
                        -webkit-box-direction: normal;
                        -webkit-flex-direction: row;
                        -ms-flex-direction: row;
                        flex-direction: row;
                        -webkit-box-align: center;
                        -webkit-align-items: center;
                        -ms-flex-align: center;
                        align-items: center;
                    }
                    .container {
                        position: relative;
                        display: -webkit-box;
                        display: -webkit-flex;
                        display: -ms-flexbox;
                        display: flex;
                        margin-top: -237px;
                    }

                    .image {
                        position: absolute;
                        left: auto;
                        top: -48%;
                        right: 0%;
                        bottom: 0%;
                        z-index: -1;
                    }

                    .text-side {
                        width: 1020px;
                    }
                `}
            </style>
        </Layout>
    )
}

export default IndexPage
