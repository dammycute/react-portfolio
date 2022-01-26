import React from 'react';
import Button from './Button';
import Underline from './Underline';
const Prodb = ({ projects }) => {
  return (
    <div>
        <h2>Projects</h2>
        <Underline/>
        <div className='pro'>
            {projects.map((item) =>(
            <div className="pro-display" key={item.id}>
               <h3>{ item.title }</h3>
               <p>{ item.body }</p>
               <div className="btn-group">
                    <a href={ item.web}><Button img={`../img/link-45deg.svg`}  value="Website"/></a>
                    <a href={ item.git}><Button img={`../img/github.svg`} value="Github"/></a>
               </div>
            </div>
            ))} 
        </div>
    </div>
    
)
};

export default Prodb;
