import { BrowserRouter, Route, Switch } from  'react-router-dom';
import Home from './pages/Home';
import Create from './pages/User/Create';
import Edit from './pages/User//Edit';

import Header from './components/Header';
import Footer from './components/Footer';


const Routes = () => {
    return(
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/user/create" component={Create} />
            <Route exact path="/user/edit" component={Edit} />
          </Switch>
         <Footer />
        </BrowserRouter>
    )
}

export default Routes;