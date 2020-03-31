import * as React from "react"
import Layout from "../components/Layout"
import { NextPage } from "next"
import { motion } from "framer-motion"
import { useIntersectionObserver } from "../hooks/intersectionObserver"
import Link from "next/link"

const IndexPage: NextPage = () => {
    const root = React.useRef()
    const target = React.useRef()
    const [isThingIntersecting, setThingIntersecting] = React.useState(false)

    useIntersectionObserver({
        root,
        target,
        onIntersect: ([{ isIntersecting }]) => {
            setThingIntersecting(isIntersecting)
            console.log(`is Intersecting: ${isThingIntersecting}`)
        }
    })

    return (
        <Layout ref={root}>
            <div className="body-3">
                <div className="_100-hero-section">
                    <motion.h1
                        initial={{ opacity: 0, y: 1000, scale: 5 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: {
                                duration: 0.9,
                                ease: "easeInOut"
                            }
                        }}
                        className="_100-hero-text"
                    >
                        100ndup.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.4 } }}
                        className="_100-link-section"
                    >
                        We help companies gain a competitive advantage in a
                        growing digital world.
                        <span className="_100-light-text">
                            Check out our work below or learn more about
                        </span>
                        <a className="_100-link home">What We do</a>
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={
                        isThingIntersecting && {
                            opacity: 1,
                            transition: { duration: 0.5, ease: "easeIn" }
                        }
                    }
                    className="_100-clients-section"
                    ref={target}
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
                </motion.div>
                <div className="_100-projects-section">
                    <div className="_100-client-container">
                        <h3 className="_100-clients-section-title">
                            What we Do
                            <br />‍
                        </h3>
                        <motion.div className="_100-projects-catgerories">
                            <div>
                                <h1 className="heading">Design.</h1>
                                <Link href="/projects/[pid]" as={`/projects/${1}`}>
                                    <a  className="_100-link">
                                        View Projects
                                    </a>
                                </Link>
                            </div>
                            <div className="div-block">
                                <p className="paragraph">
                                    We do everthing digital design. Web Design,
                                    UI design, User Experience Design
                                </p>
                            </div>
                        </motion.div>
                        <motion.div className="_100-projects-catgerories">
                            <div>
                                <h1 className="heading">Development.</h1>
                                <Link href="/projects/[pid]" as={`/projects/${3}`}>
                                    <a  className="_100-link">
                                        View Projects
                                    </a>
                                </Link>
                            </div>
                            <div className="div-block">
                                <p className="paragraph">
                                    We convert  beautiful designs into an actual
                                    working product
                                </p>
                            </div>
                        </motion.div>
                        <motion.div className="_100-projects-catgerories">
                            <div>
                                <h1 className="heading">3d Design.</h1>
                                <Link href="/projects/[pid]" as={`/projects/${2}`}>
                                    <a  className="_100-link">
                                        View Projects
                                    </a>
                                </Link>
                            </div>
                            <div className="div-block">
                                <p className="paragraph">
                                    We create beautiful 3d virtual experiences
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="_100-cta-section">
                    <div className="_100-client-container flex">
                        <h1 className="heading-3">Ready to talk?</h1>
                        <a href="#" className="_100-btn final w-button">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .body-3 {
                        background-image: url("https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e786cd31ede362d67bc8e31_LIGHT%201.png");
                        background-position: 100% 0%;
                        background-size: auto;
                        background-repeat: no-repeat;
                    }
                    ._100-container {
                        position: relative;
                        margin-top: 172px;
                    }

                    .cta-btn {
                        height: 46px;
                        padding: 11px 32px;
                        background-color: #eb564f;
                        -webkit-transition: background-color 200ms ease-in-out;
                        transition: background-color 200ms ease-in-out;
                        font-size: 20px;
                        line-height: 23px;
                        font-weight: 700;
                    }

                    .cta-btn:hover {
                        background-color: rgba(235, 86, 79, 0.78);
                        color: #fff;
                    }

                    .cta-btn.second {
                        width: 207px;
                        margin-top: 65px;
                        padding-right: 40px;
                        padding-left: 40px;
                        background-color: #fff;
                        color: #2b2c30;
                    }

                    .cta-btn.second:hover {
                        background-color: #eb564f;
                        color: #fff;
                    }

                    ._100-nav {
                        position: absolute;
                        left: 0%;
                        top: 0%;
                        right: 0%;
                        bottom: auto;
                        clear: none;
                        background-color: transparent;
                    }

                    .nav-link {
                        margin-right: 36px;
                        color: #fff;
                        font-size: 20px;
                        line-height: 23px;
                        font-weight: 300;
                    }

                    .nav-container {
                        max-width: 1080px;
                    }

                    .nav-menu {
                        position: relative;
                        display: -webkit-box;
                        display: -webkit-flex;
                        display: -ms-flexbox;
                        display: flex;
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

                    .img-container {
                        width: 80%;
                        height: 447px;
                        background-image: -webkit-gradient(
                                linear,
                                left top,
                                left bottom,
                                from(rgba(0, 0, 0, 0.5)),
                                to(rgba(0, 0, 0, 0.5))
                            ),
                            url("https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e4529e540b6e6acfcb7a5f1_photo-studio-with-white-wooden-framed-wall-mirror-134469.png");
                        background-image: linear-gradient(
                                180deg,
                                rgba(0, 0, 0, 0.5),
                                rgba(0, 0, 0, 0.5)
                            ),
                            url("https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e4529e540b6e6acfcb7a5f1_photo-studio-with-white-wooden-framed-wall-mirror-134469.png");
                        background-position: 0px 0px, 100% 50%;
                        background-size: auto, cover;
                    }

                    .img-container.right {
                        float: right;
                        background-image: -webkit-gradient(
                                linear,
                                left top,
                                left bottom,
                                from(transparent),
                                to(transparent)
                            ),
                            url("https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e4529e6a790ac863be7fafb_person-holding-camera-with-lens-facing-towards-man-wearing-a-3206167.png");
                        background-image: linear-gradient(
                                180deg,
                                transparent,
                                transparent
                            ),
                            url("https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e4529e6a790ac863be7fafb_person-holding-camera-with-lens-facing-towards-man-wearing-a-3206167.png");
                    }

                    .cta-section {
                        position: absolute;
                        left: auto;
                        top: 0%;
                        right: 0%;
                        bottom: 0%;
                        display: -webkit-box;
                        display: -webkit-flex;
                        display: -ms-flexbox;
                        display: flex;
                        -webkit-box-orient: vertical;
                        -webkit-box-direction: normal;
                        -webkit-flex-direction: column;
                        -ms-flex-direction: column;
                        flex-direction: column;
                        -webkit-box-pack: center;
                        -webkit-justify-content: center;
                        -ms-flex-pack: center;
                        justify-content: center;
                        -webkit-box-align: start;
                        -webkit-align-items: flex-start;
                        -ms-flex-align: start;
                        align-items: flex-start;
                    }

                    .cta-section.left {
                        left: 0%;
                        top: 0%;
                        right: auto;
                        bottom: 0%;
                    }

                    .project-heading {
                        color: #fff;
                        font-size: 82px;
                        line-height: 87px;
                        font-weight: 900;
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

                    .footer-2 {
                        margin-top: 265px;
                        padding-top: 60px;
                        padding-bottom: 40px;
                        -webkit-box-align: start;
                        -webkit-align-items: flex-start;
                        -ms-flex-align: start;
                        align-items: flex-start;
                        background-color: #fff;
                        text-align: center;
                    }

                    .footer-heading {
                        margin-top: 0px;
                        margin-bottom: 20px;
                        color: #2b2c30;
                        font-size: 16px;
                        line-height: 1.5;
                    }

                    .text-field {
                        width: 390px;
                        height: 60px;
                        border: 1px none #000;
                        background-color: #2b2c30;
                        background-image: url("https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e451aad8e9f314060377566_mail.svg");
                        background-position: 95% 50%;
                        background-size: auto;
                        background-repeat: no-repeat;
                        color: #fff;
                    }

                    .field-label {
                        font-size: 16px;
                    }

                    .rest {
                        display: -webkit-box;
                        display: -webkit-flex;
                        display: -ms-flexbox;
                        display: flex;
                        width: 100%;
                        -webkit-box-pack: justify;
                        -webkit-justify-content: space-between;
                        -ms-flex-pack: justify;
                        justify-content: space-between;
                    }

                    .body {
                        border-style: solid;
                        border-width: 1px;
                        background-color: #fff;
                        color: #2b2c30;
                    }

                    ._100-btn.form {
                        border-style: solid;
                        background-color: #2b2c30;
                        color: #fff;
                    }

                    ._100-btn.form:hover {
                        background-color: transparent;
                        color: #2b2c30;
                    }

                    ._100-btn.final {
                        margin-top: 41px;
                        margin-left: 0px;
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

                    ._100-client-img {
                        -webkit-filter: saturate(0%);
                        filter: saturate(0%);
                    }

                    .heading {
                        font-size: 55px;
                        font-weight: 700;
                    }

                    ._100-link {
                        display: block;
                        margin-top: 78px;
                        color: #2b2c30;
                        font-size: 24px;
                        text-decoration: underline;
                        cursor: pointer;
                    }
                    ._100-light-text {
                        font-weight: 100;
                        margin-left: 10px;
                    }

                    .home {
                        margin-top: 0;
                        display: inline-block;
                        margin-left: 10px;
                        cursor: "pointer";
                    }

                    .div-block {
                        font-size: 24px;
                        line-height: 42.5px;
                        font-weight: 300;
                    }

                    .paragraph {
                        width: 588px;
                        margin-left: 75px;
                    }

                    .footer {
                        display: -webkit-box;
                        display: -webkit-flex;
                        display: -ms-flexbox;
                        display: flex;
                        margin-top: 40px;
                        padding: 37px 42px;
                        -webkit-box-pack: justify;
                        -webkit-justify-content: space-between;
                        -ms-flex-pack: justify;
                        justify-content: space-between;
                        -webkit-box-align: center;
                        -webkit-align-items: center;
                        -ms-flex-align: center;
                        align-items: center;
                        background-color: #2b2c30;
                    }

                    .footer-text {
                        color: #fff;
                    }

                    .body-2 {
                        background-color: transparent;
                    }

                    ._100-hero-section {
                        position: relative;
                        max-width: 1080px;
                        margin-right: auto;
                        margin-left: auto;

                        padding-top: 17%;
                    }

                    .heading-2 {
                        font-size: 270px;
                    }

                    ._100-hero-text {
                        font-size: 270px;
                        line-height: 293px;
                        text-align: center;
                    }

                    .link-continuation {
                        position: absolute;
                        left: 305px;
                        top: 363px;
                        right: 0%;
                        bottom: 0%;
                        font-size: 30px;
                        line-height: 70.5px;
                        font-weight: 300;
                    }

                    ._100-client-container {
                        height: 100%;
                        max-width: 1080px;
                        margin-right: auto;
                        margin-left: auto;
                    }

                    ._100-client-container.flex {
                        display: -webkit-box;
                        display: -webkit-flex;
                        display: -ms-flexbox;
                        display: flex;
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

                    ._100-clients-section-title {
                        margin-top: 0px;
                        margin-bottom: 0px;
                        font-weight: 300;
                    }

                    ._100-projects-section {
                        margin-top: 156px;
                        padding-top: 102px;
                        padding-bottom: 102px;
                        background-color: #f2f2f2;
                    }

                    ._100-cta-section {
                        height: 492px;
                    }

                    .heading-3 {
                        font-size: 47px;
                        font-weight: 900;
                    }

                    .body-3 {
                        background-image: url("https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e786cd31ede362d67bc8e31_LIGHT%201.png");
                        background-position: 100% 0%;
                        background-size: auto;
                        background-repeat: no-repeat;
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
                        ._100-container {
                            padding-right: 28px;
                            padding-left: 28px;
                        }
                        ._100-btn {
                            margin-left: 81px;
                        }

                        .nav-container {
                            max-width: none;
                            padding-right: 28px;
                            padding-left: 28px;
                        }
                        .body-3 {
                            background-image: none;
                        }

                        .cta-section {
                            right: 7%;
                        }

                        .cta-section.left {
                            left: 7%;
                        }

                        .project-heading {
                            font-size: 71px;
                        }

                        .footer-flex-container {
                            -webkit-box-orient: horizontal;
                            -webkit-box-direction: normal;
                            -webkit-flex-direction: row;
                            -ms-flex-direction: row;
                            flex-direction: row;
                            -webkit-box-pack: start;
                            -webkit-justify-content: flex-start;
                            -ms-flex-pack: start;
                            justify-content: flex-start;
                            -webkit-box-align: stretch;
                            -webkit-align-items: stretch;
                            -ms-flex-align: stretch;
                            align-items: stretch;
                        }

                        .nav {
                            width: 87%;
                        }

                        .footer-2 {
                            padding-right: 20px;
                            padding-left: 20px;
                        }

                        .rest {
                            display: -webkit-box;
                            display: -webkit-flex;
                            display: -ms-flexbox;
                            display: flex;
                            width: 91%;
                            -webkit-box-orient: horizontal;
                            -webkit-box-direction: normal;
                            -webkit-flex-direction: row;
                            -ms-flex-direction: row;
                            flex-direction: row;
                            -webkit-box-pack: justify;
                            -webkit-justify-content: space-between;
                            -ms-flex-pack: justify;
                            justify-content: space-between;
                            -webkit-box-align: stretch;
                            -webkit-align-items: stretch;
                            -ms-flex-align: stretch;
                            align-items: stretch;
                        }

                        .heading {
                            font-size: 50px;
                        }

                        ._100-link {
                            font-size: 20px;
                        }

                        .paragraph {
                            width: 370px;
                            margin-left: 0px;
                            font-size: 20px;
                            text-align: right;
                        }

                        ._100-hero-section {
                            padding-right: 31px;
                            padding-left: 31px;
                        }

                        ._100-hero-text {
                            font-size: 169px;
                        }

                        ._100-client-container {
                            padding-right: 22px;
                            padding-left: 30px;
                        }

                        .body-3 {
                            background-image: none;
                        }
                    }

                    @media screen and (max-width: 767px) {
                        .footer-image {
                            -o-object-fit: contain;
                            object-fit: contain;
                        }

                        .footer-2 {
                            padding: 40px 20px;
                        }
                        ._100-nav-link {
                            margin-left: 36px;
                            font-size: 17px;
                        }
                        ._100-btn {
                            margin-left: 36px;
                        }
                        .rest {
                            -webkit-box-orient: vertical;
                            -webkit-box-direction: reverse;
                            -webkit-flex-direction: column-reverse;
                            -ms-flex-direction: column-reverse;
                            flex-direction: column-reverse;
                            -webkit-box-pack: justify;
                            -webkit-justify-content: space-between;
                            -ms-flex-pack: justify;
                            justify-content: space-between;
                            -webkit-box-align: start;
                            -webkit-align-items: flex-start;
                            -ms-flex-align: start;
                            align-items: flex-start;
                        }

                        ._100-btn {
                            margin-left: 36px;
                        }

                        ._100-client {
                            grid-row-gap: 40px;
                            -ms-grid-columns: 1fr 1fr;
                            grid-template-columns: 1fr 1fr;
                        }

                        .paragraph {
                            margin-top: 25px;
                            margin-left: 0px;
                            font-size: 20px;
                            line-height: 37px;
                            text-align: left;
                        }

                        ._100-hero-text {
                            font-size: 120px;
                        }

                        ._100-client-container {
                            padding-right: 0px;
                            padding-left: 27px;
                        }
                    }

                    @media screen and (max-width: 479px) {
                        ._100-container {
                            padding-right: 0px;
                            padding-left: 0px;
                        }

                        .nav-container {
                            padding-right: 7px;
                            padding-left: 7px;
                        }

                        .img-container {
                            width: 100%;
                        }

                        .cta-section {
                            position: absolute;
                            left: 0%;
                            top: auto;
                            right: 0%;
                            bottom: -17%;
                            -webkit-box-align: center;
                            -webkit-align-items: center;
                            -ms-flex-align: center;
                            align-items: center;
                        }
                        ._100-btn {
                            margin-left: 0px;
                            font-size: 16px;
                        }

                        .cta-section.left {
                            left: 0%;
                            top: auto;
                            right: 0%;
                            bottom: -17%;
                        }

                        .project-heading {
                            font-size: 51px;
                        }

                        .footer-flex-container {
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

                        .footer-logo-link {
                            height: 60px;
                        }

                        .nav {
                            width: 100%;
                            margin-top: 100px;
                            padding-right: 0px;
                            -webkit-justify-content: space-around;
                            -ms-flex-pack: distribute;
                            justify-content: space-around;
                            background-color: #f2f2f2;
                        }

                        .footer-2 {
                            padding-right: 20px;
                            padding-left: 20px;
                            text-align: left;
                        }

                        .footer-heading {
                            margin-top: 20px;
                        }

                        .text-field {
                            width: 260px;
                        }

                        ._100-client {
                            -ms-grid-columns: 1fr;
                            grid-template-columns: 1fr;
                        }

                        .heading {
                            font-size: 40px;
                        }

                        .paragraph {
                            width: auto;
                            margin-top: 40px;
                            margin-left: 0px;
                        }

                        ._100-nav-link {
                            margin-left: 0px;
                            font-size: 16px;
                        }

                        ._100-hero-section {
                            margin-top: 66%;
                        }

                        ._100-hero-text {
                            font-size: 60px;
                        }

                        ._100-client-container {
                            padding-right: 21px;
                            padding-left: 21px;
                        }

                        ._100-clients-section-title {
                            text-align: center;
                        }

                        .heading-3 {
                            text-align: center;
                        }
                    }
                `}
            </style>
        </Layout>
    )
}

export default IndexPage
