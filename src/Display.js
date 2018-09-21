import React from 'react';

class Display extends React.Component {
    constructor() {
        super()
        this.state={ isToggled: false }
    }
    toggle = () => {
        this.setState(prevState => {
            return { isToggled: !prevState.isToggled }
        })
    }
    render() {
        if(this.props.starship !== undefined) {
            return (
                <div className="results">
                    <h1 onClick={this.toggle}>{this.props.name}</h1>
                    { this.state.isToggled
                    ? <ul className="list">
                        <li>Model: {this.props.model}</li> <li>Starship: {this.props.starship}</li>
                        <li>Manufacturer: {this.props.manufacturer}</li> <li>Crew: {this.props.crew}</li>
                        <li>Passengers: {this.props.passengers}</li> <li>Max atomosphering speed: {this.props.maxspeed}</li>
                        <li>Hyperdrive rating: {this.props.hyperdrive}</li> <li>Cargo: {this.props.cargo}</li>
                        <li>Consumables: {this.props.consumables}</li>
                    </ul>
                    : null
                    }
                </div>
            )
        } else if(this.props.vehicle !== undefined) {
            return(
                <div className="results">
                    <h1 onClick={this.toggle}>{this.props.name}</h1>
                    {this.state.isToggled
                    ? <ul className="list">
                        <li>Model: {this.props.model}</li> <li>Vehicle: {this.props.vehicle}</li>
                        <li>Manufacturer: {this.props.manufacturer}</li> <li>Cost in credits: {this.props.cost}</li>
                        <li>Crew: {this.props.crew}</li> <li>Passengers: {this.props.passengers}</li>
                        <li>Max atomosphering speed: {this.props.maxspeed}</li> <li>Cargo capacity: {this.props.cargo}</li>
                        <li>Consumables: {this.props.consumables}</li>
                    </ul>
                    : null }
                </div>
            )
        }
         else if(this.props.avgHeight !== undefined){
            return (
                <div className="results">
                    <h1 onClick={this.toggle}>{this.props.name}</h1>
                    {this.state.isToggled
                    ? <ul className="list">
                        <li>classification: {this.props.classification}</li> <li>Average Height: {this.props.avgHeight} </li>
                        <li>Average Life: {this.props.avgLife}</li> <li>Eye colors: {this.props.eyecolors} </li>
                        <li>Language: {this.props.language} </li>
                    </ul> 
                    : null }
                </div>
            )
        } 
        else if(this.props.eyecolor !== undefined){
            return (
                <div className="results">
                    <h1 onClick={this.toggle}>{this.props.name}</h1>
                    {this.state.isToggled
                    ? <ul className="list">
                        <li>Birth year: {this.props.birthyear}</li> <li>Eye color: {this.props.eyecolor}</li> 
                        <li>Gender: {this.props.gender}</li> <li>Hair color: {this.props.haircolor}</li>
                        <li>Height: {this.props.height}</li> <li>Mass: {this.props.mass}</li>
                    </ul> 
                    : null }
                </div>
            )
        } 
        else {
            return (
                <div className="results">
                    <h1 onClick={this.toggle}>{this.props.name}</h1>
                    {this.state.isToggled
                    ? <ul className="list">
                        <li> Diameter: {this.props.diameter} </li> <li> Rotaional period: {this.props.rotation} </li>
                        <li> Orbital Period: {this.props.orbit} </li> <li> Gravity: {this.props.gravity} </li>
                        <li> population: {this.props.population} </li> <li> Climate: {this.props.climate} </li>
                        <li> Terrain: {this.props.terrain} </li> <li> Surface water: {this.props.water}</li>
                    </ul> 
                    : null }
                </div>
            )
        }
    }
}

export default Display