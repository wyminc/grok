import React, {Component} from 'react';
import { connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {Template} from '../../NewCard/NewCardForm/Template.jsx';
import {FrontPreview, BackPreview} from '../../NewCard/NewCardForm/TemplatePreview.jsx';

class EditCardForm extends Component {
    constructor(prop) {
        super(props)
        this.state = {

        }
    }

    componentDidMount = () => {
        console.log('EditCardForm componentDidMount this.state: ', this.state)
        console.log('EditCardForm componentDidMount this.props: ', this.props)
        // get info of specific card 
    }



    // handleChange = (event) => {
    //     event.preventDefault();
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     })
    //     console.log('EditCardForm handleChange state: ', this.state)
    // }

    // handleSubmit = (event) => {
    //     const { user } = this.props.authInfo;
    //     const body = { ...this.state };
    //     delete body.previous;
    //     delete body.next;
    //     delete body.toWallet;
    //     console.log('EditCardForm handleSubmit state: ', this.state);
    //     this.props.dispatch(newCardData(user, body))
    //     this.setState({
    //         next: true
    //     })
    // }

    // chosenTemplate = (style) => {
    //     console.log('chosen template: ', style)
    //     this.props.dispatch(newCardCss(style))
    // }

    // postCard = (body) => {
    //     body.users = [];
    //     body.is_deleted = false;
    //     let newStyle = {};
    //     for (var key in body.css) {
    //         newStyle[key] = JSON.stringify(body.css[key])
    //     }
    //     body.css = newStyle
    //     this.props.dispatch(newCard(body))
    //     this.setState({
    //         toWallet: true
    //     })
    // }



    render() {
        console.log("EditCardForm this.props", this.props)

        if (this.state.toWallet === true) {
            return <Redirect to='/wallet' />
        }

        return (
            <div>
                {this.state.next === false ? (
                    <div className="edit-form-container">
                        <div className="edit-form" >
                            <div className="edit-field">
                                <input 
                                    onChange={this.handleChange} 
                                    type="text" 
                                    placeholder="" 
                                    name="company_name" 
                                />
                            </div>
                            <div className="edit-field">
                                <input 
                                    onChange={this.handleChange} 
                                    type="text" 
                                    placeholder="" 
                                    name="name" 
                                />
                            </div>
                            <div className="edit-field">
                                <input 
                                    onChange={this.handleChange} 
                                    type="text" 
                                    placeholder="" 
                                    name="title" 
                                />
                            </div>
                            <div className="edit-field">
                                <input 
                                    onChange={this.handleChange} 
                                    type="text" 
                                    placeholder="" 
                                    name="address" 
                                />
                            </div>
                            <div className="edit-field">
                                <input 
                                    onChange={this.handleChange} 
                                    type="text" 
                                    placeholder="" 
                                    name="phone" 
                                />
                            </div>
                            <div className="edit-field">
                                <input 
                                    onChange={this.handleChange} 
                                    type="text" 
                                    placeholder="" 
                                    name="email" 
                                />
                            </div>
                            {/* <div className="previous">
                            <button>PREVIOUS</button>
                        </div> */}
                            <div className="next">
                                <button onClick={this.handleSubmit}> NEXT </button>
                            </div>
                        </div>
                    </div>
                ) : (
                        <div className="edit-design-form-container">
                            <div className="template-options-container">
                                <Template
                                    // style={template1}
                                    // chosenTemplate={this.chosenTemplate}
                                />
                            </div>
                            <div className="card-preview-container">
                                <div className="back-view">
                                    <BackPreview
                                        // style={this.props.addInfo.css}
                                        // data={this.props.addInfo.data}
                                    />
                                </div>
                                <div 
                                    className="front-view" 
                                    style={this.props.addInfo.css}>
                                        <FrontPreview
                                        // style={this.props.addInfo.css}
                                        // data={this.props.addInfo.data}
                                    />
                                </div>
                            </div>
                            <div className="done">
                                <button onClick={() => { this.postCard(this.props.addInfo) }}> DONE </button>
                            </div>
                        </div>
                    )}
            </div>
        )
    }
}

// const mapStateToProps = state => {

// }

export default EditCardForm;
// export default connect(mapStateToProps)(EditCardForm);