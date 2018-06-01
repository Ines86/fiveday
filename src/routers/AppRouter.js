import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import Charts from '../components/Charts';
import Day from '../components/Day';
import Hour from '../components/Hour';
import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import NotFound from '../components/NotFound';

const AppRouter = () => (
    <BrowserRouter>
      <div>
        <SearchBar />
        <Navigation />
        <div className="container">
            <Switch>
              <Route path="/" component={App} exact={true}/>
              <Route path="/day" component={Day} />
              <Route path="/hour" component={Hour} />
              <Route path="/charts" component={Charts} />
              <Route component={NotFound} />
            </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
  
export default AppRouter;