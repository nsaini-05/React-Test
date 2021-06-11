import React, { useState, useEffect, Fragment } from "react";
import MessageContainer from "./MessageContainer";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {select} from "../redux/slices/userSlice"
var faker = require('faker');


const SideBarStyle = styled.div`
  min-width: 25%;
  height : calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  border-right: 1px solid  #b8b9c9;
  overflow: auto ;

  .search {
    display: flex;
    align-items: center;
    min-height: 50px;
    justify-content: space-between;
    color: gray;
    padding-right: 10px;
    flex-wrap: wrap;

    input {
      border: none;
      outline: none;
      margin-left: 5px;
      font-size: 14px;
    }
  }

  .tiles {
    min-height: 50px;
    padding: 15px 15px 15px 0;    
    border-bottom: 1px solid  #b8b9c9;
    display: flex;
    align-items: center;
    overflow: hidden;

    .photo {
      border-radius: 50%;
      width: 42px;
      height: 42px;
      margin: 0 5px;
      display: inline-block;
      vertical-align: middle;
    }
    h4{
        color : dodgerblue;
    }
    p{
        color : darkgray;
        font-weight: 600;
    }
  }

  .tiles:hover{
      cursor: pointer;
  }
`;

const SideBar = () => {

    const conversations   = useSelector(state => state.chat.conversations);
    const [sender ,selectedSender] = useState();
    const dispatch = useDispatch();
    
    
    function truncateString(string, limit) {
      if (string.length > limit) {
        return string.substring(0, limit) + "..."
      } else {
        return string
      }
    }
    const submitHandler = (profile) =>{
        dispatch(select(profile))    
    }

  
    
  return (
    <SideBarStyle>
      <div className="search">
        <div>
          <i className="fas fa-search"></i>
          <input type="text" id="fname" name="fname" placeholder="Search..." />
        </div>
        <i className="fas fa-plus-square"></i>
      </div>


     
      {conversations.map((profile)=>(
        <div className="tiles" onClick={()=>submitHandler(profile)} key = {profile.dob}>
        <div>
          <img
            src={profile.avatar}
            className="photo"
            alt="profile-photo"
          />
        </div>
        <div>
          <h4>{profile.name} </h4>
          <p>
          {truncateString(profile.posts[0].sentence , 30)}
          </p>
        </div>
      </div>
      ))}



    </SideBarStyle>
  );
};

export default SideBar;
