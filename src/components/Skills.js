import {useState } from 'react';
import { Mod } from './Mod';
import { SkillLists } from './SkillLists';
import Underline from './Underline';



const Skills = () => {
    const [currentModal, setCurrentModal] = useState(2);
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = (id) => {
        setCurrentModal(id);
        setIsOpen(true);
    }
    const noToggle = (id) => {
        setCurrentModal(id);
        setIsOpen(false)
    }
  return (
      <div className="serve" id='services'>
        <h2>Services</h2>
        <Underline/>
        <div className="skill-con">
            {SkillLists.map((item) =>(
                <div className="skill" key={item.id}>
                    <img src={item.img} alt="" />
                    <h5>{item.Name}</h5>
                    <span id='click' onClick={() => toggleModal(item.id) }>{item.mod}<img src="../img/arrow-right-short.svg" alt="" /></span>
                </div>
            ))}
        </div>
        {Mod.filter(item => item.id === currentModal).map(item => (
            <div className={isOpen ? "modal open":"modal"}>
                <div className="modal-div"> 
                    <h3>{item.title}</h3>
                    <p>{item.list}</p>
                    <p>{item.list1}</p>
                    <p>{item.list2}</p>
                    <button onClick={() => noToggle(item.id)}>Close</button>
                </div>
            </div>
        ))}
      </div>
    
  );
};

export default Skills;
