import React from 'react';
import BaseComponent from "./BaseComponent";

class SepetComponent extends BaseComponent {
    constructor(props){
        super(props)
        this.state={
            mesaj:null,
            orderToplam:'0',
            orderSiparis:'deneme',
            orderSiparisAdi:'deneme'',
            orderSiparisFiyat:'deneme',
            orderSiparisFotograf:'deneme'',
            orderSiparisDetay:null

        }

}


    render() {
        return (
            <div className="row">
                <div className="container">Sepetim</div>
                <table className="table">
                <tbody>
                <tr>{this.setState(this.state.orderSiparisAdi)}</tr>
                <tr>{this.setState(this.state.fiyat)}</tr>
                <tr>{this.setState(this.state.fotograf)}</tr>
                <tr>{this.setState(this.state.detay)}</tr>
                <tr>{this.state.orderToplam}</tr>
                <tr>{this.state.mesaj}</tr>
                </tbody>
                </table>



                <table className="table">
                <tbody>
                <td><button className="btn btn-success">Alışverişe Devam Et</button></td>
                <td><button className="btn btn-success"> Şimdi Öde</button></td>
                <td><button className="btn btn-success">Sil</button></td>
                <td><button className="btn btn-success">Temizle</button></td>
                </tbody>
                </table>
            </div>
        );
    }

    handleUpdateOrderToplam=(event) =>{
                if(this.state.kod !== null && this.state.fiyat !== null){
                    // eslint-disable-next-line no-unused-expressions
                        this.state.orderToplam ==this.state.fiyat;
                }else {
                    console.log('Kayıt işlemi başarısız.')
                }


    }
}
export default SepetComponent;