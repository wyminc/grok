import React, {Component} from 'react';
import {connect} from 'react-redux';
import './InfoForm.css';

import {newCardData} from '../../../actions/actions.js';


class InfoForm extends Component {
    constructor(props) {
        super (props)
        this.state = {
            company_name: "",
            name: "",
            title: "",
            address: "",
            phone: "",
            email: ""
        }
    }
    
    componentDidMount =() => {
        console.log('adding new card info - this.state: ', this.state)
        console.log('what is ... this.props: ', this.props )
    }

    handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        // console.log('what is ... event.target: ', event.target)
        // console.log('what is the event.target name? ', name)
        // console.log('what is the event.target value? ', value)
        this.setState({
            [name]: value
        })
            console.log('what is this ... add event state: ', this.state)
        } 

        handleSubmit = (event) => {
            const { user } = this.props.authInfo;
            console.log('adding new card info - submit: ', this.state);
            event.preventDefault();
            this.props.dispatch(newCardData(user,this.state))
        }

    render(){
        return (    
            <div className="info-form-container">
                <div className="info-form">
                    <form action="">
                        <div className="info-field">
                            <input onChange={this.handleChange} type="text" placeholder="Company Name" name="company_name" value={this.state.company_name}/>
                        </div>
                        <div className="info-field">
                            <input onChange={this.handleChange} type="text" placeholder="Name" name="name"/>
                        </div>
                        <div className="info-field">
                            <input onChange={this.handleChange} type="text" placeholder="Title" name="title"/>
                        </div>
                        <div className="info-field">
                            <input onChange={this.handleChange} type="text" placeholder="Address" name="address"/>
                        </div>
                        <div className="info-field">
                            <input onChange={this.handleChange} type="text" placeholder="Phone Number" name="phone"/>
                        </div>
                        <div className="info-field">
                            <input onChange={this.handleChange} type="text" placeholder="Email" name="email"/>
                        </div>
                        <div className="submit">
                            <input onClick={this.handleSubmit} type="submit" value="NEXT"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        authInfo: state.authInfo,
        addInfo: state.addInfo
    }
}


export default connect(mapStateToProps)(InfoForm)