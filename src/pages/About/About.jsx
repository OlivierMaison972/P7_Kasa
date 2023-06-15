import React from 'react';
import Banner from "../../components/Banner/Banner"
import imgAboutBanner from "../../assets/images/banner/aboutBanner.png";
import collapsedatas from '../../datas/collapses.json'
import Collapse from '../../components/Collapse/Collapse'
import "../About/About.css"

export default function About(){
    
    return (
    <div className="about">
        <Banner className="about_banner" image={imgAboutBanner}/>
        <div className="about_main">
            
                {collapsedatas.map((item) => {
                    return (
                        <div className="collapses_item" key={item.id} >
                            <Collapse content={item.content} title={item.title}/>
                            
                        </div>
                    )
                })}
        
        </div>
            
         
    </div>    
    )    
}

