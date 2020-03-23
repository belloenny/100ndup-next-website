import * as React from "react"
import Layout from "../components/Layout"
import { NextPage } from "next"
import styled from "styled-components"
import { ClientSection } from "../components/ClientsSection"

const Section = styled.section`
    margin-top: 300px;
`
const AboutSection = styled.section`
    height: 457px;
    margin-top: 218px;
    margin-right: auto;
    margin-left: auto;
    max-width: 1080px;
    display: grid;
    grid-template-columns: 0.5fr 3fr;
    grid-gap: 0px 38px;
    p {
        font-size: 20.9px;
        font-weight: 100;
        margin-top: 0px;
    }
    @media screen and (max-width: 991px) {
        padding: 0 20px 0 20px;
    }
    @media screen and (max-width: 767px) {
        grid-template-columns:1fr;
    }
    @media screen and (max-width: 479px) {
        padding: 0 10px 0 10px;
    }
`
const Container = styled.div`
    margin-right: auto;
    margin-left: auto;
    max-width: 1080px;
    @media screen and (max-width: 991px) {
        padding: 0 20px 0 20px;
    }
    
    @media screen and (max-width: 479px) {
    }
`
const Header = styled.h1`
    font-size: 50px;
    line-height: 70px;
    font-weight: 400;
    @media screen and (max-width: 991px) {
    }
    @media screen and (max-width: 767px) {
        font-size: 46px;
    }
    @media screen and (max-width: 479px) {
        font-size: 36.9px;
    }
`
const Paragraph = styled.p`
    font-weight: 100;
    font-size: 30.9px;
    @media screen and (max-width: 991px) {
    }
    @media screen and (max-width: 767px) {
        font-size: 26.9px;
    }
    @media screen and (max-width: 479px) {
        font-size: 20.9px;
    }
`
const Qualities = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px 30px;
    h2 {
        font-size: 31.9px;
        line-height: 40.5px;
        max-width: 169px;
        font-weight: 400;
    }
    p {
        font-size: 19.72px;
        line-height: 30.5px;
    }
    @media screen and (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`
const AboutPage: NextPage = () => {
    return (
        <Layout>
            <Section>
                <Container>
                    <Header>
                        We help modern brands stand out through creativity and
                        craft.
                        <Paragraph>
                            100ndup creates impactful digital experiences that
                            attract and engage.
                        </Paragraph>
                    </Header>
                </Container>
            </Section>
            <AboutSection>
                <p>
                    About Us
                    <img
                        src="/static/Line 1.png"
                        style={{ marginLeft: 16, marginBottom: 5 }}
                    ></img>
                </p>
                <Qualities>
                    <div>
                        <h2>Hands on Approach</h2>
                        <p>
                            We have a hands on approach with our clients
                            involving them in every stage of the creative
                            process to give them some insights on how we work
                        </p>
                    </div>
                    <div>
                        <h2>Creators at The Core</h2>
                        <p>
                            Production and craftsmanship is at our core: we’re
                            hands-on and equipped with the digital tools and
                            skills to make anything a reality. If it can be
                            dreamt, we can bring it to life.
                        </p>
                    </div>
                    <div>
                        <h2>Swift</h2>
                        <p>
                            Our collective expertise means we do everything
                            under one roof – from concept to final product,
                            client services to creative production – in less
                            time than it takes the big guys.
                        </p>
                    </div>
                    <div>
                        <h2>UX Oriented</h2>
                        <p>
                            Award-winning UX and design are guiding principles
                            in our approach, which ensures memorable creative
                            and lasting engagement. Put simply, our work gets
                            the right people talking.
                        </p>
                    </div>
                </Qualities>
                
            </AboutSection>
            <ClientSection/>
            
            <style jsx>{``}</style>
        </Layout>
    )
}

export default AboutPage
