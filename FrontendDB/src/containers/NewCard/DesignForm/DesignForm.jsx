import React, {Component} from 'react';
import './DesignForm.css';

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
                {/* NOTE: dropdown options vs. button options */}
                    {/* <select name="design-templates" id="design-templates">
                        <option value="option-1">
                            OPTION 1
                        </option>
                        <option value="option-2">
                            OPTION 2
                        </option>
                        <option value="option-3">
                            OPTION 3
                        </option>
                        <option value="option-4">
                            OPTION 4
                        </option>
                        <option value="option-5">
                            OPTION 5
                        </option>
                        <option value="option-6">
                            OPTION 6
                        </option>
                        <option value="option-7">
                            OPTION 7
                        </option>
                        <option value="option-8">
                            OPTION 8
                        </option>
                        <option value="option-9">
                            OPTION 9
                        </option>
                        <option value="option-10">
                            OPTION 10
                        </option>
                    </select> */}
                </div>
                <div className="card-preview-container">
                    <div className="front-view">
                        <div className="company_name">
                        </div>
                    </div>
                    <div className="back-view">


                    </div>
                </div>
            </div>
        )
    }
}

export default DesignForm;