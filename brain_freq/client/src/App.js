import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login.js';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import { StoreProvider } from './utils/GlobalState';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';
import About from './pages/About'; // import the About component
import Contact from './pages/Contact'; // import the Contact component

const httpLink = createHttpLink({
  // uri: 'http://localhost:3001/graphql',
  uri: 'https://brainfreq-server.vercel.app/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <StoreProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/success" element={<Success />} />
            <Route path="/orderHistory" element={<OrderHistory />} />
            <Route path="/products/:id" element={<Detail />} />
            <Route path="/about" element={<About />} /> {/* Define the route for the About page */}
            <Route path="/contact" element={<Contact />} /> {/* Define the route for the Contact page */}
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </StoreProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
