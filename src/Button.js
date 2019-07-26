import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import img0 from "./0.png";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
import img6 from "./6.png";

class Buttons extends Component {
   
    constructor(props) {
        super(props);
        // this.msg = "Hello"
        this.state = {  title: "Click here", title2: "(No, here!)", msg: "Hello!", randNum: "0" } 
       
        
        }; 
        
        static defaultProps = {
          
          images: [img0, img1, img2, img3, img4, img5, img6]

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

      rando = () => {
       
        
        let x = toString(Math.random(0,6))
        this.setState({ randNum: "2" });
       
       
     };
      
      handleClick() {
        console.log('this is:', this);
        console.log(this.msg);
      }


      render() {
      let randNum = 0;
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

        <h1><Button variant="contained" color="primary" onClick={(e) => this.rando(e)}>Random Pokemon!</Button></h1> 

         <img src={this.props.images[this.state.randNum]} alt="Random Picture"/>
    
        </div>
            </div>
        );
      }
    
}

export default Buttons;