import React from 'react';
import List from './List';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1 id="title">STAR WARS</h1>
                <List />
            </div>
        )
    }
}

export default App;