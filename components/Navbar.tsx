import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
export const Navbar: React.FC = ({}) => {
    return (
        <>
            <div className="nav">
                <div className="nav-container">
                    <Link href="/">
                        <a className="brand w-inline-block">
                            <img
                                src="https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e9060d6d51614fd85de7a27_Group%204.svg"
                                alt=""
                            />
                        </a>
                    </Link>

                    <Link href="/contact">
                        <a className="_100-btn w-button">Contact Us</a>
                    </Link>
                </div>
            </div>
            <style jsx>{`
                ._100-btn {
                    padding: 10px 38px 10px 37px;
                    border: 0.5px solid #000;
                    border-radius: 4px;
                    background-color: transparent;
                    -webkit-transition: color 300ms
                            cubic-bezier(0.55, 0.085, 0.68, 0.53),
                        background-color 200ms ease-in;
                    transition: color 300ms
                            cubic-bezier(0.55, 0.085, 0.68, 0.53),
                        background-color 200ms ease-in;
                    color: #000;
                    font-size: 16px;
                    font-weight: 300;
                }

                ._100-btn:hover {
                    background-color: #000;
                    color: #fff;
                }
                .brand {
                    margin-left: 0px;
                }
                .nav {
                    position: fixed;
                    left: 0%;
                    top: 0%;
                    right: 0%;
                    bottom: auto;
                    z-index: 10;
                    display: block;
                    -webkit-box-orient: horizontal;
                    -webkit-box-direction: normal;
                    -webkit-flex-direction: row;
                    -ms-flex-direction: row;
                    flex-direction: row;
                    -webkit-box-pack: justify;
                    -webkit-justify-content: space-between;
                    -ms-flex-pack: justify;
                    justify-content: space-between;
                }

                .nav-container {
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                    max-width: 1190px;
                    margin-right: auto;
                    margin-left: auto;
                    padding-right: 38px;
                    padding-left: 0px;
                    -webkit-box-pack: justify;
                    -webkit-justify-content: space-between;
                    -ms-flex-pack: justify;
                    justify-content: space-between;
                    -webkit-box-align: center;
                    -webkit-align-items: center;
                    -ms-flex-align: center;
                    align-items: center;
                }
            `}</style>
        </>
    )
}
