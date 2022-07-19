import React from "react"
import { CardContainer, Photo, Name, Price, InfoContainer, ButtonCart} from "./style"
import { ShoppingCartOutlined } from '@ant-design/icons';
export default function Card(props){
    return(
        <CardContainer key={props.id}>
            <ButtonCart><ShoppingCartOutlined style={{ fontSize: '20px'}}/></ButtonCart>
            <Photo src={props.image} alt={props.name}/>
            <InfoContainer>
                <Name>{props.name}</Name>
                <Price>R$:{props.price}</Price>
                <p>marca:{props.brand}</p>
                <p>{props.description}</p>
                
            </InfoContainer>
        </CardContainer>
    )

  
}