import React from 'react';

class Item extends React.Component {
    render () {
        return (
            <div style = {styles.wrapper}>
                {this.props.products}      
                {this.props.bestsellers}    
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

export default Item; 