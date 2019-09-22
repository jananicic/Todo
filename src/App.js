import React from 'react';
import './App.css';
/*import Create from './components/createTodo/Create'
import Navbar from "./components/navbar/Navbar";*/
import TodosPage from "./components/showTodo/TodosPage";

function App() {
    return (
        <div className="App">
            <TodosPage/>
            {/*<Navbar/>
            <div className="create">
                <Create/>
            </div>*/}
        </div>
    );
}

export default App;
