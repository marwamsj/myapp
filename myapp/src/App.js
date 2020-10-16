import React,{} from 'react';

import './App.css';
import {Navbar,Nav,Form,FormControl,Button}  from "react-bootstrap";

function App() {
  return (
    <>   
       <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">First App</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>;  
    <div className="count">
      <h1>Create Account</h1>   
      
        <form noValidate>
            <div className="name">                
                <h2 >Name : </h2>              
                   <input type="text" placeholder="First name"/>
                   
                   <input type="text"placeholder="Last name"/>
                     
            </div>

             <div className="Email">
                <h2 >Email : </h2>
                <input  type="email" placeholder="email"/>
             </div>   
                        
             <div className="Password ">
                 <h2 >Password : </h2>
                 <input  type="password" placeholder="password"/>
             </div>

             <div className="Phone">
                 <h2 >Phone :</h2>
                 <input type="text" placeholder="Phone"/>
             </div>
            
            
             <label>
             <input type="checkbox" name=""/>
             I agree to the Terms of Service and Privacy Policy
             </label>
             <br></br>
            
           
            <button  type="submit">Register</button>
                
        </form>              
     </div>
    </>
  );
}

export default App;
