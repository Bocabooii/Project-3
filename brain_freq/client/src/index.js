import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';
import './styles/index.css';
import './styles/custom-progress-bar.css';
import './styles/brain-freq-styles.css'; 
import './styles/cosmic-animations.css';

const client = new ApolloClient({
  // uri: 'https://brainfreq-backend-1dcd4ce53528.herokuapp.com/graphql',
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);