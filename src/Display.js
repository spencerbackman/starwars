import React from 'react';

class Display extends React.Component {
    constructor() {
        super()
        this.state={
            isToggled: false
        }
    }
    toggle = () => {
        this.setState(prevState => {
            return { isToggled: !prevState.isToggled }
        })
    }

    render() {
        return (
            <div>
                <h1 onClick={this.toggle}>{this.props.name}</h1>
                { this.state.isToggled
                ?   <div>
                        <p>{this.props.gender}</p>
                        <p>{this.props.height}</p>
                        <p>{this.props.model}</p>
                        <p>{this.props.starship}</p>
                        <p>{this.props.manufacturer}</p>
                        <p>{this.props.language}</p>
                        <p>{this.props.eyecolors}</p>
                        <p>{this.props.homeworld}</p>
                        <p>{this.props.diameter}</p>
                        <p>{this.props.gravity}</p>
                        <p>{this.props.passengers}</p>
                    </div>
                : null
                }
            </div>
        )
    }
}

export default Display