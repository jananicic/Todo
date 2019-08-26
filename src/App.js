import React from 'react';
import './App.css';
import Create from './components/createTodo/Create'
import Navbar from "./components/navbar/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <div className="create">
                <Create />
            </div>
        </div>
    );
}

export default App;
