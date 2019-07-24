import React, { Component } from 'react'
import Button from '@material-ui/core/Button';


class Buttons extends Component {
   
    constructor(props) {
        super(props);
        // this.msg = "Hello"
        this.state = {  title: "Click here", title2: "(No, here!)", msg: "Hello!" }        
      }
       
   
      changeTitle = () => {
        this.setState({ title: "New title" });
     };
      changeTitleTwo = () => {
        this.setState({ title2: "Newer title" });
     };

      reset = () => {
        this.setState({ msg: "Goodbye!" });
     };
      
      handleClick() {
        console.log('this is:', this);
        console.log(this.msg);
      }


      render() {
    
        return (
            
            <div className="App">
            <div className='Art'>
            <h1>Hello World</h1> 
           
            <h1><Button variant="contained" color="primary" onClick={(e) => this.reset(e)}>Click Me!</Button></h1> 
            
             <h2>{this.state.msg}</h2>
             <Button variant="contained" color="primary" onClick={(e) => this.handleClick(e)}>
                 Check your console.log  </Button>
         
         <h2> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
         <h1 onClick={this.changeTitle}>{this.state.title}</h1>
         <h1 onClick={this.changeTitleTwo}>{this.state.title2}</h1>
         
    
        </div>
            </div>
        );
      }
    
}

export default Buttons;