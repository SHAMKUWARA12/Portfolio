import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [collapse, setCollapse] = useState(false);
    const toggle = () => {
        console.log("Clicked!!")
        setCollapse(!collapse);
    }

    return (
        <>
            <section className='navbar'>
                <div className='navlogo'>
                    <h2><span>Ayush</span><br />Shamkuwar</h2>
                </div>

                {/* <div className='resnavelements'> */}
                <div className={collapse?'resnavelements':'navelements'}>
                    <Link activeClass='active' to="About" spy={true} smooth={true} offset={-200} duration={500} className='navelement' onClick={toggle}>Home</Link>
                    <Link activeClass='active' to="AboutPartTwo" spy={true} smooth={true} offset={-150} duration={500} className='navelement' onClick={toggle}>About</Link>
                    <Link activeClass='active' to="projects" spy={true} smooth={true} offset={-150} duration={500} className='navelement' onClick={toggle}>Portfolio</Link>
                    <Link activeClass='active' to="contact" spy={true} smooth={true} offset={-100} duration={500} className='navelement' onClick={toggle}>Contact</Link>
                </div>
                
                <div className='navbtn navbtnres' onClick={()=>{
                    document.getElementById('contact').scrollIntoView({behaviour:"smooth"});
                }}>
                    <button>Hire Me!</button>
                </div>


                <div className="navbartoggle" onClick={toggle}>
                    <MenuIcon />
                </div>



            </section>
        </>
    )
}

export default Navbar

