import React from 'react';
import { Card  } from 'react-bootstrap';
import './logout.css';
 const pic='https://tse3.mm.bing.net/th?id=OIP.1AjFjBqv7NTaAC4qFNreuQHaF8&pid=Api&P=0 '
 

function Logout() {
   return (
    <div className='logout-container'>
         <div className="card">
        <div className="card-header">
        <Card.Img  src={pic}   />
        
        </div>
        <div className="card-body">
          <p> You are leaving......Are You Sure ?</p>
          
          <button> 
          <input type="submit" value=" Yes, Log Me Out" disabled={false} />
          </button>
        </div>
      </div>
    </div>
      
    
    
  );
}

export default Logout; 