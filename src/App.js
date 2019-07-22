import React from 'react';
import './App.css';
import Todos from './components/showTodo/Todos';
import Create from './components/createTodo/Create'

function App() {
    return (
        <div className="App">
            <div className="todos">
                <Todos/>
            </div>
            <div className="create">
                <Create />
            </div>
        </div>
    );
}

export default App;
