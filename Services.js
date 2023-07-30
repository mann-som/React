import React, {Component} from 'react'

const Services = [
    {name : "full body checkups", charge : "1000/-"},
    {name : "blood test", charge : "700/-"},
    {name : "specific diagnosis", charge : "500/- per visit"}
];

const listItems = Services.map((service, index) => {
    return <div class = "table" key={index}>
        <h4>{service.name}</h4>
        <p>chargers are : {service.charge}</p>
    </div>
})

export default class Servicesfunc extends Component{
    render(){
        return(
            <div>
                <h1>SERVICES</h1>
                <ul>{listItems}</ul>
            </div>
        )
    }
}