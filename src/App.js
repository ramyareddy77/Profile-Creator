import {React,Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import login from './components/login/login';


 

class App extends Component {
  render(){
  return(
    <div className='App'>
      
      <Navbar/>
     </div>
     
    );
  }
}
export default App;
