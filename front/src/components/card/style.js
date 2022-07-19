import styled from "styled-components"

export const CardContainer=styled.div`
    background-color: white;
    width:300px;
    height: 350px;
    margin:10px;
    border-radius:10%;
    box-shadow: 08px 08px 10px black;
   :hover{
    width:310px;
    height: 360px;
   }

`
export const InfoContainer=styled.div`
      margin-left:20px;
     
`

export const Photo=styled.img`
    width:200px;
    margin-left:50px;
    
`
export const Name=styled.h2`
   
`
export const Price=styled.p`
      font-size: 1.3rem;
      color:green;
      font-weight: bold;
 
`
export const ButtonCart=styled.button`
      color:green;
      padding:10px;
      background-color:white;
      border-radius:50%;
      border: 1px solid green;
      :hover{
          background-color:green;
          color:white;
      }
 
`