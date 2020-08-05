import React from 'react';
import './App.css';
import Axios from 'axios';
import Users from './components/users'
import MainUser from './components/mainUser'
import Search from './components/search'
import Styled from 'styled-components'

const StyledDiv = Styled.div`
border: 3px solid black;
margin: 10%;
border-radius: 15px;
padding: 2rem;
background-color: aqua;
`

class App extends React.Component {
  // console.log('constructor')
  constructor(){
    super()
    this.state = {
      user: {},
      friends: [],
      searchValue: '',
      searchUser: ''
    }
  }

  componentDidMount(){
    console.log('cDM')
    Axios.get(`https://api.github.com/users/kevinlam2980`)
    .then((res) => {
      this.setState({user: res.data})
    })

    Axios.get(`https://api.github.com/users/kevinlam2980/followers`)
    .then((res) => {
      this.setState({friends: res.data})
    })
  }

  componentDidUpdate(prevProps, prevState){
    console.log('cDU')
    if(prevState.searchUser !== this.state.searchUser)
    Axios.get(`https://api.github.com/users/${this.state.searchUser}`)
    .then((res) => {
      this.setState({user: res.data})
    })

    Axios.get(`https://api.github.com/users/${this.state.searchUser}/followers`)
    .then((res) => {
      this.setState({friends: res.data})
    })
  }

  onHandleChange = evt => {
    this.setState({[evt.target.name]: evt.target.value})
  }

  submit = evt => {
    console.log('submit')
    evt.preventDefault()
    this.setState({
      searchUser: this.state.searchValue})
}

  render(){
console.log('render')
    return (
      <StyledDiv className="App">
        <Search onHandleChange={this.onHandleChange} searchValue={this.state.searchValue} submit={this.submit}/>
        <MainUser user={this.state.user}/>
        <Users users={this.state.friends}/>
      </StyledDiv>
    );
  }
}

export default App;
