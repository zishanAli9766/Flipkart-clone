import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainDetailPage from '../DetailsPage/MainDetailPage'
import Home from '../Home/Home';
import ProtectedRout from '../../LoginForm/ProtectedRout';
import CommonRout from '../../CommonRout';
import Login from '../Login/Login';
import Detailspage from '../DetailsPage/DetailsPage';

const  Rout=()=>{
    
  return(
      <div>
          <Switch>
              <Route exact path="/" component={Home} />
              <ProtectedRout exact path="/MainDetailPage" component={MainDetailPage} />
              <ProtectedRout exact path="/MainDetailPage" component={MainDetailPage} />
              <ProtectedRout exact path="/MainDetailPage" component={MainDetailPage} />
              <ProtectedRout exact path="/MainDetailPage" component={MainDetailPage} />
              <ProtectedRout exact path="/detailspage" component={Detailspage} />
              <CommonRout exact path="/login" component={Login} />
          </Switch>
      </div>
  );
}

export default Rout;
