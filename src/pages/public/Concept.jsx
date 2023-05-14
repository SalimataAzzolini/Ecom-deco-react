import React from 'react';
import "./style/concept.scss";
import ImgConceptLeft from '@/assets/img/img-concept-left.png';
import ImgConceptLast from '@/assets/img/img-concept-last.png';

const Concept = () => {
    return (
        <div className='container-concept'>
            <div className="section-concept1">
                <div className="block-concept section-concept1-left ">
                    <span className='rond-concept1'> </span>
                    <span className='rond-concept2'> </span>
                    <img src={ImgConceptLeft} className='img-concept'/>
                </div>
                <div className="block-concept section-concept1-right">
                    <h1> Le concept </h1>
                    <p className='p-concept-right'> Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.
                    Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.
                    Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.
                    </p>
                </div>
            </div>

            <h1 className='title-section-2'> L'univers </h1>

            {/****** SECTION 2 ******/}
            <div className="container-cards-concept">
            <div className="card-concept card-concept-1"></div>
            <div className="card-concept card-concept-2">
                <h2> CE QUE NOUS FAISONS </h2>
                <span className='trait-concept trait-concept1'> </span>
                <p className='p-concept'> Le lorem ipsum est, en imprimerie, une suite de mots sans signification u</p>
            </div>
            <div className="card-concept card-concept-3"></div>
            <div className="card-concept card-concept-4">
                <h2> A PROPOS DE  NOUS  </h2>
                <span className='trait-concept trait-concept2'> </span>
                <p> Le lorem ipsum est, en imprimerie, une suite de mots sans signification u</p>
            </div>
            <div className="card-concept card-concept-5"></div>
            <div className="card-concept card-concept-6">
                <h2> NOS VALEURS </h2>
                <span className='trait-concept trait-concept3'> </span>
                <p> Le lorem ipsum est, en imprimerie, une suite de mots sans signification u</p>
            </div>
            </div>

            {/* SECTION  3 */}
            <div className="section-concept3">
                <img src={ImgConceptLast} className='img-fluid img-concept-last'/>
            </div>
        </div>
    );
};

export default Concept;