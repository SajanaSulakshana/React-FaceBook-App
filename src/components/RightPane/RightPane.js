import React from 'react'
import "./rightPane.css"

export default function RightPane() {
  return (
    <div className='rightPaneBox'>
      <div className="rightPaneContainer">
        <div className="adContainer">
          <span className="sponsered">Sponsered</span>
          <img src="/images/food.jpg" alt="" className="adImage" />
          <span className="adText">
            Order your food with SaJJa food Delivere service..We can delevery your food one minute..
          </span>
        </div>
        <div className="birthdayContainer">
          <img src="/images/box.avif" alt="" className="birthdayImage" />
          <span className="birthdayText"><b>Sajana Sulakshana</b> and <b>2 others</b> having birthday today...!</span>
        </div>
        <div className="friendList">
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/person.jpg" alt="" className="onlineFrindImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Sajee Perera</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/person.jpg" alt="" className="onlineFrindImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Ayesh Udayanga</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/person.jpg" alt="" className="onlineFrindImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Sahas Sasmitha</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/person.jpg" alt="" className="onlineFrindImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Naveen Jeewan</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/person.jpg" alt="" className="onlineFrindImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Ajith Janaka</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/person.jpg" alt="" className="onlineFrindImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Rashika Krishanthi</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/person.jpg" alt="" className="onlineFrindImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Amashi Ayodya</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/images/person.jpg" alt="" className="onlineFrindImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Tharushi Himasha</span>
          </li>
        </div>
      </div>
    </div>
  )
}
