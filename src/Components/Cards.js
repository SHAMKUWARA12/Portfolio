import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';



const Cards = (props) => {
    return (
        <>
            <div className="card mycard">
                <img className="card-img-top cardimg" src={props.img} alt="Cardimagecap" />
                <div className="card-body">
                    <h5 className="card-title my-2">{props.title}</h5>
                    <a href={props.link} target="_blank" rel="noreferrer" className="btn btn-outline-light ">Visit Link</a>
                </div>
            </div>
        </>
    )
}

export default Cards