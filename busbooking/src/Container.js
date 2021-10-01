import React from 'react'
//import { useSelector, useDispatch } from 'react-redux'
import { BUYSEAT } from './redux/Action'
import { connect } from 'react-redux'
function Container(props) {
  return (

    <div>
      <h2>Number of seats - {props.numOfseats} </h2>
      <button onClick={props.BUYSEAT}>Buy seat</button>
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
    BUYSEAT: () => dispatch(BUYSEAT())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)