import close from '../image/close.svg'
import menu from '../image/menu.svg'
import React, { useState } from 'react'

const Header = () => {

    const [menuClick,setMenuClick] = useState(false)


    return(
        (

            <header className='header_container'>
                <h1>Udith <span>Dev</span></h1>
                <nav>
                    <ol>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Project</li>
                    </ol>
                    <img className='header_menuClick' src={menu} alt='menu bar' 
                    style={{
                        width:"30px",
                        cursor: 'pointer'
                    }}
                    onClick={() => {
                        setMenuClick(pre=>!pre?true:pre)
                    }}
                    
                    />
                    <ul style={{
                        right:`${menuClick?'-20px':'-250px'}`,
                    }}>
                        <div className='header_close'     
                            onClick={()=> {
                                setMenuClick(pre=>pre?false:pre)
                            }}
                            >
                            <img src={close} alt='closeMenu'/>


                        </div>
        
                        <div className='header_menu'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Project</li>
                        </div>
        
                    </ul>
                </nav>
            </header>
          )
    )
}


export default Header