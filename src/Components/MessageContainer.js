import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const MessageContainerStyle = styled.div`
  min-width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 60px);
  overflow: auto;

  .Sender-info {
    min-height: 50px;
    display: flex;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #b8b9c9;
    position: sticky;

    .user-profile {
      display: flex;
      align-items: center;
      .photo {
        border-radius: 50%;
        width: 42px;
        height: 42px;
        margin: 0 5px;
      }

      .name {
        color: gray;
        margin: 0 5px;
        font-weight: 500;
      }
    }
  }

  .icons {
    font-size: 1.5rem;
    color: #b8b9c9;

    i {
      margin-left: 1rem;
    }

    .highlight {
      color: #8e88e5;
    }
  }

  .writing-area {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fafafa;

    textarea {
      border: none;
      width: 800px;
      height: 45px;
      background: #fafafa;
      resize: none;
      outline: none;
    }
  }

  .display {
    height: 100%;
    padding: 1rem;
    overflow: auto;
    display: flex;
    flex-direction: column;

    .me {
      align-self: flex-end;
      padding: 10px;
      margin: 10px 0;
      background-color: #e9e9fe;
      border-radius: 5px;
      border-top-right-radius: 25px;
    }

    .other {
      align-self: flex-start;
      padding: 10px;
      margin: 10px 0;
      background-color: #8e88e5;
      border-radius: 5px ;
      border-top-left-radius: 25px;

    }
  }
`;

const MessageContainer = (props) => {
  const { selectedSender } = useSelector((state) => state.user);

  useEffect(() => {}, [selectedSender]);

  return (
    <MessageContainerStyle>
      <div className="Sender-info">
        <div className="user-profile">
          <img
            src={selectedSender.avatar}
            className="photo"
            alt="profile-photo"
          ></img>
          <p className="name">{selectedSender.name}</p>
        </div>

        <div className="icons">
          <i className="fas fa-comment-alt highlight"></i>
          <i className="fas fa-phone"></i>
          <i className="fas fa-video"></i>
        </div>
      </div>

      <div className="display">
        {selectedSender.posts.map((post, index) =>
          index % 2 === 0 ? (
            <div className="other">
              <p>{post.sentence}</p>
            </div>
          ) : (
            <div className=" me ">
              <p>{post.sentence}</p>
            </div>
          )
        )}
      </div>

      <div className="writing-area">
        <textarea id="w3review" name="w3review" placeholder="Write a message" />
        <div className="icons">
          <i className="fas fa-comment-alt "></i>
          <i className="fas fa-microphone"></i>
        </div>
      </div>
    </MessageContainerStyle>
  );
};

export default MessageContainer;
