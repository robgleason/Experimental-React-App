import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import img0 from "./0.png";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
import img6 from "./6.png";
import Slider from './slider';

class Buttons extends Component {
   
    constructor(props) {
        super(props);
        // this.msg = "Hello"
        this.handleCick = this.handleCick.bind(this);
        this.state = {  title: "Click here", title2: "(No, here!)", msg: "Hello!", idx: "0", random: 0 };    
       
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


     handleCick() {

 
      const rand = Math.floor(Math.random() * 7);
      this.setState({ random:  rand });
     }

      rando(evt) {
       
       
        this.setState(st => ({
          
          idx: st.idx + 1 }));
          
        
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
            <h1><Slider/></h1>
            <h1><Button variant="contained" color="primary" onClick={(e) => this.reset(e)}>Click Me!</Button></h1> 
            
             <h2>{this.state.msg}</h2>
            
         
         <h2> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
         <h2> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>


         

         <h1><Button variant="contained" color="primary" onClick={this.handleCick.bind(this)}>Random Pokemon</Button></h1>
         <img src={this.props.images[this.state.random]} alt="Random Picture"/>
    

      <Card  >
      <div
        
        
        
      >
        <CardMedia
          
        />
      </div>
      <CardContent >
        <h3></h3>
       

          <Slider/>
        </CardContent>
        </Card>


        </div>
            </div>
        );
      }
    
}

export default Buttons;