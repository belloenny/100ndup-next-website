import * as React from "react"
import Layout from "../components/Layout"
import { NextPage } from "next"
import styled from "styled-components"

const FormSection = styled.section`
    margin-top: 180px;
`
const FormContainer = styled.div`
    margin-right: auto;
    margin-left: auto;
    max-width: 980px;
    padding: 0 80px;
`
const PageTitle = styled.h1`
    font-size: 55px;
    font-weight: 700;
    text-align: center;
`
const Form = styled.form`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    input {
        border-radius: 4px;
        border: 0.5px solid #000000;
        height: 64px;
    }
    label {
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 30px;
        margin-top: 60px;
    }
    textarea {
        border-radius: 4px;
        border: 0.5px solid #000000;
        height: 200px;
        margin-bottom: 80px;
    }
    button {
        border-style: solid;
        background-color: #2b2c30;
        border-radius: 4px;
        width: 100%;
        height: 44px;
        color: #fff;
        -webkit-transition: color 500ms ease, background-color 200ms ease-in-out;
        transition: color 500ms ease, background-color 200ms ease-in-out;
        font-size: 20px;
        font-weight: 300;
        display: inline-block;
        border: 0.5px;
        margin: 0;
        text-decoration: none;
    }

    button:hover {
        background-color: transparent;
        color: #2b2c30;
        border: 0.5px solid #000000;
    }
`

const ContactPage: NextPage = ({}) => {
    return (
        <Layout>
            <FormSection>
                <FormContainer>
                    <PageTitle>Contact Us</PageTitle>
                    <Form>
                        <label>Name</label>
                        <input />
                        <label>Email</label>
                        <input />
                        <label>ProjectType</label>
                        <input />
                        <label>Message</label>
                        <textarea />
                        <button>Submit</button>
                    </Form>
                </FormContainer>
            </FormSection>
        </Layout>
    )
}

export default ContactPage
