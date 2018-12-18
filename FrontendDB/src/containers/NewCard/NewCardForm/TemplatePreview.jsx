import React from 'react';

export const BackPreview = (props) => {
    return (
        <div 
            className="front-preview" 
            style={props.style.front}
        >
            <div 
            className="company" 
            style={props.style.company}
            >
            {props.data.company_name}
            </div>
        </div>
    )
}

export const FrontPreview = (props) => {
    return (
        <div 
            className="back-preview" 
            style={props.style.back}
        >
            <div className={props.info} style={props.style.info}>
                <div >
                    {props.data.name}
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