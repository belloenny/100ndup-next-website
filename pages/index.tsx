import * as React from "react"
import { NextPage } from "next"
import Head from 'next/head'
import Link from "next/link"

const IndexPage: NextPage = () => {
    React.useEffect(() => {
        const webflow = document.createElement("script");
        const jquery = document.createElement("script");
        jquery.src = "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js?site=5e905ead4576bced72b55425";
        jquery.type = "text/javascript";
        jquery.integrity = "sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=";
        jquery.crossOrigin= "anonymous"
        webflow.src = "static/webflow.js";
        document.body.appendChild(jquery);
        document.body.appendChild(webflow); 
        return () => {
          document.body.removeChild(jquery);
          document.body.removeChild(webflow);
        }
    }, [])
      return (
        <>
        <Head>
            <title>Hundred and up creative agency</title>
            <meta name="description" content="creative agency with a focus on UX "/>
        </Head>
        <div>
            <div className="scroll-indicator">
                <div
                    data-w-id="960a90f3-1094-0835-fc71-773b250846d3"
                    data-animation-type="lottie"
                    data-src="https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e907366d658d40127653edd_16724-black-mouse-scroll.json"
                    data-loop={1}
                    data-direction={1}
                    data-autoplay={1}
                    data-is-ix2-target={0}
                    data-renderer="svg"
                    data-default-duration="2.9696361820138772"
                    data-duration={0}
                    className="lottie-animation-3"
                />
            </div>
            <div className="nav">
                <div className="nav-container">
                    <a href="#" className="brand w-inline-block">
                        <img
                            src="https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e9060d6d51614fd85de7a27_Group%204.svg"
                            alt=""
                        />
                    </a>
                    <Link href="/about">
                      <a className="_100-btn w-button">
                          Contact Us
                      </a>
                    </Link>  
                </div>
            </div>
            <div className="scroll-sequence">
                <div className="sequence-container">
                    <div className="animation-sequence">
                        <div className="lottie-animation-container">
                            <div
                                data-w-id="ab6d4a8d-92d7-fde6-b110-d12c29e58798"
                                data-animation-type="lottie"
                                data-src="https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e918a3406600f6386cf0a57_animation.json"
                                data-loop={0}
                                data-direction={1}
                                data-autoplay={0}
                                data-is-ix2-target={1}
                                data-renderer="canvas"
                                data-default-duration="3.3333333333333335"
                                data-duration={0}
                                className="lottie-animation-2"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-identifier">
                <a id="#home-section" onClick={e => e.preventDefault()} className="identifier-link">
                    Home
                </a>
                <a id="#clients-section" className="identifier-link">
                    Clients
                </a>
                <a id="#what-we-do" className="identifier-link">
                    Works
                </a>
            </div>
            <div
                id="home-section"
                data-w-id="41f1833b-7ce1-7e8d-cb2e-10c779c76dfc"
                className="hero-section"
            >
                <div className="hero-scroll-container">
                    <div className="sticky-container">
                        <div
                            data-w-id="275cdeef-1d70-dc1e-12eb-5b5fdaa0b01a"
                            className="hero-bullet-points"
                        >
                            <p className="hero-bullet-text">
                                Creators at The Core
                            </p>
                        </div>
                        <div
                            data-w-id="99a01576-f254-1396-4e5f-ccab0c732a79"
                            className="hero-bullet-points"
                        >
                            <p className="hero-bullet-text">
                                Hands on Approach
                            </p>
                        </div>
                        <div
                            data-w-id="40faac9d-d965-823c-818a-22cdb29f2cc8"
                            className="hero-bullet-points"
                        >
                            <p className="hero-bullet-text">UX Oriented</p>
                        </div>
                        <div
                            data-w-id="eacd76f0-9762-53f7-c4cb-3991c79aa629"
                            className="hero-bullet-points"
                        >
                            <p className="hero-bullet-text">Swift</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-progress">
                <div className="progress-bar">
                    <div
                        data-w-id="610e8cec-3e8c-13c5-6538-e48b662f14e2"
                        className="progress"
                    />
                </div>
            </div>
            <div id="clients-section" className="clients-section">
                <div className="site-container">
                    <h1 className="section-heading">Previous Clients</h1>
                    <div className="clients-container">
                        <div className="client">
                            <img
                                src="https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e91ae20b1f82c62c9f7f3f3_Group%2011.png"
                                alt=""
                            />
                        </div>
                        <div className="client">
                            <img
                                src="https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e91ae20c0e4bb0b5682cca4_Group%2012.png"
                                srcSet="https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e91ae20c0e4bb0b5682cca4_Group%2012-p-500.png 500w, https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e91ae20c0e4bb0b5682cca4_Group%2012.png 556w"
                                sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, (max-width: 991px) 555.9926147460938px, (max-width: 1439px) 56vw, 482.003662109375px"
                                alt=""
                            />
                        </div>
                        <div className="client">
                            <img
                                src="https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e91ae1f37cf8d74953bea9c_Group%2013.png"
                                srcSet="https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e91ae1f37cf8d74953bea9c_Group%2013-p-500.png 500w, https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e91ae1f37cf8d74953bea9c_Group%2013.png 504w"
                                sizes="(max-width: 479px) 100vw, (max-width: 767px) 91vw, (max-width: 991px) 503.9705505371094px, (max-width: 1439px) 51vw, 482.003662109375px"
                                alt=""
                            />
                        </div>
                        <div className="client">
                            <img
                                src="https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e91ae205f867872bb58ca1b_Group%2014.png"
                                srcSet="https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e91ae205f867872bb58ca1b_Group%2014-p-500.png 500w, https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e91ae205f867872bb58ca1b_Group%2014.png 556w"
                                sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, (max-width: 991px) 555.9926147460938px, (max-width: 1439px) 56vw, 482.003662109375px"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="what-we-do" id="what-we-do">
                <div className="site-container w-clearfix">
                    <h1 className="section-heading">What we do</h1>
                    <div
                        data-w-id="825c3c6f-f540-22e0-50e9-9d58ec130cc4"
                        className="project-body"
                    >
                        <div className="absolute-container">
                            <h1 className="project-number">01</h1>
                            <div className="absolute-flex">
                                <p className="absoulute-paragraph float-right">
                                    Photography
                                </p>
                                <img
                                    src="https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e91c93737cf8dc5773c8ae6_mdi_add.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div
                            style={{
                                WebkitTransform:
                                    "translate3d(0, 190PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
    
                                msTransform:
                                    "translate3d(0, 190PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                                transform:
                                    "translate3d(0, 190PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                                opacity: 0,
                            }}
                            className="extra-details"
                        >
                            <p className="extra-details-paragraph">
                                Photography and videography.
                            </p>
                            <a href="#" className="extra-details-link">
                                View Projects
                            </a>
                        </div>
                    </div>
                    <div
                        data-w-id="3edb6852-6553-9938-fdfc-64606cdbf8b5"
                        className="project-body"
                    >
                        <div className="absolute-container">
                            <h1 className="project-number">02</h1>
                            <div className="absolute-flex">
                                <p className="absoulute-paragraph float-right">
                                    Design
                                </p>
                                <img
                                    src="https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e91c93737cf8dc5773c8ae6_mdi_add.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div
                            style={{
                                WebkitTransform:
                                    "translate3d(0, 190PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
    
                                msTransform:
                                    "translate3d(0, 190PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                                transform:
                                    "translate3d(0, 190PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                                opacity: 0,
                            }}
                            className="extra-details"
                        >
                            <p className="extra-details-paragraph">
                                We do everthing digital design. Web Design, UI
                                design.
                            </p>
                            <a href="#" className="extra-details-link">
                                View Projects
                            </a>
                        </div>
                    </div>
                    <div
                        data-w-id="fbd6c3f7-9ac8-a558-0235-a7cd09f08f8c"
                        className="project-body"
                    >
                        <div className="absolute-container">
                            <h1 className="project-number">03</h1>
                            <div className="absolute-flex">
                                <p className="absoulute-paragraph float-right">
                                    3d Design
                                </p>
                                <img
                                    src="https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e91c93737cf8dc5773c8ae6_mdi_add.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div
                            style={{
                                WebkitTransform:
                                    "translate3d(0, 190PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
    
                                msTransform:
                                    "translate3d(0, 190PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                                transform:
                                    "translate3d(0, 190PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                                opacity: 0,
                            }}
                            className="extra-details"
                        >
                            <p className="extra-details-paragraph">
                                We create beautiful 3d virtual experiences
                            </p>
                            <a href="#" className="extra-details-link">
                                View Projects
                            </a>
                        </div>
                    </div>
                    <div
                        data-w-id="1de0c2ff-58f5-f859-931d-67c5734f230e"
                        className="project-body"
                    >
                        <div className="absolute-container">
                            <h1 className="project-number">04</h1>
                            <div className="absolute-flex">
                                <p className="absoulute-paragraph float-right">
                                    Development
                                </p>
                                <img
                                    src="https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e91c93737cf8dc5773c8ae6_mdi_add.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div
                            style={{
                                WebkitTransform:
                                    "translate3d(0, 190PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
    
                                msTransform:
                                    "translate3d(0, 190PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                                transform:
                                    "translate3d(0, 190PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                                opacity: 0,
                            }}
                            className="extra-details"
                        >
                            <p className="extra-details-paragraph">
                                We convert &nbsp;beautiful designs into an
                                actual working product
                            </p>
                            <a href="#" className="extra-details-link">
                                View Projects
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <footer id="footer" className="footer">
                <div className="w-container">
                    <div className="footer-flex-container">
                        <a href="#" className="footer-logo-link w-inline-block">
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
        </div>
        <style jsx>{`
            body {
                font-family: system-ui, -apple-system, BlinkMacSystemFont,
                    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans",
                    "Droid Sans", "Helvetica Neue", sans-serif;
                color: #000;
                font-size: 14px;
                line-height: 20px;
            }
    
            h1 {
                margin-top: 0px;
                margin-bottom: 0px;
                font-size: 38px;
                line-height: 44px;
                font-weight: 700;
            }
    
            p {
                margin-bottom: 0px;
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
    
            .body-2 {
                line-height: 16px;
                font-weight: 300;
            }
    
            .section-identifier {
                position: fixed;
                left: 0%;
                top: 0%;
                right: auto;
                bottom: 0%;
                z-index: 4;
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                width: 120px;
                margin-top: -118px;
                padding-left: 8px;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -webkit-flex-direction: column;
                -ms-flex-direction: column;
                flex-direction: column;
                -webkit-box-pack: center;
                -webkit-justify-content: center;
                -ms-flex-pack: center;
                justify-content: center;
            }
    
            .identifier-link {
                margin-top: 20px;
                color: #000;
                font-size: 16px;
                font-weight: 300;
                text-align: left;
                text-decoration: none;
            }
    
            .identifier-link.w--current {
                font-weight: 900;
            }
    
            .hero-section {
                position: relative;
            }
    
            .hero-scroll-container {
                position: relative;
                height: 150vh;
            }
    
            .sticky-container {
                position: -webkit-sticky;
                position: sticky;
                top: 0px;
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                overflow: hidden;
                height: 100vh;
                max-width: 980px;
                margin-right: auto;
                margin-left: auto;
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
            }
    
            .hero-bullet-points {
                position: absolute;
                width: 100%;
                opacity: 0;
                text-align: center;
            }
    
            .hero-bullet-text {
                margin-bottom: 0px;
                font-size: 100px;
                line-height: 1.06;
                font-weight: 700;
            }
    
            .scroll-sequence {
                position: absolute;
                top: 0px;
                z-index: 0.1;
                width: 100%;
                height: 150vh;
            }
    
            .sequence-container {
                position: absolute;
                top: 0px;
                width: 100%;
                height: 100%;
                margin-right: auto;
                margin-left: auto;
            }
    
            .animation-sequence {
                position: -webkit-sticky;
                position: sticky;
                top: 0px;
                overflow: hidden;
            }
    
            .lottie-animation-container {
                position: relative;
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                width: 100%;
                height: 100vh;
                -webkit-box-orient: horizontal;
                -webkit-box-direction: normal;
                -webkit-flex-direction: row;
                -ms-flex-direction: row;
                flex-direction: row;
                -webkit-box-pack: center;
                -webkit-justify-content: center;
                -ms-flex-pack: center;
                justify-content: center;
                -webkit-box-align: center;
                -webkit-align-items: center;
                -ms-flex-align: center;
                align-items: center;
            }
    
            .lottie-animation-2 {
                position: absolute;
                width: 100%;
                max-width: 1458px;
            }
    
            ._100-btn {
                padding: 10px 38px 10px 37px;
                border: 0.5px solid #000;
                border-radius: 4px;
                background-color: transparent;
                -webkit-transition: color 300ms
                        cubic-bezier(0.55, 0.085, 0.68, 0.53),
                    background-color 200ms ease-in;
                transition: color 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53),
                    background-color 200ms ease-in;
                color: #000;
                font-size: 16px;
                font-weight: 300;
            }
    
            ._100-btn:hover {
                background-color: #000;
                color: #fff;
            }
    
            .scroll-indicator {
                position: fixed;
                left: 47%;
                top: 87%;
                right: 0%;
                bottom: 0%;
                z-index: 12;
                width: 90px;
            }
    
            .lottie-animation-3 {
                width: 100%;
                height: 100%;
            }
    
            .clients-section {
                height: 780px;
            }
    
            .scroll-progress {
                position: fixed;
                left: auto;
                top: 0%;
                right: 0%;
                bottom: 0%;
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                width: 5%;
                height: 100%;
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
            }
    
            .progress-bar {
                position: relative;
                display: block;
                width: 1px;
                height: 39%;
                -webkit-box-pack: center;
                -webkit-justify-content: center;
                -ms-flex-pack: center;
                justify-content: center;
                -webkit-box-align: start;
                -webkit-align-items: flex-start;
                -ms-flex-align: start;
                align-items: flex-start;
                background-color: #000;
            }
    
            .progress {
                position: absolute;
                left: -2px;
                width: 4px;
                background-color: #000;
            }
    
            .brand {
                margin-left: 0px;
            }
    
            .site-container {
                max-width: 980px;
                margin-right: auto;
                margin-left: auto;
            }
    
            .section-heading {
                font-size: 50px;
                line-height: 59px;
            }
    
            .clients-container {
                display: -ms-grid;
                display: grid;
                margin-top: 100px;
                grid-auto-columns: 1fr;
                grid-column-gap: 16px;
                grid-row-gap: 16px;
                -ms-grid-columns: 1fr 1fr;
                grid-template-columns: 1fr 1fr;
                -ms-grid-rows: auto auto;
                grid-template-rows: auto auto;
            }
    
            .client {
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: horizontal;
                -webkit-box-direction: normal;
                -webkit-flex-direction: row;
                -ms-flex-direction: row;
                flex-direction: row;
                -webkit-box-pack: start;
                -webkit-justify-content: flex-start;
                -ms-flex-pack: start;
                justify-content: flex-start;
                -webkit-box-align: start;
                -webkit-align-items: flex-start;
                -ms-flex-align: start;
                align-items: flex-start;
            }
    
            .what-we-do {
                margin-top: 786px;
            }
    
            .project-body {
                position: relative;
                width: 90%;
                height: 389px;
                margin-top: 300px;
                float: right;
                background-color: #c4c4c4;
            }
    
            .project-number {
                font-size: 100px;
                font-weight: 300;
            }
    
            .absolute-container {
                position: absolute;
                left: auto;
                top: -8%;
                right: 0%;
                bottom: auto;
            }
    
            .absoulute-paragraph {
                font-size: 18px;
            }
    
            .absoulute-paragraph.float-right {
                text-align: right;
            }
    
            .absolute-flex {
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                margin-top: 40px;
                -webkit-box-pack: center;
                -webkit-justify-content: center;
                -ms-flex-pack: center;
                justify-content: center;
                -webkit-box-align: center;
                -webkit-align-items: center;
                -ms-flex-align: center;
                align-items: center;
            }
    
            .extra-details {
                position: absolute;
                left: auto;
                top: auto;
                right: 0%;
                bottom: 0%;
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                width: 474px;
                height: 247px;
                padding: 33px 34px 42px 51px;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -webkit-flex-direction: column;
                -ms-flex-direction: column;
                flex-direction: column;
                -webkit-box-pack: justify;
                -webkit-justify-content: space-between;
                -ms-flex-pack: justify;
                justify-content: space-between;
                background-color: #e5e5e5;
                opacity: 0;
            }
    
            .extra-details-paragraph {
                font-size: 34px;
                line-height: 42px;
            }
    
            .extra-details-link {
                color: #000;
                font-size: 24px;
                font-weight: 700;
            }
    
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
    
            @media screen and (min-width: 1440px) {
                .section-identifier {
                    left: 5%;
                }
                .hero-scroll-container {
                    position: relative;
                }
                .sticky-container {
                    position: -webkit-sticky;
                    position: sticky;
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                    overflow: hidden;
                    height: 100vh;
                    max-width: 980px;
                    margin-right: auto;
                    margin-left: auto;
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
                }
                .hero-bullet-points {
                    position: absolute;
                    width: 100%;
                    opacity: 0;
                }
                .hero-bullet-text {
                    line-height: 1.06;
                    font-weight: 700;
                    text-align: center;
                }
                .scroll-sequence {
                    position: absolute;
                    top: 0px;
                    width: 100%;
                    margin-top: 0px;
                }
                .sequence-container {
                    position: absolute;
                    top: 0px;
                    width: 100%;
                    height: 100%;
                }
                .animation-sequence {
                    position: -webkit-sticky;
                    position: sticky;
                    top: 0px;
                    overflow: hidden;
                }
                .lottie-animation-container {
                    position: relative;
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                    width: 100%;
                    height: 100vh;
                    padding-top: 30px;
                    -webkit-box-pack: center;
                    -webkit-justify-content: center;
                    -ms-flex-pack: center;
                    justify-content: center;
                    -webkit-box-align: center;
                    -webkit-align-items: center;
                    -ms-flex-align: center;
                    align-items: center;
                }
                .lottie-animation-2 {
                    position: absolute;
                    width: 100%;
                }
                .scroll-progress {
                    right: 2%;
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-pack: center;
                    -webkit-justify-content: center;
                    -ms-flex-pack: center;
                    justify-content: center;
                }
                .brand {
                    margin-left: -46px;
                }
            }
    
            @media screen and (max-width: 991px) {
                .hero-bullet-text {
                    font-size: 64px;
                }
                .scroll-indicator {
                    left: 43%;
                }
                .site-container {
                    padding-right: 22px;
                    padding-left: 22px;
                }
                .clients-container {
                    justify-items: center;
                    -ms-grid-columns: 1fr;
                    grid-template-columns: 1fr;
                }
                .footer {
                    padding-right: 20px;
                    padding-left: 20px;
                }
            }
    
            @media screen and (max-width: 767px) {
                .nav-container {
                    padding-right: 9px;
                }
                .section-identifier {
                    display: none;
                }
                .scroll-progress {
                    display: none;
                }
                .footer {
                    padding: 40px 20px;
                }
                .footer-image {
                    -o-object-fit: contain;
                    object-fit: contain;
                }
            }
    
            @media screen and (max-width: 479px) {
                .hero-bullet-text {
                    font-size: 44px;
                }
                .scroll-indicator {
                    left: 40%;
                }
                .site-container {
                    padding-right: 14px;
                    padding-left: 14px;
                }
                .section-heading {
                    font-size: 38px;
                    text-align: center;
                }
                .extra-details {
                    width: 108%;
                    padding-right: 0px;
                    padding-left: 31px;
                }
                .extra-details-paragraph {
                    font-size: 20px;
                }
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
        </>
    )
}

export default IndexPage
