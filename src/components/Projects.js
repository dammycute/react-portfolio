import React from 'react';
import { useState, useEffect } from 'react';
import Prodb from './Prodb';

const Projects = () => {
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        fetch('http://localhost:1000/projects')
        .then(res => {
            return res.json();
        })
        .then(data =>{
            setProjects(data)
        })
    }, []);
     
  return (
    <div className='project' id='projects'>
       {projects && <Prodb projects ={ projects }/>}
    </div>
  );
};

export default Projects;
