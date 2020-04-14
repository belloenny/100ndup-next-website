import * as React from 'react'

export const Footer: React.FC = ({}) => {
    return (
        <React.Fragment>
            <footer id="footer" className="footer">
                    <div className="w-container">
                        <div className="footer-flex-container">
                            <a
                                href="#"
                                className="footer-logo-link w-inline-block"
                            >
                                <img
                                    src="https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e9060d6d51614fd85de7a27_Group%204.svg"
                                    width={150}
                                    height={150}
                                    alt=""
                                    className="footer-image"
                                />
                            </a>
                            <div>
                                <h2 className="footer-heading">Links</h2>
                                <ul className="w-list-unstyled">
                                    <li>
                                        <a href="#" className="footer-link">
                                            About us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer-link">
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="footer-heading">Socials</h2>
                                <ul className="w-list-unstyled">
                                    <li>
                                        <a href="#" className="footer-link">
                                            Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer-link">
                                            instagram
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="copyright">
                            Copyright © 2020 100ndup. All rights reserved.
                        </div>
                    </div>
                </footer>
                <style jsx>{`
                
                .footer {
                    margin-top: 428px;
                    padding-top: 60px;
                    padding-bottom: 40px;
                    -webkit-box-align: start;
                    -webkit-align-items: flex-start;
                    -ms-flex-align: start;
                    align-items: flex-start;
                    background-color: #000;
                    text-align: center;
                }

                .footer-flex-container {
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                    margin-bottom: 40px;
                    -webkit-box-pack: justify;
                    -webkit-justify-content: space-between;
                    -ms-flex-pack: justify;
                    justify-content: space-between;
                    text-align: left;
                }

                .footer-logo-link {
                    max-height: 60px;
                    min-width: 60px;
                    -webkit-box-flex: 0;
                    -webkit-flex: 0 auto;
                    -ms-flex: 0 auto;
                    flex: 0 auto;
                }

                .footer-image {
                    width: 100%;
                    height: 100%;
                    -o-object-fit: contain;
                    object-fit: contain;
                    -o-object-position: 0% 50%;
                    object-position: 0% 50%;
                }

                .footer-heading {
                    margin-top: 0px;
                    margin-bottom: 20px;
                    color: #fff;
                    font-size: 14px;
                    line-height: 1.5;
                }

                .footer-link {
                    display: block;
                    margin-bottom: 10px;
                    color: #fff;
                    text-decoration: none;
                }

                .footer-link:hover {
                    text-decoration: underline;
                }

                .copyright {
                    color: #fff;
                }
                @media screen and (max-width: 991px) {
                    .footer {
                        padding-right: 20px;
                        padding-left: 20px;
                    }
                }
                @media screen and (max-width: 767px) {
                    .footer {
                        padding: 40px 20px;
                    }
                    .footer-image {
                        -o-object-fit: contain;
                        object-fit: contain;
                    }
                }

                @media screen and (max-width: 479px) {
                    .footer {
                        padding-right: 20px;
                        padding-left: 20px;
                        text-align: left;
                    }
                    .footer-flex-container {
                        -webkit-box-orient: vertical;
                        -webkit-box-direction: normal;
                        -webkit-flex-direction: column;
                        -ms-flex-direction: column;
                        flex-direction: column;
                    }
                    .footer-logo-link {
                        height: 60px;
                    }
                    .footer-heading {
                        margin-top: 20px;
                    }
                }
               
                    
                `}</style>
        </React.Fragment>
    )
}