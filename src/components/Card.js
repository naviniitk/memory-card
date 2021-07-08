import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="" />
      <h4 className="card-name">{props.name}</h4>
    </div>
  );
};

export default Card;
