import * as React from "react"
import { motion } from "framer-motion"

export const ClientSection: React.FC = ({}) => {
    return (
        <>
            <motion.div
                className="_100-clients-section"
            >
                <div className="_100-client-container">
                    <h3 className="_100-clients-section-title">
                        Previous Clients
                    </h3>
                    <div className="_100-client">
                        <img
                            src="https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e786eb94c71bd617648b5e7_connectcoffee.png"
                            alt=""
                            className="_100-client-img"
                        />
                        <img
                            src="https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e786eb70a930ffde8cb2d49_aftaeats.png"
                            alt=""
                            className="_100-client-img"
                        />
                        <img
                            src="https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e786eb80014e66a331e30f6_avant.png"
                            alt=""
                            className="_100-client-img"
                        />
                        <img
                            src="https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e786eb8bc62621bf28d169d_Elias.png"
                            alt=""
                            className="_100-client-img"
                        />
                    </div>
                </div>
                <style jsx>{`
                    ._100-client-container {
                        height: 100%;
                        max-width: 1080px;
                        margin-right: auto;
                        margin-left: auto;
                        margin-bottom: 380px;
                        margin-bottom: 280px;
                    }
                    ._100-clients-section-title {
                        margin-top: 0px;
                        margin-bottom: 0px;
                        font-weight: 300;
                    }
                    ._100-client-img {
                        -webkit-filter: saturate(0%);
                        filter: saturate(0%);
                    }
                    ._100-client {
                        display: -ms-grid;
                        display: grid;
                        margin-top: 92px;
                        justify-items: center;
                        -webkit-box-align: center;
                        -webkit-align-items: center;
                        -ms-flex-align: center;
                        align-items: center;
                        
                        grid-auto-columns: 1fr;
                        grid-column-gap: 16px;
                        grid-row-gap: 16px;
                        -ms-grid-columns: 1fr 1fr 1fr 1fr;
                        grid-template-columns: 1fr 1fr 1fr 1fr;
                        -ms-grid-rows: auto;
                        grid-template-rows: auto;
                    }
                    @media screen and (max-width: 991px) {
                        ._100-client-container {
                            padding-right: 22px;
                            padding-left: 30px;
                        }
                    }
                    @media screen and (max-width: 767px) {
                        ._100-client-container {
                            padding-right: 0px;
                            padding-left: 27px;
                        }
                        ._100-client {
                            grid-row-gap: 40px;
                            -ms-grid-columns: 1fr 1fr;
                            grid-template-columns: 1fr 1fr;
                        }
                    }
                    @media screen and (max-width: 469px) {
                        ._100-client-container {
                            padding-right: 21px;
                            padding-left: 21px;
                        }
                        ._100-clients-section-title {
                            text-align: center;
                        }
                        ._100-client {
                            -ms-grid-columns: 1fr;
                            grid-template-columns: 1fr;
                        }

                    }
                `}</style>
            </motion.div>
        </>
    )
}
