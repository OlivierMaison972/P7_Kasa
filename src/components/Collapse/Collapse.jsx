import React, { useState }from 'react';
import "./collapse.css";
import arrow from '../../assets/images/carousel/arrow.png';


function Collapses({title, content}) {
const [isOpen, setIsOpen] = useState(false);


return (
    <div className="collapse" >
        <h3 className='collapse_title' onClick={() => setIsOpen(!isOpen)} >
            {title}
            <img 
                className={isOpen ? 'arrow arrow_up' : 'arrow arrow_down'} 
                src={arrow} 
                alt="show content" 
            />
        </h3>
        <div className={isOpen ? 'collapse_content' : 'collapse_content_hidden'}>
            {Array.isArray(content) ? content.map((item, index) => {
                return (
                    <ul key={index}>{item}</ul>
                )
            }) : content
            }
        </div> 
    </div>
  );
};

export default Collapses;