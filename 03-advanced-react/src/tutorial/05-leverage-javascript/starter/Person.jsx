import React from 'react';
import avatar from '../../../assets/default-avatar.svg'

const Person = ({id, name, nickName = 'No nickname', images}) => {
    const img = images?.[0]?.small?.url || avatar;
    return (
        <div key={id} style={{padding: "5px", margin: "5px", borderRadius: '15px', background: "whitesmoke", minWidth: "250px"}}>
            <h3>{name}</h3>
            <p>{nickName}</p>
            <img src={img} alt="No Photo" style={{width: '50px'}}/>
        </div>
    );
};

export default Person;