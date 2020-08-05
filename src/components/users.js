import React from 'react'
import User from './user'

const Users = props => {
    const { users } = props

    return (
        <div>
                <h3>User's followers</h3>
            {
                users.map(user => {
                    return <User user={user} key={user.id}/>
                })
            }
        </div>
    )
}

export default Users