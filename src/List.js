import React from 'react';
import Display from './Display';

class List extends React.Component {
    constructor(){
        super();
        this.state = {
            data: [],
            input: ''
        }
    }
    
    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.getResults()
    }

    getResults = () => {
        fetch("https://swapi.co/api/" + this.state.input)
        .then(res => res.json())
        .then(
            (response) => {
                this.setState({
                    data: response.results
                })
            }
        )
    }
    render(){ 
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <select value={this.state.input} onChange={this.handleChange}>
                        <option value="people">people</option>
                        <option value="starships">starships</option>
                        <option value="planets">planets</option>
                        <option value="species">species</option>
                        <option value="vehicles">vehicles</option>
                    </select>
                    <button>Submit</button>
                </form>
                {this.state.data.map(item => (
                    <Display 
                        key={item.name}
                        name ={item.name} 
                        gender={item.gender}
                        height={item.height}
                        model={item.model}
                        starship={item.starship_class}
                        manufacturer={item.manufacturer}
                        language={item.language}
                        eyecolors={item.eye_colors}
                        homeworld={item.homeworld}
                        diameter={item.diameter}
                        gravity={item.gravity}
                        passengers={item.passengers}
                        />
                ))}
            </div>
        )
    }
}

export default List