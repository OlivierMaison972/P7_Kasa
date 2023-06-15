import React from 'react'
import Banner from '../../components/Banner/Banner';
import imgHomeBanner from '../../assets/images/banner/homeBanner.png';
import logementdatas from '../../datas/logements.json';
import { Link } from "react-router-dom";
import Card from '../../components/Card/Card';
import '../Home/home.css';

export default function Home(){
    return (
        <div className="home">
            <Banner className="" texte="Chez vous, partout et ailleurs" image={imgHomeBanner} />
            <div className="home-content">
            {logementdatas.map((logement ) => (
                <article key={logement.id}>
                <Link to={`/logement/${logement.id}`}>
                  <Card image={logement.cover} title={logement.title} />
                </Link>
              </article>
                
         ))} 
            </div>
     
        </div>
    

    )
}
