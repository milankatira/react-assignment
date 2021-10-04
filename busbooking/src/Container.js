import React from 'react'
//import { useSelector, useDispatch } from 'react-redux'
import { BUYSEAT } from './redux/Action'
import { connect } from 'react-redux'
function Container(props) {
  return (

    <div>
      <h2>{props.numOfseats} </h2>
{/* 
      {props.numOfseats.map((item) => {
        return (
          <div>
            <h1>{item.id}</h1>
            <h1>{item.status}</h1>
          </div>
        )
      }

      )
      } */}

      <button onClick={() => {
        props.BUYSEATDATA(
          (
            {
              id: 1,
              status: true,
            }
          
          )          
        )
      }}> add to card </button>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    numOfseats: state.bus.numOfseats
  }
}

const mapDispatchToProps = dispatch => {
  return {
    BUYSEATDATA: data => dispatch(BUYSEAT(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)