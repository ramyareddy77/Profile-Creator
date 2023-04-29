import React  from 'react';
 
import  '../registration/registration.css';
class  registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
     
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
   
  }
  render() {
    const styles = {
      backgroundImage: 'url("https://tse3.mm.bing.net/th?id=OIP.ij2ohyyUH1ptA4E8vxOp1QHaEK&pid=Api&P=0")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100vh'
       
    };
    
    
    const formStyles = {
      position: 'absolute',
      top: '80%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '400px',
      padding: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      textAlign: 'center'
    };
 


    return (
      <div style={styles}>
        <div style={formStyles}>
          <h1>  Registration</h1>
          <form onSubmit={this.handleSubmit}>
          <label className="input-container">
  First Name
  <input
    className="input-box"
    type="text"
    name="firstName"
    value={this.state.firstName}
    onChange={this.handleInputChange}
  />
</label>
<br />
<label className="input-container">
  Last Name
  <input
    className="input-box"
    type="text"
    name="lastName"
    value={this.state.lastName}
    onChange={this.handleInputChange}
  />
</label>
<br />
<label className="input-container">
  Email
  <input
    className="input-box"
    type="email"
    name="email"
    value={this.state.email}
    onChange={this.handleInputChange}
  />
</label>
<br />
<label className="input-container">
  Password
  <input
    className="input-box"
    type="password"
    name="password"
    value={this.state.password}
    onChange={this.handleInputChange}
  />
</label>
<br />
<label className="input-container">
  Confirm Password
  <input
    className="input-box"
    type="password"
    name="confirmPassword"
    value={this.state.confirmPassword}
    onChange={this.handleInputChange}
  />
</label>  
            <br /> 
            <button type="submit"className="logout-button" disabled={false}>Register</button>
          </form>
        </div>
      </div>
    );
  }
}

export default  registration ; 
  