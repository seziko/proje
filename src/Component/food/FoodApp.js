import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BaseComponent from "./BaseComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import LoginComponent from "./LoginComponent";
import YemekListesiComponent from "./YemekListesiComponent";
import SepetComponent from "./SepetComponent";



class FoodApp extends BaseComponent {
    render() {
        return (
            <div className="FoodApp">
                <Router>
                    <>
                        <HeaderComponent/>
                        <Switch>
                            <Route path="/anasayfa/sehoffice" component={YemekListesiComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <Route path="/sepetim" component={SepetComponent}/>
                        </Switch>
                        <FooterComponent/>
                    </>
                </Router>
            </div>
        )
    }
}

export default FoodApp;