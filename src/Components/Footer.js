import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {
    const date = new Date().getFullYear();
    const iconStyle = {
        fontSize: '24px',
    };

    return (
        <>
            <div className="pt-3">
                <footer className="text-center">
                        <div className="container  pb-0">

                            <div className="btns">
                                <a className="iconbtn m-4" href="https://www.linkedin.com/in/ayush-shamkuwar" rel="noreferrer" target="_blank" role="button" style={iconStyle}><LinkedInIcon /></a>
                                <a className="iconbtn m-4" href="https://github.com/" rel="noreferrer" target="_blank" role="button" style={iconStyle}><GitHubIcon /></a>
                            </div>

                        </div>
                        <div class="fs-4 mt-3">
                            <p>&copy; {date} Copyright: <span style={{ fontSize: "1.8rem" }}>Ayush Shamkuwar</span></p>
                        </div>
                </footer>
            </div>
        </>
    )
}
export default Footer