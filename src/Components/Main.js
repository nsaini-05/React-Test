import React, { Fragment } from "react";
import SideBar from './SideBar'
import MessageContainer from './MessageContainer'
import styled from "styled-components";


const MainStyle = styled.div`
display: flex;


`

 const Main = () =>{
     return(
        <Fragment> 
        <MainStyle>
        <SideBar/>
        <MessageContainer/>
        </MainStyle>
        </Fragment>
 
     )

}


export default Main; 