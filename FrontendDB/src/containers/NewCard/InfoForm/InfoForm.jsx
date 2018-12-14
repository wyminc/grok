import React, {Component} from 'react';
import {connect} from 'react-redux';
import './InfoForm.css';

import {newCardData} from '../../../actions/actions.js';
import { strictEqual } from 'assert';
// import {getAllCards} from '../../../actions/actions.js';


class InfoForm extends Component {
    constructor(props) {
        super (props)
        this.state = {
            company_name: "",
            name: "",
            address: "",
            phone: "",
            email: ""
        }
    }
    
    componentDidMount =() => {
        // const {id} = this.props.match.params;
        console.log('adding new card info - this.state: ', this.state)
        // this.props.dispatch(addNewCardInfo(this.state))
        console.log('what is ... this.props: ', this.props )
    }

    handleChange = (event) => {
        // const target = event.target;
        // const value = target.value;
        // const name = target.name;
        // console.log('event target value: ', value)
        // console.log('event target name: ', name)
        event.preventDefault();
        const {name, value} = event.target;
        console.log('what is ... event.target: ', event.target)
        console.log('what is the event.target name? ', name)
        console.log('what is the event.target value? ', value)
        this.setState({
            [name]: value
        })
            console.log('what is this ... add event state: ', this.state)
        } 

        handleSubmit = (event) => {
            console.log('adding new card info - submit: ', this.props);
            event.preventDefault();
            // addNewCardInfo(this.state)
            this.props.dispatch(newCardData(this.state))
        }


    render(){
        return (    
            <div className="info-form-container">
                <div className="info-form">
                    <form action="/add" method="POST" onSubmit={this.handleSubmit}>
                        <div className="info-field">
                            <input onChange={this.handleChange} type="text" placeholder="Company Name" name="company_name" value={this.state.company_name}/>
                        </div>
                        <div className="info-field">
                            <input onChange={this.handleChange} type="text" placeholder="Name" name="name"/>
                        </div>
                        <div className="info-field">
                            <input onChange={this.handleChange} type="text" placeholder="Address" name="address"/>
                            {/* <textarea name="Address" placeholder="Address" id="" cols="18" rows="5"></textarea> */}
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
    console.log('mapStateToProps State', state)
    console.log('all cards', state.addInfo)
    return {
        // isAuthenticated: state.isAuthenticated,
        addInfo: state.addInfo
    }
}


export default connect(mapStateToProps)(InfoForm)
// export default InfoForm