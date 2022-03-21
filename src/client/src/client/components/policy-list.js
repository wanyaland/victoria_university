import React from 'react';

const PolicyList = (props) => {
    return(
        <React.Fragment>
            {props.policylist.map((item) => (
//                 <li className="underline lister" style={{}}key={item.id}><a href={`assets/policies/${item.name}`} download={`assets/policies/${item.name}`}>{item.name} <span className="fa fa-file-pdf-o" style={{color: '#f74040'}}></span></a></li>
            ))}
        </React.Fragment>
    )
}
export default PolicyList
