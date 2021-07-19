import React from 'react'

function Article(props) {
    return (
        <div>
            <div className='text'>
                <div className='subheader'>
                    <span className='source'>{props.src}</span>
                    <span className='time'>{props.time}</span>
                </div>
                <span className='headline'></span>
            </div>
            <img src={props.url} alt ={props.headline} />
            
        </div>
    )
}

export default Article
