import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';
import './styles/index.css';
import './styles/custom-progress-bar.css';
import './styles/brain-freq-styles.css'; 
import './styles/cosmic-animations.css';

const client = new ApolloClient({
  // uri: 'https://flyby-router-demo.herokuapp.com/',
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);