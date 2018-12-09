import React, {Component} from 'react';
import './InfoForm.css';

class InfoForm extends Component {
    constructor(props) {
        super (props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="info-form-container">
                <div className="info-form">
                    <form action="">
                        <div className="info-field">
                            <input type="text" placeholder="Company Name" name="company_name"/>
                        </div>
                        <div className="info-field">
                            <input type="text" placeholder="Name" name="name"/>
                        </div>
                        <div className="info-field">
                            <input type="text" placeholder="Address" name="address"/>
                            {/* <textarea name="Address" placeholder="Address" id="" cols="18" rows="5"></textarea> */}
                        </div>
                        <div className="info-field">
                            <input type="text" placeholder="Phone Number" name="phone_number"/>
                        </div>
                        <div className="info-field">
                            <input type="text" placeholder="Email" name="email"/>
                        </div>
                        <div className="submit">
                            <input type="submit" value="NEXT"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default InfoForm;