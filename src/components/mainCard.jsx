import React, { Component } from "react";
import {ModalCard} from "./modal";

export default class Maincard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "",
            country:"EUR",
            data: ""

        }
    }

    valueChange = (e) => {
        this.setState({value: e.target.value})
    
    }
    countryChange = (e) => {
        this.setState({country: e.target.value})
        
    }

    passValue = (e) => {

        let information = {
            country: this.state.country,
            value: this.state.value
        };
        fetch('http://localhost:8000/api/controller', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify(information)
        })
        .then(response => response.json())
        .then(data => {
         this.setState({data:data})
         console.log(this.state.data)
        });

    }


    render() {
        return (
            <div className="w-100 p-5 row d-flex justify-content-center m-auto">
                <div className="card text-center w-75 p-0">
                    <form>  
                        <div className="card-header">
                            <h1>Convert to US dollars</h1>
                        </div>
                        <div className="card-body  d-flex">
                            <div className="input-group w-50 p-3">
                                <input onChange = {this.valueChange} value = {this.state.value}  className="form-control" placeholder="Amount"/>
                            </div>
                            <div className="align-middle w-50 p-3">
                                <select onChange = {this.countryChange} className="form-select h-100" value = {this.state.country}>
                                    <option value="HKD">Hong Kong Dollar</option>
                                    <option value="EUR">Euro</option>
                                    <option value="PHP">Philippine Peso</option>
                                    <option value="JPY">Japanese Yen</option>
                                    <option value="CHF">Swiss Franc</option>
                                    <option value="BDT">Bangladeshi Taka</option>
                                    <option value="HUF">Hungarian Forint</option>
                                    <option value="INR">Indian Rupee</option> 
                                    <option value="MXN">Mexican Peso</option>
                                    <option value="KRW">Korean Won</option>
                                    <option value="SGD">Singapore Dollar</option>
                                </select>
                            </div>
                            <div className="p-3 w-25">
                                <button type="button" className="btn btn-secondary btn-lg h-100" onClick={()=> {this.props.openModal(); this.passValue()}} >Convert</button>
                            </div>
                        </div>
                    </form>
                </div>
                <ModalCard showModal = {this.props.showModal} closeModal = {this.props.closeModal} openModal ={this.props.openModal} data = {this.state.data} />
            </div>
        );
    }
}