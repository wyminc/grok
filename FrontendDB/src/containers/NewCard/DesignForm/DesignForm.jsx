import React, {Component} from 'react';
import './DesignForm.css';
import {connect} from 'react-redux';

import {Template} from './TemplateSelector.jsx';
import {template1} from './CardCssTemplates.js';

import {newCardCss} from '../../../actions/actions.js';

// import {Card} from '../../../CardComponent/CardComponent.jsx'

class DesignForm extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    chosenTemplate = (style) => {
        this.props.dispatch(newCardCss(style))
    }

    render() {
        return (
            <div className="design-form-container">
                <div className="template-options-container">
                    <Template 
                        style={template1}
                        // On Click - want to dispatch the template css to the addInfo 
                        chosenTemplate={this.chosenTemplate}
                        // onClick={this.props.dispatch(chosenTemplate())}
                    />
                </div>
                <div className="card-preview-container">
                    <div className="front-view">

                    </div>
                    <div className="back-view">


                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        addInfo: state.addInfo
    }
}

export default connect(mapStateToProps)(DesignForm);