import React, { Component } from "react";
import Scrollchor from "react-scrollchor";
import "./App.css";
import GoogleMapReact from 'google-map-react';
import Navbar from './Navbar'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      withTarget: false
    };
  }
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    const { withTarget } = this.state;
    const target = withTarget ? 'page-wrap' : undefined;
    console.log(target)

    return (
      <div className="App">

        <div id="page-wrap">

          <div className='header'>
            <Scrollchor to='home' target={target} animate={{offset: 0, duration: 400}}>Home</ Scrollchor>
            <Scrollchor to="about" target={target} animate={{offset: 0, duration: 400}}>About Us</Scrollchor>
            <Scrollchor to="packages" target={target} animate={{offset: 0, duration: 400}}>Pricing & Packages</Scrollchor>
            <Scrollchor to='contact' target={target} animate={{offset: 0, duration: 400}}>Contact Us</Scrollchor>
            </div>
            
        
          <div id="home" className='one'>

          <h1 >Let us build your dream website</h1>
          <Scrollchor to='contact' target={target} animate={{offset: 0, duration: 400}}>More Info</Scrollchor>
          </div>


          <div id="about" className='two'>

          <h1>About Us:</h1>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed luctus magna. Ut sit amet purus porttitor, mattis mauris eget, tincidunt risus. Fusce quis tempus mi, sit amet porta arcu. Suspendisse aliquet nulla eget nisi fringilla consectetur. Curabitur id purus non quam consequat suscipit. In mauris lectus, tempor sit amet leo et, lacinia bibendum ante. Nulla vitae neque mauris. Aliquam efficitur erat eu eros vehicula rhoncus. Fusce semper turpis molestie metus porttitor, in placerat orci porttitor. Donec porta velit dui, sed aliquet leo maximus vel. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam eu egestas enim, vel vehicula diam. Cras laoreet malesuada velit, ut rutrum neque fermentum quis.</p>
          <img src='https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1d7ce94cbe867b0563dbb554ba430a17&auto=format&fit=crop&w=2734&q=80'/>
          </div>


          <div className='three' id="packages">  

          <h1 >Prices and Packages:</h1>

          <div class="column">
            
              <p className='columnp' style={{fontSize: '30px', color:'rgb(154, 89, 39)'}}>Bronze Package</p>
              <ul class="price">
              <li class="header">Basic</li>
              <li class="grey">$ 9.99 / year</li>
              <li>10GB Storage</li>
              <li>10 Emails</li>
              <li>10 Domains</li>
              <li>1GB Bandwidth</li>
              <Scrollchor to='contact' target={target} animate={{offset: 0, duration: 400}}>More Information</Scrollchor>
            </ul>
            </div>

             <div class="column">
            
            <p style={{fontSize: '30px', color: 'silver'}}>Silver Package</p>
              <ul class="price">
              <li class="header">Basic</li>
              <li class="grey">$ 9.99 / year</li>
              <li>10GB Storage</li>
              <li>10 Emails</li>
              <li>10 Domains</li>
              <li>1GB Bandwidth</li>
              <Scrollchor to='contact' target={target} animate={{offset: 0, duration: 400}}>More Information</Scrollchor>
            </ul>
            </div>

             <div class="column">

            
              <p style={{fontSize: '30px', color:'gold'}}>Gold Package</p>
              <ul class="price">
              <li class="header">Basic</li>
              <li class="grey">$ 9.99 / year</li>
              <li>10GB Storage</li>
              <li>10 Emails</li>
              <li>10 Domains</li>
              <li>1GB Bandwidth</li>
              <Scrollchor to='contact' target={target} animate={{offset: 0, duration: 400}}>More Information</Scrollchor>
            </ul>

            </div>





          </div>

          <div className='four' id='contact'>

          <h1 className='contactus'>Contact Us:</h1>
          <div className='address'>
          <h2>P.O Box 1470, 
            <br/>
            Salt Lake City, UT</h2>
            <br/>
            <h2>Phone: 1-888-888-8888</h2>
            <h2>Email: generic@email.com</h2>
            </div>

          <form className='contactform'>
            <p>Name: </p>
            <input type='text' placeholder="Name"/>
            <p>Email: </p>
            <input type='email' placeholder='E-mail'/>
            <p>Package Type: </p>
            <select>
              <option>Which Package?</option>
              <option>Bronze Package</option>
              <option>Silver Package</option>
              <option>Gold Package</option>
            </select>
            <p>How can we help you? </p>
            <textarea  className='textarea' type='textarea' placeholder='Tell us your Dream site'></textarea>
            <button>Submit</button>
          </form>
          </div>


        </div>

      </div>
    );
  }
}

export default App;

