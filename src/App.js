import React from 'react';
import List from './List.js';
import './App.css';

class App extends React.Component {
  render() {
    this.productList = [{
        name: 'Chalkd Markers - 6mm chisel/bullet tip',
        price: '$5.99',
        onSale: false,
        imgUrl: 'https://cdn.shopify.com/s/files/1/0074/8332/products/28945342_10159172239483504_1731435066_o_large.jpg?v=1520830773',
      },
      {
        name: 'FREE SHIPPING! Chalkd - Chalkboard Wall Decal',
        price: '$30.00',
        onSale: false,
        imgUrl: 'https://cdn.shopify.com/s/files/1/0074/8332/products/chalkboard_sticker_01_large.jpg?v=1338087663',
      },
      {
        name: 'Chalkd Markers - 6mm chisel/bullet tip',
        price: '$5.99',
        onSale: true,
        imgUrl: 'https://cdn.shopify.com/s/files/1/0074/8332/products/chalkboard400X800_large.jpg?v=1309091081',
      },
      {
        name: 'Chalkd Markers - 6mm chisel/bullet tip',
        price: '$5.99',
        onSale: true,
        imgUrl: 'https://cdn.shopify.com/s/files/1/0074/8332/products/28945342_10159172239483504_1731435066_o_large.jpg?v=1520830773',
      },
      {
        name: 'Chalkd Markers - 6mm chisel/bullet tip',
        price: '$5.99',
        onSale: false,
        imgUrl: 'https://cdn.shopify.com/s/files/1/0074/8332/products/28945342_10159172239483504_1731435066_o_large.jpg?v=1520830773',
      },
      {
        name: 'Chalkd Markers - 6mm chisel/bullet tip',
        price: '$5.99',
        onSale: false,
        imgUrl: 'https://cdn.shopify.com/s/files/1/0074/8332/products/28945342_10159172239483504_1731435066_o_large.jpg?v=1520830773',
      },
      {
        name: 'Chalkd Markers - 6mm chisel/bullet tip',
        price: '$5.99',
        onSale: true,
        imgUrl: 'https://cdn.shopify.com/s/files/1/0074/8332/products/28945342_10159172239483504_1731435066_o_large.jpg?v=1520830773',
      },
      {
        name: 'Chalkd Markers - 6mm chisel/bullet tip',
        price: '$5.99',
        onSale: true,
        imgUrl: 'https://cdn.shopify.com/s/files/1/0074/8332/products/28945342_10159172239483504_1731435066_o_large.jpg?v=1520830773',
      },
      {
        name: 'Chalkd Markers - 6mm chisel/bullet tip',
        price: '$5.99',
        onSale: false,
        imgUrl: 'https://cdn.shopify.com/s/files/1/0074/8332/products/28945342_10159172239483504_1731435066_o_large.jpg?v=1520830773',
      },
      {
        name: 'Chalkd Markers - 6mm chisel/bullet tip',
        price: '$5.99',
        onSale: false,
        imgUrl: 'https://cdn.shopify.com/s/files/1/0074/8332/products/28945342_10159172239483504_1731435066_o_large.jpg?v=1520830773',
      },
      {
        name: 'Chalkd Markers - 6mm chisel/bullet tip',
        price: '$5.99',
        onSale: false,
        imgUrl: 'https://cdn.shopify.com/s/files/1/0074/8332/products/28945342_10159172239483504_1731435066_o_large.jpg?v=1520830773',
      },
      {
        name: 'Chalkd Markers - 6mm chisel/bullet tip',
        price: '$5.99',
        onSale: false,
        imgUrl: 'https://cdn.shopify.com/s/files/1/0074/8332/products/28945342_10159172239483504_1731435066_o_large.jpg?v=1520830773',
      },
    ];

    this.bestsellerList = [{
        name: 'Chalkd Markers - 6mm chisel/bullet tip',
        price: '$5.99',
        onSale: true,
        imgUrl: 'https://cdn.shopify.com/s/files/1/0074/8332/products/28945342_10159172239483504_1731435066_o_large.jpg?v=1520830773',
      },
      {
        name: 'Chalkd Markers - 6mm chisel/bullet tip',
        price: '$5.99',
        onSale: false,
        imgUrl: 'https://cdn.shopify.com/s/files/1/0074/8332/products/28945342_10159172239483504_1731435066_o_large.jpg?v=1520830773',
      },
      {
        name: 'Chalkd Markers - 6mm chisel/bullet tip',
        price: '$5.99',
        onSale: false,
        imgUrl: 'https://cdn.shopify.com/s/files/1/0074/8332/products/28945342_10159172239483504_1731435066_o_large.jpg?v=1520830773',
      },
      {
        name: 'Chalkd Markers - 6mm chisel/bullet tip',
        price: '$5.99',
        onSale: true,
        imgUrl: 'https://cdn.shopify.com/s/files/1/0074/8332/products/28945342_10159172239483504_1731435066_o_large.jpg?v=1520830773',
      },
    ];
    
    return (
      <div style= {styles.container}>
      <div className = "navbar">
        <h3><ul>
              <img src="https://cdn.shopify.com/s/files/1/0074/8332/t/3/assets/logo.png?0"/>
              <li>Home</li>
              <li>Shop</li>
              <li>Blog</li>
              <li>Custom</li>
              <li>Corporate</li>
              <li>Contact</li>
              </ul>
          </h3>
      </div>
        <h3 id="cart"> Cart (0)</h3>

        <div className="menu">
        <hr style = {styles.hr}/>
          <h2>
          <ul>
            <li>FREE STANDING</li>
            <li>ZEN</li>
            <li>SHAPES</li>
            <li>GEO</li>
            <li>FRAMES & CHALKLEDGES</li>
            <li>QUOTES FOR CUSTOM BLACKBOARDS</li>
          </ul>

          <hr style = {styles.hr}/>
          <ul>
            <li>METAL/MAGNETIC</li>
            <li>CHALK & MARKERS</li>
            <li>DECALS & MORE</li>
          </ul>
          </h2>
          <br/><br/><br/>
          <hr style = {styles.hr}/>
        </div>
        
        <a className="win" href="http://www.chalkd.co.nz/pages/monthly-competition">
        <img src="https://cdn.shopify.com/s/files/1/0074/8332/t/1/assets/win.png?339" />
        </a>
         
         <div><List products = {this.productList} bestsellers = {this.bestsellerList}/></div>

       <div id = "footer">
       <hr style = {styles.hr}/>
       <div style = {styles.wrapper}>
              <ul>
                <h3>CHALK US OUT!</h3>
                <li><img width="18vw" src="https://cdn.shopify.com/s/files/1/0074/8332/t/1/assets/Friend us on Facebook.jpg?278" />Friend Us On Facebook</li>
                <li>Follow Our Tweets</li><br/>
                <li>Testimonials</li><br/>
                <li>About</li>
              </ul>

              <ul>
                <h3>OUR CREATIVE FRIENDS</h3>
                <li>PAWSOME</li><br/>
                <li>Keepsake Frames</li>
              </ul>

              <ul>
                <h3>WANT EVEN MORE?</h3>
                <li>Shipping info</li><br/>
                <li>Get In Touch!</li><br/>
                <li>Chalkd Australia</li>
              </ul>

              <ul>
                <h3>SEARCH</h3>
                <li><input type="text" placeholder="Search..."></input></li>
              </ul>
        </div>
       </div> 

      </div>
    );
  } 
}

const styles = {
  container: {
    margin: '4vh 8vw',
    border: '3px solid #f2f2f2',
    fontFamily: 'Georgia, Utopia, Times New Roman, Times, serif',
  },
  wrapper: {
    clear: 'both',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: '1em',
    margin: '3vh 3vw',
    position: 'relative',
  },

  hr: {
    border: '1.5px solid #f2f2f2',
    clear: 'both',
  },

}

export default App;
