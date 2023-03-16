import React, { Component } from 'react'

// export class NewsItem extends Component {
  const NewsItem=(props)=>{                //for function based this is not used eg. this.props-->props
  // render() {
    let { title, description, imageUrl, read, time, author,source } = props;

    return (
      <>
        <div className='py-3'>
          <div className="card">
            
            <img src={imageUrl ? imageUrl : "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5><span className="badge bg-danger">{source}</span>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className='text-muted'>By {author ? author : "Unknown"} on {new Date(time).toGMTString()}</small></p>
              <a href={read} className="btn btn-sm btn-dark" target="_blank" rel='noreferrer'>Read More</a>
            </div>
          </div>
        </div>

      </>
    )
  // }
}

export default NewsItem