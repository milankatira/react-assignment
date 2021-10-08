import React from 'react'
import '../../App.css';
import { useSelector, useDispatch } from 'react-redux'
import { BUYSEAT } from '../../redux/ticket/Action'
import swal from 'sweetalert';

    //     const allEqual = arr => ticketStatus.every(val => val.status === true);
    //     const result = allEqual([ticketStatus.status])
    
    // if (result===true){
    // alert("chhbtrhrxhh")
    // }

const HooksContainer = () => {
    const ticketStatus = useSelector(state => state.bus);
    const dispatch = useDispatch();

    const onclickhandler = (id, ostatus) => {
        const arr = [...ticketStatus]
        const objIndex = arr.findIndex(obj => obj.id === id)
        
        arr[objIndex].status = true
            
        if (ostatus === true) {
            swal({
                title: "Error",
                text: 'seat is already booked',
                icon: "error",
                button: "ok",
              });
        }

        else {
            dispatch(BUYSEAT(arr))
        }
        
    }
    
    // const clickhandler = (status) => {
    //    const arr = [...ticketStatus]
    //  //   const objIndex = arr.findIndex(obj => obj.id === id)
        
        
    //     const allEqual = arr => arr.every(val => val.status === arr[1]);
    //     const result = allEqual([arr.status])
    
    // if (result===true){
    // alert("chhbtrhrxhh")
    // }
        
    // }

    //     const allEqual = arr => ticketStatus.every(val => val.status === true);
    //     const result = allEqual([ticketStatus.status])
    
    // if (result===true){
    // alert("chhbtrhrxhh")
    // }
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
                                onClick={() =>onclickhandler(item.id, item.status)} > seat.{item.id}</button>
                            <oueStaus />
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

export default HooksContainer
