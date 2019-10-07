import React from 'react';
import BaseComponent from "./BaseComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";


class WelcomeComponent extends BaseComponent{
    render() {
        return (
            <div>
                <h1>Welcome Component</h1>
            </div>
        );
    }
}
export default WelcomeComponent;