import React from 'react';
// import {template1} from './CardCssTemplates.js';

export const Template = (props) => {
    console.log('template props', props)
    return props.templates.map( styles => 
        <div className="template" style={props.styles.back} onClick={() => {props.chosenTemplate(props.styles)}}>
            
        </div>
    )
}
