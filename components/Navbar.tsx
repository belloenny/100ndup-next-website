import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
export const Navbar: React.FC = ({}) => {
    return (
        <>
            <div className="_100-brand">
                <Link href="/">
                    <img
                        src="https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e785d65bc626284c68cc724_Logo-1-2.svg"
                        alt=""
                    />
                </Link>
            </div>
            <motion.div
                initial={{ y: -30, opacity: 0 }}
                animate={{
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.5, ease: "easeIn" }
                }}
                className="nav"
            >
                <a href="#" className="_100-nav-link">
                    Our Work
                </a>
                <Link href="/about">
                    <a href="#" className="_100-nav-link">
                        About Us
                    </a>
                </Link>

                <Link href="/contact">
                    <a href="#" className="_100-btn w-button">
                        Contact us
                    </a>
                </Link>
            </motion.div>
            <style jsx>{`
                ._100-brand {
                    position: fixed;
                    left: 0%;
                    top: 0%;
                    right: auto;
                    bottom: auto;
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                    width: 100px;
                    height: 100px;
                    -webkit-box-orient: vertical;
                    -webkit-box-direction: normal;
                    -webkit-flex-direction: column;
                    -ms-flex-direction: column;
                    flex-direction: column;
                    -webkit-box-pack: center;
                    -webkit-justify-content: center;
                    -ms-flex-pack: center;
                    justify-content: center;
                    -webkit-box-align: center;
                    -webkit-align-items: center;
                    -ms-flex-align: center;
                    align-items: center;
                    cursor: pointer;
                    background-color: #000;
                }

                ._100-nav-link {
                    margin-left: 94px;
                    -webkit-transition: opacity 200ms ease;
                    transition: opacity 200ms ease;
                    color: #2b2c30;
                    font-size: 20px;
                    font-weight: 300;
                    text-decoration: none;
                }

                ._100-nav-link:hover {
                    text-decoration: underline;
                }
                ._100-btn {
                    margin-left: 122px;
                    padding-right: 37px;
                    padding-bottom: 10px;
                    padding-top: 10px;
                    padding-left: 38px;
                    border: 0.5px solid #000;
                    border-radius: 4px;
                    background-color: transparent;
                    -webkit-transition: color 500ms ease,
                        background-color 200ms ease-in-out;
                    transition: color 500ms ease,
                        background-color 200ms ease-in-out;
                    color: #2b2c30;
                    font-size: 20px;
                    font-weight: 300;
                }

                ._100-btn:hover {
                    border-style: solid;
                    background-color: #2b2c30;
                    color: #fff;
                }
                @media screen and (max-width: 991px) {
                    ._100-btn {
                        margin-left: 81px;
                    }
                }
                @media screen and (max-width: 767px) {
                    ._100-nav-link {
                        margin-left: 36px;
                        font-size: 17px;
                    }
                    ._100-btn {
                        margin-left: 36px;
                    }
                }
                @media screen and (max-width: 479px) {
                    ._100-btn {
                        margin-left: 0px;
                        font-size: 16px;
                    }
                }
            `}</style>
        </>
    )
}
