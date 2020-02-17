import React from 'react'


const Navbar: React.FC = () => {
    return (
        <React.Fragment>
            <div className="nav-container">
                <img src="https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e451aadd5d7212ede31d0c6_Logo-1.svg" width="51" alt=""/>
                <nav role="navigation" className="nav-menu">
                    <a href="#" className="nav-link ">Home</a>
                    <a href="#" className="nav-link">About</a>
                    <a href="#" className="cta-btn">Contact Us</a>
                </nav>
                <div className="nav-button">

                </div>
            </div>
            <style jsx>
                {`
                    nav {
                        color: ''
                    }
                    .nav-container {
                        max-width: 1080px;
                        margin: 0 auto;
                    }
                    .nav-button {
                        position: relative;
                        float: right;
                        padding: 18px;
                        font-size: 24px;
                        display: none;
                        cursor: pointer;
                        -webkit-tap-highlight-color: rgba(0,0,0,0);
                        tap-highlight-color: rgba(0,0,0,0);
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                        user-select: none;
                    }
                    .nav-menu {
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
                        position: relative;
                        float: right;
                    }
                    .nav-link {
                        margin-right: 36px;
                        color: #fff;
                        font-size: 20px;
                        line-height: 23px;
                        font-weight: 300;
                        position: relative;
                        display: inline-block;
                        vertical-align: top;
                        text-decoration: none;
                        color: #222222;
                        padding: 20px;
                        text-align: left;
                        margin-left: auto;
                        margin-right: auto;
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
                        text-decoration: none;
                        cursor: pointer;
                        border-radius: 0;
                        color: white;
                        border: 0;
                        display: inline-block;
                    }
                    
                `}
            </style>
        </React.Fragment>
    )
}


export default Navbar