import React, {Component} from 'react'

const people = [
    {name : "Peter", firstvisit : "2 february", charge : "500 per visit"},
    {name : "steve", firstvistit : "3 march", charge : "700 per visit"},
    {name : "max", firstvisit : "4 april", charge : "400 per day"}
];

const listItems = people.map((person, index) => {
    return <div class = "card" key={index}>
        <img src='person-1.jfif' alt= {person.name} width= "100px"/>
        <div class = "card-body">
            <h5>{person.name}</h5>
            <p class = "card-text">first visited on {person.firstvisit} and fees is {person.charge}</p>
        </div>
    </div>
})
export default class Patients extends Component{
    render(){
        return (
            
            <article>
                <h1>Patients</h1>
                <ul>{listItems}</ul>
            </article>
            
        )
    }
}