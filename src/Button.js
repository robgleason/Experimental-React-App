import React, { Component } from 'react'
import Button from '@material-ui/core/Button';


class Buttons extends Component {
   
    constructor(props) {
        super(props);
        this.msg = "Hello"
        
         
      }
       
  
      
      handleClick() {
        console.log('this is:', this);
        
      }


      render() {
   
        return (
            
            <div className="App">
            <div className='Art'>
            <h1>Hello World</h1> 
            <h1><Button variant="contained" color="primary" >Hello!</Button></h1> 
            <h1><Button variant="contained" color="primary" >First</Button></h1> 
            <h1><Button variant="contained" color="primary" >Second</Button></h1> 
            
             <h2>{this.msg}</h2>
             <Button variant="contained" color="primary" onClick={(e) => this.handleClick(e)}>
                 Click me for Console.log </Button>
         
         <h2>  {this.msg} Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
        
        </div>
            </div>
        );
      }
    
}

export default Buttons;