import React from 'react';
// import {template1} from './CardCssTemplates.js';

export const Template = (props) => {
    return (
        <div className="template" style={props.style.back} onClick={() => {props.chosenTemplate(props.style)}}>
            
        </div>
    )
}
