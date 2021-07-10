import React from 'react';

const Progdata = (props) => {
    return (
        <React.Fragment>
            {props.tracks.map((data) => (
                <p className="my-4" key={data.id}>
                    <p className="my-4">title: {data.program}</p>
                    <option value={data.local_price}>{data.program}</option>
                </p>
            ))}
        </React.Fragment>
    );
}

export default Progdata;