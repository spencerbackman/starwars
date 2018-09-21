import React from 'react';
import Display from './Display';

class List extends React.Component {
    constructor(){
        super();
        this.state = { data: [], input: 'people' }
    }
    handleChange = (e) => {
        this.setState({ input: e.target.value })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.getResults();
    }
    getResults = () => {
        fetch("https://swapi.co/api/" + this.state.input)
        .then(res => res.json())
        .then( (response) => {
            this.setState({
                data: response.results
            })
        })
    }
    render(){ 
        return (
            <div id="form">
                <form onSubmit={this.handleSubmit}>
                    <select id="dropdown" value={this.state.input} onChange={this.handleChange}>
                        <option value="people">people</option> <option value="starships">starships</option>
                        <option value="planets">planets</option><option value="species">species</option>
                        <option value="vehicles">vehicles</option>
                    </select>
                    <button id="but">Submit</button>
                </form>
                {this.state.data.map(item => (
                    <Display   
                        key={item.name} name ={item.name} gender={item.gender}
                        birthyear={item.birth_year} eyecolor={item.eye_color}
                        haircolor={item.hair_color} mass={item.mass} height={item.height}
                        model={item.model} starship={item.starship_class}
                        manufacturer={item.manufacturer} cost={item.cost_in_credits}
                        crew={item.crew} maxspeed={item.max_atmosphering_speed}
                        hyperdrive={item.hyperdrive_rating} cargo={item.cargo_capacity}
                        consumables={item.consumables} vehicle={item.vehicle_class}
                        classification={item.classification} avgHeight={item.average_height}
                        avgLife={item.average_lifespan} language={item.language}
                        eyecolors={item.eye_colors} homeworld={item.homeworld}
                        diameter={item.diameter} gravity={item.gravity} passengers={item.passengers}
                        rotation={item.rotation_period} orbit={item.orbital_period}
                        population={item.population} climate={item.climate} terrain={item.terrain}
                        water={item.surface_water} />
                ))}
            </div>
        )
    }
}

export default List