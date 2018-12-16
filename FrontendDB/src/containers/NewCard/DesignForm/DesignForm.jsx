import React, {Component} from 'react';
import './DesignForm.css';
import {connect} from 'react-redux';

import {Template} from './TemplateSelector.jsx';
import {template1} from './CardCssTemplates.js';
// import {FrontPreview} from './TemplatePreview.jsx';
// import {cardContainer, front, title, back, info, name, address, phone, email} from '../../../CardComponent/CardClassing.js';

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
                        chosenTemplate={this.chosenTemplate}
                    />
                </div>
                <div className="card-preview-container">
                    <div className="front-view">
                        {/* <FrontPreview 
                            style={this.props.css}
                            // cardContainer={cardContainer} 
                            // front={front}
                            // title={title}
                            // back={back}
                            // info={info}
                            // name={name}
                            // address={address}
                            // phone={phone}
                            // email={email}
                            // data={this.props.addInfo.data}
                        /> */}
                    </div>
                    <div className="back-view" style={this.props.addInfo.css}>
                        {/* <BackPreview 
                        
                        /> */}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    // console.log("design form add Info", addInfo);
    console.log("design form state", state)
    return {
        addInfo: state.addInfo
    }
}

export default connect(mapStateToProps)(DesignForm);