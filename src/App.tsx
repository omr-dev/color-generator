import './App.css';
import Body from './components/body/Body';

import Header from './components/header/Header';
import {useState} from 'react';
function App() {
    const [currColor, setCurrColor]=useState("#f15025");

    return (
        <div className="App">
            <Header setCurrColor={setCurrColor}/>
            <Body currColor={currColor}/>
        </div>
    );
}

export default App;
