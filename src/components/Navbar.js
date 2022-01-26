import { useState, useEffect } from 'react'
import { Menu } from './Menu'



const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const toggleNav =() =>{
        setOpen(!isOpen)
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        
        window.addEventListener('resize', changeWidth)
        
    }, []);


    return (
        <div className='nav'>
            <h3>Portfolio</h3>
            {(isOpen || screenWidth > 600) && (
            <ul>
                {Menu.map((item, index) => {
                    return(
                        <li key={item.id}>
                            <a href={item.urlLink} onClick={toggleNav}  className={item.cName}>
                                {item.title}
                            </a>
                        </li>
                    )
                    
                })}
            </ul>
            )}
            <div className="nav-icon">
                <i onClick={toggleNav} class="bi bi-list"></i>
                <i class="bi bi-x"></i>
            </div>
        </div>   
            
    )
}

export default Navbar
