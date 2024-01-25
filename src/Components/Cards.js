import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';



const Cards = (props) => {
    return (
        <>
            <div className="card mycard">
                <img className="card-img-top imgdiv" src={props.img} alt="Cardimagecap" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <a href={props.link} target="_blank" rel="noreferrer" className="btn btn-primary ">Visit Link</a>
                </div>
            </div>
        </>
    )
}

export default Cards