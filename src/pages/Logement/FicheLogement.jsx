import React from 'react';
import Carousel from "../../components/Carousel/Carousel"
import { useParams, Navigate } from 'react-router-dom';
import logementdatas from '../../datas/logements.json';
import Rate from "../../components/Rate/Rate";
import Collapses from '../../components/Collapse/Collapse'
import Tag from "../../components/Tags/Tags"
import "../Logement/FicheLogement.css"

export default function FicheLogement(){
    const params = useParams();
    
    const logement=logementdatas.find(( {id} ) =>  id === params.fiche );
    
    const tagsLogement = logement.tags.map((tags, i) => {
        return <Tag key={i} nom={tags} />;
        })

    const equipements = logement.equipments.map((equipment, i) => {
        return (
           
            <li key={i}>{equipment}</li>
        
        );
      });

    return (
        <>
      {logement ? (
        <div className="Fiche-container">
          <Carousel pictures={logement.pictures} />
          <section className="Fiche-logement">
            <div className="description-info">
              <div className="description-info__titletags">
                <div className="description-info__titletags__title">
                  <span className="titre-logement">{logement.title}</span>
                  <span className="endroit-logement">
                    {logement?.location}
                  </span>
                </div>
                {/* Tags */}
                <div className="description-info__titletags__tags">
                  {tagsLogement}
                </div>
              </div>

              <div className="description-info__proprietaire">
                {/* Hosting */}
                <div className="description-info__proprietaire__nom-prop">
                  <span className="nom-proprietaire">{logement.host.name}</span>
                    <img
                      className="photo-proprietaire"
                      src={logement.host.picture}
                      alt="Propriétaire"
                    />
                </div>
                {/* Rating */}
                <div className="description-info__proprietaire__rate">
                  <Rate score={logement.rating} />
                  
                </div>
              </div>
            </div>
          </section>
          {/* Collapse */}
          <div className="description-centent">
            <div className="description-centent__description">
              <Collapses
                title="Description"
                content={logement.description}
              />
            </div>
            <div className="description-centent__equipement">
              <Collapses title="Équipements" 
              content={equipements} />
            </div>
          </div>
        </div>
      ) : (
        <Navigate replace to="/404" />
      )}
    </>
  );
};
