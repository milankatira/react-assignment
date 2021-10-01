import React, { useRef } from 'react'
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { BUYSEAT } from './redux/Action'
const HooksContainer = () => {

    const numOfseats = useSelector(state => state.numOfseats);
    const dispatch = useDispatch();

    return (

        <div className="seat_status">
            <div className="text">
                <h1>seatno-1</h1>
                {/* { numOfseats.map((item, i) =>
                    <div key={i}>
                        <h1>{item.id}</h1>
                        <h1>{item.status}</h1>

                    </div>

                )} */}
                {numOfseats}


                <button style={{
                    backgroundColor: '#2f7542',
                    color: "white",
                    border: 0,
                    padding: 10,

                }} onClick={() => dispatch(BUYSEAT(1, true))} >buy seats</button>
                {/* console.log(BUYSEAT(2,true)) */}
                {/* {users.map((item,i)=>
            <tr key={i}>
            <td>{item.userId}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
            <td>{item.mobile}</td>
          </tr>
          ) */}

            </div>
        </div>
    )
}

export default HooksContainer
