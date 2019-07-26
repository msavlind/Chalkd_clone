import React from 'react';
import Item from './Item.js';

class List extends React.Component {

    render () {
            this.productMapper = this.props.products.map(ele => {
            if(ele.onSale === true) {
             return <div className="products">
           <div className="onSale"><p>On Sale</p></div>
           <img className="img" src={(ele.imgUrl)}/>
           <div className="name">{ele.name}</div>
           <div className="price">{ele.price}</div><hr style = {styles.hr}/>
                   </div>
            } else {
             return <div className="products">
             <img className="img" src={(ele.imgUrl)} />
             <div className="name">{ele.name}</div>
             <div className="price">{ele.price}</div><hr style = {styles.hr}/>
             </div>
             }
         });
         
         this.bestsellerMapper = this.props.bestsellers.map((ele,i )=> {
            if(ele.onSale === true) {
                return <div key = {i} className="products">
            <div className="onSale"><p>On Sale</p></div>
            <img className="img" src={(ele.imgUrl)}/>
            <div className="name">{ele.name}</div>
            <div className="price">{ele.price}</div><hr style = {styles.hr}/></div>
            } else {
                return <div key = {i} className="products">
                <img className="img" src={(ele.imgUrl)} />
                <div className="name">{ele.name}</div>
                <div className="price">{ele.price}</div><hr style = {styles.hr}/>
                </div>
                }
            });

        return (    
            <div>
                <Item products = {this.productMapper} />

                <div>
                  <h1>BESTSELLERS</h1>
                  <hr style = {styles.hr}/>
                </div>
                <Item bestsellers = {this.bestsellerMapper} />
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

export default List;
