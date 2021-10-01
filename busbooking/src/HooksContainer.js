import React,{useRef} from 'react'
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { BUYSEAT } from './redux/Action'
const HooksContainer = () => {

    const numOfseats = useSelector(state => state.bus.numOfseats);
    const dispatch = useDispatch();
           
     const inputEl = useRef(null);
     
     const onButtonClick = () => {
          inputEl.current.style.backgroundColor="red"
        };
    
    
    return (
        
            <div className="seat_status">
                <div className="text">
                    <h1>seatno-1</h1>
                    <h2>{numOfseats }</h2>
                    {/* {
                    numOfseats?
                    } */}
                    <button style={{
                        backgroundColor: '#2f7542',
                        color: "white",
                        border:0,
                        padding: 10,
                        
                    }} onClick={() =>dispatch( BUYSEAT(),{onButtonClick} )  } >buy seats</button>
                    
                </div>
            </div>
    )
}

export default HooksContainer
