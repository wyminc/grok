import React, {Component} from 'react';
import './DesignForm.css';
import {Template} from './TemplateSelector.jsx';
import {template1} from './CardCssTemplates.js';

// import {Card} from '../../../CardComponent/CardComponent.jsx'

class DesignForm extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="design-form-container">
                <div className="template-options-container">
                    <Template 
                        style={template1}
                    />
                </div>
                <div className="card-preview-container">
                    <div className="front-view">

                    </div>3
                    <div className="back-view">


                    </div>
                </div>
            </div>
        )
    }
}

export default DesignForm;