import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>
);

reportWebVitals();

//******************* METHODE AVEC USE QUERY A LA PLACE DE USEEFFECT */

/* import { QueryClient, QueryClientProvider } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect : false,
      retry : false,
      staleTime : 5*60*1000,
    }
  }
}); // il faut initialiser queryClient

const root = ReactDOM.createRoot(document.getElementById('root')); */

/* root.render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}> 
  <App />
  <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  
  </React.StrictMode>
); */

