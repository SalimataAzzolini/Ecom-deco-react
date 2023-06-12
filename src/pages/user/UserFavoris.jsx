import React, {useEffect, useState} from 'react';
import './style/user-favoris.scss';

const UserFavoris = () => {

    const [favorites, setFavorites] = useState([]);

    //Fonction pour supprimer un produit des favoris dans le local storage
    const handleRemoveFavorite = (product) => {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        let newFavorites = favorites.filter(favorite => favorite.id !== product.id); 
        localStorage.setItem('favorites', JSON.stringify(newFavorites)); 
        setFavorites(newFavorites);
    }

    //Fonction pour l'afficher la page produit d'un article favoris
    const handleShowProduct = (product) => {
        window.location.href = `/product/${product.id}`;
    }
    

    useEffect(() => {
        let localFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(localFavorites);
    }, []);

    return (
        <div >
            <h2 className='title-favoris'>
                <span>💛</span> Coup de coeur <span>💖</span>
            </h2>
            <div className="container-cards-favoris">
                {favorites.length === 0 && <p> Aucun coup de coeur pour le moment</p>}
                {favorites && favorites.map((favorite, index) => (
                    <div className='block-cards-favoris'>
                    <ul>
                      <li>
                        <a className="card-favoris">
                          <img src={favorite.images[0].link} alt={favorite.name} className="card__image"  />
                          <div className="card__overlay">
                            <div className="card__header">
                              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                                <path />
                              </svg>
                              <button
                                className="card__thumb"
                                src={favorite.images[1].link}
                                alt=""
                                onClick={() => handleShowProduct(favorite)}
                              > Voir
                                </button>
                              <div className="card__header-text">
                                <h3 className="card__title">{favorite.name}</h3>
                                <span className="card__status">{favorite.price}</span>
                              </div>
                            </div>
                            <p className="card__description">{favorite.description}</p>
                            <button className="btn__card_favoris" onClick={() => handleShowProduct(favorite)}>Voir le produit</button>
                            
                          </div>
                        </a>
                      </li>
                    </ul>
                   
                  </div>
            
                ))}
               

                    
            </div>
        </div>
    );
};

export default UserFavoris;