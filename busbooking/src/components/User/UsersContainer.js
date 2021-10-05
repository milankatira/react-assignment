import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../Userredux/UserAction'



function UsersContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers()
  }, [])
  
  return userData.error ? (<h2>{userData.error}</h2>) : (
    <div>
      <h2>Users List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map(user =>
          <div>
          <p>{user.name}</p>
          <p>{user.username}</p>
          </div>
          )}
        
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer)