import React from 'react'
import Styled from 'styled-components'

const StyledDiv = Styled.div`
border: 2px solid black;
display: flex;
border-radius: 15px;
img {
    border-radius: 15px;
    margin: 2rem;
    padding: 2rem;
    height: 200px;
}
`

const User = props => {
const {user} = props

return (
    <StyledDiv>
        <a href={user.html_url}>
        <img src={user.avatar_url} alt='User profile picture'></img>
        </a>
        <div>

        <h2>{user.login}</h2>
        <p>Bio: {user.bio}</p>
        </div>
    </StyledDiv>
)
}

export default User