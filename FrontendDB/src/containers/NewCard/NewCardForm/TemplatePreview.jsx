import React from 'react';

export const BackPreview = (props) => {
    return (
        <div 
            className="front-preview" 
            style={props.style.back}
        >
            <div 
            className="company" 
            style={props.style.company}
            >
            <h1>{props.data.company_name} </h1>
            </div>
        </div>
    )
}

export const FrontPreview = (props) => {
    return (
        <div 
            className="back-preview" 
            style={props.style.front}
        >
            <div className={props.info} style={props.style.info}>
                <div >
                   <h1> {props.data.name} </h1>
                </div>
                <div >
                    {props.data.title}
                </div>
                <div >
                    {props.data.address}
                </div>
                <div >
                    {props.data.phone}
                </div>
                <div >
                    {props.data.email}
                </div>
            </div>
        </div>
    )
}