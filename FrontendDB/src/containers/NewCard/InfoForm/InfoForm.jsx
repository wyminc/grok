import React, {Component} from 'react';
import {connect} from 'react-redux';
import './InfoForm.css';

import {addNewCardInfo} from '../../../actions/actions.js';
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
        console.log('adding new card info', this.state)
        this.props.dispatch(addNewCardInfo(this.state))
        console.log('what is ... this.props.history: ', this.props.history )
    }

    handleChange = (event) => {
        // const target = event.target;
        // const value = target.value;
        // const name = target.name;
        // console.log('event target value: ', value)
        // console.log('event target name: ', name)
        event.preventDefault();
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
            console.log('event state', this.state)
        }

        handleSubmit = (event) => {
            console.log('adding new card info - submit: ', this.props);
            event.preventDefault();
            // this.props.addNewCardInfo(this.state);
        }
    

    // handleChange = (event) => {
    //     event.preventDefault();
    //     console.log('event for adding', event)
    //     const {name, value} = event.target;
    //     this.setState ({
    //         [name] : value
    //     })
    //     console.log('onChange - handleChange - this.state adding: ', this.state)
    // }

    // handleSubmit = (event) => {
    //     console.log('HandleSubmit - this.props', this.props)
    //     event.preventDefault();
    //     this.props.
    // }



    render(){
        return (
            <div className="info-form-container">
                <div className="info-form">
                    <form action="">
                        <div className="info-field">
                            <input onChange={this.handleChange} type="text" placeholder="Company Name" name="company_name"/>
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
    console.log('get all state', state)
    console.log('all cards', state.add)
    return {
        addInfo: state.addInfo
    }
}


export default connect(mapStateToProps)(InfoForm)
// export default InfoForm