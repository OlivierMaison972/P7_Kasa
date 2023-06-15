import React,{useState} from 'react';
import gauche from "../../assets/images/carousel/flech-left.png"
import droite from "../../assets/images/carousel/flech-right.png"
import "./Carousel.css"

export default function Carousel({pictures}) {
    const [index, setIndex] = useState(0);
    
// Pour afficher l'image suivante
    const suivant = () => {
        setIndex(index === pictures.length - 1? 0 : index + 1);
    };
        

// Pour afficher l'image précédente
    const precedent = () => {
        setIndex(index === 0 ? pictures.length - 1 : index-1)
    };

    return(

<section style={{backgroundImage : `url(${pictures[index]})`}} className='carousel'>
            {pictures.length > 1 && 
                <>
                    <img 
                        className='carousel_arrow carousel_arrow_right' 
                        src={droite} 
                        alt="show next slider" 
                        onClick={suivant}
                    />
                    <img 
                        className='carousel_arrow carousel_arrow_left' 
                        src={gauche} 
                        alt="show previous slider" 
                        onClick={precedent}
                    />
                    <p className='slideCount'>{index + 1} / {pictures.length}</p>
                </>
            } 
        </section>
    )
}