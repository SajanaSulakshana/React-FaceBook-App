import React from 'react'
import NavBar from '../../components/Navigation/NavBar'
import PostPane from '../../components/PostPane/PostPane'
import LeftPane from '../../components/LeftPane/LeftPane'
import RightPane from '../../components/RightPane/RightPane'
import "./home.css"


export default function Home() {
  return(
    <>
    <NavBar/>
    <div className="bottomContainer">
    <LeftPane/>
      <PostPane/>
      <RightPane/>
      
    </div>
    </>
  )
  
}
