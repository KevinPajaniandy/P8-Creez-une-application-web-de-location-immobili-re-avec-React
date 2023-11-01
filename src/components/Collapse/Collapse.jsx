import React, { useState } from 'react'
import './Collapse.scss'
import ArrowUp from '../../assets/up-arrow.png'

const Collapse = ({ title, children }) => {
    // Define a state variable 'isOpen' to trake whether the collapse is open or closed
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen); // Function to toggle the collapse state on button click
    };

    return (
        <div className='collapse'>
            {/* Render the collapse button with a conditionnal class 'rotate' if 'isOpen' is true */}
            <div className={`collapse_name ${isOpen ? 'rotate' : ''}`} onClick={toggleCollapse}>
                {title}
                <img src={ArrowUp} alt={ArrowUp} />
            </div>
            {/* Render the content inside a div with class 'collapse_content' if 'isOpen' is true */}
            <div className={`collapse_content ${isOpen ? 'open' : 'close'}`}>{children}</div>
        </div>
    )
}

export default Collapse