import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/_features/cartSlice';


const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    
});


export { store};












// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // Choisissez le storage approprié pour votre environnement (localStorage, AsyncStorage, etc.)

// import cartReducer from '@/_features/cartSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
// }; //permet de définir la clé de stockage dans le localStorage

// const persistedReducer = persistReducer(persistConfig, cartReducer); //permet de créer un reducer persistant

// const store = configureStore({
//   reducer: persistedReducer,
// });

// const persistor = persistStore(store);

// export { store, persistor };
