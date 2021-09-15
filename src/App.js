import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/header/Header'
import HomePage from './components/homePage/HomePage'
import OfferComponent from './components/offersComponents/Offers'
import Footer from './components/footer/FooterComponent'


function App() {
  return (
    <div className="App">
        <Router>
        <Header/>
        <Switch>
          <Route exact path="/"  component={HomePage} />
          <Route path="/offer/:id"  component={OfferComponent} />
          <Route path="*">404 Not Found!</Route>
        </Switch>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
