import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Template } from './Template.jsx';
import { template1 } from './CardCssTemplates.js';
import { FrontPreview, BackPreview } from './TemplatePreview.jsx';
import { newCardData, newCardCss, newCard } from '../../../actions/actions.js';

import './NewCardForm.css';


class NewCardForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            company_name: "",
            name: "",
            title: "",
            address: "",
            phone: "",
            email: "",
            previous: false,
            next: false,
            toWallet: false
        }
    }

    componentDidMount = () => {
        console.log('adding new card info - this.state: ', this.state)
        console.log('what is ... this.props: ', this.props)
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
        console.log('what is this ... add event state: ', this.state)
    }

    handleSubmit = (event) => {
        const { user } = this.props.authInfo;
        const body = { ...this.state };
        delete body.previous;
        delete body.next;
        delete body.toWallet;
        console.log('adding new card info - handleSubmit: ', this.state);
        this.props.dispatch(newCardData(user, body))
        this.setState({
            next: true
        })
    }


    chosenTemplate = (style) => {
        console.log('chosen template: ', style)
        this.props.dispatch(newCardCss(style))
    }

    postCard = (body) => {
        body.users = [];
        body.is_deleted = false;
        let newStyle = {};
        for (var key in body.css) {
            newStyle[key] = JSON.stringify(body.css[key])
        }
        body.css = newStyle
        this.props.dispatch(newCard(body))
        this.setState({
            toWallet: true
        })
    }

    render() {
        console.log("info form this.props before return", this.props)

        if (this.state.toWallet === true) {
            return <Redirect to='/wallet' />
        }

        return (
            <div>
                {this.state.next === false ? (
                    <div className="info-form-container">
                        <div className="info-form" >
                            <div className="info-field">
                                <input onChange={this.handleChange} type="text" placeholder="Company Name" name="company_name" value={this.state.company_name} />
                            </div>
                            <div className="info-field">
                                <input onChange={this.handleChange} type="text" placeholder="Name" name="name" />
                            </div>
                            <div className="info-field">
                                <input onChange={this.handleChange} type="text" placeholder="Title" name="title" />
                            </div>
                            <div className="info-field">
                                <input onChange={this.handleChange} type="text" placeholder="Address" name="address" />
                            </div>
                            <div className="info-field">
                                <input onChange={this.handleChange} type="text" placeholder="Phone Number" name="phone" />
                            </div>
                            <div className="info-field">
                                <input onChange={this.handleChange} type="text" placeholder="Email" name="email" />
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
                        <div className="design-form-container">
                            <div className="template-options-container">
                                <Template
                                    style={template1}
                                    chosenTemplate={this.chosenTemplate}
                                />
                            </div>
                            <div className="card-preview-container">
                                <div className="back-view">
                                    <BackPreview
                                        style={this.props.addInfo.css}
                                        data={this.props.addInfo.data}
                                    />
                                </div>
                                <div className="front-view" style={this.props.addInfo.css}>
                                    <FrontPreview
                                        style={this.props.addInfo.css}
                                        data={this.props.addInfo.data}
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


const mapStateToProps = state => {
    console.log("info form state/store", state)
    return {
        authInfo: state.authInfo,
        addInfo: state.addInfo
    }
}

export default connect(mapStateToProps)(NewCardForm);