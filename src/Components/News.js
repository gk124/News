import React, { Component,useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";
import Spiner from './Spiner';

// export class News extends Component {
const News=(props)=>{

    const [articles, setarticle] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [total, settotal] = useState(0)
  
  // constructor(){
  //   super();
  //   console.log("This is Constructs from news");
  //   this.state={
  //     articles:[],
  //     loading:true,
  //     page:0,          //for infinite scroll else it is page:1 for next and prev
  //     total:0
  //   }
  // }

  // async componentDidMount(){
    const updateNews = async()=>{
    props.setProgress(10);
    // setpage(0)
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.ApKey}&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({loading:true})
    setloading(true);
    let data=await fetch(url);
    props.setProgress(30);
    let parsedData=await data.json();
    props.setProgress(70);
    console.log(parsedData);
    setarticle(parsedData.articles)
    setloading(false)
    settotal(Math.ceil(parsedData.totalResults/props.pageSize))
    setpage(page+1)

    // this.setState({
    //   articles:parsedData.articles,
    //   total:Math.ceil(parsedData.totalResults/props.pageSize),
    //   // total:parsedData.totalResults,
    //   page:this.state.page + 1,     //for infinite scroll else it is not here
    //   loading:false,
    // })
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
  }, [])
  
  

  // const handlePrevPage=async()=>{
  //   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.ApKey}&page=${this.state.page>1?this.state.page -1:1}&pageSize=${props.pageSize}`;
  //   // this.setState({loading:true})
  //   setloading(true)
  //   let data=await fetch(url);
  //   let parsedData=await data.json();
  //   // console.log(parsedData);

  //   setarticle(parsedData.articles)
  //   setloading(false)
  //   settotal(total+1)
  //   setpage(page-1)

  //   // this.setState({
  //   //   page:this.state.page - 1,
  //   //   articles:parsedData.articles,
  //   //   total:this.state.total+1,
  //   //   loading:false,
  //   // })
  // }


  // const handleNextPage=async()=>{
  //   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.ApKey}&page=${this.state.page +1}&pageSize=${props.pageSize}`;
  //   // this.setState({loading:true})
  //   setloading(true)
  //   let data=await fetch(url);
  //   let parsedData=await data.json();
  //   // console.log(parsedData);
  //       setarticle(parsedData.articles)
  //       setloading(false)
  //       settotal(total-1)
  //       setpage(page+1)

  //   // this.setState({
  //   //   page:this.state.page + 1,
  //   //   articles:parsedData.articles,
  //   //   total:this.state.total-1,
  //   //   loading:false,
  //   // })
    
  // }

  const fetchMoreData = async() => {
    // this.setState({page:this.state.page + 1,});
    
    console.log(page);
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.ApKey}&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({loading:true})
    setloading(true)
    let data=await fetch(url);
    let parsedData=await data.json();
    // console.log(parsedData);

    setpage(page+1)
    setarticle(articles.concat(parsedData.articles))
    settotal(parsedData.totalResults)
    setloading(false)

    // this.setState({
    //   page:this.state.page + 1,
    //   articles:this.state.articles.concat(parsedData.articles),
    //   // total:this.state.total-1,                //for next and prev
    //   total:parsedData.totalResults,         //for infinite scroll else it is not here
    //   loading:false,
    // })
  };


  // render() {
    return (
      <>
        <div className="container" style={{marginTop:"135px"}}>
            <h1 className='text-center p-4'>NewsMania-Top {props.category.charAt(0).toUpperCase()+props.category.slice(1)} Headlines</h1>
            {/* for infinite scroll */}
            {(loading && <Spiner/>)}      

              <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== total}               //this.state.total and other with class based
                loader={articles.length !== total && <Spiner/>}
              >    
              {/* above tag is extra in case of infinite scroll */}
              <div className="container">
                <div className="row px-3">
                  {/* {!this.state.loading && this.state.articles.map((element)=>{ */}
                  {/* for infinite scroll */}
                  
                  {articles.map((element,ind)=>{
                    return(
                      
                      <div className="col-md-4 px-4" key={ind}>
                        {/* {document.title=`NewsMonkey-${props.category.charAt(0).toUpperCase()+props.category.slice(1)}`} */}
                        <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} read={element.url} time={element.publishedAt} author={element.author} source={element.source.name}/>
                      </div>
                    )
                  })}
                </div>
              </div>
            </InfiniteScroll>
          {/* <div className="container p-5">
            <div className="d-flex justify-content-between">
              <button disabled={page<=1} className="btn btn-sm btn-dark" onClick={handlePrevPage}>&larr; Previous</button>
              <button disabled={total===1} className="btn btn-sm btn-dark" onClick={handleNextPage}>Next &rarr;</button>
            </div>
          </div> */}
        </div>
      </>
    )
  // }
}

export default News