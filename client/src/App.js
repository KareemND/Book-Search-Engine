import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql', // Set the appropriate GraphQL endpoint URL
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/saved" component={SavedBooks} />
          <Route path="*" component={() => <h1 className="display-2">Wrong page!</h1>} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
