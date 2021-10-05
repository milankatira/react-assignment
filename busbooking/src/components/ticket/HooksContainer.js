import React from 'react'
import '../../App.css';
import { useSelector, useDispatch } from 'react-redux'
import { BUYSEAT } from '../../redux/Action'

const HooksContainer = () => {
    const ticketStatus = useSelector(state => state.bus);
    const dispatch = useDispatch();

    const onclickhandler = (id, ostatus) => {
        const arr = [...ticketStatus]
        const objIndex = arr.findIndex(obj => obj.id === id)
        arr[objIndex].status = true

        if (ostatus === true) {
            alert('seat is already booked')
        }

        else {
            dispatch(BUYSEAT(arr))
        }
    }

    return (
        <div className="seat_status">


            {ticketStatus.map((item) => {
                return (
                    <div>
                        <div className='button_size'>
                            <button
                                style={{
                                    backgroundColor: (item.status === true) ? '#ff6b6b' : '#90ff6b',
                                    margin: '10px',
                                    height: '30px',
                                    width: '60px',
                                    color: 'black',
                                    alignitem: 'center',
                                    border: 'none',
                                }}
                                onClick={() => { onclickhandler(item.id, item.status) }} > seat.{item.id}</button>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

export default HooksContainer
