import './App.css';
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fa } from '@fortawesome/free-solid-svg-icons'

class Quote extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      randomIndex: 0,
    };
    this.changeContent = this.changeContent.bind(this)
  }
  
  componentDidMount() {
    const colorIndex = Math.floor(Math.random() *  8);
    const colors = ['#35A29F', '#EB6440', '#03C988', '#009EFF', '#8D72E1', "#47B5FF", "#FF5677", "#FFC947"];
    const newColor = colors[colorIndex];
     document.documentElement.style.setProperty('--primary-color', newColor);
    
    this.setState({
      randomIndex: Math.floor(Math.random() * 10),
      //colorIndex: Math.floor(Math.random() * 5)
    })
  }
  
  changeContent(){
    const newRandomIndex = Math.floor(Math.random() * 10);
    const colorIndex= Math.floor(Math.random() * 8)
     const colors = ['#35A29F', '#EB6440', '#03C988', '#009EFF', '#8D72E1', "#47B5FF", "#FF5677", "#FFC947"];
    const newColor = colors[colorIndex];
     document.documentElement.style.setProperty('--primary-color', newColor);
    
    this.setState({
      randomIndex: newRandomIndex,
    });
  }
  
  render(){
    const quotes = {
  "The only way to do great work is to love what you do.": "Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.": "Winston Churchill",
  "Don't count the days, make the days count.": "Muhammad Ali",
  "In the middle of every difficulty lies opportunity.": "Albert Einstein",
  "The only thing necessary for the triumph of evil is for good men to do nothing.": "Edmund Burke",
  "The journey of a thousand miles begins with a single step.": "Lao Tzu",
  "Life is what happens when you're busy making other plans.": "John Lennon",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.": "Ralph Waldo Emerson",
  "In three words I can sum up everything I've learned about life: it goes on.": "Robert Frost",
  "The best time to plant a tree was 20 years ago. The second best time is now.": "Chinese Proverb"
};
    const quoteArray = Object.entries(quotes);
    const [quote, author] = quoteArray[this.state.randomIndex];
    
    return(
    <div id="wrapper">
        <div id="quote-box">
        <div id="quote-text">
          <i class="fa fa-quote-left"></i>
          <span id="text">{quote}</span>
        </div>
        <div class="quote-author">
          - <span id="author">
            {author}
          </span>
         </div>
      
        <div class="buttons">
          <div class="left-icons">
            <a id="tweet-quote" href="twitter.com/intent/tweet">
            <i class="fa-brands fa-twitter"></i>
            {/* <FontAwesomeIcon icon="fa-brands fa-twitter" /> */}
          </a>
          <a href="https://www.tumblr.com/">
            <i class="fa-brands fa-tumblr"></i>
          </a>
          </div>
          <button id="new-quote" onClick={this.changeContent}>New Quote
      </button>
        </div>
    </div>
        <div class="footer">by <a href='www.norzan.com'>Norzang</a></div>
    </div>    
  )
  }
}

export default Quote
