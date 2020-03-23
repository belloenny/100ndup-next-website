import * as React from 'react'

export const Footer: React.FC = ({}) => {
    return (
        <React.Fragment>
            <div className="footer">
                    <img
                        src="https://uploads-ssl.webflow.com/5e3fd2b4289861757914c9d9/5e3fdc9eb8df23ee99a8a3cb_Logo-1%20Copy.svg"
                        alt=""
                    />
                    <p className="footer-text">2020 Ounjey,</p>
                </div>
                <style jsx>{`
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

 
                    
                `}</style>
        </React.Fragment>
    )
}