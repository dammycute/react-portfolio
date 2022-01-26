import React from 'react';
import Underline from './Underline';

const Show = () => {
  return (
    <div>
        <h2>Skills</h2>
        <Underline/>
        <div className="show" id='skill'>
            <div className="show-text">
                
                <p>These are list of Technologies and Languages I write and I work with currently. I love coding thing from scratch and developing new projects.</p>
             </div>
             <div className="show-img">
                <div className="img">
                    <img src="./img/html5.svg" alt="" />
                    <p>Html5</p>
                </div>
                <div className="img">
                    <img src="./img/bootstrap.svg" alt="" />
                    <p>BootStrap</p>
                </div>
                 
                 <div className="img">
                    <img src="./img/css3-alt.svg" alt="" />
                    <p>CSS3</p>
                 </div>
                <div className="img">
                    <img src="./img/js.svg" alt="" />
                    <p>Js</p>
                </div>
                <div className="img">
                    <img src="./img/react.svg" alt="" />
                    <p>ReactJs</p>
                </div>
                <div className="img">
                    <img src="./img/node.svg" alt="" />
                    <p>NodeJs</p>
                </div>
                 
             </div>
        </div>
    </div>
);

};

export default Show;
