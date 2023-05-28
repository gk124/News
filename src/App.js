
import './App.css';

import React, { useState,useEffect } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import Login from './Components/login';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";


  const App=()=>{

    const [user,setUser]= useState(null);

  useEffect(()=>{
    const getUser=()=>{
      fetch('http://localhost:5000/auth/login/success',{
        method:'GET',
        credentials:"include",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json",
          "Access-Control-Allow-Credentials":true,
        },
      }).then((response)=>{
        if(response.status===200)
          return response.json();
        throw new Error("Authentication has been failed");
      }).then((resObject)=>{
        setUser(resObject.user);
      }).catch((err)=>{
        console.log(err);
      })
    }
    getUser();
  },[]);




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
        <NavBar user={user}/>
        {/* <Headlines/> */}
        <Routes>
          <Route path='/login' element={user? <Navigate to='/'/> : <Login />}/>
          <Route exact path="/" element={user?<News setProgress={setProgress} key="home" pageSize={page} country={country} ApKey={appKey} category={"general"}/>: <Navigate to="/login"/>}/>
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