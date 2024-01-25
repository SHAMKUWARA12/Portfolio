import React from 'react';
import SkillsData from './SkillsData';

const Skills = () => {
    return (
        <>
            <section id='skills'>
                <div className='container my-5'>
                    <h1 className='text-center about'>My Skills</h1>
                    <div className="row">
                        {SkillsData.map((value, index) => (
                            <div key={index} className='col-6 col-md-4 text-center g-5'>
                                <img src={value.img} alt="img" className='imgdiv' />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills
