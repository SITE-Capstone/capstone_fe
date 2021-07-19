import React from 'react'

function Article(props) {
    return (
        <div>
            <div className='text'>
                <div className='subheader'>
                    <span className='source'>{props.source}</span>
                    <span className='time'>{props.publishedAt}</span>
                </div>
                <span className='headline'>{props.headline}</span>
            </div>
            <img src={props.urlToImage} alt ={props.headline} />
            
        </div>
    )
}

export default Article
