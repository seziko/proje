import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BaseComponent from "./BaseComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import LoginComponent from "./LoginComponent";
import YemekListesiComponent from "./YemekListesiComponent";
import SepetComponent from "./SepetComponent";
import OdemeComponent from "./OdemeComponent";
import KayitOlComponent from "./KayitOlComponent";
import YemekComponent from "./YemekComponent";
import WelcomeComponent from "./WelcomeComponent";



class FoodApp extends BaseComponent {
    render() {
        return (
            <div className="FoodApp">
                <Router>
                    <>
                        <HeaderComponent/>
                        <Switch>
                            <Route path="/anasayfa/sehoffice" component={WelcomeComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <Route path="/sepetim" component={SepetComponent}/>
                            <Route path="/odeme" component={OdemeComponent}/>
                            <Route path="/kayitOl" component={KayitOlComponent}/>
                            <Route path="/yemek" comopnent={YemekListesiComponent}/>
                        </Switch>
                        <FooterComponent/>
                    </>
                </Router>
            </div>
        )
    }
}

export default FoodApp;