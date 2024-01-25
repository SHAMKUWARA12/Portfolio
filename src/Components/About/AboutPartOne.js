import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const AboutPartOne = () => {
    return (
        <>
            <section id='About'>
                <div className='container mt-3'>
                    <div className='row py-5 myabout'>
                        <div className='py-5 col-12 col-lg-10 mx-auto'>
                            <h2>Hi,</h2>
                            <h1>I'm <span>Ayush</span>,</h1>
                            <h1 className='rainbow'>Frontend Developer</h1>
                            <p> I'm skilled in Front-End development, committed to creating engaging and dynamic web experiences.</p>
                            <div className='navbtn mt-4'>
                                {/* <button>Download CV</button> */}
                                <a className="iconbtn m-4" href="https://www.linkedin.com/in/ayush-shamkuwar" rel="noreferrer" target="_blank" role="button" ><LinkedInIcon /></a>
                                <a className="iconbtn m-4" href="https://github.com/" rel="noreferrer" target="_blank" role="button" ><GitHubIcon /></a>

                                <button onClick={()=>{
                                    document.getElementById('contact').scrollIntoView({behavior:"smooth"})
                                }}>Contact Info</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutPartOne