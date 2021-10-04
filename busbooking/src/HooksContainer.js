import React from 'react'
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { BUYSEAT } from './redux/Action'
import { initialState } from './redux/Reducer';

const HooksContainer = () => {
    const ticketStatus = useSelector(state => state.bus);
    const dispatch = useDispatch();

    // const whichClick=(ostatus)=>{
    //     const arr = [...ticketStatus]
    //     const objIndex = arr.find(obj => obj.status == ostatus)
    //     if(obj.status==true)
    //     {
    //     alert("hello")
    //     }
    // }
    // const whichClick=()=>{
    // alert("hello")
    // }

    // const alertfunction = (ostatus) => {
    //     if (ostatus == true) {
    //         alert('seat is already booked')
    //     }
    // }

    // const changecolor = (ostatus) => {
    //     if (ostatus == true) {

    //     }
    // }
    const onclickhandler = (id, ostatus) => {
        const arr = [...ticketStatus]
        const objIndex = arr.findIndex(obj => obj.id == id)
        arr[objIndex].status = true

        if (ostatus == true) {
            alert('seat is already booked')
        }

        else {
            dispatch(BUYSEAT(arr))
        }
    }

    // let successtyle = {
    //     backgroundcolor: '#4ef542'
    // }

    // let worningstyle = {
    //     backgroundcolor: '#4ef2'
    // }
    return (
        <div className="seat_status">


            {ticketStatus.map((item) => {
                return (
                    <div className='button_size'>
                        <button                            
                            style={{ backgroundColor: (item.status==true) ? '#ff6b6b' : '#90ff6b' ,
                            margin:'10px',
                            height: '30px',
                            width: '60px',
                            color: 'black',
                            alignitem: 'center',
                            border: 'none',
                            }}
                            onClick={() => { onclickhandler(item.id, item.status) }} > seat.{item.id}</button>
                    </div>
                )
            }

            )
            }

        </div >
    )
}

export default HooksContainer
