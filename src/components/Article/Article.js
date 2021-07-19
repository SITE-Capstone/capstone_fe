import React from 'react'
import './Article.css'

function Article(props) {
    return (
        <a href= {props.url} target ="_blank" className='Article'>
            <div className='text'>
                <div className='subheader'>
                    <span className='source'>{props.source}</span>
                    <span className='time'>{timeSince(new Date(props.publishedAt))} ago</span>
                </div>
                <span className='headline'>{props.headline}</span>
            </div>
            <img className='news-image' src={props.urlToImage} alt ={props.headline} />

        </a>
    )
}
function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);
  
    var interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }




export default Article
