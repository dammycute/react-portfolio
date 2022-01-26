import React from 'react';

const Button = ({ img, value, styleClass } ) => {
  return (
    <div>
        <button className={`btn ${styleClass}`}>
            <img src={img} alt="" />
             {value}
        </button>
    </div>
);
};

export default Button;
