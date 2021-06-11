import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
var faker = require('faker');


const HeaderStyle = styled.div`
  height: 25px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid  #b8b9c9;
  padding: 1rem 0;
  align-items: center;


  .icons {
    display: flex;

    .icon {
      font-size: 10pt;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      display: inline-block;
      margin-right: 5px;
    }

    .icon1 {
      background: #ff5c5c;
    }

    .icon2 {
      background: #ffbd4c;
    }

    .icon3 {
      background: #00ca56;
    }
  }

  .user-profile{
    display : flex;
    align-items : center;
    .photo{
        border-radius: 50%;
        width : 42px;
        height : 42px;
        margin : 0 5px;
    }

    .name{
        color : grey;
        margin : 0 5px;
        font-weight : 500;
    }

    .fa-chevron-down{
        font-size : 16px;
        padding : 2px;
        margin : 0 5px;
    }
  }
`;

const Header = () => {

  var randomCard = faker.helpers.createCard();



useEffect(()=>{
},[randomCard])



  



  return (
    <HeaderStyle>

      <div className="icons">
        <i className="icon icon1"></i>
        <i className="icon icon2"></i>
        <i className="icon icon3"></i>
      </div>


      <div className = "user-profile">

        <img src = {faker.image.avatar()}  className = "photo" alt ="profile-photo"></img>
        <p className = "name">{randomCard.name}</p>

        <i className="fas fa-chevron-down"></i>

      </div>
    </HeaderStyle>
  );
};

export default Header;
