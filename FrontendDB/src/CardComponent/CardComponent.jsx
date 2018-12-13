import React from 'react';
import './styles.css'

export const Card = (props) => {
  const { data } = props;

  return (
    <div key="card" className={props.cardContainer}>
      <div className={props.back}>
        <div className={props.company_name}>{data.company_name}</div>
      </div>
      <div className={props.front}>
        <div className={props.info}>
          <div className={props.name}>{data.name}</div>
          <div className={props.title}>{data.title}</div>
          <div className={props.address}>{data.address}</div>
          <div className={props.phone}>{data.phone}</div>
          <div className={props.email}>{data.email}</div>
        </div>
      </div>
    </div>
  )
}

export const AllCards = (props) => {
  // const { data } = props;

  return props.cards.map(card =>
    <div key={card.user_id} className={props.cardContainer}>
      <div className={props.back}>
        <div className={props.company_name}>{card.company_name}</div>
      </div>
      <div className={props.front}>
        <div className={props.info}>
          <div className={props.name}>{card.name}</div>
          <div className={props.title}>{card.title}</div>
          <div className={props.address}>{card.address}</div>
          <div className={props.phone}>{card.phone}</div>
          <div className={props.email}>{card.email}</div>
        </div>
      </div>
    </div>
  )
}

export const DisplayCard = (props) => {
  return (
    <div key="card" className={props.cardContainer}>
      <div className={props.back}>
        <div className={props.title}>COMPANY NAME</div>
      </div>
      <div className={props.front}>
        <div className={props.info}>
          <div className={props.name}>Company Name</div>
          <div className={props.address}>Address <br/> City, State, Zip Code</div>
          <div className={props.phone}>Phone No.</div>
          <div className={props.email}>Email</div>
        </div>
      </div>
    </div>
  )
}


// export const CardOne = () => {
//   return (
//     <div key="card" className="CardOne card">
//       <div className="card-front one-front">
//         <div className="one-title">COMPANY NAME</div>
//       </div>
//       <div className="card-info one-back">
//         <div className="one-info">
//           <div className="name">Company Name</div>
//           <div className="address">Address <br/> City, State, Zip Code</div>
//           <div className="phoneNumber">Phone No.</div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export const CardTwo = () => {
//   return (
//     <div key="card" className="CardTwo card">
//       <div className="card-front two-front">
//         <div className="two-title">COMPANY NAME</div>
//       </div>
//       <div className="card-info two-back">
//         <div className="two-info">
//           <div className="name">Company Name</div>
//           <div className="address">Address <br/> City, State, Zip Code</div>
//           <div className="phoneNumber">Phone No.</div>
//           <div className="email">Email</div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export const CardThree = () => {
//   return (
//     <div key="card" className="CardThree card">
//       <div className="card-front three-front">
//         <div className="three-title">COMPANY NAME</div>
//       </div>
//       <div className="card-info three-back">
//         <div className="three-info">
//             <div className="name">Company Name</div>
//             <div className="address">Address <br/> City, State, Zip Code</div>
//             <div className="phoneNumber">Phone No.</div>
//             <div className="email">Email</div>
//           </div>
//       </div>
//     </div>
//   )
// }

// export const CardFour = () => {
//   return (
//     <div key="card" className="CardFour card">
//       <div className="card-front four-front">
//         {/* <div className="four-title">COMPANY NAME</div> */}
//       </div>
//       <div className="card-info four-back">
//         <div className="four-info">
//             <div className="name">Company Name</div>
//             <div className="address">Address <br/> City, State, Zip Code</div>
//             <div className="phoneNumber">Phone No.</div>
//             <div className="email">Email</div>
//           </div>
//       </div>
//     </div>
//   )
// }