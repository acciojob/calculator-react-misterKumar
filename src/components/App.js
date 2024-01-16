import React, { useState } from "react";
import '../styles/App.css';



const App=()=>{
    let [number,setNumber]=useState('');

    function handleClick(event){
        if(event.target.innerText=='C'){
            setNumber('')
        }else if(event.target.innerText=='='){
            setNumber(eval(number))
        }
        else{
            setNumber(number+event.target.innerText)
        }
    }

    function calculate(){



    }

    return (
        <div className="Calculator">
           <input type="text" className="output" value={number} />
           <div className="grid">
            <div id='btn-C' onClick={handleClick}>C</div>
            <div id='btn-/'  onClick={handleClick}>/</div>
            <div id='btn-*'  onClick={handleClick}>*</div>
            <div id='btn--'  onClick={handleClick}>-</div>
            <div id='btn-7'  onClick={handleClick}>7</div>
            <div id='btn-8'  onClick={handleClick}>8</div>
            <div id='btn-9'  onClick={handleClick}>9</div>
            <button id='plus'   onClick={handleClick} className="add">+</button>
            <div id='btn-4'  onClick={handleClick}>4</div>
            <div id='btn-5'  onClick={handleClick}>5</div>
            <div id='btn-6'  onClick={handleClick}>6</div>
            <div id='btn-1'  onClick={handleClick}>1</div>
            <div id='btn-2'  onClick={handleClick}>2</div>
            <div id='btn-3'  onClick={handleClick}>3</div>
            <button id='equal'  onClick={handleClick} className="equals">=</button>
            <div  id='btn-0'  onClick={handleClick}>0</div>
            <div id='btn-.'   onClick={handleClick} className="dot">.</div>
           </div>
        </div>
    )
}

export default App