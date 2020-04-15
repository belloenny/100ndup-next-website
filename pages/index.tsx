import * as React from "react"
import { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import Router from "next/router"
import Layout from "../components/Layout"

const IndexPage: NextPage = () => {
    React.useEffect(() => {
        const webflow = document.createElement("script")
        webflow.src = "static/webflow.js"
        document.body.appendChild(webflow)
        return () => {
            document.body.removeChild(webflow)
        }
    }, [])
    return (
        <Layout>
            <Head>
                <title>Hundred and up creative agency</title>
                <meta
                    name="description"
                    content="creative agency with a focus on UX "
                />
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
                    <a
                        id="#home-section"
                        onClick={(e) => e.preventDefault()}
                        className="identifier-link"
                    >
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
                                    className="floating-image"
                                />
                            </div>
                            <div className="client">
                                <img
                                    src="https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e91ae20c0e4bb0b5682cca4_Group%2012.png"
                                    srcSet="https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e91ae20c0e4bb0b5682cca4_Group%2012-p-500.png 500w, https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e91ae20c0e4bb0b5682cca4_Group%2012.png 556w"
                                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, (max-width: 991px) 555.9926147460938px, (max-width: 1439px) 56vw, 482.003662109375px"
                                    alt=""
                                    className="floating-image"
                                />
                            </div>
                            <div className="client">
                                <img
                                    src="https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e91ae1f37cf8d74953bea9c_Group%2013.png"
                                    srcSet="https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e91ae1f37cf8d74953bea9c_Group%2013-p-500.png 500w, https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e91ae1f37cf8d74953bea9c_Group%2013.png 504w"
                                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 91vw, (max-width: 991px) 503.9705505371094px, (max-width: 1439px) 51vw, 482.003662109375px"
                                    alt=""
                                    className="floating-image"
                                />
                            </div>
                            <div className="client">
                                <img
                                    src="https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e91ae205f867872bb58ca1b_Group%2014.png"
                                    srcSet="https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e91ae205f867872bb58ca1b_Group%2014-p-500.png 500w, https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e91ae205f867872bb58ca1b_Group%2014.png 556w"
                                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, (max-width: 991px) 555.9926147460938px, (max-width: 1439px) 56vw, 482.003662109375px"
                                    alt=""
                                    className="floating-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="what-we-do" className="what-we-do">
                    <div className="site-container w-clearfix">
                        <h1 className="section-heading">What we do</h1>
                        <div
                            data-w-id="825c3c6f-f540-22e0-50e9-9d58ec130cc4"
                            className="project-body"
                        >
                            <div className="absolute-container">
                                <h1 className="project-number">01</h1>
                                <div className="absolute-flex">
                                    <p className="absoulute-paragraph">
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
                                <a
                                    onClick={(e) => {
                                        e.preventDefault()
                                        Router.push(
                                            "/projects/[pid]",
                                            `/projects/1`
                                        )
                                    }}
                                    className="extra-details-link"
                                >
                                    View Projects
                                </a>
                            </div>
                            <div className="photo-container">
                                <div className="filter" />
                                <img
                                    src="https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e95fa71f8266de01b117fe2_DSC_9811.jpg"
                                    srcSet="https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e95fa71f8266de01b117fe2_DSC_9811-p-500.jpeg 500w, https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e95fa71f8266de01b117fe2_DSC_9811-p-800.jpeg 800w, https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e95fa71f8266de01b117fe2_DSC_9811-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e95fa71f8266de01b117fe2_DSC_9811-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e95fa71f8266de01b117fe2_DSC_9811-p-2000.jpeg 2000w, https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e95fa71f8266de01b117fe2_DSC_9811-p-2600.jpeg 2600w, https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e95fa71f8266de01b117fe2_DSC_9811-p-3200.jpeg 3200w, https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e95fa71f8266de01b117fe2_DSC_9811.jpg 4016w"
                                    sizes="(max-width: 479px) 100vw, (max-width: 1439px) 85vw, 881.9852294921875px"
                                    alt=""
                                    className="project-image _1"
                                />
                            </div>
                        </div>
                        <div
                            data-w-id="3edb6852-6553-9938-fdfc-64606cdbf8b5"
                            className="project-body"
                        >
                            <div className="absolute-container">
                                <h1 className="project-number">02</h1>
                                <div className="absolute-flex">
                                    <p className="absoulute-paragraph">
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
                                    We do everthing digital design. Web Design,
                                    UI design.
                                </p>
                                <a
                                    onClick={(e) => {
                                        e.preventDefault()
                                        Router.push(
                                            "/projects/[pid]",
                                            `/projects/1`
                                        )
                                    }}
                                    className="extra-details-link"
                                >
                                    View Projects
                                </a>
                            </div>
                            <div className="photo-container">
                                <img
                                    src="https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e95f25f8372e9534c51e210_ec55fd33704618.56b46c124750d.png"
                                    srcSet="https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e95f25f8372e9534c51e210_ec55fd33704618.56b46c124750d-p-500.png 500w, https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e95f25f8372e9534c51e210_ec55fd33704618.56b46c124750d-p-800.png 800w, https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e95f25f8372e9534c51e210_ec55fd33704618.56b46c124750d-p-1080.png 1080w, https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e95f25f8372e9534c51e210_ec55fd33704618.56b46c124750d-p-1600.png 1600w, https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e95f25f8372e9534c51e210_ec55fd33704618.56b46c124750d-p-2000.png 2000w, https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e95f25f8372e9534c51e210_ec55fd33704618.56b46c124750d-p-2600.png 2600w, https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e95f25f8372e9534c51e210_ec55fd33704618.56b46c124750d.png 3000w"
                                    sizes="(max-width: 479px) 100vw, (max-width: 1439px) 85vw, 881.9852294921875px"
                                    alt=""
                                    className="project-image"
                                />
                            </div>
                        </div>
                        <div
                            data-w-id="1de0c2ff-58f5-f859-931d-67c5734f230e"
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
                                    we creative immersive 3d virtual experiences
                                </p>
                                <a
                                    onClick={(e) => {
                                        e.preventDefault()
                                        Router.push(
                                            "/projects/[pid]",
                                            `/projects/2`
                                        )
                                    }}
                                    className="extra-details-link"
                                >
                                    View Projects
                                </a>
                            </div>
                            <div className="photo-container">
                                <img
                                    src="https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e94b76169aa88da16437690_4ren.png"
                                    srcSet="https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e94b76169aa88da16437690_4ren-p-500.png 500w, https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e94b76169aa88da16437690_4ren-p-800.png 800w, https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e94b76169aa88da16437690_4ren-p-1080.png 1080w, https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e94b76169aa88da16437690_4ren-p-1600.png 1600w, https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e94b76169aa88da16437690_4ren.png 1920w"
                                    sizes="(max-width: 479px) 100vw, (max-width: 1439px) 85vw, 881.9852294921875px"
                                    alt=""
                                    className="project-image"
                                />
                                <div className="filter" />
                            </div>
                        </div>
                        <div
                            data-w-id="7404aeab-7b79-1964-b321-4accd01832e1"
                            className="project-body"
                        >
                            <div className="absolute-container">
                                <h1 className="project-number">04</h1>
                                <div className="absolute-flex">
                                    <p className="absoulute-paragraph float-right">
                                        development
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
                                <a
                                    onClick={(e) => {
                                        e.preventDefault()
                                        Router.push(
                                            "/projects/[pid]",
                                            `/projects/3`
                                        )
                                    }}
                                    className="extra-details-link"
                                >
                                    View Projects
                                </a>
                            </div>
                            <div className="photo-container">
                                <img
                                    src="https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e95f26eba7c14354322d936_design-01.png"
                                    srcSet="https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e95f26eba7c14354322d936_design-01-p-500.png 500w, https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e95f26eba7c14354322d936_design-01-p-800.png 800w, https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e95f26eba7c14354322d936_design-01-p-1080.png 1080w, https://uploads-ssl.webflow.com/5e905ead4576bced72b55425/5e95f26eba7c14354322d936_design-01.png 1440w"
                                    sizes="(max-width: 479px) 100vw, (max-width: 1439px) 85vw, 881.9852294921875px"
                                    alt=""
                                    className="project-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                body {
                    font-family: system-ui, -apple-system, BlinkMacSystemFont,
                        "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
                        "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
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
                    margin-top: 20px;
                    -webkit-box-flex: 1;
                    -webkit-flex: 1;
                    -ms-flex: 1;
                    flex: 1;
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
                    background-color: transparent;
                    font-family: system-ui, -apple-system, BlinkMacSystemFont,
                        "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
                        "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
                    font-weight: 300;
                    -o-object-fit: fill;
                    object-fit: fill;
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
                    z-index: 5;
                }

                .absoulute-paragraph {
                    font-size: 18px;
                    font-weight: 900;
                }

                .absoulute-paragraph.float-right {
                    text-align: right;
                }

                .absoulute-paragraph.white {
                    color: #fff;
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
                    z-index: 6;
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
                    cursor: pointer;
                }

                .project-image {
                    position: absolute;
                    left: 0%;
                    top: -21%;
                    right: 0%;
                    bottom: 0%;
                    overflow: hidden;
                    width: 100%;
                }

                .project-image._1 {
                    top: -69%;
                }

                .photo-container {
                    position: relative;
                    overflow: hidden;
                    height: 100%;
                }

                .filter {
                    position: absolute;
                    left: 0%;
                    top: 0%;
                    right: 0%;
                    bottom: 0%;
                    z-index: 1;
                    width: 100%;
                    height: 100%;
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
                }

                @media screen and (max-width: 479px) {
                    .hero-bullet-text {
                        font-size: 44px;
                    }
                    .scroll-indicator {
                        left: 40%;
                    }
                    .site-container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
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

                    .project-image {
                        position: static;
                    }
                    .photo-container {
                        overflow: visible;
                    }
                }
            `}</style>
        </Layout>
    )
}

export default IndexPage
