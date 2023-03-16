
import './App.css';

import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import Headlines from './Components/Headlines';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// component class based, we can add member and methods and can access it with this
//rcc -->short cut for class based component

// export default class App extends Component {
  const App=()=>{
  let page=6;
  let country="in";
  let appKey=process.env.REACT_APP_NEWS_API;

  const [progress, setprogress] = useState(0)

  const setProgress=(progress)=>{
    setprogress(progress)
  }

  // render() {
    return (
      <div>
      <Router>
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <NavBar/>
        <Headlines/>
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="home" pageSize={page} country={country} ApKey={appKey} category={"general"}/>}/>
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={page} country={country} ApKey={appKey} category={"business"}/>}/>
          <Route exact path="/sport" element={<News setProgress={setProgress} key="sports" pageSize={page} country={country} ApKey={appKey} category={"sports"}/>}/>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={page} country={country} ApKey={appKey} category={"entertainment"}/>}/>
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={page} country={country} ApKey={appKey} category={"science"}/>}/>
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={page} country={country} ApKey={appKey} category={"technology"}/>}/>
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={page} country={country} ApKey={appKey} category={"health"}/>}/>
          <Route exact path="/general" element={<News setProgress={setProgress} key="general" pageSize={page} country={country} ApKey={appKey} category={"general"}/>}/>
        </Routes>
        

      </Router>
      </div>
    )
  // }
}

export default App;