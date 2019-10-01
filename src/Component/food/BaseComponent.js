import React,{Component} from 'react';

class BaseComponent extends Component{
    constructor() {
        super();
        this.state = {
            username: "mesutcan",
            password: "123",
            isLoggedIn: null,
            kod: null,
            adi: null,
            fiyat:null,
            fotograf:null,
            detay:null,
            meals:null
        };
    }


    render() {
        return(
            <h1>deneme</h1>
        );
        }
    }
export default BaseComponent;