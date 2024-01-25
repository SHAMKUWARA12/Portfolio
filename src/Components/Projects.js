import React from 'react';
import ProjectData from './ProjectData';
import Cards from './Cards';

const Projects = () => {
    return (
        <>
            <section id='projects'>
                <div className='container myproj'>
                <h1 className='text-center about'>My Projects</h1>
                    <div className='row'>
                        {
                            ProjectData.map((value, index) => {
                                return (
                                    <>
                                        <div className='col-md-4 g-5'>
                                            <Cards
                                                key={index}
                                                img={value.img}
                                                title={value.title}
                                                link={value.link}
                                            />
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects