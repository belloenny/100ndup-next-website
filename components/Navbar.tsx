import React from "react"
import {
    NavContainer,
    NavMenu,
    NavLink,
    NavButton,
    CTAButton
} from "./styledComponents/NavbarStyles"
import Link from "next/link"
const Navbar: React.FC = () => {
    return (
        <React.Fragment>
            <NavContainer>
                <Link href="/">
                    <img
                        src="https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e451aadd5d7212ede31d0c6_Logo-1.svg"
                        width="51"
                        alt=""
                        style={{cursor:"pointer"}}
                    />
                </Link>
                <NavMenu role="navigation">
                    <Link href="#">
                        <NavLink>Home</NavLink>
                    </Link>
                    <Link href="/about">
                        <NavLink>About</NavLink>
                    </Link>
                    <CTAButton href="#">Contact Us</CTAButton>
                </NavMenu>
                <NavButton></NavButton>
            </NavContainer>
            <style jsx>
                {`
                    nav {
                        color: "";
                    }
                `}
            </style>
        </React.Fragment>
    )
}

export default Navbar
