import React from 'react';

export const FrontPreview = (props) => {
    return (
        <div className="front-preview" style={props.style.front}>
            <div className="company" style={props.style.company}>{props.data.company_name}</div>
        </div>
    )
}

// export const BackPreview = (props) => {
//     return (
//         <div className="back-preview" style={props.style.back}>
//             <div className={props.info} style={props.style.info}>
//                 <div className={props.name}>{props.data.name}</div>
//                 <div className={props.title}>{props.data.title}</div>
//                 <div className={props.address}>{props.data.address}</div>
//                 <div className={props.phone}>{props.data.phone}</div>
//                 <div className={props.email}>{props.data.email}</div>
//             </div>
//         </div>
//     )
// }