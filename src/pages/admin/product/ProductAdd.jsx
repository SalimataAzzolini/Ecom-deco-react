import React from 'react';

const ProductAdd = () => {
    return (
        <div>
           <form className='form-add-product'>
                <div className='div-inputs-add-product'>
                    <div>
                        <label>Nom</label>
                        <input
                        type="text"
                        placeholder="Nom"
                        name="name"
                        // value={credentials.name}
                        // onChange={onChange}
                        className='all-input-register input-register  '
                        />
                        {/* {errors.name && <div className="error-message">{errors.name}</div>} */}
                        

                        <label>Prix</label>
                        <input
                        type="text"
                        placeholder="Prix"
                        name="price"
                        // value={credentials.price}
                        // onChange={onChange}
                        className='all-input-register input-register  '
                        />
                        {/* {errors.price && <div className="error-message">{errors.price}</div>} */}

                        <label>Quantité</label>
                        <input
                        type="text"
                        placeholder="Quantité"
                        name="quantity"
                        // value={credentials.quantity}
                        // onChange={onChange}
                        className='all-input-register input-register  '
                        />
                        {/* {errors.quantity && <div className="error-message">{errors.quantity}</div>} */}

                        <label>Image</label>
                        <input
                        type="text"
                        placeholder="Image"
                        name="image"
                        // value={credentials.image}
                        // onChange={onChange}
                        className='all-input-register input-register  '
                        />
                        {/* {errors.image && <div className="error-message">{errors.image}</div>} */}
                        <br/>
                        <label>Description</label>
                        <textarea
                        type="text"
                        placeholder="Description"
                        name="description"
                        // value={credentials.description}
                        // onChange={onChange}
                        className='all-input-register input-register  '
                        />

                        <label>Catégorie</label>
                        <input
                        type="text"
                        placeholder="Catégorie"
                        name="category"
                        // value={credentials.category}
                        // onChange={onChange}
                        className='all-input-register input-register  '
                        />
                        {/* {errors.category && <div className="error-message">{errors.category}</div>} */}

                        <button type="submit" className='btn-register'
                        style={{width: '140px', marginTop: '20px'}}
                        >Ajouter</button>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default ProductAdd;