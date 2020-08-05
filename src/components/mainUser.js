import React from 'react'
import Styled from 'styled-components'

const StyledDiv = Styled.div`
border: 3px solid black;
border-radius: 15px;
margin: 2rem;
padding: 2rem;
`

const MainUser = props => {
    const {user} = props

    return(
        <StyledDiv>
            <h2>{user.login}</h2>
            <a href={user.html_url} target='_blank'>
                <img src={user.avatar_url} alt='user profile picture'></img>
            </a>
            <h3>{user.name}</h3>
            <p>Followers: {user.followers}</p>
            <p>Following: {user.following}</p>
        </StyledDiv>
    )
}

export default MainUser