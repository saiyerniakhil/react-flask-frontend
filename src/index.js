import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components' 

const Button = styled.button`
background: transparent
border-radius: 3px;
border 2px solid #1565C0;
color: #1565C0;
margin: 0 1em;
padding: 0.25em 1em;
align: center;
` 
const Li = styled.li`
  decoration: none;
`


const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: #BBDEFB;
  border: none;
  border-radius: 3px;
`
const StyledDiv = styled.div`
  border: 3px solid #1565C0;
  border-radius: 5px;
  margin: auto;
  width: 300px;
  height: 150px;
  text-align: center;
`

class App extends React.Component {
  state = {
    data : []
  }
  fetchUsers() {
    fetch('http://127.0.0.1:5000/users')
    .then(response => response.json())
    .then(result => this.setState({
      data: result["data"]
    }))
  }
  

  componentDidMount() {
    this.fetchUsers()
  }
  render() {
    return (
      <StyledDiv className="form-group">  
        <form action="http://127.0.0.1:5000/signup/">
        Sign Up
          <br/>
          <Input name="msg" placeholder="username"></Input>
          <br/>
          <Input name="pass" type="password" placeholder="password"></Input>
          <br/>
          <Button type="submit">Sign up</Button>
          <br/>
        </form>
        <br/>
        <h1> (OR) </h1>
        <form action="http://127.0.0.1:5000/login/">
        Login 
        <br/>
          <Input name="msg" placeholder="email"></Input>
          <br/>
          <Input name="pass" placeholder="password" type="password"></Input>
          <br/>
          <Button>Login</Button>
        </form>
        <ul>
          {this.state.data.map(item => (
            <Li key={item["id"]}>
                {item["username"]}
            </Li>
          ))}
        </ul>
      </StyledDiv>
    )
    
  }
}

ReactDOM.render(<App/>,document.querySelector("#root"))