import React from 'react';
import BaseComponent from "./BaseComponent";

class YemekListesiComponent extends BaseComponent {


    render() {
        return (
            <div className="container">
                <h1>Yemek Listesi</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th>KOD</th>
                        <th>ADI</th>
                        <th>FİYAT</th>
                        <th>FOTOĞRAF</th>
                        <th>DETAY</th>
                        <th>UPDATE</th>
                        <th>DELETE</th>
                    </tr>
                    </thead>
                    <body>
                    {
                        this.state.meals.map(
                            meal =>
                                <tr key={this.state.kod}>
                                    <td>{this.state.kod}</td>
                                    <td>{this.state.adi}</td>
                                    <td>{this.state.fiyat.toString()}</td>
                                    <td>{this.state.fotograf}</td>
                                    <td>{this.state.detay}</td>
                                    <td><button onClick={() => this.handleUpdateMealClicked(this.state.kod)} className="btn btn-success">Sepete Ekle</button></td>
                                    <td><button onClick={() => this.handleDeleteMealClicked(this.state.kod)} className="btn btn-warning">Şimdi Öde</button></td>
                                </tr>
                        )
                    }
                    </body>
                </table>
            </div>
        );
    }
}

export default YemekListesiComponent;