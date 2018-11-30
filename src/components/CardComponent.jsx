import React from 'react';
import './styles.css'

export const CardOne = () => {
  return (
    <div key="card" className="CardOne card">
      <div className="card-front one-front">
        <div className="one-title">COMPANY NAME</div>
      </div>
      <div className="card-info one-back">
        <div className="one-info">
          <div className="name">Company Name</div>
          <div className="address">Address <br/> City, State, Zip Code</div>
          <div className="phoneNumber">Phone No.</div>
          <div className="email">Email</div>
        </div>
      </div>
    </div>
  )
}

export const CardTwo = () => {
  return (
    <div key="card" className="CardTwo card">
      <div className="card-front two-front">
        <div className="two-title">COMPANY NAME</div>
      </div>
      <div className="card-info two-back">
        <div className="two-info">
          <div className="name">Company Name</div>
          <div className="address">Address <br/> City, State, Zip Code</div>
          <div className="phoneNumber">Phone No.</div>
          <div className="email">Email</div>
        </div>
      </div>
    </div>
  )
}

export const CardThree = () => {
  return (
    <div key="card" className="CardThree card">
      <div className="card-front three-front">
        <div className="three-title">COMPANY NAME</div>
      </div>
      <div className="card-info three-back">
        <div className="three-info">
            <div className="name">Company Name</div>
            <div className="address">Address <br/> City, State, Zip Code</div>
            <div className="phoneNumber">Phone No.</div>
            <div className="email">Email</div>
          </div>
      </div>
    </div>
  )
}

export const CardFour = () => {
  return (
    <div key="card" className="CardFour card">
      <div className="card-front four-front">
        {/* <div className="four-title">COMPANY NAME</div> */}
      </div>
      <div className="card-info four-back">
        <div className="four-info">
            <div className="name">Company Name</div>
            <div className="address">Address <br/> City, State, Zip Code</div>
            <div className="phoneNumber">Phone No.</div>
            <div className="email">Email</div>
          </div>
      </div>
    </div>
  )
}

export const CardFive = () => {
  return (
    <div key="card" className="CardFive" >
      <div className="name">Business Name</div>
      <div className="address">Address</div>
      <div className="phoneNumber">Phone #</div>
      <div className="email">eMail</div>
    </div>
  )
}

export const CardSix = () => {
  return (
    <div key="card" className="CardSix" >
      <div className="name">Business Name</div>
      <div className="address">Address</div>
      <div className="phoneNumber">Phone #</div>
      <div className="email">eMail</div>
    </div>
  )
}
